<template>
    <div class="govt-program-area ptb-100">
        <div class="container">
            <!-- Section Header -->
            <div class="section-title text-center mb-50">
                <h2 class="title">India – GCC <span class="highlight">Hub Of The World</span></h2>
            </div>

            <!-- Program Cards Grid -->
            <div class="row g-4 justify-content-center">
                <div v-for="(program, index) in programs" :key="index" class="col-lg-4 col-md-6 col-sm-12">
                    <div class="program-card">
                        <div class="card-image-box">
                            <img :src="program.image" :alt="program.title" class="img-fluid">
                            <div class="image-overlay">
                                <NuxtLink :to="program.link" target="_blank" class="btn-learn-more">
                                    Read More <i class="ti ti-arrow-right"></i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="card-content p-4">
                            <h3 class="program-name mb-3">{{ program.title }}</h3>
                            <p class="program-desc mb-0">{{ program.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PMModi from "~/assets/img/abouts/PM-Modi.png";
import President from "~/assets/img/abouts/President.png";
import sitaRaman from "~/assets/img/abouts/Sita-Ramam.png";

const programs = [
    {
        title: "The Rise of Indian GCC",
        desc: "India has emerged as the global leader in GCCs, hosting over 1,800 centres under visionary leadership.",
        image: PMModi,
        link: "https://www.narendramodi.in/reader/-india-s-global-capability-centre-from-outsourcing-to-outpacing-#:~:text=Prime%20Minister%20Narendra%20Modi%20has%20led%20India%27s,that%20drive%20global%20innovation%20and%20economic%20growth."
    },
    {
        title: "Employment Growth",
        desc: "Redefining employment with over 3.5 crore new jobs being created in the GCC sector.",
        image: President,
        link: "https://www.presidentofindia.gov.in/speeches/address-honble-president-india-smt-droupadi-murmu-parliament-2"
    },
    {
        title: "Future Outlook 2030",
        desc: "Projected to rise to 2,200 centers and a $105 billion market valuation by March 2030.",
        image: sitaRaman,
        link: "https://www.hindustantimes.com/india-news/union-budget-2026-27-proposes-15-5-minimum-profit-for-taxing-foreign-tech-units-101769970853444.html"
    },
];
</script>

<style scoped>
.govt-program-area {
    background-color: #f8f9fa;
}

.section-title {
    margin-bottom: 50px;
}

.title {
    font-size: 32px;
    font-weight: 700;
    color: #0d0d25;
    margin-bottom: 20px;
    text-transform: uppercase;
    position: relative;
}

.title::after {
    content: "";
    display: block;
    width: 70px;
    height: 4px;
    background: #F1A63E;
    margin: 15px auto 0;
    border-radius: 10px;
}

.highlight {
    color: #F1A63E;
}

/* Program Card Styling */
.program-card {
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    height: 100%;
    transition: all 0.4s ease;
    border: 1px solid #eee;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
}

.program-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    border-color: #ba1b94;
}

.card-image-box {
    position: relative;
    height: 300px;
    /* Increased height for better portrait display */
    overflow: hidden;
    background-color: #f0f0f0;
}

.card-image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    /* Ensures faces are visible for portraits */
    transition: transform 0.8s ease;
}

.program-card:hover .card-image-box img {
    transform: scale(1.05);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(56, 11, 64, 0.8));
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 30px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
}

.program-card:hover .image-overlay {
    opacity: 1;
    visibility: visible;
}

.btn-learn-more {
    padding: 10px 25px;
    background: #ffffff;
    color: #380b40;
    border-radius: 50px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
    transform: translateY(15px);
    font-size: 14px;
}

.program-card:hover .btn-learn-more {
    transform: translateY(0);
}

.btn-learn-more:hover {
    background: #ba1b94;
    color: #fff;
}

.card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.program-name {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.3;
}

.program-desc {
    font-size: 15px;
    color: #555;
    line-height: 1.6;
}

@media (max-width: 1200px) {
    .title {
        font-size: 28px;
    }
}

@media (max-width: 991px) {
    .title {
        font-size: 24px;
    }

    .govt-program-area {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .card-image-box {
        height: 250px;
    }
}

@media (max-width: 768px) {

    .govt-program-area {
        padding: 40px 0px;
    }

    .section-title {
        margin-bottom: 36px;
    }
}
</style>
