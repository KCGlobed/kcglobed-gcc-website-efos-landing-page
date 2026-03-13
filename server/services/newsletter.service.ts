import { pool } from '../utils/db';

export async function subscribeToNewsletter(email: string) {
    const query = `
        INSERT INTO newsletter_subscribers (email)
        VALUES ($1)
        ON CONFLICT (email) DO NOTHING
        RETURNING id;
    `;

    // ON CONFLICT DO NOTHING will simply not insert duplicates. 
    // If we want to tell the user they are already subscribed, we might want to check existence first or use DO UPDATE/returning ID.
    // Given the requirement "make api ,services ,migrations", simple insertion is good. 
    // If id is returned, it was a new subscription. If null/undefined, it was a duplicate (because of DO NOTHING).

    const values = [email];
    const result = await pool.query(query, values);

    return (result.rowCount ?? 0) > 0; // true if inserted, false if duplicate
}
