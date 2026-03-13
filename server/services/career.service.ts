import { pool } from '../utils/db';

export async function saveCareerApplication(data: any) {
    const query = `
    INSERT INTO career_application (
      full_name,
      email,
      mobile,
      city,
      state,
      highest_qualification,
      employment_status,
      experience_years,
      area_of_interest,
      area_of_interest_other,
      contribution_summary,
      resume_path,
      linkedin_profile,
      notice_period,
      consent
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15
    )
    RETURNING id
  `;

    const values = [
        data.full_name?.trim(),
        data.email?.toLowerCase(),
        data.mobile,
        data.city,
        data.state,
        data.highest_qualification,
        data.employment_status,
        data.experience_years,
        data.area_of_interest,
        data.area_of_interest_other || null,
        data.contribution_summary,
        data.resume_path || null,
        data.linkedin_profile || null,
        data.notice_period,
        Boolean(data.consent)
    ];

    try {
        const result = await pool.query(query, values);
        return result.rows[0].id;
    } catch (error) {
        console.error('Postgres Insert Error (career_application):', error);
        throw error;
    }
}
