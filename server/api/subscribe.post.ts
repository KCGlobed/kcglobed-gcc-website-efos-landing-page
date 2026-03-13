import { subscribeToNewsletter } from "../services/newsletter.service";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    // console.log(body.email)

    if (!body.email) {
        throw createError({
            statusCode: 400,
            message: "Email is required"
        });
    }

    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
        throw createError({
            statusCode: 400,
            message: "Invalid email format"
        });
    }

    try {
        const isNew = await subscribeToNewsletter(body.email);
        return {
            success: true,
            message: isNew ? "You’re subscribed. Watch your inbox for news and insights" : "You are already subscribed",
        };
    } catch (error: any) {
        console.error("Newsletter Subscription Error:", error);
        throw createError({
            statusCode: 500,
            message: "Failed to subscribe"
        });
    }
});
