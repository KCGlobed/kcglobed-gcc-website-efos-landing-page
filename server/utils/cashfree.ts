// Cashfree PG v5 helper — creates a configured Cashfree instance
// Uses PRODUCTION credentials only for gccschool.com; all other hosts use SANDBOX (test) credentials.
import { Cashfree, CFEnvironment } from "cashfree-pg";
import type { H3Event } from "h3";

export function createCashfreeInstance(config: any, event?: H3Event) {
    // ── Determine environment based on request host ───────────────────────────
    const host = event
        ? (getRequestHeader(event, "host") || getRequestHeader(event, "x-forwarded-host") || "")
        : "";

    const isProd = host === "www.gccschool.com" || host === "gccschool.com";
    const cfEnvironment = isProd ? "PRODUCTION" : "SANDBOX";

    const appId = (isProd
        ? (config.cashfreeAppId || process.env.CASH_FREE_APP_ID_PROD)
        : (config.cashfreeAppIdDev || process.env.CASH_FREE_APP_ID_DEV)
    )?.toString().trim() || "";

    const secretKey = (isProd
        ? (config.cashfreeSecretKey || process.env.CASH_FREE_SECRET_KEY_PROD)
        : (config.cashfreeSecretKeyDev || process.env.CASH_FREE_SECRET_KEY_DEV)
    )?.toString().trim() || "";

    if (!appId || !secretKey) {
        throw new Error(`Cashfree ${cfEnvironment} keys missing in ENV/Config`);
    }

    const instance = new Cashfree(
        isProd ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX,
        appId,
        secretKey
    );

    console.log(`[PAYMENT] Cashfree initialized — host: "${host}", environment: ${cfEnvironment}`);

    return { instance, isProd, cfEnvironment, appId };
}

