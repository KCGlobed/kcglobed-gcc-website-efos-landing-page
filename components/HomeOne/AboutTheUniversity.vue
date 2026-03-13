<template>
  <div class="mission-warp pt-80 " style="background-color: #FBDCB2">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div class="mission-tab">
            <button class="tablinks" v-for="(mission, index) in missions" :key="mission.id"
              :class="{ active: activeIndex === index }" @mouseover="() => setActive(index)">
              <div class="mission-tab-btn">
                {{ mission.title }}
                <div class="icon">
                  <i class="ti ti-arrow-narrow-right"></i>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="tabcontent" v-for="(mission, index) in missions" :key="mission.id"
            :class="['tabcontent', { active: activeIndex === index }]" v-show="activeIndex === index">
            <div class="row">
              <div class="col-lg-6" data-aos="zoom-in-up" data-aos-delay="200">
                <div class="mission-image reveal2">
                  <img :src="mission.image" alt="Image" />
                  <img src="assets/img/shapes/mission-shape1.png" class="mission-shape" alt="image" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mission-content" data-aos="fade-up" data-aos-delay="200">
                  <!-- <h3>{{ mission.heading }}</h3> -->
                  <div class="mission-box">
                    <!-- <div class="icon">
                      <img src="assets/img/svgs/mission1.svg" alt="image" />
                    </div> -->
                    <h5>{{ mission.title }}</h5>
                    <p>{{ mission.description }}</p>
                    <NuxtLink :to="mission.viewBtnLink" class="mission-link"
                      v-if="mission.viewBtnLink && mission.title !== 'Mission' && mission.title !== 'Vision'">
                      <span>{{ mission.viewBtnText }}</span>
                      <i class="ti ti-arrow-narrow-right"></i>
                    </NuxtLink>
                  </div>
                  <NuxtLink :to="mission.btnLink" class="default-btn third-btn">
                    {{ mission.btnText }}
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "~/assets/img/missions/mission1.jpg";
import image2 from "~/assets/img/missions/mission2.jpg";
import image3 from "~/assets/img/missions/mission3.jpg";
import image4 from "~/assets/img/missions/mission4.jpg";
import image5 from "~/assets/img/missions/mission5.jpg";
import image6 from "~/assets/img/missions/mission6.png";

export default defineComponent({
  name: "AboutTheUniversity",
  setup() {
    const activeIndex = ref(1);

    const missions = [
      {
        id: 2,
        title: "Vision",
        image: image2,
        heading: "About The GCC School",
        description:
          "To build a globally trusted, equitable, and sustainable talent ecosystem that identifies latent potential early, aligns it with real-world opportunity, and develops future-ready leaders capable of delivering measurable impact across global enterprises. ",
        viewBtnText: "View Details",
        viewBtnLink: "/program-choice",
        btnText: "Campus Walkthrough",
        btnLink: "/campus-life",
      },
      {
        id: 1,
        title: "Mission",
        image: image6,
        heading: "About The GCC School",
        description:
          "To architect global career pathways by introducing India’s first inverse education model. This is where corporate outcomes precede education, ensuring a zero-risk transformation of selected talent into market-ready leaders through immersive industry engagement.",
        viewBtnText: "View Details",
        viewBtnLink: "/event-details",
        btnText: "Campus Walkthrough",
        btnLink: "/campus-life",
      },

      {
        id: 4,
        title: "Legacy",
        image: image4,
        heading: "About The GCC School",
        description:
          "The KCG team is committed to cultivating high standards of professionalism in every learner, regardless of academic background. By breaking traditional educational boundaries, we transform aspirations into globally relevant competencies. ",
        viewBtnText: "View Details",
        viewBtnLink: "https://www.kcglobed.com/",
        btnText: "Campus Walkthrough",
        btnLink: "/campus-life",
      },
      {
        id: 4,
        title: "Leadership",
        image: image4,
        heading: "About The GCC School",
        description:
          "The leadership of GCC School brings together experienced professionals from industry and academia to build a globally aligned ecosystem. With a strong focus on execution, mentorship, and ethical responsibility, the leadership ensures that Young Aspiring Professionals are guided by real-world insights and academic excellence. ",
        viewBtnText: "View Details",
        viewBtnLink: "/about-overview#leadership",
        btnText: "Campus Walkthrough",
        btnLink: "/campus-life",
      },
    ];

    const setActive = (index: number) => {
      activeIndex.value = index;
    };

    return {
      activeIndex,
      missions,
      setActive,
    };
  },
});
</script>
