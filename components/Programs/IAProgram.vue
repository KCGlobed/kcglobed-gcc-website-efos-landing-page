<template>
    <div class="ia-program-area ptb-100">
        <div class="container">
            <div class="section-title text-center mb-50">
                <h2 class="title">I-Gen Pathway for <span class="highlight">New Tomorrow</span></h2>
            </div>
        </div>
        <div class="container">
            <div class="max-1000-container mx-auto bg-white shadow-lg overflow-hidden rounded-12 border">
                <header class="ia-header bg-brand-dark text-white d-flex flex-column flex-md-row">
                    <div
                        class="trimester-label bg-brand-accent p-4 d-flex align-items-center justify-content-center justify-content-md-start font-bold text-lg border-bottom border-md-bottom-0 border-md-end border-white-10">
                        Trimester
                    </div>
                    <div
                        class="program-name p-4 p-md-5 flex-grow-1 font-bold text-lg text-md-xl text-center text-md-start">
                        AI-Enabled International Accounting Professionals (AEIAP) Program
                    </div>
                </header>

                <div class="trimesters-list d-flex flex-column">
                    <div v-for="(trimester, index) in trimesters" :key="index"
                        class="trimester-row d-flex flex-column flex-md-row group border-top border-gray-100">

                        <!-- Mobile Label -->
                        <div
                            class="d-md-none bg-brand-accent text-white px-4 py-2 font-bold text-sm tracking-wider uppercase">
                            {{ trimester.label }}
                        </div>

                        <!-- Desktop Vertical Label -->
                        <div
                            class="hidden-md-down bg-brand-accent text-white d-flex align-items-center justify-content-center shrink-0 border-white-10 label-side">
                            <span
                                class="writing-vertical font-bold tracking-widest text-sm uppercase py-4 whitespace-nowrap">{{
                                    trimester.label }}</span>
                        </div>

                        <!-- Image & Date info -->
                        <div class="trimester-image-box position-relative overflow-hidden shrink-0">
                            <div class="image-overlay position-absolute inset-0 bg-black-40 z-10"></div>
                            <img :src="trimester.image" :alt="trimester.name"
                                class="w-100 h-100 object-cover transition-transform">
                            <div
                                class="image-content position-absolute inset-0 z-20 d-flex flex-column justify-content-center p-4">
                                <h3 class="text-brand-yellow font-bold text-xl mb-1">{{ trimester.name }}</h3>
                                <p class="text-white font-bold text-lg mb-0">{{ trimester.months }}</p>
                                <p class="text-white font-bold text-xxl mb-0">{{ trimester.year }}</p>
                            </div>
                        </div>

                        <!-- Content List -->
                        <div class="flex-grow-1 p-4 p-md-5 bg-white d-flex align-items-center">
                            <div class="row w-100">
                                <div v-for="(col, colIndex) in trimester.modules" :key="colIndex"
                                    :class="trimester.modules.length > 1 ? 'col-md-6' : 'col-12'">
                                    <ul class="list-unstyled mb-0 module-list">
                                        <li v-for="(module, mIndex) in col" :key="mIndex"
                                            class="d-flex align-items-start mb-3">
                                            <span class="bullet-point me-2 text-black">•</span>
                                            <span class="text-gray-900" v-html="module"></span>
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
</template>

<script setup>
const trimesters = [
    {
        name: 'TRIMESTER I',
        label: 'Foundation',
        months: 'JUL – SEP',
        year: '2026',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
        modules: [
            [
                '<strong>Financial Reporting (FR)</strong>',
                '<strong>Audit & Assurance (AA)</strong>',
                'AI for Finance, Audit & Accounting',
                'Data analytics, Power BI, Advance Excel'
            ],
            [
                'MS Office',
                'Communication & Presentation Skills – British Council',
                'Corporate Internal Training'
            ]
        ]
    },
    {
        name: 'TRIMESTER II',
        label: 'Experiential Learning',
        months: 'OCT – DEC',
        year: '2026',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
        modules: [
            [

                '<strong>Financial Management (FM)<strong>',
                '<strong>Performance Management (PM)</strong>'
            ],
            [
                '<div class="d-flex flex-column"><span class="text-gray-900 font-bold" style="color: #7A1C62; font-weight: 700 ">GCC Internship - 6 hr/day</span><span class="text-gray-700 text-sm">(Interim Busy Season)</span></div>'
            ]
        ]
    },
    {
        name: 'TRIMESTER III',
        label: 'Experiential Learning',
        months: 'JAN – MAR',
        year: '2027',
        image: 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=800&h=600&fit=crop',
        modules: [
            [
                '<strong>Strategic Business Reporting (SBR)</strong>',
                '<strong>Strategic Business Leader (SBL)</strong>'
            ],
            [
                '<div class="d-flex flex-column"><span class="text-gray-900 font-bold" style="color: #7A1C62; font-weight: 700 ">GCC Internship - 6 hr/day</span><span class="text-gray-700 text-sm">(Year-End Busy Season)</span></div>'
            ]
        ]
    },
    {
        name: 'TRIMESTER IV',
        label: 'Readiness Deployment',
        months: 'APR – JUN',
        year: '2027',
        image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&h=600&fit=crop',
        modules: [
            [
                '<strong>Advanced Audit & Assurance (AAA)</strong>',
                '<strong>Advanced Financial Management (AFM)</strong>'
            ],
            [
                '<div class="d-flex flex-column"><span class="text-gray-900 font-bold" style="font-weight: 700 ">Corporate Internal Training</span><span class="text-gray-700 text-sm">(Earmarked GCC Candidates)</span></div>'
            ]
        ]
    }
];
</script>

<style scoped>
.content-color {
    color: #7A1C62;
}

.ia-program-area {
    background-color: #f3f4f6;
}

.section-title {
    margin-bottom: 50px;
}

.title {
    font-size: 32px;
    font-weight: 700;
    color: #0d0d25;
    margin-bottom: 20px;
    text-transform: uppercase;
    position: relative;
}

.title::after {
    content: "";
    display: block;
    width: 70px;
    height: 4px;
    background: #F1A63E;
    margin: 15px auto 0;
    border-radius: 10px;
}



.highlight {
    color: #F1A63E;
}

/* .max-1000-container {
    max-width: 1000px;
} */

.rounded-12 {
    border-radius: 12px;
}

.bg-brand-dark {
    background-color: #380b40;
}

.bg-brand-accent {
    background-color: #7a1c62;
}

.text-brand-yellow {
    color: #ffd700;
}

.text-brand-accent {
    color: #7a1c62;
}

.text-gray-900 {
    color: #111827;
}

.text-gray-700 {
    color: #4b5563;
}

.font-bold {
    font-weight: 700;
}

.writing-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
}

.trimester-image-box {
    width: 250px;
    height: 280px;
}

.inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.bg-black-40 {
    background-color: rgba(0, 0, 0, 0.4);
}

.text-xxl {
    font-size: 1.5rem;
    line-height: normal;
}

.shrink-0 {
    flex-shrink: 0;
}

.transition-transform {
    transition: transform 0.7s ease;
}

.trimester-row:hover img {
    transform: scale(1.1);
}

.label-side {
    width: 48px;
    min-height: 280px;
}

.border-white-10 {
    border-color: rgba(255, 255, 255, 0.1) !important;
}

.border-gray-100 {
    border-color: #f1f1f1 !important;
}

.border {
    border: 1px solid #e5e7eb !important;
}

.module-list {
    font-size: 16px;
}

.bullet-point {
    font-size: 20px;
    line-height: 1;
}

@media (max-width: 991px) {

    .trimester-image-box {
        width: 200px;
        height: 250px;
    }

    .label-side {
        min-height: 250px;
    }
}

@media (max-width: 767px) {
    .title {
        font-size: 24px;
        line-height: 32px;
    }

    .section-title {
        margin-bottom: 30px;
    }

    .ia-program-area {
        padding: 40px 0px;
    }

    .trimester-image-box {
        width: 100%;
        height: 200px;
    }

    .label-side {
        min-height: auto;
    }
}

@media (min-width: 768px) {
    .hidden-md-down {
        display: flex !important;
    }

    .border-md-end {
        border-right: 1px solid rgba(255, 255, 255, 0.1);
    }

    .trimester-label {
        width: 297px;
    }
}

@media (max-width: 767px) {
    .hidden-md-down {
        display: none !important;
    }
}
</style>
