<template>
    <div class="entrance-test-section">
        <div class="container">
            <div class="header-section text-center mb-5">
                <h1 class="main-title text-primary fw-bold display-5 mb-3">National Finance Entrance Test (NFET)</h1>
                <div class="d-flex justify-content-center">
                    <h4 class="sub-title text-muted mt-2 col-lg-8" style="line-height: 1.8; font-weight: 400;">
                        NFET is a Home-Based Test (HBT) designed to assess academic readiness, analytical ability, and
                        suitability for global finance and GCC roles.
                    </h4>
                </div>
            </div>

            <div class="row g-5">
                <!-- Exam Snapshot -->
                <div class="col-md-6">
                    <div class="card h-100 shadow-sm border-0 exam-card glass-effect">
                        <div class="card-body p-4 p-lg-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="icon-circle bg-primary-subtle text-primary me-3">
                                    <i class="bi bi-clipboard-data fs-4"></i>
                                </div>
                                <h3 class="card-title m-0 text-dark fw-bold">Exam Snapshot</h3>
                            </div>

                            <div class="table-responsive rounded-4 overflow-hidden">
                                <table class="table table-borderless align-middle custom-table mb-0">
                                    <thead class="bg-light">
                                        <tr>
                                            <th scope="col"
                                                class="ps-4 py-3 text-uppercase text-muted small fw-bold tracking-wider">
                                                Parameter</th>
                                            <th scope="col"
                                                class="py-3 text-uppercase text-muted small fw-bold tracking-wider">
                                                Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="fw-semibold ps-4 text-dark">Exam Mode</td>
                                            <td class="text-secondary">Home - Based Test (HBT)</td>
                                        </tr>
                                        <tr>
                                            <td class="fw-semibold ps-4 text-dark">Question Type</td>
                                            <td class="text-secondary">Objective / Multiple Choice</td>
                                        </tr>
                                        <tr>
                                            <td class="fw-semibold ps-4 text-dark">Coverage</td>
                                            <td class="text-secondary">Pan-India</td>
                                        </tr>
                                        <tr>
                                            <td class="fw-semibold ps-4 text-dark">Evaluation</td>
                                            <td class="text-secondary">Automated & Standardised</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Syllabus Overview -->
                <div class="col-md-6">
                    <div class="card h-100 shadow-sm border-0 syllabus-card glass-effect">
                        <div class="card-body p-4 p-lg-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="icon-circle bg-success-subtle text-success me-3">
                                    <i class="bi bi-book fs-4"></i>
                                </div>
                                <h3 class="card-title m-0 text-dark fw-bold">Syllabus Overview</h3>
                            </div>

                            <div class="table-responsive rounded-4 overflow-hidden">
                                <table class="table table-hover align-middle custom-table mb-0">
                                    <thead class="bg-light">
                                        <tr>
                                            <th scope="col"
                                                class="ps-4 py-3 text-uppercase text-muted small fw-bold tracking-wider">
                                                Section</th>
                                            <th scope="col"
                                                class="py-3 text-uppercase text-muted small fw-bold tracking-wider">
                                                Weightage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="ps-4 text-dark">Accounting & Finance Fundamentals</td>
                                            <td class="fw-bold text-success">30%</td>
                                        </tr>
                                        <tr>
                                            <td class="ps-4 text-dark">English & Business Communication</td>
                                            <td class="fw-bold text-success">30%</td>
                                        </tr>
                                        <tr>
                                            <td class="ps-4 text-dark">Auditing & Analytical Reasoning</td>
                                            <td class="fw-bold text-success">20%</td>
                                        </tr>

                                        <tr>
                                            <td class="ps-4 text-dark">Quantitative Aptitude</td>
                                            <td class="fw-bold text-success">10%</td>
                                        </tr>
                                        <tr>
                                            <td class="ps-4 text-dark">Business & Economic Awareness</td>
                                            <td class="fw-bold text-success">10%</td>
                                        </tr>
                                        <!-- <tr>
                                            <td class="ps-4 text-dark">Psychometric Assessment</td>
                                            <td class="fw-bold text-secondary">5%</td>
                                        </tr> -->
                                    </tbody>
                                </table>
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
    name: "EntranceTest"
}
</script>

<style scoped>
.entrance-test-section {
    padding: 5rem 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.glass-effect {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}

.card {
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
}

.icon-circle {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.custom-table tbody tr {
    transition: background-color 0.2s;
    border-bottom: 1px solid #f1f3f5;
}

.custom-table tbody tr:last-child {
    border-bottom: none;
}

.custom-table tbody tr:hover {
    background-color: #f8f9fa;
}

.custom-table td,
.custom-table th {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.tracking-wider {
    letter-spacing: 0.05em;
}

.text-primary-subtle {
    color: #cfe2ff;
}

.bg-primary-subtle {
    background-color: #cfe2ff;
}

.bg-success-subtle {
    background-color: #d1e7dd;
}
</style>
