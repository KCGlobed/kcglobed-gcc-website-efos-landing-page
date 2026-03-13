<template>
    <div>
        <LayoutTopHeader class="style2-top-header" />
        <LayoutNavbarStyleTwo class="inner-navbar" />
        <CommonInnerPageBanner pageTitle="API Connection Test" mainTitle="API TEST" />

        <ApiTest />

        <LayoutMainFooter />
        <LayoutCopyRight />
    </div>
</template>

<script>
import ApiTest from "~/components/ApiTest.vue";

export default {
    name: "TestApiPage",
    components: {
        ApiTest
    }
};
</script>
