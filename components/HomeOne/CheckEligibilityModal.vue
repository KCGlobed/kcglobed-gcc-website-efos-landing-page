<template>
    <transition name="modal-fade">
        <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
            <div class="modal-container">
                <button class="close-btn" @click="closeModal" aria-label="Close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div class="modal-content">
                    <h3>Check Eligibility</h3>
                    <p class="description">Select all that apply to check your eligibility</p>

                    <div class="checklist">
                        <div v-for="(item, index) in eligibilityCriteria" :key="index" class="checkbox-item">
                            <label :class="{ checked: item.checked }">
                                <input type="checkbox" v-model="item.checked">
                                <span class="custom-checkbox">
                                    <i class="ti ti-check" v-if="item.checked"></i>
                                </span>
                                {{ item.text }}
                            </label>
                        </div>
                    </div>

                    <div class="result-area">
                        <div v-if="allChecked" class="success-message">
                            <div class="icon-circle success">
                                <i class="ti ti-confetti"></i>
                            </div>
                            <h4>Congratulations!</h4>
                            <p>You are eligible for the program.</p>
                            <NuxtLink to="/admission-form" class="default-btn">
                                Apply Now
                                <i class="ti ti-arrow-narrow-right"></i>
                            </NuxtLink>
                        </div>
                        <div v-else-if="hasInteracted" class="error-message">
                            <div class="icon-circle error">
                                <i class="ti ti-alert-circle"></i>
                            </div>
                            <h4>Not Eligible Yet</h4>
                            <p>You need to meet all criteria to apply.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "CheckEligibilityModal",
    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            eligibilityCriteria: [
                { text: "Completed or pursuing B.Com", checked: false },
                { text: "Achieved First Division in B.Com", checked: false },
                { text: "Citizen of India", checked: false },
                { text: "Age should be less than 30", checked: false }
            ],
            hasInteracted: false
        };
    },
    computed: {
        allChecked() {
            return this.eligibilityCriteria.length > 0 && this.eligibilityCriteria.every(item => item.checked);
        }
    },
    watch: {
        eligibilityCriteria: {
            handler() {
                if (this.eligibilityCriteria.some(item => item.checked)) {
                    this.hasInteracted = true;
                }
                // Reset interaction if all unchecked manually? maybe not needed based on user request "if one missing show you are not eligible"
                // Logic: if all checked -> show success.
                // if not all checked -> show "not eligible".
                // But initially showing "not eligible" might be annoying.
                // Let's rely on hasInteracted or just always show status if any checkbox is changed.
            },
            deep: true
        },
        isVisible(val) {
            if (val) {
                // Reset state when opening
                this.eligibilityCriteria.forEach(i => i.checked = false);
                this.hasInteracted = false;
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit("close");
        }
    }
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999999;
    padding: 20px;
}

.modal-container {
    background: #ffffff;
    border-radius: 24px;
    width: 100%;
    max-width: 800px;
    /* Increased from 500px */
    position: relative;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: center;
}

.modal-content {
    padding: 60px 40px;
    text-align: center;
    background: linear-gradient(to bottom, #ffffff 0%, #fcfcfc 100%);
}

h3 {
    font-size: 36px;
    font-weight: 800;
    background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
    letter-spacing: -0.5px;
}

.description {
    color: #666;
    margin-bottom: 40px;
    font-size: 18px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.checklist {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
    text-align: left;
}

.checkbox-item label {
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    padding: 20px;
    border-radius: 16px;
    border: 2px solid #f0f0f0;
    transition: all 0.3s ease;
    background: #ffffff;
    height: 100%;
}

.checkbox-item label:hover {
    background: #fdfdfd;
    border-color: #ddd;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.checkbox-item label.checked {
    background: #f0fdf4;
    border-color: #22c55e;
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
}

input[type="checkbox"] {
    display: none;
}

.custom-checkbox {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    border: 2px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    background: white;
    flex-shrink: 0;
}

.checkbox-item label.checked .custom-checkbox {
    background: #22c55e;
    border-color: #22c55e;
    color: white;
    transform: scale(1.1);
}

.result-area {
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
}

.icon-circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.success-message .icon-circle {
    background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
    color: #16a34a;
}

.error-message .icon-circle {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    color: #dc2626;
}

.success-message h4 {
    color: #16a34a;
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 700;
}

.error-message h4 {
    color: #dc2626;
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 700;
}

.close-btn {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    /* Make it round */
    background: rgba(0, 0, 0, 0.05);
    /* Slight background */
    border: none;
    cursor: pointer;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
}

.close-btn:hover {
    background: #ff4757;
    color: white;
    transform: rotate(90deg) scale(1.1);
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: scale(0.95) translateY(20px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

@media (max-width: 768px) {
    .modal-overlay {
        padding: 10px;
    }

    .modal-container {
        border-radius: 20px;
    }

    .modal-content {
        padding: 40px 20px;
    }

    h3 {
        font-size: 28px;
        margin-bottom: 10px;
    }

    .description {
        font-size: 16px;
        margin-bottom: 30px;
        padding: 0 10px;
    }

    .checklist {
        grid-template-columns: 1fr;
        gap: 12px;
        margin-bottom: 30px;
    }

    .checkbox-item label {
        padding: 15px;
        gap: 12px;
        font-size: 15px;
    }

    .custom-checkbox {
        width: 24px;
        height: 24px;
    }

    .icon-circle {
        width: 60px;
        height: 60px;
        font-size: 28px;
        margin-bottom: 15px;
    }

    .success-message h4,
    .error-message h4 {
        font-size: 20px;
    }

    .close-btn {
        top: 15px;
        right: 15px;
        width: 36px;
        height: 36px;
    }

    .close-btn svg {
        width: 20px;
        height: 20px;
    }

    .default-btn {
        width: 100%;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .modal-content {
        padding: 35px 15px;
    }

    h3 {
        font-size: 24px;
    }

    .description {
        font-size: 14px;
    }

    .checkbox-item label {
        padding: 12px;
        font-size: 14px;
    }
}
</style>
