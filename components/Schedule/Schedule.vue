<template>
  <div class="schedule-warp ptb-100">
    <div class="container">
      <form>
        <div class="select-option mt-0">
          <h3>Choose a reason of the tour</h3>
          <ul class="select-option-list">
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  I want a visit in the college before admission
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  I am a future student
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label class="form-check-label" for="flexRadioDefault3">
                  I am an alumni
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div class="applicant-details">
          <h3>Fill up the form</h3>
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
                <label for="exampleFormControlInput3" class="form-label">
                  Email
                  <span>*</span>
                </label>
                <div class="input-with-icon">
                  <input
                    class="form-control"
                    id="exampleFormControlInput3"
                    placeholder="Email"
                  />
                  <i class="ti ti-mail"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="input-box">
                <label for="exampleFormControlInput4" class="form-label">
                  Phone No
                  <span>*</span>
                </label>
                <div class="input-with-icon">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput4"
                    placeholder="Phone No"
                  />
                  <i class="ti ti-phone-call"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="input-box">
                <label for="exampleFormControlInput5" class="form-label">
                  Address
                  <span>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput5"
                  placeholder="Address"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="input-box">
                <label for="exampleFormControlInput3" class="form-label">
                  Postal/ZIP Code
                  <span>*</span>
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>--Select--</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="input-box">
                <label for="exampleFormControlInput6" class="form-label">
                  When you would like to visit
                  <span>*</span>
                </label>
                <div class="input-with-icon">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput6"
                    placeholder="Add Date"
                  />
                  <i class="ti ti-calendar"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="input-box">
                <label for="exampleFormControlInput9" class="form-label">
                  <span></span>
                </label>
                <div class="input-with-icon">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput9"
                    placeholder="Add Time"
                  />
                  <i class="ti ti-time-duration-60"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-box">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Additional Information
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Let us know if you have anything else to know..."
                ></textarea>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault55"
                />
                <label class="form-check-label" for="flexRadioDefault55">
                  By submitting this form, you agree to the Tuva University
                  privacy notice.
                </label>
              </div>
            </div>
            <div class="col-lg-12">
              <button class="default-btn" type="submit">
                Submit Now <i class="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Schedule",
};
</script>
