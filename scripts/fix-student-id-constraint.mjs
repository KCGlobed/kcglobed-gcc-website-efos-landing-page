import pg from 'pg';
import { config } from 'dotenv';

config(); // load .env

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
    ssl: { rejectUnauthorized: false }
});

async function run() {
    const client = await pool.connect();
    try {
        console.log('Connected to DB. Checking column...');

        const check = await client.query(`
      SELECT is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'payments' AND column_name = 'student_id'
    `);

        if (check.rows.length === 0) {
            console.log('Column student_id not found. Nothing to do.');
            return;
        }

        const isNullable = check.rows[0].is_nullable;
        console.log(`student_id is currently: nullable=${isNullable}`);

        if (isNullable === 'NO') {
            console.log('Dropping NOT NULL constraint on student_id...');
            await client.query(`ALTER TABLE payments ALTER COLUMN student_id DROP NOT NULL`);
            console.log('✅ Done! student_id is now nullable.');
        } else {
            console.log('✅ student_id is already nullable — no changes needed.');
        }
    } finally {
        client.release();
        await pool.end();
    }
}

run().catch(err => {
    console.error('❌ Migration failed:', err.message);
    process.exit(1);
});
