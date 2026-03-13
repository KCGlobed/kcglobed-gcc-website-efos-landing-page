<template>
  <div class="facilities-details-warp ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="facilities-details-widget">
            <div class="content1">
              <h3>Integrated Master in Architecture</h3>
              <p>
                The product of a long tradition, to which such emblematic
                figures as Álvaro Siza and Eduardo Souto de Moura (winners of
                the prestigious Pritzker prize in 1992 and 2011, respectively)
                have contributed.
              </p>
              <p>
                , the architecture course offered by the “Tuva” provides general
                training for future architects, widely recognized
                internationally. From your fourth year, you can apply to
                participate in exchange programmes with some of Europe’s best
                universities.
              </p>
            </div>
            <div class="image">
              <img src="~/assets/img/abouts/inner-about14.jpg" alt="image" />
            </div>
            <div class="content2">
              <h5>Job Opportunities</h5>
              <p>
                Architecture and urbanism offices, collaborating in all phases
                of project development and in areas of rehabilitation, urban
                planning, sustainability, and more. Graduates are also qualified
                to work as lecturers or researchers in higher education, or to
                work within local authorities and State central offices,
                companies involved in construction, supervision and works
                management.
              </p>
            </div>
            <div class="accreditation">
              <h5>Accreditation</h5>
              <div class="dges">
                <h6>DGES</h6>
                <p>Registration n.ºR/A-Ef 2573/2011 in March 18, 2011</p>
              </div>
              <div class="a3es">
                <h6>A3ES</h6>
                <p>
                  Date of publication of the accreditation decision: Jan. 22,
                  2020 Validity of accreditation: 6 years
                </p>
              </div>
            </div>
            <NuxtLink to="/facilities" class="default-btn">
              <i class="ti ti-arrow-narrow-left"></i>
              Go Back To The Faculty List
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-4">
          <FacilityArchitectureFacilityDetails />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntegratedMasterArchitecture",
};
</script>
