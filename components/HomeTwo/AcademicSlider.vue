<template>
  <div class="academic-slider-warp">
    <Swiper
      :slidesPerView="1"
      :spaceBetween="20"
      :rewind="true"
      :loop="true"
      :speed="1400"
      :pagination="{
        el: '.swiper-pagination2',
        clickable: true,
      }"
      :modules="[SwiperPagination]"
      class="academic-slider"
    >
      <SwiperSlide v-for="option in options" :key="option.id">
        <div class="academic-option">
          <div
            class="content"
            v-for="content in option.contents"
            :key="content.id"
          >
            <h3>{{ content.title }}</h3>
            <NuxtLink
              v-for="link in content.academicLink"
              :key="link.id"
              :to="link.link"
              class="academic-link"
            >
              <span>{{ link.text }}</span>
              <i :class="link.icon"></i>
            </NuxtLink>
          </div>
          <div
            class="academic-date"
            v-for="date in option.academicDate"
            :key="date.id"
          >
            <span class="title">{{ date.date }}</span>
            <NuxtLink :to="date.link" class="date-link">
              <span>{{ date.text }}</span>
              <i :class="date.icon"></i>
            </NuxtLink>
            <p>{{ date.closedText }}</p>
          </div>
        </div>
      </SwiperSlide>
      <div class="pagination-bullet-btn text-center">
        <div class="swiper-pagination2"></div>
      </div>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AcademicSlider",
  data() {
    return {
      options: [
        {
          id: 1,
          contents: [
            {
              id: 1,
              title: "Important Dates",
              academicLink: [
                {
                  id: 1,
                  text: "View Full Academic Calendar",
                  link: "/academic-calendar",
                  icon: "ti ti-arrow-narrow-right",
                },
                {
                  id: 2,
                  text: "View All Recruitment Events",
                  link: "/academic-calendar",
                  icon: "ti ti-arrow-narrow-right",
                },
              ],
            },
            {
              id: 2,
              title: "Book Now",
              academicLink: [
                {
                  id: 1,
                  text: "Book A Program Ad",
                  link: "/programs",
                  icon: "ti ti-arrow-narrow-right",
                },
                {
                  id: 2,
                  text: "Book A General Campus Tour",
                  link: "/academic-calendar",
                  icon: "ti ti-arrow-narrow-right",
                },
              ],
            },
          ],
          academicDate: [
            {
              id: 1,
              date: "Oct 30",
              closedText: "Thanks giving - college closed.",
            },
            {
              id: 2,
              date: "Nov 03",
              text: "Tuition Deposit Due For Winter 2024",
              link: "/tutoring-services",
              icon: "ti ti-arrow-narrow-right",
            },
            {
              id: 3,
              date: "Nov 13",
              text: "Balance Of Winter Tuition Fees Due",
              link: "/tutoring-services",
              icon: "ti ti-arrow-narrow-right",
            },
          ],
        },
        {
          id: 2,
          contents: [
            {
              id: 1,
              title: "Important Dates",
              academicLink: [
                {
                  id: 1,
                  text: "View Full Academic Calendar",
                  link: "/academic-calendar",
                  icon: "ti ti-arrow-narrow-right",
                },
                {
                  id: 2,
                  text: "View All Recruitment Events",
                  link: "/academic-calendar",
                  icon: "ti ti-arrow-narrow-right",
                },
              ],
            },
            {
              id: 2,
              title: "Book Now",
              academicLink: [
                {
                  id: 1,
                  text: "Book A Program Ad",
                  link: "/programs",
                  icon: "ti ti-arrow-narrow-right",
                },
                {
                  id: 2,
                  text: "Book A General Campus Tour",
                  link: "/academic-calendar",
                  icon: "ti ti-arrow-narrow-right",
                },
              ],
            },
          ],
          academicDate: [
            {
              id: 1,
              date: "Oct 30",
              closedText: "Thanks giving - college closed.",
            },
            {
              id: 2,
              date: "Nov 03",
              text: "Tuition Deposit Due For Winter 2024",
              link: "/tutoring-services",
              icon: "ti ti-arrow-narrow-right",
            },
            {
              id: 3,
              date: "Nov 13",
              text: "Balance Of Winter Tuition Fees Due",
              link: "/tutoring-services",
              icon: "ti ti-arrow-narrow-right",
            },
          ],
        },
      ],
    };
  },
});
</script>
