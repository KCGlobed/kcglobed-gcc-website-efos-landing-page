<template>
    <section class="why-nfet">
        <div class="container text-center">

            <!-- Heading -->
            <h2>
                Why NFET Exam for Commerce Graduates?
            </h2>
            <p>
                NFET exam is a prestigious, merit-driven gateway designed to identify academically
                strong commerce graduates with exceptional accounting, finance, and analytical capabilities.
            </p>
            <section class="nfet-card">
                <div class="row">
                    <div class="col-12 col-md-4 ">
                        <div class="nfet-img">
                            <img src="~/assets/img/nfet/1.jpg" alt="" srcset="">

                        </div>
                        <div class="nfet-content">
                            <h3>Exclusive Career Pathway</h3>
                            <p>A transparent and competitive pathway to
                                exclusive hiring opportunities with the world's
                                leading consulting firms and MNCs in high-growth
                                GCC roles.</p>

                        </div>

                    </div>
                    <div class="col-12 col-md-4 ">
                        <div class="nfet-img">
                            <img src="~/assets/img/nfet/2.jpg" alt="" srcset="">

                        </div>
                        <div class="nfet-content">
                            <h3>Global Alignment</h3>
                            <p>For deserving first-division students, NFET opens
                                a structured, secure, and globally aligned career
                                launchpad toward impactful international
                                opportunities.</p>

                        </div>

                    </div>
                    <div class="col-12 col-md-4">
                        <div class="nfet-img">
                            <img src="~/assets/img/nfet/3.jpg" alt="" srcset="">

                        </div>
                        <div class="nfet-content">
                            <h3>Comprehensive Domains</h3>
                            <p>Access opportunities in global audits, accounting,
                                advisory, taxation, risk management and many
                                more specialized finance domains.</p>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    </section>
</template>

<style scoped>
.why-nfet {
    background: #ffff;
    padding: 80px 0px;
}

.why-nfet h2 {

    color: #120E1C;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px
}

.why-nfet p {
    color: #231C39;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    max-width: 600px;
    margin: auto;
}

.nfet-card {
    margin-top: 50px;
}

.nfet-card .nfet-img img {
    border-radius: 12px;
    transition: 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);


}

.nfet-content {
    padding: 24px 0px;
}

.nfet-content h3 {
    color: #4C4B4B;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    text-align: start;
}

.nfet-content p {
    color: #64748B;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-align: justify;

}

@media (max-width: 991px) {
    .why-nfet {
        padding: 40px 0px;
    }


}

@media (max-width: 576px) {
    .why-nfet h2 {
        font-size: 24px;
        line-height: 32px;
    }

    .nfet-card {
        margin-top: 30px;
    }
}
</style>
