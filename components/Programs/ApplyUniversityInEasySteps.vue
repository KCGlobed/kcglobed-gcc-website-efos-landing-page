<template>
  <div class="apply-warp ptb-100">
    <div class="container">
      <div class="section-title">
        <h2 class="reveal3">Apply Tuva University In 3 Easy Steps</h2>
      </div>
      <div class="row justify-content-center align-items-center g-4 gx-5">
        <div class="col-lg-4 col-md-6" v-for="apply in applyItems" :key="apply.id" data-aos="fade-up"
          :data-aos-delay="apply.dataDelay">
          <div class="apply-card">
            <div class="icon">
              <img :src="apply.icon" alt="icon" />
            </div>
            <h3>{{ apply.title }}</h3>
            <p>
              {{ apply.shortDesc }}
            </p>
            <NuxtLink :to="apply.btnLink" class="apply-link">
              <span>{{ apply.btnText }}</span>
              <i class="ti ti-arrow-narrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="all-shapes">
      <img src="~/assets/img/shapes/apply-shape1.png" class="apply-shape1" alt="image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import icon1 from "~/assets/img/svgs/apply1.svg";
import icon2 from "~/assets/img/svgs/apply2.svg";
import icon3 from "~/assets/img/svgs/apply3.svg";

export default defineComponent({
  name: "ApplyUniversityInEasySteps",
  data() {
    return {
      applyItems: [
        {
          id: 1,
          icon: icon1,
          title: "Apply through online form",
          shortDesc:
            "Tell us a little about yourself and we’ll help with the rest. Our convenient online application tool only takes 10 minutes to complete.",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "200",
        },
        {
          id: 2,
          icon: icon2,
          title: "Participate in online exam",
          shortDesc:
            "After you submit your application, an admissions representative will contact you and will help you to participate in the online exam.",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "300",
        },
        {
          id: 3,
          icon: icon3,
          title: "Get ready for start",
          shortDesc:
            "Once you’ve completed your application and connected with an admissions representative, you’re ready to create your schedule.",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "400",
        },
      ],
    };
  },
});
</script>
