<template>
    <div class="think-tank-area ptb-100">
        <div class="container">
            <div class="section-title text-center mb-50">
                <h2 class="title">GCC SCHOOL STRATEGIC <span class="highlight">THINK TANK</span></h2>
            </div>

            <div class="row g-4 justify-content-center align-items-center">
                <div v-for="(img, index) in images" :key="index" class="col-lg-2 col-md-4 col-6">
                    <div class="image-box">
                        <img :src="img" alt="Think Tank Member" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import img1 from "/mentor/1.svg";
import img2 from "/mentor/2.svg";
import img3 from "/mentor/4.svg";
import img6 from "/mentor/3.svg";
const images = [

    img1,
    img2,

    img6,
    img3,
    // img5,
    // img4,


]
</script>

<style scoped>
.think-tank-area {
    background: #f9fafb;
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

.section-title p {
    color: #4b5563;
    font-size: 16px;
    line-height: 1.6;
}

.max-600 {
    max-width: 600px;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.image-box {
    padding: 10px;
    transition: transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-box img {
    max-width: 100%;
    height: auto;
    /* filter: grayscale(100%);
    opacity: 0.7; */
    transition: all 0.3s ease;
}

.image-box:hover {
    transform: scale(1.05);
}

.image-box:hover img {
    filter: grayscale(0%);
    opacity: 1;
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
}
</style>
