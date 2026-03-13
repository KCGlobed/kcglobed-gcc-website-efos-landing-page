<template>
    <div class="pathway-section ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-header text-center mb-60" data-aos="fade-up">

                        <h2 class="title">GCC <span class="highlight">EXPERIENTIAL LEARNING PATHWAY</span></h2>

                    </div>
                </div>

                <div class="col-lg-10 offset-lg-1" data-aos="zoom-in">
                    <div class="pathway-visual-container">
                        <div class="image-wrapper">
                            <div class="WebImageGraphImag">
                                <img src="https://storage.googleapis.com/static_files_backend/media/images/Group%2051402%20(1).png"
                                    alt="GCC Learning Pathway" class="pathway-graphic">
                            </div>
                            <div class="mobileImageGraphImag">
                                <img src="/img/mobilestair.svg" alt="GCC Learning Pathway" class="pathway-graphic">
                            </div>

                        </div>
                        <!-- Decorative glow effects -->
                        <div class="glow-bg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Static component
</script>

<style scoped>
.pathway-section {
    background: #f9fafb;
    position: relative;
    overflow: hidden;
}

.section-header {
    position: relative;
}

.badge {
    display: inline-block;
    background: rgba(252, 100, 65, 0.1);
    color: #fc6441;
    padding: 8px 18px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
    border: 1px solid rgba(252, 100, 65, 0.2);
}

.title {
    font-size: 32px;
    font-weight: 800;
    color: #0d0d25;
    margin-bottom: 0;
    line-height: 1.2;
}

.highlight {
    background: linear-gradient(135deg, #F1A63E 0%, #F1A63E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.divider {
    width: 60px;
    height: 4px;
    background: #fc6441;
    margin: 20px auto 0;
    border-radius: 10px;
}

/* Visual Container */
.pathway-visual-container {
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.image-wrapper {
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    background: #ffffff;
    border-radius: 30px;
    padding: 10px;
    transition: transform 0.3s ease;
}

.pathway-graphic {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 20px;
    display: block;
}

.mobileImageGraphImag {
    display: none;
}

.pathway-visual-container:hover .image-wrapper {
    transform: translateY(-5px);
}

/* Background Decorations */
.glow-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(circle, rgba(252, 100, 65, 0.08) 0%, rgba(255, 255, 255, 0) 70%);
    z-index: 1;
    pointer-events: none;
}

@media (max-width: 767px) {
    .pathway-section {
        padding: 60px 0;
    }

    .title {
        font-size: 26px;
    }

    .pathway-visual-container {
        padding: 10px;
    }

    .WebImageGraphImag {
        display: none;
    }

    .mobileImageGraphImag {
        display: block;
    }
}
</style>