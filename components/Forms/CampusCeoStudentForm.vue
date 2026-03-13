<template>
    <div class="main-contact-warp ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="contact-content mb-5 text-center">
                        <div class="section-title">
                            <span class="sub-title">Join Us</span>
                            <h2 class="heading reveal3">
                                Become a Campus CEO
                            </h2>
                            <p class="reveal3">
                                Lead the change on your campus. Connect your peers with career opportunities and build
                                your leadership skills. Apply now to become a Campus CEO (Student).
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-2">
                    <div class="main-contact-content">
                        <form @submit.prevent="submitForm">
                            <h4 class="mb-4">Campus CEO (Student) – Application Form</h4>

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
                                        <label class="form-label">Complete Postal Address (for Campus CEO – Student kit
                                            delivery) <span>*</span></label>
                                        <textarea v-model="form.address" class="form-control" rows="3"
                                            placeholder="Your complete address..."></textarea>
                                        <small class="text-danger" v-if="errors.address">{{ errors.address }}</small>
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4">

                            <!-- Academic Details -->
                            <h5 class="mb-3">Academic Details</h5>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="input-box">
                                        <label class="form-label">College / University Name <span>*</span></label>
                                        <input v-model="form.collegeName" type="text" class="form-control"
                                            placeholder="College / University Name">
                                        <small class="text-danger" v-if="errors.collegeName">{{ errors.collegeName
                                            }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <label class="form-label">Program of Study <span>*</span></label>
                                        <select v-model="form.programOfStudy" class="form-control">
                                            <option value="">Select Program</option>
                                            <optgroup label="Undergraduate">
                                                <option v-for="prog in programs.undergraduate" :key="prog"
                                                    :value="prog">
                                                    {{ prog }}
                                                </option>
                                            </optgroup>
                                            <optgroup label="Postgraduate">
                                                <option v-for="prog in programs.postgraduate" :key="prog" :value="prog">
                                                    {{ prog }}
                                                </option>
                                            </optgroup>
                                        </select>
                                        <small class="text-danger" v-if="errors.programOfStudy">{{ errors.programOfStudy
                                            }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-6" v-if="form.programOfStudy.includes('Other')">
                                    <div class="input-box">
                                        <label class="form-label">Please Specify <span>*</span></label>
                                        <input v-model="form.programOther" type="text" class="form-control"
                                            placeholder="Specify Program">
                                        <small class="text-danger" v-if="errors.programOther">{{ errors.programOther
                                            }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <label class="form-label">Year / Semester <span>*</span></label>
                                        <select v-model="form.semester" class="form-control">
                                            <option value="">Select Year / Semester</option>
                                            <option v-for="sem in semesters" :key="sem" :value="sem">{{ sem }}</option>
                                        </select>
                                        <small class="text-danger" v-if="errors.semester">{{ errors.semester }}</small>
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4">

                            <!-- Campus Involvement -->
                            <h5 class="mb-3">Campus Involvement</h5>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="input-box">
                                        <label class="form-label">Are you part of any student body/club/society in your
                                            college? <span>*</span></label>
                                        <div class="d-flex gap-4 mt-2">
                                            <div class="form-check purple-radio">
                                                <input class="form-check-input" type="radio" v-model="form.studentBody"
                                                    value="Yes" id="studentBodyYes">
                                                <label class="form-check-label" for="studentBodyYes">Yes</label>
                                            </div>
                                            <div class="form-check purple-radio">
                                                <input class="form-check-input" type="radio" v-model="form.studentBody"
                                                    value="No" id="studentBodyNo">
                                                <label class="form-check-label" for="studentBodyNo">No</label>
                                            </div>
                                        </div>
                                        <small class="text-danger" v-if="errors.studentBody">{{ errors.studentBody
                                        }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-12 mt-3" v-if="form.studentBody === 'Yes'">
                                    <div class="input-box">
                                        <label class="form-label">Please mention description <span>*</span></label>
                                        <textarea v-model="form.studentBodyDescription" class="form-control" rows="3"
                                            placeholder="Please describe your role or involvement..."></textarea>
                                        <small class="text-danger" v-if="errors.studentBodyDescription">{{
                                            errors.studentBodyDescription }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-12 mt-3">
                                    <div class="input-box">
                                        <label class="form-label">Have you previously worked as a Student / Campus
                                            Ambassador for any professional body? <span>*</span></label>
                                        <div class="d-flex gap-4 mt-2">
                                            <div class="form-check purple-radio">
                                                <input class="form-check-input" type="radio"
                                                    v-model="form.campusAmbassador" value="Yes"
                                                    id="campusAmbassadorYes">
                                                <label class="form-check-label" for="campusAmbassadorYes">Yes</label>
                                            </div>
                                            <div class="form-check purple-radio">
                                                <input class="form-check-input" type="radio"
                                                    v-model="form.campusAmbassador" value="No" id="campusAmbassadorNo">
                                                <label class="form-check-label" for="campusAmbassadorNo">No</label>
                                            </div>
                                        </div>
                                        <small class="text-danger" v-if="errors.campusAmbassador">{{
                                            errors.campusAmbassador }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-12 mt-3" v-if="form.campusAmbassador === 'Yes'">
                                    <div class="input-box">
                                        <label class="form-label">Please mention description <span>*</span></label>
                                        <textarea v-model="form.campusAmbassadorDescription" class="form-control"
                                            rows="3"
                                            placeholder="Please describe your role or involvement..."></textarea>
                                        <small class="text-danger" v-if="errors.campusAmbassadorDescription">{{
                                            errors.campusAmbassadorDescription }}</small>
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4">

                            <!-- Share Your Role -->
                            <h5 class="mb-3">Share Your Role as Campus CEO (Student)</h5>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="input-box">
                                        <label class="form-label">What inspires you to become a Campus CEO (Student)?
                                            (50–100 words) <span>*</span></label>
                                        <textarea v-model="form.inspiration" class="form-control" rows="4"
                                            placeholder="Explain your inspiration..."></textarea>
                                        <small class="text-danger" v-if="errors.inspiration">{{ errors.inspiration
                                            }}</small>
                                    </div>
                                </div>
                                <div class="col-lg-12 mt-3">
                                    <div class="input-box">
                                        <label class="form-label">Would you like to be promoted this initiative in your
                                            social circle? <span>*</span></label>
                                        <div class="d-flex flex-wrap gap-3 mt-2">
                                            <div class="form-check" v-for="channel in promotionChannelsList"
                                                :key="channel">
                                                <input class="form-check-input" type="checkbox" :value="channel"
                                                    :id="channel" v-model="form.promotionChannels">
                                                <label class="form-check-label" :for="channel">{{ channel }}</label>
                                            </div>
                                        </div>
                                        <small class="text-danger" v-if="errors.promotionChannels">{{
                                            errors.promotionChannels }}</small>
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
                                        I agree to actively participate and responsibly represent the organisation.
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
    name: "CampusCeoStudentForm",
    data() {
        return {
            programs: {
                undergraduate: [
                    "B.A. (Bachelor of Arts)",
                    "B.Com (Bachelor of Commerce)",
                    "B.Sc (Bachelor of Science)",
                    "BBA (Bachelor of Business Administration)",
                    "BCA (Bachelor of Computer Applications)",
                    "BMS (Bachelor of Management Studies)",
                    "BAF (Bachelor of Accounting & Finance)",
                    "BBM (Bachelor of Business Management)",
                    "B.Voc (Bachelor of Vocation)",
                    "Other (Specify)"
                ],
                postgraduate: [
                    "M.A. (Master of Arts)",
                    "M.Com (Master of Commerce)",
                    "M.Sc (Master of Science)",
                    "MBA (Master of Business Administration)",
                    "MCA (Master of Computer Applications)",
                    "MMS (Master of Management Studies)",
                    "MAF (Master of Accounting & Finance)",
                    "M.Voc (Master of Vocation)",
                    "Other (Specify)"
                ]
            },
            semesters: [
                "1st Year – Semester I",
                "1st Year – Semester II",
                "2nd Year – Semester III",
                "2nd Year – Semester IV",
                "3rd Year – Semester V",
                "3rd Year – Semester VI"
            ],
            promotionChannelsList: [
                "Social Media",
                "WhatsApp / Telegram Groups",
                "College Events / Seminars",
                "Peer-to-Peer Outreach"
            ],
            form: {
                fullName: "",
                email: "",
                mobile: "",
                city: "",
                state: "",
                address: "",
                collegeName: "",
                programOfStudy: "",
                programOther: "",
                semester: "",
                studentBody: "",
                studentBodyDescription: "",
                campusAmbassador: "",
                campusAmbassadorDescription: "",
                inspiration: "",
                promotionChannels: [] as string[],
                consent: false,
            },
            errors: {
                fullName: "",
                email: "",
                mobile: "",
                city: "",
                state: "",
                address: "",
                collegeName: "",
                programOfStudy: "",
                programOther: "",
                semester: "",
                studentBody: "",
                studentBodyDescription: "",
                campusAmbassador: "",
                campusAmbassadorDescription: "",
                inspiration: "",
                promotionChannels: "",
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
            // Reset errors
            Object.keys(this.errors).forEach(key => {
                (this.errors as any)[key] = "";
            });

            if (!this.form.fullName) {
                this.errors.fullName = "Full Name is required";
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
            if (!this.form.address) {
                this.errors.address = "Postal Address is required";
                isValid = false;
            }
            if (!this.form.collegeName) {
                this.errors.collegeName = "College Name is required";
                isValid = false;
            }
            if (!this.form.programOfStudy) {
                this.errors.programOfStudy = "Program of Study is required";
                isValid = false;
            }
            if (this.form.programOfStudy.includes("Other") && !this.form.programOther) {
                this.errors.programOther = "Please specify your program";
                isValid = false;
            }
            if (!this.form.semester) {
                this.errors.semester = "Year/Semester is required";
                isValid = false;
            }
            if (!this.form.studentBody) {
                this.errors.studentBody = "Please select Yes or No";
                isValid = false;
            }
            if (this.form.studentBody === "Yes" && !this.form.studentBodyDescription) {
                this.errors.studentBodyDescription = "Description is required if Yes";
                isValid = false;
            }
            if (!this.form.campusAmbassador) {
                this.errors.campusAmbassador = "Please select Yes or No";
                isValid = false;
            }
            if (this.form.campusAmbassador === "Yes" && !this.form.campusAmbassadorDescription) {
                this.errors.campusAmbassadorDescription = "Description is required if Yes";
                isValid = false;
            }
            if (!this.form.inspiration) {
                this.errors.inspiration = "Inspiration description is required";
                isValid = false;
            }
            if (this.form.promotionChannels.length === 0) {
                this.errors.promotionChannels = "Please select at least one promotion channel";
                isValid = false;
            }
            if (!this.form.consent) {
                this.errors.consent = "You must agree to the terms";
                isValid = false;
            }

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
                    college_name: this.form.collegeName,
                    program_of_study: this.form.programOfStudy,
                    program_other: this.form.programOfStudy.includes("Other") ? this.form.programOther : null,
                    semester: this.form.semester,
                    student_body_member: this.form.studentBody,
                    student_body_description: this.form.studentBody === "Yes" ? this.form.studentBodyDescription : null,
                    campus_ambassador_history: this.form.campusAmbassador,
                    campus_ambassador_description: this.form.campusAmbassador === "Yes" ? this.form.campusAmbassadorDescription : null,
                    inspiration: this.form.inspiration,
                    promotion_channels: this.form.promotionChannels,
                    student_reach: "",
                    consent: this.form.consent
                };

                try {
                    const response: any = await $fetch("/api/campus-ceo-student", {
                        method: "POST",
                        body: payload
                    });

                    if (response.success) {
                        alert("Thank you! Your Campus CEO application has been submitted.");
                        this.resetForm();
                    } else {
                        alert(response.message || "Something went wrong. Please try again.");
                    }
                } catch (error: any) {
                    console.error("Submission Error:", error);
                    alert("Message Sent! We will contact you shortly.");
                    this.resetForm();
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
                collegeName: "",
                programOfStudy: "",
                programOther: "",
                semester: "",
                studentBody: "",
                studentBodyDescription: "",
                campusAmbassador: "",
                campusAmbassadorDescription: "",
                inspiration: "",
                promotionChannels: [],
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