<template>
    <div class="timeline-section">
        <div class="container">
            <div class="timeline-card" data-aos="fade-up">
                <h2 class="timeline-heading">ADMISSION TIMELINE FOR 2026 COHORT</h2>

                <div class="timeline-list">
                    <div v-for="(item, index) in timeline" :key="index" class="timeline-row" data-aos="fade-up"
                        :data-aos-delay="index * 50">
                        <!-- Left colored section -->
                        <div class="row-left" :style="{ background: item.color }">
                            <span class="row-icon "><img :src="item.icon" alt=""></span>
                            <span class="row-label">{{ item.label }}</span>
                        </div>
                        <!-- Right date section -->
                        <div class="row-right">
                            {{ item.date }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import icon1 from "~/assets/icon/timlineicon/9.svg"
import icon2 from "~/assets/icon/timlineicon/2.svg"
import icon3 from "~/assets/icon/timlineicon/3.svg"
import icon4 from "~/assets/icon/timlineicon/4.svg"
import icon5 from "~/assets/icon/timlineicon/5.svg"
import icon6 from "~/assets/icon/timlineicon/6.svg"
import icon7 from "~/assets/icon/timlineicon/7.svg"
import icon8 from "~/assets/icon/timlineicon/8.svg"
const timeline = [
    {
        label: 'NFET\nEnrollment',
        icon: icon1,
        date: 'Feb 25 Onwards',
        color: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)',
    },
    {
        label: 'NFET Slot\nBooking',
        icon: icon2,
        date: 'March 01 - March 31, 2026',
        color: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
    },
    {
        label: 'Result Communication',
        icon: icon3,
        date: 'First Week of April, 2026',
        color: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)',
    },
    {
        label: 'Pre-assessment to Qualify (Ticket to DLF Cyber City, Gurugram)',
        icon: icon4,
        date: 'April - May 2026',
        color: 'linear-gradient(135deg, #a21caf 0%, #c026d3 100%)',
    },
    {
        label: 'Personal Interview Round',
        icon: icon5,
        date: 'May 15 – June 15, 2026',
        color: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)',
    },
    {
        label: 'Conditional Offer Letter & Appointment',
        icon: icon6,
        date: 'June 01 - June 20, 2026',
        color: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)',
    },
    {
        label: 'Admission Confirmation',
        icon: icon7,
        date: 'June 25, 2026',
        color: 'linear-gradient(135deg, #6d28d9 0%, #9333ea 100%)',
    },
    {
        label: 'Cohort Start',
        icon: icon8,
        date: 'July 01, 2026',
        color: 'linear-gradient(135deg, #a21caf 0%, #c026d3 100%)',
    },
]
</script>

<style scoped>
/* ===== Section ===== */
.timeline-section {
    background: #f0f0f5;
    padding: 70px 0;
}

/* ===== Outer Card ===== */
.timeline-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 40px 36px 36px;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
}

/* ===== Heading ===== */
.timeline-heading {
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    color: #1e1b4b;
    text-align: center;
    margin-bottom: 28px;
    letter-spacing: 0.4px;
    line-height: 1.3;
}

/* ===== Row List ===== */
.timeline-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* ===== Individual Row ===== */
.timeline-row {
    display: flex;
    align-items: stretch;
    border-radius: 10px;
    overflow: hidden;
    min-height: 52px;
}

/* ===== Left Colored Half ===== */
.row-left {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    flex: 0 0 52%;
    color: #fff;
}

.row-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    padding: 8px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    font-size: 15px;
}

.row-label {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2px;
    line-height: 1.4;
    white-space: pre-line;
}

/* ===== Right Light Half ===== */
.row-right {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px 18px;
    background: #f0eeff;
    font-size: 13.5px;
    font-weight: 500;
    color: #1e1b4b;
    line-height: 1.4;
}

/* ===== Responsive ===== */
@media (max-width: 767px) {
    .timeline-card {
        padding: 28px 16px 24px;
    }

    .timeline-heading {
        font-size: 16px;
    }

    .timeline-row {
        flex-direction: column;
        border-radius: 10px;
    }

    .row-left {
        flex: unset;
        width: 100%;
        border-radius: 0;
    }

    .row-right {
        width: 100%;
        border-radius: 0;
        padding: 10px 16px;
    }
}

@media (max-width: 480px) {
    .timeline-section {
        padding: 48px 0;
    }

    .timeline-heading {
        font-size: 14px;
    }

    .row-label {
        font-size: 11px;
    }

    .row-right {
        font-size: 12.5px;
    }
}
</style>
