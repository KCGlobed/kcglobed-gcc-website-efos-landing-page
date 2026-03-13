import formidable from 'formidable'
import fs from 'fs'
import { bucket } from '../services/gcp'

export const config = {
    api: {
        bodyParser: false
    }
}

const MAX_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']

export default defineEventHandler(async (event) => {
    const form = formidable({ maxFileSize: MAX_SIZE })

    try {
        const { files } = await new Promise<any>((resolve, reject) => {
            form.parse(event.node.req, (err, fields, files) => {
                if (err) reject(err)
                else resolve({ fields, files })
            })
        })

        const file = files.file?.[0]

        if (!file) {
            return { success: false, message: "No file uploaded" }
        }

        if (!ALLOWED_TYPES.includes(file.mimetype)) {
            return { success: false, message: "Invalid file format (PDF/DOC only)" }
        }

        const gcsPath = `career-resumes/${Date.now()}-${file.originalFilename}`

        await bucket.upload(file.filepath, {
            destination: gcsPath,
            metadata: {
                contentType: file.mimetype
            }
        })

        fs.unlinkSync(file.filepath)

        return {
            success: true,
            path: gcsPath,
            message: "Resume uploaded successfully"
        }
    } catch (error: any) {
        console.error('Upload Error:', error)

        let message = "Upload failed"
        if (error.code === 'ENOENT') message = "File not found"
        if (error.code === 403) message = "GCP Permission Denied. Check Service Account."
        if (error.code === 404) message = "GCP Bucket not found."

        return {
            success: false,
            message: message,
            debug: process.env.NODE_ENV === 'development' ? error.message : undefined
        }
    }
})
