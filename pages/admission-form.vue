<template>
  <div>
    <LayoutTopHeader />
    <LayoutMainNavbar />
    <!-- <LayoutNavbarStyleTwo class="inner-navbar" /> -->
    <CommonInnerPageBanner pageTitle="Application Form" />

    <CommonApplicationPagesList :activeStep="currentStep" :invalidSteps="invalidSteps"
      @step-selected="handleStepSelection" />

    <keep-alive>
      <component :is="activeComponent" ref="currentStepComponent" :formData="formData" :userId="userId" />
    </keep-alive>

    <div class="container pb-100">
      <div class="row">
        <div class="col-lg-12">
          <div class="d-flex justify-content-between">
            <button class="default-btn" @click="prevStep" v-if="currentStep > 1">
              <i class="ti ti-arrow-narrow-left"></i> Back
            </button>
            <div v-else></div> <!-- Spacer -->

            <button class="default-btn" @click="nextStep" v-if="currentStep < totalSteps">
              Next <i class="ti ti-arrow-narrow-right"></i>
            </button>
            <button class="default-btn" v-else @click="handleFinalSubmit">
              Proceed to Pay <i class="ti ti-check"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <LayoutMainFooter />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useHead } from "#imports";
import PersonalInformation from "../components/PersonalInformation/PersonalInformation.vue";
import AcademicInformation from "../components/AcademicInformation/AcademicInformation.vue";
import WorkExperienceDetails from "../components/WorkExperienceDetails/WorkExperienceDetails.vue";
import DocumentUpload from "../components/DocumentUpload/DocumentUpload.vue";
import PrePaymentDeclaration from "../components/PrePaymentDeclaration/PrePaymentDeclaration.vue";

export default defineComponent({
  name: "ApplicationFormPage",
  components: {
    PersonalInformation,
    AcademicInformation,
    WorkExperienceDetails,
    DocumentUpload,
    PrePaymentDeclaration,
  },
  setup() {
    const currentStep = ref(1);
    useHead({
      title: "Application Form",
      meta: [
        {
          name: "description",
          content: "Apply online to GCC University. Complete your application form and proceed with payment."
        }
      ]
    });
    const totalSteps = 5;
    const invalidSteps = ref<number[]>([]);
    const userId = ref<number | null>(null);
    const formData = reactive({
      first_name: "",
      last_name: "",
      father_name: "",
      father_mobile: "",
      father_email: "",
      father_occupation: "",
      father_occupation_other: "",
      mother_name: "",
      mother_mobile: "",
      mother_email: "",
      mother_occupation: "",
      mother_occupation_other: "",
      dob: "",
      gender: "",
      nationality: "Indian",
      email: "",
      mobile: "",
      city: "",
      state: "",
      pin_code: "",
      class10_year: "",
      class10_score: "",
      class12_year: "",
      class12_score: "",
      medium: "",
      medium_other: "",
      ug_status: "",
      first_division: "",
      ug_cgpa: "",
      ug_institution: "",
      pg_exists: "",
      pg_type: "",
      pg_other: "",
      pg_institution: "",
      work_experience: [],
      documents: {}
    });
    const currentStepComponent = ref<any>(null);

    // ── CASHFREE: Load JS SDK ─────────────────────────────────────────────────
    function loadCashfreeScript() {
      return new Promise((resolve) => {
        if ((window as any).Cashfree) { resolve(true); return; }
        const script = document.createElement("script");
        script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    }

    // ── RAZORPAY: Load Script (disabled) ─────────────────────────────────────
    // function loadRazorpayScript() {
    //   return new Promise((resolve) => {
    //     if ((window as any).Razorpay) { resolve(true); return; }
    //     const script = document.createElement("script");
    //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
    //     script.onload = () => resolve(true);
    //     script.onerror = () => resolve(false);
    //     document.body.appendChild(script);
    //   });
    // }

    const activeComponent = computed(() => {
      switch (currentStep.value) {
        case 1:
          return "PersonalInformation";
        case 2:
          return "AcademicInformation";
        case 3:
          return "WorkExperienceDetails";
        case 4:
          return "DocumentUpload";
        case 5:
          return "PrePaymentDeclaration";
        default:
          return "PersonalInformation";
      }
    });

    const handleStepSelection = async (step: number) => {
      invalidSteps.value = [];

      // validate all previous steps
      for (let i = 1; i < step; i++) {
        currentStep.value = i;
        await nextTick();

        // precise delay to ensure component mount if needed (rare but safe)
        if (!currentStepComponent.value) {
          await new Promise(r => setTimeout(r, 10));
        }

        if (currentStepComponent.value?.validate) {
          const ok = currentStepComponent.value.validate();
          if (!ok) {
            invalidSteps.value.push(i);
          }
        }
      }

      // go to clicked step anyway
      currentStep.value = step;
    };

    const nextStep = async () => {
      // 1. Validate current step
      if (currentStepComponent.value?.validate) {
        const isValid = currentStepComponent.value.validate();
        if (!isValid) return;
      }

      // 2. Check for any previous invalid steps (from skipped navigation)
      if (invalidSteps.value.length > 0) {
        const firstInvalid = invalidSteps.value.find(s => s < currentStep.value);
        if (firstInvalid) {
          alert(`Please complete Step ${firstInvalid} (${getHeaderForStep(firstInvalid)}) before proceeding.`);
          return;
        }
      }

      // Submit data after Work Experience (Step 3)
      if (currentStep.value === 3) {
        const saved = await submitUserData();
        if (!saved) return; // stop if API fails
      }

      if (currentStep.value < totalSteps) {
        currentStep.value++;
      }
    };

    // Helper to get step name for alert
    const getHeaderForStep = (index: number) => {
      const headers = [
        "Personal Info",
        "Academic Info",
        "Work Experience",
        "Documents",
        "Declaration"
      ];
      return headers[index - 1] || "Unknown Step";
    };

    const prevStep = () => {
      if (currentStep.value > 1) {
        currentStep.value--;
        // window.scrollTo(0, 0);
      }
    };

    const submitUserData = async () => {
      try {
        const response: any = await $fetch("/api/register-user", {
          method: "POST",
          body: formData
        });

        if (!response.success) {
          alert(response.message || "Submission failed");
          return false;
        }

        userId.value = response.user_id; // 👈 store it here
        console.log("User ID:", userId.value);

        return true;
      } catch (error) {
        console.error("API Error:", error);
        alert("Something went wrong. Please try again.");
        return false;
      }
    };

    const handleFinalSubmit = async () => {
      // 1. Validate current step (Declaration)
      if (currentStepComponent.value?.validate) {
        const isValid = currentStepComponent.value.validate();
        if (!isValid) return;
      }

      // 2. Check for any previous invalid steps
      if (invalidSteps.value.length > 0) {
        const firstInvalid = invalidSteps.value[0]; // Any invalid step is a blocker for final submit
        alert(`Please complete Step ${firstInvalid} (${getHeaderForStep(firstInvalid)}) before proceeding.`);
        return;
      }

      try {
        // 1. Call backend to create Cashfree order
        const res: any = await $fetch("/api/start-payment", {
          method: "POST",
          body: {
            user_id: userId.value,
            name: formData.first_name + " " + formData.last_name,
            email: formData.email,
            mobile: formData.mobile
          }
        });

        if (!res.success) {
          alert(res.message || "Payment initiation failed");
          return;
        }

        // 2. Load Cashfree JS SDK
        const loaded = await loadCashfreeScript();
        if (!loaded || !(window as any).Cashfree) {
          alert("Cashfree SDK failed to load");
          return;
        }

        // 3. Open Cashfree Checkout
        const cfMode = res.environment === 'PRODUCTION' ? 'production' : 'sandbox';
        const cashfree = (window as any).Cashfree({ mode: cfMode });

        cashfree.checkout({
          paymentSessionId: res.payment_session_id,
          redirectTarget: "_modal"
        }).then(async (result: any) => {
          if (result.error) {
            console.error("[PAYMENT] Cashfree error:", result.error);
            try {
              await $fetch("/api/report-payment-failure", {
                method: "POST",
                body: {
                  cf_order_id: res.cf_order_id,
                  cf_payment_id: result.error?.payment_id || null,
                  error_code: result.error?.code,
                  error_description: result.error?.message,
                  error_source: result.error?.source
                }
              });
            } catch (e) { console.error("Failed to report failure:", e); }
            alert(`Payment Failed: ${result.error.message || "Unknown error"}`);

          } else if (result.paymentDetails) {
            // Payment successful – verify on server
            try {
              await $fetch("/api/complete-payment", {
                method: "POST",
                body: {
                  cf_order_id: res.cf_order_id,
                  cf_payment_id: result.paymentDetails.paymentMessage || result.paymentDetails.cf_payment_id
                }
              });
              alert("Payment Successful!");
            } catch (e) {
              console.error("[PAYMENT] complete-payment error:", e);
              alert("Payment done but verification failed. Please contact support.");
            }
          }
        });

        // ── RAZORPAY CHECKOUT (disabled) ─────────────────────────────────────
        // const options = {
        //   key: res.razorpay_key, amount: res.amount, currency: res.currency,
        //   name: "Application Fee", description: "NFET Application Payment",
        //   order_id: res.razorpay_order_id,
        //   handler: async (response) => { await $fetch("/api/complete-payment", { ... }); },
        //   prefill: { name, email, contact: mobile },
        //   theme: { color: "#FBB03B" }
        // };
        // const rzp = new (window as any).Razorpay(options);
        // rzp.on("payment.failed", async (response) => { ... });
        // rzp.open();

      } catch (err) {
        console.error(err);
        alert("Payment initiation failed");
      }
    };

    return {
      currentStep,
      totalSteps,
      activeComponent,
      handleStepSelection,
      nextStep,
      prevStep,
      currentStepComponent,
      handleFinalSubmit,
      formData,
      userId,
      invalidSteps
    };
  },
});
</script>
