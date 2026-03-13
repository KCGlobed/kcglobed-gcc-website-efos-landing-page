<template>
  <div class="program-choose-warp pb-100">
    <div class="container">
      <div class="program-choose-content">
        <h4>Please select up to 3 program choices in order of preference.</h4>
        <p>
          If you do not meet the requirements for your first program choice, we
          will process your second program choice and then your third program
          choice. Please note that the Fall term is scheduled from September to
          December; the Winter term is scheduled from January to April; and the
          Summer term is scheduled from May to August.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="input-bg">
            <div class="row align-items-center">
              <div class="col-lg-5">
                <div class="institution">
                  <p>Choice 01 <span>*</span></p>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="input-select">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--Select--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="input-bg">
            <div class="row align-items-center">
              <div class="col-lg-5">
                <div class="institution">
                  <p>Choice 02</p>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="input-select">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--Select--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="input-bg">
            <div class="row align-items-center">
              <div class="col-lg-5">
                <div class="institution">
                  <p>Choice 03</p>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="input-select">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--Select--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="next-button text-end pt-30">
        <a href="#" class="default-btn style2">
          <i class="ti ti-arrow-narrow-left"></i>
          Previous
        </a>
        <a href="#" class="default-btn">
          Next
          <i class="ti ti-arrow-narrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramChoice",
};
</script>
