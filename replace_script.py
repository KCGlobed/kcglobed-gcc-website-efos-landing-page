import re

with open('components/Common/DossierModal.vue', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. template button
content = content.replace(
"""                                <button type="button" @click="handlePayment"
                                    class="btn btn-register w-100 py-3 fw-bold text-uppercase"
                                    :disabled="isPaymentInProgress">
                                    <span v-if="isPaymentInProgress"
                                        class="spinner-border spinner-border-sm me-2"></span>
                                    {{ isPaymentInProgress ? 'Opening Payment...' : 'PAY NOW' }}
                                </button>""",
"""                                <button type="button" @click="handleCreateStudent"
                                    class="btn btn-register w-100 py-3 fw-bold text-uppercase"
                                    :disabled="isProcessingStudent">
                                    <span v-if="isProcessingStudent"
                                        class="spinner-border spinner-border-sm me-2"></span>
                                    {{ isProcessingStudent ? 'Creating Account...' : 'CREATE ACCOUNT' }}
                                </button>"""
)

# 2. isPaymentInProgress -> isProcessingStudent ref
content = content.replace(
"        const isPaymentInProgress = ref(false);",
"        const isProcessingStudent = ref(false);"
)

# 3. submitForm apply mode
content = content.replace(
"""                        } else {
                            // In apply mode: skip download, go straight to payment
                            showNotification('success', 'Details submitted! Opening payment...');
                            isDownloaded.value = true;
                            // Trigger payment automatically
                            await handlePayment();
                        }""",
"""                        } else {
                            // In apply mode: skip download, go straight to account creation
                            showNotification('success', 'Details submitted! Creating Account...');
                            isDownloaded.value = true;
                            // Trigger account creation automatically
                            await handleCreateStudent();
                        }"""
)

# 4. submitForm dossier mode
content = content.replace(
"""                        } else {
                            isDownloaded.value = true;
                            showNotification('success', 'Dossier downloaded! You can now proceed to pay the application fee.');
                        }""",
"""                        } else {
                            isDownloaded.value = true;
                            showNotification('success', 'Dossier downloaded! You can now proceed to create your account.');
                        }"""
)

# 5. handlePayment block
new_handle_create_student = """        const handleCreateStudent = async () => {
            if (!validateForm()) return;

            notification.message = '';
            notification.type = '';

            const config = useRuntimeConfig();

            // 1. Pre-Payment Email Validation (Checked BEFORE showing any modal)
            try {
                const checkRes: any = await $fetch(
                    `${config.public.apiBase}/api/users/check_email/`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: { email: form.email },
                    }
                );

                if (checkRes.data?.isExist) {
                    await closeDossierModal(); // Close dossier before showing error
                    showAlert('', 'An account with this email address already exists. Please <a href="/login" class="text-purple fw-bold">log in</a> or <a href="/forgot-password" class="text-purple fw-bold">reset your password</a> if you <a href="/forgot-password" class="text-purple fw-bold">forgot it</a>.', 'error');
                    return;
                }
            } catch (checkErr: any) {
                // If status is 404, it means email is NOT registered, so we proceed.
                if (checkErr.status !== 404) {
                    console.error('[CheckEmail] Error:', checkErr);
                    showAlert('Validation Error', 'Failed to validate email status. Please try again.', 'error');
                    return;
                }
                // If 404, email is available, so we continue to payment.
            }

            // Open the Status Modal in processing mode only AFTER validation passes
            isProcessingStudent.value = true;
            await openStatusModal('processing', 'Creating your account...');

            try {
                const studentRes: any = await $fetch(
                    `${config.public.apiBase}/api/users/create_student/`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: {
                            "full_name": form.name,
                            "email": form.email,
                            "city": form.city,
                            "state": form.state,
                            "country": "India",
                            "phone1": form.phone
                        },
                    }
                );
                
                paymentStatus.value = 'success';
                paymentId.value = 'SKIP_PAYMENT';
                processingMessage.value = 'Account Created Successfully!';
                await openStatusModal('success', 'Account Created Successfully!', 'SKIP_PAYMENT');
                resetForm();

                setTimeout(async () => {
                    await closeStatusModal();
                    await closeDossierModal();
                    isProcessingStudent.value = false;
                    return navigateTo({
                        path: '/thank-you',
                        query: { payment_id: 'SKIP_PAYMENT' }
                    });
                }, 2000);
            } catch (err) {
                await closeStatusModal();
                console.error(err);
                isProcessingStudent.value = false;
                showNotification('error', 'Account creation failed');
            }
        };"""

# Use regex to find and replace the entire handlePayment function
pattern = re.compile(r'        const handlePayment = async \(\) => \{.*?\n        \};\n', re.DOTALL)
content = pattern.sub(new_handle_create_student + '\n', content)

# 6. Return statement exports
content = content.replace(
"""            isDownloaded,
            isPaymentInProgress,
            submitForm,
            handlePayment,""",
"""            isDownloaded,
            isProcessingStudent,
            submitForm,
            handleCreateStudent,"""
)

with open('components/Common/DossierModal.vue', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replacement successful.")
