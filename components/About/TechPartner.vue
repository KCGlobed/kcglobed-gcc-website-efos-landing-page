<template>
    <div class="tech-partner-section">
        <div class="container">
            <div class="partner-card">
                <!-- Knowledge Partners -->
                <div class="partner-group">
                    <div class="group-header dark-purple">KNOWLEDGE PARTNERS</div>
                    <div class="partner-rows">
                        <div class="partner-row">
                            <div class="partner-logo">
                                <span class="placeholder-logo">ACCA</span>
                            </div>
                            <div class="partner-info"><strong>International</strong> Certification Body</div>
                        </div>
                        <div class="partner-row">
                            <div class="partner-logo">
                                <img src="~/assets/img/companylogo/1.png" alt="KC Globed">
                            </div>
                            <div class="partner-info">Subject Matter <strong>Expert</strong></div>
                        </div>
                        <div class="partner-row">
                            <div class="partner-logo">
                                <img src="~/assets/img/companylogo/2.png" alt="British Council">
                            </div>
                            <div class="partner-info"><strong>Global</strong> English Academy</div>
                        </div>
                        <div class="partner-row">
                            <div class="partner-logo">
                                <img src="~/assets/img/companylogo/3.png" alt="AIMA">
                            </div>
                            <div class="partner-info"><strong>AICTE</strong> Approved <strong>PGCM</strong> Certifying
                                Body</div>
                        </div>
                        <div class="partner-row border-none">
                            <div class="partner-logo">
                                <img src="~/assets/img/companylogo/4.png" alt="University of London">
                            </div>
                            <div class="partner-info"><strong>Conferring</strong> University</div>
                        </div>
                    </div>
                </div>

                <!-- Testing & Technical Partners -->
                <div class="partner-group">
                    <div class="group-header">TESTING & TECHNICAL PARTNERS</div>
                    <div class="partner-rows">
                        <div class="partner-row">
                            <div class="partner-logo">
                                <img src="~/assets/img/companylogo/6.png" alt="Aon">
                            </div>
                            <div class="partner-info"><strong>Testing</strong> Partner</div>
                        </div>
                        <div class="partner-row border-none">
                            <div class="partner-logo">
                                <img src="~/assets/img/companylogo/7.png" alt="meritto">
                            </div>
                            <div class="partner-info"><strong>Technical</strong> Support Partner</div>
                        </div>
                    </div>
                </div>

                <!-- Financing Partners -->
                <div class="partner-group mb-0">
                    <div class="group-header">FINANCING PARTNERS</div>
                    <div class="financing-logos">
                        <div class="fin-logo">
                            <img src="~/assets/img/companylogo/8.png" alt="HDFC Credila">
                        </div>
                        <div class="fin-logo">
                            <img src="~/assets/img/companylogo/9.png" alt="Bajaj Finserv">
                        </div>
                        <div class="fin-logo">
                            <img src="~/assets/img/companylogo/10.png" alt="Yes Bank">
                        </div>
                        <div class="fin-logo">
                            <img src="~/assets/img/companylogo/11.png" alt="Avanse">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.tech-partner-section {
    padding: 100px 0;
    background-color: #f0f2f5;
    font-family: 'Inter', sans-serif;
}

.partner-card {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
    padding: 0;
    /* Remove padding to handle headers better */
    max-width: 900px;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid #eaeaea;
}

.partner-group {
    padding: 40px;
}

.group-header {
    background-color: #7b2cbf;
    /* Rich Purple */
    color: white;
    text-align: center;
    padding: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 1.15rem;
    text-transform: uppercase;
    margin: 0;
}

.group-header.dark-purple {
    background-color: #24224a;
    /* Precise Deep Navy */
}

.partner-rows {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
}

.partner-row {
    display: flex;
    align-items: center;
    padding: 22px 0;
    border-bottom: 1px solid #f0f0f0;
}

.border-none {
    border-bottom: none !important;
}

.partner-logo {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.partner-logo img {
    max-height: 45px;
    max-width: 220px;
    width: auto;
    object-fit: contain;
    /* filter: grayscale(100%); */
    /* Maintain professional look, user can remove if needed */
    transition: filter 0.3s ease;
}

.partner-logo img:hover {
    filter: grayscale(0%);
}

.placeholder-logo {
    font-weight: 900;
    font-size: 1.6rem;
    color: #1a1a1a;
    letter-spacing: -1px;
}

.partner-info {
    flex: 1.2;
    font-size: 1.1rem;
    color: #444;
    text-align: left;
    padding-left: 20px;
    line-height: 1.4;
}

.partner-info strong {
    font-weight: 700;
    color: #111;
}

.financing-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 10px;
    flex-wrap: wrap;
    gap: 40px;
}

.fin-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 140px;
}

.fin-logo img {
    max-height: 35px;
    max-width: 100%;
    object-fit: contain;
    /* filter: grayscale(100%); */
    transition: filter 0.3s ease;
}

.fin-logo img:hover {
    /* filter: grayscale(0%); */
}

@media (max-width: 991px) {
    .partner-card {
        max-width: 95%;
    }

    .partner-group {
        padding: 30px;
    }

    .partner-logo img {
        max-height: 40px;
    }
}

@media (max-width: 768px) {
    .tech-partner-section {
        padding: 60px 0;
    }

    .partner-group {
        padding: 25px 15px;
    }

    .group-header {
        font-size: 1rem;
        padding: 12px;
        letter-spacing: 1px;
    }

    .partner-row {
        flex-direction: column;
        gap: 15px;
        padding: 25px 0;
    }

    .partner-info {
        padding-left: 0;
        text-align: center;
        font-size: 0.95rem;
    }

    .partner-logo img {
        max-height: 35px;
    }

    .financing-logos {
        gap: 30px;
        padding: 20px 0;
    }

    .fin-logo {
        min-width: 40%;
    }

    .fin-logo img {
        max-height: 30px;
    }
}

@media (max-width: 480px) {
    .partner-card {
        border-radius: 12px;
    }

    .group-header {
        font-size: 0.9rem;
    }

    .partner-info {
        font-size: 0.9rem;
    }

    .fin-logo {
        min-width: 100%;
    }
}
</style>
