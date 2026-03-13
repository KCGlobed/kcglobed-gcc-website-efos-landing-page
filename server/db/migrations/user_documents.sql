CREATE TABLE user_documents (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  document_type VARCHAR(50) NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  gcs_path TEXT NOT NULL,
  file_size INT NOT NULL,
  file_type VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT fk_user
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);
