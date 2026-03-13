<template>
  <div id="overview" class="about-section pt-100 pb-100">
    <div class="container">
      <div class="row align-items-start g-5">
        <!-- Left Column: Header & Content -->
        <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
          <div class="about-header mb-4">
            <div class="logo mb-4">
              <img src="~/assets/Logo/Logo/GCC-School-Logo-White.png" alt="GCC School Logo" class="brand-logo" />
            </div>
            <h3 class="section-title">About GCC School</h3>
            <p class="tagline">The First GCC-Trained Talent Cohort</p>
          </div>

          <div class="about-description">
            <p class="lead-text">
              GCC School is a career-first learning ecosystem built to power the next generation of global finance
              professionals. We exist to bridge the gap between education and employment by aligning potential with
              real-world opportunity; early, ethically, and at scale.
            </p>
            <p class="secondary-text">
              Guided by a vision of a globally trusted and equitable talent ecosystem, we reimagine how careers are
              built. Our inverse education-to-employment model places industry demand at the forefront. It ensures
              learners not only gain knowledge but also step into outcome-assured, future-ready roles with confidence.
            </p>
          </div>
        </div>

        <!-- Right Column: Features & Focus Areas -->
        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
          <div class="industry-alignment-wrapper">
            <div class="section-subtitle-wrapper mb-4">
              <h4 class="section-subtitle">Industry Alignment</h4>
              <p class="subtitle-desc">
                We shape high-potential individuals into professionals ready to create measurable impact across
                global enterprises. We focus on:
              </p>
            </div>

            <div class="features-grid">
              <div class="feature-card" v-for="(item, index) in features" :key="index">
                <div class="icon-wrapper">
                  <i class="fa-solid fa-check"></i>
                </div>
                <span class="feature-text">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Image Section -->
      <div class="row mt-5 pt-4" data-aos="fade-up" data-aos-delay="400">
        <div class="col-12">
          <div class="image-showcase">
            <img src="~/assets/img/abouts/about-gcc.png" alt="About GCC Context" class="img-fluid rounded-shadow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUniversity",
  data() {
    return {
      features: [
        "International GAAP",
        "International GAAS",
        "International Tax Laws",
        "AI Literacy for Finance & Audit",
        "Corporate Communication Skills",
        "Multi-cultural & Behavioral Understanding"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
// Variables for consistent theming
$primary-color: #00306b; // Assuming a deep blue based on education themes, adjust if brand color known
$secondary-color: #f9f9f9;
$accent-color: #dcb13c; // Gold/Yellow accent often used with education/premium
$text-dark: #2c3e50;
$text-light: #666;
$shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.05);
$shadow-md: 0 8px 15px rgba(0, 0, 0, 0.1);
$shadow-hover: 0 10px 25px rgba(0, 0, 0, 0.15);
$border-radius-lg: 16px;
$border-radius-md: 12px;

.about-section {
  background-color: #fff;
  position: relative;
  overflow: hidden;
}

.brand-logo {
  max-height: 60px; // Adjust based on actual logo ratio
  opacity: 0.9;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: $text-dark;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, $accent-color, transparent);
    margin-top: 8px;
    border-radius: 2px;
  }
}

.tagline {
  font-size: 1.25rem;
  font-weight: 500;
  color: $primary-color;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-description {
  .lead-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: lighten($text-dark, 10%);
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .secondary-text {
    font-size: 1rem;
    line-height: 1.7;
    color: $text-light;
    text-align: justify;
  }
}

.industry-alignment-wrapper {
  background: lighten($secondary-color, 1%);
  padding: 2.5rem;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-sm;
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: $text-dark;
  margin-bottom: 0.5rem;
}

.subtitle-desc {
  color: $text-light;
  margin-bottom: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr); // Stack on mobile
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 columns on tablet+
  }
}

.feature-card {
  display: flex;
  align-items: center;
  background: white;
  padding: 1rem 1.25rem;
  border-radius: $border-radius-md;
  box-shadow: $shadow-sm;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;

  .icon-wrapper {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    background: rgba($primary-color, 0.1);
    color: $primary-color;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-size: 0.9rem;
  }

  .feature-text {
    font-weight: 600;
    color: $text-dark;
    font-size: 0.95rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: $shadow-hover;
    border-left-color: $accent-color;

    .icon-wrapper {
      background: $primary-color;
      color: white;
    }
  }
}

.image-showcase {
  position: relative;
  border-radius: $border-radius-lg;
  overflow: hidden;
  box-shadow: $shadow-md;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.02);
  }
}

// Mobile Adjustments
@media (max-width: 991px) {
  .section-title {
    font-size: 2rem;
  }

  .industry-alignment-wrapper {
    padding: 1.5rem;
    margin-top: 2rem;
  }
}
</style>
