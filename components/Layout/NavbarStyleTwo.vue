<template>
  <nav :class="['navbar navbar-expand-lg top-navbar', { sticky: isSticky }]">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        <img src="~/assets/Logo/Logo/GCC-School-Logo-White.png" class="navbar-logo" style="width: 140px;" alt="logo" />
      </NuxtLink>
      <a class="navbar-toggler home1-one-toggler" @click="stateStoreInstance.onMobileNavbarShow">
        <span class="burger-menu">
          <span class="top-bar"></span>
          <span class="middle-bar"></span>
          <span class="bottom-bar"></span>
        </span>
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <!-- <li class="nav-item">
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
          </li> -->
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about-overview" class="nav-link">
              About Us
            </NuxtLink>
          </li>


          <li class="nav-item">
            <NuxtLink to="/programs" class="nav-link">
              Programs
            </NuxtLink>

          </li>

          <li class="nav-item">
            <a href="/admissions" class="nav-link">
              Admissions
            </a>
          </li>
          <li class="nav-item">
            <a href="/campus-life" class="nav-link">
              Campus Life
            </a>
          </li>

          <li class="nav-item">
            <NuxtLink to="/contact-us" class="nav-link">
              Contact Us
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
  name: "NavbarStyleTwo",
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
