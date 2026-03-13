<template>
  <div class="blog-small-widget">
    <div class="search-widget all-box">
      <h4>Search</h4>
      <div class="blog-input">
        <form>
          <input type="text" class="form-control" placeholder="Find article" />
          <button class="search-btn" type="submit">
            <img src="~/assets/img/svgs/search.svg" alt="image" />
          </button>
        </form>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <span class="search-list">Popular Search:</span>
        </div>
        <div class="col-lg-8">
          <ul class="program-list">
            <li><a href="#">All Programs</a> ,</li>
            <li><a href="#">Undergraduate</a> ,</li>
            <li>
              <a href="#">Continuing education</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="categories-widget all-box">
      <h4>Categories</h4>
      <ul class="categories-list">
        <li>
          <a href="#">Academic</a>
        </li>
        <li>
          <a href="#">Student Information</a>
        </li>
        <li>
          <a href="#">Admission</a>
        </li>
        <li>
          <a href="#">Online education</a>
        </li>
        <li>
          <a href="#">Future student</a>
        </li>
        <li>
          <a href="#">Education</a>
        </li>
      </ul>
    </div>
    <div class="all-box articles-widget">
      <h4>Latest Articles</h4>
      <div class="blog-article-item">
        <span>Community</span>
        <h3>
          <NuxtLink to="/blog-details">
            Tuva to celebrate more than 2,500 graduates at fall convocation
          </NuxtLink>
        </h3>
        <ul class="article-list">
          <li>19 Nov 2024</li>
          <li>5 min read</li>
        </ul>
      </div>
      <div class="blog-article-item">
        <span>Community</span>
        <h3>
          <NuxtLink to="/blog-details">
            Mount Forest resident awarded $40,000 Schulich Builders Scholarship
          </NuxtLink>
        </h3>
        <ul class="article-list">
          <li>15 Nov 2024</li>
          <li>1 min read</li>
        </ul>
      </div>
      <div class="blog-article-item">
        <span>Community</span>
        <h3>
          <NuxtLink to="/blog-details">
            Tuva hosts HDSB post secondary exploration event
          </NuxtLink>
        </h3>
        <ul class="article-list">
          <li>16 Nov 2024</li>
          <li>4 min read</li>
        </ul>
      </div>
    </div>
    <div class="all-box tag-widget">
      <h4>Tags</h4>
      <ul class="tag-list">
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#">Education</a>
        </li>
        <li>
          <a href="#">Uni History</a>
        </li>
        <li>
          <a href="#">Art & Design</a>
        </li>
        <li>
          <a href="#">Online Education</a>
        </li>
        <li>
          <a href="#">Convocation</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#">Job</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogWidget",
};
</script>
