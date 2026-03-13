<template>
  <div class="choose-warp">
    <div class="container-fluid">
      <div class="row g-0">
        <div
          class="col-lg-3 col-md-6"
          v-for="service in services"
          :key="service.id"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <div :class="['choose-card', service.bgClass]">
            <h3>{{ service.title }}</h3>
            <p>{{ service.shortDesc }}</p>
            <NuxtLink :to="service.link" class="choose-link">
              <span>{{ service.linkText }}</span>
              <i class="ti ti-arrow-narrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesContent",
  data() {
    return {
      services: [
        {
          id: 1,
          bgClass: "bg-1",
          title: "You Choose",
          shortDesc:
            "Six ways to stack your resume cover 16 areas of interest to advance your career.",
          linkText: "Professional Learning",
          link: "/experiential-learning",
          dataDelay: "200",
        },
        {
          id: 2,
          bgClass: "bg-2",
          title: "Tuva Pro",
          shortDesc:
            "Professionals can power up with immersive four-week micro-credentials.",
          linkText: "Tuva Pro",
          link: "/accessibility",
          dataDelay: "300",
        },
        {
          id: 3,
          bgClass: "bg-3",
          title: "Get Funded",
          shortDesc:
            "Learners, immigrants and employers have access to different funding opportunities.",
          linkText: "See Funding Option",
          link: "/career-services",
          dataDelay: "400",
        },
        {
          id: 4,
          bgClass: "bg-4",
          title: "Dream Bigger",
          shortDesc:
            "Dream bigger with a 4 years honors degree with Tuva education.",
          linkText: "Degree With Work Experience",
          link: "/graduate-programs",
          dataDelay: "500",
        },
      ],
    };
  },
});
</script>
