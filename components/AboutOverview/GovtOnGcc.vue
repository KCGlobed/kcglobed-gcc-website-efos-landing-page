<template>
    <div class="gcc-government-area ptb-100 bg-white">
        <div class="container">
            <!-- Section 1 -->
            <div class="row align-items-center mb-50">
                <div class="col-lg-6">
                    <div class="gcc-image hover-effect text-center text-lg-start">
                        <img src="~/assets/img/abouts/PM-Modi.png" alt="Prime Minister Narendra Modi"
                            class="img-fluid rounded-4 shadow-lg" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="gcc-content ps-lg-4 mt-4 mt-lg-0">
                        <span class="sub-title">Global Leadership</span>
                        <h3 class="mb-3">The Rise of Indian GCC</h3>
                        <p class="mb-4">
                            India has emerged as the undisputed global leader in Global Capability Centres (GCCs),
                            hosting over 1,800 centres serving 1400 unique global corporations under the leadership
                            of Prime Minister Narendra Modi. These captive hubs manage critical functions
                            like analytics, technology support, and innovation.
                        </p>
                        <a href="https://www.narendramodi.in/reader/-india-s-global-capability-centre-from-outsourcing-to-outpacing-#:~:text=Prime%20Minister%20Narendra%20Modi%20has%20led%20India%27s,that%20drive%20global%20innovation%20and%20economic%20growth."
                            target="_blank" rel="noopener noreferrer" class="default-btn">
                            Read More
                        </a>
                    </div>
                </div>
            </div>

            <!-- Section 2 -->
            <div class="row align-items-center mb-50 flex-column-reverse flex-lg-row">
                <div class="col-lg-6">
                    <div class="gcc-content pe-lg-4 mt-4 mt-lg-0">
                        <span class="sub-title">Employment Growth</span>
                        <h3 class="mb-3">Redefining Employment with GCCs</h3>
                        <p class="mb-4">
                            Under Prime Minister Viksit Bharat Rozgar Yojana, more than 3.5 crore new jobs are being
                            created. With the government's efforts, more than one crore youth have been
                            employed in IT services, electronics manufacturing, and Global Capability Centres.
                        </p>
                        <a href="https://www.presidentofindia.gov.in/speeches/address-honble-president-india-smt-droupadi-murmu-parliament-2"
                            target="_blank" rel="noopener noreferrer" class="default-btn">
                            Read More
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="gcc-image hover-effect text-center text-lg-end">
                        <img src="~/assets/img/abouts/President.png" alt="President of India"
                            class="img-fluid rounded-4 shadow-lg" />
                    </div>
                </div>
            </div>

            <!-- Section 3 -->
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="gcc-image hover-effect text-center text-lg-start">
                        <img src="~/assets/img/abouts/Sita-Ramam.png" alt="GCC Growth"
                            class="img-fluid rounded-4 shadow-lg" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="gcc-content ps-lg-4 mt-4 mt-lg-0">
                        <span class="sub-title">Future Outlook</span>
                        <h3 class="mb-3">Charting India’s GCC Growth to 2030</h3>
                        <p class="mb-4">
                            According to Nasscom, India currently hosts over 1,760 GCCs, with Bengaluru and Hyderabad
                            leading the way.
                            GCCs generate at least $64.6 billion in export revenue, projected to rise to 2,200 centers
                            and a $105 billion market valuation by March 2030.
                        </p>
                        <a href="https://www.hindustantimes.com/india-news/union-budget-2026-27-proposes-15-5-minimum-profit-for-taxing-foreign-tech-units-101769970853444.html"
                            target="_blank" rel="noopener noreferrer" class="default-btn">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.gcc-government-area {
    position: relative;
    z-index: 1;
}

.gcc-content .sub-title {
    display: block;
    color: var(--primary);
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;
}

.gcc-content h3 {
    font-size: 32px;
    font-weight: 700;
    color: var(--dark);
    line-height: 1.3;
}

.gcc-content p {
    font-size: 16px;
    color: var(--paragraph);
    line-height: 1.8;
}

.gcc-image img {
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    border-radius: 20px;
    max-width: 85%;
    /* Reduced size */
    margin: 0 auto;
    /* Center alignment */
    display: block;
    /* Ensure margin auto works */
}

.gcc-image:hover img {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}

/* Responsive adjustments */
@media (max-width: 991px) {
    .gcc-content {
        text-align: center;
    }

    .gcc-content .default-btn {
        margin-top: 10px;
    }

    .gcc-image {
        margin-bottom: 30px;
    }

    .mb-50 {
        margin-bottom: 60px;
    }
}
</style>
