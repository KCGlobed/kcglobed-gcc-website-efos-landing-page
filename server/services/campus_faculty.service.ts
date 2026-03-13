import { pool } from '../utils/db';

export async function saveCampusFaculty(data: any) {
    const query = `
    INSERT INTO campus_faculty (
      full_name,
      email,
      mobile,
      city,
      state,
      address,
      institution_name,
      department,
      designation,
      teaching_experience,
      industrial_experience,
      highest_qualification,
      motivation,
      support_activities,
      student_reach,
      consent
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16
    )
    RETURNING id
  `;

    const values = [
        data.full_name?.trim(),
        data.email?.toLowerCase(),
        data.mobile,
        data.city,
        data.state,
        data.address,
        data.institution_name,
        data.department,
        data.designation,
        data.teaching_experience,
        data.industrial_experience || null,
        data.highest_qualification,
        data.motivation,
        JSON.stringify(Array.isArray(data.support_activities) ? data.support_activities : []),
        data.student_reach,
        Boolean(data.consent)
    ];

    try {
        const result = await pool.query(query, values);
        return result.rows[0].id;
    } catch (error) {
        console.error('Postgres Insert Error (campus_faculty):', error);
        throw error;
    }
}
