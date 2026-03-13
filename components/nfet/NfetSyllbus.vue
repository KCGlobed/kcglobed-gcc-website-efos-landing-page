<template>

    <section class="nfet-syllabus">
        <div class="container">
            <h2> Syllabus and Weightage</h2>
            <p>Comprehensive coverage of essential finance and business topics</p>
            <section class="exam-structure p-4">

                <div class="row g-4">

                    <!-- 1 -->
                    <div class="col-12 col-md-6">
                        <div class="exam-card d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-1 fw-semibold">Accounting & Finance Fundamentals</h6>
                                <!-- <p class="mb-0 small text-muted">Core financial concepts</p> -->
                            </div>
                            <div class="percentage">30%</div>
                        </div>
                    </div>

                    <!-- 2 -->
                    <div class="col-12 col-md-6">
                        <div class="exam-card d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-1 fw-semibold">English & Business Communication</h6>
                                <!-- <p class="mb-0 small text-muted">Professional communication skills</p> -->
                            </div>
                            <div class="percentage">30%</div>
                        </div>
                    </div>

                    <!-- 3 -->
                    <div class="col-12 col-md-6">
                        <div class="exam-card d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-1 fw-semibold">Auditing & Analytical Reasoning</h6>
                                <!-- <p class="mb-0 small text-muted">Critical thinking and analysis</p> -->
                            </div>
                            <div class="percentage">20%</div>
                        </div>
                    </div>

                    <!-- 4 -->
                    <div class="col-12 col-md-6">
                        <div class="exam-card d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-1 fw-semibold">Quantitative Aptitude</h6>
                                <!-- <p class="mb-0 small text-muted">Mathematical problem solving</p> -->
                            </div>
                            <div class="percentage">10%</div>
                        </div>
                    </div>

                    <!-- 5 (Full Width) -->
                    <div class="col-12">
                        <div class="exam-card d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-1 fw-semibold">Business & Economic Awareness</h6>
                                <!-- <p class="mb-0 small text-muted">Current affairs and market knowledge</p> -->
                            </div>
                            <div class="percentage">10%</div>
                        </div>
                    </div>

                </div>




            </section>

        </div>

    </section>
</template>

<style scoped>
.nfet-syllabus {
    background: #F3F3F3;
    padding: 80px 0 80px;
}

.nfet-syllabus h2 {
    color: #393535;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
}

.nfet-syllabus p {
    color: #676363;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px
}

.exam-structure {
    border-radius: 16px;
    background: #EEECF4;
    margin-top: 30px;
}

.exam-card {
    background: #ffffff;
    padding: 22px 24px;
    border-radius: 14px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    transition: 0.3s ease;
}

.exam-structure p {
    text-align: start;
}

.exam-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.percentage {
    font-size: 22px;
    font-weight: 700;
    color: #6f42c1;
    /* Purple */
}


@media (max-width: 991px) {
    .nfet-syllabus {
        padding: 40px 0px;
    }


}

@media (max-width: 576px) {
    .nfet-syllabus h2 {
        font-size: 24px;
        line-height: 32px;
    }


}
</style>