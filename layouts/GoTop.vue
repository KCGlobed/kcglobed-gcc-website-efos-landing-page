<template>
  <button
    type="button"
    id="backtotop"
    :class="['position-fixed text-center border-0 p-0', { active: isTop }]"
    @click="scrollToTop()"
  >
    <i class="ti ti-arrow-move-up"> north </i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GoTop",
  data() {
    return {
      isTop: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
  },
});
</script>
