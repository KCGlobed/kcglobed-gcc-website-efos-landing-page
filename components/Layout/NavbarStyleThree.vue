<template>
  <nav :class="[
    'navbar navbar-expand-lg top-navbar transparent-bg',
    { sticky: isSticky },
  ]">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        <img src="~/assets/img/logo-style3.png" class="navbar-logo style3-logo" alt="logo" />
        <img src="~/assets/img/logo.png" class="sticky-logo" alt="logo" />
      </NuxtLink>
      <a class="navbar-toggler home1-one-toggler" @click="stateStoreInstance.onMobileNavbarShow">
        <span class="burger-menu">
          <span class="top-bar"></span>
          <span class="middle-bar"></span>
          <span class="bottom-bar"></span>
        </span>
      </a>
      <div class="collapse navbar-collapse">
        <ul class="social-list me-auto">
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
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Home
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link"> Home Demo - 1 </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/home-two" class="nav-link">
                  Home Demo - 2
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/home-three" class="nav-link">
                  Home Demo - 3
                </NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              About Us
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <NuxtLink to="/about-overview" class="nav-link">
                  About Overview
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/about-campus" class="nav-link">
                  About Campus
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/about-mission-values" class="nav-link">
                  About Mission Values
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/about-history" class="nav-link">
                  About University History
                </NuxtLink>
              </li>
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Facilities
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/facilities" class="nav-link">
                      About Facilities
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/facility-architecture" class="nav-link">
                      About Facility Architecture
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/facility-requirements" class="nav-link">
                      About Facility Requirements
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Pages
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <NuxtLink to="/how-to-apply" class="nav-link">
                  How To Apply
                </NuxtLink>
              </li>
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Jobs
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/jobs" class="nav-link">Jobs</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/job-details" class="nav-link">
                      Job Details
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Application Forms
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/admission-form" class="nav-link">
                      Personal Information
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/academic-information" class="nav-link">
                      Academic Information
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/english-proficiency" class="nav-link">
                      English Proficiency
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/program-choice" class="nav-link">
                      Program Choice
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/document-upload" class="nav-link">
                      Document Upload
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/submission" class="nav-link">
                      Submission
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Blogs
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/blog" class="nav-link">Our Blog</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/blog-details" class="nav-link">
                      Blog Details
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Events
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/events" class="nav-link">
                      Our Events
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/event-details" class="nav-link">
                      Event Details
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink to="/faq" class="nav-link">FAQ</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/schedule" class="nav-link">
                  Schedule A Tour
                </NuxtLink>
              </li>
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  My Account
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/login" class="nav-link">Login</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/register" class="nav-link">
                      Register
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink to="/alumni" class="nav-link">Alumni</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/academic-calendar" class="nav-link">
                  Academic Calendar
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/contact" class="nav-link">Contact Us</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/terms-conditions" class="nav-link">
                  Terms & Conditions
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/privacy-policy" class="nav-link">
                  Privacy Policy
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Programs
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <NuxtLink to="/programs" class="nav-link">
                  All Programs
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/undergraduate-programs" class="nav-link">
                  Undergraduate Programs
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/graduate-programs" class="nav-link">
                  Graduate Programs
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/administration-overview" class="nav-link">
                  Administration Overview
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/administration-courses" class="nav-link">
                  Administration Courses
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/administration-admission-requirements" class="nav-link">
                  Administration Requirements
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/administration-finance" class="nav-link">
                  Administration Finance
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/administration-availability" class="nav-link">
                  Administration Availability
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Admissions
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <NuxtLink to="/transfer-credit" class="nav-link">
                  Transfer Credit
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/student-fees" class="nav-link">
                  Student Fees
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Student Life
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Campus Services
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/accessibility" class="nav-link">
                      Accessibility At Tuva
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/book-store" class="nav-link">
                      Book Store
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/information-technology" class="nav-link">
                      Information & Technology
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/parking-locker" class="nav-link">
                      Parking & Locker
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/residence" class="nav-link">
                      Residence
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Student Services
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/career-services" class="nav-link">
                      Career Services
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/health-services" class="nav-link">
                      Health Services
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/library-services" class="nav-link">
                      Library Services
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/tutoring-services" class="nav-link">
                      Tutoring Services
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink to="/experiential-learning" class="nav-link">
                  Experiential Learning
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/athletics-recreation" class="nav-link">
                  Athletics & Recreation
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink to="/international-student" class="nav-link">
              International
            </NuxtLink>
          </li>
        </ul>
        <div class="others-option d-flex align-items-center">
          <div class="option-item">
            <div class="search-bar main-menu__search search-toggler" @click="stateStoreInstance.onChange"
              style="cursor: pointer">
              <div class="search-btn">
                <img src="~/assets/img/svgs/search.svg" alt="image" />
              </div>
            </div>
          </div>

          <div class="option-item">
            <button class="btn side-bar-btn" type="button" @click="stateStoreInstance.onSidebarShow">
              <img src="~/assets/img/svgs/menu.svg" alt="svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "../../utils/store";

export default defineComponent({
  name: "NavbarStyleThree",
  setup() {
    const isSticky = ref(false);
    const stateStoreInstance = stateStore;

    onMounted(() => {
      window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 100;
      });
    });

    return {
      isSticky,
      stateStoreInstance,
    };
  },
});
</script>
