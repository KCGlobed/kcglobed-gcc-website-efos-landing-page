<template>
  <div class="my-account-warp ptb-100">
    <div class="container">
      <div class="inner-account-warp m-auto">
        <div class="blog-title">
          <h2>Register Now</h2>
        </div>
        <form>
          <div class="row">
            <div class="col-lg-6">
              <div class="input-box">
                <label for="exampleFormControlInput1" class="form-label">
                  First Name
                  <span>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="input-box">
                <label for="exampleFormControlInput2" class="form-label">
                  Last Name
                  <span>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="col-lg-6">
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
            <div class="col-lg-6">
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
                  By submitting this form, you agree to the Tuva University
                  privacy notice.
                </label>
              </div>
            </div>
            <div class="col-lg-12">
              <button class="default-btn" type="submit">
                Register Now <i class="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
            <p>
              Already have an account?
              <NuxtLink to="/login">Log In Now</NuxtLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>
