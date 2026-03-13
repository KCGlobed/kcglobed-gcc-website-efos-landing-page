<template>
  <div class="requirement-warp ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="requirements-small-widget">
            <ul class="requirement-list">
              <li>
                <NuxtLink to="/graduate-programs">Graduate Program</NuxtLink>
                <i class="ti ti-caret-right-filled"></i>
              </li>
              <li>
                <NuxtLink to="/undergraduate-programs">
                  Undergraduate Program
                </NuxtLink>
                <i class="ti ti-caret-right-filled"></i>
              </li>
              <li>
                <NuxtLink to="/programs">Online Program</NuxtLink>
                <i class="ti ti-caret-right-filled"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="requirement-big-warp">
            <h2>Graduate Program Requirement</h2>
            <p>– Open to students 18 years and over at course commencement</p>
            <p>
              – If English is not your first language, you will need to
              demonstrate English language proficiency equivalent to IELTS
              (Academic) 6.0 overall, with a minimum of 5.5 in each band and 6.0
              in speaking.
            </p>
            <p>
              – All applicants are interviewed as part of the admissions
              process.
            </p>
            <p>
              – Applicants not meeting the entry criteria may be considered on a
              case by case basis by the Academic Director. Consideration will be
              given to those with appropriate and evidenced previous academic
              history, prior work experience and life skills experience.
            </p>
            <span>
              Are you ready to take the next step toward your future career?
            </span>
            <div class="requirement-button">
              <NuxtLink to="/admission-form" class="default-btn style1">
                Apply Now
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
              <NuxtLink to="/how-to-apply" class="default-btn style2">
                See How To Apply
                <i class="ti ti-arrow-narrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Requirements",
};
</script>
