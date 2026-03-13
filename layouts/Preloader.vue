<template>
  <div class="preloader">
    <div class="loader">
      <!-- Main Logo with Animation -->
      <div class="logo-showcase">
        <div class="animated-circle">
          <div class="circle-ring ring-1"></div>
          <div class="circle-ring ring-2"></div>
          <div class="circle-ring ring-3"></div>
          <div class="logo-g">G</div>
        </div>
      </div>

      <!-- School Name with Letter Animation -->
      <div class="brand-name">
        <div class="main-title">
          <span class="word">
            <span class="letter" style="--i:1">G</span>
            <span class="letter" style="--i:2">C</span>
            <span class="letter" style="--i:3">C</span>
          </span>
          <span class="word">
            <span class="letter" style="--i:4">S</span>
            <span class="letter" style="--i:5">C</span>
            <span class="letter" style="--i:6">H</span>
            <span class="letter" style="--i:7">O</span>
            <span class="letter" style="--i:8">O</span>
            <span class="letter" style="--i:9">L</span>
          </span>
        </div>
        <div class="tagline-wrapper">
          <div class="tagline-line"></div>
          <p class="tagline">GET HIRED FIRST, THEN TRAINED.</p>
          <div class="tagline-line"></div>
        </div>
      </div>

      <!-- Particle Animation -->
      <div class="particles">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>

      <!-- Dot Loading Animation -->
      <div class="loading-dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preloader",
};
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 9999999;
  background: linear-gradient(135deg, #1a0f3e 0%, #3d2b6b 50%, #5a3d8f 100%);
  overflow: hidden;
  transition: 0.5s;

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(243, 156, 18, 0.1) 0%, transparent 70%);
    animation: bg-pulse 4s ease-in-out infinite;
  }

  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;

    .logo-showcase {
      margin-bottom: 40px;
      animation: logo-float 3s ease-in-out infinite;

      .animated-circle {
        position: relative;
        width: 150px;
        height: 150px;
        margin: 0 auto;

        .circle-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #f39c12;
          border-right-color: #f39c12;

          &.ring-1 {
            animation: ring-spin 2s linear infinite;
            border-width: 3px;
          }

          &.ring-2 {
            animation: ring-spin 2s linear infinite reverse;
            border-width: 2px;
            width: 120%;
            height: 120%;
            top: -10%;
            left: -10%;
            opacity: 0.5;
          }

          &.ring-3 {
            animation: ring-spin 3s linear infinite;
            border-width: 2px;
            width: 80%;
            height: 80%;
            top: 10%;
            left: 10%;
            opacity: 0.7;
          }
        }

        .logo-g {
          position: absolute;
          width: 110px;
          height: 110px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 72px;
          font-weight: 900;
          color: #fff;
          font-family: Arial, sans-serif;
          box-shadow:
            0 0 40px rgba(243, 156, 18, 0.6),
            inset 0 -5px 20px rgba(0, 0, 0, 0.2);
          animation: logo-glow 2s ease-in-out infinite;
        }
      }
    }

    .brand-name {
      margin-bottom: 50px;

      .main-title {
        display: flex;
        gap: 30px;
        justify-content: center;
        margin-bottom: 20px;

        .word {
          display: inline-flex;
          gap: 5px;
        }

        .letter {
          display: inline-block;
          font-size: 56px;
          font-weight: 900;
          color: #fff;
          font-family: Arial, sans-serif;
          text-shadow:
            0 0 20px rgba(243, 156, 18, 0.5),
            3px 3px 6px rgba(0, 0, 0, 0.5);
          animation: letter-wave 2s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.1s);
        }
      }

      .tagline-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        animation: tagline-fade 2s ease-in-out infinite;

        .tagline-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #f39c12, transparent);
          animation: line-expand 2s ease-in-out infinite;
        }

        .tagline {
          font-size: 14px;
          font-weight: 700;
          color: #f39c12;
          margin: 0;
          letter-spacing: 2px;
          font-family: Arial, sans-serif;
          text-transform: uppercase;
        }
      }
    }

    .particles {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;

      .particle {
        position: absolute;
        width: 6px;
        height: 6px;
        background: #f39c12;
        border-radius: 50%;
        box-shadow: 0 0 10px #f39c12;
        animation: particle-float 4s ease-in-out infinite;

        &:nth-child(1) {
          left: 10%;
          top: 20%;
          animation-delay: 0s;
        }

        &:nth-child(2) {
          left: 20%;
          top: 80%;
          animation-delay: 0.5s;
        }

        &:nth-child(3) {
          left: 80%;
          top: 30%;
          animation-delay: 1s;
        }

        &:nth-child(4) {
          left: 70%;
          top: 70%;
          animation-delay: 1.5s;
        }

        &:nth-child(5) {
          left: 30%;
          top: 40%;
          animation-delay: 2s;
        }

        &:nth-child(6) {
          left: 90%;
          top: 60%;
          animation-delay: 2.5s;
        }

        &:nth-child(7) {
          left: 50%;
          top: 10%;
          animation-delay: 3s;
        }

        &:nth-child(8) {
          left: 60%;
          top: 90%;
          animation-delay: 3.5s;
        }
      }
    }

    .loading-dots {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 30px;

      .dot {
        width: 16px;
        height: 16px;
        background: #f39c12;
        border-radius: 50%;
        animation: dot-bounce 1.4s ease-in-out infinite;
        box-shadow: 0 0 15px rgba(243, 156, 18, 0.6);

        &:nth-child(1) {
          animation-delay: 0s;
        }

        &:nth-child(2) {
          animation-delay: 0.2s;
        }

        &:nth-child(3) {
          animation-delay: 0.4s;
        }
      }
    }
  }

  &.preloader-deactivate {
    opacity: 0;
    visibility: hidden;

    .loader {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
      visibility: hidden;
    }
  }
}

@keyframes bg-pulse {

  0%,
  100% {
    transform: translate(-25%, -25%) scale(1);
  }

  50% {
    transform: translate(-25%, -25%) scale(1.1);
  }
}

@keyframes logo-float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

@keyframes ring-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes logo-glow {

  0%,
  100% {
    box-shadow:
      0 0 40px rgba(243, 156, 18, 0.6),
      inset 0 -5px 20px rgba(0, 0, 0, 0.2);
  }

  50% {
    box-shadow:
      0 0 60px rgba(243, 156, 18, 0.9),
      0 0 100px rgba(243, 156, 18, 0.5),
      inset 0 -5px 20px rgba(0, 0, 0, 0.2);
  }
}

@keyframes letter-wave {

  0%,
  100% {
    transform: translateY(0) rotateZ(0deg);
    color: #fff;
  }

  50% {
    transform: translateY(-15px) rotateZ(5deg);
    color: #f39c12;
  }
}

@keyframes tagline-fade {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.6;
  }
}

@keyframes line-expand {

  0%,
  100% {
    width: 60px;
  }

  50% {
    width: 100px;
  }
}

@keyframes particle-float {

  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  50% {
    transform: translateY(-100px) scale(1.5);
    opacity: 0.8;
  }

  75% {
    opacity: 0.3;
  }
}

@keyframes dot-bounce {

  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 0.7;
  }
}

@media (max-width: 768px) {
  .preloader .loader {
    .logo-showcase .animated-circle {
      width: 120px;
      height: 120px;

      .logo-g {
        width: 90px;
        height: 90px;
        font-size: 56px;
      }
    }

    .brand-name .main-title {
      flex-direction: column;
      gap: 10px;

      .letter {
        font-size: 40px;
      }
    }

    .brand-name .tagline-wrapper .tagline {
      font-size: 10px;
    }
  }
}
</style>