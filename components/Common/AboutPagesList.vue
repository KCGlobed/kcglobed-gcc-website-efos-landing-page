<template>
  <div class="about-all-pages pt-100">
    <div class="container">
      <div class="inner-all-pages">
        <ul class="about-pages-list">
          <!-- <li>
            <NuxtLink to="/about-overview">OVERVIEW</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-campus">CAMPUS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-mission-values">MISSION & VALUES</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-history">UNIVERSITY HISTORY</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/facilities">Facilities</NuxtLink>
          </li> -->

          <li><a href="javascript:void(0)" @click="scrollToSection('overview')">Overview</a></li>
          <li><a href="javascript:void(0)" @click="scrollToSection('vision-mission')">Vision & Mission</a></li>
          <li><a href="javascript:void(0)" @click="scrollToSection('leadership')">Leadership</a></li>
          <li><a href="javascript:void(0)" @click="scrollToSection('our-legacy')">Our Legacy</a></li>
          <li><a href="javascript:void(0)" @click="scrollToSection('our-mentor')">Our Mentors</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPagesList",
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
};
</script>