<template>
  <div class="personal-information-warp">
    <form @submit.prevent>
      <div class="row g-4">
        <!-- Applicant Name -->
        <div class="col-lg-6">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Applicant First Name <span>*</span></label>
            <input type="text" class="form-control" placeholder="First Name" v-model="formData.first_name"
              :class="{ 'is-invalid': errors.first_name }" />
            <div class="invalid-feedback" v-if="errors.first_name">{{ errors.first_name }}</div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Applicant Last Name <span>*</span></label>
            <input type="text" class="form-control" placeholder="Last Name" v-model="formData.last_name"
              :class="{ 'is-invalid': errors.last_name }" />
            <div class="invalid-feedback" v-if="errors.last_name">{{ errors.last_name }}</div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="col-lg-6">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Email ID <span>*</span></label>
            <input type="email" class="form-control" placeholder="Email ID" v-model="formData.email"
              :class="{ 'is-invalid': errors.email }" />
            <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Mobile Number <span>*</span></label>
            <div class="input-group">
              <span class="input-group-text bg-white">+91</span>
              <input type="tel" class="form-control" placeholder="Mobile Number" v-model="formData.mobile"
                :class="{ 'is-invalid': errors.mobile }" />
            </div>
            <div class="invalid-feedback d-block" v-if="errors.mobile">{{ errors.mobile }}</div>
          </div>
        </div>

        <!-- Emergency Contact -->
        <div class="col-lg-6">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Emergency Contact Name</label>
            <input type="text" class="form-control" placeholder="Contact Name" v-model="formData.father_name"
              :class="{ 'is-invalid': errors.father_name }" />
            <div class="invalid-feedback" v-if="errors.father_name">{{ errors.father_name }}</div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Emergency Contact Number</label>
            <input type="tel" class="form-control" placeholder="Mobile Number" v-model="formData.father_mobile"
              :class="{ 'is-invalid': errors.father_mobile }" />
            <div class="invalid-feedback" v-if="errors.father_mobile">{{ errors.father_mobile }}</div>
          </div>
        </div>

        <!-- Personal Details -->
        <div class="col-lg-4">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Date Of Birth <span>*</span></label>
            <input type="date" class="form-control" v-model="formData.dob" :class="{ 'is-invalid': errors.dob }" />
            <div class="invalid-feedback" v-if="errors.dob">{{ errors.dob }}</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Gender <span>*</span></label>
            <select class="form-select" v-model="formData.gender" :class="{ 'is-invalid': errors.gender }">
              <option selected disabled value="">--Select--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other / Prefer not to say</option>
            </select>
            <div class="invalid-feedback" v-if="errors.gender">{{ errors.gender }}</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="input-box mb-0">
            <label class="form-label fw-bold font-muted">Nationality</label>
            <input type="text" class="form-control text-muted bg-light" readonly v-model="formData.nationality" />
          </div>
        </div>

        <!-- Address Info -->
        <div class="col-lg-4">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">State <span>*</span></label>
            <select class="form-select" v-model="formData.state" @change="onStateChange"
              :class="{ 'is-invalid': errors.state }">
              <option value="" disabled>Select State</option>
              <option v-for="state in statesList" :key="state.iso2" :value="state.iso2">{{ state.name }}</option>
            </select>
            <div class="invalid-feedback" v-if="errors.state">{{ errors.state }}</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">City <span>*</span></label>
            <select class="form-select" v-model="formData.city" :class="{ 'is-invalid': errors.city }">
              <option value="" disabled>Select City</option>
              <option v-for="city in citiesList" :key="city.id" :value="city.name">{{ city.name }}</option>
            </select>
            <div class="invalid-feedback" v-if="errors.city">{{ errors.city }}</div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">PIN Code <span>*</span></label>
            <input type="text" class="form-control" placeholder="PIN Code" v-model="formData.pin_code"
              :class="{ 'is-invalid': errors.pin_code }" />
            <div class="invalid-feedback" v-if="errors.pin_code">{{ errors.pin_code }}</div>
          </div>
        </div>

        <div class="col-lg-12">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Complete Address <span>*</span></label>
            <textarea class="form-control" placeholder="Enter full address" v-model="formData.complete_address"
              :class="{ 'is-invalid': errors.complete_address }" rows="3"></textarea>
            <div class="invalid-feedback" v-if="errors.complete_address">{{ errors.complete_address }}</div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const headers = new Headers();
headers.append("X-CSCAPI-KEY", "Q3k5SXFtVjNubXRBZjdKRFJ1QVJLQkZqQ3lYT2JNVUhVZmhOYm5ESw==");

const requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

export default {
  name: "PersonalInformation",
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      errors: {},
      statesList: [],
      citiesList: []
    };
  },
  async mounted() {
    try {
      const res = await fetch(
        "https://api.countrystatecity.in/v1/countries/IN/states",
        requestOptions
      );
      this.statesList = await res.json();

      // If editing a profile and state is already set, fetch its cities
      if (this.formData.state) {
        const cityRes = await fetch(
          `https://api.countrystatecity.in/v1/countries/IN/states/${this.formData.state}/cities`,
          requestOptions
        );
        this.citiesList = await cityRes.json();
      }
    } catch (error) {
      console.error("Failed to load states", error);
    }
  },
  watch: {
    "formData.state": async function (newState) {
      if (!newState) {
        this.citiesList = [];
        return;
      }
      try {
        const res = await fetch(
          `https://api.countrystatecity.in/v1/countries/IN/states/${newState}/cities`,
          requestOptions
        );
        this.citiesList = await res.json();
      } catch (error) {
        console.error("Failed to load cities", error);
      }
    }
  },
  methods: {
    onStateChange() {
      this.formData.city = "";
    },
    scrollToFirstError() {
      this.$nextTick(() => {
        const el = this.$el.querySelector('.is-invalid');
        if (el && el.scrollIntoView) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    },
    validate() {
      this.errors = {};
      let isValid = true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/;

      if (!this.formData.first_name) {
        this.errors.first_name = "First Name is required";
        isValid = false;
      }
      if (!this.formData.last_name) {
        this.errors.last_name = "Last Name is required";
        isValid = false;
      }
      if (!this.formData.email) {
        this.errors.email = "Email is required";
        isValid = false;
      } else if (!emailRegex.test(this.formData.email)) {
        this.errors.email = "Invalid email format";
        isValid = false;
      }
      if (!this.formData.mobile) {
        this.errors.mobile = "Mobile Number is required";
        isValid = false;
      } else if (!phoneRegex.test(this.formData.mobile)) {
        this.errors.mobile = "Invalid mobile number (10 digits)";
        isValid = false;
      }
      if (!this.formData.dob) {
        this.errors.dob = "Date of Birth is required";
        isValid = false;
      }
      if (!this.formData.gender) {
        this.errors.gender = "Gender is required";
        isValid = false;
      }
      if (!this.formData.city) {
        this.errors.city = "City is required";
        isValid = false;
      }
      if (!this.formData.state) {
        this.errors.state = "State is required";
        isValid = false;
      }
      if (!this.formData.pin_code) {
        this.errors.pin_code = "PIN Code is required";
        isValid = false;
      }
      if (!this.formData.complete_address) {
        this.errors.complete_address = "Complete Address is required";
        isValid = false;
      }

      return isValid;
    },
  },
};
</script>

<style scoped>
.form-label span {
  color: #dc3545;
}

.input-group-text {
  font-size: 14px;
  font-weight: 500;
}

.font-muted {
  color: #6c757d;
}
</style>
