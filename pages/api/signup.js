// pages/api/auth/register.js
import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Encryption functions (same as your mobile backend)
const ALGORITHM = 'aes-256-gcm';
const KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
const IV_LENGTH = 12;

function encrypt(text) {
    if (!text || typeof text !== 'string') {
        throw new Error('Text to encrypt must be a non-empty string');
    }
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const tag = cipher.getAuthTag().toString('hex');
    return {
        encrypted,
        iv: iv.toString('hex'),
        tag
    };
}

function hashForSearching(text) {
    if (!text || typeof text !== 'string' || text.trim() === '') {
        return null;
    }
    return crypto.createHash('sha256').update(text.toLowerCase().trim()).digest('hex');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { fullName, email, phone, password } = req.body;

    // Validation
    if (!fullName || !email || !phone || !password) {
        return res.status(400).json({
            error: 'All fields required: fullName, email, phone, password'
        });
    }

    if (!validateEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    if (!validatePhone(phone)) {
        return res.status(400).json({
            error: 'Invalid phone number format (10 digits required)'
        });
    }

    if (!validatePassword(password)) {
        return res.status(400).json({
            error: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
        });
    }

    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // Check if user already exists
        const emailHash = hashForSearching(email);
        const phoneHash = hashForSearching(phone);

        const existingUser = await client.query(
            'SELECT * FROM users WHERE email_hash = $1 OR phone_number_hash = $2',
            [emailHash, phoneHash]
        );

        if (existingUser.rows.length > 0) {
            await client.query('ROLLBACK');
            return res.status(400).json({
                error: 'Email or phone number already registered'
            });
        }

        // Split full name
        const nameParts = fullName.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ') || firstName;

        // Encrypt PII
        const encryptedFirst = encrypt(firstName);
        const encryptedLast = encrypt(lastName);
        const encryptedEmail = encrypt(email);
        const encryptedPhone = encrypt(phone);

        // Store encrypted data
        const firstEnc = await client.query(
            'INSERT INTO encryptedobject (encrypted, iv, tag) VALUES ($1, $2, $3) RETURNING id',
            [encryptedFirst.encrypted, encryptedFirst.iv, encryptedFirst.tag]
        );

        const lastEnc = await client.query(
            'INSERT INTO encryptedobject (encrypted, iv, tag) VALUES ($1, $2, $3) RETURNING id',
            [encryptedLast.encrypted, encryptedLast.iv, encryptedLast.tag]
        );

        const emailEnc = await client.query(
            'INSERT INTO encryptedobject (encrypted, iv, tag) VALUES ($1, $2, $3) RETURNING id',
            [encryptedEmail.encrypted, encryptedEmail.iv, encryptedEmail.tag]
        );

        const phoneEnc = await client.query(
            'INSERT INTO encryptedobject (encrypted, iv, tag) VALUES ($1, $2, $3) RETURNING id',
            [encryptedPhone.encrypted, encryptedPhone.iv, encryptedPhone.tag]
        );

        // Hash password
        const passwordHash = await bcrypt.hash(password, 12);

        // Create user
        const userResult = await client.query(
            `INSERT INTO users (
                first_name_id,
                last_name_id,
                email_id,
                email_hash,
                "passwordHash",
                phone_number_id,
                phone_number_hash,
                role,
                phone_verified,
                email_verified
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id`,
            [
                firstEnc.rows[0].id,
                lastEnc.rows[0].id,
                emailEnc.rows[0].id,
                emailHash,
                passwordHash,
                phoneEnc.rows[0].id,
                phoneHash,
                'user',
                false, // Phone not verified yet
                true   // Email verified via website form
            ]
        );

        await client.query('COMMIT');

        res.status(201).json({
            success: true,
            message: 'Registration successful! You can now login on the mobile app.',
            userId: userResult.rows[0].id
        });

    } catch (err) {
        await client.query('ROLLBACK');
        console.error('Registration error:', err);
        res.status(500).json({
            error: 'Registration failed',
            details: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    } finally {
        client.release();
    }
}
