<template>
  <div class="thank-you-page">
   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NVDGXLR" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
    <div class="bg-layer" aria-hidden="true"></div>

    <main class="page">
      <div class="card" role="main" v-aos="'zoom-in'">
        <!-- Left: Icon & Presence -->
        <div class="left-panel">
          <div class="icon-wrap">
            <div class="ring"></div>
            <div class="check-circle">
              <svg class="check-svg" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <!-- <div class="presence">
            <div class="dot"></div>
            <span>Team is online</span>
          </div> -->
        </div>

        <!-- Divider (desktop only) -->
        <div class="vertical-divider"></div>

        <!-- Right: Content -->
        <div class="right-panel">
          <div class="badge">✦ Confirmed</div>

          <h1 class="heading">Payment <span class="yellow">Successful!</span></h1>

          <p class="desc">
            Your payment has been processed successfully.<br>
            A confirmation email will be sent to your registered email address.
          </p>

          <div v-if="paymentId" class="ref-box">
            <span class="ref-label">Payment ID:</span>
            <span class="ref-value">#{{ paymentId }}</span>
          </div>

          <div class="help-section">
            <span class="help-label">Need help?</span>
            <a href="mailto:info@gccschool.com">info@gccschool.com</a>
            <span class="pipe"></span>
            <a href="tel:+919773576111">+91 97735 76111</a>
          </div>

          <!-- <div class="mt-4">
            <NuxtLink to="/" class="btn-home">Return to Home</NuxtLink>
          </div> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const paymentId = route.query.payment_id as string;

// Page Metadata
useHead({
  title: 'Thank You — GCC School',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap'
    }
  ],
  script: [
    {
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NVDGXLR');`
    }
  ]
});

onMounted(() => {
  // const win = window as any;
  // if (win.fbq) {
  //   win.fbq('track', 'Purchase', {
  //     value: 2950.00,
  //     currency: 'INR'
  //   });
  // }
});
</script>

<style scoped>
.thank-you-page {
  --bg-deep: #160828;
  --card-bg: rgba(255, 255, 255, 0.03);
  --card-border: rgba(160, 110, 230, 0.12);
  --accent-purple: #9b7fd4;
  --accent-yellow: #f5b731;
  --text-white: #f0eaf8;
  --text-muted: rgba(210, 195, 240, 0.6);
  --green-dot: #3ecf75;

  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
  background: var(--bg-deep);
  color: var(--text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* ── Background Pattern ── */
.bg-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    repeating-linear-gradient(45deg,
      transparent 0px, transparent 22px,
      rgba(130, 80, 210, 0.05) 22px, rgba(130, 80, 210, 0.05) 23px,
      transparent 23px, transparent 45px),
    repeating-linear-gradient(135deg,
      transparent 0px, transparent 22px,
      rgba(130, 80, 210, 0.05) 22px, rgba(130, 80, 210, 0.05) 23px,
      transparent 23px, transparent 45px);
}

.page {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 900px;
  padding:15px 20px;
}

.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
  /* Horizontal on laptop */
  align-items: stretch;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}

/* ── Left Panel ── */
.left-panel {
  flex: 0 0 280px;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.icon-wrap {
  position: relative;
  width: 120px;
  height: 120px;
}

.ring {
  position: absolute;
  inset: -10px;
  border: 1.5px solid rgba(160, 110, 230, 0.25);
  border-radius: 50%;
  animation: pulse 2.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }

  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.check-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid rgba(160, 110, 230, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.check-svg {
  width: 40px;
  height: 40px;
  fill: none;
  stroke: var(--accent-purple);
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.presence {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 16px;
  border-radius: 30px;
}

.dot {
  width: 8px;
  height: 8px;
  background: var(--green-dot);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--green-dot);
}

.presence span {
  font-size: 13px;
  color: var(--text-muted);
}

.vertical-divider {
  width: 1px;
  background: rgba(160, 110, 230, 0.1);
}

/* ── Right Panel ── */
.right-panel {
  flex: 1;
  padding: 60px 60px 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13px;
}

.badge {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--accent-purple);
  background: rgba(160, 110, 230, 0.1);
  width: fit-content;
  padding: 4px 14px;
  border-radius: 20px;
  font-weight: 600;
}

.heading {
  font-size: 40px;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
  color: white;
}

.yellow {
  color: var(--accent-yellow);
}

.desc {
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0;
}

.hl {
  color: white;
  font-weight: 500;
}

.ref-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px dashed rgba(160, 110, 230, 0.3);
  padding: 12px 20px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
}

.ref-label {
  font-size: 12px;
  color: var(--text-muted);
}

.ref-value {
  font-size: 15px;
  color: var(--accent-yellow);
  font-family: monospace;
  font-weight: 700;
}
  
.help-section {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  margin-top: 3px;
}

.help-label {
  color: var(--text-muted);
}

.help-section a {
  color: var(--accent-yellow);
  text-decoration: none;
}

.pipe {
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.btn-home {
  display: inline-block;
  background: linear-gradient(135deg, #6a1b9a, #8e24aa);
  color: white;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-home:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

/* ── Responsive ── */
@media (max-width: 850px) {
  .card {
    flex-direction: column;
  }

  .left-panel {
    flex: none;
    padding: 40px;
    border-bottom: 1px solid rgba(160, 110, 230, 0.1);
  }

  .vertical-divider {
    display: none;
  }

  .right-panel {
    padding: 40px;
    align-items: center;
    text-align: center;
  }

  .heading {
    font-size: 40px;
  }

  .help-section {
    flex-direction: column;
    gap: 5px;
  }

  .pipe {
    display: none;
  }
}
</style>