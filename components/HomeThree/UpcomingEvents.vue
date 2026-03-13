<template>
  <div class="event-plan-warp ptb-100 bg-EEEEF5">
    <div class="container">
      <div class="section-warp">
        <h2 class="reveal3">Upcoming Events</h2>
      </div>
      <div
        class="event-plan-slider-warp"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <Swiper
          :slidesPerView="3"
          :spaceBetween="24"
          :loop="true"
          :speed="1400"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }"
          :modules="[SwiperNavigation]"
          class="event-plan-slider"
        >
          <SwiperSlide v-for="event in events" :key="event.id">
            <div class="event-plan-widget">
              <div class="image">
                <div class="image">
                  <NuxtLink to="/event-details">
                    <img :src="event.image" alt="image" />
                  </NuxtLink>
                </div>
              </div>
              <div class="content">
                <span>{{ event.tag }}</span>
                <h3>
                  <NuxtLink to="/event-details">
                    {{ event.title }}
                  </NuxtLink>
                </h3>
                <ul class="event-plan-list">
                  <li>
                    <i class="ti ti-map-pin"></i>
                    {{ event.location }}
                  </li>
                  <li>
                    <i class="ti ti-calendar"></i>
                    {{ event.date }}
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-btn style2">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/events/event1.jpg";
import image2 from "~/assets/img/events/event2.jpg";
import image3 from "~/assets/img/events/event3.jpg";

export default defineComponent({
  name: "UpcomingEvents",
  data() {
    return {
      events: [
        {
          id: 1,
          image: image1,
          tag: "Career",
          title:
            "Nominate a teacher who made a difference through Tuva's Greatest High School Teacher contest",
          date: "26 Nov 2024",
          location: "32/6, Western Hill, Canada",
        },
        {
          id: 2,
          image: image2,
          tag: "Alumni",
          title:
            "Let us help you plan your finances, from first year to your final year",
          date: "28 Nov 2024",
          location: "32/6, Western Hill, Canada",
        },
        {
          id: 3,
          image: image3,
          tag: "Career",
          title:
            "Nominate a teacher who made a difference through Tuva's Greatest High School Teacher contest",
          date: "30 Nov 2024",
          location: "32/6, Western Hill, Canada",
        },
        {
          id: 4,
          image: image1,
          tag: "Career",
          title:
            "Nominate a teacher who made a difference through Tuva's Greatest High School Teacher contest",
          date: "26 Nov 2024",
          location: "32/6, Western Hill, Canada",
        },
        {
          id: 5,
          image: image2,
          tag: "Alumni",
          title:
            "Let us help you plan your finances, from first year to your final year",
          date: "28 Nov 2024",
          location: "32/6, Western Hill, Canada",
        },
        {
          id: 6,
          image: image3,
          tag: "Career",
          title:
            "Nominate a teacher who made a difference through Tuva's Greatest High School Teacher contest",
          date: "30 Nov 2024",
          location: "32/6, Western Hill, Canada",
        },
      ],
    };
  },
});
</script>
