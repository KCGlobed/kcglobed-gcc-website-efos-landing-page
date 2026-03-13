<template>
  <div class="blog-warp-start ptb-100">
    <div class="container">
      <div class="section-title text-start">
        <h2 class="reveal2">Explore Latest News</h2>
      </div>
      <div class="row g-4">
        <div class="col-lg-4">
          <div
            class="image-blog-card mb-30"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <img src="~/assets/img/blogs/blog1.jpg" alt="image" />
            <div class="content">
              <span>Career</span>
              <h3>
                <NuxtLink to="/blog-details">
                  Ontario College Fair is a one-stop shop for prospective
                </NuxtLink>
              </h3>
            </div>
          </div>
          <div
            class="image-blog-card"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            <img src="~/assets/img/blogs/blog2.jpg" alt="image" />
            <div class="content">
              <span>Community</span>
              <h3>
                <NuxtLink to="/blog-details">
                  Tuva lights up Welcome Centre at Lakeshore Campus
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="blog-content-widget">
            <div class="row">
              <div class="col-lg-6" data-aos="zoom-in-up" data-aos-delay="300">
                <div class="content-blog-card pb-30">
                  <span>Career</span>
                  <h3>
                    <NuxtLink to="/blog-details">
                      Nominate a teacher who made a difference through Tuva's
                      Greatest High School Teacher contest
                    </NuxtLink>
                  </h3>
                  <ul class="blog-list">
                    <li>19 Nov 2024</li>
                    <li>3 min read</li>
                  </ul>
                  <NuxtLink to="/blog-details" class="default-btn">
                    Read Article
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-6" data-aos="zoom-in-up" data-aos-delay="400">
                <div class="content-blog-card pb-30">
                  <span>Art & Design</span>
                  <h3>
                    <NuxtLink to="/blog-details">
                      Advanced Television and Film program updated to provide
                      specialized training in virtual production
                    </NuxtLink>
                  </h3>
                  <ul class="blog-list">
                    <li>14 Nov 2024</li>
                    <li>5 min read</li>
                  </ul>
                  <NuxtLink to="/blog-details" class="default-btn">
                    Read Article
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-6" data-aos="zoom-in-up" data-aos-delay="600">
                <div class="content-blog-card pb-30">
                  <span>Community</span>
                  <h3>
                    <NuxtLink to="/blog-details">
                      Tuva Hawks men’s curling team competes in 2024 PointsBet
                      Canada Invitational
                    </NuxtLink>
                  </h3>
                  <ul class="blog-list">
                    <li>20 Nov 2024</li>
                    <li>2 min read</li>
                  </ul>
                  <NuxtLink to="/blog-details" class="default-btn">
                    Read Article
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="content-blog-card pb-30"
                  data-aos="zoom-in-up"
                  data-aos-delay="700"
                >
                  <span>Community</span>
                  <h3>
                    <NuxtLink to="/blog-details">
                      Tuva to celebrate more than 2,500 graduates at fall
                      convocation
                    </NuxtLink>
                  </h3>
                  <ul class="blog-list">
                    <li>12 Nov 2024</li>
                    <li>1 min read</li>
                  </ul>
                  <NuxtLink to="/blog-details" class="default-btn">
                    Read Article
                    <i class="ti ti-arrow-narrow-right"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="blog-donate" data-aos="zoom-in-up" data-aos-delay="700">
              <div class="icon">
                <div class="icon">
                  <img src="~/assets/img/svgs/donate.svg" alt="image" />
                </div>
              </div>
              <div class="content">
                <h6>Help create an Unlimited future for Tuva students.</h6>
                <NuxtLink to="/international-student" class="donate-link">
                  <span>Donate Today</span>
                  <i class="ti ti-arrow-narrow-right"></i>
                </NuxtLink>
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
  name: "LatestNews",
};
</script>
