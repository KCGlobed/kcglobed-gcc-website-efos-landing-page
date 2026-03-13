CREATE TABLE IF NOT EXISTS campus_student (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(50) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    college_name VARCHAR(255) NOT NULL,
    program_of_study VARCHAR(255) NOT NULL,
    program_other VARCHAR(255),
    semester VARCHAR(255) NOT NULL,
    student_body_member VARCHAR(255) NOT NULL,
    student_body_description VARCHAR(1000),
    campus_ambassador_history VARCHAR(255) NOT NULL,
    campus_ambassador_description VARCHAR(1000),
    inspiration TEXT NOT NULL,
    promotion_channels JSONB NOT NULL,
    student_reach VARCHAR(255) NOT NULL,
    consent BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


