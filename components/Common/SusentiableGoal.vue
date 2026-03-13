<template>
    <div class="sustainable-goals-wrapper">
        <!-- Yellow dots decoration - hidden on mobile -->
        <div class="d-none d-lg-flex align-items-center justify-content-start">
            <img :src="yellowSquareDots" alt="" class="position-absolute dots-yellow" />
        </div>

        <!-- Main content -->
        <div class="bg-white d-flex align-items-center flex-column goals-section">
            <div class="d-flex flex-column align-items-center mt-section px-3 text-center">
                <div class="badge-global mb-3">GLOBAL COMMITMENT</div>
                <h2 class="heading-primary fw-bold text-secondary text-uppercase">
                    Committed to Sustainable <span class="text-orange">Development Goals</span>
                </h2>
                <p class="heading-secondary fw-semibold mt-2 text-dark-gray">
                    Driving Sustainability Through Education and Employment
                </p>
            </div>

            <!-- Goals Grid -->
            <div class="goals-grid px-2 px-lg-4 mt-4 mt-lg-5 mb-4 mb-lg-5 mx-3 mx-lg-5">
                <div v-for="(image, index) in goals" :key="index" class="goal-item"
                    :class="{ 'is-active': activeGoalIndexes.includes(index + 1) }">
                    <img class="goal-image" :src="`${bucketURL}${image}`" :alt="`Goal ${index + 1}`" />
                </div>
            </div>
        </div>

        <!-- Purple dots decoration - hidden on mobile -->
        <div class="d-none d-lg-flex align-items-center justify-content-end">
            <img :src="purpleSquareDots" alt="" class="position-absolute dots-purple" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AUGoalsSection',
    setup() {
        // Replace these with your actual image imports or paths
        const bucketURL = 'https://storage.googleapis.com/static_files_backend'; // Update with your actual bucket URL
        const yellowSquareDots = '/assets/images/yellow_square_dots.svg';
        const purpleSquareDots = '/assets/images/purple_square_dots.svg';

        // Order according to UN SDGs: 1 to 17 + the SDG logo at the end
        const goals = [
            '/media/landing/goal1.svg',
            '/media/landing/goal2.svg',
            '/media/landing/goal3.svg',
            '/media/landing/goal4.svg',
            '/media/landing/goal5.svg',
            '/media/landing/goal6.svg',
            '/media/landing/goal7.svg',
            '/media/landing/goal8.svg',
            '/media/landing/goal9.jpg',
            '/media/landing/goal10.svg',
            '/media/landing/goal11.svg',
            '/media/landing/goal14.svg',
            '/media/landing/goal13.svg',
            '/media/landing/goal-1.svg',
            '/media/landing/goal15.svg',
            '/media/landing/goal16.svg',
            '/media/landing/goal17.svg',
            '/media/landing/goal18.svg', // This is likely the "Sustainable Development Goals" logo
        ];

        // Based on the image, goals 4, 5, 8, 10, 17 are colored/active
        const activeGoalIndexes = [4, 5, 8, 10, 17, 18];

        return {
            goals,
            bucketURL,
            yellowSquareDots,
            purpleSquareDots,
            activeGoalIndexes
        };
    },
});
</script>

<style scoped>
.sustainable-goals-wrapper {
    position: relative;
    overflow: hidden;
    padding: 4rem 0;
}

.goals-section {
    margin: auto;
    max-width: 1200px;
}

.mt-section {
    margin-top: 2rem;
}

.badge-global {
    background-color: #fff5e6;
    color: #f7a600;
    padding: 4px 16px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1px;
}

.heading-primary {
    font-size: 2rem;
    color: #1a1a1a !important;
    letter-spacing: -0.5px;
}

.text-orange {
    color: #f7a600;
}

.heading-secondary {
    font-size: 1rem;
    color: #666;
    max-width: 600px;
}

/* Goals Grid */
.goals-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    width: 100%;
}

.goal-item {
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    filter: grayscale(100%);
    opacity: 0.7;
    border-radius: 4px;
    overflow: hidden;
}

.goal-item.is-active {
    filter: grayscale(0%);
    opacity: 1;
}

.goal-item:hover {
    transform: scale(1.05);
    opacity: 1;
    filter: grayscale(0%);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.goal-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* Decorative dots */
.dots-yellow {
    top: 10%;
    left: -20px;
    height: 100px;
    opacity: 0.5;
}

.dots-purple {
    bottom: 10%;
    right: -20px;
    height: 100px;
    opacity: 0.5;
}

/* Responsiveness */
@media (max-width: 1199px) {
    .goals-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 0.75rem;
    }

    .heading-primary {
        font-size: 1.75rem;
    }
}

@media (max-width: 768px) {
    .sustainable-goals-wrapper {
        padding: 2rem 0;
    }

    .goals-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    .heading-primary {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) {
    .goals-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .heading-primary {
        font-size: 1.25rem;
    }

    .heading-secondary {
        font-size: 0.875rem;
    }
}
</style>
