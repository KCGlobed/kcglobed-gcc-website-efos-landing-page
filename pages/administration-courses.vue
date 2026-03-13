<template>
  <div>
    <LayoutTopHeader class="style2-top-header" />
    <LayoutNavbarStyleTwo class="inner-navbar" />
    <CommonInnerPageBanner
      pageTitle="Business Administration - Accounting"
      mainTitle="ADMINISTRATION COURSES"
    />
    <CommonAdministrationPagesList />
    <AdministrationCourses />
    <LayoutMainFooter />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
