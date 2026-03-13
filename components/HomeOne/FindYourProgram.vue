<template>
  <div class="find-program-warp pb-80">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-6" data-aos="zoom-in-up" data-aos-delay="200">
          <div class="program-images">
            <div class="row g-4">
              <div class="col-lg-5 col-md-6">
                <div class="image reveal2">
                  <img src="~/assets/img/programs/program1.jpg" alt="image" />
                </div>
                <div class="logo-content">
                  <div class="logo">
                    <div class="logo">
                      <img
                        src="~/assets/img/programs/program-logo1.png"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div class="content">
                    <h2>156+</h2>
                    <p>Programs Available For Students</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-6">
                <div class="big-image reveal3">
                  <img src="~/assets/img/programs/program2.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <div class="program-content">
            <h2 class="reveal3">Find Your Program</h2>
            <p>
              Welcome to our university's website! Use the search bar below to
              explore our diverse range of programs and discover the perfect
              academic path that suits your interests and career goals.
            </p>
            <div class="program-input">
              <form>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Find your program like “Graphic Design”"
                />
                <button class="search-btn" type="submit">
                  <img src="~/assets/img/svgs/search.svg" alt="image" />
                </button>
              </form>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <span class="search-list">Popular Search:</span>
              </div>
              <div class="col-lg-9">
                <ul class="program-list">
                  <li><NuxtLink to="/programs">All Programs</NuxtLink> ,</li>
                  <li>
                    <NuxtLink to="/undergraduate-programs">
                      Undergraduate
                    </NuxtLink>
                    ,
                  </li>
                  <li>
                    <NuxtLink to="/graduate-programs">Graduate</NuxtLink> ,
                  </li>
                  <li>
                    <NuxtLink to="/program-choice">Short Program</NuxtLink> ,
                  </li>
                  <li>
                    <NuxtLink to="/english-proficiency">
                      Continuing education
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>

            <div class="program-item">
              <div class="image">
                <div class="image">
                  <img
                    src="~/assets/img/programs/program-small1.jpg"
                    alt="image"
                  />
                </div>
              </div>
              <div class="content">
                <span>Popular Program</span>
                <h4>
                  <NuxtLink to="/programs">
                    Advertising and Marketing Communications
                  </NuxtLink>
                </h4>
              </div>
              <NuxtLink to="/programs" class="icon">
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
  name: "FindYourProgram",
};
</script>
