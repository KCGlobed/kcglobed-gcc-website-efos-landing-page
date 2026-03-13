<template>
    <div class="acca-program-wrapper">
        <div class="container">
            <div class="section-title">
                <h2 class="title">UK ACCA - The Global Passport to <span class="highlight">Accounting & Finance
                        Careers</span></h2>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="acca-program-image">
                        <img src="~/assets/img/programs/acca.png" alt="" srcset="">

                    </div>
                    <p>
                        The Association of Chartered Certified Accountants (ACCA) is one of the most prestigious and
                        globally recognised qualifications in accounting, finance, and business strategy, recognised in
                        180+ countries. It equips professionals with strong expertise in audit, taxation, financial
                        management, and corporate governance, making it a preferred choice for ambitious finance
                        professionals worldwide.
                    </p>
                    <div class="acca-post-card">
                        <h2>FAST Track ACCA with 5 Course Exemptions for Commerce Graduates </h2>
                        <h3>
                            BT, MA , FA , TX , & LW
                        </h3>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.acca-program-wrapper {
    padding: 50px 0;
}

.acca-program-image img {
    width: 100%;
    height: auto;
}

.acca-program-wrapper p {
    font-size: 16px;
    font-weight: 400;
    color: #475569;
    line-height: 1.5;
    margin-top: 30px;
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

.acca-post-card {
    background-color: #4A005B;
    padding: 20px;
    border-radius: 10px;
    margin-top: 30px;
}

.acca-post-card h2 {
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 49.392px;
}

.acca-post-card h3 {
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 49.392px;
}

@media (max-width: 767px) {
    .title {
        font-size: 24px;
        line-height: 32px;
    }

    .section-title {
        margin-bottom: 30px;
    }

    .acca-program-wrapper {
        padding: 40px 0px;
    }

    .acca-post-card h2 {
        font-size: 18px;
        line-height: 30px;
    }

    .acca-post-card h3 {
        font-size: 18px;
    }
}
</style>
