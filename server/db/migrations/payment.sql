CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students_data(id) ON DELETE CASCADE,
  form_type INT,
  form_id INT,
  razorpay_order_id VARCHAR(255),
  razorpay_payment_id VARCHAR(255),
  razorpay_signature VARCHAR(255),
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  status VARCHAR(50) DEFAULT 'pending',
  response JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Run these on your live DB if the table already exists with NOT NULL constraints:
-- ALTER TABLE payments ALTER COLUMN student_id DROP NOT NULL;
-- ALTER TABLE payments ALTER COLUMN form_type DROP NOT NULL;
-- ALTER TABLE payments ALTER COLUMN form_id DROP NOT NULL;
