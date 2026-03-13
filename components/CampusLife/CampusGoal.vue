<template>
    <div class="leaders-section">

        <!-- Heading -->
        <h2 class="title">
            INSIGHTFUL MEETINGS WITH <span>INDUSTRY <br> LEADERS</span>
        </h2>

        <!-- Image Grid -->
        <div class="leaders-grid">
            <img class="gi gi-1" :src="images[0]" />
            <img class="gi gi-2" :src="images[1]" />
            <img class="gi gi-3" :src="images[2]" />
            <img class="gi gi-4" :src="images[3]" />
            <img class="gi gi-5" :src="images[4]" />
        </div>
        <!-- Video -->
        <!-- <VideoBox video-src="https://storage.googleapis.com/gcc_static_files_backend/static/videos/lms_tutorial.mp4"
            thumbnail-src="https://storage.googleapis.com/gcc_prod_static_files_backend/static/images/kamalchhabbraadd.jpeg" /> -->

        <!-- Dots -->
        <!-- <div class="dots">
            <span v-for="i in 5" :key="i" :class="{ active: i === 1 }"></span>
        </div> -->

    </div>
</template>

<script setup lang="ts">
import img1 from '../../assets/img/campus/leader1.jpg';
import img2 from '../../assets/img/campus/leader2.jpg';
import img3 from '../../assets/img/campus/leader3.jpg';
import img4 from '../../assets/img/campus/leader4.jpg';
import img5 from '../../assets/img/campus/leader5.jpg';

const images = [img1, img2, img3, img4, img5];
</script>

<style scoped>
/* Section */
.leaders-section {
    background: #0f1115;
    padding: 80px 0;
    text-align: center;
}

/* Heading */
.title {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 40px;
}

.title span {
    color: #f59e0b;
}

.leaders-grid {
    max-width: 1100px;
    margin: auto;
    display: grid;
    /* Desktop: row 1 = 2 cols, row 2 = 3 cols — emulated with 6-col grid */
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto auto;
    gap: 6px;
}

.gi {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 14px;
    display: block;
}

/* Desktop: Row 1 — 2 images, each spanning 3 cols */
.gi-1 {
    grid-column: 1 / 4;
}

.gi-2 {
    grid-column: 4 / 7;
}

/* Desktop: Row 2 — 3 images, each spanning 2 cols */
.gi-3 {
    grid-column: 1 / 3;
    height: 180px;
}

.gi-4 {
    grid-column: 3 / 5;
    height: 180px;
}

.gi-5 {
    grid-column: 5 / 7;
    height: 180px;
}

/* VideoBox wrapper spacing */
:deep(.video-box-wrapper) {
    margin-top: 60px;
    padding: 0 20px;
}

/* Dots */
.dots {
    margin-top: 20px;
}

.dots span {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 4px;
    background: #555;
    border-radius: 50%;
}

.dots span.active {
    background: #fff;
}

/* Responsive */
@media (max-width: 768px) {
    .leaders-section {
        padding: 50px 16px;
    }

    .title {
        font-size: 16px;
    }

    .leaders-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto auto;
        grid-template-areas:
            "a a"
            "b d"
            "c d"
            "e e";
        gap: 8px;
    }

    .gi-1 {
        grid-area: a;
        grid-column: 1/-1;
        height: 180px;
    }

    .gi-2 {
        grid-area: b;
        grid-column: auto;
        height: 130px;
    }

    .gi-3 {
        grid-area: c;
        grid-column: auto;
        height: 130px;
    }

    .gi-4 {
        grid-area: d;
        grid-column: auto;
        height: 100%;
    }

    .gi-5 {
        grid-area: e;
        grid-column: 1/-1;
        height: 180px;
    }
}
</style>