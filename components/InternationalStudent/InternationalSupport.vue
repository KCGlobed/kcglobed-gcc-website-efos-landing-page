<template>
  <div class="international-support-warp pb-100">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-lg-6">
          <div class="international-support-image">
            <img src="~/assets/img/informations/information3.jpg" alt="image" />
            <div class="small-image">
              <img
                src="~/assets/img/informations/information4.jpg"
                alt="image"
              />
            </div>
            <div class="round-shape">
              <img
                src="~/assets/img/svgs/main-log.svg"
                class="main-logo"
                alt="image"
              />
              <img
                src="~/assets/img/shapes/text-shape1.png"
                class="text-shape"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="international-support-content">
            <h2 class="reveal2 active">Support Tuva</h2>
            <p>
              Our students dream of possibilities. Together, we can create
              opportunities to help them realize their true potential. When you
              give to Tuva, you help us prepare students for a better career and
              a better life.
            </p>
            <p>
              Your support tells students that someone believes in them, and
              that is a powerful message to encourage.
            </p>
            <div class="info-button">
              <NuxtLink to="/contact" class="default-btn">
                Donate Monthly
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
              <NuxtLink to="/about-history" class="default-btn style2">
                Make A One Time Gift
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
            </div>
            <div class="international-info">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="item-one">
                    <h4>Information For Donors</h4>
                    <p>Call <a href="tel:+32112345678">+321 1234 5678</a></p>
                    <span>for any kind of admission enquiry</span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="item-two">
                    <h4>Charitable Registration Number</h4>
                    <p>107976565 RR0002</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InternationalSupport",
};
</script>
