<template>
    <section class="who-can-apply">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Who Can Apply</h2>
                    <p>Check if you meet the eligibility criteria</p>
                </div>
            </div>
            <div class="row">
                <section class="eligibility-section">
                    <div class="card-wrapper">
                        <div v-for="(item, index) in cards" :key="index" class="eligibility-card">
                            <div class="icon">
                                <img :src="item.icon" alt="" srcset="">
                            </div>
                            <h3>{{ item.title }}</h3>
                            <!-- <p>{{ item.desc }}</p> -->
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import bookIcon from "~/assets/icon/book.svg"
import badgeIcon from "~/assets/icon/badge.svg"
import flagIcon from "~/assets/icon/flag.svg"
import calenderIcon from "~/assets/icon/calender.svg"
const cards = [
    {
        icon: bookIcon,
        title: "B.Com (First Division)",
        desc: "First division graduates eligible",
    },
    {
        icon: badgeIcon,
        title: "B.Com + M.Com / MBA / PG",
        desc: "Graduates & postgraduates eligible",
    },
    {
        icon: flagIcon,
        title: "Indian Citizen",
        desc: "Must be an Indian citizen",
    },
    {
        icon: calenderIcon,
        title: "Born After Jan 1, 1996",
        desc: "Age eligibility requirement",
    },
];
</script>

<style scoped>
.who-can-apply {
    background: #120E1C;
    padding: 80px 0 80px;
}

.who-can-apply h2 {
    color: #FAFAFA;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
}

.who-can-apply p {
    color: #C4B5FD;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
}

.eligibility-section {
    padding: 50px 20px;
    /* background: #0d0a1f; */
}

.card-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: auto;
}

.eligibility-card {
    border-radius: 16px;
    border: 1px solid var(--stroke-who-can-apply, rgba(156, 1, 223, 0.50));
    background: var(--who-can-apply, rgba(39, 3, 52, 0.50));
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.10);
    backdrop-filter: blur(2px);
    padding: 20px;
}

.eligibility-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(255, 165, 0, 0.25);
}

.icon {
    width: 45px;
    height: 45px;
    background: #ff9800;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 18px;
    color: #fff;
}

.eligibility-card h3 {
    color: #FAFAFA;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px
}

.eligibility-card p {
    color: #C4B5FD;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-align: start;
}

/* Responsive */
@media (max-width: 991px) {
    .who-can-apply {
        padding: 40px 0 40px;
    }
}

@media (max-width: 576px) {
    .card-wrapper {

        grid-template-columns: repeat(2, 1fr);
    }

    .who-can-apply {
        padding: 40px 0 40px;
    }

    .who-can-apply h2 {
        line-height: 28px;
    }

    .eligibility-section {
        padding: 30px 20px;

    }

}
</style>
