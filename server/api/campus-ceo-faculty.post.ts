import { saveCampusFaculty } from '../services/campus_faculty.service';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        // Basic validation
        if (!body.full_name || !body.email || !body.mobile || !body.institution_name) {
            return {
                success: false,
                message: 'Missing required fields'
            };
        }

        const id = await saveCampusFaculty(body);

        return {
            success: true,
            id,
            message: 'Application submitted successfully'
        };

    } catch (error) {
        console.error('API Error (campus-ceo-faculty):', error);
        return {
            success: false,
            message: 'Internal Server Error'
        };
    }
});
