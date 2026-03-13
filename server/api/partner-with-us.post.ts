import { savePartnerWithUs } from "../services/partner_with_us.service";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // Validate required fields
    // const requiredFields = [
    //     'organizationName', 'yearOfEstablishment', 'organizationType', 'organizationTypeOther', 'website', 'contactName', 'designation', 'email', 'mobile', 'city', 'state', 'interests', 'description', 'valueAdd', 'declaration'
    // ];

    // for (const field of requiredFields) {
    //     if (!body[field]) {
    //         throw createError({
    //             statusCode: 400,
    //             message: `Missing required field: ${field}`
    //         });
    //     }
    // }

    try {
        const id = await savePartnerWithUs(body);
        return {
            success: true,
            message: "Partner With Us submitted successfully",
            id: id
        };
    } catch (error: any) {
        console.error("Partner With Us Submission Error:", error);
        throw createError({
            statusCode: 500,
            message: "Failed to submit Partner With Us"
        });
    }
});