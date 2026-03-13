<template>
  <div class="service-warp bg-E8E8F4 ptb-100">
    <div class="container">
      <div class="row align-items-start g-4">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div class="service-content">
            <h2 class="reveal3">
              The world is changing and so we are in the wave
            </h2>
            <p>
              The mission of Tuva is to serve as a digital gateway and
              information hub for all members of the university community.
            </p>
            <NuxtLink to="/programs" class="default-btn">
              New Programs
              <i class="ti ti-arrow-narrow-right"></i>
            </NuxtLink>
            <ul class="service-list">
              <li>
                <i class="ti ti-check"></i>
                5 New programs on health sector.
              </li>
              <li>
                <i class="ti ti-check"></i>
                32 New programs based on bio-research.
              </li>
              <li>
                <i class="ti ti-check"></i>
                12 New IT programs.
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div class="service-image">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="image reveal2">
                  <img src="~/assets/img/services/service1.jpg" alt="image" />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="image style2 reveal2">
                  <img src="~/assets/img/services/service2.jpg" alt="image" />
                </div>
              </div>
            </div>
            <div class="service-counter">
              <div class="d-flex align-items-center justify-content-center">
                <div class="icon">
                  <div class="icon style">
                    <img src="~/assets/img/svgs/service.svg" alt="" />
                  </div>
                </div>
                <h2 class="counter">15</h2>
                <h2 class="plus">+</h2>
              </div>
              <p>AWARDS COLLECTED IN BIO RESEARCH FIELD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeAreInTheWave",
};
</script>
