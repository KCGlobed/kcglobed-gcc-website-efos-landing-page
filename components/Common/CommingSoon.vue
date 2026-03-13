<template>
    <div class="coming-soon-area ptb-100">
        <div class="container">
            <div class="coming-soon-content">
                <div class="icon">
                    <i class="ti ti-rocket"></i>
                </div>
                <h2>Coming Soon</h2>
                <p>
                    We are currently working hard on this page to bring you the best experience possible.
                    It will be available very soon. Stay tuned!
                </p>

                <div class="back-btn">
                    <NuxtLink to="/" class="default-btn">
                        Back to Home
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Background Shapes for Premium Look -->
        <div class="shape1">
            <!-- <img src="~/assets/img/shape/shape1.png" alt="shape" v-if="hasShape1" /> -->
        </div>
        <div class="shape2">
            <!-- <img src="~/assets/img/shape/shape2.png" alt="shape" v-if="hasShape2" /> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "CommingSoon",
    data() {
        return {
            hasShape1: false, // Check if assets exist or hide if not
            hasShape2: false,
        };
    }
};
</script>

<style scoped>
.coming-soon-area {
    position: relative;
    z-index: 1;
    background-color: #fff;
    text-align: center;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.coming-soon-content {
    max-width: 700px;
    margin: 0 auto;
}

.coming-soon-content .icon {
    width: 100px;
    height: 100px;
    line-height: 100px;
    background: rgba(134, 46, 132, 0.1);
    color: #862E84;
    font-size: 50px;
    border-radius: 50%;
    margin: 0 auto 30px;
    display: inline-block;
    animation: bounce 2s infinite ease-in-out;
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-20px);
    }

    60% {
        transform: translateY(-10px);
    }
}

.coming-soon-content h2 {
    font-size: 45px;
    margin-bottom: 20px;
    color: #3D2C5E;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.coming-soon-content p {
    font-size: 18px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 40px;
}

.default-btn {
    background-color: #862E84;
    color: #fff;
    padding: 15px 35px;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 0 10px 20px rgba(134, 46, 132, 0.2);
}

.default-btn:hover {
    background-color: #3D2C5E;
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(61, 44, 94, 0.3);
}

.default-btn i {
    font-size: 20px;
}

/* Shapes for decorative background */
.shape1,
.shape2 {
    position: absolute;
    z-index: -1;
    opacity: 0.1;
}

.shape1 {
    top: 10%;
    left: 5%;
    animation: rotate 15s linear infinite;
}

.shape2 {
    bottom: 10%;
    right: 5%;
    animation: move-vertical 10s ease-in-out infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes move-vertical {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-30px);
    }
}

@media only screen and (max-width: 767px) {
    .coming-soon-content h2 {
        font-size: 30px;
    }

    .coming-soon-content p {
        font-size: 16px;
    }

    .coming-soon-content .icon {
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 40px;
    }
}
</style>
