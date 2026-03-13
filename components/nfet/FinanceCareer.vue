<template>

    <section class="finance-career">
        <div class="container">
            <h2>Ready to Start Your Global Finance Career?</h2>
            <p>Register now for NFET and take the first step toward exclusive opportunities
                with world's leading consulting firms and MNCs.</p>
        </div>
        <div class="apply-now">
            <button data-bs-toggle="modal" data-bs-target="#financeCareerApplyModal">Apply for NFET Now</button>
        </div>
    </section>

    <!-- Apply Now Modal -->
    <CommonDossierModal modal-id="financeCareerApplyModal" modal-title="Apply Now"
        subtitle="Enter your details to complete your application" mode="apply" />
</template>
<script lang="js">
export default {}
</script>
<style scoped>
.finance-career {
    background: linear-gradient(135deg, #3D2C5E 0%, #4C1D95 100%);
    padding: 80px 0px;
}

.finance-career h2 {
    color: #FAFAFA;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
}

.finance-career p {
    color: #C4B5FD;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    max-width: 600px;
    margin: auto;
}

.apply-now {
    display: flex;
    justify-content: center;
    margin-top: 24px;
}

.apply-now button {
    padding: 16px 40px;
    border-radius: 9999px;
    background: #FFF;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.10);
    border: none
}

@media (max-width: 768px) {
    .finance-career {
        padding: 40px 0px;
    }

    .finance-career h2 {
        font-size: 24px;
        line-height: 32px;
    }

    .finance-career p {
        font-size: 14px;
        line-height: 24px;
    }

    .apply-now button {
        font-size: 16px;
        line-height: 24px;
        padding: 12px 32px;
    }
}
</style>