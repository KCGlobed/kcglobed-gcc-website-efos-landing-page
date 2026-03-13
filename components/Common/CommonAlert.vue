<template>
    <Teleport to="body">
        <div v-if="show" class="custom-modal-overlay">
            <div class="custom-modal p-4 position-relative">
                <!-- Close Icon Top Right -->
                <button class="btn-close position-absolute top-0 end-0 m-3" @click="$emit('close')"
                    aria-label="Close"></button>

                <div class="text-center pb-3 pt-2">
                    <!-- <div class="mb-3">
                        <i :class="iconClass" style="font-size: 48px;"></i>
                    </div> -->
                    <h5 class="mb-2 fw-bold" style="font-size: 18px; color: #333;">{{ title }}</h5>
                    <p class="text-muted" style="font-size: 16px;" v-html="message"></p>
                </div>
                <!-- Removed bottom OK button as requested -->
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'error' // 'error', 'success', 'warning', 'info'
    }
});

defineEmits(['close']);

const iconClass = computed(() => {
    switch (props.type) {
        case 'success':
            return 'ti ti-circle-check-filled text-success';
        case 'warning':
            return 'ti ti-alert-triangle text-warning';
        case 'info':
            return 'ti ti-info-circle text-info';
        case 'error':
        default:
            return 'ti ti-alert-circle text-danger';
    }
});
</script>

<style scoped>
/* Scoped styles in case global ones aren't available, but we rely on existing global classes from profile.vue */
.custom-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom-modal {
    background: #fff;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
</style>
