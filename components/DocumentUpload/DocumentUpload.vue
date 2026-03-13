<template>
    <div class="document-upload-section">
        <div class="alert alert-info py-2 mb-4 border-0 bg-light-info">
            <small class="fw-medium"><i class="ti ti-info-circle me-1"></i> Accepted Formats: PDF, JPG, PNG (Max 2MB per
                file)</small>
        </div>

        <div class="row g-4">
            <!-- Aadhaar Card -->
            <div class="col-md-6">
                <div class="upload-field mb-0">
                    <label class="form-label fw-bold">Aadhaar Card <span>*</span></label>
                    <div class="input-group">
                        <input type="file" class="form-control" accept=".pdf,.jpg,.jpeg,.png"
                            @change="handleFileChange('aadhaar', $event)" :class="{ 'is-invalid': errors.aadhaar }"
                            :disabled="isDisabled">
                        <span class="input-group-text bg-white" v-if="formData.documents.aadhaar">
                            <i class="ti ti-circle-check-filled text-success fs-5"></i>
                        </span>
                    </div>
                    <div class="invalid-feedback d-block" v-if="errors.aadhaar">{{ errors.aadhaar }}</div>
                    <div class="mt-2" v-if="formData.existingDocuments && formData.existingDocuments.aadhaar">
                        <a :href="formData.existingDocuments.aadhaar" target="_blank"
                            class="btn btn-sm btn-outline-primary">
                            <i class="ti ti-eye"></i> View Current Document
                        </a>
                    </div>
                </div>
            </div>

            <!-- Proof of DOB -->
            <div class="col-md-6">
                <div class="upload-field mb-0">
                    <label class="form-label fw-bold">Proof of DOB (X Marksheet / Birth Cert) <span>*</span></label>
                    <div class="input-group">
                        <input type="file" class="form-control" accept=".pdf,.jpg,.jpeg,.png"
                            @change="handleFileChange('dob_proof', $event)" :class="{ 'is-invalid': errors.dob_proof }"
                            :disabled="isDisabled">
                        <span class="input-group-text bg-white" v-if="formData.documents.dob_proof">
                            <i class="ti ti-circle-check-filled text-success fs-5"></i>
                        </span>
                    </div>
                    <div class="invalid-feedback d-block" v-if="errors.dob_proof">{{ errors.dob_proof }}</div>
                    <div class="mt-2" v-if="formData.existingDocuments && formData.existingDocuments.dob_proof">
                        <a :href="formData.existingDocuments.dob_proof" target="_blank"
                            class="btn btn-sm btn-outline-primary">
                            <i class="ti ti-eye"></i> View Current Document
                        </a>
                    </div>
                </div>
            </div>

            <!-- Photograph -->
            <div class="col-md-6">
                <div class="upload-field mb-0">
                    <label class="form-label fw-bold">Photograph <span>*</span></label>
                    <div class="input-group">
                        <input type="file" class="form-control" accept=".jpg,.jpeg,.png"
                            @change="handleFileChange('photo', $event)" :class="{ 'is-invalid': errors.photo }"
                            :disabled="isDisabled">
                        <span class="input-group-text bg-white" v-if="formData.documents.photo">
                            <i class="ti ti-circle-check-filled text-success fs-5"></i>
                        </span>
                    </div>
                    <div class="invalid-feedback d-block" v-if="errors.photo">{{ errors.photo }}</div>
                    <div class="mt-2" v-if="formData.existingDocuments && formData.existingDocuments.photo">
                        <a :href="formData.existingDocuments.photo" target="_blank"
                            class="btn btn-sm btn-outline-primary">
                            <i class="ti ti-eye"></i> View Current Photograph
                        </a>
                    </div>
                </div>
            </div>

            <!-- Signature -->
            <div class="col-md-6">
                <div class="upload-field mb-0">
                    <label class="form-label fw-bold">Signature <span>*</span></label>
                    <div class="input-group">
                        <input type="file" class="form-control" accept=".jpg,.jpeg,.png"
                            @change="handleFileChange('signature', $event)" :class="{ 'is-invalid': errors.signature }"
                            :disabled="isDisabled">
                        <span class="input-group-text bg-white" v-if="formData.documents.signature">
                            <i class="ti ti-circle-check-filled text-success fs-5"></i>
                        </span>
                    </div>
                    <div class="invalid-feedback d-block" v-if="errors.signature">{{ errors.signature }}</div>
                    <div class="mt-2" v-if="formData.existingDocuments && formData.existingDocuments.signature">
                        <a :href="formData.existingDocuments.signature" target="_blank"
                            class="btn btn-sm btn-outline-primary">
                            <i class="ti ti-eye"></i> View Current Signature
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DocumentUpload",
    props: {
        formData: {
            type: Object,
            required: true
        },
        isDisabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            errors: {}
        };
    },
    methods: {
        scrollToFirstError() {
            this.$nextTick(() => {
                const el = this.$el.querySelector('.is-invalid');
                if (el && el.scrollIntoView) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        },
        handleFileChange(field, event) {
            const file = event.target.files[0];
            if (!file) {
                this.formData.documents[field] = null;
                return;
            }

            // Simple validation: Size check
            const maxSize = 2 * 1024 * 1024; // 2MB
            if (file.size > maxSize) {
                this.errors[field] = "File size exceeds 2MB limit.";
                event.target.value = ""; // Clear input
                this.formData.documents[field] = null;
                return;
            }

            // Accepted type check (Basic)
            const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
            if (!allowedTypes.includes(file.type)) {
                this.errors[field] = "Invalid file type. Only PDF/JPG/PNG allowed.";
                event.target.value = "";
                this.formData.documents[field] = null;
                return;
            }

            // Clear errors and store the File object for final submission
            delete this.errors[field];
            this.formData.documents[field] = file;
        },
        validate() {
            this.errors = {};
            let isValid = true;

            const requiredFields = {
                aadhaar: "Aadhaar Card is required",
                dob_proof: "Proof of DOB is required",
                photo: "Photograph is required",
                signature: "Signature is required"
            };

            Object.keys(requiredFields).forEach(field => {
                const hasNewDocument = !!this.formData.documents[field];
                const hasExistingDocument = !!(this.formData.existingDocuments && this.formData.existingDocuments[field]);

                if (!hasNewDocument && !hasExistingDocument) {
                    this.errors[field] = requiredFields[field];
                    isValid = false;
                }
            });

            return isValid;
        }
    }
};
</script>

<style scoped>
.form-label span {
    color: #dc3545;
}

.bg-light-info {
    background-color: #e7f3ff;
    color: #0c5460;
}

.input-group-text {
    border-left: none;
}

.form-control.is-invalid+.input-group-text {
    border-color: #dc3545;
}
</style>
