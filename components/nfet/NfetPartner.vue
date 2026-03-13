<template>
    <section class="partners-section">
        <div class="container">
            <div class="header">
                <h2 class="title">Our Testing &amp; Technical Partners</h2>
                <p class="subtitle">Powered by industry-leading assessment platforms</p>
            </div>

            <div class="cards">
                <div v-for="partner in partners" :key="partner.name" class="card">
                    <div class="logo-wrapper">
                        <img :src="partner.logo" :alt="partner.name" class="logo" />
                    </div>
                    <p class="description">{{ partner.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const partners = [
    {
        name: 'AON',
        logo: 'https://storage.googleapis.com/static_files_backend/media/images/image%201.png',
        description: 'Global professional services firm supporting talent assessment and benchmarking',
    },
    {
        name: 'Meritto',
        logo: 'https://storage.googleapis.com/static_files_backend/media/images/image%202.png',
        description: 'Technology partner enabling secure and scalable examination delivery',
    },
]
</script>

<style scoped>
.partners-section {
    background: #E2E8F0;
    padding: 80px 0px;

}

.container {
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
}

.header {
    margin-bottom: 48px;
}

.title {
    color: #383434;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
}

.subtitle {
    color: #5E5757;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
}

.cards {
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
}

.card {
    border-radius: 16px;
    border: 1px solid #404040;
    background: #FFF;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.10);
    padding: 33px 33px;
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06); */
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.logo-wrapper {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo {
    max-height: 48px;
    max-width: 160px;
    object-fit: contain;
}

.description {
    font-size: 0.85rem;
    color: #6b7280;
    line-height: 1.6;
    text-align: center;
    margin: 0;
}

@media (max-width: 768px) {
    .partners-section {
        padding: 40px 0px;
    }

    .title {
        font-size: 24px;
        line-height: 32px;
    }

    .subtitle {
        margin-bottom: 30px;
        font-size: 14px;
    }

    .header {
        margin-bottom: 30px
    }

}
</style>