<template>
    <div class="gcc-commerce-section ptb-100">
        <div class="container">
            <!-- Section Header -->
            <div class="section-header" data-aos="fade-up">
                <h2 class="section-title">

                    WORLD'S FIRST SCHOOL, BUILT BY GCC LEADERS TO SHAPE<br /> <span class="highlight">THE NATION'S
                        FUTURE GCC
                        TALENT</span>
                </h2>
                <h3 class="section-subtitle">

                </h3>
            </div>

            <!-- Features Grid -->
            <div class="d-flex justify-content-center mt-2 gcc-commerce-image">
                <img src="~/assets/img/common/commerse.svg" alt="Why choose gcc school" srcset="">
            </div>

        </div>

        <!-- Background Decorations -->
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
        <div class="bg-shape shape-3"></div>
    </div>
</template>

<script>
export default {
    name: "GccCommerse",
    data() {
        return {
            features: [
                {
                    title: "GCC-backed ecosystem",
                    icon: "ti ti-building-community"
                },
                {
                    title: "Hiring commitment before admission",
                    icon: "ti ti-briefcase"
                },
                {
                    title: "GCC industry-aligned curriculum and delivery pedagogy",
                    icon: "ti ti-school"
                },
                {
                    title: "Job-role readiness assurance",
                    icon: "ti ti-certificate"
                },
                {
                    title: "Finance domain focused",
                    icon: "ti ti-chart-line"
                },
                {
                    title: "In-built 6-month paid internship",
                    icon: "ti ti-briefcase-2"
                },
                {
                    title: "Hyper-personalised learning experience",
                    icon: "ti ti-user-star"
                },
                {
                    title: "Early exposure to corporate culture and work environment",
                    icon: "ti ti-building-skyscraper"
                },
                {
                    title: "Best in Class Industry Instructors",
                    icon: "ti ti-award"
                }
            ]
        };
    }
};
</script>

<style scoped>
/* Section Styling */
.gcc-commerce-section {
    position: relative;
    background: linear-gradient(180deg, #ffffff 0%, #f9f9fb 100%);
    overflow: hidden;
}

/* Background Shapes */
.bg-shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.1;
    z-index: 0;
}

.bg-shape.shape-1 {
    width: 400px;
    height: 400px;
    background: #862E84;
    top: -100px;
    right: -100px;
}

.bg-shape.shape-2 {
    width: 300px;
    height: 300px;
    background: #F1A63E;
    bottom: -80px;
    left: -80px;
}

.bg-shape.shape-3 {
    width: 250px;
    height: 250px;
    background: #463772;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Section Header */
.section-header {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
    z-index: 2;
}

.section-title {
    font-size: 32px;
    font-weight: 700;
    color: #0d0d25;
    margin-bottom: 15px;
    line-height: 1.3;
    text-transform: uppercase;
}

.highlight {
    color: #F1A63E;
}

.section-subtitle {
    font-size: 16px;
    font-weight: 600;
    color: #463772;
    line-height: 1.6;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Features Grid */
.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    position: relative;
    z-index: 2;
}

/* Feature Card */
.feature-card {
    background: #ffffff;
    border: 1px solid rgba(134, 46, 132, 0.1);
    border-radius: 20px;
    padding: 40px 30px;
    position: relative;
    transition: all 0.4s ease;
    box-shadow: 0 10px 30px rgba(70, 55, 114, 0.05);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
}

.feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(134, 46, 132, 0.1);
    border-color: #F1A63E;
}

/* Feature Icon */
.icon-wrapper {
    margin-bottom: 25px;
}

.feature-icon {
    width: 60px;
    height: 60px;
    background: rgba(134, 46, 132, 0.08);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.feature-icon i {
    font-size: 30px;
    color: #862E84;
    transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
    background: #862E84;
}

.feature-card:hover .feature-icon i {
    color: #ffffff;
}

/* Feature Content */
.feature-content h4 {
    font-size: 20px;
    font-weight: 700;
    color: #463772;
    margin: 0;
    line-height: 1.4;
    transition: color 0.3s ease;
}

.feature-card:hover .feature-content h4 {
    color: #862E84;
}

.gcc-commerce-image img {
    max-width: 800px;
    width: 100%;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .section-title {
        font-size: 28px;
    }
}

@media (max-width: 991px) {
    .section-title {
        font-size: 24px;
    }

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .feature-card {
        padding: 30px 20px;
    }
}

@media (max-width: 767px) {
    .features-grid {
        grid-template-columns: 1fr;
    }

    .feature-icon {
        width: 50px;
        height: 50px;
    }

    .feature-icon i {
        font-size: 24px;
    }

    .feature-content h4 {
        font-size: 18px;
    }
}
</style>
