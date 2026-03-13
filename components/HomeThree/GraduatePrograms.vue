<template>
  <div class="management-warp ptb-100">
    <div class="container">
      <div class="section-warp">
        <h2 class="reveal3">Integrated Program Dedicated for GCC</h2>
      </div>
      <div class="management-slider-warp" data-aos="zoom-in-up" data-aos-delay="200">
        <Swiper :slidesPerView="5" :spaceBetween="24" :loop="true" :speed="1400" :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }" :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }" :modules="[SwiperNavigation]" class="management-slider">
          <SwiperSlide v-for="program in programs" :key="program.id">
            <div class="management-widget">
              <div class="image">
                <img :src="program.image" alt="image" />
              </div>
              <div class="content">
                <!-- <ul>
                  <li>
                    <img src="~/assets/img/svgs/graduate.svg" alt="icon" />
                    {{ program.tag }}
                  </li>
                </ul> -->
                <h3>
                  <NuxtLink to="/programs">
                    {{ program.title }}
                  </NuxtLink>
                </h3>
                <p>
                  {{ program.shortDesc }}
                </p>
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

import image1 from "~/assets/img/integratedprogram/1.png";
import image2 from "~/assets/img/integratedprogram/6.png";
import image3 from "~/assets/img/integratedprogram/3.png";
import image4 from "~/assets/img/integratedprogram/4.png";
import image5 from "~/assets/img/integratedprogram/5.jpeg";


export default defineComponent({
  name: "GraduatePrograms",
  data() {
    return {
      programs: [
        {
          id: 1,
          image: image1,
          title: "Global Financial Qualification ",
          link: "/programs",
          tag: "BUSINESS",
          shortDesc:
            "Prepares learners for international accounting and finance roles.",
        },
        {
          id: 2,
          image: image3,
          title: "Global Communication Certification",
          link: "/programs",
          tag: "ECONOMICS",
          shortDesc: "Builds professional communication skills for global workplaces.",
        },
        {
          id: 3,
          image: image2,
          title: "Executive Management Certification ",
          link: "/programs",
          tag: "BUSINESS",
          shortDesc:
            "Introduces practical management and business fundamentals. ",
        },
        {
          id: 4,
          image: image4,
          title: "Work Experience",
          link: "/programs",
          tag: "PUBLIC",
          shortDesc: " Includes internship exposure leading to guaranteed placement assistance. ",
        },

      ],
    };
  },
});
</script>
