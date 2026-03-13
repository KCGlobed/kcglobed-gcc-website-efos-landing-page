<template>
    <div class="api-test-area ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Test API Connection</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="test-form">
                        <div class="form-group mb-3">
                            <label>Enter Data to Send:</label>
                            <input type="text" v-model="inputData" class="form-control"
                                placeholder="Type something..." />
                        </div>
                        <button @click="sendData" class="btn btn-primary" :disabled="loading">
                            {{ loading ? 'Sending...' : 'Send to Server' }}
                        </button>

                        <div v-if="response" class="mt-4 alert"
                            :class="response.success ? 'alert-success' : 'alert-danger'">
                            <h5>Server Response:</h5>
                            <pre>{{ response }}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inputData = ref('');
const response = ref(null);
const loading = ref(false);

const sendData = async () => {
    loading.value = true;
    response.value = null;

    try {
        const { data, error } = await useFetch('/api/submit-data', {
            method: 'POST',
            body: {
                message: inputData.value,
                timestamp: new Date().toISOString()
            }
        });

        if (error.value) {
            response.value = { success: false, message: error.value.message };
        } else {
            response.value = data.value;
        }
    } catch (err) {
        response.value = { success: false, message: err.message };
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped>
.test-form {
    padding: 30px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}
</style>
