<template>
  <div class="program-main-warp pb-100">
    <div class="container">
      <div class="row border-bottom g-4">
        <div class="col-lg-6">
          <div class="program-main-title">
            <h2>Online Education</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="faculty-list style2">
            <li>
              <NuxtLink to="/facilities">Faculty of Architecture</NuxtLink>
              <i class="ti ti-caret-right-filled"></i>
            </li>
            <li>
              <NuxtLink to="/facilities">Faculty of Sciences</NuxtLink>
              <i class="ti ti-caret-right-filled"></i>
            </li>
            <li>
              <NuxtLink to="/facilities">Faculty of Sport</NuxtLink>
              <i class="ti ti-caret-right-filled"></i>
            </li>
            <li>
              <NuxtLink to="/facilities">Faculty of Economics</NuxtLink>
              <i class="ti ti-caret-right-filled"></i>
            </li>
            <li>
              <NuxtLink to="/facilities">Faculty of Psychology</NuxtLink>
              <i class="ti ti-caret-right-filled"></i>
            </li>
            <li>
              <NuxtLink to="/facilities">Faculty of Medicine</NuxtLink>
              <i class="ti ti-caret-right-filled"></i>
            </li>
            <li>
              <NuxtLink to="/facilities">Faculty of Pharmacy</NuxtLink>
              <i class="ti ti-caret-right-filled"></i>
            </li>
            <li>
              <NuxtLink to="/facilities" class="another-link-color">
                View All
              </NuxtLink>
              <i class="ti ti-caret-right-filled another-link-color"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineEducation",
};
</script>
