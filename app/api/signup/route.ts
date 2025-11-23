// app/api/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const adminEmail = process.env.ADMIN_EMAIL;
const developerEmail = process.env.DEVELOPER_EMAIL;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// Encryption constants
const ALGORITHM = 'aes-256-gcm';
let KEY: Buffer; // initialized inside POST
const IV_LENGTH = 12;

function encrypt(text: string) {
  if (!text || typeof text !== 'string') throw new Error('Text to encrypt must be a non-empty string');
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const tag = cipher.getAuthTag().toString('hex');
  return { encrypted, iv: iv.toString('hex'), tag };
}

function hashForSearching(text: string) {
  if (!text || !text.trim()) return null;
  return crypto.createHash('sha256').update(text.toLowerCase().trim()).digest('hex');
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  return /^\d{10}$/.test(phone);
}

function validatePassword(password: string) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

// POST handler
export async function POST(req: NextRequest) {
  if (!process.env.ENCRYPTION_KEY) {
    console.error('ENCRYPTION_KEY missing');
    return NextResponse.json({ error: 'Server misconfigured: ENCRYPTION_KEY missing' }, { status: 500 });
  }

  try {
    KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
  } catch (e) {
    console.error('Invalid ENCRYPTION_KEY', e);
    return NextResponse.json({ error: 'Server misconfigured: invalid ENCRYPTION_KEY' }, { status: 500 });
  }

  const body = await req.json();
  const { fullName, email, phone, password, dob } = body;

  if (!fullName || !email || !phone || !password || !dob) {
    return NextResponse.json({ error: 'All fields required: fullName, email, phone, password, dob' }, { status: 400 });
  }

  const dobDate = new Date(dob);
  if (isNaN(dobDate.getTime())) return NextResponse.json({ error: 'Invalid date of birth format' }, { status: 400 });

  if (!validateEmail(email)) return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  if (!validatePhone(phone)) return NextResponse.json({ error: 'Invalid phone number format (10 digits required)' }, { status: 400 });
  if (!validatePassword(password)) return NextResponse.json({ error: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character' }, { status: 400 });

  const client = await pool.connect();

  let role = 'user';
  if (email === adminEmail) role = 'Admin';
  else if (email === developerEmail) role = 'Developer';

  try {
    await client.query('BEGIN');

    const emailHash = hashForSearching(email);
    const phoneHash = hashForSearching(phone);

    const existingUser = await client.query(
      'SELECT * FROM users WHERE email_hash = $1 OR phone_number_hash = $2',
      [emailHash, phoneHash]
    );

    if (existingUser.rows.length > 0) {
      await client.query('ROLLBACK');
      return NextResponse.json({ error: 'Email or phone number already registered' }, { status: 400 });
    }

    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || firstName;

    const encryptedFirst = encrypt(firstName);
    const encryptedLast = encrypt(lastName);
    const encryptedEmail = encrypt(email);
    const encryptedPhone = encrypt(phone);
    const encryptedDob = encrypt(dob);

    const firstEnc = await client.query(
      'INSERT INTO encryptedobject (encrypted, iv, tag, created_at) VALUES ($1,$2,$3,$4) RETURNING id',
      [encryptedFirst.encrypted, encryptedFirst.iv, encryptedFirst.tag, new Date()]
    );

    const lastEnc = await client.query(
      'INSERT INTO encryptedobject (encrypted, iv, tag, created_at) VALUES ($1,$2,$3,$4) RETURNING id',
      [encryptedLast.encrypted, encryptedLast.iv, encryptedLast.tag, new Date()]
    );

    const emailEnc = await client.query(
      'INSERT INTO encryptedobject (encrypted, iv, tag, created_at) VALUES ($1,$2,$3,$4) RETURNING id',
      [encryptedEmail.encrypted, encryptedEmail.iv, encryptedEmail.tag, new Date()]
    );

    const phoneEnc = await client.query(
      'INSERT INTO encryptedobject (encrypted, iv, tag, created_at) VALUES ($1,$2,$3,$4) RETURNING id',
      [encryptedPhone.encrypted, encryptedPhone.iv, encryptedPhone.tag, new Date()]
    );

    const dobEnc = await client.query(
      'INSERT INTO encryptedobject (encrypted, iv, tag, created_at) VALUES ($1,$2,$3,$4) RETURNING id',
      [encryptedDob.encrypted, encryptedDob.iv, encryptedDob.tag, new Date()]
    );

    const passwordHash = await bcrypt.hash(password, 12);

    const userResult = await client.query(
      `INSERT INTO users (
        first_name_id, last_name_id, email_id, email_hash, "passwordHash",
        phone_number_id, phone_number_hash, dob_id, role
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id`,
      [
        firstEnc.rows[0].id,
        lastEnc.rows[0].id,
        emailEnc.rows[0].id,
        emailHash,
        passwordHash,
        phoneEnc.rows[0].id,
        phoneHash,
        dobEnc.rows[0].id,
        role
      ]
    );

    await client.query('COMMIT');

    return NextResponse.json({
      success: true,
      message: 'Registration successful! You can now login on the mobile app.',
      userId: userResult.rows[0].id
    }, { status: 201 });

  } catch (err: any) {
    await client.query('ROLLBACK');
    console.error('Registration error:', err);
    return NextResponse.json({
      error: 'Registration failed',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }, { status: 500 });
  } finally {
    client.release();
  }
}
