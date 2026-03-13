<template>
    <div class="main-contact-warp ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="contact-content mb-5 text-center">
                        <div class="section-title">
                            <span class="sub-title">Join Us</span>
                            <h2 class="heading reveal3">
                                Become a Campus CEO (Faculty)
                            </h2>
                            <p class="reveal3">
                                Empower your students and lead the change on your campus. Connect your institution with
                                career opportunities and professional growth. Apply now to become a Campus CEO
                                (Faculty).
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-2">
                    <div class="main-contact-content">
                        <form @submit.prevent="submitForm">
                            <h4 class="mb-4">Campus CEO (Faculty) – Application Form</h4>

                            <!-- Personal Details -->
                            <h5 class="mb-3">Personal Details</h5>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <label class="form-label">Full Name <span>*</span></label>
                                        <div class="input-with-icon">
                                            <input v-model="form.fullName" type="text" class="form-control"
                                                placeholder="Full Name">
                                            <i class="ti ti-user"></i>
                                        </div>
                                        <small class="text-danger" v-if="errors.fullName">{{ errors.fullName }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <label class="form-label">Email ID <span>*</span></label>
                                        <div class="input-with-icon">
                                            <input v-model="form.email" type="email" class="form-control"
                                                placeholder="Email ID">
                                            <i class="ti ti-mail"></i>
                                        </div>
                                        <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <label class="form-label">Mobile Number <span>*</span></label>
                                        <div class="input-with-icon">
                                            <input v-model="form.mobile" type="tel" class="form-control"
                                                placeholder="Mobile Number">
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
                                                <option v-for="state in statesList" :key="state.iso2"
                                                    :value="state.iso2">{{ state.name }}</option>
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
                                                <option v-for="city in citiesList" :key="city.id" :value="city.name">{{
                                                    city.name }}</option>
                                            </select>
                                            <i class="ti ti-map-pin"></i>
                                        </div>
                                        <small class="text-danger" v-if="errors.city">{{ errors.city }}</small>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="input-box">
                                        <label class="form-label">Complete Postal Address (for Campus CEO – Faculty kit
                                            delivery) <span>*</span></label>
                                        <textarea v-model="form.address" class="form-control" rows="3"
                                            placeholder="Your complete address..."></textarea>
                                        <small class="text-danger" v-if="errors.address">{{ errors.address }}</small>
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4">

                            <!-- Professional Details -->
                            <h5 class="mb-3">Professional Details</h5>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="input-box">
                                        <label class="form-label">Institution / College / University Name
                                            <span>*</span></label>
                                        <input v-model="form.institutionName" type="text" class="form-control"
                                            placeholder="Institution Name">
                                        <small class="text-danger" v-if="errors.institutionName">{{
                                            errors.institutionName }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <label class="form-label">Department / Subject Area <span>*</span></label>
                                        <input v-model="form.department" type="text" class="form-control"
                                            placeholder="Department">
                                        <small class="text-danger" v-if="errors.department">{{ errors.department
                                            }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <label class="form-label">Current Designation <span>*</span></label>
                                        <select v-model="form.designation" class="form-control">
                                            <option value="">Select Designation</option>
                                            <option v-for="desig in designations" :key="desig" :value="desig">
                                                {{ desig }}
                                            </option>
                                        </select>
                                        <small class="text-danger" v-if="errors.designation">{{ errors.designation
                                            }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-6" v-if="form.designation === 'Other (Please specify)'">
                                    <div class="input-box">
                                        <label class="form-label">Specify Designation <span>*</span></label>
                                        <input v-model="form.designationOther" type="text" class="form-control"
                                            placeholder="Specify Designation">
                                        <small class="text-danger" v-if="errors.designationOther">{{
                                            errors.designationOther }}</small>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <label class="form-label">Total Teaching Experience <span>*</span></label>
                                        <select v-model="form.teachingExperience" class="form-control">
                                            <option value="">Select Experience</option>
                                            <option v-for="exp in experienceRanges" :key="exp" :value="exp">
                                                {{ exp }}
                                            </option>
                                        </select>
                                        <small class="text-danger" v-if="errors.teachingExperience">{{
                                            errors.teachingExperience }}</small>
                                    </div>
                                </div>

                                <div class="col-lg-12 mt-3">
                                    <div class="input-box">
                                        <label class="form-label">Any Industrial Experience <span>*</span></label>
                                        <div class="d-flex gap-4 mt-2">
                                            <div class="form-check purple-radio">
                                                <input class="form-check-input" type="radio"
                                                    v-model="form.hasIndustrialExp" value="Yes" id="indExpYes">
                                                <label class="form-check-label" for="indExpYes">Yes</label>
                                            </div>
                                            <div class="form-check purple-radio">
                                                <input class="form-check-input" type="radio"
                                                    v-model="form.hasIndustrialExp" value="No" id="indExpNo">
                                                <label class="form-check-label" for="indExpNo">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 mt-2" v-if="form.hasIndustrialExp === 'Yes'">
                                    <div class="input-box">
                                        <label class="form-label">Please Specify Industrial Experience</label>
                                        <input v-model="form.industrialExperience" type="text" class="form-control"
                                            placeholder="E.g., 2 years as a Developer">
                                        <small class="text-danger" v-if="errors.industrialExperience">{{
                                            errors.industrialExperience }}</small>
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4">

                            <!-- Academic Background -->
                            <h5 class="mb-3">Academic Background</h5>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <label class="form-label">Highest Qualification <span>*</span></label>
                                        <select v-model="form.highestQualification" class="form-control">
                                            <option value="">Select Qualification</option>
                                            <option v-for="qual in qualifications" :key="qual" :value="qual">
                                                {{ qual }}
                                            </option>
                                        </select>
                                        <small class="text-danger" v-if="errors.highestQualification">{{
                                            errors.highestQualification }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-6" v-if="form.highestQualification === 'Other (Please specify)'">
                                    <div class="input-box">
                                        <label class="form-label">Specify Qualification <span>*</span></label>
                                        <input v-model="form.qualificationOther" type="text" class="form-control"
                                            placeholder="Specify Qualification">
                                        <small class="text-danger" v-if="errors.qualificationOther">{{
                                            errors.qualificationOther }}</small>
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4">

                            <!-- How You Can Contribute -->
                            <h5 class="mb-3">How You Can Contribute</h5>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="input-box">
                                        <label class="form-label">What motivates you to become a Campus CEO (Faculty)?
                                            (50–100 words) <span>*</span></label>
                                        <textarea v-model="form.motivation" class="form-control" rows="4"
                                            placeholder="Explain your motivation..."></textarea>
                                        <small class="text-danger" v-if="errors.motivation">{{ errors.motivation
                                            }}</small>
                                    </div>
                                </div>

                                <div class="col-lg-12 mt-3">
                                    <div class="input-box">
                                        <label class="form-label">How can you support students to bring awareness and
                                            engagement? <span>*</span></label>
                                        <div class="d-flex flex-wrap gap-3 mt-2">
                                            <div class="form-check" v-for="activity in supportActivitiesList"
                                                :key="activity">
                                                <input class="form-check-input" type="checkbox" :value="activity"
                                                    :id="activity" v-model="form.supportActivities">
                                                <label class="form-check-label" :for="activity">{{ activity }}</label>
                                            </div>
                                        </div>
                                        <small class="text-danger" v-if="errors.supportActivities">{{
                                            errors.supportActivities }}</small>
                                    </div>
                                </div>

                                <div class="col-lg-12 mt-3">
                                    <div class="input-box">
                                        <label class="form-label">Estimated number of students you can engage:
                                            <span>*</span></label>
                                        <div class="d-flex flex-wrap gap-4 mt-2">
                                            <div class="form-check purple-radio" v-for="range in studentReachList" :key="range">
                                                <input class="form-check-input" type="radio" v-model="form.studentReach"
                                                    :value="range" :id="range">
                                                <label class="form-check-label" :for="range">{{ range }}</label>
                                            </div>
                                        </div>
                                        <small class="text-danger" v-if="errors.studentReach">{{ errors.studentReach
                                            }}</small>
                                    </div>
                                </div>
                            </div>

                            <!-- Availability & Consent -->
                            <div class="col-lg-12">
                                <h5 class="mt-4 mb-2">Availability & Consent</h5>
                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" v-model="form.consent"
                                        id="consentCheck">
                                    <label class="form-check-label" for="consentCheck">
                                        I agree to represent the organisation professionally, ethically, and
                                        responsibly.
                                    </label>
                                </div>
                                <small class="text-danger" v-if="errors.consent">{{ errors.consent }}</small>
                            </div>

                            <!-- Submit Button -->
                            <div class="col-lg-12">
                                <button type="submit" class="default-btn submit-btn mt-4" :disabled="loading">
                                    <span>{{ loading ? 'Submitting...' : 'Submit Application' }}</span>
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

const headers = new Headers();
headers.append("X-CSCAPI-KEY", "Q3k5SXFtVjNubXRBZjdKRFJ1QVJLQkZqQ3lYT2JNVUhVZmhOYm5ESw==");

const requestOptions: RequestInit = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

export default defineComponent({
    name: "CampusCeoFacultyForm",
    data() {
        return {
            designations: [
                "Assistant Professor",
                "Associate Professor",
                "Professor",
                "Visiting / Adjunct Faculty",
                "Other (Please specify)"
            ],
            experienceRanges: [
                "0–3 Years",
                "3–7 Years",
                "7–12 Years",
                "12+ Years"
            ],
            qualifications: [
                "PhD",
                "MBA",
                "M.Com",
                "Other (Please specify)"
            ],
            supportActivitiesList: [
                "Classroom Announcements",
                "Career Guidance Sessions",
                "Workshops / Seminars",
                "Mentorship",
                "Institutional Tie-ups"
            ],
            studentReachList: [
                "50–100",
                "100–300",
                "300+"
            ],
            form: {
                fullName: "",
                email: "",
                mobile: "",
                city: "",
                state: "",
                address: "",
                institutionName: "",
                department: "",
                designation: "",
                designationOther: "",
                teachingExperience: "",
                hasIndustrialExp: "No",
                industrialExperience: "",
                highestQualification: "",
                qualificationOther: "",
                motivation: "",
                supportActivities: [] as string[],
                studentReach: "",
                consent: false,
            },
            errors: {
                fullName: "",
                email: "",
                mobile: "",
                city: "",
                state: "",
                address: "",
                institutionName: "",
                department: "",
                designation: "",
                designationOther: "",
                teachingExperience: "",
                industrialExperience: "",
                highestQualification: "",
                qualificationOther: "",
                motivation: "",
                supportActivities: "",
                studentReach: "",
                consent: "",
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
            Object.keys(this.errors).forEach(key => {
                (this.errors as any)[key] = "";
            });

            if (!this.form.fullName) { this.errors.fullName = "Full Name is required"; isValid = false; }
            if (!this.form.email) { this.errors.email = "Email ID is required"; isValid = false; }
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) { this.errors.email = "Invalid Email ID"; isValid = false; }
            if (!this.form.mobile) { this.errors.mobile = "Mobile Number is required"; isValid = false; }
            if (!this.form.city) { this.errors.city = "City is required"; isValid = false; }
            if (!this.form.state) { this.errors.state = "State is required"; isValid = false; }
            if (!this.form.address) { this.errors.address = "Postal Address is required"; isValid = false; }
            if (!this.form.institutionName) { this.errors.institutionName = "Institution Name is required"; isValid = false; }
            if (!this.form.department) { this.errors.department = "Department is required"; isValid = false; }
            if (!this.form.designation) { this.errors.designation = "Designation is required"; isValid = false; }
            if (this.form.designation === "Other (Please specify)" && !this.form.designationOther) { this.errors.designationOther = "Please specify designation"; isValid = false; }
            if (!this.form.teachingExperience) { this.errors.teachingExperience = "Teaching Experience is required"; isValid = false; }
            if (this.form.hasIndustrialExp === 'Yes' && !this.form.industrialExperience) { this.errors.industrialExperience = "Please specify industrial experience"; isValid = false; }
            if (!this.form.highestQualification) { this.errors.highestQualification = "Qualification is required"; isValid = false; }
            if (this.form.highestQualification === "Other (Please specify)" && !this.form.qualificationOther) { this.errors.qualificationOther = "Please specify qualification"; isValid = false; }
            if (!this.form.motivation) { this.errors.motivation = "Motivation description is required"; isValid = false; }
            if (this.form.supportActivities.length === 0) { this.errors.supportActivities = "Please select at least one activity"; isValid = false; }
            if (!this.form.studentReach) { this.errors.studentReach = "Please select student reach"; isValid = false; }
            if (!this.form.consent) { this.errors.consent = "You must agree to the terms"; isValid = false; }

            return isValid;
        },
        async submitForm() {
            if (this.validateForm()) {
                this.loading = true;
                const payload = {
                    full_name: this.form.fullName,
                    email: this.form.email,
                    mobile: this.form.mobile,
                    city: this.form.city,
                    state: this.form.state,
                    address: this.form.address,
                    institution_name: this.form.institutionName,
                    department: this.form.department,
                    designation: this.form.designation === "Other (Please specify)" ? this.form.designationOther : this.form.designation,
                    teaching_experience: this.form.teachingExperience,
                    industrial_experience: this.form.hasIndustrialExp === 'Yes' ? this.form.industrialExperience : null,
                    highest_qualification: this.form.highestQualification === "Other (Please specify)" ? this.form.qualificationOther : this.form.highestQualification,
                    motivation: this.form.motivation,
                    support_activities: this.form.supportActivities,
                    student_reach: this.form.studentReach,
                    consent: this.form.consent
                };

                try {
                    const response: any = await $fetch("/api/campus-ceo-faculty", {
                        method: "POST",
                        body: payload
                    });

                    if (response.success) {
                        alert("Thank you! Your Campus CEO (Faculty) application has been submitted.");
                        this.resetForm();
                    } else {
                        alert(response.message || "Something went wrong. Please try again.");
                    }
                } catch (error: any) {
                    console.error("Submission Error:", error);
                    alert("Submission failed. Please check your connection and try again.");
                } finally {
                    this.loading = false;
                }
            }
        },
        resetForm() {
            this.form = {
                fullName: "",
                email: "",
                mobile: "",
                city: "",
                state: "",
                address: "",
                institutionName: "",
                department: "",
                designation: "",
                designationOther: "",
                teachingExperience: "",
                hasIndustrialExp: "No",
                industrialExperience: "",
                highestQualification: "",
                qualificationOther: "",
                motivation: "",
                supportActivities: [],
                studentReach: "",
                consent: false,
            };
            Object.keys(this.errors).forEach(key => {
                (this.errors as any)[key] = "";
            });
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

/* Purple circular radio buttons */
.purple-radio .form-check-input[type="radio"] {
    appearance: none !important;
    -webkit-appearance: none !important;
    width: 20px !important;
    height: 20px !important;
    border: 2px solid #7c3aed !important;
    border-radius: 50% !important;
    background-color: #ffffff !important;
    cursor: pointer;
    position: relative;
    flex-shrink: 0;
    margin-top: 2px;
    transition: box-shadow 0.2s, border-color 0.2s;
    display: inline-block;
    box-sizing: border-box !important;
    padding: 0 !important;
}

.purple-radio .form-check-input[type="radio"]:checked {
    background-color: #ffffff !important;
    border-color: #7c3aed !important;
    box-shadow: inset 0 0 0 5px #7c3aed !important;
}

.purple-radio .form-check-input[type="radio"]:focus {
    outline: none !important;
    box-shadow: inset 0 0 0 5px #7c3aed, 0 0 0 3px rgba(124, 58, 237, 0.2) !important;
}

.purple-radio .form-check-input[type="radio"]:hover {
    border-color: #6d28d9 !important;
}

.purple-radio .form-check-label {
    cursor: pointer;
    padding-left: 4px;
    color: #374151;
    font-weight: 500;
}
</style>