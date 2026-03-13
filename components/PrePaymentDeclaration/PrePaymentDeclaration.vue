<template>
  <div class="pre-payment-declaration-area pb-50">
    <div class="container">
      <div class="section-title">
        <h2>Pre-Payment Declaration</h2>
        <p>Before payment, applicant must accept all declarations.</p>
      </div>

      <div class="declaration-content pt-20">
        <form>
          <div class="form-check mb-3" v-for="(item, index) in declarations" :key="index">
            <input
              class="form-check-input"
              type="checkbox"
              :id="'dec' + index"
              v-model="formData[item.key]"
            />
            <label class="form-check-label" :for="'dec' + index">
              {{ item.label }}
            </label>
          </div>

          <!-- SINGLE ERROR MESSAGE -->
          <div class="text-danger mt-2 mb-3" v-if="errorMessage">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrePaymentDeclaration",
  props: {
    formData: Object
  },
  data() {
    return {
      errorMessage: "",
      declarations: [
        { key: "dec1", label: "I hereby declare that all personal, academic, and professional information submitted by me is true, complete, and accurate to the best of my knowledge." },
        { key: "dec2", label: "I understand that my eligibility will be verified at multiple stages, including document verification, exam, interview, and enrollment." },
        { key: "dec3", label: "I acknowledge that submission of application or payment of fees does not guarantee selection or admission to GCC School." },
        { key: "dec4", label: "I understand that if I am found ineligible, provide incorrect information, or fail verification at any stage, my application may be cancelled without any claim for refund, as per GCC School policy." },
        { key: "dec5", label: "If I am a working professional, I confirm that I have disclosed my employment status correctly and understand that full-time availability and resignation from current employment (if selected) is mandatory before enrollment." },
        { key: "dec6", label: "I agree to receive all official communication related to NFET, interviews, and admission only via email and GCC School dashboard. Payment button remains disabled until acceptance." }
      ]
    };
  },
  methods: {
    validate() {
      this.errorMessage = "";

      const allChecked = this.declarations.every(d => this.formData[d.key]);

      if (!allChecked) {
        this.errorMessage = "All declarations must be accepted before proceeding.";
        return false;
      }

      return true;
    }
  }
};
</script>