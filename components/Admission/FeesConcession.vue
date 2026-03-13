<template>
    <div>
        <div class="fees-concession-section">
            <div class="container">
                <div class="row align-items-center g-5">
                    <!-- Image Column -->
                    <div class="col-lg-5" data-aos="fade-right" data-aos-delay="200">
                        <div class="image-wrapper position-relative">
                            <img src="/fees_concession.png" alt="Students discussing financial aid"
                                class="img-fluid rounded-4 shadow-lg main-img object-fit-cover w-100"
                                style="min-height: 500px;">
                            <div
                                class="overlay-badge glass-effect p-3 rounded-3 position-absolute bottom-0 start-0 m-4 shadow-sm">
                                <div class="d-flex align-items-center">
                                    <div class="icon-circle bg-white text-primary me-3 flex-shrink-0">
                                        <i class="ti ti-trophy fs-4"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-0 fw-bold">Scholarship Program</h6>
                                        <small class="text-muted">Empowering Talent</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Details Column -->
                    <div class="col-lg-7" data-aos="fade-left" data-aos-delay="400">
                        <div class="fees-concession-content ps-lg-4">
                            <h6 class="text-primary text-uppercase fw-bold tracking-wider mb-2">Financial Support</h6>
                            <h2 class="mb-3 display-6 fw-bold">Fees Concession & Scholarships</h2>
                            <p class="lead mb-4 text-muted">To ensure access and inclusion, <span
                                    class="fw-bold text-primary">50% fee concession</span> is available for eligible
                                candidates.</p>

                            <!-- Eligible Categories -->
                            <div class="mb-5">
                                <h5 class="fw-bold mb-3 d-flex align-items-center">
                                    <i class="ti ti-certificate text-warning me-2 fs-4"></i>
                                    Eligible Categories (50% Each)
                                </h5>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <div
                                            class="p-3 bg-light rounded-3 h-100 border border-light-subtle d-flex align-items-center">
                                            <i class="ti ti-gender-female text-primary fs-5 me-2"></i>
                                            <span class="fw-semibold text-dark">Only Girl Child</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div
                                            class="p-3 bg-light rounded-3 h-100 border border-light-subtle d-flex align-items-center">
                                            <i class="ti ti-medal text-primary fs-5 me-2"></i>
                                            <span class="fw-semibold text-dark">Kargil Warrior / Army Quota</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div
                                            class="p-3 bg-light rounded-3 h-100 border border-light-subtle d-flex align-items-center">
                                            <i class="ti ti-award text-primary fs-5 me-2"></i>
                                            <span class="fw-semibold text-dark">9.5+ CGPA / Gold Medalists</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div
                                            class="p-3 bg-light rounded-3 h-100 border border-light-subtle d-flex align-items-center">
                                            <i class="ti ti-users-group text-primary fs-5 me-2"></i>
                                            <span class="fw-semibold text-dark">SC / ST / OBC Candidates</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Process Note -->
                            <div class="glass-effect rounded-4 p-4 border border-light shadow-sm mb-4">
                                <h5 class="mb-3 fw-bold text-dark d-flex align-items-center">
                                    <i class="ti ti-clipboard-list text-primary me-2"></i>
                                    Important Process Note
                                </h5>
                                <ul class="list-unstyled mb-0 d-flex flex-column gap-3">
                                    <li class="d-flex align-items-start">
                                        <i class="ti ti-check-circle text-success mt-1 me-2 flex-shrink-0"></i>
                                        <span class="text-secondary">Eligible candidates must select the concession
                                            option during application and upload supporting documents.</span>
                                    </li>
                                    <li class="d-flex align-items-start">
                                        <i class="ti ti-clock text-warning mt-1 me-2 flex-shrink-0"></i>
                                        <span class="text-secondary">After verification, a concessional payment link
                                            will be shared within 48 hours.</span>
                                    </li>
                                    <li class="d-flex align-items-start">
                                        <i class="ti ti-alert-circle text-danger mt-1 me-2 flex-shrink-0"></i>
                                        <span class="text-secondary">Candidates not eligible for concession will be
                                            redirected directly to the payment gateway.</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Tentative Schedule Header -->
                            <div class="d-inline-block bg-primary-subtle text-primary px-4 py-2 rounded-pill fw-bold">
                                Tentative Schedule – 2026 Batch
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeesConcession",
};
</script>

<style scoped>
.fees-concession-section {
    padding: 6rem 0;
    background-color: #ffffff;
}

.image-wrapper img {
    border-radius: 20px;
    height: 100%;
}

.glass-effect {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
}

.icon-circle {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.custom-table tbody tr {
    transition: background-color 0.2s;
    border-bottom: 1px solid #f8f9fa;
}

.custom-table tbody tr:hover {
    background-color: #f8f9fa;
}

.custom-table td,
.custom-table th {
    padding: 1rem 0.5rem;
    font-size: 0.9rem;
}

.tracking-wider {
    letter-spacing: 0.05em;
}

.bg-primary-subtle {
    background-color: #eafafe;
}

.text-primary-subtle {
    color: #0d6efd;
}

.bg-success-subtle {
    background-color: #e8f5e9;
}
</style>
