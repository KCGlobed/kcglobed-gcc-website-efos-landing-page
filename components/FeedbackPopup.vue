<template>
  <div v-if="modelValue" class="feedback-overlay" @click.self="close">
    <div class="feedback-modal">
      <button class="close" @click="close">×</button>

      <div class="modal-header justify-center p-0">
        <h2>Ask Your Query</h2>
      </div>

      <form @submit.prevent="handleSubmit" novalidate>
        <div class="form-grid">

          <!-- Row 1: Name full width -->
          <div class="form-group full">
            <label for="name">Name <span class="required">*</span></label>
            <input id="name" v-model="form.name" type="text" placeholder="Enter your name"
              :class="{ error: touched.name && errors.name }" @blur="touch('name')" />
            <span class="error-msg">{{ touched.name && errors.name ? errors.name : '' }}</span>
          </div>

          <!-- Row 2: Phone + Email -->


          <div class="form-group">
            <label for="email">Email Address <span class="required">*</span></label>
            <input id="email" v-model="form.email" type="email" placeholder="Enter your email"
              :class="{ error: touched.email && errors.email }" @blur="touch('email')" />
            <span class="error-msg">{{ touched.email && errors.email ? errors.email : '' }}</span>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number <span class="required">*</span></label>
            <input id="phone" v-model="form.phone" type="tel" placeholder="Enter your phone number"
              :class="{ error: touched.phone && errors.phone }" @blur="touch('phone')" />
            <span class="error-msg">{{ touched.phone && errors.phone ? errors.phone : '' }}</span>
          </div>

          <!-- Row 3: Subject full width -->
          <div class="form-group full">
            <label for="subject">Subject <span class="required">*</span></label>
            <input id="subject" v-model="form.subject" type="text" placeholder="Enter subject"
              :class="{ error: touched.subject && errors.subject }" @blur="touch('subject')" />
            <span class="error-msg">{{ touched.subject && errors.subject ? errors.subject : '' }}</span>
          </div>
          <!-- Row 4: Message full width -->
          <div class="form-group full">
            <label for="message">Message <span class="required">*</span></label>
            <textarea id="message" v-model="form.message" placeholder="Enter message"
              :class="{ error: touched.message && errors.message }" @blur="touch('message')"></textarea>
            <div class="below-textarea">
              <span class="error-msg">{{ touched.message && errors.message ? errors.message : '' }}</span>
              <span class="char-count" :class="{ warn: form.message.length > 450 }">{{ form.message.length }}/500</span>
            </div>
          </div>

        </div>

        <div v-if="submitted" class="success-banner">Thanks for submitting. We will get back to you soon!</div>
        <div v-if="apiError" class="error-banner">⚠ {{ apiError }}</div>

        <div class="form-actions">
          <button type="submit" class="btn-submit" :disabled="submitting">
            <span v-if="submitting" class="spinner"></span>
            {{ submitting ? 'Submitting…' : 'Submit' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>();

const config = useRuntimeConfig();

const form = reactive({ name: '', email: '', phone: '', subject: '', message: '' });
const touched = reactive({ name: false, email: false, phone: false, subject: false, message: false });
const submitting = ref(false);
const submitted = ref(false);
const apiError = ref('');

const validators: Record<string, (v: string) => string> = {
  name: v => v.trim() ? '' : 'Name is required.',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Enter a valid email.',
  phone: v => /^[+\d\s\-().]{7,20}$/.test(v.trim()) ? '' : 'Enter a valid phone number.',
  subject: v => v.trim().length >= 3 ? '' : 'Min 3 characters required.',
  message: v => v.trim().length < 10 ? 'Min 10 characters required.' : v.length > 500 ? 'Max 500 characters.' : '',
};

const errors = reactive(Object.fromEntries(Object.keys(validators).map(k => [k, '']))) as Record<string, string>;

function touch(field: string) {
  (touched as any)[field] = true;
  errors[field] = validators[field]((form as any)[field]);
}

function validateAll(): boolean {
  let valid = true;
  for (const field of Object.keys(validators)) {
    (touched as any)[field] = true;
    errors[field] = validators[field]((form as any)[field]);
    if (errors[field]) valid = false;
  }
  return valid;
}

async function handleSubmit() {
  if (!validateAll()) return;
  submitting.value = true;
  apiError.value = '';

  try {
    await $fetch(`${config.public.apiBase}/api/career/createsupportform`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      },
    });

    submitted.value = true;
    Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '' });
    Object.keys(touched).forEach(k => ((touched as any)[k] = false));
    setTimeout(() => { submitted.value = false; close(); }, 2500);
  } catch (err: any) {
    const data = err?.data ?? err?.response?._data;
    apiError.value =
      data?.message ||
      data?.detail ||
      (typeof data === 'string' ? data : '') ||
      'Something went wrong. Please try again.';
  } finally {
    submitting.value = false;
  }
}

function close() { emit('update:modelValue', false); }
</script>

<style scoped>
.feedback-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
}

.feedback-modal {
  background: #fff;
  border-radius: 10px;
  width: 480px;
  max-width: 95vw;
  padding: 1.5rem;
  position: relative;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
}

.close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  border: none;
  background: transparent;
  font-size: 1.4rem;
  cursor: pointer;
  color: #999;
  line-height: 1;
  transition: color 0.2s;
}

.close:hover {
  color: #333;
}

.modal-header {
  margin-bottom: 1.1rem;
  justify-content: center;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #111;
}

.amp {
  color: #6366f1;
  font-style: italic;
}

/* Grid layout */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.form-group.full {
  grid-column: 1 / -1;
}

label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #374151;
  letter-spacing: 0.03em;
}

.required {
  color: #ef4444;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem 0.7rem;
  border: 1.5px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #111;
  background: #fafafa;
  box-sizing: border-box;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #6366f1;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

input.error,
textarea.error {
  border-color: #ef4444;
  background: #fff8f8;
}

textarea {
  resize: none;
  height: 80px;
}

.error-msg {
  font-size: 0.7rem;
  color: #ef4444;
  min-height: 0.9rem;
  line-height: 1.2;
}

.below-textarea {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.char-count {
  font-size: 0.7rem;
  color: #9ca3af;
  white-space: nowrap;
}

.char-count.warn {
  color: #f59e0b;
}

.success-banner {
  margin-top: 0.75rem;
  background: #f0fdf4;
  border: 1.5px solid #86efac;
  color: #166534;
  border-radius: 6px;
  padding: 0.5rem 0.8rem;
  font-size: 0.82rem;
  font-weight: 500;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-top: 0.9rem;
}

.btn-cancel {
  padding: 0.5rem 1rem;
  border: 1.5px solid #e5e7eb;
  border-radius: 6px;
  background: #fff;
  color: #374151;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-cancel:hover {
  background: #f3f4f6;
}

.btn-submit {
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 6px;
  background: #A13E99;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: background 0.15s, transform 0.1s;
  width: 100%;
  justify-content: center;

}

.btn-submit:hover:not(:disabled) {
  background: #872a80;
  transform: translateY(-1px);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner {
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>