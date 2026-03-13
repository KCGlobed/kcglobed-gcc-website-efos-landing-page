<template>
  <NuxtLayout></NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const canonicalUrl = computed(() => `https://www.gccschool.com${route.path}`);
useHead({
  title: "GCC School",
  meta: [
    { name: "description", content: "GCC School" }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "GCC School",
        "url": "https://gccschool.com/",
        "logo": "https://gccschool.com/_nuxt/GCC-School-Logo-White.BHjiCYnG.jpeg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919773576111",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "Hindi"]
        },
        "sameAs": [
          "https://www.facebook.com/share/187jgT5gev/",
          "https://x.com/gccschool2026",
          "https://www.instagram.com/gccschool?igsh=MXQxc2JhazAwcG55cQ==",
          "https://www.youtube.com/@GCCSchool",
          "https://www.linkedin.com/company/gccschool/"
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "GCC School",
        "image": "https://gccschool.com/_nuxt/information2.Ck4B6ICy.jpg",
        "@id": "",
        "url": "https://gccschool.com/",
        "telephone": "+919773576111",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "16th Floor, Tower-B, DLF Building No. 09",
          "addressLocality": "Gurugram",
          "postalCode": "122002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.4950679,
          "longitude": 77.0892303
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:30",
          "closes": "06:30"
        }
      })
    }
  ]
});
</script>
