<template>
    <div class="admission-process-area ptb-100">
        <!-- Decorative Background Shape -->
        <div class="shape"></div>

        <div class="container">
            <div class="section-title" data-aos="fade-up">
                <span class="sub-title">Admission Process</span>
                <h2>Your Journey to Success</h2>
                <p>Follow these five simple steps to secure your place at GCC School.</p>
            </div>

            <div class="timeline">
                <div v-for="(stage, index) in stages" :key="stage.id" class="timeline-item"
                    :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }" data-aos="fade-up"
                    :data-aos-delay="index * 100">
                    <div class="content">
                        <div class="stage-number">{{ stage.id }}</div>
                        <h3 class="title">{{ stage.title }}</h3>
                        <p>{{ stage.description }}</p>
                        <a v-if="stage.link" :href="stage.link" target="_blank" class="link-btn">
                            {{ stage.linkText }} <i class="ti ti-arrow-narrow-right"></i>
                        </a>
                        <p v-if="stage.note" class="note text-muted mt-2"><small>{{ stage.note }}</small></p>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5" data-aos="fade-up">
                <p class="disclaimer">*Subject to final performance and program conditions.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdmissionStage",
    data() {
        return {
            stages: [
                {
                    id: 1,
                    title: "Online Application",
                    description: "Apply through the official GCC School website.",
                    link: "http://www.gccschool.com",
                    linkText: "www.gccschool.com"
                },
                {
                    id: 2,
                    title: "National Finance Entrance Test (NFET)",
                    description: "Home-Based Test (HBT) conducted at designated centres, aligned with GCC workforce expectations."
                },
                {
                    id: 3,
                    title: "Campus Interview",
                    description: "Shortlisted candidates attend industry-led interviews at the GCC School, Cyber City, Gurugram."
                },
                {
                    id: 4,
                    title: "Job Offer",
                    description: "Selected candidates receive conditional job offers."
                },
                {
                    id: 5,
                    title: "Admission",
                    description: "Confirm admission by completing formalities and onboarding."
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.admission-process-area {
    background-color: #2b3346; // Dark navy background
    position: relative;
    z-index: 1;
    overflow: hidden;
    color: #fff;
}

.shape {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(250, 204, 21, 0.1) 0%, rgba(43, 51, 70, 0) 70%);
    border-radius: 50%;
    z-index: -1;
}

.section-title {
    text-align: center;
    margin-bottom: 60px;

    .sub-title {
        display: inline-block;
        background-color: rgba(255, 255, 255, 0.1);
        color: #facc15;
        padding: 6px 16px;
        border-radius: 30px;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 15px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    h2 {
        font-size: 42px;
        font-weight: 800;
        color: #fff;
        margin-bottom: 15px;
    }

    p {
        max-width: 600px;
        margin: 0 auto;
        color: #d1d5db;
        font-size: 18px;
    }
}

.timeline {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;

    &::after {
        content: '';
        position: absolute;
        width: 2px;
        background: rgba(255, 255, 255, 0.1);
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -1px;
    }
}

.timeline-item {
    padding: 20px 50px;
    position: relative;
    width: 50%;

    &.left {
        left: 0;
        text-align: right;

        .content {
            margin-right: 20px;
            border-radius: 20px 0 20px 20px;

            &::after {
                right: -66px;
            }

            .stage-number {
                right: -105px;
            }
        }
    }

    &.right {
        left: 50%;
        text-align: left;

        .content {
            margin-left: 20px;
            border-radius: 0 20px 20px 20px;

            &::after {
                left: -66px;
            }

            .stage-number {
                left: -105px;
            }
        }
    }

    .content {
        padding: 35px;
        background-color: #fff;
        position: relative;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border-bottom: 4px solid transparent;

        &:hover {
            transform: translateY(-7px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            border-bottom-color: #facc15;

            .title {
                color: #2b3346;
            }
        }

        // Connector Line
        &::before {
            content: '';
            position: absolute;
            top: 45px; // Vertical align with number
            width: 40px;
            height: 2px;
            background-color: rgba(255, 255, 255, 0.2);
            z-index: -1;
        }
    }

    // Fix connector line positioning
    &.left .content::before {
        right: -60px;
    }

    &.right .content::before {
        left: -60px;
    }

    .stage-number {
        position: absolute;
        width: 70px;
        height: 70px;
        background-color: #2b3346;
        border: 2px solid #facc15;
        border-radius: 50%;
        top: 10px; // align with top area
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        color: #facc15;
        font-size: 24px;
        box-shadow: 0 0 0 8px #2b3346; // gap effect using bg color
        transition: all 0.3s ease;
    }

    // Hover effect on item updates the number style
    &:hover .stage-number {
        background-color: #facc15;
        color: #2b3346;
        box-shadow: 0 0 0 8px rgba(250, 204, 21, 0.2);
        transform: scale(1.1);
    }

    .title {
        font-size: 22px;
        font-weight: 800;
        color: #2b3346;
        margin-bottom: 12px;
        transition: color 0.3s;
    }

    p {
        color: #555;
        margin-bottom: 0;
        line-height: 1.7;
        font-size: 16px;
    }

    .link-btn {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        margin-top: 15px;
        color: #d90a2c; // Brand accent or similar
        font-weight: 700;
        text-decoration: none;
        transition: color 0.3s;
        border-bottom: 1px dotted #d90a2c;

        &:hover {
            color: #b90926;

            i {
                margin-left: 5px;
            }
        }

        i {
            transition: margin-left 0.3s;
        }
    }
}

.disclaimer {
    color: #9ca3af;
    font-size: 14px;
    font-style: italic;
    opacity: 0.8;
}

@media screen and (max-width: 768px) {
    .timeline {
        &::after {
            left: 30px;
        }
    }

    .timeline-item {
        width: 100%;
        padding-left: 80px;
        padding-right: 15px;
        margin-bottom: 30px;

        &.left,
        &.right {
            left: 0;
            text-align: left;

            .content {
                margin: 0;
                border-radius: 20px;

                // Remove the horizontal line on mobile or adjust it
                &::before {
                    display: none;
                }
            }

            .stage-number {
                left: -70px;
                right: auto;
                width: 50px;
                height: 50px;
                font-size: 18px;
                box-shadow: 0 0 0 5px #2b3346;
                top: 0;
            }
        }
    }
}
</style>
