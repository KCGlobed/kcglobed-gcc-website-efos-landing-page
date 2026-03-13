<template>
  <div class="mission-vision-area ptb-100" style="background: #F7F9FC;">
    <div class="container">
      <div class="section-title text-center mb-50">
        <span class="sub-title">Our Philosophy</span>
        <h2>Driving Excellence & Innovation</h2>
      </div>

      <div class="row g-4 justify-content-center">
        <!-- Vision Card -->
        <div class="col-lg-6 col-md-12">
          <div class="mv-card vision-card h-100">
            <div class="icon-wrapper mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-target">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3>Vision</h3>
            <p>
              To build a globally trusted, equitable, and sustainable talent ecosystem that identifies latent potential
              early, aligns it with real-world opportunity, and develops future-ready leaders capable of delivering
              measurable impact across global enterprises.
            </p>
          </div>
        </div>

        <!-- Mission Card -->
        <div class="col-lg-6 col-md-12">
          <div class="mv-card mission-card h-100">
            <div class="icon-wrapper mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-send">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
            <h3>Mission</h3>
            <p>
              To architect global career pathways by introducing India’s first inverse education model. This is where
              corporate outcomes precede education, ensuring a zero-risk transformation of selected talent into
              market-ready leaders through immersive industry engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MissionAndValue",
};
</script>

<style scoped>
.mission-vision-area {
  position: relative;
  overflow: hidden;
}

.section-title .sub-title {
  display: block;
  color: var(--primary);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.section-title h2 {
  font-size: 36px;
  font-weight: 700;
  color: var(--dark);
}

.mv-card {
  background: #fff;
  padding: 50px 40px;
  border-radius: 20px;
  transition: all 0.5s ease;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  /* Soft premium shadow */
  border: 1px solid rgba(0, 0, 0, 0.02);
}

.mv-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  /* Lift effect */
}

.mv-card .icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: rgba(252, 100, 65, 0.1);
  /* Primary color light bg */
  border-radius: 50%;
  color: var(--primary);
  transition: 0.5s;
}

.mv-card:hover .icon-wrapper {
  background-color: var(--primary);
  color: #fff;
}

.mv-card h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--dark);
}

.mv-card p {
  font-size: 16px;
  line-height: 1.8;
  color: var(--paragraph);
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .mv-card {
    padding: 30px 20px;
  }
}
</style>
