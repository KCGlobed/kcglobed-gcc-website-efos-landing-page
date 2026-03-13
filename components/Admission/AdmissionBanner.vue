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
                        <span style="
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
                        </span>

                        <div class="content" style="margin-top: 20px;">
                            <h1 class="title" style="font-size: 40px;line-height: 1.4;">
                                <!-- {{ banner.heading }} -->
                                NFET Exam Registration <br> ₹2,500 + 18% GST <br> Instant Digital Access
                                <br>
                            </h1>
                            <p style="color: #fff;">
                                {{ banner.description }}
                            </p>
                            <div class="hero-btn">
                                <NuxtLink :to="banner.btnLink" class="default-btn">
                                    {{ banner.btnText }}
                                    <i class="ti ti-arrow-narrow-right"></i>
                                </NuxtLink>
                                <!-- <a :href="banner.btnLinkTwo" class="default-btn style2" download="Brochure.pdf">
                                    {{ banner.btnTextTwo }}
                                    <i class="ti ti-arrow-narrow-right"></i>
                                </a> -->
                            </div>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "../../assets/img/heros/hero1.jpg";
import gccPdf from "../../assets/gcc.pdf";

export default defineComponent({
    name: "AdmissionBanner",
    data() {
        return {
            banners: [
                {
                    id: 1,
                    bgClass: "bg1",
                    subTitle: "Cohort 2026 Applications Open",
                    image: image1,
                    heading: "World’s 1st School Backed  by Industry, Built on Execution",
                    description: "The National Future Employability Test (NFET) for Aspiring Finance & Accounting Professionals.",
                    btnText: "Apply Now",
                    btnLink: "#",
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
