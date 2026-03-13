<template>
    <div>
        <LayoutTopHeader />
        <LayoutMainNavbar />
        <CampusLifeCampusBanner />
        <CommonFloorMap />
        <CampusLifeCampusOutcome />
        <CampusLifeCampusGoal />
        <LayoutMainFooter />
        <LayoutCopyRight />
    </div>
</template>

<script setup lang="ts">
// import { defineComponent } from "vue";

// export default defineComponent({});
useHead({
    title: "GCC School | Campus Life",
})
</script>