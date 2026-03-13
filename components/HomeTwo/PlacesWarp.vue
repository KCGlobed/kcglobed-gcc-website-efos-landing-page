<template>
  <div class="places-warp">
    <div class="container-fluid">
      <div
        class="places-slider-warp"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <Swiper
          :slidesPerView="3"
          :spaceBetween="0"
          :centeredSlides="true"
          :rewind="true"
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
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }"
          :modules="[]"
          class="places-slider"
        >
          <SwiperSlide v-for="place in places" :key="place.id">
            <div class="places-widget">
              <img :src="place.image" alt="image" />
              <div class="content">
                <h3>
                  <NuxtLink to="/about-campus">Student Reviews</NuxtLink>
                </h3>
                <NuxtLink to="/about-campus" class="icon">
                  <i class="ti ti-arrow-narrow-right"></i>
                </NuxtLink>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/places/place1.jpg";
import image2 from "~/assets/img/places/place2.jpg";
import image3 from "~/assets/img/places/place3.jpg";

export default defineComponent({
  name: "PlacesWarp",
  data() {
    return {
      places: [
        {
          id: 1,
          image: image1,
          title: "Student Reviews",
          link: "/about-campus",
        },
        {
          id: 2,
          image: image2,
          title: "Campus Tour",
          link: "/about-campus",
        },
        {
          id: 3,
          image: image3,
          title: "Alumni News",
          link: "/about-campus",
        },
        {
          id: 4,
          image: image1,
          title: "Student Reviews",
          link: "/about-campus",
        },
        {
          id: 5,
          image: image2,
          title: "Campus Tour",
          link: "/about-campus",
        },
      ],
    };
  },
});
</script>
