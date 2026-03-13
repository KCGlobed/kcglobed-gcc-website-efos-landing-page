<template>
  <div class="program-page-warp ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="program-page-title">
            <h2>
              We Have <span>36+</span> Programs In Total In Tuva University
            </h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="program-page-content">
            <p>
              Tuva offers the variety of programming you might find at a large
              university, but with the personalized learning experience of a
              small, liberal arts school. We offer more than 36 majors, minors,
              graduate programs and advanced certificates.
            </p>
          </div>
        </div>
      </div>
      <div class="program-page-image">
        <div class="row g-5">
          <div
            class="col-lg-3 col-md-6"
            v-for="program in programs"
            :key="program.id"
            data-aos="fade-up"
            :data-aos-delay="program.dataDelay"
          >
            <div class="image">
              <img :src="program.image" class="image" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/programs/inner-program1.jpg";
import image2 from "~/assets/img/programs/inner-program2.jpg";
import image3 from "~/assets/img/programs/inner-program3.jpg";
import image4 from "~/assets/img/programs/inner-program4.jpg";

export default defineComponent({
  name: "ProgramsInTotal",
  data() {
    return {
      programs: [
        {
          id: 1,
          image: image1,
          dataDelay: "200",
        },
        {
          id: 2,
          image: image2,
          dataDelay: "300",
        },
        {
          id: 3,
          image: image3,
          dataDelay: "400",
        },
        {
          id: 4,
          image: image4,
          dataDelay: "500",
        },
      ],
    };
  },
});
</script>
