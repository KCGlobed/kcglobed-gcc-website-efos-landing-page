<template>
  <div>
    <!-- <Preloader v-if="isLoading" /> -->
    <MobileDeviceNavbar />
    <NuxtPage />
    <SearchPopup />
    <MainSidebar />
    <GoTop />

    <!-- feedback button & popup -->
    <button class="feedback-btn" @click="showFeedback = true"><i class="ti ti-message"></i></button>
    <FeedbackPopup v-model="showFeedback" />

    <!-- only show on non‑profile routes -->
    <ContactSlide v-if="showContactSlide" />
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
    const showContactSlide = computed(() => {
      // adjust the check to match your profile route name/path
      return route.name !== "profile" && route.path !== "/profile";
    });

    const showFeedback = ref(false);

    return { showContactSlide, showFeedback };
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
