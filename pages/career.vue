<template>
    <div>
        <LayoutTopHeader />
        <LayoutMainNavbar />
        <!-- <CommonInnerPageBanner pageTitle="Campus CEO" mainTitle="FACULTY" /> -->
        <FormsCareerForm />
        <!-- <CommonCommingSoon /> -->

        <LayoutMainFooter />
        <LayoutCopyRight />
    </div>
</template>

<script setup lang="ts">
// import { defineComponent } from "vue";

// export default defineComponent({});
useHead({
    title: "GCC School | Career",
})

</script>