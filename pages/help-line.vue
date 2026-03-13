<template>
    <div>
        <LayoutTopHeader />
        <LayoutMainNavbar />
        <!-- Helpline Section -->
        <section class="helpline-section">
            <div class="helpline-outer-card">
                <h1 class="helpline-title">Helpline</h1>

                <div class="helpline-cards-row">
                    <!-- Phone Card -->
                    <a href="tel:+919773576111" class="helpline-card" id="helpline-phone-card">
                        <div class="card-icon-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <div class="card-divider"></div>
                        <div class="card-info">
                            <p class="card-primary">+91 9773576111</p>
                            <p class="card-secondary">Student Relations</p>
                        </div>
                    </a>

                    <!-- Email Card -->
                    <a href="mailto:info@gccschool.com" class="helpline-card" id="helpline-email-card">
                        <div class="card-icon-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                        </div>
                        <div class="card-divider"></div>
                        <div class="card-info">
                            <p class="card-primary">info@gccschool.com</p>
                            <p class="card-secondary">Write to Us</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <LayoutMainFooter />
        <LayoutCopyRight />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "GCC School | Helpline",
    meta: [
        {
            name: "description",
            content:
                "Contact GCC School helpline for student relations and support. Reach out via phone or email.",
        },
    ],
});
</script>

<style scoped>
.helpline-section {
    min-height: calc(100vh - 160px);
    background-color: #f0f0f8;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
}

.helpline-outer-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 50px 50px 60px;
    width: 100%;
    max-width: 700px;
    box-shadow: 0 4px 30px rgba(80, 20, 124, 0.07);
}

.helpline-title {
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    color: #1a1a2e;
    margin-bottom: 40px;
    letter-spacing: 0.3px;
}

.helpline-cards-row {
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Individual helpline card */
.helpline-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f6f6fb;
    border-radius: 14px;
    padding: 36px 28px 32px;
    flex: 1;
    min-width: 200px;
    max-width: 260px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1.5px solid transparent;
    cursor: pointer;
}

.helpline-card:hover {
    border-color: #7b3fa0;
    box-shadow: 0 8px 28px rgba(123, 63, 160, 0.14);
    transform: translateY(-4px);
    background: #fff;
    text-decoration: none;
}

/* Icon */
.card-icon-wrap {
    color: #2d2d4e;
    margin-bottom: 16px;
    transition: color 0.3s ease;
}

.helpline-card:hover .card-icon-wrap {
    color: #7b3fa0;
}

/* Divider line */
.card-divider {
    width: 32px;
    height: 2px;
    background: #d0cfe8;
    border-radius: 2px;
    margin-bottom: 18px;
    transition: background 0.3s ease;
}

.helpline-card:hover .card-divider {
    background: #7b3fa0;
}

/* Card text */
.card-info {
    text-align: center;
}

.card-primary {
    font-size: 15px;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 4px;
    line-height: 1.4;
}

.card-secondary {
    font-size: 13px;
    color: #5878c5;
    font-weight: 500;
    margin: 0;
}

/* Responsive */
@media (max-width: 600px) {
    .helpline-outer-card {
        padding: 36px 20px 40px;
    }

    .helpline-cards-row {
        flex-direction: column;
        align-items: center;
    }

    .helpline-card {
        width: 100%;
        max-width: 320px;
    }
}
</style>
