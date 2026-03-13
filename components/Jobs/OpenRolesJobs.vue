<template>
  <div class="open-roles-jobs-warp pb-100">
    <div class="container">
      <div class="section-title">
        <h2>Open roles at Tuva</h2>
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

      <nav aria-label="Page navigation example" class="inner-pages-pagination">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="ti ti-chevron-left"></i>
            </a>
          </li>
          <li class="page-item"><a class="page-link active" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="ti ti-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
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
        {
          id: 3,
          title: "Part-Time / Partial Load Professors, FHSW - PSW Program",
          tag: "Career",
          date: "22 Nov 2024",
          location: "32/6, Western Hill, Canada",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "200",
        },
        {
          id: 4,
          title:
            "Software Engineer Project Director, Digital Identity - ITS - NFT Admin",
          tag: "Alumni",
          date: "14 Nov 2024",
          location: "32/6, Western Hill, Canada",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "300",
        },
        {
          id: 5,
          title:
            "Manager, International Admissions - Office of the Registrar - FT Admin",
          tag: "Career",
          date: "20 Nov 2024",
          location: "32/6, Western Hill, Canada",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "200",
        },
        {
          id: 6,
          title: "Project Manager - Longo Centre for Entrepreneurship",
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
