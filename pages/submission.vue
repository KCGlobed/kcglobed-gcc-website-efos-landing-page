<template>
  <div>
    <LayoutTopHeader class="style2-top-header" />
    <LayoutNavbarStyleTwo class="inner-navbar" />
    <CommonInnerPageBanner pageTitle="Submission" mainTitle="SUBMISSION" />
    <CommonApplicationPagesList
      checkOne="active-check"
      checkTwo="active-check"
      checkThree="active-check"
      checkFour="active-check"
      checkFive="active-check"
    />
    <Submission />
    <LayoutMainFooter />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
