<template>
    <transition name="popup-fade">
        <div v-if="isVisible" class="popup-overlay" @click.self="closePopup">
            <div class="popup-container">
                <button class="close-btn" @click="closePopup" aria-label="Close popup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div class="popup-image">
                    <img :src="eventImage" alt="Event" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import eventImag from "../../assets/img/eventModal/event2.png"

export default defineComponent({
    name: 'EventPopup',
    setup() {
        const isVisible = ref(false);
        const eventImage = ref(eventImag);

        const closePopup = () => {
            isVisible.value = false;
            // Store in sessionStorage to prevent showing again during this session
            sessionStorage.setItem('eventPopupShown', 'true');
        };

        onMounted(() => {
            // Check if popup was already shown in this session
            const popupShown = sessionStorage.getItem('eventPopupShown');

            // Show popup only if not shown before in this session
            if (!popupShown) {
                setTimeout(() => {
                    isVisible.value = true;
                    // Mark as shown for this session
                    sessionStorage.setItem('eventPopupShown', 'true');
                }, 1000); // 1 second delay
            }
        });

        return {
            isVisible,
            eventImage,
            closePopup,
        };
    },
});
</script>

<style scoped>
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* backdrop-filter: blur(2px); */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100000;
    padding: 20px;
}

.popup-container {
    position: relative;
    background: transparent;
    border-radius: 16px;
    max-width: 900px;
    width: fit-content;
    animation: slideUp 0.4s ease-out;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.95);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.close-btn:hover {
    background: #ff4757;
    color: white;
    transform: rotate(90deg) scale(1.1);
    box-shadow: 0 6px 16px rgba(255, 71, 87, 0.4);
}

.close-btn svg {
    transition: transform 0.3s ease;
}

.popup-image {
    width: 100%;
    /* Removed max-height to prevent clipping, handled by img */
    position: relative;
    border-radius: 16px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    background: transparent;
    overflow: hidden;
}

.popup-image img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 85vh;
    object-fit: contain;
    display: block;
    border-radius: 16px;
}

/* Transition animations */
.popup-fade-enter-active,
.popup-fade-leave-active {
    transition: opacity 0.3s ease;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
    opacity: 0;
}

/* Responsive design */
@media (max-width: 768px) {
    .popup-container {
        max-width: 95%;
    }

    .popup-image {
        border-radius: 12px;
    }

    .popup-image img {
        border-radius: 12px;
    }

    .popup-image img {
        max-height: 80vh;
    }

    .close-btn {
        width: 40px;
        height: 40px;
        top: 8px;
        right: 8px;
    }
}

@media (max-width: 480px) {
    .popup-image {
        border-radius: 8px;
    }

    .popup-image img {
        border-radius: 8px;
    }

    .popup-image img {
        max-height: 75vh;
    }

    .close-btn {
        width: 36px;
        height: 36px;
    }
}
</style>
