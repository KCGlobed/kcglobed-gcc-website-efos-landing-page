<template>
  <div>
    <LayoutTopHeader class="style2-top-header" />
    <LayoutNavbarStyleTwo class="inner-navbar" />
    <CommonInnerPageBanner
      pageTitle="Student life - Book Store"
      mainTitle="BOOK STORE"
    />
    <BookStore />
    <CommonUniversityOfExcellence />
    <CommonHelpCreate class="pt-100" />
    <LayoutMainFooter />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
