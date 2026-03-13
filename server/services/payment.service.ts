import { pool } from '../utils/db';

export async function savePayment(data: any) {
  const query = `
    INSERT INTO payments (
      form_type,
      form_id,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount,
      currency,
      status,
      response,
      dossier_form_id,
      source
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9,$10,$11
    )
    RETURNING id
  `;

  const values = [
    data.form_type ?? null,
    data.form_id ?? null,
    data.razorpay_order_id,
    data.razorpay_payment_id,
    data.razorpay_signature,
    data.amount,
    data.currency || 'INR',
    data.status || 'success',
    data.response,
    data.form_id,
    2
  ];

  const result = await pool.query(query, values);
  return result.rows[0].id;
}
