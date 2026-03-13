<template>
  <div :class="[
    'offcanvas offcanvas-end slide-bar-offcanvas',
    { show: stateStoreInstance.sidebar },
  ]">
    <div class="offcanvas-body">
      <button type="button" class="btn-close" @click="stateStoreInstance.onSidebarShow">
        <i class="flaticon-close"></i>
      </button>
      <div class="sidebar-warp">
        <div class="join-luva-box">
          <h3>Join Tuva</h3>
          <p>Lorem ipsum dolor sit amet nepoli.</p>
          <NuxtLink to="/admission-form" class="default-btn">
            Apply Now
            <i class="ti ti-arrow-narrow-right"></i>
          </NuxtLink>
        </div>
        <div class="directory-widget">
          <h3>Directory</h3>
          <ul class="directory-list">
            <li>
              <NuxtLink to="/blog">News Directory</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/academic-calendar">Academic Calendar</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/events">Events Directory</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="latest-side-news">
          <h3>Latest News</h3>
          <div class="blog-article-item">
            <span>Community</span>
            <h3>
              <NuxtLink to="/blog-details">
                Tuva to celebrate more than 2,500 graduates at fall convocation
              </NuxtLink>
            </h3>
            <ul class="article-list">
              <li>15 Nov 2024</li>
              <li>1 min read</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "../utils/store";

export default defineComponent({
  name: "MainSidebar",
  setup() {
    const stateStoreInstance = stateStore;
    return {
      stateStoreInstance,
    };
  },
});
</script>
