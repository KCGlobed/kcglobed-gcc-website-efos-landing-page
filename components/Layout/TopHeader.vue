<template>
  <div class="top-header-warp">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-center">
        <div class="col-12">
          <div class="top-header-combined-content text-center">
            <ul class="header-unified-links justify-content-center flex-wrap">
              <li class="contact-item">
                <i class="ti ti-mail"></i>
                <a href="mailto:info@gccschool.com">info@gccschool.com</a>
              </li>
              <li class="contact-item">
                <i class="ti ti-phone-call"></i>
                <a href="tel:9773576111">+919773576111</a>
              </li>
              <li>
                <NuxtLink to="https://kcglobed.com/" target="_blank">KC GlobEd</NuxtLink>
              </li>
              <li class="dropdown-wrapper" @mouseenter="openDropdown" @mouseleave="closeDropdown">
                <span class="dropdown-trigger">Ambassador <i class="ti ti-chevron-down"></i></span>
                <ul class="dropdown-menu" :class="{ show: showDropdown }">
                  <li>
                    <NuxtLink to="/campus-ceo/student">Student</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/campus-ceo/faculty">Faculty</NuxtLink>
                  </li>
                </ul>
              </li>
              <li>
                <NuxtLink to="/partner-with-us">Corporate Partner</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/career">Careers</NuxtLink>
              </li>
              <li v-if="isAuthenticated">
                <NuxtLink to="/profile">Profile</NuxtLink>
              </li>
              <li class="account-item" v-if="!isAuthenticated">
                <i class="ti ti-user"></i>
                <NuxtLink to="/login">Login</NuxtLink>
              </li>
              <li class="account-item" v-else>
                <i class="ti ti-logout"></i>
                <a @click="handleLogout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '~/composables/useAuth'
import { onMounted } from 'vue'

const { isAuthenticated, logout, init } = useAuth()

onMounted(() => {
  init()
})

const handleLogout = () => {
  logout()
  window.location.href = '/login'
}
</script>

<script>
export default {
  name: "TopHeader",
  data() {
    return {
      showDropdown: false,
      closeTimer: null
    };
  },
  methods: {
    openDropdown() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
      this.showDropdown = true;
    },
    closeDropdown() {
      this.closeTimer = setTimeout(() => {
        this.showDropdown = false;
      }, 300);
    }
  },
  beforeUnmount() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
    }
  }
};
</script>

<style scoped>
.top-header-warp {
  background-color: #51157C;
  z-index: 99999;
  padding: 8px 0;
}

.header-unified-links {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  gap: 25px;
}

.header-unified-links li {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

/* Vertical divider between items on desktop */
@media (min-width: 992px) {
  .header-unified-links li:not(:last-child)::after {
    content: "";
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.3);
  }
}

.header-unified-links li a,
.dropdown-trigger {
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.header-unified-links li a:hover,
.dropdown-wrapper:hover .dropdown-trigger {
  color: #B98617;
}

.header-unified-links li i {
  color: #fff;
  font-size: 14px;
}

/* Dropdown Styles */
.dropdown-wrapper {
  position: relative;
}

.dropdown-trigger i {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.dropdown-wrapper:hover .dropdown-trigger i {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 10px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 10px 0;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-menu li {
  padding: 0;
  display: block;
}

.dropdown-menu li::after {
  display: none !important;
}

.dropdown-menu li a {
  display: block;
  padding: 8px 20px;
  color: #333 !important;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 13px;
  white-space: nowrap;
}

.dropdown-menu li a:hover {
  background-color: #862E84;
  color: #fff !important;
}

@media (max-width: 991px) {
  .top-header-warp .row {
    display: none;
  }
}
</style>