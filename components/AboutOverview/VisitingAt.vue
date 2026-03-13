<template>
  <div class="find-program-warp style2 pb-100 bg-FAFAFA">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="visiting-content">
            <h2>Visiting At Tuva</h2>
            <p>
              Here you’ll find all the information about the reasons why the
              University of Tuva is a unique institution. Get to know why over
              200 thousand people a year visit us.
            </p>
            <p>
              Welcome to Tuva, where knowledge meets innovation and where every
              student's journey to success begins.
            </p>
            <div class="visiting-content-style">
              <div class="icon">
                <a href="tel:32112345678" class="icon">
                  <i class="ti ti-phone-call"></i>
                </a>
              </div>
              <div class="content">
                <h4>Call <a href="tel:32112345678">+321 1234 5678</a></h4>
                <p>for any kind of admission enquiry</p>
              </div>
            </div>
            <NuxtLink to="/contact" class="default-btn">
              Book A Visit Today
              <i class="ti ti-arrow-narrow-right"></i>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="program-images style2">
            <div class="row g-4">
              <div class="col-lg-5 col-md-5">
                <div class="image">
                  <img
                    src="~/assets/img/programs/style2-program1.jpg"
                    alt="image"
                  />
                </div>
                <div class="logo-content">
                  <div class="logo">
                    <div class="logo">
                      <img
                        src="~/assets/img/programs/program-logo1.png"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div class="content">
                    <h2>156+</h2>
                    <p>Programs Available For Students</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-7">
                <div class="big-image">
                  <img
                    src="~/assets/img/programs/style2-program2.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="all-shapes">
      <img
        src="~/assets/img/shapes/program-shape.png"
        class="program-shape"
        alt="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "VisitingAt",
};
</script>
