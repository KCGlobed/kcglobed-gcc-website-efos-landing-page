<template>
    <div>
        <LayoutTopHeader />
        <LayoutMainNavbar />
        <!-- <CommonCommingSoon /> -->
        <NfetBanner />
        <NfetWhoCanApply />
        <NfetForGraduate />
        <NfetSyllbus />
        <NfetExamStructure />
        <NfetTestingWindow />
        <!-- <NfetDiagonstic /> -->

        <NfetGuidline />
        <NfetPartner />
        <NfetFinanceCareer />

        <LayoutMainFooter />
        <LayoutCopyRight />
    </div>
</template>

<script setup lang="ts">
import NfetBanner from '~/components/nfet/NfetBanner.vue';


useHead({
    title: "GCC School | NFET",
})
</script>