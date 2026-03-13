<template>
  <div class="academic-warp ptb-100">
    <div class="container">
      <div class="section-title">
        <h2 class="reveal2">Latest News & Updates</h2>
      </div>
      <div class="row g-4 align-items-center">
        <div class="col-lg-4">
          <div
            class="news-optional-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="news-item">
              <div class="image">
                <div class="image">
                  <NuxtLink to="/administration-finance">
                    <img
                      src="~/assets/img/academics/style2-academic2.jpg"
                      alt="image"
                    />
                  </NuxtLink>
                </div>
              </div>
              <div class="content">
                <span class="title">Finances</span>
                <h3>
                  <NuxtLink to="/administration-finance">
                    Let us help you plan your finances, from first year to your
                    final year
                  </NuxtLink>
                </h3>
                <NuxtLink to="/administration-finance" class="news-link">
                  <span>Fees & Financial Resource</span>
                  <i class="ti ti-arrow-narrow-right"></i>
                </NuxtLink>
              </div>
            </div>
            <div class="news-item">
              <div class="image">
                <div class="image">
                  <NuxtLink to="/about-overview">
                    <img
                      src="~/assets/img/academics/style2-academic3.jpg"
                      alt="image"
                    />
                  </NuxtLink>
                </div>
              </div>
              <div class="content">
                <span class="title">Finances</span>
                <h3>
                  <NuxtLink to="/about-overview">
                    Tuva awards over $11 million in financial aid and
                    scholarships
                  </NuxtLink>
                </h3>
                <NuxtLink to="/about-overview" class="news-link">
                  <span>Explore Opportunities</span>
                  <i class="ti ti-arrow-narrow-right"></i>
                </NuxtLink>
              </div>
            </div>
            <div class="news-item">
              <div class="image">
                <div class="image">
                  <NuxtLink to="/about-overview">
                    <img
                      src="~/assets/img/academics/style2-academic4.jpg"
                      alt="image"
                    />
                  </NuxtLink>
                </div>
              </div>
              <div class="content">
                <span class="title">Finances</span>
                <h3>
                  <NuxtLink href="about-overview">
                    Exploring academic excellence: A short journey through our
                    programs
                  </NuxtLink>
                </h3>
                <NuxtLink to="/about-overview" class="news-link">
                  <span>Read More</span>
                  <i class="ti ti-arrow-narrow-right"></i>
                </NuxtLink>
              </div>
            </div>
            <NuxtLink to="/blog" class="default-btn">
              View All Articles
              <i class="ti ti-arrow-narrow-right"></i>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-4" data-aos="zoom-in-up" data-aos-delay="200">
          <div class="academic-box style2">
            <div class="image">
              <NuxtLink to="/about-overview">
                <img
                  src="~/assets/img/academics/style2-academic1.jpg"
                  alt="image"
                />
              </NuxtLink>
            </div>
            <div class="content">
              <span>Convocation</span>
              <h3>
                <NuxtLink to="/about-overview">
                  Get ready for fall convocation
                </NuxtLink>
              </h3>
              <p>Registration started at 24 September for convocation.</p>
              <NuxtLink to="/about-overview" class="default-btn">
                Tuva Convocation
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <HomeTwoAcademicSlider />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestNews",
};
</script>
