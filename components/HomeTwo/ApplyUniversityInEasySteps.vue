<template>
  <div class="apply-warp ptb-100">
    <div class="container">
      <div class="section-title">
        <!-- <h2 class="reveal3">Apply Tuva University In 3 Easy Steps</h2> -->
      </div>
      <div class="row justify-content-center align-items-center g-4 gx-5">
        <div class="col-lg-4 col-md-6" v-for="apply in applyItems" :key="apply.id" data-aos="fade-up"
          :data-aos-delay="apply.dataDelay">
          <div class="apply-card">
            <div class="icon">
              <img :src="apply.icon" alt="icon" />
            </div>
            <h3>{{ apply.title }}</h3>

            <ul class="module-list" v-if="apply.modules && apply.modules.length">
              <li v-for="(module, mIndex) in apply.modules" :key="mIndex">
                {{ module }}
              </li>
            </ul>
            <p>
              {{ apply.shortDesc }}
            </p>
            <!-- <NuxtLink :to="apply.btnLink" class="apply-link">
              <span>{{ apply.btnText }}</span>
              <i class="ti ti-arrow-narrow-right"></i>
            </NuxtLink> -->
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
  name: "ApplyUniversity",
  data() {
    return {
      applyItems: [
        {
          id: 1,
          icon: icon1,
          title: "Applied Knowledge Level",
          modules: [
            "Business and Technology (BT)*",
            "Management Accounting (MA)*",
            "Financial Accounting (FA)*",
          ],
          shortDesc:
            "Already exempted for commerce graduates*",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "200",
        },
        {
          id: 2,
          icon: icon2,
          title: "Applied Skills Level",
          shortDesc:
            "Already exempted for commerce graduates*",
          modules: [
            " Corporate & Business Law (LW)*",
            " Performance Management (PM)",
            "Taxation (TX)*",
            "Financial Reporting (FR)",
            "Audit & Assurance (AA)",
            "Financial Management (FM)",
          ],
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "300",
        },
        {
          id: 3,
          icon: icon3,
          title: "Strategic Professional Level",

          modules: [
            "Strategic Business Reporting (SBR)",
            " Strategic Business Leader (SBL",
            "Advanced Audit & Assurance (AAA)",
            "Advanced Financial Management (AFM)",
          ],
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "400",
        },
      ],
    };
  },
});
</script>
