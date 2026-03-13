<template>
    <div class="eligibility-section">
        <div class="container">
            <div class="content-wrapper">
                <!-- Title Section -->
                <div class="title-box" data-aos="fade-right">
                    <h2>NFET EXAM <span class="highlight">ELIGIBILITY</span></h2>
                </div>

                <!-- Criteria Grid -->
                <div class="criteria-container" data-aos="fade-left">
                    <div class="criteria-grid">
                        <div class="criteria-item">
                            <div class="icon-box">
                                <i class="ti ti-circle-check-filled"></i>
                            </div>
                            <span>B.Com (First Division From UGC Approved University)</span>
                        </div>
                        <div class="criteria-item">
                            <div class="icon-box">
                                <i class="ti ti-circle-check-filled"></i>
                            </div>
                            <span>B.Com + M.Com / MBA / PG (First Division)</span>
                        </div>
                        <div class="criteria-item">
                            <div class="icon-box">
                                <i class="ti ti-circle-check-filled"></i>
                            </div>
                            <span>Indian Citizen</span>
                        </div>
                        <div class="criteria-item">
                            <div class="icon-box">
                                <i class="ti ti-circle-check-filled"></i>
                            </div>
                            <span>Born on or after January 1, 1996</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// No script logic needed for now
</script>

<style scoped>
.eligibility-section {
    background-color: #26002e;
    /* Very dark purple from image */
    padding: 40px 0;
    color: #ffffff;
}

.content-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    flex-direction: column;
}

.title-box {
    flex: 0 0 35%;
}

.title-box h2 {
    font-size: 32px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    text-transform: uppercase;
    line-height: 1.2;
}

.highlight {
    color: #F1A63E;
}

.criteria-container {
    flex: 1;
}

.criteria-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 40px;
}

.criteria-item {
    display: flex;
    align-items: center;
    /* Vertically center icon with text */
    gap: 15px;
}

.icon-box {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background-color: #22c55e;
    /* Green background */
    border-radius: 50%;
}

.icon-box i {
    color: white;
    /* White check mark */
    font-size: 24px;
    line-height: 1;
}

.criteria-item span {
    font-size: 15px;
    font-weight: 500;
    line-height: 1.4;
    color: #ffffff;
    padding-top: 2px;
    /* Optical adjustment */
}

/* Responsive Design */
@media (max-width: 1200px) {
    .title-box h2 {
        font-size: 28px;
    }
}

@media (max-width: 991px) {
    .title-box h2 {
        font-size: 26px;
    }

    .content-wrapper {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;
    }

    .title-box {
        width: 100%;
        text-align: center;
    }

    .criteria-container {
        width: 100%;
    }

    .criteria-grid {
        gap: 20px;
    }

    .criteria-item {
        justify-content: flex-start;
        /* Keep left alignment on tablet for readability */
    }
}

@media (max-width: 767px) {
    .eligibility-section {
        padding: 50px 0;
    }

    .title-box h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .content-wrapper {
        gap: 20px;
    }

    .criteria-grid {
        grid-template-columns: 1fr;
        gap: 15px;
        justify-items: center;
        /* Center grid items */
    }

    .criteria-item {
        /* justify-content: center; */
        /* Center content within item */
        text-align: left;
        /* Text itself stays left relative to icon */
        width: 100%;
        max-width: 350px;
        /* Constrain width for better centering appearance */
    }
}
</style>
