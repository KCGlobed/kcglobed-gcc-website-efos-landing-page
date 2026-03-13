<template>
  <div class="about-all-pages ptb-100">
    <div class="container">
      <div class="inner-all-pages">
        <ul class="about-pages-list text-start style2">
          <li>
            <NuxtLink to="/administration-overview"> OVERVIEW </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/administration-courses">COURSES</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/administration-admission-requirements">
              ADMISSION REQUIREMENTS
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/administration-finance">
              FEES & FINANCIAL AID
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/administration-availability">
              PROGRAM AVAILABILITY
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdministrationPagesList",
};
</script>
