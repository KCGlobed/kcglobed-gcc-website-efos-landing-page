export default defineEventHandler((event) => {
    const host = getRequestHeader(event, "host");

    if (host === "gccschool.com") {
        return sendRedirect(
            event,
            `https://www.gccschool.com${event.node.req.url}`,
            301
        );
    }
});