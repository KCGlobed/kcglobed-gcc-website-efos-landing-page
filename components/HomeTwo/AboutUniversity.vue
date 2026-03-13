<template>
  <div class="about-warp ptb-100">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div class="about-logo-content">
            <div class="logo">
              <div class="logo">
                <img src="~/assets/img/abouts/about-logo1.png" alt="login" />
              </div>
            </div>
            <div class="content">
              <h3>About Tuva University</h3>
              <p>Study! Your Future Is Here!</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="zoom-in-up" data-aos-delay="200">
          <div class="about-content">
            <p>
              Welcome to our university's website! Use the search bar below to
              explore our diverse range of programs.
            </p>
            <p>
              Gathering the most complete offer of training programmes in
              Canada, the 14 Facilities of the Tuva offer unique conditions to
              those who want to build an academic path of excellence and
              properly valued by the labour market.
            </p>
            <NuxtLink to="/about-history" class="about-link">
              <span> More About Us</span>
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
  name: "AboutUniversity",
};
</script>
