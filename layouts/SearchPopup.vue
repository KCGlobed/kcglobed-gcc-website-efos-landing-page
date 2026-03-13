<template>
  <div
    class="search-popup"
    :class="['search-popup', { active: stateStoreInstance.open }]"
  >
    <div
      class="search-popup-overlay search-toggler"
      @click="stateStoreInstance.onChange"
    ></div>
    <div class="search-popup-content">
      <form role="search" method="get" class="search-popup-form" action="#">
        <input
          type="text"
          class="form-control"
          id="search"
          placeholder="Search Here..."
        />
        <button type="submit" aria-label="search submit" class="default-btn">
          <i class="ti ti-search"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "../utils/store";

export default defineComponent({
  name: "SearchPopup",
  setup() {
    const stateStoreInstance = stateStore;
    return {
      stateStoreInstance,
    };
  },
});
</script>
