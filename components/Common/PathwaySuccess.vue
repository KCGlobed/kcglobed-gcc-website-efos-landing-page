<template>
    <div class="pathway-section">
        <div class="container">
            <!-- Header -->
            <div class="section-header" data-aos="fade-up">
                <!-- <span class="badge">Your Journey</span> -->
                <h2 class="title">PATHWAY TO <span class="highlight">SUCCESS</span></h2>
            </div>

            <!-- Uniform Steps Grid -->
            <div class="steps-container">
                <div class="steps-grid">
                    <div v-for="(step, index) in steps" :key="index" class="step-card" data-aos="fade-up"
                        :data-aos-delay="index * 100">
                        <div class="step-content">
                            <!-- Number removed as requested -->
                            <div class="icon-wrapper" v-html="step.icon"></div>
                            <h4 class="step-title">{{ step.title }}</h4>
                        </div>
                        <div class="step-line" v-if="index !== steps.length - 1"></div>
                    </div>
                </div>
            </div>

            <!-- Clean Eligibility Section -->
            <div class="eligibility-container" data-aos="fade-up">
                <div class="eligibility-box">
                    <div class="box-content">
                        <div class="header-side">
                            <div class="icon-circle">
                                <i class="ti ti-check"></i>
                            </div>
                            <div>
                                <h3>NFET Eligibility</h3>
                                <p>Check your qualifications</p>
                            </div>
                        </div>
                        <div class="criteria-side">
                            <div class="criteria-grid">
                                <div v-for="(criteria, index) in eligibilityCriteria" :key="index"
                                    class="criteria-item">
                                    <i class="ti ti-circle-check-filled"></i>
                                    <span>{{ criteria }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="action-side">
                            <NuxtLink to="/admissions" class="apply-btn">
                                Apply Now
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const steps = [
    {
        title: 'Qualify NFET Entrance Exam',
        icon: '<i class="ti ti-clipboard-check"></i>'
    },
    {
        title: 'Get The Ticket To DLF Cyber City, Gurugram',
        icon: '<i class="ti ti-ticket"></i>'
    },
    {
        title: 'Be Part of Hiring Drive',
        icon: '<i class="ti ti-users-group"></i>'
    },
    {
        title: 'Get the Conditional Offer Letter',
        icon: '<i class="ti ti-file-certificate"></i>'
    },
    {
        title: 'Then Start Your Experiential Learning',
        icon: '<i class="ti ti-rocket"></i>'
    }
]

const eligibilityCriteria = [
    'B.Com (First Division)',
    'B.Com + M.Com / MBA / PG (First Division)',
    'Indian Citizen',
    'Born on or after Jan 1, 1996'
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.pathway-section {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: #f8f9fc;
    padding: 80px 0;
    overflow: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.badge {
    background: rgba(252, 100, 65, 0.1);
    color: #F1A63E;
    padding: 6px 16px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: inline-block;
    margin-bottom: 15px;
}

.title {
    font-size: 32px;
    font-weight: 700;
    color: #0d0d25;
    margin: 0;
    text-transform: uppercase;
}

.highlight {
    color: #F1A63E;
}

/* Steps Grid */
.steps-container {
    margin-bottom: 60px;
}

.steps-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}

.step-card {
    background: white;
    border-radius: 16px;
    padding: 30px 20px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    border: 1px solid #edf2f7;
    transition: all 0.3s ease;
    display: flex;
    /* Ensures uniform height */
    flex-direction: column;
    justify-content: center;
    height: 100%;
    position: relative;
    min-height: 250px;
    /* Adjusted min-height without number */
}

.step-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(252, 100, 65, 0.1);
    border-color: #F1A63E;
}

.step-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* Center vertically since number is gone */
}

.icon-wrapper {
    width: 70px;
    /* Slightly larger */
    height: 70px;
    background: #fff5f2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    /* More spacing */
    font-size: 32px;
    /* Larger icon */
    color: #F1A63E;
    transition: transform 0.3s ease;
}

.step-card:hover .icon-wrapper {
    transform: scale(1.1) rotate(5deg);
    background: #F1A63E;
    color: white;
}

.step-title {
    font-size: 18px;
    /* Increased from 16px */
    font-weight: 700;
    color: #1a1a2e;
    /* Darker for contrast */
    line-height: 1.4;
    margin: 0;
    /* Ensure title area has uniform height to align cards perfectly */
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
}

/* Eligibility Box */


.eligibility-box {
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    border: 1px solid #edf2f7;
}

.box-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.header-side {
    display: flex;
    align-items: center;
    gap: 15px;
    min-width: 250px;
}

.icon-circle {
    width: 48px;
    height: 48px;
    background: #862E84;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
}

.header-side h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 4px;
    color: #2d3748;
}

.header-side p {
    font-size: 13px;
    color: #718096;
    margin: 0;
}

.criteria-side {
    flex-grow: 1;
    border-left: 1px solid #edf2f7;
    border-right: 1px solid #edf2f7;
    padding: 0 30px;
}

.criteria-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.criteria-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #4a5568;
}

.criteria-item i {
    color: #862E84;
    font-size: 16px;
}

.action-side {
    min-width: 140px;
    text-align: right;
}

.apply-btn {
    display: inline-block;
    padding: 12px 24px;
    background: #A13E99;
    color: white;
    font-weight: 600;
    font-size: 14px;
    border-radius: 8px;
    text-decoration: none;
    transition: background 0.3s ease;
}

.apply-btn:hover {
    background: #F1A63E;
}

/* Responsive */
@media (max-width: 1024px) {
    .steps-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .box-content {
        flex-direction: column;
        text-align: center;
    }

    .header-side {
        flex-direction: column;
        text-align: center;
    }

    .criteria-side {
        border: none;
        padding: 20px 0;
        width: 100%;
    }

    .action-side {
        width: 100%;
    }

    .apply-btn {
        width: 100%;
        text-align: center;
    }
}

@media (max-width: 640px) {
    .steps-grid {
        grid-template-columns: repeat(1, 1fr);
    }

    .criteria-grid {
        grid-template-columns: 1fr;
    }

    .step-card {
        min-height: auto;
        padding: 25px;
    }
}
</style>