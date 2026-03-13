<template>
  <div class="residence-warp ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="residence-content-widget">
            <div class="blog-title">
              <h2>Tuva Residence</h2>
              <p>
                Apply early to residence — you don't need to wait for your
                program acceptance!
              </p>
            </div>
            <div class="image">
              <img src="~/assets/img/enquirys/enquiry3.jpg" alt="image" />
            </div>
            <p>
              Living in a Tuva residence is perhaps the easiest way to begin
              your transition to Sheridan. It will provide you with the
              opportunity to quickly make lasting friendships, the comfort of
              living at a ‘home away from home,’ and the convenience of
              everything you need to live and study happily.
            </p>
            <p>
              Both the Davis Campus (Brampton) and the Trafalgar Campus
              (Oakville) have residence buildings, each offering living and
              study spaces for students.
            </p>
            <div class="residence-button">
              <NuxtLink to="/admission-form" class="default-btn">
                Apply To Residence
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
              <NuxtLink to="/about-campus" class="residence-link">
                <span>Book A Campus Tour</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="accessibility-link-widget">
            <ul class="accessibility-link-list">
              <li>
                <NuxtLink to="/accessibility">Accessibility At Tuva</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/book-store">Book Store</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/information-technology">
                  Information & Technology
                </NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/parking-locker">Parking & Locker</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/residence">Residence</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
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
  name: "Residence",
};
</script>
