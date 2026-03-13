<template>
  <div class="recognized-warp pt-5 mt-5">
    <div class="container">
      <div class="row align-items-start">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div class="recognized-image reveal2">
            <img src="~/assets/img/recognized.png" alt="image" />
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div class="recognized-content">
            <h2 class="reveal3">Professional learning that gets recognised globally</h2>
            <p>
              NFET is designed to identify high-potential commerce graduates and connect them with
              global finance, accounting, and corporate career pathways.
            </p>
            <NuxtLink to="/register" class="recognized-link">
              Apply Now
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
