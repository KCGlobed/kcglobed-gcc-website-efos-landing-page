<template>
    <div class="our-legacy-warp ptb-100 bg-white" id="our-legacy">
        <div class="container">
            <!-- Title -->
            <div class="section-title text-center mb-5">
                <h2>Our Legacy</h2>
            </div>

            <!-- Legacy Content -->
            <div class="row mb-5">
                <div class="col-lg-6">
                    <div class="our-legacy-left">
                        <img src="~/assets/img/books.png" class="leader-img" alt="Books" />
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="our-legacy-right">
                        <div class="kc-globed-logo">
                            <img src="~/assets/img/logo_kcglobed.svg" alt="KC GlobEd" />
                        </div>
                        <p>
                            The KCG team is committed to cultivating high standards of professionalism in every learner,
                            regardless of academic background. By breaking traditional educational boundaries, we
                            transform aspirations into globally relevant competencies.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row  ptb-100">
                <div class="col-lg-4">
                    <div class="our-legacy-left">
                        <img src="~/assets/img/legacy/1.png" class="leader-img" alt="Books" />
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="our-legacy-left">
                        <img src="~/assets/img/legacy/2.png" class="leader-img" alt="Books" />
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="our-legacy-left">
                        <img src="~/assets/img/legacy/3.png" class="leader-img" alt="Books" />
                    </div>
                </div>

            </div>




        </div>
    </div>
</template>

<script>
export default {
    name: "OurLegacy",

};
</script>

<style scoped>
.our-legacy-warp {
    width: 100%;
    margin-top: 30px;
}

.our-legacy-left,
.our-legacy-right {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.our-legacy-right {
    flex-direction: column;
}

.kc-globed-logo {
    width: 250px;
    margin-bottom: 20px;
}
</style>
