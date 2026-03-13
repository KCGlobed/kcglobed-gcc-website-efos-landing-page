<template>
  <div class="video-warp pb-100">
    <div class="container">
      <div class="inner-video" data-aos="zoom-in" data-aos-delay="200">
        <video
          ref="videoRef"
          autoplay
          muted
          loop
          id="video"
          controls
          @playing="handlePlaying"
          @pause="handlePause"
        >
          <source src="~/assets/img/videos/luva.mp4" type="video/mp4" />
        </video>
        <div
          class="video-btn"
          id="circle-play-b"
          ref="circlePlayButtonRef"
          @click="togglePlay"
        >
          <div class="icon rounded-circle">
            <i class="ti ti-player-play-filled"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="all-shapes">
      <img
        src="~/assets/img/shapes/apply-shape2.png"
        class="apply-shape2"
        alt="image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "VideoPlayer",
  setup() {
    const videoRef = ref<HTMLVideoElement | null>(null);
    const circlePlayButtonRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (circlePlayButtonRef.value) {
        circlePlayButtonRef.value.style.opacity = "1";
      }
    });

    function togglePlay() {
      if (videoRef.value) {
        if (videoRef.value.paused || videoRef.value.ended) {
          videoRef.value.play();
        } else {
          videoRef.value.pause();
        }
      }
    }

    function handlePlaying() {
      if (circlePlayButtonRef.value) {
        circlePlayButtonRef.value.style.opacity = "0";
      }
    }

    function handlePause() {
      if (circlePlayButtonRef.value) {
        circlePlayButtonRef.value.style.opacity = "1";
      }
    }

    return {
      videoRef,
      circlePlayButtonRef,
      togglePlay,
      handlePlaying,
      handlePause,
    };
  },
});
</script>
