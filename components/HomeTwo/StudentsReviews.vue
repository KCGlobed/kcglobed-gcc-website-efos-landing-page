<template>
  <div class="student-review-warp ptb-100">
    <div class="container">
      <div class="section-warp">
        <h2 class="reveal2">Student’s Reviews</h2>
        <a href="#" class="section-link">
          <span>View All</span>
          <i class="ti ti-arrow-narrow-right"></i>
        </a>
      </div>
      <div
        class="student-review-slider-warp"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <Swiper
          :slidesPerView="3"
          :spaceBetween="30"
          :rewind="true"
          :loop="false"
          :speed="1400"
          :pagination="{
            el: '.swiper-pagination1',
            type: 'progressbar',
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
          :modules="[SwiperPagination]"
          class="review-slider"
        >
          <SwiperSlide v-for="review in reviews" :key="review.id">
            <div class="review-widget">
              <ul class="star-list">
                <li>
                  <i class="ti ti-star-filled"></i>
                </li>
                <li>
                  <i class="ti ti-star-filled"></i>
                </li>
                <li>
                  <i class="ti ti-star-filled"></i>
                </li>
                <li>
                  <i class="ti ti-star-filled"></i>
                </li>
                <li>
                  <i class="ti ti-star-filled"></i>
                </li>
              </ul>
              <h4>{{ review.title }}</h4>
              <p>
                {{ review.description }}
              </p>
              <ul class="review-details">
                <li>
                  <img :src="review.image" alt="image" />
                </li>
                <li>
                  <span>{{ review.name }}</span>
                </li>
                <li>
                  Class of
                  <span>{{ review.year }}</span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination1"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/smalls/review1.png";
import image2 from "~/assets/img/smalls/review2.png";
import image3 from "~/assets/img/smalls/review2.png";

export default defineComponent({
  name: "StudentsReviews",
  data() {
    return {
      reviews: [
        {
          id: 1,
          image: image1,
          name: "MICHEAL",
          title: "Innovative Learning for the Future!",
          description:
            "This university is at the forefront of technology and research. I've had the chance to work on cutting-edge projects and feel well-prepared for a rapidly evolving job market.",
          year: "2024",
        },
        {
          id: 2,
          image: image2,
          name: "JESSICA",
          title: "A Life-Changing Experience!",
          description:
            "My time at this university has been truly transformation. The dedicated professors, diverse campus, and countless opportunities for growth have shaped me into a more confident and capable individual.",
          year: "2024",
        },
        {
          id: 3,
          image: image3,
          name: "SARAH",
          title: "A Supportive Academic Community!",
          description:
            "I've been amazed by the level of support I've received from both faculty and fellow students. Whether it's one-on-one mentorship or study groups, there's a sense of camaraderie here that's truly inspiring.",
          year: "2022",
        },
        {
          id: 4,
          image: image1,
          name: "MICHEAL",
          title: "Innovative Learning for the Future!",
          description:
            "This university is at the forefront of technology and research. I've had the chance to work on cutting-edge projects and feel well-prepared for a rapidly evolving job market.",
          year: "2022",
        },
        {
          id: 5,
          image: image2,
          name: "JESSICA",
          title: "A Life-Changing Experience!",
          description:
            "My time at this university has been truly transformation. The dedicated professors, diverse campus, and countless opportunities for growth have shaped me into a more confident and capable individual.",
          year: "2024",
        },
      ],
    };
  },
});
</script>
