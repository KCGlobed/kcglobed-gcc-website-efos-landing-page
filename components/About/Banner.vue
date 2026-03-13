<template>
    <div class="inner-heros-warp">
        <div class="container-fluid">
            <div class="inner-hero-content">
                <h1>
                    Reimagining
                    <span>Finance Education</span>
                </h1>
                <p>At GCC School, we prepare future professionals by focusing on the core technical skills required by
                    the GCC industry. candidates gain practical, industry-aligned expertise in finance, audit,
                    accounting, taxation, risk management, and related global business functions through real-world
                    learning experiences from industry mentors.</p>


            </div>
        </div>

    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.inner-heros-warp {
    background-image: url("~/assets/img/abouts/about-banner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 100px;
}

.inner-hero-content {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.inner-hero-content h1 {
    color: #FFF;
    font-family: Inter;
    font-size: 62px;
    font-style: normal;
    font-weight: 700;
    line-height: 66.96px;


}

.inner-hero-content h1 span {
    color: #F1A83E;
    font-family: Inter;
    font-size: 62px;
    font-style: italic;
    font-weight: 700;
    line-height: 66.96px;

}

.inner-hero-content p {
    color: #D4D4DB;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30.6px;
    /* 170% */
}

@media (max-width: 991px) {

    .inner-hero-content h1,
    .inner-hero-content h1 span {
        font-size: 48px;
        line-height: normal;
    }
}

@media (max-width: 768px) {
    .inner-heros-warp {
        min-height: 70vh;
        display: flex;
        align-items: center;
        padding-top: 100px;
    }

    .inner-hero-content {
        padding: 100px 20px;
    }

    .inner-hero-content h1,
    .inner-hero-content h1 span {
        font-size: 34px;
    }

    .inner-hero-content p {
        font-size: 14px;
        line-height: 1.6;
    }
}

@media (max-width: 480px) {

    .inner-hero-content h1,
    .inner-hero-content h1 span {
        font-size: 32 px;
    }
}
</style>
