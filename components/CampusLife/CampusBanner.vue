<template>
    <div class="campus-banner">
        <!-- Slides -->
        <transition-group name="slide-fade" tag="div" class="slides-container">
            <div v-for="(slide, i) in slides" v-show="current === i" :key="slide.id" class="slide"
                :style="{ backgroundImage: `url(${slide.image})` }">
                <!-- Dark overlay -->
                <div class="overlay" />

                <!-- Content + Dots stacked in one column -->
                <div class="content-wrap">
                    <h1 class="slide-heading" v-html="heading" />
                    <p class="slide-desc">{{ description }}</p>
                </div>
                <div class="dots">
                    <span v-for="(_, j) in slides" :key="j" class="dot" :class="{ active: current === j }"
                        @click="goTo(j)" />
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import campus1 from '../../assets/img/campus/image1.jpg';
import campus2 from '../../assets/img/campus/image2.jpg';
import campus3 from '../../assets/img/campus/image4.jpg';
import campusHero from '../../assets/img/campus/image3.jpg';

const heading = `Our campus is nestled within the vibrant <em class="accent">DLF Cyber City, located in Building 9B.</em>`;
const description = `You'll find yourself in the hub of India's GCCs and leading Fortune 500 firms, creating unparalleled opportunities for networking and growth for you.`;

const slides = [
    { id: 1, image: campus1 },
    { id: 2, image: campus2 },
    { id: 3, image: campusHero },
    { id: 4, image: campus3 },
];

const current = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;

function goTo(index: number) { current.value = (index + slides.length) % slides.length; }
function next() { goTo(current.value + 1); }
function prev() { goTo(current.value - 1); }

onMounted(() => { timer = setInterval(next, 5000); });
onUnmounted(() => { if (timer) clearInterval(timer); });
</script>

<style scoped>
/* ── Banner container ─────────────────────────────────────── */
.campus-banner {
    position: relative;
    width: 100%;
    /* Images are 1922×896 — preserve near-full height on desktop */
    height: min(896px, 80vh);
    overflow: hidden;
    background: #0d0d0d;
}

/* ── Slides wrapper ───────────────────────────────────────── */
.slides-container {
    position: relative;
    width: 100%;
    height: 100%;
}

/* ── Single slide ─────────────────────────────────────────── */
.slide {
    position: absolute;
    inset: 0;

    background-size: cover;

    background-position: 85% 70%;

    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    padding-left: clamp(24px, 14vw, 260px);
}

/* ── Gradient overlay (matches colour picker) ─────────────── */
.overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right,
            rgba(0, 0, 0, 0.72) 0%,
            rgba(0, 0, 0, 0.72) 14%,
            rgba(0, 0, 0, 0.14) 65%,
            rgba(0, 0, 0, 0.00) 100%);
}

.content-wrap {
    position: relative;
    z-index: 2;
    max-width: 960px;
    display: flex;
    flex-direction: column;
}

/* ── Heading ──────────────────────────────────────────────── */
.slide-heading {
    font-size: 40px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    line-height: 48px;
    letter-spacing: 0px;
    margin: 0 0 20px;
    max-width: 600px;
}

.slide-heading :deep(em),
.slide-heading :deep(.accent) {
    /* Span: Inter 700 Italic 62px — same size, just italic + orange */
    color: #FF8C00;
    font-style: italic;
    font-weight: 700;
}

/* ── Description ──────────────────────────────────────────── */
.slide-desc {
    font-size: 13.5px;
    color: rgba(255, 255, 255, 0.80);
    line-height: 1.75;
    max-width: 340px;
    margin: 0 0 28px;
}

/* ── Dots (sit directly below description) ────────────────── */
.dots {
    position: absolute;
    bottom: 40px;

    left: 50%;
    transform: translateX(-50%);
    /* 👈 perfect horizontal center */

    display: flex;
    gap: 10px;
    align-items: center;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    /* inactive = hollow circle */
    background: transparent;
    border: 2.5px solid rgba(255, 255, 255, 0.70);
    cursor: pointer;
    transition: background 0.25s, border-color 0.25s;
    flex-shrink: 0;
}

.dot.active {
    /* active = filled white circle */
    background: #ffffff;
    border-color: #ffffff;
}

/* ── Cross-fade ───────────────────────────────────────────── */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.7s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
}

/* ── Mobile ───────────────────────────────────────────────── */
@media (max-width: 768px) {
    .campus-banner {
        height: 70vh;
        min-height: 560px;
    }

    .slide {
        align-items: flex-end;
        justify-content: center;

        padding: 0 18px 70px;

        /* ✅ FIX: image framing */
        background-position: 20% -57px;
    }

    /* ✅ Better cinematic overlay */
    .overlay {
        background: linear-gradient(189.93deg, rgba(0, 0, 0, 0) 8.48%, rgba(0, 0, 0, 0.97) 69.11%);

    }

    .content-wrap {
        align-items: center;
        text-align: center;
        max-width: 320px;
    }

    /* ✅ FIX: heading size (main issue) */
    .slide-heading {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 12px;
    }

    /* ✅ tighter + cleaner */
    .slide-desc {
        font-size: 12.5px;
        line-height: 1.6;
        margin-bottom: 16px;
    }

    /* ✅ dots closer to content */
    .dots {
        bottom: 25px;
    }

    .dot {
        width: 9px;
        height: 9px;
    }
}
</style>
