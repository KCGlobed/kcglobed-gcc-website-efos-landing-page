<template>
    <div class="trust-ecosystem-section">
        <div class="container">
            <div class="header-logo d-flex justify-content-center align-items-center mb-3">
                <img src="@/assets/img/common/logo_kcglobed.svg" alt="Logo" class="header-logo">
            </div>
            <div class="header-v2 mb-3" data-aos="fade-up">


                <div class="">
                    <h2 class="title">THE POWERHOUSE BEHIND <span class="highlight">GCC SCHOOL</span></h2>

                </div>

            </div>

            <div class="trust-grid " data-aos="zoom-in">
                <div v-for="(item, index) in ecosystemData" :key="index" :class="['trust-card', `color-${index + 1}`]">
                    <div class="card-content">
                        <h3 v-if="item.number" class="number text-white">{{ item.number }}</h3>
                        <p class="label">{{ item.label }}</p>
                        <p v-if="item.subLabel" class="sub-label">{{ item.subLabel }}</p>
                        <div v-if="item.tags" class="tags">
                            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="trus-eco-sy">
        <div class="container">
            <div class="row">
                <div class="header-v2  " data-aos="fade-up">
                    <div class="">
                        <h2 class="title">TRUSTED <span class="highlight">ECO SYSTEM</span></h2>

                    </div>

                </div>
                <div class="organistion-grid" data-aos="zoom-in">
                    <div v-for="(item, index) in ecosystemImages" :key="index" class="org-card">
                        <img :src="item.image" alt="Organization Logo" class="org-logo">
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
const ecosystemData = [
    { number: "30+", label: "Years of Legacy" },
    { number: "20K+", label: "Global", subLabel: "Students" },
    { number: "120+", label: "Countries", subLabel: "Presence" },
    { number: "40+", label: "Franchisees", subLabel: "PAN India" },
    { number: "No.1", label: "AI-Powered", subLabel: "Digital Learning Platform" },
    { number: "11+", label: "Copyrighted", subLabel: "Professional Books" },
    { number: "1200+", label: "Exam Prep Materials ", tags: ["CPA", "ACCA", "CMA", "IFRS", "EA"] },
    { number: "280+", label: "Empanelled", subLabel: "Instructors" },
    { number: "250+", label: "Team Size" },
    { number: "40+", label: "Industry", subLabel: "Mentors" },
    { number: "60+", label: "Placement", subLabel: "Partners" },
    { number: "50+", label: "Institutional", subLabel: "Tie-Ups" },
    { number: "10+", label: "E-Marketplace", subLabel: "Best Seller" },
    { number: "4.8★", label: "Google Reviews", subLabel: "By 800+ Learners" },
    { number: "100+", label: "Media Coverage", subLabel: " 10+ Accolades" },
    { number: "100k+", label: "Lives", subLabel: "Impacted" }, 
];

const ecosystemImages = [
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049956.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049950%201.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049941.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049942.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049947.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049949.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049952.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049939.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049943.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/7qrb04.tif%201.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049944.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049951.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049953.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049955%20(1).png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049945.png" },
    { image: "https://storage.googleapis.com/static_files_backend/media/images/Group%2049954.png" },

];

</script>

<style scoped>
.trust-ecosystem-section {
    padding: 50px 0;
    background-color: #ffffff;
}

.trus-eco-sy {
    padding: 50px 0;
    background-color: #f9fafb;
}

/* Header Styling */
.header-v2 {
    display: flex;
    justify-content: center;
    align-items: flex-end;


}

.title {
    font-size: 32px;
    font-weight: 700;
    color: #0d0d25;
    margin-bottom: 5px;
    letter-spacing: -0.1px;
    text-transform: uppercase;
}

.highlight {
    color: #F1A63E;
}

.header-line {
    width: 220px;
    height: 5px;
    background-color: #f8ca4d;
    border-radius: 0;
}

.header-logo {
    height: 45px;
    width: auto;
}

/* Trust Grid Layout */
.trust-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 30px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.trust-card {
    aspect-ratio: 1.1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 15px;
    border-radius: 10px;
    transition: all 0.3s ease;
    cursor: default;
}

.trust-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.card-content {
    color: #ffffff;
}

.number {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 4px;
    color: #ffffff !important;
}

.label {
    font-size: 13px;
    margin-bottom: 0;
    font-weight: 600;
    line-height: 1.2;
}

.sub-label {
    font-size: 11px;
    margin-bottom: 0;
    opacity: 0.9;
    font-weight: 400;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px;
    margin-top: 8px;
}

.tags span {
    font-size: 9px;
    background: rgba(255, 255, 255, 0.2);
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 700;
}

/* Colors matching the image */
.color-1 {
    background-color: #2b2b62;
}

.color-2 {
    background-color: #510060;
}

.color-3 {
    background-color: #5a3ba3;
}

.color-4 {
    background-color: #a33c8c;
}

.color-5 {
    background-color: #1e1e4a;
}

.color-6 {
    background-color: #5a006b;
}

.color-7 {
    background-color: #4b2d8c;
}

.color-8 {
    background-color: #9c2e78;
}

.color-9 {
    background-color: #1a1a40;
}

.color-10 {
    background-color: #4b0059;
}

.color-11 {
    background-color: #3e1b7a;
}

.color-12 {
    background-color: #8a3485;
}

.color-13 {
    background-color: #1a1a45;
}

.color-14 {
    background-color: #3a0050;
}

.color-15 {
    background-color: #311c5d;
}

.color-16 {
    background-color: #9e368c;
}

/* Responsive adjustments */
@media (max-width: 991px) {
    .title {
        text-align: center;
    }

    .trust-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 575px) {


    .trust-card {
        aspect-ratio: auto;
        padding: 30px 15px;
    }
}

/* Organisation Grid Styling */
.organistion-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-top: 30px;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
}

.org-card {
    /* background: #ffffff;
    border: 1px solid #f0f0f5;
    border-radius: 8px; */
    /* padding: 20px; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    /* transition: all 0.3s ease; */
}

/* .org-card:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transform: translateY(-3px);
    border-color: #e5e7eb;
} */

.org-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(0.2);
    transition: all 0.3s ease;
}

.org-card:hover .org-logo {
    filter: grayscale(0);
}

@media (max-width: 991px) {
    .organistion-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .trust-ecosystem-section {
        padding: 30px 0;
    }
}

@media (max-width: 575px) {
    /* .organistion-grid {
        grid-template-columns: 1fr;
    } */

    .org-card {
        height: 73px;
        padding: 5px;
    }

    .organistion-grid {
        gap: 0px;
    }
}
</style>