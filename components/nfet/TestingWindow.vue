<template>
    <section class="testing-window">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Testing Window & Slot Booking</h2>
                    <p>Select your preferred date and time</p>
                </div>
                <div class="exam-window">
                    <p>Examination Window</p>
                    <h2>21 Feb – 31 March 2026</h2>
                    <p class="daily-slot">Daily Slots Available</p>

                    <p class="discription">Select your preferred date and time and take the first decisive step toward
                        global career
                        opportunities.</p>
                    <button data-bs-toggle="modal" data-bs-target="#testingWindowApplyModal">Apply Now</button>

                </div>
            </div>
        </div>
    </section>

    <!-- Apply Now Modal -->
    <CommonDossierModal modal-id="testingWindowApplyModal" modal-title="Apply Now"
        subtitle="Enter your details to complete your application" mode="apply" />
</template>
<script setup lang="ts">
</script>
<style scoped>
.testing-window {
    background: #262626;
    padding: 80px 0 80px;
}

.testing-window h2 {
    color: #FAFAFA;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
}

.testing-window p {
    color: #A3A3A3;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    ;
}

.exam-window {
    padding: 48px;
    border-radius: 16px;
    border: 1px solid #404040;
    background: #000;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.10);
    max-width: 1000px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.exam-window p {
    color: #8B5CF6;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    /* 155.556% */
}

.exam-window .daily-slot {
    color: #A3A3A3;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    /* 150% */
}

.exam-window .discription {
    color: #A3A3A3;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    max-width: 600px;
    /* 150% */
}

.exam-window button {

    border-radius: 9999px;
    background: #3D2C5E;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.10);
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    padding: 16px 40px;
    border: none;
    margin-top: 30px;
    /* 155.556% */
}

@media (max-width: 768px) {
    .testing-window {
        padding: 40px 0px;
    }

    .testing-window h2 {
        font-size: 24px;
        line-height: 32px;
    }

    .exam-window {
        padding: 24px;
    }

    .exam-window h2 {
        font-size: 24px;
        line-height: 32px;
    }

    .exam-window p {
        font-size: 16px;
        line-height: 24px;
    }

    .exam-window .discription {
        font-size: 14px;
        line-height: 24px;
    }

    .exam-window button {
        font-size: 16px;
        line-height: 24px;
        padding: 12px 32px;
    }
}
</style>
