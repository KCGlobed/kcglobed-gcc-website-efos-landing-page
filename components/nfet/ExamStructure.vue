<template>
    <section class="exam-section ">
        <div class="container">
            <!-- Header -->
            <div class="text-center mb-5">
                <h2 class="section-title">Exam Structure &amp; Opportunities</h2>
                <p class="section-subtitle">Get your ticket to DLF Cybercity for interviews in Big Consulting Firms or
                    MNCs</p>
            </div>

            <!-- Cards Row -->
            <div class="row g-4">
                <!-- Card 1: Test Pattern -->
                <div class="col-12 col-md-4">
                    <div class="exam-card card-dark h-100">
                        <h3 class="card-heading">Test Pattern</h3>
                        <ul class="feature-list mt-4">
                            <li>
                                <span class="check-icon">✓</span>
                                <div>
                                    <strong>60 MCQs</strong>
                                    <p>Multiple choice questions</p>
                                </div>
                            </li>
                            <li>
                                <span class="check-icon">✓</span>
                                <div>
                                    <strong>90 Minutes</strong>
                                    <p>Total duration</p>
                                </div>
                            </li>
                            <li>
                                <span class="check-icon">✓</span>
                                <div>
                                    <strong>0.75 to 1.25 score per question</strong>
                                    <p>Variable scoring</p>
                                </div>
                            </li>
                            <li>
                                <span class="check-icon">✓</span>
                                <div>
                                    <strong>No negative marking</strong>
                                    <p>No penalty for wrong answers</p>
                                </div>
                            </li>
                            <li>
                                <span class="check-icon">✓</span>
                                <div>
                                    <strong>No breaks</strong>
                                    <p>Continuous assessment</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Card 2: Mode & Scoring -->
                <div class="col-12 col-md-4">
                    <div class="exam-card card-mid h-100">
                        <h3 class="card-heading">Mode &amp; Scoring</h3>
                        <div class="info-block mt-4">
                            <h4>Mode of Examination</h4>
                            <p>AI-enabled, human-proctored online format ensuring integrity and fairness.</p>
                        </div>
                        <div class="info-block">
                            <h4>Scoring Parameters</h4>
                            <p>Accuracy, consistency, and alignment with predefined academic benchmarks.</p>
                        </div>
                        <div class="info-block">
                            <h4>Exam Window</h4>
                            <p>February 21, 2026 to March 31, 2026</p>
                        </div>
                        <div class="info-block">
                            <h4>Results Declaration</h4>
                            <p>NFET exam results will be announced on 4th April 2026.</p>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Special Benefits -->
                <div class="col-12 col-md-4">
                    <div class="exam-card card-gold h-100">
                        <h3 class="card-heading">Special Benefits</h3>
                        <div class="benefit-block mt-4">
                            <div class="benefit-header">
                                <span class="benefit-icon star">★</span>
                                <strong>Free British Council Kit</strong>
                            </div>
                            <p>Meritorious candidates receive Communication Evaluation Kit (worth ₹600) absolutely FREE.
                            </p>
                        </div>
                        <div class="benefit-block">
                            <div class="benefit-header">
                                <span class="benefit-icon check">✓</span>
                                <strong>Free Interview Ticket</strong>
                            </div>
                            <p>B2 level achievers get 100% travel reimbursement to DLF Cyber City, Gurugram for
                                interviews in dream organisations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No additional logic needed
</script>

<style scoped>
.exam-section {
    background: #FFF;
    padding: 80px 0px;
}

.section-title {
    color: #575050;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 16px;
}

.section-subtitle {
    color: #595757;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
}

/* Cards Base */
.exam-card {
    border-radius: 16px;
    padding: 2rem;
    border: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.exam-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
}

/* Dark Card */
.card-dark {
    background-color: #1e1e1e;
    color: #fff;
}

.card-dark .card-heading {
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 700;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.75rem;
}

/* Mid Card */
.card-mid {
    background-color: #2a2a2a;
    color: #e0e0e0;
}

.card-mid .card-heading {
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 700;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.75rem;
}

/* Gold Card */
.card-gold {
    background-color: #7d5e00;
    color: #fff;
}

.card-gold .card-heading {
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 700;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 0.75rem;
}

/* Feature List (Card 1) */
.feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.feature-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 1rem;
}

.feature-list li strong {
    display: block;
    font-size: 0.95rem;
    color: #fff;
}

.feature-list li p {
    margin: 0;
    font-size: 0.8rem;
    color: #aaa;
}

.check-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #6c47ff;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    margin-top: 2px;
}

/* Info Blocks (Card 2) */
.info-block {
    margin-bottom: 1.2rem;
}

.info-block h4 {
    font-size: 0.95rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0.25rem;
}

.info-block p {
    font-size: 0.82rem;
    color: #bbb;
    margin: 0;
    line-height: 1.5;
}

/* Benefit Blocks (Card 3) */
.benefit-block {
    margin-bottom: 1.4rem;
}

.benefit-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 0.4rem;
}

.benefit-header strong {
    font-size: 0.95rem;
    color: #fff;
}

.benefit-block p {
    font-size: 0.82rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    line-height: 1.5;
}

.benefit-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 700;
    flex-shrink: 0;
}

.benefit-icon.star {
    background-color: #f5c518;
    color: #1a1a1a;
}

.benefit-icon.check {
    background-color: #4caf7d;
    color: #fff;
}


/* Responsive */
@media (max-width: 768px) {
    .section-title {
        font-size: 24px;
        line-height: 32px;
    }

    .exam-card {
        padding: 1.5rem;
    }

    .exam-section {
        padding: 40px 0px;
    }
}

@media (max-width: 576px) {}
</style>