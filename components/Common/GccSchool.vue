<template>
    <div class="gcc-school-section">
        <div class="container text-center">
            <div class="section-header mb-60" data-aos="fade-up">
                <h2 class="title">AT <span class="highlight">GCC SCHOOL</span>
                    We prepare finance leaders to achieve the next elevation - for their organisations and for
                    themselves
                </h2>
                <p class="subtitle max-800 mx-auto">

                </p>
            </div>
            <div class="gcc-school-content">
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
                        <div class="gcc-image-box">
                            <img src="../../assets/img/heros/3.svg" class="img-fluid" alt="GCC School Feature 1" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
                        <div class="gcc-image-box">
                            <img src="../../assets/img/heros/1.svg" class="img-fluid" alt="GCC School Feature 2" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div class="gcc-image-box">
                            <img src="../../assets/img/heros/4.svg" class="img-fluid" alt="GCC School Feature 3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">

</script>
<style scoped>
.gcc-school-section {
    padding: 80px 0;
    /* Increased padding for premium look */
    background-color: #f9fafb;
    overflow: hidden;
}

.section-header .title {
    font-size: clamp(24px, 4vw, 36px);
    font-weight: 800;
    color: #0d0d25;
    margin-bottom: 20px;
    text-transform: uppercase;
    line-height: 1.2;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.section-header .highlight {
    color: #F1A63E;
    position: relative;
    display: inline-block;
}

.section-header .highlight::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(241, 166, 62, 0.2);
    border-radius: 2px;
}

.section-header .subtitle {
    font-size: clamp(14px, 2vw, 18px);
    font-weight: 500;
    color: #4b5563;
    line-height: 1.6;
}

.max-800 {
    max-width: 800px;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.gcc-school-content {
    margin-top: 50px;
}

.gcc-image-box {
    background: #fff;
    border-radius: 16px;
    padding: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

.gcc-image-box:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.gcc-image-box img {
    border-radius: 10px;
}

/* Responsive Design Overrides */
@media (max-width: 991px) {
    .gcc-school-section {
        padding: 60px 0;
    }

    .gcc-school-content {
        margin-top: 40px;
    }
}

@media (max-width: 767px) {
    .gcc-school-section {
        padding: 50px 0;
    }

    .section-header .title {
        font-size: 26px;
    }

    .gcc-image-box {
        max-width: 400px;
        margin: 0 auto;
    }
}
</style>
