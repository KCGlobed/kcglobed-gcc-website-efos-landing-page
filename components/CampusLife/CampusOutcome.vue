<template>
    <div class="clubs-section">
        <div class="container">

            <!-- Heading -->
            <h2 class="section-title">
                MEET OUR <span>CLUBS & SOCIETIES</span>
            </h2>

            <!-- Cards -->
            <div class="clubs-grid">
                <div class="club-card" v-for="(item, i) in clubs" :key="i">

                    <!-- Image -->
                    <div class="image-wrapper">
                        <img :src="item.image" />

                        <span v-if="item.tag" class="tag">
                            <img :src="item.icon" alt="" />
                            {{ item.tag }}
                        </span>
                    </div>

                    <!-- ✅ Body OUTSIDE -->
                    <div class="card-body">
                        <h4>{{ item.title }}</h4>

                        <div class="members">
                            <img v-for="(m, idx) in item.members" :key="idx" :src="m" />

                            <div class="count-avatar">
                                +{{ item.count }}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import img1 from '../../assets/img/campus/image8.jpg';
import img2 from '../../assets/img/campus/image9.jpg';
import img3 from '../../assets/img/campus/image10.jpg';
import img4 from '../../assets/img/campus/image11.jpg';
import starIcon from '../../assets/img/campus/star.png';
import trendingIcon from '../../assets/img/campus/trending.png';
import avatar1 from '../../assets/img/campus/avatar1.jpg';
import avatar2 from '../../assets/img/campus/avatar2.jpg';
import avatar3 from '../../assets/img/campus/avatar3.jpg';
import avatar4 from '../../assets/img/campus/avatar4.jpg';
import avatar5 from '../../assets/img/campus/avatar5.jpg';
import avatar6 from '../../assets/img/campus/avatar6.jpg';
import avatar7 from '../../assets/img/campus/avatar7.jpg';
import avatar8 from '../../assets/img/campus/avatar8.jpg';

const clubs = [
    {
        title: "Finance & Accounts Club",
        image: img1,
        members: [avatar1, avatar2],
        count: 42,
        tag: "FEATURED",
        icon: starIcon
    },
    {
        title: "Audit & Assurance Club",
        image: img2,
        members: [avatar3, avatar4],
        count: 32,
        tag: "TRENDING",
        icon: trendingIcon
    },
    {
        title: "International Tax Club",
        image: img3,
        members: [avatar5, avatar6],
        count: 28
    },
    {
        title: "GCC Corporate Club",
        image: img4,
        members: [avatar7, avatar8],
        count: 35
    }
];
</script>

<style scoped>
/* Section */
.clubs-section {
    padding: 80px 0;
    background: #f1f1f1;
    text-align: center;
}

/* Heading */
.section-title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 50px;
}

.section-title span {
    color: #f59e0b;
}

/* Grid */
.clubs-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

/* Card */
.club-card {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    text-align: left;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transition: 0.3s;
}

.club-card:hover {
    transform: translateY(-6px);
}

/* Image */
.image-wrapper {
    position: relative;
    height: 180px;
    overflow: hidden;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Tag */
.tag {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #facc15;
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 700;
    border-radius: 20px;
}

/* Body */
.card-body {
    padding: 16px;
    background: white;
    display: flex;
    justify-content: space-between;
    /* gap: 1rem; */
    align-items: start;
}


.card-body h4 {
    font-size: 17px;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 12px;
    line-height: 1.4;
}

.members {
    display: flex;
    align-items: center;
}

/* avatars */
.members img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-left: -10px;
    background: #fff;
}

.members img:first-child {
    margin-left: 0;
}

.tag {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #facc15;
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 700;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 6px;
    line-height: 1;
}

.tag img {
    width: 14px;
    height: 14px;
    object-fit: contain;
    display: block;
}

/* count avatar */
.count-avatar {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background: #e5e7eb;
    color: #374151;
    font-size: 11px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -10px;
    border: 2px solid #fff;
}

/* Responsive */
@media (max-width: 992px) {
    .clubs-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .clubs-grid {
        grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
        .section-title {
            font-size: 20px;
        }
    }
}
</style>