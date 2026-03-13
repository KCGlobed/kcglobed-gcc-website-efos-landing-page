import { pool } from '../utils/db';

export async function saveEnquiry(data: any) {
    const query = `
    INSERT INTO student_enquiries (
      name,
      mobile,
      email,
      city,
      state,
      graduation_program,
      graduation_program_other,
      graduation_status,
      current_cgpa,
      first_division,
      college,
      source,
      remarks,
      pincode
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
    )
    RETURNING id
  `;

    const values = [
        data.name,
        data.mobile,
        data.email,
        data.city,
        data.state,
        data.graduation_program,
        data.graduation_program_other || '',
        data.graduation_status,
        data.current_cgpa,
        data.first_division,
        data.college,
        data.source,
        data.remarks || null,
        data.pincode
    ];

    const result = await pool.query(query, values);
    return result.rows[0].id;
}
