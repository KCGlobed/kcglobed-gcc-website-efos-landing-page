// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    // baseURL: "/tuva/",
    head: {
      meta: [
        { name: 'google-site-verification', content: 'O_n2cuv-YeR9IgQt1HCNWTCY7aIvfyJfpB59jnIEau0' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-B2ETHYM6MN',
          async: true
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B2ETHYM6MN');`
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/jpg',
          href: '/favicon.jpg', // ya /favicon.ico
        },
      ],
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
    layoutTransition: {
      name: "slide",
      mode: "out-in",
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "/assets/fonts/tabler-icons.css",
    "/assets/scss/style.css",
    "/assets/scss/responsive.css",
  ],
  modules: ["@bootstrap-vue-next/nuxt", "nuxt-swiper", "nuxt-aos"],
  runtimeConfig: {

    // ── Razorpay (disabled – kept for reference) ──────────────────────────────
    razorpayKeyId: process.env.RAZORPAY_KEY_ID,
    razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET,
    razorpayCurrency: process.env.RAZORPAY_CURRENCY || 'INR',
    razorpayAmount: process.env.RAZORPAY_PAYMENT_AMOUNT || '2950',

    // ── Cashfree ──────────────────────────────────────────────────────────────
    cashfreeAppId: process.env.CASH_FREE_APP_ID_PROD,
    cashfreeSecretKey: process.env.CASH_FREE_SECRET_KEY_PROD,
    cashfreeAppIdDev: process.env.CASH_FREE_APP_ID_DEV,
    cashfreeSecretKeyDev: process.env.CASH_FREE_SECRET_KEY_DEV,
    // Set to 'SANDBOX' for test, 'PRODUCTION' for live
    cashfreeEnvironment: process.env.CASHFREE_ENVIRONMENT || 'PRODUCTION',
    cashfreePaymentAmount: process.env.CASHFREE_PAYMENT_AMOUNT || '2950',

    // ── Email ─────────────────────────────────────────────────────────────────
    emailHost: process.env.EMAIL_HOST,
    emailUser: process.env.EMAIL_HOST_USER,
    emailPassword: process.env.EMAIL_HOST_PASSWORD,

    public: {
      paymentAmount: process.env.PAYMENT_AMOUNT,
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      nfetDates: process.env.NUXT_PUBLIC_NFET_DATES || '',
      nfetSlots: process.env.NUXT_PUBLIC_NFET_SLOTS || '',
      nfetSlotBufferHours: process.env.NUXT_PUBLIC_NFET_SLOT_BUFFER_HOURS || '48',
    }
  },
  plugins: ["~/plugins/scrollReveal.ts"],
  aos: {
    duration: 1000,
    once: true,
  },
  nitro: {
    preset: 'node-server',
    compressPublicAssets: true,
    output: {
      dir: "dist",
      serverDir: "dist/server",
    },
  },
});


