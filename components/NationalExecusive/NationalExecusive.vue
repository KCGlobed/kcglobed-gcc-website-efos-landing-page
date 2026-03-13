<template>
    <div class="about-wrap ptb-100">
        <div class="section-title">
            <h2>Exclusive National & International Credentials</h2>
        </div>
        <div class="container">
            <!-- British Council English Certification -->
            <div class="row g-4 align-items-center mb-5">
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                    <img src="~/assets/img/national/1.png" alt="British Council Certification" class="img-fluid">
                </div>
                <div class="col-lg-6" data-aos="zoom-in-up" data-aos-delay="200">
                    <div class="about-content">
                        <h3>British Council English For Work</h3>
                        <p>
                            Builds global communication confidence for multinational workplaces and GCC environments,
                            aligned with international standards.
                        </p>
                        <ul>
                            <!-- <li><strong>Levels:</strong> A1 to C1 (TBC)</li> -->
                            <li><strong>Focus:</strong> Business & Corporate Communication</li>
                            <li><strong>Delivery:</strong> Integrated within GCC Programme (Quarter 1)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- M.Sc. in Professional Accountancy -->
            <div class="row g-4 align-items-center mb-5">
                <div class="col-lg-6 order-lg-2" data-aos="fade-up" data-aos-delay="200">
                    <img src="~/assets/img/national/2.png" alt="University of London M.Sc." class="img-fluid">
                </div>
                <div class="col-lg-6 order-lg-1" data-aos="zoom-in-up" data-aos-delay="200">
                    <div class="about-content">
                        <h3>M.Sc. in Professional Accountancy – University of London (Optional)</h3>
                        <p>
                            A globally recognised master's programme strengthening analytical, strategic, and research
                            capabilities in finance and accounting.
                        </p>
                        <ul>
                            <li><strong>Total Credits:</strong> 60</li>
                            <li><strong>Structure:</strong> 2 Elective Modules (15 credits each) + Capstone Project (30
                                credits)</li>
                            <li><strong>ACCA Advantage:</strong> On completion of all ACCA papers, students receive
                                exemptions in two elective modules, requiring only the Capstone Project to
                                complete the M.Sc.*</li>
                            <li><strong>Assessment:</strong> 100% coursework (electives); Capstone – 30% coursework +
                                70% final
                                submission</li>
                            <li><strong>Delivery:</strong> Online via University of London</li>
                            <li><strong>M.Sc.* : </strong>Additional university fee will be applicable</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- PGCM – Public Accounting -->
            <div class="row g-4 align-items-center">
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                    <img src="~/assets/img/national/3.png" alt="AIMA PGCM Certification" class="img-fluid">
                </div>
                <div class="col-lg-6" data-aos="zoom-in-up" data-aos-delay="200">
                    <div class="about-content">
                        <h3>PGCM – Public Accounting (AICTE-approved)</h3>
                        <p>
                            Fully mapped to ACCA standards, the program allows you to secure PGCM through convenient
                            online exams.
                        </p>
                        <p class="my-2">
                            <strong> KC GlobEd</strong>
                            Complete training for the 8 non-exempted papers is delivered over four trimesters by KC
                            GlobEd. Alongside this core preparation, specialised AI courses in Finance, Audit, and
                            Accounts are provided, with official certifications awarded upon successful completion.

                        </p>
                        <ul>
                            <li><strong>Delivery Mode : </strong>Online classes and exams</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NationalCredentials",
};
</script>

<style scoped>
.about-wrap {
    background: #f9f9f9;
}

.ptb-100 {
    padding: 100px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
}

.section-title h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
}

.about-content h3 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: #2c3e50;
}

.about-content p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 20px;
    color: #555;
}

.about-content ul {
    list-style: none;
    padding-left: 0;
}

.about-content ul li {
    padding: 8px 0;
    font-size: 1rem;
    color: #666;
}

.img-fluid {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 991px) {
    .order-lg-1 {
        order: 1;
    }

    .order-lg-2 {
        order: 2;
    }
}
</style>