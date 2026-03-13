<template>
    <div class="think-tank-area ptb-100">
        <div class="container">
            <div class="section-title text-center mb-50">
                <h2 class="title"> OUR EMINENT <span class="highlight">SUBJECT MATTER EXPERTS </span></h2>
                <!-- <p class="max-600 mx-auto">Our SMEs comprise of industry leaders and academic pioneers
                    dedicated to
                    shaping the future of education and professional excellence.</p> -->
            </div>

            <div class="row g-4 justify-content-center align-items-center">
                <div v-for="(item, index) in images" :key="index" class="col-lg-3 col-md-4 ">
                    <a :href="item.link" target="_blank">
                        <div class="image-box">
                            <img :src="item.img" alt="Subject Matter Expert" class="img-fluid">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import expert1 from '@/assets/img/expert/expert11.png'
import expert2 from '@/assets/img/expert/expert12.png'
import expert3 from '@/assets/img/expert/expert13.png'
import expert4 from '@/assets/img/expert/expert4.png'
import expert5 from '@/assets/img/expert/expert5.png'
import expert6 from '@/assets/img/expert/expert6.png'
import expert7 from '@/assets/img/expert/expert17.png'
import expert8 from '@/assets/img/expert/expert8.png'
const images = [
    {
        img: expert1,
        link: "https://www.linkedin.com/in/cpa-nitish-khatri-045117b9/"
    },
    {
        img: expert2,
        link: "https://www.linkedin.com/in/bhawna-goswami-b878862b8/"
    },
    {
        img: expert3,
        link: "https://www.linkedin.com/in/kapileshwar-bhalla-39275b1a6/"
    },
    {
        img: expert4,
        link: "https://www.linkedin.com/in/ravi-yathiraj-irs-enrolled-agent-mba-resolving-the-irs-state-notices-and-audits-174b9432/"
    },
    {
        img: expert5,
        link: "https://www.linkedin.com/in/santhosh-chandrashekar-647263125/"
    },
    {
        img: expert6,
        link: "https://www.linkedin.com/in/vinay-aggarwal-2a7a8624/"
    },
    {
        img: expert7,
        link: "https://www.linkedin.com/in/anish-thomas-06106a14/"
    },
    {
        img: expert8,
        link: "https://www.linkedin.com/in/ca-ram-s-a5b560154/"
    },
]
</script>

<style scoped>
.think-tank-area {
    background: #ffffff;
}

.section-title {
    margin-bottom: 50px;
}

.title {
    font-size: 32px;
    font-weight: 700;
    color: #0d0d25;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.title::after {
    content: "";
    display: block;
    width: 70px;
    height: 4px;
    background: #F1A63E;
    margin: 15px auto 0;
    border-radius: 10px;
}

.highlight {
    color: #F1A63E;
}

.section-title p {
    color: #4b5563;
    font-size: 16px;
    line-height: 1.6;
}

.max-600 {
    max-width: 600px;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.image-box {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-box img {
    max-width: 100%;
    height: auto;
    transition: all 0.3s ease;
}

@media (max-width: 1200px) {
    .think-tank-area {
        padding: 80px 0;
    }

    .title {
        font-size: 28px;
    }
}

@media (max-width: 991px) {
    .think-tank-area {
        padding: 60px 0;
    }

    .title {
        font-size: 24px;
    }
}

@media (max-width: 768px) {
    .section-title {
        margin-bottom: 30px;
    }

    .title {
        font-size: 20px;
        letter-spacing: 1px;
    }

    .title::after {
        width: 50px;
        height: 3px;
        margin-top: 10px;
    }

    .image-box {
        padding: 10px;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 18px;
    }
}
</style>
