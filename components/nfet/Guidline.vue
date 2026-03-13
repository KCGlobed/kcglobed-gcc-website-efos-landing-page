<template>
    <div class="guidelines-wrapper">
        <!-- Original Section (Untouched) -->
        <section class="guidelines-section py-5">
            <div class="container">
                <!-- Heading -->
                <div class="text-center mb-4">
                    <h2 class="fw-bold">Application & Examination Guidelines</h2>
                    <p class="text-muted small">
                        Everything you need to know before applying
                    </p>
                </div>

                <!-- Card -->
                <div class="card border-0 shadow-lg main-card mx-auto">
                    <div class="card-body p-4 p-md-5">

                        <p class="small text-muted mb-4">
                            <strong>(An Assessment Powered by Aon)</strong><br />
                            NFET is conducted on a secure AI-enabled platform with live human supervision
                            to ensure a fair and transparent assessment for B.Com First Division graduates.
                        </p>

                        <!-- Accordion -->
                        <div class="accordion-wrapper">

                            <!-- Eligibility -->
                            <div class="accordion-item" :class="{ open: openIndex === 0 }">
                                <button class="accordion-header" @click="toggle(0)">
                                    <span class="header-left">
                                        <span class="icon-circle purple-bg">●</span>
                                        <span class="header-title purple">Eligibility</span>
                                    </span>
                                    <span class="chevron" :class="{ rotated: openIndex === 0 }">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>
                                <div class="accordion-body">
                                    <ul class="list-style">
                                        <li>B.Com graduates with <strong>First Division.</strong></li>
                                        <li>Indian Citizen</li>
                                        <li>Born after Jan 1, 1996</li>
                                        <li><strong>Valid photo ID required.</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Registration Process -->
                            <div class="accordion-item" :class="{ open: openIndex === 1 }">
                                <button class="accordion-header" @click="toggle(1)">
                                    <span class="header-left">
                                        <span class="icon-circle purple-bg">●</span>
                                        <span class="header-title purple">Registration Process</span>
                                    </span>
                                    <span class="chevron" :class="{ rotated: openIndex === 1 }">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>
                                <div class="accordion-body">
                                    <ul class="list-style">
                                        <li>Fill the online application form.</li>
                                        <li>Select your preferred exam date & time.</li>
                                        <li>
                                            Registration is confirmed after
                                            <strong>successful fee payment.</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Exam Mode -->
                            <div class="accordion-item" :class="{ open: openIndex === 2 }">
                                <button class="accordion-header" @click="toggle(2)">
                                    <span class="header-left">
                                        <span class="icon-circle purple-bg">●</span>
                                        <span class="header-title purple">Exam Mode (AI Proctored)</span>
                                    </span>
                                    <span class="chevron" :class="{ rotated: openIndex === 2 }">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>
                                <div class="accordion-body">
                                    <ul class="list-style">
                                        <li>
                                            Exam is conducted online with
                                            <strong>AI monitoring + live supervision.</strong>
                                        </li>
                                        <li>
                                            Use a <strong>laptop/desktop with webcam & microphone</strong>
                                            (mobile not allowed).
                                        </li>
                                        <li>Stable internet connection required.</li>
                                        <li>Sit in a quiet, well-lit room alone.</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Subjects Covered -->
                            <div class="accordion-item" :class="{ open: openIndex === 3 }">
                                <button class="accordion-header" @click="toggle(3)">
                                    <span class="header-left">
                                        <span class="icon-circle purple-bg">●</span>
                                        <span class="header-title purple">Subjects Covered</span>
                                    </span>
                                    <span class="chevron" :class="{ rotated: openIndex === 3 }">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>
                                <div class="accordion-body">
                                    <ul class="list-style">
                                        <li>Accounting</li>
                                        <li>Audit</li>
                                        <li>Finance</li>
                                        <li>Business & Economics</li>
                                        <li>English</li>
                                        <li>Aptitude & Analytical Skills</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Important Instructions -->
                            <div class="accordion-item" :class="{ open: openIndex === 4 }">
                                <button class="accordion-header" @click="toggle(4)">
                                    <span class="header-left">
                                        <span class="icon-circle orange-bg">●</span>
                                        <span class="header-title orange">Important Instructions</span>
                                    </span>
                                    <span class="chevron orange" :class="{ rotated: openIndex === 4 }">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>
                                <div class="accordion-body">
                                    <ul class="list-style">
                                        <li>Login 15 minutes before your exam time.</li>
                                        <li>No books, notes, or other devices allowed.</li>
                                        <li>Stay visible on camera throughout the exam.</li>
                                        <li>Any unfair practice may lead to disqualification.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <!-- End Accordion -->

                        <!-- Bottom Highlight Box -->
                        <div class="info-box mt-4">
                            NFET ensures a <strong>fair, professional, and industry-standard evaluation</strong>
                            to shortlist capable candidates for future CGC career opportunities.
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- New Figma Section (Added Below) -->
        <section class="detailed-guidelines-section pb-5 pt-2">
            <div class="container px-4 px-md-0">
                <div class="detailed-accordion-container mx-auto">
                    <div v-for="(section, index) in detailedGuidelines" :key="index"
                        class="detailed-accordion-item mb-3" :class="{ open: openIndexDetailed === index }">
                        <div class="detailed-accordion-header" :style="{ backgroundColor: section.headerColor }"
                            @click="toggleDetailed(index)">
                            <div class="detailed-header-content">
                                <div class="detailed-icon-wrapper">
                                    <!-- Using provided icons or SVGs if paths aren't fixed yet -->
                                    <img v-if="section.icon" :src="section.icon" :alt="section.title"
                                        class="detailed-header-icon" />
                                    <div v-else class="detailed-placeholder-icon">
                                        <svg v-if="index === 0" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                            stroke="#A34393" stroke-width="2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                        <svg v-else-if="index === 1" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="#2C2C54" stroke-width="2">
                                            <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                                            <line x1="7" y1="8" x2="17" y2="8"></line>
                                            <line x1="7" y1="12" x2="17" y2="12"></line>
                                            <line x1="7" y1="16" x2="13" y2="16"></line>
                                        </svg>
                                        <svg v-else-if="index === 2" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="#5E4496" stroke-width="2">
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                            <line x1="8" y1="21" x2="16" y2="21"></line>
                                            <line x1="12" y1="17" x2="12" y2="21"></line>
                                        </svg>
                                        <svg v-else-if="index === 3" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="#A34393" stroke-width="2">
                                            <path
                                                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z">
                                            </path>
                                            <line x1="12" y1="9" x2="12" y2="13"></line>
                                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                        </svg>
                                        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none"
                                            stroke="#292955" stroke-width="2">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="14" y1="8" x2="12" y2="10"></line>
                                            <line x1="12" y1="10" x2="10" y2="8"></line>
                                            <line x1="12" y1="10" x2="12" y2="16"></line>
                                        </svg>
                                    </div>
                                </div>
                                <div class="detailed-header-text-group">
                                    <span class="detailed-header-title">{{ section.title }}</span>
                                    <span v-if="section.subtitle" class="detailed-header-subtitle">{{ section.subtitle
                                        }}</span>
                                </div>
                            </div>
                            <span class="detailed-chevron" :class="{ rotated: openIndexDetailed === index }">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </span>
                        </div>
                        <div class="detailed-accordion-body-wrapper">
                            <div class="detailed-accordion-body">
                                <div class="detailed-body-inner">
                                    <p v-if="section.description" class="detailed-section-description">
                                        {{ section.description }}
                                    </p>

                                    <!-- Special Case: Admit Card Graphical Design -->
                                    <div v-if="section.type === 'admit-card'" class="admit-card-graphic mt-3 mb-4">
                                        <div class="ac-inner-card">
                                            <div class="ac-header">
                                                <div class="ac-logo-group">
                                                    <div class="ac-logo-circle">GCC</div>
                                                    <span class="ac-logo-text">NFET ADMIT CARD</span>
                                                </div>
                                                <span class="ac-exam-year">#2024 - EXAM</span>
                                            </div>
                                            <div class="ac-body">
                                                <div class="ac-left">
                                                    <div class="ac-photo-box">
                                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                                            alt="Candidate" class="ac-photo" />
                                                    </div>
                                                    <span class="ac-candidate-label">CANDIDATE</span>
                                                </div>
                                                <div class="ac-right">
                                                    <div class="ac-detail-group">
                                                        <label>FULL NAME</label>
                                                        <div class="ac-value highlight">Alex Morgan</div>
                                                    </div>
                                                    <div class="ac-detail-group">
                                                        <label>ENROLLMENT NUMBER</label>
                                                        <div class="ac-value">NFET - 2024 - 88392</div>
                                                    </div>

                                                    <div class="ac-grid mt-3">
                                                        <div class="ac-grid-item">
                                                            <div class="ac-label-group">
                                                                <label>EXAM DETAILS</label>
                                                                <div class="ac-row">
                                                                    <span class="ac-label-sm">Code:</span>
                                                                    <span class="ac-value-sm">CS - 101</span>
                                                                </div>
                                                                <div class="ac-row">
                                                                    <span class="ac-label-sm">Time:</span>
                                                                    <span class="ac-value-sm">10:00 AM</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ac-grid-item">
                                                            <div class="ac-label-group">
                                                                <label>&nbsp;</label>
                                                                <div class="ac-row">
                                                                    <span class="ac-label-sm">Date:</span>
                                                                    <span class="ac-value-sm">Oct 15, 2024</span>
                                                                </div>
                                                                <div class="ac-row">
                                                                    <span class="ac-label-sm">Duration:</span>
                                                                    <span class="ac-value-sm">120 Mins</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ac-footer">
                                                Authorized by Examination Controller
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Special Case: CBT Guidelines Grid Design -->
                                    <div v-if="section.type === 'cbt-guidelines'" class="cbt-guidelines-container mt-3">
                                        <div class="cbt-home-mode-title mb-4">
                                            <div class="cbt-home-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                                    stroke="#0D9488" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                                </svg>
                                            </div>
                                            <span class="cbt-home-text">Appear from Home Mode</span>
                                        </div>

                                        <div class="cbt-grid">
                                            <div v-for="(card, cIndex) in section.cards" :key="cIndex" class="cbt-card">
                                                <div class="cbt-card-icon">
                                                    <div v-if="card.iconType === 'laptop'">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            stroke="#0D9488" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2">
                                                            </rect>
                                                            <line x1="2" y1="20" x2="22" y2="20"></line>
                                                        </svg>
                                                    </div>
                                                    <div v-else-if="card.iconType === 'wifi'">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            stroke="#0D9488" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                                                            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                                                            <path d="M8.53 16.11a6 6 0 0 1 6.94 0"></path>
                                                            <line x1="12" y1="20" x2="12.01" y2="20"></line>
                                                        </svg>
                                                    </div>
                                                    <div v-else-if="card.iconType === 'clock'">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            stroke="#0D9488" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <polyline points="12 6 12 12 16 14"></polyline>
                                                        </svg>
                                                    </div>
                                                    <div v-else-if="card.iconType === 'chair'">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            stroke="#0D9488" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path d="M19 11V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2"></path>
                                                            <path d="M5 11v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"></path>
                                                            <path d="M5 11h14"></path>
                                                        </svg>
                                                    </div>
                                                    <div v-else-if="card.iconType === 'user'">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            stroke="#0D9488" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    </div>
                                                    <div v-else-if="card.iconType === 'eye'">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            stroke="#0D9488" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                            </path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p class="cbt-card-text">{{ card.text }}</p>
                                            </div>
                                        </div>

                                        <p class="cbt-disclaimer-text mt-4">
                                            The test is AI-proctored with live supervision; any unfair practice may lead
                                            to disqualification.
                                        </p>
                                    </div>

                                    <!-- Special Case: Terms & Conditions Design -->
                                    <div v-if="section.type === 'terms-conditions'" class="terms-container mt-3">
                                        <p class="terms-intro-text mb-4">
                                            Applicable to all candidates appearing for the NFET conducted by GCC School
                                            on the AI-proctored platform powered by Aon.
                                        </p>

                                        <div class="terms-grid">
                                            <div v-for="(card, tIndex) in section.cards" :key="tIndex"
                                                class="terms-card">
                                                <h4 class="terms-card-title">{{ card.title }}</h4>
                                                <p class="terms-card-text">{{ card.text }}</p>
                                            </div>
                                        </div>

                                        <div class="terms-footer-box mt-4">
                                            Failure to comply with any of the above terms may lead to cancellation of
                                            the exam, result nullification, and disqualification from further NFET
                                            processes.
                                        </div>

                                        <!-- <div class="terms-action-wrapper mt-4">
                                            <button class="agree-proceed-btn">
                                                I Agree & Proceed
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            </button>
                                        </div> -->
                                    </div>

                                    <!-- Special Case: Violations Section Design -->
                                    <div v-if="section.type === 'violations'" class="violations-container mt-3">
                                        <div class="violations-warning-box mb-4">
                                            <strong>Warning: During the NFET AI-proctored examination (powered by Aon),
                                                the following activities will be treated as misconduct and may result in
                                                immediate disqualification.</strong>
                                        </div>

                                        <ul class="violations-list">
                                            <li v-for="(item, vIndex) in section.items" :key="vIndex"
                                                class="violation-item">
                                                <span class="violation-bullet"></span>
                                                <div class="violation-content">
                                                    <strong>{{ item.label }}:</strong> {{ item.description }}
                                                </div>
                                            </li>
                                        </ul>

                                        <div class="violations-footer-text mt-4">
                                            Any confirmed violation may lead to cancellation of the examination, result
                                            nullification, and disqualification from the NFET selection process.
                                        </div>
                                    </div>

                                    <ul v-if="section.items && !['admit-card', 'cbt-guidelines', 'violations', 'terms-conditions'].includes(section.type)"
                                        class="detailed-guideline-list">
                                        <li v-for="(item, i) in section.items" :key="i" class="detailed-list-item">
                                            <div class="detailed-check-icon-wrapper">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                    stroke="#22C55E" stroke-width="3" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <span v-html="item"></span>
                                        </li>
                                    </ul>
                                    <!-- Callout box for first section -->
                                    <div v-if="index === 0" class="detailed-callout-box">
                                        <div class="detailed-callout-icon">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                            </svg>
                                        </div>
                                        <p class="detailed-callout-text">
                                            Applicants are advised to register early and secure their preferred slot, as
                                            limited seats are available for each testing window.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// State for original accordion
const openIndex = ref(0);

function toggle(index) {
    openIndex.value = openIndex.value === index ? null : index;
}

// State for new Figma-designed accordion
const openIndexDetailed = ref(0);

function toggleDetailed(index) {
    openIndexDetailed.value = openIndexDetailed.value === index ? null : index;
}

const detailedGuidelines = [
    {
        title: "Instructions for",
        subtitle: "Applicants",
        headerColor: "#A34393",
        icon: "",
        description: "Ensure accurate submission of academic and personal information.",
        items: [
            "Applicants must meet eligibility criteria.",
            "Complete the online application form carefully and ensure all academic details are accurate.",
            "Select your preferred exam date and slot during registration.",
            "Application will be confirmed only after successful payment of the examination fee.",
            "Keep a valid government photo ID ready for identity verification during the exam.",
            "Ensure access to a laptop/desktop with webcam, microphone, and stable internet connection for the AI-proctored test.",
            "Appear for the exam from a quiet, well-lit location without disturbance.",
            "Follow all examination instructions carefully to avoid cancellation or disqualification."
        ]
    },
    {
        title: "Admit",
        subtitle: "Card",
        headerColor: "#2C2C54",
        type: "admit-card",
        icon: "",
        description: "Mandatory for appearing in the examination. Please ensure all details match your government ID.",
        items: [
            "Download your admit card from the portal 48 hours before the exam.",
            "Check all details on the admit card carefully.",
            "Instructions for the proctored test will be mentioned on the admit card."
        ]
    },
    {
        title: "CBT Guidelines for NFET",
        subtitle: "Exam",
        headerColor: "#5E4496",
        type: "cbt-guidelines",
        icon: "",
        cards: [
            {
                iconType: "laptop",
                text: "Use laptop/desktop only with webcam and microphone. Mobile not allowed."
            },
            {
                iconType: "wifi",
                text: "Ensure stable internet connection and updated Chrome/Edge browser."
            },
            {
                iconType: "clock",
                text: "Login 15 minutes before exam time for ID and system verification."
            },
            {
                iconType: "chair",
                text: "Sit in a quiet, well-lit room alone; keep desk clear (no books, notes, or devices)."
            },
            {
                iconType: "user",
                text: "Keep a valid photo ID ready for verification."
            },
            {
                iconType: "eye",
                text: "Stay visible on camera throughout the exam; do not switch tabs or leave your seat."
            }
        ]
    },
    {
        title: "Unfair Means & Violations",
        headerColor: "#A34393",
        type: "violations",
        icon: "",
        items: [
            { label: "Impersonation", description: "Another person appearing for the exam on behalf of the candidate." },
            { label: "Presence of Others", description: "Any person entering or staying in the room during the examination." },
            { label: "Use of Unauthorized Materials", description: "Books, notes, calculators (unless permitted), mobile phones, smart devices, or any reference material." },
            { label: "Multiple Devices / Tab Switching", description: "Using another screen, device, or attempting to switch tabs/windows during the test." },
            { label: "Camera or Microphone Obstruction", description: "Turning off, covering, or moving away from the webcam or microphone." },
            { label: "Communication with Others", description: "Talking, signaling, or seeking help from anyone during the exam." },
            { label: "Recording or Sharing Exam Content", description: "Taking screenshots, photos, or sharing test questions in any form." },
            { label: "Suspicious Behavior Flagged by AI", description: "Repeated looking away from screen, leaving seat without permission, or any activity indicating malpractice." }
        ]
    },
    {
        title: "Terms &",
        subtitle: "Conditions",
        headerColor: "#292955",
        type: "terms-conditions",
        icon: "",
        cards: [
            { title: "Accurate Information", text: "All personal, academic, and application details submitted must be true and correct. Any false information may lead to cancellation of candidature." },
            { title: "Eligibility Compliance", text: "Candidates must meet the prescribed eligibility criteria at the time of application and verification." },
            { title: "Exam Integrity", text: "Candidates must strictly follow all examination instructions and maintain academic honesty throughout the test." },
            { title: "AI Proctoring Consent", text: "Candidates consent to AI monitoring, video/audio recording, screen monitoring, and live human supervision during the examination." },
            { title: "Prohibited Activities", text: "Any form of unfair practice, impersonation, use of unauthorized materials, or external assistance will result in disqualification." },
            { title: "Technical Responsibility", text: "Candidates are responsible for ensuring proper device functionality, internet connectivity, and a suitable exam environment." },
            { title: "Result Validity", text: "Examination results may be withheld, cancelled, or reviewed if any policy violation or suspicious activity is detected." },
            { title: "Policy Acceptance", text: "Submission of the application and appearance in the exam will be treated as full acceptance of all NFET rules." }
        ]
    }
];
</script>

<style scoped>
/* Original Section Styles */
.guidelines-section {
    background: #f4f5f9;
}

.main-card {
    max-width: 850px;
    border-radius: 16px;
    background: #ffffff;
}

.accordion-wrapper {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    overflow: hidden;
}

.accordion-item {
    border-bottom: 1px solid #e5e7eb;
}

.accordion-item:last-child {
    border-bottom: none;
}

.accordion-header {
    width: 100%;
    background: #fff;
    border: none;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: background 0.2s ease;
    text-align: left;
}

.accordion-header:hover {
    background: #faf5ff;
}

.accordion-item.open .accordion-header {
    background: #faf5ff;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 10px;
}

.header-title {
    font-weight: 600;
    font-size: 15px;
}

.chevron {
    color: #6f42c1;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
}

.chevron.rotated {
    transform: rotate(180deg);
}

.chevron.orange {
    color: #f97316;
}

.accordion-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease, padding 0.35s ease;
    padding: 0 18px;
}

.accordion-item.open .accordion-body {
    max-height: 400px;
    padding: 4px 18px 16px;
}

.purple {
    color: #6f42c1;
}

.orange {
    color: #f97316;
}

.icon-circle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    flex-shrink: 0;
}

.purple-bg {
    background: #ede9fe;
    color: #6f42c1;
}

.orange-bg {
    background: #ffe7d6;
    color: #f97316;
}

.list-style {
    padding-left: 18px;
    margin: 0;
}

.list-style li {
    margin-bottom: 6px;
    font-size: 14px;
    color: #555;
}

.info-box {
    background: #f3e8ff;
    padding: 14px;
    border-radius: 10px;
    font-size: 14px;
    color: #4c1d95;
    border: 1px solid #e9d5ff;
}

/* NEW Section Styles (Premium Figma Design) */
.detailed-guidelines-section {
    background: #f4f5f9;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.detailed-accordion-container {
    max-width: 850px;
}

.detailed-accordion-item {
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    border: 1px solid #E2E8F0;
    transition: all 0.3s ease;
}

.detailed-accordion-item.open {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.detailed-accordion-header {
    padding: 18px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
}

.detailed-header-content {
    display: flex;
    align-items: center;
    gap: 16px;
}

.detailed-icon-wrapper {
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.detailed-header-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
}

.detailed-placeholder-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.detailed-header-text-group {
    display: flex;
    flex-direction: column;
}

.detailed-header-title {
    color: #fff;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.2;
}

.detailed-header-subtitle {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.2;
}

.detailed-chevron {
    transition: transform 0.3s ease;
}

.detailed-chevron.rotated {
    transform: rotate(180deg);
}

.detailed-accordion-body-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease-out;
}

.detailed-accordion-item.open .detailed-accordion-body-wrapper {
    grid-template-rows: 1fr;
}

.detailed-accordion-body {
    overflow: hidden;
}

.detailed-body-inner {
    padding: 24px;
}

.detailed-section-description {
    font-weight: 600;
    color: #334155;
    margin-bottom: 20px;
}

.detailed-guideline-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.detailed-list-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
    color: #475569;
    font-size: 0.95rem;
    line-height: 1.5;
}

.detailed-check-icon-wrapper {
    width: 22px;
    height: 22px;
    background: #F0FDF4;
    border: 1.5px solid #22C55E;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
}

.detailed-callout-box {
    margin-top: 24px;
    background: #EFF6FF;
    border: 1px solid #BFDBFE;
    border-radius: 8px;
    padding: 14px 18px;
    display: flex;
    gap: 12px;
    align-items: flex-start;
}

.detailed-callout-text {
    margin: 0;
    font-size: 0.875rem;
    color: #1E40AF;
    font-weight: 500;
}

@media (max-width: 768px) {
    .guidelines-section {
        padding: 40px 0px;
    }

    .detailed-body-inner {
        padding: 20px 16px;
    }

    .detailed-header-title,
    .detailed-header-subtitle {
        font-size: 1rem;
    }
}

/* Admit Card CSS */
.admit-card-graphic {
    display: flex;
    justify-content: center;
    width: 100%;
}

.ac-inner-card {
    width: 100%;
    max-width: 550px;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    border: 1px solid #E2E8F0;
}

.ac-header {
    background: #1e1e2d;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
}

.ac-logo-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.ac-logo-circle {
    width: 32px;
    height: 32px;
    background: #fff;
    color: #1e1e2d;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 10px;
}

.ac-logo-text {
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.5px;
}

.ac-exam-year {
    font-size: 11px;
    opacity: 0.7;
}

.ac-body {
    padding: 24px;
    display: flex;
    gap: 24px;
}

.ac-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.ac-photo-box {
    width: 100px;
    height: 110px;
    background: #F1F5F9;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #CBD5E1;
}

.ac-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ac-candidate-label {
    font-size: 10px;
    font-weight: 600;
    color: #94A3B8;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.ac-right {
    flex: 1;
}

.ac-detail-group {
    margin-bottom: 12px;
}

.ac-detail-group label {
    display: block;
    font-size: 9px;
    font-weight: 700;
    color: #94A3B8;
    margin-bottom: 2px;
}

.ac-value {
    font-size: 14px;
    font-weight: 600;
    color: #1E293B;
}

.ac-value.highlight {
    font-size: 18px;
    color: #0F172A;
}

.ac-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}

.ac-label-group label {
    display: block;
    font-size: 9px;
    font-weight: 700;
    color: #94A3B8;
    margin-bottom: 4px;
}

.ac-row {
    display: flex;
    gap: 6px;
    margin-bottom: 2px;
}

.ac-label-sm {
    font-size: 11px;
    color: #64748B;
    min-width: 55px;
}

.ac-value-sm {
    font-size: 11px;
    font-weight: 700;
    color: #1E293B;
}

.ac-footer {
    background: #F8FAFC;
    padding: 10px;
    text-align: center;
    font-size: 11px;
    color: #64748B;
    border-top: 1px solid #F1F5F9;
}

@media (max-width: 500px) {
    .ac-body {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .ac-row {
        justify-content: center;
    }
}

/* CBT Guidelines Grid CSS */
.cbt-guidelines-container {
    width: 100%;
}

.cbt-home-mode-title {
    display: flex;
    align-items: center;
    gap: 10px;
}

.cbt-home-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.cbt-home-text {
    font-weight: 600;
    color: #0D9488;
    font-size: 1.1rem;
}

.cbt-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.cbt-card {
    background: #fff;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    transition: all 0.2s ease;
}

.cbt-card:hover {
    border-color: #0D9488;
    box-shadow: 0 4px 12px rgba(13, 148, 136, 0.05);
}

.cbt-card-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.cbt-card-text {
    margin: 0;
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.5;
}

.cbt-disclaimer-text {
    text-align: center;
    font-size: 0.9rem;
    color: #64748B;
    border-top: 1px solid #F1F5F9;
    padding-top: 16px;
}

@media (max-width: 768px) {
    .cbt-grid {
        grid-template-columns: 1fr;
    }
}

/* Violations Section CSS */
.violations-container {
    width: 100%;
}

.violations-warning-box {
    background: #FFF1F2;
    border: 1px solid #FFE4E6;
    border-radius: 8px;
    padding: 16px 20px;
    color: #9F1239;
    font-size: 0.95rem;
    line-height: 1.5;
}

.violations-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.violation-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
}

.violation-bullet {
    width: 8px;
    height: 8px;
    background: #E11D48;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 8px;
}

.violation-content {
    font-size: 0.95rem;
    color: #334155;
    line-height: 1.5;
}

.violation-content strong {
    color: #0F172A;
}

.violations-footer-text {
    font-size: 0.9rem;
    color: #64748B;
    border-top: 1px solid #F1F5F9;
    padding-top: 16px;
    text-align: center;
}

/* Terms & Conditions Section CSS */
.terms-container {
    width: 100%;
}

.terms-intro-text {
    font-size: 0.95rem;
    color: #64748B;
    line-height: 1.5;
}

.terms-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.terms-card {
    background: #fff;
    border: 1px solid #F1F5F9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}

.terms-card-title {
    font-size: 1rem;
    font-weight: 700;
    color: #1E293B;
    margin-bottom: 8px;
}

.terms-card-text {
    font-size: 0.9rem;
    color: #64748B;
    line-height: 1.5;
    margin: 0;
}

.terms-footer-box {
    background: #E2E8F0;
    border-radius: 8px;
    padding: 16px 24px;
    color: #475569;
    font-size: 0.95rem;
    text-align: center;
    line-height: 1.5;
    font-weight: 500;
}

.terms-action-wrapper {
    display: flex;
    justify-content: center;
}

.agree-proceed-btn {
    background: #2563EB;
    color: white;
    font-weight: 600;
    padding: 12px 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.agree-proceed-btn:hover {
    background: #1D4ED8;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

@media (max-width: 768px) {
    .terms-grid {
        grid-template-columns: 1fr;
    }
}
</style>
