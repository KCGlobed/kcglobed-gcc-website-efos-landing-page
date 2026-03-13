<template>
    <div>
        <!-- <LayoutTopHeader />
        <LayoutMainNavbar /> -->
        <LayoutProfileHeader />

        <!-- <CommonInnerPageBanner pageTitle="Profile" /> -->
        <!-- Main Layout Split -->
        <div class="container pt-50 pb-100">
            <div class="row">
                <!-- Left Column (80%) -->
                <div class="col-lg-9 col-md-8">

                    <!-- Profile Header Card -->
                    <div class="pb-30">
                        <div class="profile-header-card">
                            <!-- Cover Banner -->
                            <div class="profile-cover">
                                <!-- <button class="profile-edit-btn" title="Edit Cover"> -->
                                <!-- <i class="ti ti-pencil"></i> Edit -->
                                <!-- </button> -->
                            </div>

                            <!-- Avatar (overlapping cover) -->
                            <div class="profile-avatar-wrap">
                                <div class="profile-avatar" @click="triggerImageUpload"
                                    style="cursor: pointer; position: relative;">
                                    <!-- Loading Overlay -->
                                    <div v-if="isImageUploading" class="upload-overlay">
                                        <span class="spinner-border spinner-border-sm text-white" role="status"
                                            aria-hidden="true"></span>
                                    </div>

                                    <img v-if="profileImage" :src="profileImage" alt="Profile" class="avatar-img" />
                                    <i v-else class="ti ti-user"></i>

                                    <!-- Hover Edit Icon -->
                                    <div class="edit-icon-overlay">
                                        <i class="ti ti-camera"></i>
                                    </div>

                                    <!-- Hidden File Input -->
                                    <input type="file" ref="profileImageInput" class="d-none" accept="image/*"
                                        @change="handleProfileImageUpload" />
                                </div>
                            </div>

                            <!-- Info below -->
                            <div class="profile-info">
                                <h2 class="profile-name">
                                    {{ (formData.first_name || 'Applicant') + ' ' + (formData.last_name || '') }}
                                </h2>
                                <p class="profile-detail mb-2" v-if="formData?.application_id"
                                    style="color: #7c3aed; font-weight: 600;">
                                    Application ID: {{ formData.application_id }}
                                </p>
                                <p class="profile-detail" v-if="formData.email">
                                    <i class="ti ti-mail me-1"></i> {{ formData.email }}
                                </p>
                                <p class="profile-detail" v-if="formData.mobile">
                                    <i class="ti ti-phone me-1"></i> {{ formData.mobile }}
                                </p>
                                <p class="profile-detail" v-if="formData.city">
                                    <i class="ti ti-map-pin me-1"></i> {{ formData.city }}<span v-if="formData.state">,
                                        {{
                                            formData.state }}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- 4 Accordion Sections -->
                    <div class="pb-30">
                        <div class="profile-accordion">

                            <!-- Section 1: Personal Information -->
                            <div class="accordion-section" :class="{ active: isSectionOpen(1) }">
                                <div class="accordion-header" @click="toggleSection(1)">
                                    <div class="accordion-header-left">
                                        <div style="display: flex; align-items: center; gap: 10px;">
                                            <span class="accordion-icon"><i class="ti ti-user"></i></span>
                                            <h4>Personal Information</h4>
                                            <!-- <p>Name, contact, address &amp; family details</p> -->
                                        </div>
                                    </div>
                                    <div class="accordion-header-right">
                                        <span v-if="!isProfileEmpty && !isEditingSection[1]" @click.stop="enableEdit(1)"
                                            class="edit-icon-btn me-3" title="Edit Section">
                                            <i class="ti ti-pencil fs-5 text-[#872980]"></i>
                                        </span>
                                        <i class="ti accordion-chevron"
                                            :class="isSectionOpen(1) ? 'ti-chevron-up' : 'ti-chevron-down'"></i>
                                    </div>
                                </div>
                                <div class="accordion-body p-4 p-lg-5" v-show="isSectionOpen(1)">
                                    <fieldset :disabled="!isEditingSection[1]">
                                        <PersonalInformation ref="section1Ref" :formData="formData" />
                                    </fieldset>
                                </div>
                            </div>


                            <!-- Section 2: Academic Information -->
                            <div class="accordion-section" :class="{ active: isSectionOpen(2) }">
                                <div class="accordion-header" @click="toggleSection(2)">
                                    <div class="accordion-header-left">
                                        <div style="display: flex; align-items: center; gap: 10px;">
                                            <span class="accordion-icon"><i class="ti ti-school"></i></span>
                                            <h4>Academic Information</h4>
                                        </div>
                                    </div>
                                    <div class="accordion-header-right">
                                        <span v-if="!isProfileEmpty && !isEditingSection[2]" @click.stop="enableEdit(2)"
                                            class="edit-icon-btn me-3" title="Edit Section">
                                            <i class="ti ti-pencil fs-5 text-[#872980]"></i>
                                        </span>
                                        <i class="ti accordion-chevron"
                                            :class="isSectionOpen(2) ? 'ti-chevron-up' : 'ti-chevron-down'"></i>
                                    </div>
                                </div>
                                <div class="accordion-body p-4 p-lg-5" v-show="isSectionOpen(2)">
                                    <fieldset :disabled="!isEditingSection[2]">
                                        <AcademicInformation ref="section2Ref" :formData="formData" />
                                    </fieldset>
                                </div>
                            </div>

                            <!-- Section 3: Work Experience -->
                            <div class="accordion-section" :class="{ active: isSectionOpen(3) }">
                                <div class="accordion-header" @click="toggleSection(3)">
                                    <div class="accordion-header-left">
                                        <div style="display: flex; align-items: center; gap: 10px;">
                                            <span class="accordion-icon"><i class="ti ti-briefcase"></i></span>
                                            <h4>Work Experience</h4>
                                        </div>
                                    </div>
                                    <div class="accordion-header-right">
                                        <span v-if="!isProfileEmpty && !isEditingSection[3]" @click.stop="enableEdit(3)"
                                            class="edit-icon-btn me-3" title="Edit Section">
                                            <i class="ti ti-pencil fs-5 text-[#872980]"></i>
                                        </span>
                                        <i class="ti accordion-chevron"
                                            :class="isSectionOpen(3) ? 'ti-chevron-up' : 'ti-chevron-down'"></i>
                                    </div>
                                </div>
                                <div class="accordion-body p-4 p-lg-5" v-show="isSectionOpen(3)">
                                    <fieldset :disabled="!isEditingSection[3]">
                                        <WorkExperienceDetails ref="section3Ref" :formData="formData"
                                            :isDisabled="!isEditingSection[3]" />
                                    </fieldset>
                                </div>
                            </div>


                            <!-- Section 4: Documents & Declaration -->
                            <div class="accordion-section" :class="{ active: isSectionOpen(4) }">
                                <div class="accordion-header" @click="toggleSection(4)">
                                    <div class="accordion-header-left">
                                        <div style="display: flex; align-items: center; gap: 10px;">
                                            <span class="accordion-icon"><i class="ti ti-files"></i></span>
                                            <h4>Documents</h4>
                                        </div>
                                    </div>
                                    <div class="accordion-header-right">
                                        <span v-if="!isProfileEmpty && !isEditingSection[4]" @click.stop="enableEdit(4)"
                                            class="edit-icon-btn me-3" title="Edit Section">
                                            <i class="ti ti-pencil fs-5 text-[#872980]"></i>
                                        </span>
                                        <i class="ti accordion-chevron"
                                            :class="isSectionOpen(4) ? 'ti-chevron-up' : 'ti-chevron-down'"></i>
                                    </div>
                                </div>
                                <div class="accordion-body p-4 p-lg-5" v-show="isSectionOpen(4)">
                                    <DocumentUpload ref="section4aRef" :formData="formData"
                                        :isDisabled="!isEditingSection[4]" />
                                    <!-- <div class="section-divider"></div> -->
                                    <!-- <PrePaymentDeclaration ref="section4bRef" :formData="formData" /> -->
                                </div>
                            </div>
                            <div class="p-3 bg-light rounded-3 mb-4" v-if="isAnySectionEditing">
                                <div class="form-check custom-declaration">
                                    <input class="form-check-input" type="checkbox" id="declaration"
                                        v-model="formData.declaration" />
                                    <label class="form-check-label ms-2 fw-medium text-dark" for="declaration">
                                        I declare that all the information and documents submitted by me are true to the
                                        best of my
                                        knowledge. I agree that in case any information or document found
                                        fake/forged/false
                                        submitted by me, then my candidature may cancel at any stage of course. 
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Proceed to Pay Button -->
                    <div class="pb-100" v-if="isAnySectionEditing">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="d-flex justify-content-center">
                                    <button style="background-color: #872980;"
                                        class="submit-btn default-btn d-flex align-items-center justify-content-center gap-2"
                                        @click="handleFinalSubmit" :disabled="!formData.declaration || isSubmitting"
                                        :class="{ 'opacity-50 cursor-not-allowed': !formData.declaration || isSubmitting }">
                                        <span v-if="isSubmitting" class="spinner-border spinner-border-sm" role="status"
                                            aria-hidden="true"></span>
                                        {{ isSubmitting ? 'Submitting...' : 'Submit' }} <i v-if="!isSubmitting"
                                            class="ti ti-check"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> <!-- End Proceed Button wrapper -->
                </div> <!-- End Left Column -->

                <!-- Right Column (20%) -->
                <div class="col-lg-3 col-md-4">
                    <div :title="isProfileEmpty ? 'This section will be enabled after you complete your profile.' : ''">
                        <StudentKits :isDisabled="isProfileEmpty" />
                    </div>

                    <!-- NFET Slot Booking Sidebar -->
                    <div class="nfet-slot-sidebar bg-white p-3 rounded-3 shadow-sm border mb-4">
                        <div class="d-flex justify-content-between align-items-center mb-3"
                            @click="isOpenNfet = !isOpenNfet" style="cursor: pointer; user-select: none;">
                            <h5 class="m-0 text-dark fw-bold pb-1"
                                style="border-bottom: 2px solid #7c3aed; display: inline-block; font-size: 16px;">
                                <i class="ti ti-calendar-event me-2" style="color: #7c3aed;"></i>NFET Slot Booking
                            </h5>
                            <i class="ti" :class="isOpenNfet ? 'ti-chevron-up' : 'ti-chevron-down'"
                                style="color: #475569; font-size: 18px;"></i>
                        </div>

                        <div v-show="isOpenNfet" class="nfet-slide-content" style="position: relative;">
                            <div v-if="isProfileEmpty" class="disabled-overlay"
                                title="This section will be enabled after you complete your profile."></div>
                            <div :class="{ 'opacity-50': isProfileEmpty }">
                                <div
                                    class="d-flex justify-content-between align-items-center mb-3 bg-light p-2 rounded">
                                    <button
                                        class="btn btn-sm btn-white border shadow-sm p-1 d-flex align-items-center justify-content-center"
                                        style="width: 28px; height: 28px;" @click="prevMonth"><i
                                            class="ti ti-chevron-left"></i></button>
                                    <span class="fw-bold text-dark" style="font-size: 14px;">{{ monthNames[currentMonth]
                                        }}
                                        {{ currentYear }}</span>
                                    <button
                                        class="btn btn-sm btn-white border shadow-sm p-1 d-flex align-items-center justify-content-center"
                                        style="width: 28px; height: 28px;" @click="nextMonth"><i
                                            class="ti ti-chevron-right"></i></button>
                                </div>
                                <div class="calendar-grid">
                                    <div class="calendar-day-header text-muted fw-semibold"
                                        v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day">{{ day }}
                                    </div>
                                    <div class="calendar-day" v-for="(day, idx) in calendarDays" :key="'empty-' + idx"
                                        :class="{
                                            'empty': !day,
                                            'allowed': day && day.isAllowed,
                                            'disabled': day && !day.isAllowed && !day.isBlocked,
                                            'blocked': day && day.isBlocked,
                                            'selected': day && day.dateString === selectedDate,
                                            'cursor-not-allowed': bookingDetails.updateCount >= 2 && day && day.isAllowed
                                        }"
                                        :title="day && day.isBlocked ? 'fully booked' : (bookingDetails.updateCount >= 2 ? 'Update limit reached' : '')"
                                        @click="bookingDetails.updateCount < 2 && selectDate(day)">
                                        {{ day ? day.day : '' }}
                                    </div>
                                </div>

                                <!-- Slots -->
                                <div class="slots-container" v-if="selectedDate">
                                    <h6 class="mb-2 fw-semibold text-dark" style="font-size: 14px;">Slots for {{
                                        formatDate(selectedDate) }}:</h6>
                                    <div class="d-flex flex-wrap gap-2 mb-3">
                                        <button v-for="slot in availableSlots" :key="slot.id"
                                            class="btn btn-sm flex-grow-1" :class="[
                                                selectedSlot === slot.id ? 'btn-primary text-white custom-primary-bg' : 'btn-outline-secondary',
                                            ]"
                                            @click="!slot.disabled && bookingDetails.updateCount < 2 && selectSlot(slot)"
                                            :disabled="slot.disabled || bookingDetails.updateCount >= 2"
                                            :title="bookingDetails.updateCount >= 2 ? 'Update limit reached' : (slot.disabled ? 'This slot is no longer available (48-hour restriction)' : '')"
                                            style="font-size: 12px; min-width: 45%;">
                                            {{ slot.time }}
                                        </button>
                                    </div>
                                    <div v-if="availableSlots.length === 0" class="text-muted small mb-3">No slots
                                        available.
                                    </div>

                                    <div v-if="bookingDetails.updateCount <= 1" class="d-inline-block w-100 mb-2">
                                        <button
                                            class="btn btn-primary w-100 custom-primary-bg d-flex justify-content-center align-items-center gap-2"
                                            style="pointer-events: auto;" :disabled="isBookingSlot" @click="bookSlot">
                                            <span v-if="isBookingSlot" class="spinner-border spinner-border-sm"
                                                role="status" aria-hidden="true"></span>

                                            <!-- state 1: Update Count == 0 -->
                                            <template v-if="bookingDetails.updateCount === 0">
                                                Book Slot
                                                <span class="custom-tooltip-wrapper d-inline-block ms-1" @click.stop>
                                                    <i class="ti ti-info-circle" style="font-size: 16px;"></i>
                                                    <div class="custom-tooltip-content" style="pointer-events: none;">
                                                        Slot can be changed once, at least 48 hours before the scheduled
                                                        time
                                                    </div>
                                                </span>
                                            </template>

                                            <!-- state 2: Update Count === 1 -->
                                            <template v-else-if="bookingDetails.updateCount === 1">
                                                <div class="d-flex flex-column align-items-center"
                                                    style="line-height: 1.2;">
                                                    <span>Change Slot
                                                        <span class="custom-tooltip-wrapper d-inline-block ms-1"
                                                            @click.stop>
                                                            <i class="ti ti-info-circle" style="font-size: 16px;"></i>
                                                            <div class="custom-tooltip-content"
                                                                style="pointer-events: none; bottom: 120%;">
                                                                Slot can be changed once, at least 48 hours before the
                                                                scheduled time
                                                            </div>
                                                        </span>
                                                    </span>
                                                    <small style="font-size: 0.75em;">(one time only)</small>
                                                </div>
                                            </template>
                                        </button>
                                    </div>

                                    <!-- Admit Card Button -->
                                    <button v-if="showAdmitCardButton"
                                        class="btn btn-outline-success w-100 d-flex justify-content-center align-items-center gap-2 mb-2"
                                        @click="downloadAdmitCard" :disabled="isDownloadingAdmitCard">
                                        <span v-if="isDownloadingAdmitCard" class="spinner-border spinner-border-sm"
                                            role="status" aria-hidden="true"></span>
                                        <template v-else>Generate Admit Card <i class="ti ti-download"></i></template>
                                    </button>

                                    <!-- Start Exam Button -->
                                    <a href="https://cocubes.in/gccschool-nfet" target="_blank"
                                        class="btn w-100 d-flex justify-content-center align-items-center gap-2"
                                        :class="bookingDetails.examStatus ? 'btn-primary custom-primary-bg' : 'btn-secondary disabled'"
                                        v-if="bookingDetails.isBooked">
                                        Start Exam
                                        <i class="ti ti-external-link"></i>
                                        <span class="custom-tooltip-wrapper d-inline-block ms-1" @click.stop.prevent>
                                            <i class="ti ti-info-circle" style="font-size: 16px;"></i>
                                            <div class="custom-tooltip-content"
                                                style="pointer-events: none; bottom: 120%;">
                                                {{ bookingDetails.examStatus ? 'The exam is enabled and ready to start'
                                                    : 'Exam will be enabled 1 hour before the scheduled time.' }}
                                            </div>
                                        </span>
                                    </a>
                                </div>
                                <p v-else
                                    class="text-muted small text-center py-2 px-3 bg-light rounded border border-dashed mt-3">
                                    Please select a highlighted date.
                                </p>
                            </div>
                        </div>
                    </div> <!-- End nfet-slot-sidebar -->
                </div> <!-- End Right Column -->
            </div> <!-- End Main Row -->
        </div> <!-- End Main Layout Split -->
        <!-- Slot Full / General Alert Modal -->
        <CommonAlert :show="alertState.show" :title="alertState.title" :message="alertState.message"
            :type="alertState.type" @close="alertState.show = false" />



        <!-- Confirmation Modal -->
        <div v-if="showConfirmModal" class="custom-modal-overlay">
            <div class="custom-modal p-4">
                <div class="text-center pb-4 pt-3">
                    <h5 class="mb-0 fw-bold" style="font-size: 18px; color: #333;">Are you sure you wish to change the
                        slot?
                    </h5>
                </div>
                <div class="d-flex justify-content-center gap-3 pb-2">
                    <button class="btn btn-outline-secondary fw-semibold"
                        style="font-size: 16px; min-width: 140px; border-radius: 8px; padding: 10px 24px;"
                        @click="handleConfirm(false)">No</button>
                    <button class="btn btn-primary custom-primary-bg fw-semibold"
                        style="font-size: 16px; min-width: 140px; border-radius: 8px; padding: 10px 24px;"
                        @click="handleConfirm(true)">Yes</button>
                </div>
            </div>
        </div>

        <LayoutMainFooter />
        <LayoutCopyRight />
    </div>
</template>

<!-- ✅ PROTECTED ROUTE — redirects to /login if no valid token found -->
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import PersonalInformation from "../components/PersonalInformation/PersonalInformation.vue";
import AcademicInformation from "../components/AcademicInformation/AcademicInformation.vue";
import WorkExperienceDetails from "../components/WorkExperienceDetails/WorkExperienceDetails.vue";
import DocumentUpload from "../components/DocumentUpload/DocumentUpload.vue";
import StudentKits from "../components/StudentKits/StudentKits.vue";
// import PrePaymentDeclaration from "../components/PrePaymentDeclaration/PrePaymentDeclaration.vue";
import { staticSlots, allowedDates, blockedDates } from "../utils/constants";

// Layer 1: Middleware for Nuxt navigation
definePageMeta({
    middleware: ['auth']
})

useHead({
    title: "My Application Profile",
    meta: [
        {
            name: "description",
            content: "View and update your GCC application profile — personal, academic, work experience and documents."
        }
    ]
});

// Read the authenticated user's ID from the auth composable (set at login)
const { userId, init: initAuth } = useAuth()
const config = useRuntimeConfig();

// Start Global Scope 

// Hydrate auth state (reads from localStorage) on mount
const profileImage = ref<string | null>(null);

const isProfileEmpty = ref(false);

const bookingDetails = reactive({
    isBooked: false,
    date: "",
    time: "",
    admitCardUrl: "" as string | null,
    updateCount: 0,
    examStatus: false
});

const showAdmitCardButton = ref(false);

const fetchStudentDetail = async () => {
    if (!userId.value) return;

    try {
        const { getAccessToken } = useAuth();
        const token = getAccessToken();
        const response: any = await $fetch(`${config.public.apiBase}/api/students/get-student-profile/`, {
            headers: token ? { 'Authorization': `Bearer ${token}` } : {}
        });

        console.log("Profile Data Check:", response);

        // If returned payload is explicitly an empty array or missing data
        if (!response?.data || (Array.isArray(response.data) && response.data.length === 0)) {
            isProfileEmpty.value = true;
            isEditingSection[1] = true;
            isEditingSection[2] = true;
            isEditingSection[3] = true;
            isEditingSection[4] = true;
            console.warn("Profile is detected as EMPTY. Disabling sections.");
        } else {
            isProfileEmpty.value = false;
            isEditingSection[1] = false;
            isEditingSection[2] = false;
            isEditingSection[3] = false;
            isEditingSection[4] = false;
        }

        if (response?.data && !Array.isArray(response.data)) {
            const d = response.data;

            // Name splitting logic
            formData.first_name = d.first_name || "";
            formData.last_name = d.last_name || "";

            formData.email = d.email || "";
            formData.mobile = d.phone || d.phone1 || "";
            formData.city = d.city || "";
            formData.state = d.state || "";
            formData.pin_code = d.pincode || "";
            formData.dob = d.date_of_birth || d.dob || "";
            formData.nationality = d.nationality || "Indian";
            formData.complete_address = d.address || "";

            // Mappings for Choices
            const genderReverseMap: Record<number, string> = { 1: "Male", 2: "Female", 3: "Other" };
            formData.gender = genderReverseMap[d.gender] || "";

            formData.class10_year = d.tenth_passing_year || "";
            formData.class10_score = d.tenth_passing_percentage || "";
            const mediumReverseMap: Record<number, string> = { 1: "English", 2: "Hindi", 3: "Other" };
            formData.class10_type = d.tenth_score_type || "Percentage";
            formData.class10_medium = mediumReverseMap[d.tenth_medium] || "English";

            formData.class12_year = d.twelveth_passing_year || "";
            formData.class12_score = d.twelveth_passing_percentage || "";
            formData.class12_type = d.twelveth_score_type || "Percentage";
            formData.class12_medium = mediumReverseMap[d.twelveth_medium] || "English";

            const pgStatusReverseMap: Record<number, string> = { 1: "1", 2: "2" };
            formData.ug_status = pgStatusReverseMap[d.pg_status] || "1";
            formData.ug_cgpa = d.pg_percentage || "";
            formData.ug_type = d.ug_score_type || "CGPA";
            formData.ug_medium = mediumReverseMap[d.medium_instruction] || "English";
            formData.ug_institution = d.institution || "";

            const higherEdReverseMap: Record<number, string> = { 1: "Yes", 2: "No" };
            formData.pg_exists = higherEdReverseMap[d.higher_education_status] || "No";
            formData.pg_type = d.higher_qualification || "";
            formData.pg_institution = d.higher_qualification_institution || "";

            const employementReverseMap: Record<number, string> = { 1: "Fresher", 2: "Experienced" };
            formData.employment_status = employementReverseMap[d.employement_status] || "Fresher";

            // Work Experience
            const expData = d.user_experience || d.student_experience;
            if (expData && Array.isArray(expData) && expData.length > 0) {
                formData.employment_status = "Experienced";
                formData.work_experience = expData.map((job: any) => ({
                    org_name: job.company_name,
                    designation: job.position,
                    functional_area: job.area || "",
                    from: job.start_date,
                    to: job.end_date
                }));
            }

            formData.father_name = d.contact_name || "";
            formData.father_mobile = d.contact_phone || "";

            formData.existingDocuments = {
                aadhaar: d.aadhaar || null,
                dob_proof: d.dob_certificate || null,
                photo: d.photo || null, // Fetch proper document photo
                signature: d.signature || null // Fetch proper signature document
            };

            // Booking Details check
            if (d.slot_date && d.slot_time) {
                bookingDetails.isBooked = true;
                bookingDetails.date = d.slot_date;
                bookingDetails.time = d.slot_time;
                bookingDetails.updateCount = d.slot_update_count || 0;
                selectedDate.value = d.slot_date;

                availableSlots.value = staticSlots.map((timeStr: string, index: number) => ({
                    id: index + 1,
                    time: timeStr
                }));

                const matchingSlot = staticSlots.find(s => s === d.slot_time);
                if (matchingSlot) {
                    selectedSlot.value = staticSlots.indexOf(matchingSlot) + 1;
                }

                // Always show admit card button if slot is already booked
                showAdmitCardButton.value = true;
            }

            // Map exam_status from backend
            bookingDetails.examStatus = d.exam_status === true || d.exam_status === "true" || d.exam_status === 1;
        }

        // Fetch image specifically from the detail API as requested and fill fallback profile data
        try {
            const detailRes: any = await $fetch(`${config.public.apiBase}/api/users/view-student-detail/${userId.value}`, {
                headers: token ? { 'Authorization': `Bearer ${token}` } : {}
            });
            if (detailRes.success && detailRes.data) {
                profileImage.value = detailRes.data.image || detailRes.data.photo || profileImage.value;

                // Fallback for empty core fields
                if (!formData.first_name) {
                    const fullName = detailRes.data.first_name || "";
                    if (fullName.includes(" ")) {
                        const nameParts = fullName.trim().split(/\s+/);
                        formData.first_name = nameParts[0];
                        if (!formData.last_name) {
                            formData.last_name = nameParts.slice(1).join(" ");
                        }
                    } else {
                        formData.first_name = fullName;
                    }
                }
                if (!formData.last_name && !formData.first_name.includes(" ")) {
                    formData.last_name = detailRes.data.last_name || "";
                }
                if (!formData.email) formData.email = detailRes.data.email || "";
                if (!formData.mobile) formData.mobile = detailRes.data.phone1 || detailRes.data.phone2 || detailRes.data.phone || "";
                if (!formData.city) formData.city = detailRes.data.city || "";
                if (!formData.state) formData.state = detailRes.data.state || "";
                if (!formData.application_id) formData.application_id = detailRes.data.application_id || detailRes.data.student_id || "";
            }
        } catch (detailErr) {
            console.error("Error fetching detail API data:", detailErr);
        }

    } catch (err) {
        console.error("Error fetching student details:", err);
    }
};

const stateNameMap = ref<Record<string, string>>({});

onMounted(async () => {
    initAuth()

    // Fetch states to map iso2 code to full name for display
    try {
        const headers = new Headers();
        headers.append("X-CSCAPI-KEY", "Q3k5SXFtVjNubXRBZjdKRFJ1QVJLQkZqQ3lYT2JNVUhVZmhOYm5ESw==");
        const res = await fetch("https://api.countrystatecity.in/v1/countries/IN/states", {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        });
        const statesData = await res.json();
        const map: Record<string, string> = {};
        statesData.forEach((s: any) => {
            map[s.iso2] = s.name;
        });
        stateNameMap.value = map;
    } catch (e) {
        console.error("Failed to load states for mapping", e);
    }

    if (userId.value) {
        await fetchStudentDetail()
    }
})

// track which sections are currently expanded; start with the first one open
const openSections = ref<Set<number>>(new Set([1]));
// helper for template checks
const isSectionOpen = (idx: number) => openSections.value.has(idx);
const isOpenNfet = ref(true);

const isEditingSection = reactive<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false
});

const isAnySectionEditing = computed(() => {
    return isEditingSection[1] || isEditingSection[2] || isEditingSection[3] || isEditingSection[4];
});

const enableEdit = (sectionIndex: number) => {
    isEditingSection[sectionIndex] = true;
    openSections.value.add(sectionIndex);
};

// --- Calendar & Slots Logic ---
const currentDateObj = ref(new Date());
const currentMonth = computed(() => currentDateObj.value.getMonth());
const currentYear = computed(() => currentDateObj.value.getFullYear());

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const prevMonth = () => {
    currentDateObj.value = new Date(currentYear.value, currentMonth.value - 1, 1);
};
const nextMonth = () => {
    currentDateObj.value = new Date(currentYear.value, currentMonth.value + 1, 1);
};

// Hardcode allowed dates extracted to constants

const daysInMonth = computed(() => {
    return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
});
const firstDayOfMonth = computed(() => {
    return new Date(currentYear.value, currentMonth.value, 1).getDay();
});

const isSlotValid = (dateStr: string, timeStr: string) => {
    try {
        const startTimeStr = timeStr.split('-')[0].trim();
        const match = startTimeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
        if (match) {
            let hourVal = parseInt(match[1], 10);
            const minVal = parseInt(match[2], 10);
            const ampm = match[3];

            if (ampm.toUpperCase() === 'PM' && hourVal < 12) hourVal += 12;
            if (ampm.toUpperCase() === 'AM' && hourVal === 12) hourVal = 0;

            const [year, month, day] = dateStr.split('-');
            const slotDateTime = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), hourVal, minVal, 0);

            const now = new Date();
            const diffHours = (slotDateTime.getTime() - now.getTime()) / (1000 * 60 * 60);

            const bufferHours = Number(config.public.nfetSlotBufferHours) || 48;
            return diffHours >= bufferHours;
        }
    } catch (err) {
        console.error("Error validating slot time", err);
    }
    return false;
};

const calendarDays = computed(() => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth.value; i++) {
        days.push(null); // empty slots padding for the first week
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    for (let i = 1; i <= daysInMonth.value; i++) {
        const dateString = `${currentYear.value}-${String(currentMonth.value + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

        // Allowed only if it's in the allowedDates list AND is today or in the future
        // AND at least one slot is valid (>= 48 hours)
        const isAllowed = allowedDates.includes(dateString) &&
            dateString >= todayStr &&
            staticSlots.some((timeStr: string) => isSlotValid(dateString, timeStr));

        const isBlocked = blockedDates.includes(dateString);

        days.push({
            day: i,
            dateString,
            isAllowed: isAllowed && !isBlocked,
            isBlocked
        });
    }
    return days;
});

const selectedDate = ref('');
const selectedSlot = ref<number | string>('');
const availableSlots = ref<any[]>([]);

const selectDate = (day: any) => {
    if (!day) return;
    if (day.isBlocked) {
        showAlert("This slot is fully booked", "Please select another available date.", "error");
        return;
    }
    if (!day.isAllowed) return;
    selectedDate.value = day.dateString;
    selectedSlot.value = ''; // reset slot on date change

    availableSlots.value = staticSlots.map((timeStr: string, index: number) => ({
        id: index + 1,
        time: timeStr,
        disabled: !isSlotValid(day.dateString, timeStr)
    }));
};

const selectSlot = (slot: any) => {
    selectedSlot.value = slot.id;
};

const showConfirmModal = ref(false);
const resolveConfirm = ref<((value: boolean) => void) | null>(null);

const alertState = reactive({
    show: false,
    title: '',
    message: '',
    type: 'error'
});

const showAlert = (title: string, message: string, type: string = 'error') => {
    alertState.title = title;
    alertState.message = message;
    alertState.type = type;
    alertState.show = true;
};

const confirmSlotChange = () => {
    return new Promise<boolean>((resolve) => {
        showConfirmModal.value = true;
        resolveConfirm.value = resolve;
    });
};

const handleConfirm = (confirmed: boolean) => {
    showConfirmModal.value = false;
    if (resolveConfirm.value) {
        resolveConfirm.value(confirmed);
        resolveConfirm.value = null;
    }
};

const isBookingSlot = ref(false);

const bookSlot = async () => {
    if (!selectedDate.value || !selectedSlot.value) return;

    const slotObj = availableSlots.value.find((s: any) => s.id === selectedSlot.value);
    if (!slotObj) return;

    // Time difference check
    try {
        const slotDateStr = selectedDate.value;
        const slotTimeStr = String(slotObj.time);
        const startTimeStr = slotTimeStr.split('-')[0].trim();
        const match = startTimeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);

        if (match) {
            let hourVal = parseInt(match[1], 10);
            const minVal = parseInt(match[2], 10);
            const ampm = match[3];

            if (ampm.toUpperCase() === 'PM' && hourVal < 12) hourVal += 12;
            if (ampm.toUpperCase() === 'AM' && hourVal === 12) hourVal = 0;

            const [year, month, day] = slotDateStr.split('-');
            const slotDateTime = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), hourVal, minVal, 0);

            const now = new Date();
            const diffHours = (slotDateTime.getTime() - now.getTime()) / (1000 * 60 * 60);

            const bufferHours = Number(config.public.nfetSlotBufferHours) || 48;

            if (diffHours < bufferHours) {
                showAlert("", `Slots can only be booked or changed at least ${bufferHours} hours before the scheduled time.`, "warning");
                return;
            }
        }
    } catch (err) {
        console.error("Error calculating time difference", err);
    }

    // New validation: Check if user is trying to book the very same slot they already have
    if (bookingDetails.isBooked && bookingDetails.date === selectedDate.value && bookingDetails.time === String(slotObj.time)) {
        showAlert("Same Slot Selected", "You’ve selected the same slot that you already booked. Please choose a different slot to update.", "info");
        return;
    }

    if (bookingDetails.isBooked) {
        const confirmed = await confirmSlotChange();
        if (!confirmed) return;
    }

    isBookingSlot.value = true;
    try {
        const { getAccessToken } = useAuth();
        const token = getAccessToken();

        const payload = {
            slot_date: selectedDate.value,
            slot_time: String(slotObj.time)
        };

        // Note: Using a standard fetch for easier blob handling
        const response = await fetch(`${config.public.apiBase}/api/students/student-slot-upload/`, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { 'Authorization': `Bearer ${token}` } : {})
            }
        });
        console.log(response, '-------------response-------')
        if (response.ok) {
            const result = await response.json();
            const reportUrl = result.data?.report_url;

            bookingDetails.isBooked = true;
            bookingDetails.date = payload.slot_date;
            bookingDetails.time = payload.slot_time;
            bookingDetails.admitCardUrl = reportUrl;
            showAdmitCardButton.value = true;

            showAlert("Success", "Slot booked successfully! You can now download your admit card.", "success");
        } else {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || "Failed to book slot");
        }
    } catch (err: any) {
        console.error("Failed to book slot:", err);
        showAlert("Booking Failed", err.message || "Failed to book slot. Please try again.", "error");
    } finally {
        isBookingSlot.value = false;
        await fetchStudentDetail();
    }
};

const isDownloadingAdmitCard = ref(false);

const downloadAdmitCard = async () => {
    isDownloadingAdmitCard.value = true;
    try {
        const { getAccessToken } = useAuth();
        const token = getAccessToken();
        const response = await fetch(`${config.public.apiBase}/api/students/student-admit-card-download/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { 'Authorization': `Bearer ${token}` } : {})
            }
        });

        if (response.ok) {
            const result = await response.json();
            const reportUrl = result.data?.report_url || result.report_url;
            if (reportUrl) {
                // If it's a blob URL, download it, else open the external URL
                if (reportUrl.startsWith('blob:') || reportUrl.includes('fslfdlfj')) {
                    const link = document.createElement('a');
                    link.href = reportUrl;
                    link.setAttribute('download', `NFET_Admit_Card_${bookingDetails.date}.pdf`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    // It's a standard URL, open in new tab
                    window.open(reportUrl, '_blank');
                }
            } else {
                showAlert("Error", "No admit card URL found in the response.", "error");
            }
        } else {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || "Failed to download admit card");
        }
    } catch (err: any) {
        console.error("Failed to download admit card:", err);
        showAlert("Download Failed", err.message || "Failed to download admit card. Please try again.", "error");
    } finally {
        isDownloadingAdmitCard.value = false;
    }
};

const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

const formData = reactive({
    first_name: "",
    last_name: "",
    application_id: "",
    father_name: "",
    father_mobile: "",
    dob: "",
    gender: "",
    nationality: "Indian",
    email: "",
    mobile: "",
    city: "",
    state: "",
    pin_code: "",
    complete_address: "",
    class10_year: "",
    class10_type: "Percentage",
    class10_score: "",
    class10_medium: "English",
    class10_medium_other: "",
    class12_year: "",
    class12_type: "Percentage",
    class12_score: "",
    class12_medium: "English",
    class12_medium_other: "",
    medium: "",
    medium_other: "",
    ug_status: "1",
    ug_type: "CGPA",
    ug_cgpa: "",
    ug_medium: "English",
    ug_medium_other: "",
    ug_institution: "",
    pg_exists: "",
    pg_type: "",
    pg_other: "",
    pg_institution: "",
    employment_status: "Fresher",
    work_experience: [] as any[],
    documents: {
        aadhaar: null,
        dob_proof: null,
        photo: null,
        signature: null
    } as Record<string, any>,
    existingDocuments: {
        aadhaar: null,
        dob_proof: null,
        photo: null,
        signature: null
    } as Record<string, string | null>,
    declaration: false
});

const isSubmitting = ref(false);
const isImageUploading = ref(false);

const profileImageInput = ref<HTMLInputElement | null>(null);

const triggerImageUpload = () => {
    if (profileImageInput.value) {
        profileImageInput.value.click();
    }
};

const handleProfileImageUpload = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file || !userId.value) return;

    isImageUploading.value = true;
    try {
        const { getAccessToken } = useAuth();
        const token = getAccessToken();

        const imgData = new FormData();
        imgData.append('image', file);

        const res: any = await $fetch(`${config.public.apiBase}/api/users/student-profile-upload/${userId.value}`, {
            method: "POST",
            body: imgData,
            headers: token ? { 'Authorization': `Bearer ${token}` } : {}
        });

        if (res) {
            // Update the UI immediately
            profileImage.value = URL.createObjectURL(file);
            showAlert("Success", "Profile image updated successfully!", "success");
        }
    } catch (err) {
        console.error("Failed to upload profile image:", err);
        showAlert("Upload Failed", "Failed to upload profile image.", "error");
    } finally {
        isImageUploading.value = false;
        // Reset input to allow uploading the same file again if needed
        if (target) target.value = '';
    }
};

const section1Ref = ref<any>(null);
const section2Ref = ref<any>(null);
const section3Ref = ref<any>(null);
const section4aRef = ref<any>(null);
const section4bRef = ref<any>(null);

const toggleSection = (index: number) => {
    // expand or collapse only the clicked section without closing others
    if (openSections.value.has(index)) {
        openSections.value.delete(index);
    } else {
        openSections.value.add(index);
    }
};

const handleFinalSubmit = async () => {
    // Validate all sections before submission
    if (section1Ref.value?.validate && !section1Ref.value.validate()) {
        openSections.value.add(1);
        section1Ref.value?.scrollToFirstError?.();
        return;
    }
    if (section2Ref.value?.validate && !section2Ref.value.validate()) {
        openSections.value.add(2);
        section2Ref.value?.scrollToFirstError?.();
        return;
    }
    if (section3Ref.value?.validate && !section3Ref.value.validate()) {
        openSections.value.add(3);
        section3Ref.value?.scrollToFirstError?.();
        return;
    }
    if (section4aRef.value?.validate && !section4aRef.value.validate()) {
        openSections.value.add(4);
        section4aRef.value?.scrollToFirstError?.();
        return;
    }

    if (!formData.declaration) {
        showAlert("Declaration Required", "Please check the declaration before submitting.", "warning");
        return;
    }

    isSubmitting.value = true;

    try {
        const data = new FormData();

        // 1. Core Profile Info
        data.append('user', String(userId.value || ""));
        data.append('first_name', formData.first_name);
        data.append('last_name', formData.last_name);
        data.append('email', formData.email);
        data.append('phone', formData.mobile);
        data.append('state', formData.state);
        data.append('city', formData.city);
        data.append('contact_name', formData.father_name);
        data.append('contact_phone', formData.father_mobile);
        data.append('date_of_birth', formData.dob);
        data.append('nationality', formData.nationality);
        data.append('pincode', formData.pin_code);
        data.append('address', formData.complete_address);

        // 2. Exact Integer Mappings
        const genderMap: any = { "Male": 1, "Female": 2, "Other": 3 };
        data.append('gender', genderMap[formData.gender] || 1);

        const mediumMap: any = { "English": 1, "Hindi": 2, "Other": 3 };
        data.append('tenth_passing_year', formData.class10_year || "");
        data.append('tenth_passing_percentage', formData.class10_score || "");
        data.append('tenth_score_type', formData.class10_type);
        data.append('tenth_medium', mediumMap[formData.class10_medium] || 1);

        data.append('twelveth_passing_year', formData.class12_year || "");
        data.append('twelveth_passing_percentage', formData.class12_score || "");
        data.append('twelveth_score_type', formData.class12_type);
        data.append('twelveth_medium', mediumMap[formData.class12_medium] || 1);

        data.append('medium_instruction', mediumMap[formData.ug_medium] || 1);
        data.append('other_instruction', formData.medium_other || "");

        const pgStatusMap: any = { "1": 1, "2": 2 };
        data.append('pg_status', pgStatusMap[formData.ug_status] || 1);
        data.append('pg_percentage', formData.ug_cgpa || "");
        data.append('ug_score_type', formData.ug_type);
        data.append('institution', formData.ug_institution || "");

        const higherEdMap: any = { "Yes": 1, "No": 2 };
        data.append('higher_education_status', higherEdMap[formData.pg_exists] || 2);
        data.append('higher_qualification', formData.pg_type === 'Other' ? formData.pg_other : formData.pg_type);
        data.append('higher_qualification_institution', formData.pg_institution || "");

        const employementMap: any = { "Fresher": 1, "Experienced": 2 };
        data.append('employement_status', employementMap[formData.employment_status] || 1);

        // 3. Work Experience (JSON stringified within FormData)
        let experienceData: any[] = [];
        if (formData.employment_status !== "Fresher") {
            experienceData = formData.work_experience
                .filter(job => job.org_name && job.org_name.trim())
                .map(job => ({
                    company_name: job.org_name,
                    position: job.designation,
                    area: job.functional_area || "",
                    start_date: job.from,
                    end_date: job.to || null
                }));
        }
        data.append('user_experience', JSON.stringify(experienceData));

        // 4. Documents (BINARY FILES)
        if (formData.documents.aadhaar instanceof File) {
            data.append('aadhaar', formData.documents.aadhaar);
        }
        if (formData.documents.dob_proof instanceof File) {
            data.append('dob_certificate', formData.documents.dob_proof);
        }
        if (formData.documents.photo instanceof File) {
            data.append('photo', formData.documents.photo);
        }
        if (formData.documents.signature instanceof File) {
            data.append('signature', formData.documents.signature);
        }

        const { getAccessToken } = useAuth();
        const token = getAccessToken();

        console.log("--- FINAL PAYLOAD SENT TO BACKEND (BINARY FormData) ---");
        for (const [key, value] of (data as any).entries()) {
            if (value instanceof File) {
                console.log(`${key}: [File] ${value.name} (${value.size} bytes)`);
            } else {
                console.log(`${key}: ${value}`);
            }
        }

        const response: any = await $fetch(`${config.public.apiBase}/api/students/create-update-student-profile/`, {
            method: "POST",
            body: data,
            headers: token ? { 'Authorization': `Bearer ${token}` } : {}
        });

        if (response.success || response.status === "200" || response.status === 200 || response.message === "Message sent Successfully" || response.message?.toLowerCase().includes("success")) {
            showAlert("Success", "Profile updated successfully!", "success");
            // Refresh details to reflect any new image
            await fetchStudentDetail();
        } else {
            console.error("Backend Error Response:", response);
            showAlert("Failed to update profile", response.message || "Unknown error", "error");
        }
    } catch (err: any) {
        console.error("Submission error details:", err);
        let errMsg = "An error occurred during submission.";
        if (err.data) {
            if (typeof err.data === 'object') {
                const firstKey = Object.keys(err.data)[0];
                if (Array.isArray(err.data[firstKey])) {
                    errMsg = `${firstKey}: ${err.data[firstKey][0]}`;
                } else {
                    errMsg = err.data.message || JSON.stringify(err.data);
                }
            } else {
                errMsg = err.data;
            }
        }
        showAlert("Submission Failed", errMsg, "error");
    } finally {
        isSubmitting.value = false;
    }
}

// const handleFinalSubmit = async () => {
//     if (section4bRef.value?.validate) {
//         const isValid = section4bRef.value.validate();
//         if (!isValid) {
//             openSections.value.add(4);  // previous behavior (kept for reference)
//             return;
//         }
//     }

//     try {
//         const res: any = await $fetch("/api/start-payment", {
//             method: "POST",
//             body: {
//                 user_id: userId.value,
//                 name: formData.first_name + " " + formData.last_name,
//                 email: formData.email,
//                 mobile: formData.mobile
//             }
//         });

//         const loaded = await loadRazorpayScript();
//         if (!loaded || !(window as any).Razorpay) {
//             alert("Razorpay SDK failed to load");
//             return;
//         }

//         const options = {
//             key: res.razorpay_key,
//             amount: res.amount,
//             currency: res.currency,
//             name: "Application Fee",
//             description: "NFET Application Payment",
//             order_id: res.razorpay_order_id,

//             handler: async function (response: any) {
//                 await $fetch("/api/complete-payment", {
//                     method: "POST",
//                     body: {
//                         razorpay_payment_id: response.razorpay_payment_id,
//                         razorpay_order_id: response.razorpay_order_id,
//                         razorpay_signature: response.razorpay_signature
//                     }
//                 });
//                 alert("Payment Successful!");
//             },

//             prefill: {
//                 name: formData.first_name + " " + formData.last_name,
//                 email: formData.email,
//                 contact: formData.mobile
//             },

//             theme: {
//                 color: "#FBB03B"
//             }
//         };

//         const rzp = new (window as any).Razorpay(options);
//         rzp.on("payment.failed", async (response: any) => {
//             console.error("Payment Failed:", response.error);
//             try {
//                 await $fetch("/api/report-payment-failure", {
//                     method: "POST",
//                     body: {
//                         razorpay_order_id: res.razorpay_order_id,
//                         razorpay_payment_id: response.error.metadata?.payment_id,
//                         error_details: response.error
//                     }
//                 });
//             } catch (reportError) {
//                 console.error("Failed to report payment failure:", reportError);
//             }
//             alert(`Payment Failed: ${response.error.description || "Unknown error"}`);
//         });

//         rzp.open();

//     } catch (err) {
//         console.error(err);
//         alert("Payment initiation failed");
//     }
// };
</script>

<style scoped>
/* ─── Profile Header Card ─────────────────────────────────── */
.profile-header-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 20px rgba(108, 60, 220, 0.08);
    border: 1px solid rgba(108, 60, 220, 0.08);
    overflow: hidden;
}

/* Cover banner */
.profile-cover {
    width: 100%;
    height: 160px;
    z-index: 0;
    background: linear-gradient(135deg, #6d28d9 0%, #a78bfa 50%, #c4b5fd 100%);
    position: relative;
}

.profile-edit-btn {
    position: absolute;
    top: 12px;
    right: 16px;
    background: rgba(255, 255, 255, 0.85);
    border: none;
    border-radius: 8px;
    padding: 5px 12px;
    font-size: 13px;
    font-weight: 600;
    color: #7c3aed;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    backdrop-filter: blur(4px);
    transition: background 0.2s;
}

.profile-edit-btn:hover {
    background: #fff;
}

/* Avatar circle overlapping cover */
.profile-avatar-wrap {
    padding: 0 32px;
    margin-top: -48px;
    position: relative;
    z-index: 999;
}

.profile-avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
    border: 4px solid #fff;
    box-shadow: 0 2px 12px rgba(124, 58, 237, 0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.profile-avatar i {
    font-size: 48px;
    color: #fff;
}

.avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.edit-icon-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 4px;
    opacity: 0;
    transition: opacity 0.2s;
}

.edit-icon-overlay i {
    font-size: 16px;
    color: white;
}

.profile-avatar:hover .edit-icon-overlay {
    opacity: 1;
}

.upload-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
}

/* Info block */
.profile-info {
    padding: 12px 32px 28px;
}

.profile-name {
    font-size: 22px;
    font-weight: 700;
    color: #1e1b4b;
    margin-bottom: 4px;
}

.profile-detail {
    font-size: 14px;
    color: #64748b;
    margin-bottom: 2px;
}

/* ─── Accordion ───────────────────────────────────────────── */
.profile-accordion {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.accordion-section {
    background: #fff;
    border-radius: 14px;
    border: 1.5px solid #e8e0f8;
    overflow: hidden;
    transition: box-shadow 0.25s ease;
}

.accordion-section.active {
    border-color: #7c3aed;
    box-shadow: 0 4px 24px rgba(124, 58, 237, 0.10);
}

.accordion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s;
}

.accordion-header:hover {
    background: #faf7ff;
}

.accordion-header-left h4 {
    /* display: flex;
    align-items: center;
    gap: 16px; */
    font-size: 20px;
}

.accordion-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.accordion-icon i {
    font-size: 22px;
    color: #7c3aed;
}

.accordion-header-left h5 {
    font-size: 16px;
    font-weight: 700;
    color: #1e1b4b;
    margin-bottom: 2px;
}

.accordion-header-left p {
    font-size: 13px;
    color: #94a3b8;
    margin: 0;
}

.accordion-header-right {
    display: flex;
    align-items: center;
    gap: 12px;
}

.accordion-body {
    border-top: 1px solid #f0ebff;
}

.section-divider {
    height: 1px;
    background: #f0ebff;
    margin: 0 24px;
}

.submit-btn {
    width: 500px;
}


/* Custom Tooltip styling */
.custom-tooltip-wrapper {
    position: relative;
    cursor: not-allowed;
}

.custom-tooltip-content {
    visibility: hidden;
    opacity: 0;
    width: 260px;
    background-color: #a06d9c;
    /* background-color: #872980; */
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 12px;
    position: absolute;
    z-index: 1060;
    bottom: 120%;
    left: 50%;
    margin-left: -130px;
    font-size: 13px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: opacity 0.3s, visibility 0.3s;
    pointer-events: none;
}

.custom-tooltip-content::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
}

.custom-tooltip-wrapper:hover .custom-tooltip-content {
    visibility: visible;
    opacity: 1;
}

.custom-declaration .form-check-input:checked {
    background-color: #872980;
    border-color: #872980;
}

.custom-declaration .form-check-input {
    cursor: pointer;
    width: 1.25em;
    height: 1.25em;
}

.custom-declaration .form-check-label {
    cursor: pointer;
    user-select: none;
}

.cursor-not-allowed {
    cursor: not-allowed !important;
}

.edit-icon-btn {
    cursor: pointer;
    padding: 6px;
    border-radius: 6px;
    transition: background 0.2s, transform 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    border: 1px solid #e9ecef;
}

.edit-icon-btn:hover {
    background: #e0e7ff;
    border-color: #c7d2fe;
    transform: translateY(-1px);
}

.edit-icon-btn:active {
    transform: translateY(0);
}



.kit-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.15) !important;
    border-color: #7c3aed !important;
}

/* ─── Calendar Styling ────────────────────────────────────── */
.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    text-align: center;
}

.calendar-day-header {
    font-size: 11px;
    text-transform: uppercase;
    padding-bottom: 4px;
}

.calendar-day {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    border-radius: 6px;
    cursor: default;
    color: #94a3b8;
    background: transparent;
}

.calendar-day.empty {
    background: transparent;
}

.calendar-day.disabled {
    opacity: 0.5;
    background: #f8fafc;
}

.calendar-day.blocked {
    background: #fee2e2;
    color: #ef4444;
    cursor: pointer;
    font-weight: 600;
}

.calendar-day.allowed {
    background: #ede9fe;
    color: #7c3aed;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.calendar-day.allowed:hover {
    background: #ddd6fe;
}

.calendar-day.selected {
    background: #872980;
    color: #fff;
    box-shadow: 0 2px 8px rgba(135, 41, 128, 0.3);
}

.custom-primary-bg {
    background-color: #872980 !important;
    border-color: #872980 !important;
}

.custom-primary-bg:hover {
    background-color: #6d1e67 !important;
    border-color: #6d1e67 !important;
}

.border-dashed {
    border-style: dashed !important;
}

.disabled-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    cursor: not-allowed;
    background: rgba(255, 255, 255, 0);
    /* Ensure it's a solid block for clicks */
}

/* Custom Modal Styles */
.custom-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
}

.custom-modal {
    background: #fff;
    border-radius: 12px;
    width: 90%;
    max-width: 450px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    animation: modalFadeIn 0.3s ease;
}

.custom-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #f0f0f0;
    background: #fafafa;
}

.custom-modal-body {
    padding: 24px 20px;
    font-size: 16px;
    color: #333;
}

.custom-modal-footer {
    padding: 16px 20px;
    border-top: 1px solid #f0f0f0;
    background: #fafafa;
}

@keyframes modalFadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
