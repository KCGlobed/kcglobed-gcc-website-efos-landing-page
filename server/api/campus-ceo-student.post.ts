import { defineEventHandler, readBody } from 'h3';
import { saveCampusStudent } from '~/server/services/campus_student.service';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const id = await saveCampusStudent(body);

        return {
            success: true,
            message: 'Application submitted successfully',
            data: { id }
        };
    } catch (error: any) {
        console.error('API Error (campus-ceo-student):', error);
        return {
            success: false,
            message: 'Failed to submit application. Please try again.',
            error: error.message
        };
    }
});
