import { saveCareerApplication } from '../services/career.service';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        // Basic validation
        if (!body.full_name || !body.email || !body.mobile || !body.highest_qualification) {
            return {
                success: false,
                message: 'Missing required fields'
            };
        }

        const id = await saveCareerApplication(body);

        return {
            success: true,
            id,
            message: 'Application submitted successfully'
        };

    } catch (error) {
        console.error('API Error (career):', error);
        return {
            success: false,
            message: 'Internal Server Error'
        };
    }
});
