<template>
    <div class="floor-map">
        <div class="slider-wrapper">
            <!-- Left Arrow -->
            <!-- Left Arrow -->
            <button class="nav-btn nav-left" @click="prev" aria-label="Previous">
                <img src="../../assets/img/campus/left.png" alt="">
            </button>



            <!-- Track -->
            <div v-for="(img, i) in images" :key="i" class="card" :class="getClass(i)" @click="goTo(i)">
                <img :src="img.src" :style="{ transform: `scale(${img.scale})` }" />
            </div>
            <!-- Right Arrow -->
            <button class="nav-btn nav-right" @click="next" aria-label="Next">
                <img src="../../assets/img/campus/right.png" alt="">
            </button>
        </div>

        <!-- CTA -->
        <div class="cta">
            <button>Book a Campus Tour</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import img1 from '../../assets/img/campus/image5.png';
import img2 from '../../assets/img/campus/image6.jpg';
import img3 from '../../assets/img/campus/image7.jpg';

const images = [
    { src: img1, scale: 1.1 },
    { src: img2, scale: 1.2 },
    { src: img3, scale: 1.3 },
];
const current = ref(0);

function goTo(i: number) { current.value = i; }
function next() { current.value = (current.value + 1) % images.length; }
function prev() { current.value = (current.value - 1 + images.length) % images.length; }

function getClass(i: number) {
    const len = images.length;
    if (i === current.value) return 'active';
    if (i === (current.value - 1 + len) % len) return 'prev';
    if (i === (current.value + 1) % len) return 'next';
    return 'hidden';
}
</script>

<style scoped>
/* ── Section ──────────────────────────────────────────────── */
.floor-map {
    background: #E8E3EC;
    padding: 100px 0 60px;
    overflow: hidden;
}

/* ── Slider wrapper — full viewport width ─────────────────── */
.slider-wrapper {
    position: relative;
    width: 100%;
    height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* ── Cards track — overflow visible so side cards peek out ── */
.track {
    position: relative;
    width: 100%;
    height: 100%;
}

/* ── Base card ───────────────────────────────────────────── */
.card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 58vw;
    max-width: 680px;
    aspect-ratio: 16 / 9;
    border-radius: 18px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.45s ease,
        z-index 0s;
    transform: translate(-50%, -50%) scale(0.82);
    opacity: 0;
    z-index: 1;
    background: transparent;
}

.card img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}

.card.active {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    z-index: 3;
}

.card.active img {
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
}

.card.prev {
    transform: translate(calc(-50% - 15vw), -50%) scale(0.82);
    opacity: 0.8;
}

.card.next {
    transform: translate(calc(-50% + 15vw), -50%) scale(0.82);
    opacity: 0.8;
}

/* ── Hidden ──────────────────────────────────────────────── */
.card.hidden {
    opacity: 0;
    pointer-events: none;
}

/* ── Arrow buttons ───────────────────────────────────────── */
.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    flex-shrink: 0;
}

.nav-left {
    left: calc(50% - min(29vw, 340px) - 230px);
}

.nav-right {
    right: calc(50% - min(29vw, 340px) - 230px);
}

/* ── CTA ─────────────────────────────────────────────────── */
.cta {
    text-align: center;
    margin-top: 60px;
}

.cta button {
    background: #7b2c83;
    color: #fff;
    padding: 13px 36px;
    border-radius: 8px;
    border: none;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: 'Inter', sans-serif;
}

.cta button:hover {
    background: #6a2471;
}



/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 768px) {
    .floor-map {
        padding: 60px 0 40px;
    }

    .slider-wrapper {
        height: 420px;
        flex-direction: column;
    }

    .card {
        width: 72vw;
        max-width: 320px;
    }

    /* vertical stack: prev card peeks from top */
    .card.prev {
        transform: translate(-50%, calc(-50% - 100px)) scale(0.82);
        opacity: 0.65;
    }

    /* active card stays centered */
    .card.active {
        transform: translate(-50%, -50%) scale(1);
    }

    /* next card peeks from bottom */
    .card.next {
        transform: translate(-50%, calc(-50% + 100px)) scale(0.82);
        opacity: 0.65;
    }

    /* arrows become vertical up/down at center */
    .nav-btn {
        left: 50%;
        transform: translateX(-50%);
        top: auto;
    }

    .nav-left {
        left: 50%;
        top: -10px;
        transform: translateX(-50%) rotate(90deg);
    }

    .nav-right {
        right: auto;
        left: 50%;
        bottom: -10px;
        top: auto;
        transform: translateX(-50%) rotate(90deg);
    }

    .cta {
        margin-top: 40px;
    }
}
</style>