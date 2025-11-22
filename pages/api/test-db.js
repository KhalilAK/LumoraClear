
const { Pool } = require('pg');
require('dotenv').config({ path: '.env' });

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

async function testConnection() {
    try {
        const client = await pool.connect();
        console.log('✅ Database connected successfully!');
        console.log('Database:', process.env.DB_NAME);
        console.log('Host:', process.env.DB_HOST);

        // Check tables
        const tables = await client.query(`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
            ORDER BY table_name
        `);

        console.log('\n📋 Available tables:');
        tables.rows.forEach(r => console.log('  -', r.table_name));

        // Check user count
        const userCount = await client.query('SELECT COUNT(*) FROM users');
        console.log('\n👥 Total users:', userCount.rows[0].count);

        client.release();
        process.exit(0);
    } catch (err) {
        console.error('❌ Database connection failed:', err.message);
        console.error('Full error:', err);
        process.exit(1);
    }
}

testConnection();
