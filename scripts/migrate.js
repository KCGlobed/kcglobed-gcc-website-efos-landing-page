import { readFileSync } from 'fs';
import { resolve } from 'path';
import pg from 'pg';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
    ssl: { rejectUnauthorized: false },
});

// All tables that need timestamp fixes
// hasUpdatedAt: false means the table only has created_at (no updated_at column)
const tables = [
    { migrationFile: 'payment.sql', tableName: 'payments', hasUpdatedAt: true },
    { migrationFile: 'partner_with_us.sql', tableName: 'partner_with_us', hasUpdatedAt: true },
    { migrationFile: 'career_application.sql', tableName: 'career_application', hasUpdatedAt: true },
    { migrationFile: 'newsletter_subscribers.sql', tableName: 'newsletter_subscribers', hasUpdatedAt: false },
    { migrationFile: 'campus_faculty.sql', tableName: 'campus_faculty', hasUpdatedAt: true },
    { migrationFile: 'campus_student.sql', tableName: 'campus_student', hasUpdatedAt: true },
];

const runMigration = async () => {
    try {
        // Create the shared trigger function once
        console.log('Creating shared updated_at trigger function...');
        await pool.query(`
            CREATE OR REPLACE FUNCTION update_updated_at_column()
            RETURNS TRIGGER AS $$
            BEGIN
               NEW.updated_at = CURRENT_TIMESTAMP;
               RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;
        `);
        console.log('Trigger function ready.\n');

        for (const { migrationFile, tableName, hasUpdatedAt } of tables) {
            console.log(`\n=== ${tableName} ===`);

            // 1. Run the base migration (CREATE TABLE IF NOT EXISTS)
            const migrationPath = resolve(`server/db/migrations/${migrationFile}`);
            const sql = readFileSync(migrationPath, 'utf8');
            console.log(`  Running migration from ${migrationFile}...`);
            await pool.query(sql);

            // 2. Ensure created_at has DEFAULT CURRENT_TIMESTAMP
            console.log('  Setting created_at default...');
            await pool.query(`ALTER TABLE ${tableName} ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;`);

            // 3. Back-fill NULL created_at
            const createdBackfill = await pool.query(`
                UPDATE ${tableName} SET created_at = CURRENT_TIMESTAMP WHERE created_at IS NULL
            `);
            console.log(`  Back-filled ${createdBackfill.rowCount} row(s) with NULL created_at.`);

            if (hasUpdatedAt) {
                // 4. Ensure updated_at has DEFAULT CURRENT_TIMESTAMP
                console.log('  Setting updated_at default...');
                await pool.query(`ALTER TABLE ${tableName} ALTER COLUMN updated_at SET DEFAULT CURRENT_TIMESTAMP;`);

                // 5. Back-fill NULL updated_at
                const updatedBackfill = await pool.query(`
                    UPDATE ${tableName} SET updated_at = CURRENT_TIMESTAMP WHERE updated_at IS NULL
                `);
                console.log(`  Back-filled ${updatedBackfill.rowCount} row(s) with NULL updated_at.`);

                // 6. Create auto-update trigger for updated_at
                await pool.query(`
                    DROP TRIGGER IF EXISTS set_updated_at ON ${tableName};
                    CREATE TRIGGER set_updated_at
                      BEFORE UPDATE ON ${tableName}
                      FOR EACH ROW
                      EXECUTE FUNCTION update_updated_at_column();
                `);
                console.log('  updated_at trigger created.');
            }

            console.log(`  ✔ ${tableName} done.`);
        }

        console.log('\n\nAll migrations completed successfully!');
    } catch (error) {
        console.error('Error running migration:', error);
    } finally {
        await pool.end();
    }
};

runMigration();
