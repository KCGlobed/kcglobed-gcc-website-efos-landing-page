<template>
  <div>
    <div class="facilities-small-widget event-small-widget">
      <h5>Event Details</h5>
      <div class="facilities-item">
        <span>Date:</span>
        <p>November 15, 2024</p>
      </div>
      <div class="facilities-item">
        <span>Time:</span>
        <p>10:00 am - 12:00 pm</p>
      </div>
      <div class="facilities-item">
        <span>Location:</span>
        <p>Davis Campus</p>
        <p>7899 McLaughlin Road, Brampton</p>
      </div>
      <div class="facilities-item">
        <span>Seats:</span>
        <p>100</p>
      </div>
      <div class="facilities-item">
        <span>Event Fee</span>
        <p>Free</p>
      </div>
    </div>
    <NuxtLink to="/admission-form" class="default-btn facilities-small">
      Apply To The Faculty Now
      <i class="ti ti-arrow-narrow-right"></i>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "EventWidget",
};
</script>
