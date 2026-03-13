<template>
    <div id="gcc-think-tank" class="about-gcc-area ptb-100 bg-f9f9f9">
        <div class="container">
            <div class="row">
                <!-- What is GCC? -->
                <!--     <div class="col-lg-12 mb-5">
                    <div class="gcc-content">
                        <div class="section-title text-start">
                            <h2>What is Global Capability Center (GCC)?</h2>
                        </div>
                        <p>
                            Global Capability Centers (GCCs) are strategic hubs established by multinational
                            organizations to
                            deliver business services for global operations.
                        </p>
                        <p>
                            India has emerged as the GCC capital of the world, hosting over 1,950 Global Capability
                            Centers with a
                            workforce exceeding 26 million professionals. This ecosystem is expected to expand to more
                            than 6,000 GCCs,
                            employing over 65 million professionals in the next 4–5 years. Currently, 44% of GCCs in
                            India operate
                            end-to-end ownership models, driving innovation and global collaboration, and this share is
                            projected to
                            grow at a CAGR of approximately 14% in the coming years.
                        </p>
                        <p class="source-text">
                            Source: IBEF (2024), JLL Report(2025), GCC Summit(2025)
                        </p>
                    </div>
                </div> -->

                <!-- Why GCC School -->
                <div class="col-lg-12">
                    <div class="why-gcc-box">
                        <h3>Why GCC School</h3>
                        <p>Most graduates enter the job market with degrees, not direction.</p>
                        <p>At GCC School, we turn ambition into achievement through: </p>
                        <ul class="why-list">
                            <li><i class="ti ti-check"></i>Real GCC exposure and corporate internships </li>
                            <li><i class="ti ti-check"></i>Masterclasses from global industry leaders </li>
                            <li><i class="ti ti-check"></i>Job-ready skill development and placement-first pathways
                            </li>
                        </ul>
                        <div class="conclusion-box mt-4">
                            <h4>We don’t prepare you to apply for jobs — we prepare you to perform in them.</h4>
                        </div>
                        <!-- <div class="info-button d-flex justify-content-center mt-4">
                            <NuxtLink to="#" class="default-btn secodary-btn">
                                Explore Why GCC School Works →
                                <i class="ti ti-arrow-narrow-right"></i>
                            </NuxtLink>
                        </div> -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutGCC",
};
</script>

<style scoped>
.bg-f9f9f9 {
    background-color: #f9f9f9;
}

.section-title h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #38003c;
}

.gcc-content p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 20px;
    font-size: 16px;
}

.source-text {
    font-size: 14px !important;
    font-style: italic;
    color: #999 !important;
}

.why-gcc-box {
    background: #fff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    border-left: 5px solid #f5a623;
}

.why-gcc-box h3 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #38003c;
}

.why-list {
    list-style: none;
    padding: 0;
    margin: 20px 0;
}

.why-list li {
    position: relative;
    padding-left: 35px;
    margin-bottom: 15px;
    font-size: 16px;
    color: #555;
}

.why-list li i {
    position: absolute;
    left: 0;
    top: 4px;
    color: #dc3545;
    /* Red for 'gap' indicators */
    font-size: 20px;
}

.conclusion-box h4 {
    font-size: 22px;
    color: #28a745;
    /* Green for solution */
    font-weight: 700;
}
</style>
