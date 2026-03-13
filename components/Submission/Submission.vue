<template>
  <div class="submission-warp pb-100">
    <div class="container">
      <div class="submission-content">
        <h4>Your Application Is Ready To Submit.</h4>
        <p>
          Please review your information for accuracy and click on Edit to make
          changes.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="personal-info">
            <div class="info-content-icon">
              <h5>Personal Information</h5>
              <div class="icon">
                <a href="#">
                  Edit
                  <i class="ti ti-pencil"></i>
                </a>
              </div>
            </div>
            <ul class="information-list">
              <li>
                <p>Name:</p>
                <span>John Doe</span>
              </li>
              <li>
                <p>Address:</p>
                <span>
                  2105 Wallace Street
                  <br />
                  Nanaimo <br />
                  BC CANADA V9R 3A8
                </span>
              </li>
              <li>
                <p>Phone:</p>
                <span>Angela Carter</span>
              </li>
              <li>
                <p>Gender:</p>
                <span>Female</span>
              </li>
              <li>
                <p>Citizenship:</p>
                <span>USA</span>
              </li>
              <li>
                <p>Status In Canada:</p>
                <span>Other</span>
              </li>
              <li>
                <p>Fist Language:</p>
                <span>English</span>
              </li>
              <li>
                <p>Country Of Birth:</p>
                <span>USA</span>
              </li>
              <li>
                <p>Date Of Birth:</p>
                <span>1994/11/19</span>
              </li>
              <li>
                <p>Personal Email:</p>
                <span>angela324@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="personal-info academic-info">
            <div class="info-content-icon">
              <h5>Academic Information</h5>
              <div class="icon">
                <a href="#">
                  Edit
                  <i class="ti ti-pencil"></i>
                </a>
              </div>
            </div>
            <ul class="information-list">
              <li>
                <p>Senior Secondary / High School</p>
                <span>
                  Completed - Senior Secondary/High School Diploma or equivalent
                  <br />Completion Date: December 2018
                </span>
              </li>
              <li>
                <p>College</p>
                <span>
                  Completed - College Diploma or equivalent <br />Govt College
                  Of Applied Human <br />USA <br />
                  Start Date: January 2019 <br />
                  Completion Date: December 2019
                </span>
              </li>
              <li>
                <p>University</p>
                <span>
                  Completed - University Degree, Master, Doctorate, Bachelor, or
                  equivalent <br />Govt College Of Applied Human <br />USA
                  <br />Start Date: January 2020 <br />Completion Date: December
                  2020
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="form-check submission-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          I declare that the information I have supplied is true and complete. I
          understand that any false or incomplete information submitted in
          support of my application may invalidate my application and result in
          a withdrawal. Withdrawal may take place at any time during my
          enrollment.
        </label>
      </div>
      <div class="next-button text-end pt-30">
        <button class="default-btn" type="submit">
          Submit Application
          <i class="ti ti-arrow-narrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Submission",
};
</script>
