<template>
  <div class="international-warp ptb-100">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-8">
          <div class="international-content">
            <div class="blog-title">
              <h2>International Student</h2>
              <p>
                Welcome Tuva alumni! Here, you can find out what your fellow
                classmates are up to, learn about alumni events, and get
                exclusive discounts and benefits. Join more than 215,000
                graduates celebrating their Tuva pride.
              </p>
            </div>
            <div class="survey-result">
              <h4>International: Thank you for having your say</h4>
              <p>
                Earlier this year, we conducted our second Tuva Alumni survey.
                Thank you to everyone who took the time to fill out the survey.
                Your voices will guide us forward as we find more ways to
                benefit you.
              </p>
              <NuxtLink to="/contact" class="survey-link">
                <span>View Tuva Alumni Survey Result</span>
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="international-list-widget">
            <ul class="international-list">
              <li>
                <NuxtLink to="/library-services">Student Stories</NuxtLink>
                <i class="ti ti-caret-right-filled"></i>
              </li>
              <li>
                <NuxtLink to="/faq">FAQs</NuxtLink>
                <i class="ti ti-caret-right-filled"></i>
              </li>
              <li>
                <NuxtLink to="/events">Upcoming Events</NuxtLink>
                <i class="ti ti-caret-right-filled"></i>
              </li>
              <li>
                <NuxtLink to="/privacy-policy">Support Tuva</NuxtLink>
                <i class="ti ti-caret-right-filled"></i>
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
  name: "InternationalStudent",
};
</script>
