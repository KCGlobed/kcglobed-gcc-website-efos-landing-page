<template>
  <div>
    <div class="top-header-warp style2-top-header style3 transparent-bg only-992-device-none">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="top-header-details">
              <ul class="header-contact">
                <li>
                  <i class="ti ti-mail"></i>
                  <a href="mailto:info.gccschool.com">info@gccschool.com</a>
                </li>
                <li>
                  <i class="ti ti-phone-call"></i>
                  <a href="tel:132313242354">+1 3231 3242 354</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="top-header-link-details">
              <ul class="header-link">
                <li>
                  <NuxtLink to="/blog">Portal</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/academic-calendar">Calendar</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/alumni">Alumni</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/events">Events</NuxtLink>
                </li>
              </ul>
              <ul class="header-account">
                <li>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>ENG</option>
                    <option value="1">ARB</option>
                    <option value="2">FRS</option>
                    <option value="3">ARG</option>
                  </select>
                </li>
                <li>
                  <i class="ti ti-user"></i>
                  <NuxtLink to="/login">Login</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top-header-warp only-992-device">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="top-header-details">
              <ul class="social-list">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" class="icon">
                    <img src="~/assets/img/svgs/facebook.svg" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank" class="icon">
                    <img src="~/assets/img/svgs/twitter.svg" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" class="icon">
                    <img src="~/assets/img/svgs/instagram.svg" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" class="icon">
                    <img src="~/assets/img/svgs/linkedin.svg" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank" class="icon">
                    <img src="~/assets/img/svgs/youtube.svg" alt="icon" />
                  </a>
                </li>
              </ul>
              <ul class="header-contact">
                <li>
                  <i class="ti ti-mail"></i>
                  <a href="mailto:info.gccschool.com">info.gccschool.com</a>
                </li>
                <li>
                  <i class="ti ti-phone-call"></i>
                  <a href="tel:132313242354">+1 3231 3242 354</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="top-header-link-details">
              <ul class="header-link">
                <li>
                  <NuxtLink to="/blog">Portal</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/academic-calendar">Calendar</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/alumni">Alumni</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/events">Events</NuxtLink>
                </li>
              </ul>
              <ul class="header-account">
                <li>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>ENG</option>
                    <option value="1">ARB</option>
                    <option value="2">FRS</option>
                    <option value="3">ARG</option>
                  </select>
                </li>
                <li>
                  <i class="ti ti-user"></i>
                  <NuxtLink to="/login">Login</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeaderStyleTwo",
};
</script>
