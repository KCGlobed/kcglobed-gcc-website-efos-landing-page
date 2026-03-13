<template>
    <section class="lms-features-area ptb-100">
        <div class="container">
            <div class="section-container bg-F5F5F7 p-4 p-md-5 rounded-20">
                <!-- Section Header -->
                <div class="section-title text-center mb-60">
                    <h2 class="title">LMS PROMINENT <span class="highlight">FEATURES</span></h2>
                </div>

                <!-- Features Grid -->
                <div class="row g-4">
                    <div v-for="(feature, index) in features" :key="index" class="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div class="feature-card h-100">
                            <div class="icon-box">
                                <i :class="feature.icon"></i>
                            </div>
                            <div class="feature-content">
                                <h4 class="card-title">{{ feature.title }}</h4>
                                <p class="desc">{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const features = [
    {
        title: "T.E.E.E Technology",
        description: "Advanced learning algorithms",
        icon: "ti ti-cpu"
    },
    {
        title: "Standard Learning",
        description: "Comprehensive curriculum",
        icon: "ti ti-book"
    },
    {
        title: "Real-Time Score",
        description: "Instant performance tracking",
        icon: "ti ti-trophy"
    },
    {
        title: "Predictive Analytics",
        description: "AI-powered insights",
        icon: "ti ti-chart-line"
    },
    {
        title: "Progress Reports",
        description: "Detailed analytics dashboard",
        icon: "ti ti-file-text"
    },
    {
        title: "Tailored Learning",
        description: "Personalized study paths",
        icon: "ti ti-directions"
    },
    {
        title: "Test Reports",
        description: "Comprehensive assessments",
        icon: "ti ti-clipboard-check"
    },
    {
        title: "E-Book",
        description: "Digital learning resources",
        icon: "ti ti-device-tablet"
    },
    {
        title: "Bite Size Videos",
        description: "Micro-learning content",
        icon: "ti ti-video"
    },
    {
        title: "Personalized Study Planner",
        description: "Smart scheduling tools",
        icon: "ti ti-calendar-event"
    },
    {
        title: "Performance Dashboard",
        description: "Unified analytics view",
        icon: "ti ti-layout-dashboard"
    },
    {
        title: "Unlimited Practice Tests",
        description: "Endless practice opportunities",
        icon: "ti ti-infinity"
    }
];
</script>

<style scoped>
.lms-features-area {
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #f7f7f9;
}

.section-container {
    /* background-color: #ffffff; */
    padding: 60px 40px;
    border-radius: 24px;
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

.highlight,
.text-orange {
    color: #f1a63e;
}

.feature-card {
    background: #ffffff;
    padding: 30px 20px;
    border-radius: 16px;
    text-align: left;
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

/* .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    border-color: #ba1b94;
} */

.icon-box {
    width: 48px;
    height: 48px;
    background-color: #8e44ad;
    color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.icon-box i {
    font-size: 24px;
}

.feature-content .card-title {
    font-size: 17px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
    line-height: 1.3;
    text-transform: none;
}

.feature-content .desc {
    font-size: 14px;
    color: #777;
    margin-bottom: 0;
}

.rounded-20 {
    border-radius: 20px;
}

@media (max-width: 991px) {
    .section-container {
        padding: 40px 20px;
    }

    .main-title {
        font-size: 26px;
    }
}

@media (max-width: 575px) {
    .lms-features-area {
        padding: 40px 0px;
    }

    .title {
        font-size: 24px;
        line-height: 32px;
    }

    .section-container {
        padding: 0px !important;
    }

    .section-title {
        margin-bottom: 30px;
    }

    .feature-card {
        padding: 20px 15px;
    }
}
</style>