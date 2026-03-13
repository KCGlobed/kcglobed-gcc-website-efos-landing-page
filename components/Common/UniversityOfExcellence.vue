<template>
  <div class="enquiry-warp ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="zoom-in-up" data-aos-delay="200">
          <div class="enquiry-image">
            <h2>We Are A University Of Excellence!</h2>
            <div class="row">
              <div class="col-lg-4 col-sm-4">
                <div class="image">
                  <img src="~/assets/img/enquirys/enquiry1.jpg" alt="image" />
                </div>
              </div>
              <div class="col-lg-8 col-sm-8">
                <div class="image">
                  <img src="~/assets/img/enquirys/enquiry2.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="zoom-in-up" data-aos-delay="200">
          <div class="enquiry-content">
            <p>
              With over 100 years of history, the University of Tuva is a
              leading teaching and scientific research institution in Canada and
              worldwide.
            </p>
            <p>
              Considered the best
              <span>Canadian University and one of the best 100</span> European
              institutions according to the most important Higher Education
              rankings, U.Porto combines quality teaching and excellent research
              with the best academic experience.
              <span>We are waiting for you!</span>
            </p>
            <NuxtLink to="/how-to-apply" class="enquiry-link">
              See How To Apply
              <i class="ti ti-arrow-narrow-right"></i>
            </NuxtLink>
            <div class="all-shapes">
              <img
                src="~/assets/img/shapes/enquiry-shape1.png"
                class="enquiry-shape"
                alt="image"
              />
            </div>
            <div class="enquiry-content-style">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UniversityOfExcellence",
};
</script>
