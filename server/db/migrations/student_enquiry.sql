CREATE TABLE student_enquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    graduation_program VARCHAR(255),
    graduation_program_other VARCHAR(255) ,
    graduation_status VARCHAR(255),
    current_cgpa VARCHAR(255),
    first_division VARCHAR(255),
    college VARCHAR(255) NOT NULL,
    source VARCHAR(255) NOT NULL,
    remarks VARCHAR(255),
    pincode VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);