<template>
  <div>
    <LayoutTopHeader class="style2-top-header" />
    <LayoutNavbarStyleTwo class="inner-navbar" />
    <CommonInnerPageBanner
      pageTitle="Program Choice"
      mainTitle="PROGRAM CHOICE"
    />
    <CommonApplicationPagesList
      checkOne="active-check"
      checkTwo="active-check"
      checkThree="active-check"
    />
    <ProgramChoice />
    <LayoutMainFooter />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
