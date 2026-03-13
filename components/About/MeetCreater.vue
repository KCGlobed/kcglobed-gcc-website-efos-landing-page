<template>
    <section class="meet-section py-md-5 py-0 overflow-hidden">
        <div class="container py-5">

            <!-- Creator Card -->
            <div class="row mb-md-5 mb-2  ">
                <div class="col-lg-10">
                    <div class="card creator-card border-0">
                        <div class="row align-items-center g-0">
                            <!-- Image -->
                            <div class="col-md-4 position-relative">
                                <div class="profile-img-wrapper">
                                    <img src="~/assets/img/abouts/kamal.png" class="profile-img creator-img" />
                                    <div class="name-tag shadow-sm">
                                        <h6 class="mb-1 text-purple fw-bold">Dr. Kamal Chhabra</h6>
                                        <p class="mb-0 text-dark small fw-semibold">US CPA & CA</p>
                                        <p class="mb-0 text-muted extra-small">Author • Ex EY & PwC</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="col-md-8 text-white p-4 p-md-5">
                                <h2 class="fw-bold mb-3">Meet the Creator</h2>
                                <p class="lh-base">
                                    We are building a globally trusted and equitable AI-literate
                                    finance niche talent ecosystem that identifies hidden potential
                                    early and connects it directly to real-world global opportunities.
                                    Through India’s first inverse education model—where corporate outcomes
                                    come before classroom learning—we transform selected talent into
                                    future finance leaders with immersive industry exposure and measurable global
                                    impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Director Card -->
            <div class="row justify-content-end mt-md-5 mt-2 pt-4">
                <div class="col-lg-10">
                    <div class="card director-card border-0">
                        <div class="row align-items-center g-0 flex-md-row-reverse">
                            <!-- Image -->
                            <div class="col-md-4 position-relative text-end">
                                <div class="profile-img-wrapper right">
                                    <img src="~/assets/img/abouts/mana.png" class="profile-img director-img" />
                                    <div class="name-tag shadow-sm">
                                        <h6 class="mb-1 text-purple fw-bold">Prof. (Dr.) Manpreet Singh Manna</h6>
                                        <p class="mb-0 text-dark small fw-semibold">Executive Director GCC School</p>
                                        <p class="mb-0 text-muted extra-small">Former Director AICTE</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="col-md-8 text-white p-4 p-md-5 ">
                                <h2 class="fw-bold mb-3 ">
                                    Meet the <br class="d-md-none" /> Executive Director
                                </h2>
                                <p class="lh-base">
                                    With over 32 years of experience in academia, research, and national education
                                    policy, I firmly believes that the future of education must be aligned with real
                                    industry outcomes. Having led transformative initiatives at national platforms and
                                    worked closely with institutions across the nation, regulators, and innovators, I
                                    understands the urgent need to bridge the gap between academic learning and new age
                                    global responsibility in AI Era. GCC School is established as outcome-driven model
                                    that integrates AI, industry immersion, and ethical leadership to create
                                    future-ready finance professionals capable of delivering measurable impact to
                                    society and global enterprises.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.meet-section {
    background: #eeeeee;
}

.text-purple {
    color: #4a148c;
}

.meet-section h2 {
    color: #ffffff;
}

.extra-small {
    font-size: 0.75rem;
}

/* Common Card Styles */
.card {
    border-radius: 25px;
    min-height: 340px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
}

.creator-card {
    background: #731DB4;
    /* Solid Purple from design */
}

.director-card {
    background: #313c4e;
    /* Dark Navy from design */
}

/* Profile Image Handling */
.profile-img-wrapper {
    position: relative;
    z-index: 10;
    padding-left: 20px;
}

.profile-img-wrapper.right {
    padding-left: 0;
    padding-right: 20px;
}

.profile-img {
    height: 380px;
    width: auto;
    object-fit: contain;
    /* margin-top: -40px; */
    /* Overlap top */
    /* margin-bottom: -28px; */
    /* Overlap bottom */
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
}

/* Name Tag Styling */
.name-tag {
    background: #ffffff;
    padding: 12px 20px;
    position: absolute;
    bottom: -15px;
    left: 20px;
    min-width: 300px;
    border-radius: 4px;
    text-align: left;
    z-index: 20;
}

.profile-img-wrapper.right .name-tag {
    left: auto;
    right: 20px;
}

/* Typography */
h2 {
    font-size: 2.5rem;
}

p {
    font-size: 1rem;
    font-weight: 300;
}

/* Responsive Scaling */
@media (max-width: 1200px) {
    .profile-img {
        height: 320px;
    }

    .name-tag {
        min-width: 250px;
    }
}

@media (max-width: 991px) {
    .profile-img {
        height: 280px;
        margin: -28px;

    }

    .profile-img-wrapper {
        padding: 30px 15px;
        text-align: center;
    }

    .profile-img-wrapper.right {
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
    }


    .name-tag {
        position: relative;
        bottom: 0;
        left: 0 !important;
        right: 0 !important;
        /* margin: 20px auto 0; */
        min-width: auto;
        width: 100%;
        max-width: 320px;
        text-align: center;
    }

    h2 {
        font-size: 1.8rem;
    }

    .card {
        min-height: auto;
    }
}

@media (max-width: 768px) {
    .profile-img {
        height: 250px;
    }

    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 0.95rem;
    }
}

@media (max-width: 576px) {
    .profile-img {
        height: 220px;
    }

    .name-tag {
        max-width: 100%;
    }
}
</style>
