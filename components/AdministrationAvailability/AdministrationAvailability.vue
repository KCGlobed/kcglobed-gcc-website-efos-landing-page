<template>
  <div class="administration-warp pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="administration-content">
            <div class="content-one">
              <h2>Program Availability</h2>
            </div>
            <div class="administration-availability-content">
              <div class="title">
                <h4>Ontario College Advanced Diploma</h4>
              </div>
              <ul class="availability-list">
                <li>
                  <h6 class="content1">START DATE</h6>
                  <p class="content2">CAMPUS</p>
                  <span class="content3">DELIVERY</span>
                  <span class="content4">STATUS</span>
                </li>
                <li>
                  <h6 class="content1">Jan 2024</h6>
                  <p class="content2">Davis Campus (Brampton)</p>
                  <span class="content3">In Person</span>
                  <span class="content4 style1">Unavailable</span>
                </li>
                <li>
                  <h6 class="content1">Jan 2024</h6>
                  <p class="content2">Hazel McCallion (Mississauga)</p>
                  <span class="content3">In Person</span>
                  <span class="content4">Available</span>
                </li>
                <li>
                  <h6 class="content1">Sep 2024</h6>
                  <p class="content2">Davis Campus (Brampton)</p>
                  <span class="content3">In Person</span>
                  <span class="content4">Available</span>
                </li>
                <li>
                  <h6 class="content1">Sep 2024</h6>
                  <p class="content2">Hazel McCallion (Mississauga)</p>
                  <span class="content3">In Person</span>
                  <span class="content4">Available</span>
                </li>
                <li>
                  <h6 class="content1">Jan 2025</h6>
                  <p class="content2">Davis Campus (Brampton)</p>
                  <span class="content3">In Person</span>
                  <span class="content4">Available</span>
                </li>
                <li>
                  <h6 class="content1">Jan 2025</h6>
                  <p class="content2">Hazel McCallion (Mississauga)</p>
                  <span class="content3">In Person</span>
                  <span class="content4">Available</span>
                </li>
              </ul>
            </div>
            <h5 class="laptop-content">
              <i class="ti ti-device-laptop"></i>
              Laptop Required
            </h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="administration-small-widget">
            <h5>Information</h5>
            <div class="administration-item">
              <span>Faculty:</span>
              <p>Tuva School of Business</p>
            </div>
            <div class="administration-item">
              <span>Designation:</span>
              <p>Tuva College Advanced Diploma</p>
            </div>
            <div class="administration-item">
              <span>Duration:</span>
              <p>3 years (6 semesters)</p>
            </div>
            <div class="administration-item">
              <span>Location:</span>
              <p>Davis Campus</p>
              <p>7899 McLaughlin Road, Brampton</p>
            </div>
            <div class="administration-item">
              <span>Language:</span>
              <p>English, French</p>
            </div>
          </div>
          <NuxtLink to="/admission-form" class="default-btn administration-small">
            Apply Today
            <i class="ti ti-arrow-narrow-right"></i>
          </NuxtLink>
          <NuxtLink to="/about-campus" class="administration-requirements">
            Book A Campus Tour
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdministrationAvailability",
};
</script>
