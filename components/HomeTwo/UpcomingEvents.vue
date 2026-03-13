<template>
  <div class="upcoming-event-warp pb-100">
    <div class="container">
      <div class="section-title">
        <h2 class="reveal3">Upcoming Events</h2>
      </div>
      <div class="event-slider-warp" data-aos="zoom-in-up" data-aos-delay="200">
        <Swiper
          :slidesPerView="2"
          :spaceBetween="20"
          :loop="false"
          :speed="1400"
          :pagination="{
            el: '.swiper-pagination3',
            clickable: true,
          }"
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
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }"
          :modules="[SwiperPagination]"
          class="event-slider"
        >
          <SwiperSlide v-for="event in events" :key="event.id">
            <div :class="['event-widget', event.bgClass]">
              <span>{{ event.tag }}</span>
              <h3>
                <NuxtLink to="/event-details">
                  {{ event.title }}
                </NuxtLink>
              </h3>
              <ul class="event-list">
                <li>
                  <i class="ti ti-calendar"></i>
                  {{ event.date }}
                </li>
                <li>
                  <i class="ti ti-map-pin"></i>
                  {{ event.location }}
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination3"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UpcomingEvents",
  data() {
    return {
      events: [
        {
          id: 1,
          bgClass: "bg-1",
          tag: "Career",
          title:
            "Nominate a teacher who made a difference through Tuva's Greatest High School Teacher contest",
          date: "26 Nov 2024",
          location: "32/6, Western Hill, Canada",
        },
        {
          id: 2,
          bgClass: "bg-2",
          tag: "Alumni",
          title:
            "Let us help you plan your finances, from first year to your final year",
          date: "28 Nov 2024",
          location: "32/6, Western Hill, Canada",
        },
        {
          id: 3,
          bgClass: "bg-1",
          tag: "Career",
          title:
            "Nominate a teacher who made a difference through Tuva's Greatest High School Teacher contest",
          date: "30 Nov 2024",
          location: "32/6, Western Hill, Canada",
        },
        {
          id: 4,
          bgClass: "bg-2",
          tag: "Alumni",
          title:
            "Let us help you plan your finances, from first year to your final year",
          date: "29 Nov 2024",
          location: "32/6, Western Hill, Canada",
        },
      ],
    };
  },
});
</script>
