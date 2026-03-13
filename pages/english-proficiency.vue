<template>
  <div>
    <LayoutTopHeader class="style2-top-header" />
    <LayoutNavbarStyleTwo class="inner-navbar" />
    <CommonInnerPageBanner
      pageTitle="English Proficiency"
      mainTitle="ENGLISH PROFICIENCY"
    />
    <CommonApplicationPagesList
      checkOne="active-check"
      checkTwo="active-check"
    />
    <EnglishProficiency />
    <LayoutMainFooter />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
