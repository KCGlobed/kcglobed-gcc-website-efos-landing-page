import { pool } from '../server/utils/db'; // Adjust path if needed, but since we are running from root with node, might be tricky with aliases.
// Actually, let's just copy the connection logic to avoid ts/alias issues for a quick script
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

async function check() {
    try {
        const res = await pool.query("SELECT to_regclass('public.payments');");
        console.log('Table exists:', res.rows[0].to_regclass);
    } catch (e) {
        console.error(e);
    } finally {
        await pool.end();
    }
}
check();
