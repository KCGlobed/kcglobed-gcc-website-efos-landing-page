<template>
  <div class="hero-style2-warp">
    <div class="container-fluid">
      <div class="hero-style2-content" data-aos="fade-up" data-aos-delay="300">
        <h2>Tuva - The <span>best</span> place to invest in your knowledge</h2>
        <p>
          Welcome to our university's website! Use the search bar below to
          explore our diverse range of programs.
        </p>
        <NuxtLink to="/about-overview" class="default-btn">
          View Report
          <i class="ti ti-arrow-narrow-right"></i>
        </NuxtLink>
      </div>
      <div class="hero-item-box" data-aos="fade-up" data-aos-delay="300">
        <div class="image">
          <div class="image">
            <img src="~/assets/img/heros/style2-hero2.png" alt="image" />
          </div>
        </div>
        <div class="content">
          <span class="title">Community</span>
          <h4>
            <NuxtLink to="/international-student">
              Tuva to celebrate more than 2,500 graduates at fall convocation
            </NuxtLink>
          </h4>
          <NuxtLink to="/alumni" class="item-link">
            <span>View Details</span>
            <i class="ti ti-arrow-narrow-right"></i>
          </NuxtLink>
        </div>
      </div>
      <div class="big-size-text" data-aos="zoom-in-dwon" data-aos-delay="300">
        <span>Tu</span>
        <span>va</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>
