<template>
  <div>
    <LayoutTopHeader class="style2-top-header" />
    <LayoutNavbarStyleTwo class="inner-navbar" />
    <CommonInnerPageBanner
      pageTitle="Document Upload"
      mainTitle="DOCUMENT UPLOADS"
    />
    <CommonApplicationPagesList
      checkOne="active-check"
      checkTwo="active-check"
      checkThree="active-check"
      checkFour="active-check"
    />
    <DocumentUpload />
    <LayoutMainFooter />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
