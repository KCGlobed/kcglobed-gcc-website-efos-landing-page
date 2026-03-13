<template>
  <div class="undergraduate-warp">
    <div class="container">
      <div class="inner-undergraduate-warp">
        <div class="row g-4">
          <div
            class="col-lg-6 border-right col-sm-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="undergraduate-widget">
              <h3 class="reveal3">Undergraduate</h3>
              <ul class="undergraduate-list">
                <li>
                  <NuxtLink to="/programs">
                    Science & Technology
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/programs">
                    Business Administration
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/programs">
                    Nursing
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/programs">
                    Accounting
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </li>
              </ul>
              <NuxtLink to="/programs" class="default-btn">
                View All Programs
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
            </div>
          </div>
          <div
            class="col-lg-6 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="undergraduate-widget">
              <h3 class="reveal2">Online Programs</h3>
              <ul class="undergraduate-list">
                <li>
                  <NuxtLink to="/programs">
                    Science & Technology
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/programs">
                    Business Administration
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/programs">
                    Nursing
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/programs">
                    Accounting
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </li>
              </ul>
              <NuxtLink to="/programs" class="default-btn">
                View All Programs
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
  name: "UndergraduateOnlinePrograms",
};
</script>
