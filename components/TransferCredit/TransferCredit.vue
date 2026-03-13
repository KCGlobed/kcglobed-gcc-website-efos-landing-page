<template>
  <div class="transfer-credit-warp ptb-100">
    <div class="container">
      <div class="section-title">
        <h2>Search And Transfer Your Credits</h2>
      </div>
      <div class="row g-4 justify-content-center">
        <div class="col-lg-4 col-md-6" v-for="credit in credits" :key="credit.id" data-aos="fade-up"
          :data-aos-delay="credit.dataDelay">
          <div class="transfer-credit-card">
            <div class="image">
              <img :src="credit.image" alt="image" />
            </div>
            <div class="content">
              <h3>
                <a href="#">
                  {{ credit.title }}
                </a>
              </h3>
              <p>
                {{ credit.shortDesc }}
              </p>
              <router-link :to="credit.btnLink" class="apply-link">
                <span>{{ credit.btnText }}</span>
                <i class="ti ti-arrow-narrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/enquirys/enquiry7.jpg";
import image2 from "~/assets/img/enquirys/enquiry8.jpg";
import image3 from "~/assets/img/enquirys/enquiry9.jpg";

export default defineComponent({
  name: "TransferCredit",
  data() {
    return {
      credits: [
        {
          id: 1,
          image: image1,
          title: "Transfer from Another Ontario College or University",
          shortDesc:
            "After you submit your application, an admissions representative will contact you and will help you to participate in the online exam.",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "200",
        },
        {
          id: 2,
          image: image2,
          title:
            "Transfer From an Out of Province or International College or University",
          shortDesc:
            "After you submit your application, an admissions representative will contact you and will help you to participate in the online exam.",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "300",
        },
        {
          id: 3,
          image: image3,
          title: "Transfer Prior Learning (PLAR) Credits",
          shortDesc:
            "After you submit your application, an admissions representative will contact you and will help you to participate in the online exam.",
          btnText: "Apply Now",
          btnLink: "/admission-form",
          dataDelay: "400",
        },
      ],
    };
  },
});
</script>
