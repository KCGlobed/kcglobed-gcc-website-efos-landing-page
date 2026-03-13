<template>
  <div class="about-all-pages pt-50 mb-50">
    <div class="container">
      <div class="inner-all-pages personal-info-tab">
        <ul class="about-pages-list style2">
          <li v-for="(step, index) in steps" :key="index">
            <a style="cursor: pointer;" :class="{
              active: activeStep === index + 1,
              invalid: invalidSteps.includes(index + 1)
            }" @click="$emit('step-selected', index + 1)">
              {{ step }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.personal-info-tab .about-pages-list li a.invalid {
  color: #ff4d4f !important;
  font-weight: 600;
}
</style>
<script>
export default {
  name: "ApplicationPagesList",
  props: {
    activeStep: Number,
    invalidSteps: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      steps: [
        "PERSONAL INFORMATION",
        "ACADEMIC INFORMATION",
        "WORK EXPERIENCE DETAILS",
        "DOCUMENT UPLOADS",
        "PRE-PAYMENT DECLARATION (MANDATORY)"
      ]
    };
  },
  emits: ['step-selected']
};
</script>
<style>
.personal-info-tab a {
  color: #7b7b93 !important;

}

.personal-info-tab .about-pages-list.style2 li a.active {
  color: #fff !important;
}
</style>
