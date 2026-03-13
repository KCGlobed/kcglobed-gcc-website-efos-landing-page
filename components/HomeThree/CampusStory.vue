<template>
  <div class="campus-story-warp pt-100">
    <div class="container-fluid">
      <div
        class="campus-slider-warp"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <Swiper
          :slidesPerView="2"
          :spaceBetween="10"
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
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }"
          :modules="[]"
          class="campus-slider"
        >
          <SwiperSlide v-for="story in stories" :key="story.id">
            <div
              :class="['campus-widget', story.styleClass]"
              v-if="story.style1"
            >
              <div class="image">
                <NuxtLink to="/about-campus">
                  <img :src="story.image" alt="" />
                </NuxtLink>
              </div>
              <div class="content">
                <h3>{{ story.title }}</h3>
                <NuxtLink to="/about-campus" class="icon">
                  <i class="ti ti-arrow-narrow-right"></i>
                </NuxtLink>
              </div>
            </div>

            <div
              :class="['campus-widget', story.styleClass]"
              v-if="story.style2"
            >
              <div class="content">
                <h3>{{ story.title }}</h3>
                <NuxtLink to="/about-campus" class="icon">
                  <i class="ti ti-arrow-narrow-right"></i>
                </NuxtLink>
              </div>
              <div class="image">
                <NuxtLink to="/about-campus">
                  <img :src="story.image" alt="" />
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

import image1 from "~/assets/img/campus/campus1.jpg";
import image2 from "~/assets/img/campus/campus2.jpg";

export default defineComponent({
  name: "CampusStory",
  data() {
    return {
      stories: [
        {
          id: 1,
          styleClass: "style1",
          style1: true,
          image: image1,
          title: "Campus Story",
        },
        {
          id: 2,
          styleClass: "style2",
          style2: true,
          image: image2,
          title: "Campus Story",
        },
        {
          id: 3,
          styleClass: "style1",
          style1: true,
          image: image1,
          title: "Campus Story",
        },
        {
          id: 4,
          styleClass: "style2",
          style2: true,
          image: image2,
          title: "Campus Story",
        },
      ],
    };
  },
});
</script>
