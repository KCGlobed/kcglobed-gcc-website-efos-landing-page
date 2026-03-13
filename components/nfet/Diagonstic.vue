<template>
    <div class="diagnostic-container">
        <section class="section">
            <h2 class="section-title">Diagnostic Report &amp; Results</h2>
            <p class="section-subtitle">Receive your detailed report within 24 hours</p>

            <div class="row-top">
                <!-- Card 1: Overall Qualification Status -->
                <div class="card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 3" />
                        </svg>
                    </div>
                    <div class="card-title">Overall Qualification Status</div>
                    <div class="card-desc">Clear pass/fail indication with score breakdown</div>
                </div>

                <!-- Card 2: Section-wise Results -->
                <div class="card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M8 17v-5M12 17v-8M16 17v-3" />
                        </svg>
                    </div>
                    <div class="card-title">Section-wise Results</div>
                    <div class="card-desc">Performance analysis for each subject area</div>
                </div>

                <!-- Card 3: Skill & Competency Analysis -->
                <div class="card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                    <div class="card-title">Skill &amp; Competency Analysis</div>
                    <div class="card-desc">Detailed strengths and improvement areas</div>
                </div>
            </div>

            <div class="row-bottom">
                <!-- Card 4: Hiring-readiness Indicators -->
                <div class="card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24">
                            <rect x="5" y="2" width="14" height="20" rx="2" />
                            <path d="M9 7h6M9 11h6M9 15h4" />
                        </svg>
                    </div>
                    <div class="card-title">Hiring-readiness Indicators</div>
                    <div class="card-desc">Assessment of job market preparedness</div>
                </div>

                <!-- Card 5: Consolidated Assessment Report -->
                <div class="card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24">
                            <rect x="5" y="2" width="14" height="20" rx="2" />
                            <path d="M9 7h6M9 11h6M9 15h4" />
                            <path d="M15 2v4h4" />
                        </svg>
                    </div>
                    <div class="card-title">Consolidated Assessment Report</div>
                    <div class="card-desc">Complete evaluation summary document</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* Scoped styles */
.diagnostic-container {
    font-family: 'DM Sans', sans-serif;
    background: #f2f2f2;
    /* Removed min-height: 100vh to fit into sections appropriately. */
    display: flex;
    align-items: center;
    justify-content: center;
}

.section {
    width: 100%;
    /* max-width: 780px; */
    padding: 60px 24px;
    text-align: center;
}

.section-title {
    font-size: 32px;
    font-weight: 700;
    color: #111;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
}

.section-subtitle {
    font-size: 14px;
    color: #888;
    margin-bottom: 36px;
}

.cards-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
}

.card {
    background: #fff;
    border-radius: 12px;
    padding: 22px 20px;
    text-align: left;
    width: 320px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.card-icon {
    width: 36px;
    height: 36px;
    background: #f3f0ff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
}

.card-icon svg {
    width: 18px;
    height: 18px;
    color: #8b5cf6;
    stroke: #8b5cf6;
    fill: none;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.card-title {
    font-size: 13.5px;
    font-weight: 600;
    color: #111;
    margin-bottom: 5px;
    line-height: 1.3;
}

.card-desc {
    font-size: 12px;
    color: #999;
    line-height: 1.5;
}

/* Row layout: 3 on top, 2 on bottom centered */
.row-top {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 16px;
    flex-wrap: wrap;
    /* Added for responsiveness */
}

.row-bottom {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    /* Added for responsiveness */
}

@media (max-width: 768px) {
    .section {
        padding: 40px 0px;
    }

    .card {
        width: 92%;
    }

    .section-title {
        font-size: 24px;
        line-height: 32px;
    }

    .section-subtitle {
        margin-bottom: 30px;
    }

    .exam-window {
        padding: 24px;
    }

    .exam-window h2 {
        font-size: 24px;
        line-height: 32px;
    }

    .exam-window p {
        font-size: 16px;
        line-height: 24px;
    }

    .exam-window .discription {
        font-size: 14px;
        line-height: 24px;
    }

    .exam-window button {
        font-size: 16px;
        line-height: 24px;
        padding: 12px 32px;
    }
}
</style>