<template>
  <div class="administration-warp pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="administration-content">
            <div class="content-one">
              <h2>Admission Requirements</h2>
              <p>
                Creative, innovative learning is at the core of all Tuva’s
                courses. Here are the courses you’ll take in this program.
              </p>
            </div>
            <div class="administration-requirement-content">
              <h4>Program Eligibility</h4>
              <p>
                Ontario Secondary School Diploma or equivalent, including these
                required courses:
              </p>
              <ul class="administration-requirement-list">
                <li>One English, Grade 12 (ENG4C or ENG4U), minimum 60%</li>
                <li>
                  Mathematics, Grade 12 (C or U) or mathematics, Grade 11 (M or
                  U*) * MBF3C does not meet this requirement.
                </li>
                <li>
                  Minimum 65% overall average required for PBUSP, PBUSA, PBSAA
                </li>
                <li>Minimum 70% overall average required for PBSAC</li>
              </ul>
            </div>
            <div class="administration-requirement-content">
              <h4>Applicant Selection</h4>
              <p>
                Eligible applicants are selected on the basis of previous
                academic achievement (the average of their six highest
                senior-level credits, including required courses).
              </p>
              <p>
                Applicants who do not meet the admission requirements for this
                program may be advised individually regarding other related
                programs.
              </p>
            </div>
            <div class="administration-requirement-content">
              <h4>Transferring from an Ontario College</h4>
              <p>
                Business students who have successfully completed one or two
                years of their program can easily transfer their credits to
                another college in the province. A system-wide agreement is in
                place at Tuva and other colleges, permitting students to
                transfer among all college business programs across Ontario.
              </p>
            </div>
            <div class="requirement-language">
              <h4>English Language Proficiency</h4>
              <p>
                All applicants whose first language is not English must meet
                Tuva’s
                <NuxtLink to="/english-proficiency">
                  English proficiency requirements.
                </NuxtLink>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="administration-small-widget">
            <h5>Information</h5>
            <div class="administration-item">
              <span>Faculty:</span>
              <p>Tuva School of Business</p>
            </div>
            <div class="administration-item">
              <span>Designation:</span>
              <p>Tuva College Advanced Diploma</p>
            </div>
            <div class="administration-item">
              <span>Duration:</span>
              <p>3 years (6 semesters)</p>
            </div>
            <div class="administration-item">
              <span>Location:</span>
              <p>Davis Campus</p>
              <p>7899 McLaughlin Road, Brampton</p>
            </div>
            <div class="administration-item">
              <span>Language:</span>
              <p>English, French</p>
            </div>
          </div>
          <NuxtLink to="/admission-form" class="default-btn administration-small">
            Apply Today
            <i class="ti ti-arrow-narrow-right"></i>
          </NuxtLink>
          <NuxtLink to="/about-campus" class="administration-requirements">
            Book A Campus Tour
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdministrationAdmissionRequirements",
};
</script>
