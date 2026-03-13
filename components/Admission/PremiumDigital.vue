<template>
    <div class="premium-assets-section py-5">
        <div class="container">
            <!-- Header -->
            <h2 class="text-center fw-bold mb-5 display-5">
                5 Premium Digital Assets Included
            </h2>

            <!-- Swiper Slider -->
            <swiper :modules="modules" :slides-per-view="1" :space-between="30" :navigation="true"
                :pagination="{ clickable: true }" :breakpoints="{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }" class="premium-swiper">
                <swiper-slide v-for="asset in assets" :key="asset.id">
                    <div class="card h-100 shadow-sm premium-card" :class="{ 'card-hover': hoveredCard === asset.id }"
                        @mouseenter="hoveredCard = asset.id" @mouseleave="hoveredCard = null">
                        <div class="card-body p-4">
                            <!-- Icon Container -->
                            <div :class="asset.bgColor" class="icon-wrapper mb-3">
                                <div :class="asset.color" class="icon-inner">
                                    <svg class="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            :d="asset.iconPath"></path>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <h5 class="card-title fw-bold mb-2">
                                {{ asset.title }}
                            </h5>
                            <p class="card-subtitle text-muted mb-2 fw-medium">
                                {{ asset.subtitle }}
                            </p>
                            <p class="card-text text-secondary small">
                                {{ asset.description }}
                            </p>
                        </div>

                        <!-- Hover Indicator -->
                        <div v-show="hoveredCard === asset.id" :class="asset.indicatorColor" class="hover-indicator">
                        </div>
                    </div>
                </swiper-slide>
            </swiper>


        </div>
    </div>
</template>

<script>
// Import Swiper Vue components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    name: "PremiumDigital",
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Navigation, Pagination],
            hoveredCard: null,
            assets: [
                {
                    id: 1,
                    iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                    title: "Program Roadmap Guide",
                    subtitle: "ACCA • AIMA • UGC",
                    description: "Pathway",
                    color: "bg-primary",
                    bgColor: "bg-primary-subtle",
                    indicatorColor: "bg-primary"
                },
                {
                    id: 2,
                    iconPath: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                    title: "Salary Calculator",
                    subtitle: "GCC vs MBA",
                    description: "Earnings",
                    color: "bg-success",
                    bgColor: "bg-success-subtle",
                    indicatorColor: "bg-success"
                },
                {
                    id: 3,
                    iconPath: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    title: "Big 4 Preparation Pack",
                    subtitle: "50 Interview Qs +",
                    description: "ATS Resumes",
                    color: "bg-warning",
                    bgColor: "bg-warning-subtle",
                    indicatorColor: "bg-warning"
                },
                {
                    id: 4,
                    iconPath: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                    title: "Communication Skills Primer",
                    subtitle: "Business English",
                    description: "Essentials",
                    color: "bg-info",
                    bgColor: "bg-info-subtle",
                    indicatorColor: "bg-info"
                },
                {
                    id: 5,
                    iconPath: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
                    title: "Excel for Auditors (60 mins)",
                    subtitle: "VLOOKUP, Pivot Tables, Macros",
                    description: "Advanced Skills",
                    color: "bg-danger",
                    bgColor: "bg-danger-subtle",
                    indicatorColor: "bg-danger"
                }
            ]
        };
    }
};
</script>

<style scoped>
.premium-assets-section {
    background: linear-gradient(135deg, #e3f2fd 0%, #e8eaf6 100%);
    /* min-height: 100vh; */
    padding: 4rem 0;
}

.premium-swiper {
    padding: 20px 50px 60px;
}

.premium-card {
    border: none;
    border-radius: 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.premium-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important;
}

.card-hover {
    transform: translateY(-8px);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important;
}

.icon-wrapper {
    border-radius: 0.75rem;
    padding: 1rem;
    display: inline-block;
}

.icon-inner {
    border-radius: 0.5rem;
    padding: 0.75rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.icon-svg {
    width: 2rem;
    height: 2rem;
    color: white;
}

.hover-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: 0 0 1rem 1rem;
}

/* Swiper Custom Styles */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    background: white;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
    font-size: 20px;
    font-weight: bold;
    color: #1976d2;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
    background: #1976d2;
}

:deep(.swiper-button-next:hover:after),
:deep(.swiper-button-prev:hover:after) {
    color: white;
}

:deep(.swiper-pagination-bullet) {
    width: 12px;
    height: 12px;
    background: #ccc;
    opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
    background: #1976d2;
    width: 30px;
    border-radius: 6px;
}

.btn-primary {
    background: linear-gradient(135deg, #1976d2 0%, #5e35b1 100%);
    border: none;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, .25);
}
</style>