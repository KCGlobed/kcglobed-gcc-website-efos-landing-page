<template>
  <div class="hero-warp hero-section">
    <Swiper :loop="true" :effect="'fade'" :speed="2000" :pagination="{
      el: '.swiper-pagination2',
      clickable: true,
    }" :modules="[SwiperEffectFade, SwiperPagination]" class="hero-slider">
      <SwiperSlide v-for="banner in banners" :key="banner.id">
        <div class="hero-slider-warp" :style="{
          'background-image': `url(${banner.image})`,
        }">
          <div class="container-fluid">
            <div class="row align-items-center">
              <!-- Left Content -->
              <div class="col-lg-6">
                <span class="hero-badge">
                  <!-- <span class="badge-dot"></span> -->
                  <span class="blinking-text">{{ banner.subTitle }}</span>
                </span>

                <h1 class="hero-title mt-3">
                  India's 1st School<br />
                  for Commerce Graduates
                  <br />

                </h1>
                <p class="hero-subtitle-first">
                  Powered by Industry Titans,<br />
                  Defined by Performance
                </p>

                <p class="hero-subtitle">
                  At GCC School, you get hired first, then trained.

                </p>

                <!-- <p class="hero-description">
                  Don't just prepare for the corporate world — you enter it. Every session, project,
                  and mentor experience mirrors the way top global firms actually operate.
                </p> -->

                <div class="d-flex gap-3 flex-wrap">
                  <button class="btn btn-primary px-4 py-3" data-bs-toggle="modal" data-bs-target="#applyNowModal">
                    {{ banner.btnText }}
                  </button>
                  <!-- <button class="btn btn-light px-4 py-3" data-bs-toggle="modal" data-bs-target="#enquiryModal">
                    {{ banner.btnTextTwo }}
                  </button> -->
                </div>
              </div>

              <!-- Right Card -->
              <div class="col-lg-6">
                <div class="journey-card">
                  <div class="row">
                    <!-- Left side - Content -->
                    <div class="col-md-7">
                      <h2 class="card-title mb-4">

                        <span class="text-gradient">
                          Start Your Journey With GCC School
                        </span>
                        <br />
                        For A Unique 12 Months AI-Enabled International Accounting Professionals (AEIAP) Program
                      </h2>

                      <!-- <p class="text-muted small mb-4">For A Unique 12 Months Professional Program</p> -->

                      <!-- <div class="mb-4">
                        <div class="d-flex gap-2 mb-3 align-items-start card-feature">
                          <div class="feature-icon">
                            <img src="../../assets/img/heros/heroSec1.png" />
                          </div>
                          <div>
                            <div class="fw-bold small">12 Month Program</div>
                            <small class="text-muted-small">Intensive professional fast track</small>
                          </div>
                        </div>

                        <div class="d-flex gap-2 mb-3 align-items-start  card-feature">
                          <div class="feature-icon">
                            <img src="../../assets/img/heros/heroSec2.png" />
                          </div>
                          <div>
                            <div class="fw-bold small">AEIAP </div>
                            <small class="text-muted-small">AI-Enabled International Accounting Certification
                              Program</small>
                          </div>
                        </div>

                        <div class="d-flex gap-2 mb-3 align-items-start  card-feature">
                          <div class="feature-icon">
                            <img src="../../assets/img/heros/heroSec3.png" />
                          </div>
                          <div>
                            <div class="fw-bold small">GCC Talent Ready</div>
                            <small class="text-muted-small">Industry proven global requirements</small>
                          </div>
                        </div>
                      </div> -->

                      <button class="btn btn-gradient w-100 mb-2" data-bs-toggle="modal" data-bs-target="#dossierModal">
                        Download Dossier <img src="../../assets/img/heros/heroSec5.png" />
                      </button>

                      <!-- <p class="text-center text-muted small">Join to transform your career</p> -->
                    </div>

                    <!-- Right side - Profile Image -->
                    <div class="col-5 rightSideBox">
                      <div class="profile-badge">
                        <img src="../../assets/img/heros/heroSec4.png" />
                        <div>
                          <div class="fw-bold small">Global Recognition</div>
                          <small class="text-muted">Certified AI-Accountant</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

  <div class="modal fade" id="enquiryModal" tabindex="-1" style="z-index: 99999;">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">GCC School – Enquiry Form</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" ref="closeModalBtn"></button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="submitForm">

            <h6 class="mb-3">Personal Details</h6>

            <div class="row g-3">
              <div class="col-md-6">
                <div class="form-floating">
                  <input v-model="form.name" class="form-control" placeholder="Full Name">
                  <label>Full Name</label>
                  <small class="text-danger" v-if="errors.name">{{ errors.name }}</small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating ">
                  <!-- <div class="prefix">+91</div> -->
                  <input v-model="form.mobile" class="form-control" placeholder="Mobile Number">
                  <label>Mobile Number</label>
                  <small class="text-danger" v-if="errors.mobile">{{ errors.mobile }}</small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <input v-model="form.email" class="form-control" placeholder="Email ID">
                  <label>Email ID</label>
                  <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <input v-model="form.city" class="form-control" placeholder="City">
                  <label>District/City</label>
                  <small class="text-danger" v-if="errors.city">{{ errors.city }}</small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <input v-model="form.state" class="form-control" placeholder="State">
                  <label>State</label>
                  <small class="text-danger" v-if="errors.state">{{ errors.state }}</small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <input v-model="form.pincode" class="form-control" placeholder="Pincode">
                  <label>Pincode</label>
                  <small class="text-danger" v-if="errors.pincode">{{ errors.pincode }}</small>
                </div>
              </div>
            </div>

            <hr class="my-4">

            <h6 class="mb-3">Graduation Details</h6>

            <!-- Graduation Program -->
            <div class="form-floating mb-2">
              <select v-model="form.graduationProgram" class="form-select " @change="resetGraduationFields">
                <option value="">Select your graduation program</option>
                <option>B.Com</option>
                <option>B.B.A</option>
                <option>B.Tech</option>
                <option>Other</option>
              </select>
              <label>Graduation Program</label>
              <small class="text-danger" v-if="errors.graduationProgram">{{ errors.graduationProgram }}</small>
            </div>


            <!-- Other Graduation Program (if selected) -->
            <div v-if="form.graduationProgram === 'Other'" class="form-floating mb-2">
              <input v-model="form.graduationProgramOther" class="form-control" placeholder="Please specify">
              <label>Please specify your graduation program</label>
              <small class="text-danger" v-if="errors.graduationProgramOther">{{ errors.graduationProgramOther
              }}</small>
            </div>

            <!-- Graduation Status -->
            <div class="form-floating mb-2">
              <select v-model="form.graduationStatus" class="form-select" @change="resetStatusFields">
                <option value="">Have you completed or are you pursuing your graduation?</option>
                <option>Completed</option>
                <option>Pursuing</option>
              </select>
              <label>Graduation Status</label>
              <small class="text-danger" v-if="errors.graduationStatus">{{ errors.graduationStatus }}</small>
            </div>


            <!-- If Pursuing - Current CGPA/Percentage -->
            <div v-if="form.graduationStatus === 'Pursuing'" class="form-floating mb-2">
              <input v-model="form.currentCGPA" class="form-control" placeholder="Enter your current CGPA/Percentage">
              <label>Current CGPA/Percentage</label>
              <small class="text-danger" v-if="errors.currentCGPA">{{ errors.currentCGPA }}</small>
            </div>

            <!-- If Completed - First Division Check -->
            <div v-if="form.graduationStatus === 'Completed'">
              <div class="form-floating mb-2">
                <select v-model="form.firstDivision" class="form-select " @change="resetHigherQualification">
                  <option value="">Did you pass with First Division (≥60%)?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <label>First Division (≥60%)</label>
                <small class="text-danger" v-if="errors.firstDivision">{{ errors.firstDivision }}</small>
              </div>


              <!-- If Yes - Higher Qualification (Optional) -->
              <div v-if="form.firstDivision === 'Yes'" class="form-floating mb-2">
                <select v-model="form.higherQualification" class="form-select mb-3">
                  <option value="">Higher Qualification (Optional)</option>
                  <option>M.Com</option>
                  <option>M.B.A</option>
                  <option>M.Tech</option>
                  <option>Other</option>
                </select>
                <label>Higher Qualification (Optional)</label>
              </div>

              <!-- Other Higher Qualification (if selected) -->
              <div v-if="form.higherQualification === 'Other'" class="form-floating mb-2">
                <input v-model="form.higherQualificationOther" class="form-control" placeholder="Please specify">
                <label>Please specify your higher qualification</label>
              </div>
            </div>



            <!-- College / University -->
            <div class="form-floating mb-2">
              <select v-model="form.college" class="form-select">
                <option value="">Select College / University</option>
                <option v-for="college in colleges" :key="college.id" :value="college.name">
                  {{ college.name }}
                </option>
              </select>
              <label>College / University</label>
              <small class="text-danger" v-if="errors.college">{{ errors.college }}</small>
            </div>


            <hr class="my-4">

            <h6 class="mb-3">How Did You Hear About GCC School?</h6>

            <div class="form-floating mb-2">
              <select v-model="form.source" class="form-select ">
                <option value="">Select Source</option>
                <option>College / University</option>
                <option>Event / Seminar</option>
                <option>Friend / Referral</option>
                <option>Social Media</option>
                <option>Website</option>
                <option>Student Ambassador / Faculty Ambassador</option>
                <option>Other</option>
              </select>
              <label>How Did You Hear About GCC School?</label>
              <small class="text-danger" v-if="errors.source">{{ errors.source }}</small>
            </div>


            <div class="form-floating mb-2">
              <textarea v-model="form.remarks" class="form-control mt-3" rows="3"
                placeholder="Query / Remarks (Optional)">
            </textarea>
              <label>Query / Remarks (Optional)</label>
            </div>

            <div class="form-check mt-3">
              <input class="form-check-input" type="checkbox" v-model="form.consent">
              <label class="form-check-label">
                I agree to be contacted by GCC School.
              </label>
            </div>
            <small class="text-danger" v-if="errors.consent">{{ errors.consent }}</small>

            <div class="modal-footer">
              <!-- <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
              <button class="btn btn-primary" type="submit" :disabled="isSubmitting">
                <span v-if="isSubmitting" class="spinner-border spinner-border-sm" role="status"
                  aria-hidden="true"></span>
                <span v-else>Submit</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>

  <CommonDossierModal />

  <!-- Apply Now Modal -->
  <CommonDossierModal modal-id="applyNowModal" modal-title="Apply Now"
    subtitle="Enter your details to complete your application" mode="apply" />
</template>

<style scoped>
.text-gray {
  color: #4D4D4D;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
}

.rightSideBox {
  background-image: url("../../assets/img/heros/student_hero.png");
  background-size: cover;
  background-position: center;
  border-radius: 0px;
  display: grid;
  place-content: center;
}

.card-feature {
  background-color: #F8F4FB;
  border: 1px solid #DDA1FF;
  border-radius: 10px;
  padding: 10px;
  line-height: 18px;
  align-items: center;
}

.text-muted-small {
  font-size: 12px !important;
}

.hero-slider-warp {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  padding: 80px 0;
  /* background-image: url("~/assets/img/heros/mobileBanner.svg") !important; */
}



/* Left Content */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 50px;
  border: 2.286px solid #D98E23;
  background: #FFAF3D;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  margin-top: 60px;
  margin-bottom: 20px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background-color: #facc15;
  border-radius: 50%;
}

.hero-title {
  font-size: 44px;
  line-height: 1.2;
  font-weight: 700;
  color: white;
}

.hero-subtitle-first {
  font-size: 34px;
  line-height: 1.3;
  font-weight: 400;
  color: white;
  font-family: Inter;
  margin-bottom: 15px;
}

.hero-subtitle {
  font-size: 24px;
  font-weight: 600;
  color: #FFC065;
  ;
  margin-top: 20px;
  font-style: normal;
  line-height: 33.321px;
  margin-bottom: 30px;
}

.hero-description {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 16px 0 32px;
}

.btn-primary {
  background: #A13E99 !important;
  border: none;
  font-weight: 600;
  width: 250px
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(139, 61, 255, 0.4);
}

.btn-light:hover {
  transform: translateY(-2px);
}

/* Right Card */
.journey-card {
  background: linear-gradient(135deg, #f8f5ff, #fff);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  position: relative;
  margin-top: 80px;
  max-width: 642px;
}

.card-title {
  color: #111827;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  /* 146.875% */
  letter-spacing: -0.96px;
}

.text-gradient {
  color: #862E84;
  font-weight: 800;
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: #fce8b4;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: center;
}

.feature-icon img {
  width: 24px;
  height: 24px;
}

.btn-gradient {
  background: #A13E99;
  color: white;
  border: none;
  font-weight: 600;
  padding: 16px;
  border-radius: 12px;
}

.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.4);
  color: white;
}

/* Profile Section - Fixed Size */
.profile-img {
  width: 100%;
  max-width: 280px;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  display: block;
  margin: 0 auto;
}

.profile-badge {
  display: inline-flex;
  background: white;
  padding: 10px 14px;
  border-radius: 12px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 50px;
}

.badge-check {
  width: 28px;
  height: 28px;
  background: #10b981;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    /* opacity: 0.3; */
    color: #FFAF3D;
  }
}


.blinking-text {
  animation: blink 2s ease-in-out infinite;
}

@media (max-width: 991px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 20px;
  }

  .journey-card {
    margin-top: 40px;
    padding: 30px;
  }

  .hero-slider-warp {
    padding: 60px 0;
  }
}

@media (max-width: 767px) {
  .hero-badge {
    margin: 0px;
  }

  .hero-subtitle-first {
    font-size: 24px;
    margin-bottom: 0px;
  }

  .hero-title {
    font-size: 28px;
  }

  .hero-subtitle {
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 25px;
  }

  .hero-description {
    font-size: 14px;
    margin-bottom: 24px;
  }

  .hero-slider-warp {
    padding: 40px 0;
    min-height: auto;
  }

  .journey-card {
    padding: 20px;
    margin-top: 30px;
  }

  .card-title {
    font-size: 20px;
    line-height: 30px;
  }

  .btn-primary {
    padding: 10px 20px !important;
    font-size: 14px;
  }
}

@media (max-width: 580px) {
  .rightSideBox {
    display: none;
  }

  /* Ensure form inputs in modal display correctly on small screens */
  .modal-body {
    padding: 1rem;
  }

  .hero-slider-warp {

    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    padding: 40px 0;
    background-image: url("~/assets/img/heros/mobileBanner.svg") !important;
  }

  .btn-primary {
    width: 100%;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "../../assets/img/heros/hero_bg.svg";
import image2 from "../../assets/img/heros/hero2.jpg";
import gccPdf from "../../assets/gcc.pdf";
import universities from "../../assets/universities.json";

export default defineComponent({

  name: "MainBanner",
  methods: {
    validateForm() {
      this.errors = {
        name: "",
        mobile: "",
        email: "",
        city: "",
        state: "",
        graduationProgram: "",
        graduationProgramOther: "",
        graduationStatus: "",
        currentCGPA: "",
        firstDivision: "",

        college: "",
        source: "",
        consent: "",
        pincode: ""
      }

      if (!this.form.name) this.errors.name = "Name is required"
      if (!this.form.mobile) this.errors.mobile = "Mobile number is required"
      if (!this.form.email) this.errors.email = "Email is required"
      if (!this.form.city) this.errors.city = "City is required"
      if (!this.form.state) this.errors.state = "State is required"
      if (!this.form.graduationProgram) this.errors.graduationProgram = "Select graduation program"

      if (this.form.graduationProgram === "Other" && !this.form.graduationProgramOther) {
        this.errors.graduationProgramOther = "Please specify your graduation program"
      }

      if (!this.form.graduationStatus) this.errors.graduationStatus = "Select graduation status"

      if (this.form.graduationStatus === "Pursuing" && !this.form.currentCGPA) {
        this.errors.currentCGPA = "CGPA/Percentage is required"
      }

      if (this.form.graduationStatus === "Completed" && !this.form.firstDivision) {
        this.errors.firstDivision = "Please indicate if you passed with First Division"
      }

      if (!this.form.college) this.errors.college = "Select college/university"
      if (!this.form.source) this.errors.source = "Select how you heard about us"
      if (!this.form.consent) this.errors.consent = "Consent is required"
      if (!this.form.pincode) this.errors.pincode = "Pincode is required"

      return Object.values(this.errors).every(error => error === "")
    }

    ,

    resetGraduationFields() {
      this.form.graduationProgramOther = ""
      this.form.graduationStatus = ""
      this.resetStatusFields()
    }

    ,

    resetStatusFields() {
      this.form.currentCGPA = ""
      this.form.firstDivision = ""
      this.resetHigherQualification()
    }

    ,

    resetHigherQualification() {
      this.form.higherQualification = ""
      this.form.higherQualificationOther = ""
    },
    async submitForm() {
      if (!this.validateForm()) return // Transform camelCase form to snake_case payload for API

      const payload = {
        name: this.form.name,
        mobile: this.form.mobile,
        email: this.form.email,
        city: this.form.city,
        state: this.form.state,
        graduation_program: this.form.graduationProgram,
        graduation_program_other: this.form.graduationProgramOther,
        graduation_status: this.form.graduationStatus,
        current_cgpa: this.form.currentCGPA,
        first_division: this.form.firstDivision,
        college: this.form.college,
        source: this.form.source,
        remarks: this.form.remarks,
        pincode: this.form.pincode
      }

        ;

      try {
        this.isSubmitting = true;

        const response: any = await $fetch("/api/enquery", {
          method: "POST",
          body: payload
        });

        // $fetch throws automatically on 4xx/5xx errors, so if we reach here, it's success.
        if (response.success) {
          alert("Thank you! Our team will contact you soon.")
          const closeBtn = this.$refs.closeModalBtn as HTMLButtonElement;
          closeBtn.click();
          window.open("https://storage.googleapis.com/static_files_backend/media/landing/GCC%20School%20Brochure%201.pdf",
            "_blank");

          // Reset form
          this.form = {
            name: "",
            mobile: "",
            email: "",
            city: "",
            state: "",
            graduationProgram: "",
            graduationProgramOther: "",
            graduationStatus: "",
            currentCGPA: "",
            firstDivision: "",
            higherQualification: "",
            higherQualificationOther: "",
            college: "",
            source: "",
            remarks: "",
            pincode: "",
            consent: false
          }
        }

        else {
          alert(response.message || "Something went wrong. Please try again.")
        }
      }

      catch (error: any) {
        console.error("Submission Error:", error)
        alert(error.data?.message || "Server error. Try later.")
      }

      finally {
        this.isSubmitting = false;
      }
    }
  }

  ,
  data() {
    return {

      colleges: universities,
      form: {
        name: "",
        mobile: "",
        email: "",
        city: "",
        state: "",
        graduationProgram: "",
        graduationProgramOther: "",
        graduationStatus: "",
        currentCGPA: "",
        firstDivision: "",
        higherQualification: "",
        higherQualificationOther: "",

        college: "",
        source: "",
        remarks: "",
        pincode: "",
        consent: false,
      }

      ,
      isSubmitting: false,
      errors: {
        name: "",
        mobile: "",
        email: "",
        city: "",
        state: "",
        graduationProgram: "",
        graduationProgramOther: "",
        graduationStatus: "",
        currentCGPA: "",
        firstDivision: "",

        college: "",
        source: "",
        consent: "",
        pincode: ""
      }

      ,
      banners: [{

        id: 1,
        bgClass: "bg1",
        subTitle: "Cohort 2026 Application Open",
        image: image1,
        heading: "World's 1st School Backed by Industry, Built on Execution",
        description: "",
        btnText: "Apply Now",
        btnLink: "/admission-form",
        btnTextTwo: "Download Dossier",
        btnLinkTwo: gccPdf,
        updateTitle: "View all latest news updates of Tuva",
        updateLink: "/blog",
        informations: [{
          id: 1,
          icon: "ti ti-world",
          title: "Take A Tour",
          link: "/schedule",
        }

          ,
        {
          id: 2,
          icon: "ti ti-info-hexagon",
          title: "Campus Information",
          link: "/about-campus",
        }

          ,
        {
          id: 3,
          icon: "ti ti-ballpen",
          title: "Apply Now",
          link: "/admission-form",
        }

          ,
        ],
      }

      ],
    }

      ;
  }

  ,
});
</script>
