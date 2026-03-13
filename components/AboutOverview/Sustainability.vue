<template>
  <div class="sustainability-section py-100">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Text Content -->
        <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
          <div class="content-wrapper">
            <div class="section-title-wrapper mb-4">
              <h2 class="title">What is Global Capability Center (GCC)?</h2>
              <div class="title-underline"></div>
            </div>

            <p class="description main-desc">
              As talent meets technology, a new future for enterprise solutions is being shaped in India with over
              <span class="highlight">1,700 Global Capability Centres (GCCs)</span>. These are the backbones of big
              companies,
              and they’ve come a long way.
            </p>

            <p class="description secondary-desc">
              What started as a basic support desk has now evolved into an <span class="highlight">innovation
                powerhouse</span>,
              driving research, design, and development.
            </p>

            <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2202046&reg=3&lang=1#:~:text=India%20at%20the%20Heart%20of,faster%20than%20overall%20GCC%20setups."
              target="_blank" rel="noopener noreferrer" class="premium-btn mt-4">
              <span>Read More</span>
              <i class="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
          </div>
        </div>

        <!-- Image Grid -->
        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
          <div class="image-composition">
            <div class="image-card main-img">
              <img src="~/assets/img/abouts/about-gcc2.png" alt="GCC Innovation" />
            </div>
            <div class="image-card secondary-img">
              <img src="~/assets/img/abouts/about-gcc3.png" alt="GCC Growth" />
            </div>
            <!-- Decoratiive Element -->
            <div class="dots-pattern"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sustainability",
};
</script>

<style scoped lang="scss">
// Theme Variables
$primary-color: #00306b;
$accent-color: #dcb13c;
$text-dark: #2c3e50;
$text-muted: #5a6a7e;
$white: #ffffff;
$radius: 16px;

.sustainability-section {
  background: #F7F9FC; // Professional light blue-gray
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 100px;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: $text-dark;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: $accent-color;
  border-radius: 2px;
}

.description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: $text-muted;
  margin-bottom: 1.5rem;

  &.main-desc {
    font-weight: 500;
    color: darken($text-muted, 15%);
  }

  .highlight {
    color: $primary-color;
    font-weight: 700;
  }
}

.premium-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 30px;
  background: $primary-color;
  color: $white;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba($primary-color, 0.3);

  &:hover {
    background: darken($primary-color, 5%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba($primary-color, 0.4);
    color: $white;

    i {
      transform: translateX(5px);
    }
  }

  i {
    transition: transform 0.3s ease;
  }
}

// Creative Image Composition
.image-composition {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: center;
  position: relative;
  height: auto;
  z-index: 1;
}

.image-card {
  position: relative;
  overflow: hidden;
  border-radius: $radius;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    aspect-ratio: 3/4;
    /* Consistent portrait ratio for elegance */
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
}

.main-img {
  // Left image, pushed down slightly
  margin-top: 40px;
}

.secondary-img {
  // Right image, pulled up slightly
  margin-top: -40px;
}

.dots-pattern {
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 150px;
  height: 150px;
  background-image: radial-gradient($accent-color 2px, transparent 2px);
  background-size: 20px 20px;
  opacity: 0.2;
  z-index: -1;
}

// Media Queries
@media (max-width: 991px) {
  .title {
    font-size: 2rem;
  }

  .image-composition {
    margin-top: 3rem;
    gap: 16px;
  }

  .main-img {
    margin-top: 20px;
  }

  .secondary-img {
    margin-top: -20px;
  }
}

@media (max-width: 576px) {
  .image-composition {
    display: block; // Stack vertically on mobile
  }

  .image-card {
    margin-bottom: 20px;
    width: 100%;

    img {
      aspect-ratio: 16/9; // Wider on mobile
    }
  }

  .main-img,
  .secondary-img {
    margin-top: 0;
  }

  .dots-pattern {
    display: none;
  }
}
</style>
