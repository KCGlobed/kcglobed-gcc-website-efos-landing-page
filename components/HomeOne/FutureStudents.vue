<template>
  <div class="ticket-section">
    <div class="container">
      <div class="ticket-header-bar">
        <h2>PASS NFET ENTRANCE EXAM AND GET YOUR TICKET</h2>
        <p>TO EXPERIENCE THE CORPORATE WORLD AT DLF CYBER CITY, GURUGRAM</p>
      </div>

      <div class="ticket-wrapper">
        <!-- Left Section (Purple)-->
        <div class="ticket-left">
          <div class="ticket-content">
            <div class="row align-items-start mb-4">
              <div class="col-6">
                <div class="info-group">
                  <label>PASSENGER</label>
                  <span>Future GCC Professional</span>
                </div>
              </div>
              <div class="col-6">
                <div class="info-group">
                  <label>FLIGHT</label>
                  <span>GCC School</span>
                </div>
              </div>
            </div>

            <div class="row align-items-center mb-4">
              <div class="col-6">
                <div class="info-group">
                  <label>FROM</label>
                  <span class="highlight">Young Aspiring<br />Professionals (YAP)</span>
                </div>
              </div>
              <div class="col-6">
                <div class="info-group">
                  <label>TO</label>
                  <span class="highlight">Industry Titans</span>
                </div>
              </div>
            </div>

            <div class="row align-items-end">
              <div class="col-6">
                <div class="info-group">
                  <label>CLASS</label>
                  <span class="highlight">Elite Class – Confirmed</span>
                </div>
              </div>
              <div class="col-6">
                <div class="info-group">
                  <label>SEAT</label>
                  <span class="highlight">Limited</span>
                </div>
              </div>
            </div>
          </div>

          <div class="ticket-footer">
            <a href="#" class="status-link">
              Your Professional Journey Begins Here.
            </a>

          </div>

          <!-- World Map Background (CSS Pattern) -->
          <div class="map-bg"></div>

          <!-- Airplane Watermark -->
          <div class="airplane-bg">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
        </div>

        <!-- Perforation -->
        <div class="ticket-divider">
          <div class="circle-top"></div>
          <div class="line"></div>
          <div class="circle-bottom"></div>
        </div>

        <!-- Right Section (White) -->
        <div class="ticket-right">
          <h3>TICKET TO DLF CYBERCITY , GURUGRAM</h3>

          <div class="info-group mt-4">
            <label>INCLUSIVE</label>
            <span class="dark-text">ACCA /PGCM / British Council</span>
          </div>

          <div class="info-group mt-3">
            <label>BOARDING TIME</label>
            <span class="dark-text">July 2026</span>
          </div>

          <div class="info-group mt-3">
            <label>JOURNEY</label>
            <span class="dark-text">12 Months</span>
          </div>


          <div class="barcode mt-4">
            <!-- Simple CSS Barcode -->
            <div class="bar" style="width: 2px;"></div>
            <div class="bar" style="width: 4px;"></div>
            <div class="bar" style="width: 1px;"></div>
            <div class="bar" style="width: 3px;"></div>
            <div class="bar" style="width: 2px;"></div>
            <div class="bar" style="width: 5px;"></div>
            <div class="bar" style="width: 2px;"></div>
            <div class="bar" style="width: 1px;"></div>
            <div class="bar" style="width: 3px;"></div>
            <div class="bar" style="width: 4px;"></div>
            <div class="bar" style="width: 2px;"></div>
            <div class="bar" style="width: 1px;"></div>
            <div class="bar" style="width: 5px;"></div>
            <div class="bar" style="width: 2px;"></div>
            <div class="bar" style="width: 3px;"></div>
            <div class="bar" style="width: 1px;"></div>
            <div class="bar" style="width: 2px;"></div>
            <div class="bar" style="width: 4px;"></div>
            <div class="bar" style="width: 1px;"></div>
            <div class="bar" style="width: 3px;"></div>
            <div class="bar" style="width: 2px;"></div>
            <div class="bar" style="width: 5px;"></div>
            <div class="bar" style="width: 2px;"></div>
            <div class="bar" style="width: 1px;"></div>
            <div class="bar" style="width: 3px;"></div>
            <div class="bar" style="width: 4px;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FutureStudents",
};
</script>

<style scoped>
.ticket-section {
  padding: 60px 0;
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
}

.ticket-header-bar {
  background: linear-gradient(90deg, #cfaa56 0%, #f7e2a9 50%, #cfaa56 100%);
  text-align: center;
  padding: 15px 20px;
  border-radius: 4px 4px 0 0;
  /* Or just flat? Image shows sharp edges */
  color: #000;
}

.ticket-header-bar h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0d0d25;
}

.ticket-header-bar p {
  font-size: 14px;
  font-weight: 600;
  margin: 5px 0 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #333;
}

.ticket-wrapper {
  display: flex;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  position: relative;
}

/* Left Section: Purple */
.ticket-left {
  background-color: #38003c;
  /* Deep purple */
  color: #fff;
  padding: 30px 40px;
  flex: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ticket-content {
  position: relative;
  z-index: 2;
}

.map-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Create a dot pattern for the map subtle effect */
  background-image: radial-gradient(#ffffff 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.1;
  z-index: 1;
}

.airplane-bg {
  position: absolute;
  top: 33%;
  left: 33%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  opacity: 0.1;
  z-index: 1;
  pointer-events: none;
  color: #fff;
  overflow: hidden;
}

.airplane-bg svg {
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}

.ticket-footer {
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  margin-top: 30px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: fit-content;
  z-index: 2;
}

/* Right Section: White */
.ticket-right {
  background-color: #fff;
  padding: 30px;
  flex: 1;
  color: #000;
  display: flex;
  flex-direction: column;
  min-width: 300px;
}

.ticket-right h3 {
  font-size: 20px;
  font-weight: 800;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #000;
}

/* Typography */
.info-group label {
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2px;
  letter-spacing: 1px;
}

.info-group span {
  font-size: 16px;
  font-weight: 700;
  display: block;
  line-height: 1.2;
}

.ticket-right .info-group label {
  color: #888;
}

.dark-text {
  color: #000;
  font-size: 15px !important;
}

.highlight {
  font-weight: 700;
  font-size: 18px !important;
}

/* Divider */
.ticket-divider {
  position: relative;
  width: 0;
  border-right: 2px dashed #ccc;
  background: #fff;
  /* Match right side bg for clean cut */
}

/* Barcode */
.barcode {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  overflow: hidden;
}

.barcode .bar {
  background-color: #000;
  height: 100%;
}

/* Responsiveness */
@media (max-width: 1200px) {
  .ticket-header-bar h2 {
    font-size: 28px;
  }
}

@media (max-width: 991px) {
  .ticket-header-bar h2 {
    font-size: 24px;
  }

  .ticket-header-bar {
    padding: 10px 15px;
  }

  .ticket-wrapper {
    flex-direction: column;
  }

  .ticket-right {
    border-top: 2px dashed #ccc;
    min-width: auto;
  }

  .ticket-divider {
    display: none;
  }

}

.status-link {
  color: #fff;
  text-decoration: underline;
  font-weight: 700;
}

@media (max-width: 565px) {
  .ticket-section {
    padding: 30px 0;
  }

  .ticket-section span {
    font-size: 12px !important;
  }

  .ticket-header-bar h2 {
    font-size: 14px;
  }

  .ticket-header-bar p {
    font-size: 12px;
  }

  .ticket-footer {
    margin-top: 15px;
  }

  .ticket-footer {
    font-size: 12px;
  }

  .ticket-right {
    padding: 15px 30px;
  }

  .info-group {
    margin-top: 10px !important;
  }

}
</style>