<template>
  <div class="health-service-warp ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="health-service-content">
            <div class="blog-title">
              <h2>Health Service</h2>
              <p>
                Our Davis, Hazel McCallion (HMC) and Trafalgar Campus Health
                Centres are open for in-person appointments. However, all
                appointments will begin with a virtual consultation with a
                nurse, nurse practitioner or doctor, who will determine whether
                an in-person appointment is needed.
              </p>
            </div>
            <div class="health-service-location-widget">
              <h4>
                Students may call the Health Centres below to book an
                appointment.
              </h4>
              <div class="health-service-item">
                <h5>Davis Campus (Brampton):</h5>
                <ul class="parking-item-list">
                  <li>Bookstore (lower level)</li>
                  <li>Monday to Friday – 8:30 a.m.–4:30 p.m.</li>
                  <li>
                    <a href="tel:+132313242354">+1 3231 3242 354</a>
                  </li>
                </ul>
              </div>
              <div class="health-service-item">
                <h5>Hazel McCallion Campus (Mississauga):</h5>
                <ul class="parking-item-list">
                  <li>Room C206</li>
                  <li>Monday to Friday – 8:30 a.m.–4:30 p.m.</li>
                  <li>
                    <a href="tel:+132313544234">+1 3231 3544 234</a>
                  </li>
                </ul>
              </div>
              <div class="health-service-item">
                <h5>Trafalgar Road Campus (Oakville):</h5>
                <ul class="parking-item-list">
                  <li>Room B376</li>
                  <li>Monday to Friday – 8:30 a.m.–4:30 p.m.</li>
                  <li>
                    <a href="tel:+138743542414">+1 3874 3542 414</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="health-service-appointment">
              <h4>Procedure for In-Person Appointments</h4>
              <p>
                If it is determined that an in-person appointment is needed,
                students will be pre-screened for symptoms of COVID-19 and
                instructed to come to campus.
              </p>
              <p>
                Students attending an in-person consultation will be treated by
                a nurse at the entrance area, otherwise they will be directed to
                the Health Centre.
              </p>
              <p>
                If students feel ill on the day of their appointment, including
                experiencing COVID-19 symptoms, they are asked to call the
                Health Centre in advance of coming to campus for further
                direction. Please do NOT come to campus if you think you have
                contracted or been exposed to COVID-19, or if you are sick with
                symptoms.
              </p>
            </div>
            <div class="health-service-contact">
              <h4>Contact Us</h4>
              <p>
                If you have any questions about Career Services, you may email
                our team at
              </p>
              <ul class="health-service-contact-list">
                <li>Phone: <a href="tel:132313242354"> +1 3231 3242 354</a></li>
                <li>
                  Email <a href="mailto:info.gccschool.com">info.gccschool.com</a>
                </li>
                <li>
                  Mailing address:
                  <span
                    >Manager, Accessibility and Inclusion, Centre for Equity and
                    Inclusion, Davis Campus 7899 McLaughlin Road, Brampton</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="accessibility-link-widget">
            <ul class="accessibility-link-list">
              <li>
                <NuxtLink to="/career-services">Career Service</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/health-services">Health Service</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/library-services">Library Service</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/tutoring-services">Tutoring Center</NuxtLink>
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
  name: "HealthService",
};
</script>
