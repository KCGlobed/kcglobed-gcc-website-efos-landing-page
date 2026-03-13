<template>
  <div>
    <!-- <Preloader v-if="isLoading" /> -->
    <MobileDeviceNavbar />
    
    <!-- Show 404 if not on an allowed page -->
    <div v-if="!isAllowedPage" class="container d-flex align-items-center justify-content-center" style="min-height: 80vh">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3"><span class="text-danger">Oops!</span> Page not found.</p>
        <p class="lead">This page is not available.</p>
        <NuxtLink to="/" class="btn btn-primary mt-4">
          Go Back to Home
        </NuxtLink>
      </div>
    </div>

    <!-- Show allowed page content -->
    <NuxtPage v-else />
    
    <SearchPopup />
    <MainSidebar />
    <GoTop />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRoute } from "vue-router";         // Nuxt3: from '#app'
import Preloader from "./Preloader.vue";
import MobileDeviceNavbar from "./MobileDeviceNavbar.vue";
import SearchPopup from "./SearchPopup.vue";
import MainSidebar from "./MainSidebar.vue";
import ContactSlide from "../components/ContactSlide/ContactSlide.vue";
import GoTop from "./GoTop.vue";
import FeedbackPopup from "../components/FeedbackPopup.vue";

export default defineComponent({
  components: {
    // Preloader,
    MobileDeviceNavbar,
    SearchPopup,
    MainSidebar,
    GoTop,
    ContactSlide,               // register it
    FeedbackPopup,
  },
  setup() {
    const route = useRoute();
    
    const ALLOWED_ROUTES = ["/", "/terms-conditions", "/privacy-policy"];
    const ALLOWED_NAMES  = ["index", "terms-conditions", "privacy-policy"];

    const isAllowedPage = computed(() => {
      return (
        ALLOWED_ROUTES.includes(route.path) ||
        ALLOWED_NAMES.includes(String(route.name))
      );
    });

    const showContactSlide = computed(() => {
      return route.name !== "profile" && route.path !== "/profile";
    });

    const showFeedback = ref(false);

    return { isAllowedPage, showContactSlide, showFeedback };
  },
  // data() {
  //   return {
  //     isLoading: true,
  //   };
  // },
  // mounted() {
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 60);
  // },
});
</script>

<style>
.feedback-btn {
  position: fixed;
  right: 5px;
  bottom: 6rem;
  background: #A13E99;
  color: #fff;
  border: none;
  padding: .75rem 1rem;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .3);
  cursor: pointer;
  z-index: 999;
  font-weight: 500;
  transition: background 0.3s ease;
}

.feedback-btn i {
  font-size: 24px;
}

.feedback-btn:hover {
  background: #74326e;
}
</style>
