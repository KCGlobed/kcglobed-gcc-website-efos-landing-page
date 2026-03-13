<template>
  <div class="values-area ptb-100 bg-white">
    <div class="container">
      <div class="section-title text-center mb-50">
        <span class="sub-title">GCC DNA</span>
        <h2>Our Core Values</h2>
        <p class="mt-2 text-muted fw-medium fst-italic">“We don’t teach students – We shape them into professionals.”
        </p>
      </div>

      <div class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="(value, index) in values" :key="index">
          <div class="value-card h-100" :style="{ background: value.bg }">
            <div class="icon-box" v-html="value.icon"></div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const values = [
  {
    title: "Ethical Practice",
    description: "Upholding highest ethical standards.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: "Transparency",
    description: "Working with cutting-edge technology.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
    bg: 'linear-gradient(135deg, #2AF598 0%, #009EFD 100%)'
  },
  {
    title: "Innovation",
    description: "Inspiring professionals to think creatively and shape the future.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 9.5 6 4.65 4.65 0 0 0 7.5 11.5 5.51 5.51 0 0 0 10 14h5.09z"></path></svg>',
    bg: 'linear-gradient(135deg, #B721FF 0%, #21D4FD 100%)'
  },
  {
    title: "Empathy",
    description: "Transforming lives through learning and providing opportunities.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
    bg: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)'
  },
  {
    title: "Sustainability",
    description: "Cultivate responsible leaders who create enduring value for business and society.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>',
    bg: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
  },
  {
    title: "Social Impact",
    description: "Empower professionals to drive meaningful change.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    bg: 'linear-gradient(135deg, #F83600 0%, #FE8C00 100%)'
  },
];
</script>

<style scoped>
.values-area {
  position: relative;
  z-index: 1;
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

.value-card {
  padding: 40px 30px;
  border-radius: 20px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  color: #fff;
  border: none;
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.icon-box {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #fff;
  margin-bottom: 25px;
  transition: 0.4s;
  backdrop-filter: blur(5px);
}

.value-card:hover .icon-box {
  background-color: #fff;
  color: var(--primary);
  /* Or keep it white depending on loop */
  transform: scale(1.1);
}

/* Specific text color override for lighter backgrounds if needed */
.value-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
}

.value-card p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .value-card {
    padding: 30px 20px;
    text-align: center;
  }

  .icon-box {
    margin: 0 auto 20px;
  }
}
</style>
