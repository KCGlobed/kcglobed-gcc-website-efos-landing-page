import formidable from 'formidable'
import fs from 'fs'
import { bucket } from '../services/gcp'
import { pool } from '../utils/db'

export const config = {
    api: {
        bodyParser: false
    }
}

const MAX_SIZE = 2 * 1024 * 1024
const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/png']

export default defineEventHandler(async (event) => {
    const form = formidable({ maxFileSize: MAX_SIZE })

    const { fields, files } = await new Promise<any>((resolve, reject) => {
        form.parse(event.node.req, (err, fields, files) => {
            if (err) reject(err)
            else resolve({ fields, files })
        })
    })

    const file = files.file?.[0]
    const userId = fields.user_id?.[0]
    const documentType = fields.document_type?.[0]

    if (!file || !userId || !documentType) {
        return { success: false, message: "Missing required data" }
    }

    if (!ALLOWED_TYPES.includes(file.mimetype)) {
        return { success: false, message: "Invalid file format" }
    }

    if (file.size > MAX_SIZE) {
        return { success: false, message: "File too large (Max 2MB)" }
    }

    const gcsPath = `users/${userId}/${Date.now()}-${file.originalFilename}`

    await bucket.upload(file.filepath, {
        destination: gcsPath,
        metadata: {
            contentType: file.mimetype
        }
    })

    await pool.query(
        `INSERT INTO student_documents
     (student_id, document_type, file_name, gcs_path, file_size, file_type)
     VALUES ($1, $2, $3, $4, $5, $6)`,
        [
            userId,
            documentType,
            file.originalFilename,
            gcsPath,
            file.size,
            file.mimetype
        ]
    )

    fs.unlinkSync(file.filepath)

    return {
        success: true,
        message: "File uploaded securely"
    }
})
