<template>
  <div class="parking-locker-warp ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="parking-locker-content">
            <div class="blog-title">
              <h2>Parking and Locker Services</h2>
              <p>
                Visit Tuva's online portal, ePark. Students can find information
                about locker rentals on Tuva Central.
              </p>
            </div>
            <div class="parking-location-widget">
              <h4>Parking Office Locations, Hours and Contact Information</h4>
              <div class="parking-item">
                <h5>Trafalgar Road Campus (Oakville)</h5>
                <ul class="parking-item-list">
                  <li>Bookstore (lower level)</li>
                  <li>Monday to Friday – 8:30 a.m.–4:30 p.m.</li>
                  <li>
                    <a href="tel:+132313242354">+1 3231 3242 354</a>
                  </li>
                </ul>
              </div>
              <div class="parking-item">
                <h5>Davis Campus (Brampton)</h5>
                <ul class="parking-item-list">
                  <li>Room C206</li>
                  <li>Monday to Friday – 8:30 a.m.–4:30 p.m.</li>
                  <li>
                    <a href="tel:+132313544234">+1 3231 3544 234</a>
                  </li>
                </ul>
              </div>
              <div class="parking-item">
                <h5>Hazel McCallion Campus (Mississauga)</h5>
                <ul class="parking-item-list">
                  <li>Room B376</li>
                  <li>Monday to Friday – 8:30 a.m.–4:30 p.m.</li>
                  <li>
                    <a href="tel:+138743542414">+1 3874 3542 414</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="parking-notice">
              <h4>Parking Notices</h4>
              <ul class="parking-notice-list">
                <li>
                  <span> Virtual Permit:</span> only valid at Davis and
                  Trafalgar campus because parking is enforced by License Plate
                  Recognition.
                </li>
                <li>
                  <span> Physical Permit:</span> must be displayed when using
                  the Cineplex/IMAX parking lot at HMC. If you frequently work
                  or visit this campus, choose the option to get a physical
                  parking permit.
                </li>
                <li>
                  Parking Services uses License Plate Recognition to identify
                  valid permit holders. Make sure your license plate is up to
                  date when you purchase your parking permit.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="accessibility-link-widget">
            <ul class="accessibility-link-list">
              <li>
                <NuxtLink to="/accessibility">Accessibility At Tuva</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/book-store">Book Store</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/information-technology">
                  Information & Technology
                </NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/parking-locker"> Parking & Locker </NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/residence">Residence</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParkingLocker",
};
</script>
