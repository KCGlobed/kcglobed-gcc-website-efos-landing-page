<template>
    <div id="vision-mission" class="vision-mission-area ptb-100 bg-f9f9f9">
        <div class="container">
            <div class="section-title text-center">
                <span class="sub-title">Guiding Principles</span>
                <h2>Vision & Mission</h2>
            </div>
            <div class="row h-100">
                <!-- Vision -->
                <div class="col-lg-6 col-md-12 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="vm-card vision-style h-100">
                        <div class="card-content">
                            <div class="header-flex">
                                <div class="icon-box">
                                    <i class="ti ti-eye"></i>
                                </div>
                                <h3>Our Vision</h3>
                            </div>
                            <p>
                                To build a globally trusted, equitable, and sustainable talent ecosystem that identifies
                                latent potential early,
                                aligns it with real-world opportunity, and develops future-ready leaders capable of
                                delivering measurable impact
                                across global enterprises.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Mission -->
                <div class="col-lg-6 col-md-12 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="vm-card mission-style h-100">
                        <div class="card-content">
                            <div class="header-flex">
                                <div class="icon-box">
                                    <i class="ti ti-target"></i>
                                </div>
                                <h3>Our Mission</h3>
                            </div>
                            <p>
                                To democratize access to global careers by pioneering an inverse education-to-employment
                                model where verified
                                industry demand precedes learning, ensuring a zero-risk, outcome-assured pathway that
                                transforms high-potential
                                individuals into day-one deployable, ethically grounded, globally credentialed
                                professionals
                                through deep
                                industry immersion, digital excellence, and applied experiential learning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Values -->
            <div class="values-section mt-5" data-aos="fade-up" data-aos-delay="400">
                <div class="section-title text-center mb-4">
                    <h2>Values of GCC School</h2>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="value-item">
                            <div class="value-icon">
                                <i class="ti ti-user-check"></i>
                            </div>
                            <div class="value-text">
                                <h4>Dignity</h4>
                                <p>Respect for every individual.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="value-item">
                            <div class="value-icon">
                                <i class="ti ti-bulb"></i>
                            </div>
                            <div class="value-text">
                                <h4>Transparency</h4>
                                <p>Clarity in actions and outcomes.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="value-item">
                            <div class="value-icon">
                                <i class="ti ti-heart"></i>
                            </div>
                            <div class="value-text">
                                <h4>Empathy</h4>
                                <p>People-first thinking.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="value-item">
                            <div class="value-icon">
                                <i class="ti ti-users"></i>
                            </div>
                            <div class="value-text">
                                <h4>Inclusivity</h4>
                                <p>Opportunity for all.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="value-item">
                            <div class="value-icon">
                                <i class="ti ti-bolt"></i>
                            </div>
                            <div class="value-text">
                                <h4>Agility</h4>
                                <p>Fast, flexible, future-ready.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="value-item">
                            <div class="value-icon">
                                <i class="ti ti-shield-check"></i>
                            </div>
                            <div class="value-text">
                                <h4>Ethical Practice</h4>
                                <p>Integrity in everything we do.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VisionMission",
};
</script>

<style scoped>
.bg-f9f9f9 {
    background-color: #f8f9fa;
    /* Slightly cleaner gray */
}

/* Section Titles */
.sub-title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #f5a623;
    text-transform: uppercase;
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.section-title h2 {
    color: #38003c;
    font-weight: 700;
}

/* Vision & Mission Cards */
.vm-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    height: 100%;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid #edf2f7;
}

.vm-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.card-content {
    padding: 40px;
    position: relative;
    z-index: 2;
}

.header-flex {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    gap: 20px;
}

.icon-box {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    flex-shrink: 0;
}

.vm-card h3 {
    font-size: 28px;
    margin: 0;
    font-weight: 700;
}

.vm-card p {
    color: #555;
    line-height: 1.7;
    font-size: 16px;
    margin-bottom: 0;
}

/* Variant Styles */
.vision-style {
    border-top: 5px solid #38003c;
}

.vision-style .icon-box {
    background: rgba(56, 0, 60, 0.08);
    color: #38003c;
}

.vision-style h3 {
    color: #38003c;
}

.mission-style {
    border-top: 5px solid #f5a623;
}

.mission-style .icon-box {
    background: rgba(245, 166, 35, 0.1);
    color: #f5a623;
}

.mission-style h3 {
    color: #38003c;
}

/* Values Section */
.value-item {
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    border: 1px solid #eee;
    display: flex;
    align-items: flex-start;
    /* Left align icon */
    gap: 20px;
    transition: all 0.3s ease;
    height: 100%;
}

.value-item:hover {
    background: #fff;
    border-color: #f5a623;
    box-shadow: 0 5px 15px rgba(245, 166, 35, 0.1);
}

.value-icon {
    font-size: 24px;
    color: #f5a623;
    background: rgba(245, 166, 35, 0.08);
    width: 50px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.value-text h4 {
    font-size: 18px;
    margin-bottom: 5px;
    color: #000;
    font-weight: 700;
}

.value-text p {
    margin: 0;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
}

/* Responsive */
@media (max-width: 767px) {
    .header-flex {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    .value-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}
</style>
