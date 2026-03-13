<template>
  <div class="information-warp pb-50">
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <div class="panelBox">
            <div class="title-strip">
              <h3>CUSTOMIZED FOR GCCs TALENT REQUIREMENTS</h3>
            </div>
            <div class="boxes-container">
              <div class="box">
                <img src="../../assets/img/heros/panleIcon1.png" class="icon" />
                <p>Hired First</p>
                <span>Then Trained</span>
              </div>
              <div class="box">
                <img src="../../assets/img/heros/panleIcon2.png" class="icon" />
                <p>Paid Internship</p>
                <span>6 Months</span>
              </div>
              <div class="box">
                <img src="/img/acca.svg" alt="acca" class="logo" />
                <span class="mt-1">UK ACCA <br> Integrated</span>
              </div>
              <div class="box">
                <img src="../../assets/img/heros/panleIcon4.png" alt="british council" class="logo" />
                <span class="mt-2">Master in Corporate Communication</span>
              </div>
              <div class="box">
                <img src="../../assets/img/heros/panleIcon5.png" alt="AIMA" class="logo" />
                <span class="mt-2">AICTE Approved PGCM Certificate from AIMA</span>
              </div>
              <div class="box">
                <img src="../../assets/img/heros/panleIcon6.png" class="icon" />
                <p>AI First</p>
                <span>Integrated Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center g-4">
        <div class="col-lg-8" data-aos="zoom-in-up" data-aos-delay="200">
          <div class="video-box-wrapper">
            <div class="video-section shadow-lg">
              <div class="video-container">
                <video ref="infoVideo" controls muted loop class="w-100 h-100" @play="isVideoPlaying = true"
                  @pause="isVideoPlaying = false" style="object-fit: contain; background: #0b0b1a;">
                  <source
                    src="https://storage.googleapis.com/static_files_backend/media/images/Kamal%20Sir%20Video_1.mp4"
                    type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <!-- Custom Play Overlay (visible before play) -->
                <div v-if="!isVideoPlaying" class="play-overlay" @click="playVideo">
                  <div class="play-btn-circle">
                    <i class="ti ti-player-play-filled"></i>
                  </div>
                  <!-- <div class="play-text">Experience Our Platform</div> -->
                </div>
                <!-- Thumbnail Mask (visible before play) -->
                <img v-if="!isVideoPlaying"
                  src="https://storage.googleapis.com/static_files_backend/media/images/kamal%20sir%20thnml%202.jpg"
                  class="video-poster-img" @click="playVideo" alt="Thumbnail">
              </div>
              <!-- <div class="video-badge-new">
                <img src="~/assets/Logo/Logo/GCC-School-Logo-White.png" alt="GCC Logo" />
                <div class="badge-content">
                  <span class="badge-tag">AI-Enabled</span>
                  <span class="badge-title">LMS Tutorial</span>
                </div>
              </div> -->
            </div>
            <!-- Decorative elements -->
            <div class="decor-shape shape-1"></div>
            <div class="decor-shape shape-2"></div>
            <div class="decor-shape shape-3"></div>
          </div>
        </div>
      </div>
    </div>
    <CheckEligibilityModal :isVisible="isEligibilityModalVisible" @close="toggleEligibilityModal" />
  </div>
</template>

<script>
import CheckEligibilityModal from "./CheckEligibilityModal";

export default {
  name: "InformationForInternationalStudents",
  components: {
    CheckEligibilityModal
  },
  data() {
    return {
      isEligibilityModalVisible: false,
      isVideoPlaying: false,
    };
  },
  methods: {
    toggleEligibilityModal() {
      this.isEligibilityModalVisible = !this.isEligibilityModalVisible;
    },
    playVideo() {
      const video = this.$refs.infoVideo;
      if (video) {
        if (video.paused) {
          video.play();
          this.isVideoPlaying = true;
        } else {
          video.pause();
          this.isVideoPlaying = false;
        }
      }
    }
  }
};
</script>

<style scoped>
/* Video Section Styles */
.information-warp {
  position: relative;
  padding-top: 180px;
}


.pb-50 {
  padding-bottom: 50px;
}


.panelBox {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  position: absolute;
  top: -30px;
  transform: translateX(-50%);
  left: 50%;
  z-index: 100;
  width: 95%;
  max-width: 1240px;
  overflow: hidden;
}

.title-strip {
  background: linear-gradient(135deg, #38003C 0%, #6B1B75 100%);
  padding: 15px 30px;
  text-align: center;
}

.title-strip h3 {
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  /* text-transform: uppercase; */
  letter-spacing: 0.5px;
}

.boxes-container {
  display: flex;
  padding: 30px;
  padding-left: 60px;
  gap: 30px;
  line-height: 15px;
}

@media (max-width: 1200px) {
  .title-strip h3 {
    font-size: 16px;
  }

  .boxes-container {
    padding-left: 30px;
    gap: 15px;
    padding-bottom: 20px;
  }

  .panelBox .box p {
    font-size: 18px;
    line-height: 24px;
  }
}

@media (max-width: 991px) {
  .panelBox {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    margin: -100px auto 40px;
    width: 100%;
  }

  .title-strip {
    padding: 12px 20px;
  }

  .title-strip h3 {
    font-size: 14px;
  }

  .boxes-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
  }
}

@media (max-width: 767px) {
  .title-strip h3 {
    font-size: 12px;
  }

  .boxes-container {
    grid-template-columns: repeat(2, 1fr);
    padding: 15px;
  }
}

.panelBox .box {
  flex: 1;
  width: 150px;
  display: flex;
  flex-direction: column;

}

.panelBox .box .logo {
  width: 100px;
}

.panelBox .box .icon {
  width: 25px;
  height: 25px;
}

.panelBox .box p {
  font-size: 22px;
  font-weight: bold;
  color: #38003C;
  margin-bottom: 0;
  line-height: 32px;
}



.panelBox .box span {
  font-size: 11px;

}


/* Video Section Styles */
.video-box-wrapper {
  position: relative;
  padding: 30px;
  z-index: 1;
}

.video-section {
  position: relative;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  background: #000;
  z-index: 2;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.video-section:hover {
  transform: translateY(-5px);
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  /* 16:9 Aspect Ratio */
  background: #0b0b1a;
  /* Darker background for contained media */
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Ensure full video is visible */
  z-index: 1;
}

.video-poster-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Ensure full thumbnail is visible */
  background: transparent;
  z-index: 3;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.video-section:hover .video-poster-img {
  transform: scale(1.05);
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(13, 13, 37, 0.3);
  z-index: 4;
  cursor: pointer;
}

.play-btn-circle {
  width: 90px;
  height: 90px;
  background: #A13E99;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  box-shadow: 0 0 0 0 rgba(161, 62, 153, 0.4);
  animation: pulse-play 2s infinite;
  transition: all 0.3s ease;
}

.play-overlay:hover .play-btn-circle {
  transform: scale(1.1);
  background: #C436BE;
}

.play-text {
  color: white;
  margin-top: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

@keyframes pulse-play {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(161, 62, 153, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 20px rgba(161, 62, 153, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(161, 62, 153, 0);
  }
}

/* Video Badge New */
.video-badge-new {
  position: absolute;
  bottom: 30px;
  left: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  padding: 12px 25px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 5;
  transition: all 0.3s ease;
}

.video-badge-new:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.video-badge-new img {
  width: 50px;
  height: auto;
}

.badge-content {
  display: flex;
  flex-direction: column;
}

.badge-tag {
  font-size: 10px;
  color: #FFC065;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.badge-title {
  font-size: 16px;
  color: white;
  font-weight: 600;
}

/* Decorative Shapes */
.decor-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  z-index: 0;
}

.shape-1 {
  width: 200px;
  height: 200px;
  background: rgba(161, 62, 153, 0.1);
  top: -50px;
  right: -50px;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: rgba(255, 192, 101, 0.05);
  bottom: -100px;
  left: -100px;
}

.shape-3 {
  width: 150px;
  height: 150px;
  background: rgba(107, 27, 117, 0.1);
  bottom: 20%;
  right: -30px;
}

/* Responsive Design */
@media (max-width: 991px) {
  .video-section {
    border-radius: 20px;
  }

  .play-btn-circle {
    width: 70px;
    height: 70px;
    font-size: 24px;
  }

  .video-badge-new {
    bottom: 20px;
    left: 20px;
    padding: 10px 15px;
  }

  .video-badge-new img {
    width: 40px;
  }
}

@media (max-width: 767px) {
  .video-box-wrapper {
    padding: 15px;
  }

  .play-text {
    font-size: 12px;
  }

  .badge-title {
    font-size: 14px;
  }
}


@media (max-width: 565px) {
  .information-warp {
    padding-top: 20px;
  }

  .timeline-container {
    margin: 30px auto 0;
  }

  .panelBox {
    transform: none;
    position: inherit;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  .title-strip {
    padding: 10px 15px;
  }

  .title-strip h3 {
    font-size: 11px;
    letter-spacing: 0.3px;
  }

  .boxes-container {
    display: grid;
    padding: 20px;
    gap: 15px;
    grid-template-columns: 1fr 1fr;
  }

  .panelBox .box {
    padding: 10px;
  }

  .shape-1 {
    display: none;
  }

  .shape-2 {
    display: none;
  }

  .shape-3 {
    display: none;
  }

  .pb-50 {
    padding-bottom: 20px;
  }
}
</style>
