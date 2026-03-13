<template>
    <section class="nfet-banner">
        <div class="container">
            <div class="row align-items-center">

                <!-- Left Content -->
                <div class="col-lg-6 left-col">

                    <!-- Badge -->
                    <div class="nfet-badge mb-4">
                        India's National Benchmark for Global Finance Career Readiness
                    </div>

                    <h1 class="nfet-title mb-4">
                        NFET – National Finance Entrance Test
                    </h1>

                    <!-- Description -->
                    <p class="nfet-desc mb-5">
                        An AI-enabled, human-proctored online assessment designed to evaluate whether
                        candidates are academically and analytically prepared for Global Capability Centre
                        (GCC) Audit, Assurance, Risk Management, Accounting and Tax Advisory roles.
                    </p>

                    <!-- CTA Button -->
                    <button class="btn-nfet-apply" data-bs-toggle="modal" data-bs-target="#nfetApplyNowModal">
                        Apply for NFET
                    </button>
                </div>

                <!-- Right Video Section -->
                <div class="col-lg-6 right-col">
                    <div class="video-wrapper">
                        <div class="video-container">
                            <img v-if="!isPlaying"
                                src="https://storage.googleapis.com/static_files_backend/media/images/manna%20sir%20thmbnl%20(1).jpg"
                                alt="NFET Video Thumbnail" class="video-thumb" />
                            <!-- <iframe v-if="isPlaying" src="" frameborder="0" allow="autoplay; encrypted-media"
                                allowfullscreen class="video-iframe"></iframe> -->
                            <div v-if="!isPlaying" class="play-overlay">
                                <div class="play-btn">
                                    <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                                        <polygon points="5,3 19,12 5,21" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="video-label mt-3">
                            <span class="watch-icon">▶</span>
                            Watch: What is NFET?
                        </div> -->
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Apply Now Modal -->
    <CommonDossierModal modal-id="nfetApplyNowModal" modal-title="Apply Now"
        subtitle="Enter your details to complete your application" mode="apply" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isPlaying = ref(false);

function playVideo() {
    isPlaying.value = true;
}

onMounted(() => {
    // onMounted logic removed since it was only for typing animation
});
</script>

<style scoped>
.nfet-banner {
    background: #200832;
    padding: 60px 0 80px;
    /* min-height: 100vh; */
    display: flex;
    align-items: center;
}

.left-col {
    padding-right: 40px;
}

/* Badge */
.nfet-badge {
    border-radius: 9999px;
    border: 1px solid rgba(249, 115, 22, 0.20);
    background: rgba(249, 115, 22, 0.10);
    color: #FB923C;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    padding: 16px 16px;
    display: inline-block;
}


/* Title */
.nfet-title {
    font-size: 52px;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.15;
}

/* Description */
.nfet-desc {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.8;
    max-width: 520px;
}

/* CTA Button */
.btn-nfet-apply {
    display: inline-block;
    border: none;
    background: #D08623;
    border-radius: 9999px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.10);
    font-size: 16px;
    font-weight: 700;
    padding: 14px 36px;
    text-decoration: none;
    transition: all 0.3s ease;
    letter-spacing: 0.3px;
    color: #fff;
    cursor: pointer;
}

.btn-nfet-apply:hover {
    background-color: #e0952e;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(241, 166, 62, 0.35);
    color: #1a0a2e;
}

/* Video Section */
.right-col {
    display: flex;
    justify-content: center;
    align-items: center;
}

.video-wrapper {
    width: 100%;
    max-width: 480px;


}

.video-container {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 16 / 9;
    box-shadow: -5px -13px 30px rgba(225, 218, 218, 0.35);
}

.video-thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease;
    opacity: 0.85;
}

.video-container:hover .video-thumb {
    transform: scale(1.03);
    opacity: 1;
}

.play-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.play-btn {
    width: 64px;
    height: 64px;
    background: rgba(241, 166, 62, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    transition: transform 0.3s ease, background 0.3s ease;
    box-shadow: 0 0 0 12px rgba(241, 166, 62, 0.2);
}

.video-container:hover .play-btn {
    transform: scale(1.1);
    background: #f1a63e;
}

.video-iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.video-label {
    font-size: 15px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.85);
    display: flex;
    align-items: center;
    gap: 8px;
}

.watch-icon {
    color: #f1a63e;
    font-size: 12px;
}

/* Responsive */
@media (max-width: 991px) {
    .nfet-banner {
        padding: 80px 0 60px;
    }

    .left-col {
        padding-right: 15px;
        text-align: center;
        margin-bottom: 40px;
    }

    .nfet-title {
        font-size: 38px;
    }

    .nfet-desc {
        max-width: 100%;
        margin: 0 auto 2rem;
    }

    .nfet-badge {
        text-align: center;
    }
}

@media (max-width: 576px) {
    .nfet-banner {
        padding: 60px 0 50px;
    }

    .nfet-title {
        font-size: 30px;
    }
}
</style>