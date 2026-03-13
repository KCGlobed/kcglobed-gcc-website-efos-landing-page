<template>
    <div class="ed-message-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="ed-message-content pe-lg-5" data-aos="fade-right">
                        <!-- <div class="section-tag mb-3">
                            <span class="badge">Message from ED Desk</span>
                        </div> -->
                        <h2 class="title mb-4">A Commitment to <span class="highlight">Excellence</span></h2>
                        <div class="message-text">
                            <p>
                                The NFET Entrance Exam marks an important milestone for commerce students to discover
                                their potential and prepare for future success.
                                At GCC School, we are committed to building strong fundamentals, critical thinking, and
                                global career readiness.
                                We extend our best wishes to all aspirants as they take this confident step toward their
                                academic and professional journey.
                            </p>

                        </div>

                        <!-- <div class="cta-box mt-5">
                            <NuxtLink to="/nfet" class="default-btn">
                                Join NFET Entrance Exam
                                <i class="ti ti-arrow-narrow-right"></i>
                            </NuxtLink>
                        </div> -->

                        <div class="signature mt-5">
                            <h5 class="mb-0">Prof. (Dr.) Manpreet Singh Manna</h5>
                            <span>Executive Director, <strong>GCC School</strong><br />Former Director,
                                <strong>AICTE</strong></span>

                        </div>




                    </div>
                </div>

                <div class="col-lg-6 col-md-12 mt-5 mt-lg-0">
                    <div class="video-box-wrapper" data-aos="fade-left">
                        <div class="video-preview-box shadow-lg">
                            <img src="https://storage.googleapis.com/static_files_backend/media/images/manna%20sir%20thmbnl%20(1).jpg"
                                alt="ED Message Video Preview" class="preview-img">
                            <div class="play-btn-wrap">
                                <div class="play-btn">
                                    <i class="ti ti-player-play-filled"></i>
                                </div>
                            </div>

                        </div>
                        <!-- Decorative elements -->
                        <div class="shape-1"></div>
                        <div class="shape-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Logic for video modal if needed later
</script>

<style scoped>
.ed-message-area {
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
}

.section-tag .badge {
    background: rgba(248, 202, 77, 0.1);
    color: #c49a1d;
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px solid rgba(248, 202, 77, 0.2);
}

.title {
    font-size: 32px;
    font-weight: 700;
    color: #0d0d25;
    line-height: 1.2;
    text-transform: uppercase;
}

.highlight {
    color: #F1A63E;
}

.message-text p {
    font-size: 17px;
    line-height: 1.8;
    color: #595970;
    margin-bottom: 20px;
}

.signature h5 {
    font-size: 22px;
    font-weight: 800;
    color: #0d0d25;
}

.signature span {
    color: #fc6441;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Video Section styling */
.video-box-wrapper {
    position: relative;
    padding: 15px;
}

.video-preview-box {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.preview-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    transition: transform 0.5s ease;
}

.video-preview-box:hover .preview-img {
    transform: scale(1.05);
}

.play-btn-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}

.play-btn {
    width: 80px;
    height: 80px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #fc6441;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.video-preview-box:hover .play-btn {
    transform: scale(1.1);
    background-color: #fc6441;
    color: #ffffff;
}

.video-caption {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: rgba(13, 13, 37, 0.7);
    backdrop-filter: blur(5px);
    color: #fff;
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    z-index: 2;
}

/* Shapes */
.shape-1 {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 150px;
    height: 150px;
    background-color: rgba(248, 202, 77, 0.15);
    border-radius: 50%;
    z-index: 0;
}

.shape-2 {
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 250px;
    height: 250px;
    background-color: rgba(252, 100, 65, 0.05);
    border-radius: 50%;
    z-index: 0;
}

.cta-box .default-btn {
    background-color: #A13E99;
}

@media (max-width: 1200px) {
    .title {
        font-size: 28px;
    }
}

@media (max-width: 991px) {
    .title {
        font-size: 24px;
    }

    .message-text p {
        font-size: 16px;
    }

    .title {
        text-align: center;
    }
}
</style>