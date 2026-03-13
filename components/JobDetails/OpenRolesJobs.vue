<template>
  <div class="open-roles-jobs-warp pb-100">
    <div class="container">
      <div class="section-title">
        <h2>Related Job Post</h2>
      </div>
      <div class="row g-4">
        <div class="col-lg-6" v-for="job in jobs" :key="job.id" data-aos="fade-up" :data-aos-delay="job.dataDelay">
          <div class="event-widget bg-1 open-role-card">
            <span>{{ job.tag }}</span>
            <h3>
              <NuxtLink to="/job-details">
                {{ job.title }}
              </NuxtLink>
            </h3>
            <ul class="event-list">
              <li>
                <i class="ti ti-calendar"></i>
                {{ job.date }}
              </li>
              <li>
                <i class="ti ti-map-pin"></i>
                {{ job.location }}
              </li>
            </ul>
            <NuxtLink :to="job.btnLink" class="default-btn">
              Apply Now
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
  name: "OpenRolesJobs",
  data() {
    return {
      jobs: [
        {
          id: 1,
          title:
            "Senior Advancement Officer, Major & Planned Gifts - FT Admin Temp",
          tag: "Career",
          date: "30 Nov 2024",
          location: "32/6, Western Hill, Canada",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "200",
        },
        {
          id: 2,
          title:
            "Administrator, Convocation and Institutional Events, UofGH - PT Admin (2-Year Contract)",
          tag: "Alumni",
          date: "28 Nov 2024",
          location: "32/6, Western Hill, Canada",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "300",
        },
      ],
    };
  },
});
</script>
