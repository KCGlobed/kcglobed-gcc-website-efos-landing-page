import { saveEnquiry } from "../services/student_enquiry.service";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // Validate required fields
    const requiredFields = [
        'name', 'mobile', 'email', 'city', 'state',
        'graduation_program', 'graduation_status',
        'college',
        'source', 'pincode'
    ];

    for (const field of requiredFields) {
        if (!body[field]) {
            throw createError({
                statusCode: 400,
                message: `Missing required field: ${field}`
            });
        }
    }

    try {
        const id = await saveEnquiry(body);
        return {
            success: true,
            message: "Enquiry submitted successfully",
            id: id
        };
    } catch (error: any) {
        console.error("Enquiry Submission Error:", error);
        throw createError({
            statusCode: 500,
            message: "Failed to submit enquiry"
        });
    }
});
