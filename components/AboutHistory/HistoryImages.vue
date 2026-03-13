<template>
  <div class="history-images-warp">
    <div class="container">
      <div class="history-slider-warp">
        <Swiper
          :slidesPerView="5"
          :spaceBetween="22"
          :loop="true"
          :speed="1400"
          :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }"
          :modules="[]"
          class="history-slider"
        >
          <SwiperSlide v-for="image in historyImages" :key="image.id">
            <div class="history-widget">
              <img :src="image.image" alt="image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/abouts/inner-about9.jpg";
import image2 from "~/assets/img/abouts/inner-about10.jpg";
import image3 from "~/assets/img/abouts/inner-about11.jpg";
import image4 from "~/assets/img/abouts/inner-about12.jpg";
import image5 from "~/assets/img/abouts/inner-about13.jpg";

export default defineComponent({
  name: "HistoryImages",
  data() {
    return {
      historyImages: [
        {
          id: 1,
          image: image1,
        },
        {
          id: 2,
          image: image2,
        },
        {
          id: 3,
          image: image3,
        },
        {
          id: 4,
          image: image4,
        },
        {
          id: 5,
          image: image5,
        },
        {
          id: 6,
          image: image1,
        },
        {
          id: 7,
          image: image2,
        },
      ],
    };
  },
});
</script>
