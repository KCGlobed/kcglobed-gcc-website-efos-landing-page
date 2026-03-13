<template>
  <div :class="[
    'responsive-navbar offcanvas offcanvas-end',
    { show: stateStoreInstance.navbar },
    { closing: isClosing },
  ]" tabindex="-1" id="navbarOffcanvas">
    <div class="offcanvas-header">
      <NuxtLink to="/" @click="handleClick" class="logo d-inline-block">
        <img src="~/assets/Logo/Logo/GCC-School-Logo-White.jpeg" alt="logo" class="header-logo" />
      </NuxtLink>
      <button type="button" class="close-btn" @click="closeNavbar" aria-label="Close">
        <i class="ti ti-x"></i>
      </button>

    </div>
    <div class="offcanvas-body">
      <nav class="mobile-nav">
        <NuxtLink to="/" class="nav-item" @click="handleClick">
          <img src="~/assets/img/mobileHeader/Icon(1).png" alt="Home" class="nav-icon" />
          <span>Home</span>
        </NuxtLink>
        <NuxtLink to="/programs" class="nav-item" @click="handleClick">
          <img src="~/assets/img/mobileHeader/Icon(2).png" alt="Program" class="nav-icon" />
          <span>Program</span>
        </NuxtLink>
        <NuxtLink to="/nfet" class="nav-item" @click="handleClick">
          <img src="~/assets/img/mobileHeader/Icon(3).png" alt="NFET Exam" class="nav-icon" />
          <span>NFET Exam</span>
        </NuxtLink>
        <NuxtLink to="/campus-life" class="nav-item" @click="handleClick">
          <img src="~/assets/img/mobileHeader/Icon(4).png" alt="Campus Life" class="nav-icon" />
          <span>Campus Life</span>
        </NuxtLink>
        <NuxtLink to="/about-overview" class="nav-item" @click="handleClick">
          <img src="~/assets/img/mobileHeader/Icon(5).png" alt="About Us" class="nav-icon" />
          <span>About Us</span>
        </NuxtLink>

        <!-- Auth Links -->
        <NuxtLink v-if="isAuthenticated" to="/profile" class="nav-item" @click="handleClick">
          <i class="ti ti-user nav-icon-ti"></i>
          <span>Profile</span>
        </NuxtLink>
        <NuxtLink v-if="!isAuthenticated" to="/login" class="nav-item" @click="handleClick">
          <i class="ti ti-user nav-icon-ti"></i>
          <span>Login</span>
        </NuxtLink>
        <a v-else class="nav-item" @click="handleLogout" style="cursor: pointer;">
          <i class="ti ti-logout nav-icon-ti"></i>
          <span>Logout</span>
        </a>

      </nav>
    </div>
    <!-- <div class="offcanvas-footer">
      <a href="https://wa.me/919999999999" target="_blank" class="chat-btn" @click="handleClick">
        <img src="~/assets/img/mobileHeader/chat.png" alt="Chat" class="chat-icon" />
        CHAT WITH US
      </a>
    </div> -->
    <button class="apply-now-btn" @click="openApplyModal">
      <span>Apply Now</span>
    </button>
  </div>

  <!-- Apply Now Modal -->
  <DossierModal modal-id="mobileApplyModal" modal-title="Apply Now"
    subtitle="Fill in your details to start your application" mode="apply" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "../utils/store";
import DossierModal from "~/components/Common/DossierModal.vue";
import { useAuth } from '~/composables/useAuth'

export default defineComponent({
  name: "MobileDeviceNavbar",
  components: { DossierModal },
  setup() {
    const stateStoreInstance = stateStore;
    const isClosing = ref(false);
    const { isAuthenticated, logout, init } = useAuth()

    onMounted(() => {
      init()
    })

    const closeNavbar = () => {
      if (isClosing.value) return;
      isClosing.value = true;
      setTimeout(() => {
        stateStoreInstance.navbar = false;
        isClosing.value = false;
      }, 300);
    };

    const handleClick = () => {
      closeNavbar();
    };

    const handleLogout = () => {
      logout()
      closeNavbar()
      window.location.href = '/login'
    }

    const openApplyModal = async () => {
      closeNavbar();
      // wait for navbar close animation, then open modal
      setTimeout(async () => {
        const { Modal } = await import('bootstrap');
        const el = document.getElementById('mobileApplyModal');
        if (el) new Modal(el).show();
      }, 350);
    };

    return {
      stateStoreInstance,
      handleClick,
      isClosing,
      closeNavbar,
      openApplyModal,
      isAuthenticated,
      handleLogout
    };
  },
});
</script>

<!-- Unscoped: must override Bootstrap's offcanvas styles with high specificity -->
<style>
#navbarOffcanvas.offcanvas {
  background-color: #321438 !important;
  transition: transform 0.3s ease-in-out !important;
  visibility: hidden;
}

#navbarOffcanvas.offcanvas.show {
  z-index: 9999999;
  transform: none !important;
  visibility: visible !important;
}

#navbarOffcanvas.offcanvas.closing {
  z-index: 9999999;
  transform: translateX(100%) !important;
  visibility: visible !important;
}
</style>

<style scoped>
/* Header */
.offcanvas-header {
  background: #321438;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 16px 16px;
  border-bottom: none;
  border-bottom: 1px solid #FFFFFF1A;
}

.close-btn {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  order: -1;
}

.close-btn i {
  color: #ffffff;
  font-size: 24px;
}

.header-logo {
  width: 160px;
  height: auto;
}

/* Navigation */
.offcanvas-body {
  background-color: #321438;
  padding: 10px 20px;
  flex: 1;
  overflow-y: auto;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.apply-now-btn {
  background: #A13E99;
  border: none;
  border-radius: 7px !important;
  cursor: pointer;
  width: calc(100% - 40px);
  font-size: 16px;
  text-align: center;
  justify-content: center;
  padding: 18px 0 !important;
  margin: 20px auto;
  display: flex;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.nav-item.active,
.nav-item.router-link-exact-active {
  background: #AB7E1A;
  color: #ffffff;
  font-weight: 600;
}

.nav-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.nav-icon-ti {
  width: 22px;
  height: 22px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #ffffff;
}

/* Footer - Chat Button */
.offcanvas-footer {
  background-color: #321438;
  padding: 16px 20px 24px;
  margin-top: auto;
}

.chat-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 14px 20px;
  background: #ffffff;
  color: #321438;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
}

.chat-btn:hover {
  background: #f0f0f0;
  color: #321438;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.chat-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
</style>
