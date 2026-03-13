<template>
  <div class="footer-warp ptb-80">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-8 col-sm-12">
          <div class="footer-widget">
            <h3>Quick Links</h3>
            <div class="row">
              <div class="col-lg-12">
                <ul class="footer-list footer-links-grid">
                  <li>
                    <NuxtLink to="/">Home</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/programs">Program</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/nfet">NFET Exam</NuxtLink>
                  </li>
                  <!-- <li>
                    <NuxtLink to="/admissions">Student Admission</NuxtLink>
                  </li> -->
                  <li>
                    <NuxtLink to="/campus-life">Campus Life</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/about-overview">About Us</NuxtLink>
                  </li>
                  <!-- <li>
                    <NuxtLink to="/contact-us">Contact Us</NuxtLink>
                  </li> -->
                  <li><a href="https://www.kcglobed.com/" target="_blank">KC GlobEd</a></li>
                  <li>
                    <NuxtLink to="/campus-ceo/student">Ambassador</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/partner-with-us">Corporate Partner</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/career">Careers</NuxtLink>
                  </li>
                  <li class="apply-now-li">
                    <button class="footer-apply-btn" @click="openApplyModal">Apply Now</button>
                  </li>
                  <li v-if="isAuthenticated">
                    <NuxtLink to="/profile">Profile</NuxtLink>
                  </li>
                  <li v-if="!isAuthenticated">
                    <NuxtLink to="/login">Login</NuxtLink>
                  </li>
                  <li v-else>
                    <a @click="handleLogout" style="cursor: pointer;">Logout</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="footer-widget">
            <h3>Subscribe Newsletter</h3>
            <div class="footer-form mb-4">
              <form @submit.prevent="subscribe">
                <input v-model="email" type="email" required class="form-control" placeholder="Enter Email Address" />
                <button class="footer-btn" type="submit" :disabled="loading">
                  <span>{{ loading ? "Subscribing..." : "Subscribe Now" }}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="company-adrr">
            <div class="footer-info mt-4">
              <div class="row g-4">
                <div class="col-lg-4 col-md-4">
                  <div class="address-item">
                    <h6 class="text-white mb-2">Visit us</h6>
                    <p>Building 9B , 16th Floor , DLF Cyber City , Sector 24 ,<br />
                      Gurugram , Haryana - 122002</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <!-- <div class="address-item">
                    <h6 class="text-white mb-2">Corporate Office</h6>
                    <p>419-20, 4th Floor, Vipul Plaza,
                      Sector 54, Golf Course Road,<br />Gurugram, Haryana - 122002</p>
                  </div> -->
                </div>

                <div class="col-lg-4 col-md-4">
                  <div class="address-item">
                    <h6 class="text-white mb-2">Follow Us</h6>
                    <ul class="social-list">
                      <li>
                        <a href="https://www.facebook.com/share/187jgT5gev/" target="_blank" class="icon">
                          <img src="~/assets/img/svgs/facebook.svg" alt="facebook" />
                        </a>
                      </li>
                      <!-- <li>
                        <a href="https://x.com/gccschool2026" target="_blank" class="icon">
                          <img src="~/assets/img/svgs/twitter.svg" alt="twitter" />
                        </a>
                      </li> -->
                      <li>
                        <a href="https://www.instagram.com/gccschool?igsh=MXQxc2JhazAwcG55cQ==" target="_blank"
                          class="icon">
                          <img src="~/assets/img/svgs/instagram.svg" alt="instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/gccschool/" target="_blank" class="icon">
                          <img src="~/assets/img/svgs/linkedin.svg" alt="linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@GCCSchool" target="_blank" class="icon">
                          <img src="~/assets/img/svgs/youtube.svg" alt="youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Apply Now Modal (footer) -->
  <DossierModal modal-id="footerApplyModal" modal-title="Apply Now"
    subtitle="Fill in your details to start your application" mode="apply" />
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
import { defineAsyncComponent } from 'vue';
export default {
  name: "MainFooter",
  components: {
    DossierModal: defineAsyncComponent(() => import('~/components/Common/DossierModal.vue'))
  },
  data() {
    return {
      email: "",
      loading: false,
    };
  },
  methods: {
    async subscribe() {
      if (!this.email) return;

      this.loading = true;
      try {
        const { data, error } = await useFetch('/api/subscribe', {
          method: 'POST',
          body: { email: this.email }
        });

        if (error.value) {
          alert(error.value.message || "Something went wrong. Please try again.");
        } else {
          alert(data.value.message || "You’re subscribed. Watch your inbox for news and insights");
          this.email = "";
        }
      } catch (err) {
        alert("An error occurred. Please try again.");
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    async openApplyModal() {
      const { Modal } = await import('bootstrap');
      const el = document.getElementById('footerApplyModal');
      if (el) new Modal(el).show();
    }
  }
};
</script>

<style scoped>
.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-left: 0;
  list-style: none;
}

.apply-now-li {
  display: flex;
  align-items: center;
}

.footer-apply-btn {
  background: #A13E99;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;
  display: inline-block;
  width: auto;
}

.footer-apply-btn:hover {
  background: #8b2e87;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(161, 62, 153, 0.35);
}

@media (max-width: 991px) {
  .footer-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .apply-now-li {
    grid-column: 2;
  }
}

.footer-info {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
}

.address-item h6 {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #f8ca4d !important;
  /* Premium gold accent */
}

.address-item p {
  font-size: 13px;
  line-height: 1.6;
  color: #c5c5cf;
  margin-bottom: 0;
}

.social-list {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  display: flex;
  gap: 12px;
}

.social-list li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-list li a img {
  width: 18px;
  height: 18px;
  filter: brightness(0) invert(1);
  /* Make SVGs white */
  transition: all 0.3s ease;
}

.social-list li a:hover {
  background: var(--primary, #f8ca4d);
  transform: translateY(-3px);
  border-color: var(--primary, #f8ca4d);
}

.social-list li a:hover img {
  filter: brightness(0);
  /* Make icons dark on hover if needed, or keep white */
}

@media (max-width: 991px) {
  .address-item {
    margin-bottom: 30px;
  }
}
</style>
