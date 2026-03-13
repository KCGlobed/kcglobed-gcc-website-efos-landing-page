<template>
  <div class="book-store-warp ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="book-store-content">
            <div class="blog-title">
              <h2>We have on campus & online Bookstore</h2>
              <p>
                The Bookstore is your on-campus and online source for all your
                course material requirements, including all course textbooks,
                course packs, and fine art supplies. The Bookstore also offers a
                large selection of Sheridan apparel, giftware, snacks and more!
              </p>
            </div>
            <div class="online-list-widget">
              <h4>Online store and course materials</h4>
              <ul class="online-list">
                <li>
                  <NuxtLink to="/about-overview">
                    – Davis Campus Online Bookstore
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about-overview">
                    – Hazel McCallion Campus Online Bookstore
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about-overview">
                    – Trafalgar Road Campus Online Bookstore
                  </NuxtLink>
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
                <NuxtLink to="/parking-locker">Parking & Locker</NuxtLink>
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
  name: "BookStore",
};
</script>
