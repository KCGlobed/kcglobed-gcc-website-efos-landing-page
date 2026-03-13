<template>
  <div class="optional-events-warp">
    <div class="container-fluid">
      <div
        class="optional-event-slider-warp"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <Swiper
          :slidesPerView="3"
          :spaceBetween="5"
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
          class="optional-event-slider"
        >
          <SwiperSlide v-for="event in events" :key="event.id">
            <div class="optional-event-widget">
              <img :src="event.image" alt="image" />
              <NuxtLink to="/accessibility" class="optional-content">
                {{ event.title }}
              </NuxtLink>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/events/event4.jpg";
import image2 from "~/assets/img/events/event5.jpg";
import image3 from "~/assets/img/events/event6.jpg";

export default defineComponent({
  name: "OptionalEvents",
  data() {
    return {
      events: [
        {
          id: 1,
          image: image1,
          title: "Open Science",
        },
        {
          id: 2,
          image: image2,
          title: "Culture",
        },
        {
          id: 3,
          image: image3,
          title: "Sports",
        },
        {
          id: 4,
          image: image1,
          title: "Open Science",
        },
        {
          id: 5,
          image: image2,
          title: "Culture",
        },
        {
          id: 6,
          image: image3,
          title: "Sports",
        },
      ],
    };
  },
});
</script>
