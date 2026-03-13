<template>
  <div class="program-main-warp pb-100">
    <div class="container">
      <div class="row border-bottom g-4">
        <div class="col-lg-6">
          <div class="program-main-title">
            <h2>Major Programs</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="faculty-list style2">
            <li>
              <NuxtLink to="/facility-architecture">
                Faculty of Architecture
              </NuxtLink>
              <i class="ti ti-caret-right-filled"></i>
            </li>
            <li>
              <NuxtLink to="/facility-requirements">
                Faculty of Sciences
              </NuxtLink>
              <i class="ti ti-caret-right-filled"></i>
            </li>
            <li>
              <NuxtLink to="/facilities">Faculty of Sport</NuxtLink>
              <i class="ti ti-caret-right-filled"></i>
            </li>
            <li>
              <NuxtLink to="/administration-finance">
                Faculty of Economics
              </NuxtLink>
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
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MajorPrograms",
};
</script>
