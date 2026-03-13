<template>
  <div class="admission-warp pb-100">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-lg-7" data-aos="fade-up" data-aos-delay="200">
          <div class="admission-image reveal2">
            <img src="~/assets/img/admission.jpg" alt="image" />
          </div>
        </div>
        <div class="col-lg-5" data-aos="fade-up" data-aos-delay="200">
          <div class="admission-content">
            <h3 class="reveal3">Admission & Aid</h3>
            <p>
              At Tuva University, we prepare you to launch your career by
              providing a supportive, creative, and professional environment
              from which to learn practical skills.
            </p>
            <ul class="admission-list">
              <li>
                <NuxtLink to="/about-overview">
                  Process Overview
                  <i class="ti ti-arrow-narrow-right"></i>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/administration-finance">
                  Fees & Financial Information
                  <i class="ti ti-arrow-narrow-right"></i>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/how-to-apply">
                  How To Apply
                  <i class="ti ti-arrow-narrow-right"></i>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdmissionAndAid",
};
</script>
