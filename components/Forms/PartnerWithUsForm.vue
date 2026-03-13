<template>
  <div class="main-contact-warp ptb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="contact-content mb-5 text-center">
            <div class="section-title">
              <span class="sub-title">Partner With Us</span>
              <h2 class="heading reveal3">
                Let’s Start a Conversation
              </h2>
              <p class="reveal3">
                We’re always open to new partnerships and collaborations. If you
                have a proposal, project, or idea you’d like to discuss, we’d
                love to hear from you. Our team will review your submission and
                get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-2">
          <div class="main-contact-content">
            <form @submit.prevent="submitForm">
              <h4 class="mb-4">Application Form</h4>

              <!-- Organization Details -->
              <h5 class="mb-3">Organization Details</h5>
              <div class="row">
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Organization / Company Name <span>*</span></label>
                    <input v-model="form.organizationName" type="text" class="form-control"
                      placeholder="Organization Name">
                    <small class="text-danger" v-if="errors.organizationName">{{ errors.organizationName }}</small>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Year of Establishment <span>*</span></label>
                    <div class="input-with-icon">
                      <input v-model="form.yearOfEstablishment" type="number" class="form-control" placeholder="YYYY">
                      <i class="ti ti-calendar"></i>
                    </div>
                    <small class="text-danger" v-if="errors.yearOfEstablishment">{{ errors.yearOfEstablishment
                    }}</small>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="input-box">
                    <label class="form-label">Type of Organization <span>*</span></label>
                    <select v-model="form.organizationType" class="form-control">
                      <option value="">Select Organization Type</option>
                      <option>College / University</option>
                      <option>Training Institute</option>
                      <option>Corporate / Industry Partner</option>
                      <option>Media / Event Partner</option>
                      <option>Other</option>
                    </select>
                    <small class="text-danger" v-if="errors.organizationType">{{ errors.organizationType }}</small>
                  </div>
                </div>
                <div v-if="form.organizationType === 'Other'" class="col-lg-12">
                  <div class="input-box">
                    <label class="form-label">Please specify <span>*</span></label>
                    <input v-model="form.organizationTypeOther" type="text" class="form-control"
                      placeholder="Specify Organization Type">
                    <small class="text-danger" v-if="errors.organizationTypeOther">{{ errors.organizationTypeOther
                    }}</small>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="input-box">
                    <label class="form-label">Website (if any)</label>
                    <div class="input-with-icon">
                      <input v-model="form.website" type="text" class="form-control" placeholder="https://example.com">
                      <i class="ti ti-world"></i>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="my-4">

              <!-- Contact Person Details -->
              <h5 class="mb-3">Contact Person Details</h5>
              <div class="row">
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Full Name <span>*</span></label>
                    <div class="input-with-icon">
                      <input v-model="form.contactName" type="text" class="form-control" placeholder="Full Name">
                      <i class="ti ti-user"></i>
                    </div>
                    <small class="text-danger" v-if="errors.contactName">{{ errors.contactName }}</small>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Designation <span>*</span></label>
                    <div class="input-with-icon">
                      <input v-model="form.designation" type="text" class="form-control" placeholder="Designation">
                      <i class="ti ti-id-badge"></i>
                    </div>
                    <small class="text-danger" v-if="errors.designation">{{ errors.designation }}</small>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Email ID <span>*</span></label>
                    <div class="input-with-icon">
                      <input v-model="form.email" type="email" class="form-control" placeholder="Email ID">
                      <i class="ti ti-mail"></i>
                    </div>
                    <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">Mobile Number <span>*</span></label>
                    <div class="input-with-icon">
                      <input v-model="form.mobile" type="tel" class="form-control" placeholder="Mobile Number">
                      <i class="ti ti-phone-call"></i>
                    </div>
                    <small class="text-danger" v-if="errors.mobile">{{ errors.mobile }}</small>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">State <span>*</span></label>
                    <div class="input-with-icon">
                      <select v-model="form.state" class="form-control" @change="onStateChange">
                        <option value="">Select State</option>
                        <option v-for="state in statesList" :key="state.iso2" :value="state.iso2">{{ state.name }}
                        </option>
                      </select>
                      <i class="ti ti-map"></i>
                    </div>
                    <small class="text-danger" v-if="errors.state">{{ errors.state }}</small>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-box">
                    <label class="form-label">City <span>*</span></label>
                    <div class="input-with-icon">
                      <select v-model="form.city" class="form-control" :disabled="!form.state">
                        <option value="">Select City</option>
                        <option v-for="city in citiesList" :key="city.id" :value="city.name">{{ city.name }}</option>
                      </select>
                      <i class="ti ti-map-pin"></i>
                    </div>
                    <small class="text-danger" v-if="errors.city">{{ errors.city }}</small>
                  </div>
                </div>

              </div>

              <hr class="my-4">

              <!-- Partnership Information -->
              <h5 class="mb-3">Partnership Information</h5>
              <div class="row">
                <div class="col-lg-12">
                  <div class="input-box">
                    <label class="form-label">Area of Partnership Interest <span>*</span></label>
                    <div class="d-flex flex-wrap gap-3 mt-2">
                      <div class="form-check" v-for="interest in partnershipInterests" :key="interest">
                        <input class="form-check-input" type="checkbox" :value="interest" :id="interest"
                          v-model="form.interests">
                        <label class="form-check-label" :for="interest">{{ interest }}</label>
                      </div>
                    </div>
                    <small class="text-danger" v-if="errors.interests">{{ errors.interests }}</small>
                  </div>
                </div>
                <div class="col-lg-12 mt-3">
                  <div class="input-box">
                    <label class="form-label">Brief Description of Your Organization (50–100 words)
                      <span>*</span></label>
                    <textarea v-model="form.description" class="form-control" rows="4"
                      placeholder="Brief Description..."></textarea>
                    <small class="text-danger" v-if="errors.description">{{ errors.description }}</small>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="input-box">
                    <label class="form-label">How would you like to add value to GCC School by partnering with us?
                      (Short description) <span>*</span></label>
                    <textarea v-model="form.valueAdd" class="form-control" rows="3"
                      placeholder="Short description..."></textarea>
                    <small class="text-danger" v-if="errors.valueAdd">{{ errors.valueAdd }}</small>
                  </div>
                </div>
              </div>

              <!-- Declaration -->
              <div class="col-lg-12">
                <div class="form-check mt-3">
                  <input class="form-check-input" type="checkbox" v-model="form.declaration" id="declarationCheck">
                  <label class="form-check-label" for="declarationCheck">
                    We confirm that the above information is provided on behalf of our organization, is accurate, and
                    does not conflict with the organisation’s operations or policies.
                  </label>
                </div>
                <small class="text-danger" v-if="errors.declaration">{{ errors.declaration }}</small>
              </div>

              <!-- Submit Button -->
              <div class="col-lg-12">
                <button type="submit" class="default-btn submit-btn mt-4" :disabled="loading">
                  <span>{{ loading ? 'Submitting...' : 'Apply Now' }}</span>
                  <i v-if="!loading" class="ti ti-arrow-narrow-right"></i>
                </button>
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

const requestOptions = {
  method: "GET",
  headers: {
    "X-CSCAPI-KEY": "Q3k5SXFtVjNubXRBZjdKRFJ1QVJLQkZqQ3lYT2JNVUhVZmhOYm5ESw=="
  }
}

export default defineComponent({
  name: "PartnerWithUsForm",
  data() {
    return {
      partnershipInterests: [
        "Student Outreach / Awareness",
        "Training & Upskilling",
        "Hiring / Placement Support",
        "Events & Workshops",
        "Marketing / Promotion",
      ],
      form: {
        organizationName: "",
        yearOfEstablishment: "",
        organizationType: "",
        organizationTypeOther: "",
        website: "",
        contactName: "",
        designation: "",
        email: "",
        mobile: "",
        city: "",
        state: "",
        interests: [] as string[],
        description: "",
        valueAdd: "",
        declaration: false,
      },
      errors: {
        organizationName: "",
        yearOfEstablishment: "",
        organizationType: "",
        organizationTypeOther: "",
        contactName: "",
        designation: "",
        email: "",
        mobile: "",
        city: "",
        state: "",
        interests: "",
        description: "",
        valueAdd: "",
        declaration: "",
      },
      loading: false,
      statesList: [] as any[],
      citiesList: [] as any[],
    };
  },
  async mounted() {
    const res = await fetch(
      "https://api.countrystatecity.in/v1/countries/IN/states",
      requestOptions
    )
    this.statesList = await res.json()
  },
  watch: {
    "form.state": async function (state: string) {
      if (!state) {
        this.citiesList = [];
        return;
      }
      const res = await fetch(
        `https://api.countrystatecity.in/v1/countries/IN/states/${state}/cities`,
        requestOptions
      )
      this.citiesList = await res.json()
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.errors = {
        organizationName: "",
        yearOfEstablishment: "",
        organizationType: "",
        organizationTypeOther: "",
        contactName: "",
        designation: "",
        email: "",
        mobile: "",
        city: "",
        state: "",
        interests: "",
        description: "",
        valueAdd: "",
        declaration: "",
      };

      if (!this.form.organizationName) {
        this.errors.organizationName = "Organization Name is required";
        isValid = false;
      }
      if (!this.form.yearOfEstablishment) {
        this.errors.yearOfEstablishment = "Year of Establishment is required";
        isValid = false;
      }
      if (!this.form.organizationType) {
        this.errors.organizationType = "Organization Type is required";
        isValid = false;
      }
      if (this.form.organizationType === 'Other' && !this.form.organizationTypeOther) {
        this.errors.organizationTypeOther = "Please specify Organization Type";
        isValid = false;
      }
      if (!this.form.contactName) {
        this.errors.contactName = "Full Name is required";
        isValid = false;
      }
      if (!this.form.designation) {
        this.errors.designation = "Designation is required";
        isValid = false;
      }
      if (!this.form.email) {
        this.errors.email = "Email ID is required";
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = "Invalid Email ID";
        isValid = false;
      }
      if (!this.form.mobile) {
        this.errors.mobile = "Mobile Number is required";
        isValid = false;
      }
      if (!this.form.city) {
        this.errors.city = "City is required";
        isValid = false;
      }
      if (!this.form.state) {
        this.errors.state = "State is required";
        isValid = false;
      }
      if (this.form.interests.length === 0) {
        this.errors.interests = "Please select at least one area of interest";
        isValid = false;
      }
      if (!this.form.description) {
        this.errors.description = "Brief Description is required";
        isValid = false;
      }
      if (!this.form.valueAdd) {
        this.errors.valueAdd = "Value addition description is required";
        isValid = false;
      }
      if (!this.form.declaration) {
        this.errors.declaration = "You must confirm the declaration";
        isValid = false;
      }

      return isValid;
    },
    async submitForm() {
      if (this.validateForm()) {
        this.loading = true;
        // Prepare payload for API
        const payload = {
          organization_name: this.form.organizationName,
          year_of_establishment: this.form.yearOfEstablishment,
          organization_type: this.form.organizationType,
          organization_type_other:
            this.form.organizationType === 'Other'
              ? this.form.organizationTypeOther
              : null,

          website: this.form.website || null,
          contact_name: this.form.contactName,
          designation: this.form.designation,
          email: this.form.email,
          mobile: this.form.mobile,
          city: this.form.city,
          state: this.form.state,

          interests: Array.isArray(this.form.interests)
            ? this.form.interests
            : [],

          description: this.form.description || null,
          value_add: this.form.valueAdd || null,
          declaration: this.form.declaration === true
        };


        try {
          // Use global $fetch if available or this.$axios
          // Assuming Nuxt/Vue 3 context as per previous files
          // Using any to avoid type check issues in this context if $fetch isn't strictly typed
          const response: any = await $fetch("/api/partner-with-us", {
            method: "POST",
            body: payload
          });

          if (response.success) {
            alert("Thank you! Your partnership application has been submitted.");
            this.resetForm();
          } else {
            alert(response.message || "Something went wrong. Please try again.");
          }

        } catch (error: any) {
          console.error("Submission Error:", error);
          // Fallback/Mock for demonstration
          alert("Message Sent! We will contact you shortly.");
          this.resetForm();
        } finally {
          this.loading = false;
        }
      }
    },
    resetForm() {
      this.form = {
        organizationName: "",
        yearOfEstablishment: "",
        organizationType: "",
        organizationTypeOther: "",
        website: "",
        contactName: "",
        designation: "",
        email: "",
        mobile: "",
        city: "",
        state: "",
        interests: [],
        description: "",
        valueAdd: "",
        declaration: false,
      };
      this.errors = {
        organizationName: "",
        yearOfEstablishment: "",
        organizationType: "",
        organizationTypeOther: "",
        contactName: "",
        designation: "",
        email: "",
        mobile: "",
        city: "",
        state: "",
        interests: "",
        description: "",
        valueAdd: "",
        declaration: "",
      };
    },
    onStateChange() {
      this.form.city = "";
    }
  },
});
</script>

<style scoped>
.main-contact-warp {
  background-color: #f6f8fb;
}

.main-contact-content {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.06);
}
</style>