<template>
  <div class="international-article-warp ptb-100 bg-EEEEF5">
    <div class="container">
      <div class="section-warp">
        <h2>International Student Stories</h2>
        <div class="section-link">
          <NuxtLink to="/blog" class="article-link">
            <span>View All Articles</span>
            <i class="ti ti-arrow-narrow-right"></i>
          </NuxtLink>
        </div>
      </div>
      <div class="row g-5 align-items-center">
        <div class="col-lg-4">
          <div class="article-item">
            <div class="image">
              <div class="image">
                <img src="~/assets/img/blogs/blog-article1.jpg" alt="image" />
              </div>
            </div>
            <div class="content">
              <span class="title">Finances</span>
              <h3>
                <NuxtLink to="/blog-details">
                  Let us help you plan your finances, from first year to your
                  final year
                </NuxtLink>
              </h3>
              <NuxtLink to="/blog-details" class="news-link">
                <span>Fees & Financial Resource</span>
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
            </div>
          </div>
          <div class="article-item">
            <div class="image">
              <div class="image">
                <img src="~/assets/img/blogs/blog-article2.jpg" alt="image" />
              </div>
            </div>
            <div class="content">
              <span class="title">Finances</span>
              <h3>
                <NuxtLink to="/blog-details">
                  Tuva awards over $11 million in financial aid and scholarships
                </NuxtLink>
              </h3>
              <NuxtLink to="/blog-details" class="news-link">
                <span>Explore Opportunities</span>
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="article-card">
            <div class="image">
              <img src="~/assets/img/blogs/blog-article3.jpg" alt="image" />
            </div>
            <div class="content">
              <span class="title">Convocation</span>
              <h3>
                <NuxtLink to="/blog-details">
                  Get ready for fall convocation
                </NuxtLink>
              </h3>
              <p>Registration started at 24 November.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="article-item style2">
            <div class="image">
              <div class="image">
                <img
                  src="~/assets/img/academics/style2-academic2.jpg"
                  alt="image"
                />
              </div>
            </div>
            <div class="content">
              <span class="title">Finances</span>
              <h3>
                <NuxtLink to="/blog-details">
                  Let us help you plan your finances, from first year to your
                  final year
                </NuxtLink>
              </h3>
              <NuxtLink to="/blog-details" class="news-link">
                <span>Fees & Financial Resource</span>
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
            </div>
          </div>
          <div class="article-item style2">
            <div class="image">
              <div class="image">
                <img
                  src="~/assets/img/academics/style2-academic3.jpg"
                  alt="image"
                />
              </div>
            </div>
            <div class="content">
              <span class="title">Finances</span>
              <h3>
                <NuxtLink to="/blog-details">
                  Tuva awards over $11 million in financial aid and scholarships
                </NuxtLink>
              </h3>
              <NuxtLink to="/blog-details" class="news-link">
                <span>Explore Opportunities</span>
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InternationalStudentStories",
};
</script>
