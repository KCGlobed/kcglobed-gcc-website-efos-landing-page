import { pool } from '../utils/db';

export async function savePartnerWithUs(data: any) {
  const query = `
    INSERT INTO partner_with_us (
      organization_name,
      year_of_establishment,
      organization_type,
      organization_type_other,
      website,
      contact_name,
      designation,
      email,
      mobile,
      city,
      state,
      interests,
      description,
      value_add,
      declaration
    )
    VALUES (
      $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15
    )
    RETURNING id
  `;

  const values = [
    data.organization_name?.trim(),
    data.year_of_establishment,
    data.organization_type,
    data.organization_type_other || null,
    data.website || null,
    data.contact_name?.trim(),
    data.designation?.trim(),
    data.email?.toLowerCase(),
    data.mobile,
    data.city,
    data.state,
    JSON.stringify(Array.isArray(data.interests) ? data.interests : []),
    data.description || null,
    data.value_add || null,
    Boolean(data.declaration)
  ];

  try {
    const result = await pool.query(query, values);
    return result.rows[0].id;
  } catch (error) {
    console.error('Postgres Insert Error (partner_with_us):', error);
    throw error;
  }
}
