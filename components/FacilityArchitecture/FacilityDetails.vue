<template>
  <div>
    <div class="facilities-small-widget">
      <h5>Facility Details</h5>
      <div class="facilities-item">
        <span>Type Of Course:</span>
        <p>Integrated Master</p>
      </div>
      <div class="facilities-item">
        <span>Duration:</span>
        <p>10 Semesters / 300ECTS</p>
      </div>
      <div class="facilities-item">
        <span>Number Of Seats*:</span>
        <p>125</p>
      </div>
      <div class="facilities-item">
        <span>Mark of the last classified* (2024/2024)</span>
        <p>1ª Phase 184.5</p>
        <p>2ª Phase 192</p>
      </div>
      <div class="facilities-item">
        <span>Language:</span>
        <p>English, French</p>
      </div>
      <div class="facilities-item">
        <span>Annual Tuition Fee (Full Tuition Fee)</span>
        <p>National: 697.00€</p>
        <p>International: 2337.50€</p>
        <p>CPLP International: 2337.50€</p>
      </div>
      <p class="info">
        * Information only related to the National Call for Applications
      </p>
    </div>
    <NuxtLink to="/admission-form" class="default-btn facilities-small">
      Apply To The Faculty Now
      <i class="ti ti-arrow-narrow-right"></i>
    </NuxtLink>
    <NuxtLink to="/facility-requirements" class="facilities-requirements">
      View All Requirements
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "FacilityDetails",
};
</script>
