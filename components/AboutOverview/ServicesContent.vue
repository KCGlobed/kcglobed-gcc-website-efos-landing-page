<template>
  <div class="choose-warp about-choose-warp">
    <div class="container-fluid">
      <div class="row g-0">
        <div class="col-lg-3 col-md-6" v-for="service in services" :key="service.id" data-aos="zoom-in-up"
          data-aos-delay="200">
          <div :class="['choose-card', service.bgClass]" style="height: 100%;">
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
          bgClass: "bg-5",
          title: "Academic Qualification",
          shortDesc:
            "Final-year B.Com students must have minimum 60% / 6.0 CGPA up to 5th Semester. B.Com graduates (passed out) ,or M.Com/MBA pursuing/completed candidates must have passed B.Com with First Division.",
          linkText: "Professional Learning",
          link: "/experiential-learning",
          dataDelay: "200",
        },
        {
          id: 2,
          bgClass: "bg-2",
          title: "Backlog Status",
          shortDesc:
            "Candidates pursuing a degree must have no pending backlogs at the time of application.",
          linkText: "Tuva Pro",
          link: "/accessibility",
          dataDelay: "300",
        },
        {
          id: 3,
          bgClass: "bg-3",
          title: "Institution & Nationality",
          shortDesc:
            "Degree must be from a UGC-recognised university/institution, and the candidate must be an Indian citizen.",
          linkText: "See Funding Option",
          link: "/career-services",
          dataDelay: "400",
        },
        {
          id: 4,
          bgClass: "bg-4",
          title: "Age Criteria:",
          shortDesc:
            "Candidates must be born on or after 1st January 1996.",
          linkText: "Degree With Work Experience",
          link: "/graduate-programs",
          dataDelay: "500",
        },
      ],
    };
  },
});
</script>
