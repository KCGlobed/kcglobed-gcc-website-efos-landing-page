<template>
    <div class="news-area">
        <div class="container">
            <div class="section-header text-center" data-aos="fade-up">
                <h2 class="section-title">AS FEATURED IN <span class="highlight">LEADING MEDIA</span></h2>
            </div>

            <div class="news-slider-wrapper" data-aos="fade-up" data-aos-delay="100">
                <Swiper :slides-per-view="1" :space-between="24" :loop="true"
                    :autoplay="{ delay: 4000, disableOnInteraction: false }"
                    :pagination="{ clickable: true, el: paginationRef }" :breakpoints="{
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }" :modules="[SwiperAutoplay, SwiperPagination]" class="news-swiper" @swiper="onSwiper">
                    <SwiperSlide v-for="news in newsList" :key="news.id">
                        <div class="news-card">
                            <div class="news-image">
                                <img :src="news.image" :alt="news.title" loading="lazy" />
                                <span class="category-badge">{{ news.category }}</span>
                            </div>
                            <div class="news-content">
                                <div class="meta">
                                    <span class="meta-item">
                                        <i class="ri-calendar-2-line"></i>
                                        {{ news.date }}
                                    </span>
                                    <span class="meta-item">
                                        <i class="ri-user-3-line"></i>
                                        Admin
                                    </span>
                                </div>
                                <h3>
                                    <a :href="news.url" target="_blank" rel="noopener">{{ news.title }}</a>
                                </h3>
                                <p>{{ news.excerpt }}</p>
                                <a :href="news.url" class="read-more-btn" target="_blank" rel="noopener">
                                    Read More
                                    <span class="btn-arrow"><i class="ri-arrow-right-line"></i></span>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div ref="paginationRef" class="news-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const paginationRef = ref(null)

function onSwiper(swiper: any) {
    swiper.params.pagination.el = paginationRef.value
    swiper.pagination.init()
    swiper.pagination.render()
    swiper.pagination.update()
}

const newsList = [
    {
        id: 1,
        title: 'GCC School and KC GlobEd Host Round Table Meeting on Impact of AI on GCCs - Building the Future Workforce',
        excerpt: 'GCC School and KC GlobEd successfully organised a dynamic Round Table meeting on the theme Impact of AI on GCCs - Building the Future Workforce at Welcome hotel by ITC Hotels, Delhi-Gurugram Highway. The session witnessed participation from senior leaders of reputed organisations...',
        date: 'Jan 29, 2026',
        category: 'Business & Finance',
        image: 'https://storage.googleapis.com/gcc_prod_static_files_backend/static/images/download.png',
        url: 'https://www.ptinews.com/press-release/gcc-school-and-kc-globed-host-round-table-meeting-on-impact-of-ai-on-gccs-building-the-future-workforce/3323548'
    },
    {
        id: 2,
        title: 'Building the Future Workforce: AI’s Impact on GCCs – A Round Table by GCC School & KC GlobEd',
        excerpt: ' GCC School and KC GlobEd successfully organised a dynamic Round Table meeting on the theme “Impact of AI on GCCs – Building the Future Workforce” at Welcome hotel by ITC Hotels, Delhi-Gurugram Highway....',
        date: 'Nov 14, 2025',
        category: 'Business & Finance',
        image: 'https://storage.googleapis.com/static_files_backend/media/images/image%20(1).jpg',
        url: 'https://english.indianews.in/india-news/gcc-school-and-kc-globed-host-round-table-meeting-on-impact-of-ai-on-gccs-building-the-future-workforce-848368/'
    },

    {
        id: 3,
        title: 'Tech4ed 2025 Sets New Benchmark In Global Learning With Strategic Collaborations And Knowledge Exchange',
        excerpt: 'The 2nd edition of Tech4Ed International Conference 2025, organised under the aegis of the Association of Indian Universities (AIU) and KC GlobEd, concluded on an inspiring note at The Park, New Delhi. The event brought together a distinguished gathering of academic leaders...',
        date: 'Nov 14, 2025',
        category: 'Tech4ed',
        image: 'https://storage.googleapis.com/gcc_prod_static_files_backend/static/images/F_92102image_story.jpeg',
        url: 'https://menafn.com/1110349919/Tech4ed-2025-Sets-New-Benchmark-In-Global-Learning-With-Strategic-Collaborations-And-Knowledge-Exchange'
    },

]
</script>

<style scoped>
/* ========== Section Wrapper ========== */
.news-area {
    background: linear-gradient(135deg, #f8fafc 0%, #f0f4ff 100%);
    padding: 80px 0 100px;
}

/* ========== Section Header ========== */
.section-header {
    margin-bottom: 50px;
}

.section-title {
    font-size: 34px;
    font-weight: 800;
    color: #0d0d25;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0;
}

.section-title::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background: linear-gradient(90deg, #F1A63E, #A13E99);
    margin: 16px auto 0;
    border-radius: 10px;
}

.highlight {
    color: #F1A63E;
}

/* ========== Slider Wrapper ========== */
.news-slider-wrapper {
    position: relative;
    padding-bottom: 56px;
    padding-left: 50px;
    padding-right: 50px;
}

/* ========== Nav Buttons ========== */
.news-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-60%);
    z-index: 10;
    width: 42px;
    height: 42px;
    background: #fff;
    border: 2px solid #e2e8f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #A13E99;
    font-size: 22px;
}

.news-nav-btn:hover {
    background: #A13E99;
    border-color: #A13E99;
    color: #fff;
}

.news-prev {
    left: 0;
}

.news-next {
    right: 0;
}

@media (max-width: 575px) {
    .news-slider-wrapper {
        padding-left: 0;
        padding-right: 0;
    }

    .news-nav-btn {
        display: none;
    }
}

.news-swiper {
    padding: 10px 4px 10px;
}

:deep(.swiper-slide) {
    height: auto;
}

/* ========== Card ========== */
.news-card {
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.35s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.news-card:hover {
    transform: translateY(-8px);
}

/* ========== Card Image ========== */
.news-image {
    position: relative;
    overflow: hidden;
    height: 210px;
    flex-shrink: 0;
}

.news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.55s ease;
    display: block;
}

.news-card:hover .news-image img {
    transform: scale(1.08);
}

.category-badge {
    position: absolute;
    bottom: 14px;
    left: 14px;
    background: linear-gradient(135deg, #A13E99, #7c2e76);
    color: #fff;
    padding: 5px 14px;
    border-radius: 50px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 8px rgba(161, 62, 153, 0.35);
}

/* ========== Card Content ========== */
.news-content {
    padding: 22px 24px 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.meta {
    display: flex;
    gap: 16px;
    margin-bottom: 12px;
    flex-wrap: wrap;
}

.meta-item {
    font-size: 12.5px;
    color: #94a3b8;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
}

.meta-item i {
    font-size: 14px;
    color: #A13E99;
}

.news-content h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news-content h3 a {
    color: #1e293b;
    text-decoration: none;
    transition: color 0.3s ease;
}

.news-content h3 a:hover {
    color: #A13E99;
}

.news-content p {
    color: #64748b;
    font-size: 13.5px;
    line-height: 1.65;
    margin-bottom: 18px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
}

.read-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #A13E99;
    font-weight: 700;
    font-size: 13.5px;
    text-decoration: none;
    margin-top: auto;
    transition: gap 0.3s ease, color 0.3s ease;
}

.read-more-btn:hover {
    color: #7c2e76;
    gap: 12px;
}

.btn-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background: rgba(161, 62, 153, 0.1);
    border-radius: 50%;
    transition: background 0.3s ease;
    font-size: 13px;
}

.read-more-btn:hover .btn-arrow {
    background: rgba(161, 62, 153, 0.2);
}

/* ========== Pagination ========== */
.news-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 36px;
}

:deep(.news-pagination .swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    background: #cbd5e1;
    opacity: 1;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
}

:deep(.news-pagination .swiper-pagination-bullet-active) {
    background: linear-gradient(135deg, #A13E99, #F1A63E);
    width: 28px;
    border-radius: 6px;
}

/* ========== Responsive ========== */
@media (max-width: 991px) {
    .news-area {
        padding: 60px 0 80px;
    }

    .section-title {
        font-size: 26px;
    }

    .section-header {
        margin-bottom: 36px;
    }
}

@media (max-width: 767px) {
    .news-area {
        padding: 50px 0 70px;
    }

    .section-title {
        font-size: 22px;
    }

    .news-image {
        height: 190px;
    }
}

@media (max-width: 575px) {
    .news-area {
        padding: 40px 0 60px;
    }

    .section-title {
        font-size: 20px;
    }
}
</style>