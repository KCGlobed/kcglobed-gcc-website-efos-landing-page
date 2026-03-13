<template>
  <div class="my-account-warp ptb-100">
    <div class="container">
      <div class="inner-account-warp inner-login-widget m-auto">
        <div class="blog-title">
          <h2>Login Now</h2>
        </div>
        <form>
          <div class="row">
            <div class="col-lg-12">
              <div class="input-box">
                <label for="exampleFormControlInput9" class="form-label">
                  Email
                  <span>*</span>
                </label>
                <div class="input-with-icon">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput9"
                    placeholder="Email"
                  />
                  <i class="ti ti-mail"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-box">
                <label for="exampleFormControlInput15" class="form-label">
                  Password
                  <span>*</span>
                </label>
                <div class="input-with-icon">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  />
                  <i class="ti ti-lock"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Remember me
                </label>
              </div>
            </div>
            <div class="col-lg-12">
              <button class="default-btn" type="submit">
                Login Now
                <i class="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
          <p>
            Don’t have an account?
            <NuxtLink to="/register">Register Now </NuxtLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
