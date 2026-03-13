<template>
    <div class="video-box-wrapper">
        <div class="video-section">
            <div class="video-container">

                <!-- VIDEO -->
                <video ref="infoVideo" v-show="isVideoPlaying" :controls="isVideoPlaying" muted loop class="video-el"
                    @play="isVideoPlaying = true" @pause="isVideoPlaying = false">
                    <source :src="videoSrc" type="video/mp4" />
                </video>

                <!-- THUMBNAIL -->
                <img v-show="!isVideoPlaying" :src="thumbnailSrc" class="video-poster-img" :alt="thumbnailAlt"
                    @click="playVideo" />

                <!-- PLAY BUTTON -->
                <div v-show="!isVideoPlaying" class="play-overlay" @click="playVideo">
                    <div class="play-btn-circle">
                        ▶
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    videoSrc: string;
    thumbnailSrc: string;
    thumbnailAlt?: string;
}

const props = withDefaults(defineProps<Props>(), {
    thumbnailAlt: 'Video Thumbnail',
});

const isVideoPlaying = ref(false);
const infoVideo = ref<HTMLVideoElement | null>(null);

function playVideo() {
    if (infoVideo.value) {
        infoVideo.value.play();
        isVideoPlaying.value = true;
    }
}
</script>

<style scoped>
/* Wrapper */
.video-box-wrapper {
    display: flex;
    justify-content: center;
}

/* Box */
.video-section {
    position: relative;
    width: 100%;
    max-width: 780px;
    aspect-ratio: 16 / 9;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

/* Container */
.video-container {
    position: relative;
    width: 100%;
    height: 100%;
}

/* VIDEO */
.video-el {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #0b0b1a;
}

/* THUMBNAIL */
.video-poster-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    cursor: pointer;
}

/* PLAY OVERLAY */
.play-overlay {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
}

/* PLAY BUTTON */
.play-btn-circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: bold;
    color: #111;
    transition: 0.3s;
}

.play-overlay:hover .play-btn-circle {
    transform: scale(1.1);
}
</style>