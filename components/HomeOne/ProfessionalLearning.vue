<template>
  <div class="recognized-warp">
    <div class="container">
      <div class="row align-items-start">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div class="recognized-image reveal2">
            <img src="~/assets/img/recognized.png" alt="image" />
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div class="recognized-content">
            <h2 class="reveal3">Professional learning that gets recognized</h2>
            <p>
              The mission of Tuva is to serve as a digital gateway and
              information hub for all members of the university community.
            </p>
            <NuxtLink to="/register" class="recognized-link">
              Register Now For Fall 2024
              <i class="ti ti-arrow-narrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfessionalLearning",
};
</script>
