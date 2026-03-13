export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const url = query.url as string;
    const filename = query.filename as string || 'document.pdf';

    if (!url) {
        throw createError({
            statusCode: 400,
            statusMessage: 'URL is required',
        });
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw createError({
                statusCode: response.status,
                statusMessage: 'Failed to fetch the file from source',
            });
        }

        // Get the content type from the source response
        const contentType = response.headers.get('content-type') || 'application/octet-stream';

        // Set headers to force download
        setHeaders(event, {
            'Content-Type': contentType,
            'Content-Disposition': `attachment; filename="${filename}"`,
        });

        // Return the stream
        return response.body;
    } catch (error: any) {
        console.error('Download Proxy Error:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error during download proxy',
        });
    }
});
