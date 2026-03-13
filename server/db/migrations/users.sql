CREATE TABLE users (
  id SERIAL PRIMARY KEY,

  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,

  father_name VARCHAR(100),
  father_mobile VARCHAR(20),
  father_email VARCHAR(150),
  father_occupation VARCHAR(100),

  mother_name VARCHAR(100),
  mother_mobile VARCHAR(20),
  mother_email VARCHAR(150),
  mother_occupation VARCHAR(100),

  dob DATE NOT NULL,
  gender VARCHAR(20) NOT NULL,
  nationality VARCHAR(50) DEFAULT 'Indian',

  email VARCHAR(150) NOT NULL,
  mobile VARCHAR(20) NOT NULL,

  city VARCHAR(100),
  state VARCHAR(100),
  pin_code VARCHAR(10),

  class10_year INT,
  class10_score FLOAT,

  class12_year INT,
  class12_score FLOAT,

  medium_of_instruction VARCHAR(50),
  medium_other VARCHAR(100),

  ug_status VARCHAR(20),
  first_division BOOLEAN,
  ug_cgpa FLOAT,
  ug_institution VARCHAR(200),

  pg_exists BOOLEAN,
  pg_type VARCHAR(50),
  pg_other VARCHAR(100),
  pg_institution VARCHAR(200),

  highest_qualification VARCHAR(100),
  university VARCHAR(200),
  semester INT,
  cgpa FLOAT,
  graduation_year INT,

  work_experience JSONB,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);