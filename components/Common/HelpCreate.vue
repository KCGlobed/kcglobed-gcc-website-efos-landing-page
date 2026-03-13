<template>
  <div class="luvas-future pb-100">
    <div class="container">
      <div class="luva-inner-widget">
        <div class="blog-donate" data-aos="zoom-in-up" data-aos-delay="200">
          <div class="icon">
            <div class="icon">
              <img src="~/assets/img/svgs/donate.svg" alt="image" />
            </div>
          </div>
          <div class="content">
            <h6>Help create an Unlimited future for Luva students.</h6>
            <NuxtLink to="/international-student" class="donate-link">
              <span>Donate Today</span>
              <i class="ti ti-arrow-narrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpCreate",
};
</script>
