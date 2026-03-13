<template>
  <div class="inner-heros-warp">
    <div class="container-fluid">
      <div class="inner-hero-content d-flex align-items-center justify-content-center">
        <h1>{{ pageTitle }}</h1>
        <ul class="inner-hero-list ">
          <!-- <li>
            <NuxtLink to="/">HOME</NuxtLink>
          </li> -->
          <!-- <li>
            <span>{{ mainTitle }}</span>
          </li> -->
        </ul>
      </div>
    </div>
    <div class="all-shapes">
      <img src="~/assets/img/shapes/inner-page-shape1.png" class="inner-page-shape1" alt="image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InnerPageBanner",
  props: ["pageTitle", "mainTitle"],
});
</script>