<template>
    <section class="core-values-section py-100">
        <div class="container">
            <div class="section-title text-center mb-50">
                <h2 class="title">CORE <span class="highlight">VALUES</span></h2>
            </div>

            <div class="values-grid shadow-lg">
                <div class="row g-0">
                    <!-- Row 1 -->
                    <div class="col-lg-4 col-md-6 border-bottom border-muted">
                        <div class="value-card white">
                            <div class="icon-box">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-gavel">
                                    <path d="m14 13-5 5 2 2 5-5-2-2Z" />
                                    <path d="m21 16-5 5-2-2 5-5 2 2Z" />
                                    <path d="m17 21-5-5" />
                                    <path d="m11 13 5 5" />
                                    <path d="m2 2 16 16" />
                                    <path d="m2 22 16-16" />
                                    <path d="m8 14 5 5" />
                                    <path d="m3 3 5 5" />
                                </svg>
                            </div>
                            <h3>ETHICAL PRACTICE</h3>
                            <p>Ethics & Integrity guides every action we take.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 border-bottom border-muted">
                        <div class="value-card purple accent-left">
                            <div class="icon-box">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-eye">
                                    <path
                                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3>TRANSPARENCY</h3>
                            <p>We communicate openly, honestly, and clearly- always.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 border-bottom border-muted">
                        <div class="value-card white accent-right">
                            <div class="icon-box">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-heart-handshake">
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.82 2.96 0" />
                                    <path d="m14 10 2 2" />
                                </svg>
                            </div>
                            <h3>EMPATHY</h3>
                            <p>We understand every stakeholder's journey and support it with care.</p>
                        </div>
                    </div>

                    <!-- Row 2 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="value-card purple">
                            <div class="icon-box">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-globe">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                    <path d="M2 12h20" />
                                </svg>
                            </div>
                            <h3>AI & INNOVATION</h3>
                            <p>We embed AI and innovation into everyday experience.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="value-card white">
                            <div class="icon-box">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-zap">
                                    <path d="M4 14.71 13 2l-1 8.29L20 9.29 11 22l1-8.29Z" />
                                </svg>
                            </div>
                            <h3>SUSTAINABILITY</h3>
                            <p>We build careers that create long-term value for society.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="value-card purple accent-left-bottom">
                            <div class="icon-box">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-users">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3>SOCIAL IMPACT</h3>
                            <p>We measure success by the positive change.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.core-values-section {
    background: #f3ebf7;
    padding: 80px 0;
}

.section-title {
    margin-bottom: 50px;
}

.title {
    font-size: 32px;
    font-weight: 700;
    color: #4A2F72;
    text-transform: uppercase;
}

.highlight {
    color: #F1A63E;
}

.values-grid {
    background: #fff;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.value-card {
    padding: 70px 45px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: transform 0.3s ease;
}

.value-card.white {
    background: #ffffff;
    color: #1a1a1a;
}

.value-card.purple {
    background: #4A2F72;
    color: #ffffff;
}

.value-card.purple h3 {
    color: #ffffff;
}

.value-card h3 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 25px;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
    color: #0F172A;
}

.value-card p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    font-weight: 400;
}

.value-card.white p {
    color: #444;
}

.icon-box {
    margin-bottom: 5px;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.icon-box svg {
    stroke-width: 1.5;
}

.value-card.white .icon-box {
    background: #4A2F72;
}

.value-card.white .icon-box svg {
    color: #ffffff;
}

.value-card.purple .icon-box {
    background: #F1A63E;
}

.value-card.purple .icon-box svg {
    color: #ffffff;
}

/* Accents from design */
.accent-left::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 40px;
    background: #F1A63E;
}

.accent-right::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 40px;
    background: #F1A63E;
}

.accent-left-bottom::before {
    content: "";
    position: absolute;
    left: 0;
    top: 60%;
    transform: translateY(-50%);
    width: 6px;
    height: 40px;
    background: #F1A63E;
}

@media (max-width: 991px) {
    .core-values-section {
        padding: 50px 0;
    }

    .value-card {
        padding: 50px 30px;
        min-height: 250px;
    }

    .accent-left::before,
    .accent-right::after,
    .accent-left-bottom::before {
        display: none;
    }

    .section-title {
        margin-bottom: 30px;
    }
}
</style>