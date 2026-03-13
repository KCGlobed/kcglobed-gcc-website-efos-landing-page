<template>
  <div class="culture-warp">
    <div class="container-fluid">
      <div class="row g-0">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div class="culture-box">
            <img src="~/assets/img/cultures/culture1.jpg" alt="image" />
            <div class="content">
              <h3>
                <NuxtLink to="/about-campus">Our University Culture</NuxtLink>
              </h3>
              <p>
                Our University culture is a rich tapestry of values, traditions,
                and shared experiences.
              </p>
              <NuxtLink to="/about-campus" class="culture-link">
                <span>View Details</span>
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="culture-box" data-aos="fade-up" data-aos-delay="200">
            <img src="~/assets/img/cultures/culture2.jpg" alt="image" />
            <div class="content">
              <h3>
                <NuxtLink to="/about-campus">Our University Culture</NuxtLink>
              </h3>
              <p>
                Our University culture is a rich tapestry of values, traditions,
                and shared experiences.
              </p>
              <NuxtLink to="/about-campus" class="culture-link">
                <span>View Details</span>
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CultureWarp",
};
</script>
