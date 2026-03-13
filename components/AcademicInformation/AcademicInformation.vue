<template>
  <div class="academic-information-warp">
    <form @submit.prevent>
      <div class="row g-4">
        <!-- Class 10 -->
        <div class="col-lg-12">
          <h5 class="fw-bold mb-3">Class 10th <span>*</span></h5>
        </div>
        <div class="col-lg-3">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Year of Passing <span>*</span></label>
            <input type="number" min="0" class="form-control" v-model="formData.class10_year"
              @input="handleInput('class10_year')" :class="{ 'is-invalid': errors.class10_year }" />
            <div class="invalid-feedback" v-if="errors.class10_year">{{ errors.class10_year }}</div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Grade Type <span>*</span></label>
            <select class="form-select" v-model="formData.class10_type" @change="handleInput('class10_score')">
              <option value="Percentage">Percentage</option>
              <option value="CGPA">CGPA</option>
            </select>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Score <span>*</span></label>
            <input type="number" step="0.01" min="0" class="form-control" v-model="formData.class10_score"
              @input="handleInput('class10_score')" :class="{ 'is-invalid': errors.class10_score }" />
            <div class="invalid-feedback" v-if="errors.class10_score">{{ errors.class10_score }}</div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Medium of Instruction <span>*</span></label>
            <select class="form-select" v-model="formData.class10_medium">
              <option>English</option>
              <option>Hindi</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <!-- Class 12 -->
        <div class="col-lg-12">
          <h5 class="fw-bold mb-3 mt-2">Class 12th <span>*</span></h5>
        </div>
        <div class="col-lg-3">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Year of Passing <span>*</span></label>
            <input type="number" min="0" class="form-control" v-model="formData.class12_year"
              @input="handleInput('class12_year')" :class="{ 'is-invalid': errors.class12_year }" />
            <div class="invalid-feedback" v-if="errors.class12_year">{{ errors.class12_year }}</div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Grade Type <span>*</span></label>
            <select class="form-select" v-model="formData.class12_type" @change="handleInput('class12_score')">
              <option value="Percentage">Percentage</option>
              <option value="CGPA">CGPA</option>
            </select>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Score <span>*</span></label>
            <input type="number" step="0.01" min="0" class="form-control" v-model="formData.class12_score"
              @input="handleInput('class12_score')" :class="{ 'is-invalid': errors.class12_score }" />
            <div class="invalid-feedback" v-if="errors.class12_score">{{ errors.class12_score }}</div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="input-box mb-0">
            <label class="form-label fw-bold">Medium of Instruction <span>*</span></label>
            <select class="form-select" v-model="formData.class12_medium">
              <option>English</option>
              <option>Hindi</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <!-- Undergraduate -->
        <div class="col-lg-12">
          <div class="border-top pt-4 mt-2">
            <h5 class="fw-bold mb-3">Undergraduate Qualification (B.Com) <span>*</span></h5>
            <div class="d-flex gap-4">
              <div class="form-check">
                <input class="form-check-input" type="radio" value="1" id="ugCompleted" v-model="formData.ug_status" />
                <label class="form-check-label" for="ugCompleted">Completed</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" value="2" id="ugPursuing" v-model="formData.ug_status" />
                <label class="form-check-label" for="ugPursuing">Pursuing</label>
              </div>
            </div>
            <div class="text-danger small mt-1" v-if="errors.ug_status">{{ errors.ug_status }}</div>
          </div>
        </div>

        <!-- UG Score & Institution -->
        <template v-if="formData.ug_status == '1' || formData.ug_status == '2'">
          <div class="col-lg-3">
            <div class="input-box mb-0">
              <label class="form-label fw-bold">Grade Type <span>*</span></label>
              <select class="form-select" v-model="formData.ug_type" @change="handleInput('ug_cgpa')">
                <option value="Percentage">Percentage</option>
                <option value="CGPA">CGPA</option>
              </select>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="input-box mb-0">
              <label class="form-label fw-bold">Score <span>*</span></label>
              <input type="number" step="0.01" min="0" class="form-control" v-model="formData.ug_cgpa"
                @input="handleInput('ug_cgpa')" :class="{ 'is-invalid': errors.ug_cgpa }" />
              <div class="invalid-feedback" v-if="errors.ug_cgpa">{{ errors.ug_cgpa }}</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="input-box mb-0">
              <label class="form-label fw-bold">Institution Name<span>*</span></label>
              <input type="text" class="form-control" v-model="formData.ug_institution"
                :class="{ 'is-invalid': errors.ug_institution }" placeholder="Enter college name" />
              <div class="invalid-feedback" v-if="errors.ug_institution">{{ errors.ug_institution }}</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="input-box mb-0">
              <label class="form-label fw-bold">Medium of Instruction <span>*</span></label>
              <select class="form-select" v-model="formData.ug_medium">
                <option>English</option>
                <option>Hindi</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </template>

        <!-- Higher Qualification -->
        <div class="col-lg-12">
          <div class="border-top pt-4 mt-2">
            <label class="form-label fw-bold d-block mb-2">Do you have a Higher Qualification? <span>*</span></label>
            <div class="d-flex gap-4">
              <div class="form-check">
                <input class="form-check-input" type="radio" value="Yes" id="pgYes" v-model="formData.pg_exists" />
                <label class="form-check-label" for="pgYes">Yes</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" value="No" id="pgNo" v-model="formData.pg_exists" />
                <label class="form-check-label" for="pgNo">No</label>
              </div>
            </div>
            <div class="text-danger small mt-1" v-if="errors.pg_exists">{{ errors.pg_exists }}</div>
          </div>
        </div>

        <template v-if="formData.pg_exists === 'Yes'">
          <div class="col-lg-6">
            <div class="input-box mb-0">
              <label class="form-label fw-bold">Select Qualification</label>
              <select class="form-select" v-model="formData.pg_type">
                <option value="">--Select--</option>
                <option>M.Com</option>
                <option>M.B.A</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6" v-if="formData.pg_type === 'Other'">
            <div class="input-box mb-0">
              <label class="form-label fw-bold">Please Specify</label>
              <input type="text" class="form-control" v-model="formData.pg_other" />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="input-box mb-0">
              <label class="form-label fw-bold">Institution Name</label>
              <input type="text" class="form-control" v-model="formData.pg_institution"
                placeholder="Enter university or college name" />
            </div>
          </div>
        </template>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AcademicInformation",
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      errors: {}
    };
  },
  methods: {
    scrollToFirstError() {
      this.$nextTick(() => {
        const el = this.$el.querySelector('.is-invalid');
        if (el && el.scrollIntoView) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    },
    handleInput(field) {
      delete this.errors[field];

      if (this.formData[field] < 0) {
        if (field.includes('year')) {
          this.formData[field] = null;
          this.errors[field] = "Year cannot be negative";
        } else {
          this.formData[field] = 0;
          this.errors[field] = "Value cannot be negative";
        }
      }

      // Dynamic limits based on grade type
      if (field === 'class10_score') {
        const type = this.formData.class10_type;
        if (type === 'CGPA' && this.formData[field] > 10) {
          this.errors[field] = "CGPA cannot exceed 10.00";
        } else if (type === 'Percentage' && this.formData[field] > 100) {
          this.errors[field] = "Percentage cannot exceed 100";
        }
      } else if (field === 'class12_score') {
        const type = this.formData.class12_type;
        if (type === 'CGPA' && this.formData[field] > 10) {
          this.errors[field] = "CGPA cannot exceed 10.00";
        } else if (type === 'Percentage' && this.formData[field] > 100) {
          this.errors[field] = "Percentage cannot exceed 100";
        }
      } else if (field === 'ug_cgpa') {
        const type = this.formData.ug_type;
        if (type === 'CGPA' && this.formData[field] > 10) {
          this.errors[field] = "CGPA cannot exceed 10.00";
        } else if (type === 'Percentage' && this.formData[field] > 100) {
          this.errors[field] = "Percentage cannot exceed 100";
        }
      }
    },
    validate() {
      this.errors = {};
      let isValid = true;

      if (!this.formData.class10_year) {
        this.errors.class10_year = "Class 10 Year is required";
        isValid = false;
      }
      if (!this.formData.class10_score) {
        this.errors.class10_score = "Class 10 Score is required";
        isValid = false;
      }
      if (!this.formData.class12_year) {
        this.errors.class12_year = "Class 12 Year is required";
        isValid = false;
      }
      if (!this.formData.class12_score) {
        this.errors.class12_score = "Class 12 Score is required";
        isValid = false;
      }

      if (this.formData.ug_status == "2" || this.formData.ug_status == "1") {
        if (!this.formData.ug_cgpa) {
          this.errors.ug_cgpa = "CGPA/Percentage is required";
          isValid = false;
        }
        if (!this.formData.ug_institution || !this.formData.ug_institution.trim()) {
          this.errors.ug_institution = "Institution is required";
          isValid = false;
        }
      }

      if (!this.formData.ug_status) {
        this.errors.ug_status = "Undergraduate status required";
        isValid = false;
      }

      if (!this.formData.pg_exists) {
        this.errors.pg_exists = "Confirmation required";
        isValid = false;
      }

      return isValid;
    }
  }
};
</script>

<style scoped>
.form-label span,
h5 span {
  color: #dc3545;
}

.form-check-input:checked {
  background-color: #872980;
  border-color: #872980;
}
</style>