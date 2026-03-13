<template>
  <div class="main-contact-warp ptb-100">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4">
          <div class="contact-small-widget">
            <h5>Contact Information</h5>
            <div class="contact-item">
              <span>Phone No:</span>
              <a href="tel:9773576111">+919773576111</a>
            </div>
            <div class="contact-item">
              <span>Email:</span>
              <a href="mailto:info@gccschool.com">info@gccschool.com</a>
            </div>
            <div class="contact-item">
              <span>Campus Address:</span>
              <p> 16th Floor, Tower-B,</p>
              <p> DLF Building No. 09,</p>
              <p> DLF Cyber City, Gurugram, Haryana, 122002 </p>
            </div>
            <div class="contact-item">
              <span>Office Address:</span>
              <p> 4th Floor, Vipul Plaza, 419-20,</p>
              <p> Golf Course Road, Suncity, Sector 54, Gurugram, Haryana, 122002 </p>
            </div>
            <div class="contact-item">
              <span>Business Hours:</span>
              <p>Monday - Friday: 9:30 AM – 6:30 PM</p>
            </div>
            <div class="contact-item">
              <span>Follow Us:</span>
              <ul class="social-list">
                <li>
                  <a href="https://www.facebook.com/share/187jgT5gev/" target="_blank" class="icon">
                    <img src="~/assets/img/svgs/facebook.svg" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/gccschool2026" target="_blank" class="icon">
                    <img src="~/assets/img/svgs/twitter.svg" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/gccschool?igsh=MXQxc2JhazAwcG55cQ==" target="_blank" class="icon">
                    <img src="~/assets/img/svgs/instagram.svg" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/gccschool/" target="_blank" class="icon">
                    <img src="~/assets/img/svgs/linkedin.svg" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@GCCSchool" target="_blank" class="icon">
                    <img src="~/assets/img/svgs/youtube.svg" alt="icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="main-contact-content">
            <form @submit.prevent="submitForm">
              <h4 class="mb-3">Request a callback from our team and a dedicated counsellor from our team will reach out
                to assess if the program is the correct fit for you. </h4>
              <div class="row">
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Full Name <span>*</span></label>
                    <input v-model="form.name" class="form-control" placeholder="Full Name">
                    <small class="text-danger" v-if="errors.name">{{ errors.name }}</small>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Mobile Number <span>*</span></label>
                    <div class="input-with-icon">
                      <input v-model="form.mobile" class="form-control" placeholder="Mobile Number">
                      <i class="ti ti-phone-call"></i>
                    </div>
                    <small class="text-danger" v-if="errors.mobile">{{ errors.mobile }}</small>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Email ID <span>*</span></label>
                    <div class="input-with-icon">
                      <input v-model="form.email" class="form-control" placeholder="Email ID">
                      <i class="ti ti-mail"></i>
                    </div>
                    <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">State <span>*</span></label>
                    <select v-model="form.state" class="form-control" @change="onStateChange">
                      <option value="">Select State</option>
                      <option v-for="state in statesList" :key="state" :value="state">{{ state }}</option>
                    </select>
                    <small class="text-danger" v-if="errors.state">{{ errors.state }}</small>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">City <span>*</span></label>
                    <select v-model="form.city" class="form-control" :disabled="!form.state">
                      <option value="">Select City</option>
                      <option v-for="city in citiesList" :key="city" :value="city">{{ city }}</option>
                    </select>
                    <small class="text-danger" v-if="errors.city">{{ errors.city }}</small>
                  </div>
                </div>



                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Pincode <span>*</span></label>
                    <input v-model="form.pincode" class="form-control" placeholder="Pincode">
                    <small class="text-danger" v-if="errors.pincode">{{ errors.pincode }}</small>
                  </div>
                </div>

                <div class="col-lg-12">
                  <hr class="my-4">
                  <h6 class="mb-3">Graduation Details</h6>
                </div>

                <!-- Graduation Program -->
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Graduation Program <span>*</span></label>
                    <select v-model="form.graduationProgram" class="form-control" @change="resetGraduationFields">
                      <option value="">Select your graduation program</option>
                      <option>B.Com</option>
                      <option>B.B.A</option>
                      <option>B.Tech</option>
                      <option>Other</option>
                    </select>
                    <small class="text-danger" v-if="errors.graduationProgram">{{ errors.graduationProgram }}</small>
                  </div>
                </div>

                <!-- Other Graduation Program (if selected) -->
                <div v-if="form.graduationProgram === 'Other'" class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Specify Graduation Program <span>*</span></label>
                    <input v-model="form.graduationProgramOther" class="form-control" placeholder="Please specify">
                    <small class="text-danger" v-if="errors.graduationProgramOther">{{ errors.graduationProgramOther
                    }}</small>
                  </div>
                </div>

                <!-- Graduation Status -->
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Graduation Status <span>*</span></label>
                    <select v-model="form.graduationStatus" class="form-control" @change="resetStatusFields">
                      <option value="">Have you completed or are you pursuing your graduation?</option>
                      <option>Completed</option>
                      <option>Pursuing</option>
                    </select>
                    <small class="text-danger" v-if="errors.graduationStatus">{{ errors.graduationStatus }}</small>
                  </div>
                </div>

                <!-- If Pursuing - Current CGPA/Percentage -->
                <div v-if="form.graduationStatus === 'Pursuing'" class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Current CGPA/Percentage <span>*</span></label>
                    <input v-model="form.currentCGPA" class="form-control"
                      placeholder="Enter your current CGPA/Percentage">
                    <small class="text-danger" v-if="errors.currentCGPA">{{ errors.currentCGPA }}</small>
                  </div>
                </div>

                <!-- If Completed - First Division Check -->
                <template v-if="form.graduationStatus === 'Completed'">
                  <div class="col-lg-6">
                    <div class="input-box">
                      <label class="form-label">Passed with First Division (≥60%)? <span>*</span></label>
                      <select v-model="form.firstDivision" class="form-control" @change="resetHigherQualification">
                        <option value="">Select option</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                      <small class="text-danger" v-if="errors.firstDivision">{{ errors.firstDivision }}</small>
                    </div>
                  </div>

                  <!-- If Yes - Higher Qualification (Optional) -->
                  <div v-if="form.firstDivision === 'Yes'" class="col-lg-6">
                    <div class="input-box">
                      <label class="form-label">Higher Qualification (Optional)</label>
                      <select v-model="form.higherQualification" class="form-control">
                        <option value="">Select Higher Qualification</option>
                        <option>M.Com</option>
                        <option>M.B.A</option>
                        <option>M.Tech</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <!-- Other Higher Qualification (if selected) -->
                  <div v-if="form.higherQualification === 'Other'" class="col-lg-6">
                    <div class="input-box">
                      <label class="form-label">Specify Higher Qualification</label>
                      <input v-model="form.higherQualificationOther" class="form-control" placeholder="Please specify">
                    </div>
                  </div>
                </template>

                <div class="col-lg-12">
                  <div class="input-box">
                    <label class="form-label">College / University <span>*</span></label>
                    <select v-model="form.college" class="form-control">
                      <option value="">Select College / University</option>
                      <option v-for="college in colleges" :key="college.id" :value="college.name">
                        {{ college.name }}
                      </option>
                    </select>
                    <small class="text-danger" v-if="errors.college">{{ errors.college }}</small>
                  </div>
                </div>

                <div class="col-lg-12">
                  <hr class="my-4">
                  <h6 class="mb-3">How Did You Hear About GCC School?</h6>
                </div>

                <div class="col-lg-12">
                  <div class="input-box">
                    <label class="form-label">Source <span>*</span></label>
                    <select v-model="form.source" class="form-control">
                      <option value="">Select Source</option>
                      <option>College / University</option>
                      <option>Event / Seminar</option>
                      <option>Friend / Referral</option>
                      <option>Social Media</option>
                      <option>Website</option>
                      <option>Other</option>
                    </select>
                    <small class="text-danger" v-if="errors.source">{{ errors.source }}</small>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="input-box">
                    <label class="form-label">Query / Remarks (Optional)</label>
                    <textarea v-model="form.remarks" class="form-control" rows="3"
                      placeholder="Query / Remarks (Optional)"></textarea>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" v-model="form.consent" id="consentCheck">
                    <label class="form-check-label" for="consentCheck">
                      I agree to be contacted by GCC School.
                    </label>
                  </div>
                  <small class="text-danger" v-if="errors.consent">{{ errors.consent }}</small>
                </div>

                <div class="col-lg-12">
                  <button class="default-btn submit-btn mt-3" type="submit">
                    Submit <i class="ti ti-arrow-narrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import universities from "../../assets/universities.json";
import statesCities from "../../assets/states-cities.json";

export default defineComponent({
  name: "Contact",
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
    },

    resetGraduationFields() {
      this.form.graduationProgramOther = ""
      this.form.graduationStatus = ""
      this.resetStatusFields()
    },

    resetStatusFields() {
      this.form.currentCGPA = ""
      this.form.firstDivision = ""
      this.resetHigherQualification()
    },

    resetHigherQualification() {
      this.form.higherQualification = ""
      this.form.higherQualificationOther = ""
    },

    async submitForm() {
      if (!this.validateForm()) return

      // Transform camelCase form to snake_case payload for API
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
      };

      try {
        const response: any = await $fetch("/api/enquery", {
          method: "POST",
          body: payload
        });

        // $fetch throws automatically on 4xx/5xx errors, so if we reach here, it's success.
        if (response.success) {
          alert("Thank you! Our team will contact you soon.")

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
        } else {
          alert(response.message || "Something went wrong. Please try again.")
        }
      } catch (error: any) {
        console.error("Submission Error:", error)
        alert(error.data?.message || "Server error. Try later.")
      }
    },
    onStateChange() {
      this.form.city = "";
    }
  },
  data() {
    return {
      colleges: universities,
      statesData: statesCities as Record<string, string[]>,
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
      },
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
      },

    };
  },
  computed: {
    statesList(): string[] {
      return Object.keys(this.statesData).sort();
    },
    citiesList(): string[] {
      if (!this.form.state || !this.statesData[this.form.state]) return [];
      return this.statesData[this.form.state].sort();
    }
  }
});

</script>
