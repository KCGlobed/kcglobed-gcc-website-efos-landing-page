<template>
  <div class="find-program-warp style2 pb-100 bg-FAFAFA">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div class="program-content style2">
            <h2 class="reveal2">Find Your Program</h2>
            <p class="reveal2">
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
                  <li><a href="programs.html">All Programs</a> ,</li>
                  <li>
                    <a href="undergraduate-programs.html">Undergraduate</a> ,
                  </li>
                  <li><a href="graduate-programs.html">Graduate</a> ,</li>
                  <li><a href="program-choice.html">Short Program</a> ,</li>
                  <li>
                    <a href="english-proficiency.html">Continuing education</a>
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
                  <a href="programs.html"
                    >Advertising and Marketing Communications</a
                  >
                </h4>
              </div>
              <a href="programs.html" class="icon">
                <i class="ti ti-arrow-narrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="zoom-in-up" data-aos-delay="200">
          <div class="program-images style2">
            <div class="row g-4">
              <div class="col-lg-5">
                <div class="image">
                  <img
                    src="~/assets/img/programs/style2-program1.jpg"
                    alt="image"
                  />
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
              <div class="col-lg-7">
                <div class="big-image">
                  <img
                    src="~/assets/img/programs/style2-program2.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="all-shapes">
      <img
        src="~/assets/img/shapes/program-shape.png"
        class="program-shape"
        alt="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FindYourProgram",
};
</script>
