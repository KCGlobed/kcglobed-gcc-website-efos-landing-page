<template>
    <div class="hero-warp">
        <Swiper :loop="true" :effect="'fade'" :speed="2000" :pagination="{
            el: '.swiper-pagination2',
            clickable: true,
        }" :modules="[SwiperEffectFade, SwiperPagination]" class="hero-slider">
            <SwiperSlide v-for="banner in banners" :key="banner.id">
                <div class="hero-slider-warp" :style="{
                    'background-image': `url(${banner.image})`,
                }">
                    <div class="container-fluid">
                        <!-- <span style="
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 9999px;
    background-color:#48526E; /* dark gray */
    color: #facc15; /* yellow text */
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    border: 1px solid #facc15;
    white-space: nowrap;
  ">
                            <span style="
      width: 8px;
      height: 8px;
      background-color: #facc15;
      border-radius: 50%;
      display: inline-block;
    "></span>
                            {{ banner.subTitle }}
                        </span> -->

                        <div class="content" style="margin-top: 20px;">
                            <h1 class="title" style="font-size: 40px;line-height: 1.4;">
                                <!-- {{ banner.heading }} -->
                                Where Potential Becomes Performance
                            </h1>
                            <!-- <p style="color: #fff;">
                                {{ banner.description }}
                            </p> -->
                            <!-- <div class="hero-btn">
                                <NuxtLink :to="banner.btnLink" class="default-btn">
                                    {{ banner.btnText }}
                                    <i class="ti ti-arrow-narrow-right"></i>
                                </NuxtLink>
                                <button class="default-btn style2" data-bs-toggle="modal"
                                    data-bs-target="#enquiryModal">
                                    {{ banner.btnTextTwo }}
                                    <i class="ti ti-arrow-narrow-right"></i>
                                </button>
                            </div> -->
                        </div>
                        <!-- <ul class="information">
              <li v-for="information in banner.informations" :key="information.id">
                <i :class="information.icon"></i>
                <NuxtLink :to="information.link">
                  {{ information.title }}
                </NuxtLink>
              </li>
            </ul> -->
                        <!-- <NuxtLink :to="banner.updateLink" class="update-link">
              <span>
                {{ banner.updateTitle }}
              </span>
              <i class="ti ti-arrow-narrow-right"></i>
            </NuxtLink> -->
                    </div>
                </div>
            </SwiperSlide>
            <!-- <div class="pagination-bullet-btn text-end">
        <div class="swiper-pagination2"></div>
      </div> -->
        </Swiper>
    </div>
    <div class="modal fade" id="enquiryModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title">GCC School – Enquiry Form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">

                </div>
            </div>
        </div>
    </div>
</template>

<style>
.form-floating>.form-select,
.form-floating>textarea {
    padding-top: 2rem !important;
    padding-bottom: 1rem !important;
    height: auto !important;
}

.form-floating>label {
    padding-top: 0.9rem !important;
}

.form-floating {
    margin-bottom: 1.2rem;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "../../assets/img/heros/About-US.png";
import image2 from "../../assets/img/heros/hero2.jpg";
import gccPdf from "../../assets/gcc.pdf";

export default defineComponent({
    name: "AboutUsBanner",
    methods: {
        validateForm() {
            this.errors = {
                name: "",
                mobile: "",
                email: "",
                city: "",
                state: "",
                qualification: "",
                status: "",
                college: "",
                source: "",
                consent: ""
            }

            if (!this.form.name) this.errors.name = "Name is required"
            if (!this.form.mobile) this.errors.mobile = "Mobile number is required"
            if (!this.form.qualification) this.errors.qualification = "Select qualification"
            if (!this.form.status) this.errors.status = "Select current status"
            if (!this.form.college) this.errors.college = "Select college/university"
            if (!this.form.source) this.errors.source = "Select how you heard about us"
            if (!this.form.consent) this.errors.consent = "Consent is required"

            return Object.keys(this.errors).length === 0
        },

        async submitForm() {
            if (!this.validateForm()) return

            try {
                const response = await fetch("https://your-api-url.com/enquiry", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.form)
                })

                if (response.ok) {
                    alert("Thank you! Our team will contact you soon.")

                    this.form = {
                        name: "",
                        mobile: "",
                        email: "",
                        city: "",
                        state: "",
                        qualification: "",
                        status: "",
                        college: "",
                        source: "",
                        remarks: "",
                        consent: false
                    }
                } else {
                    alert("Something went wrong. Please try again.")
                }
            } catch (error) {
                console.error(error)
                alert("Server error. Try later.")
            }
        }
    },
    data() {
        return {
            colleges: [
                { "id": 1, "name": "Kaushalya the Skill University" },
                { "id": 2, "name": "A.K.S. University" },
                { "id": 3, "name": "A.P.G. (Alakh Prakash Goyal) Shimla University" },
                { "id": 4, "name": "A.P.J. Abdul Kalam Technological University" },
                { "id": 5, "name": "AAFT University of Media and Arts" },
                { "id": 6, "name": "Abhilashi University" },
                { "id": 7, "name": "Abhyuday University" },
                { "id": 8, "name": "Academy of Maritime Education and Training" },
                { "id": 9, "name": "Acharya N.G. Ranga Agricultural University" },
                { "id": 10, "name": "Acharya Nagarjuna University" },
                { "id": 11, "name": "Acharya Narendra Deva Krishi Evam Prodyogik Vishwavidyalaya" },
                { "id": 12, "name": "Adamas University" },
                { "id": 13, "name": "Adani University" },
                { "id": 14, "name": "Adesh University" },
                { "id": 15, "name": "Adichunchanagiri University" }
            ],
            form: {
                name: "",
                mobile: "",
                email: "",
                city: "",
                state: "",
                qualification: "",
                status: "",
                college: "",
                source: "",
                remarks: "",
                consent: false,
            },
            errors: {
                name: "",
                mobile: "",
                email: "",
                city: "",
                state: "",
                qualification: "",
                status: "",
                college: "",
                source: "",
                consent: ""
            },
            banners: [
                {
                    id: 1,
                    bgClass: "bg1",
                    subTitle: "Cohort 2026 Applications Open",
                    image: image1,
                    heading: "World’s 1st School Backed  by Industry, Built on Execution",
                    description: "At GCC School, students don’t wait for placements. They start with them. Learning is structured around real roles, real work, and real responsibility because capability is built on execution.",
                    btnText: "Apply Now",
                    btnLink: "/about-overview",
                    btnTextTwo: "Download Brochure",
                    btnLinkTwo: gccPdf,
                    updateTitle: "View all latest news updates of Tuva",
                    updateLink: "/blog",
                    informations: [
                        {
                            id: 1,
                            icon: "ti ti-world",
                            title: "Take A Tour",
                            link: "/schedule",
                        },
                        {
                            id: 2,
                            icon: "ti ti-info-hexagon",
                            title: "Campus Information",
                            link: "/about-campus",
                        },
                        {
                            id: 3,
                            icon: "ti ti-ballpen",
                            title: "Apply Now",
                            link: "/admission-form",
                        },
                    ],
                }
            ],
        };
    },
});
</script>
