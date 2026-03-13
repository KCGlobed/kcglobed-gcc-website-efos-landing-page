<template>
  <div class="culture-warp ptb-100">
    <div class="container">
      <div class="section-title">
        <p class="subtitle">The Right Time is Right Now</p>
        <h2>INDIA - GCC CAPITAL OF <span class="highlight">THE WORLD</span></h2>
        <p class="subtitle">India isn’t just supporting the world’s biggest companies — it’s leading them.

          <br /> Global Capability Centres (GCCs) are turning Indian finance professionals into global decision-makers.
        </p>
      </div>

      <div class="row justify-content-center">
        <!-- Card 1 -->
        <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="stats-card">
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="9" y1="22" x2="9" y2="22.01"></line>
                <path d="M8 6h.01"></path>
                <path d="M16 6h.01"></path>
                <path d="M12 6h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
              </svg>
            </div>
            <h3 class="stat-number">1,950+</h3>
            <h4 class="stat-title">Global Capability Centres in India</h4>
            <p class="stat-desc">Making it the world's leading GCC hub</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="stats-card">
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 class="stat-number">1+ Lakh</h3>
            <h4 class="stat-title">New Jobs in 2024-25</h4>
            <p class="stat-desc">Created by GCCs in India alone</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div class="stats-card">
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <h3 class="stat-number">$300B</h3>
            <h4 class="stat-title">Industry Size by 2026</h4>
            <p class="stat-desc">Professional services sector projection</p>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="500">
          <div class="stats-card">
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                </path>
              </svg>
            </div>
            <h3 class="stat-number">44%</h3>
            <h4 class="stat-title">End-to-End Operations</h4>
            <p class="stat-desc">GCCs running complete global operations</p>
          </div>
        </div>
      </div>

      <div class="source-text text-center mt-3">
        <p>At GCC School, you don't wait for the future - You step into it. </p>
      </div>
      <!-- <div class="info-button d-flex justify-content-center mt-4">
        <NuxtLink to="#" class="default-btn secodary-btn">
          Discover the GCC Advantage →
          <i class="ti ti-arrow-narrow-right"></i>
        </NuxtLink>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CultureWarp",
};
</script>

<style scoped>
.culture-warp {
  /* background-color: #862E84; */
  background: url("~/assets/img/heros/layer.svg");
  background-size: cover;
  background-position: center;
  /* Light background for contrast */
}

.section-title {
  margin-bottom: 50px;
  text-align: center;
}

.section-title h2 {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
  text-transform: uppercase;
  line-height: 1.3;
}

.highlight {
  color: #F1A63E;
}

.section-title .subtitle {
  font-size: 16px;
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 400;
}

.stats-card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: transform 0.3s ease;
  border: 1px solid #eee;
}

.stats-card:hover {
  transform: translateY(-5px);
}

.icon-box {
  width: 50px;
  height: 50px;
  background-color: #F1A63E;
  /* Light blueish gray background for icons */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #fff;
  /* Brand color or dark blue */
}

.stat-number {
  font-size: 28px;
  font-weight: 800;
  color: #862E84;
  /* Gold/Orange accent color */
  margin-bottom: 10px;
}

.stat-title {
  font-size: 16px;
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
  line-height: 1.4;
}

.stat-desc {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
  margin: 0;
}

.source-text p {
  font-size: 14px;
  color: #fff;
}
</style>
