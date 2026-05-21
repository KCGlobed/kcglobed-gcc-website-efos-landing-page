<template>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NVDGXLR" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1308129784468579&ev=PageView&noscript=1" /></noscript>
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
      innerHTML: `!function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1308129784468579');
    fbq('track', 'PageView');`
    },
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-B2ETHYM6MN'
    },
    {
      innerHTML: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B2ETHYM6MN');`
    },
    {
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NVDGXLR');`
    },
    {
      'data-hid': 'clarity-script',
      innerHTML: `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "wtdnppatos");`
    },
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
