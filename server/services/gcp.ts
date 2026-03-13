import { Storage } from '@google-cloud/storage'
const storageConfig: any = {
    projectId: process.env.GCP_PROJECT_ID,
}

if (process.env.NODE_ENV !== 'production') {
    storageConfig.keyFilename = 'service-account.json'
}

export const storage = new Storage(storageConfig)

export const bucket = storage.bucket(process.env.GCP_BUCKET_NAME || 'asd')

export async function generateSignedUrl(filePath: string) {
    const [url] = await bucket.file(filePath).getSignedUrl({
        version: 'v4',
        action: 'read',
        expires: Date.now() + 15 * 60 * 1000 // 15 minutes
    })

    return url
}