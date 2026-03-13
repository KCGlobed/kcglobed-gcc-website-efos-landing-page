<template>
  <div>
    <LayoutTopHeader />
    <LayoutMainNavbar />
    <!-- <FormsPartnerWithUsForm /> -->
    <!-- <CommonCommingSoon /> -->
    <FormsLoginForm />
    <LayoutMainFooter />
    <!-- <LayoutCopyRight /> -->
  </div>
</template>

<script setup lang="ts">

useHead({
  title: "GCC School | Login",
})

// If already authenticated, redirect straight to profile
onMounted(() => {
  const token = localStorage.getItem('gcc_access_token')
  if (token) {
    window.location.href = '/profile'
  }
})
</script>
