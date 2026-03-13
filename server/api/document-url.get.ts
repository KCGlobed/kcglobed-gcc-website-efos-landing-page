import { pool } from '../utils/db'
import { generateSignedUrl } from '../services/gcp'

export default defineEventHandler(async (event) => {
    const id = getQuery(event).id

    const { rows } = await pool.query(
        "SELECT gcs_path FROM application_documents WHERE id = $1",
        [id]
    )

    if (!rows.length) {
        return { success: false, message: "Document not found" }
    }

    const signedUrl = await generateSignedUrl(rows[0].gcs_path)

    return {
        success: true,
        url: signedUrl
    }
})