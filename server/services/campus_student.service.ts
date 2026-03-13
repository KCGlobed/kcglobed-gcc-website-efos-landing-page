import { pool } from '../utils/db';

export async function saveCampusStudent(data: any) {
  const query = `
    INSERT INTO campus_student (
      full_name,
      email,
      mobile,
      city,
      state,
      address,
      college_name,
      program_of_study,
      program_other,
      semester,
      student_body_member,
      student_body_description,
      campus_ambassador_history,
      campus_ambassador_description,
      inspiration,
      promotion_channels,
      student_reach,
      consent
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18
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
    data.college_name,
    data.program_of_study,
    data.program_other || null,
    data.semester,
    data.student_body_member,
    data.student_body_description || null,
    data.campus_ambassador_history,
    data.campus_ambassador_description || null,
    data.inspiration,
    JSON.stringify(Array.isArray(data.promotion_channels) ? data.promotion_channels : []),
    data.student_reach,
    Boolean(data.consent)
  ];

  try {
    const result = await pool.query(query, values);
    return result.rows[0].id;
  } catch (error) {
    console.error('Postgres Insert Error (campus_student):', error);
    throw error;
  }
}
