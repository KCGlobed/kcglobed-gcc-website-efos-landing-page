<template>
    <div class="modal fade payment-status-modal" :id="modalId" tabindex="-1" aria-hidden="true"
        data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 overflow-hidden text-center px-4 py-5">

                <!-- PROCESSING STATE -->
                <div v-if="status === 'processing'" class="status-content">
                    <div class="icon-circle processing-circle mx-auto mb-4">
                        <div class="spinner-border text-white" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <h3 class="fw-bold mb-2 text-processing-title">Please Wait</h3>
                    <p class="text-muted mb-0">{{ message || 'Processing your request...' }}</p>
                    <p class="small text-muted mt-2">Do not refresh or close this window.</p>
                </div>

                <!-- SUCCESS STATE -->
                <div v-if="status === 'success'" class="status-content">
                    <div class="icon-circle success-circle mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="40" height="40">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                    <h3 class="fw-bold mb-2 text-success-title">Payment Successful!</h3>
                    <p class="text-muted mb-3">Your payment has been processed successfully.</p>

                    <div class="txn-box mb-3">
                        <span class="txn-label">Transaction ID</span>
                        <span class="txn-id">{{ paymentId }}</span>
                    </div>

                    <p class="small text-muted mb-4">A confirmation email will be sent to your registered email
                        address.</p>

                    <button type="button" class="btn btn-success-done w-100 py-3 fw-bold"
                        data-bs-dismiss="modal">Done</button>
                </div>


                <!-- FAILURE STATE -->
                <div v-else-if="status === 'failed'" class="status-content">
                    <div class="icon-circle failed-circle mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="40" height="40">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <h3 class="fw-bold mb-2 text-failed-title">Payment Failed</h3>
                    <p class="text-muted mb-3">We were unable to process your payment.</p>
                    <p class="small text-muted mb-4">Please try again or use a different payment method.</p>

                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PaymentStatusModal',
    props: {
        modalId: {
            type: String,
            default: 'paymentStatusModal'
        },
        status: {
            type: String as () => 'success' | 'failed' | 'processing' | '',
            default: ''
        },
        paymentId: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        }
    }
});
</script>

<style scoped>
.modal-content {
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.icon-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.success-circle {
    background: linear-gradient(135deg, #4CAF50, #2E7D32);
    color: white;
    box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4);
}

.failed-circle {
    background: linear-gradient(135deg, #EF5350, #B71C1C);
    color: white;
    box-shadow: 0 8px 25px rgba(239, 83, 80, 0.4);
}

.processing-circle {
    background: linear-gradient(135deg, #8A2BE2, #4B0082);
    color: white;
    box-shadow: 0 8px 25px rgba(138, 43, 226, 0.4);
}

.text-success-title {
    color: #2E7D32;
}

.text-failed-title {
    color: #B71C1C;
}

.text-processing-title {
    color: #4B0082;
}

.txn-box {
    background: #f0f9f0;
    border: 1px solid #a5d6a7;
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.txn-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #888;
    font-weight: 600;
}

.txn-id {
    font-family: 'Courier New', monospace;
    font-size: 13px;
    font-weight: 700;
    color: #2E7D32;
    word-break: break-all;
}

.btn-success-done {
    background: linear-gradient(90deg, #4CAF50, #2E7D32);
    color: white;
    border: none;
    border-radius: 12px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    box-shadow: 0 6px 18px rgba(76, 175, 80, 0.3);
}

.btn-success-done:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(76, 175, 80, 0.45);
    filter: brightness(1.05);
    color: white;
}

.btn-failed-retry {
    background: linear-gradient(90deg, #EF5350, #B71C1C);
    color: white;
    border: none;
    border-radius: 12px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    box-shadow: 0 6px 18px rgba(239, 83, 80, 0.3);
}

.btn-failed-retry:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(239, 83, 80, 0.45);
    filter: brightness(1.05);
    color: white;
}
</style>
