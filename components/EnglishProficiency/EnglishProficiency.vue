<template>
  <div class="english-proficiency-warp pb-100">
    <div class="container">
      <div class="english-proficiency-content">
        <p>
          Please tell us how you plan to meet Tuva’s English Language
          requirement.
        </p>
        <ul class="english-proficiency-list">
          <li>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                I will enroll in Tuva's English for Academic Purposes (EAP)
                program.
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
                I have completed Tuva's English for Academic Purposes (EAP)
                program.
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
                I will submit English proficiency test scores (IELTS, TOEFL,
                PTEA, etc.)
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label class="form-check-label" for="flexRadioDefault4">
                I will submit a certificate of completion from one of Tuva's
                English language partnership schools or from a public Ontario
                college EAP program.
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
              />
              <label class="form-check-label" for="flexRadioDefault5">
                I am currently attending or will attend a pathway program with
                one of Tuva's English language partnership schools or with a
                public Ontario college.
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault6"
              />
              <label class="form-check-label" for="flexRadioDefault6">
                English is my first language.
              </label>
            </div>
          </li>
        </ul>
        <div class="next-button text-end pt-30">
          <a href="#" class="default-btn style2">
            <i class="ti ti-arrow-narrow-left"></i>
            Previous
          </a>
          <a href="#" class="default-btn"
            >Next
            <i class="ti ti-arrow-narrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EnglishProficiency",
};
</script>
