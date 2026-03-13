<template>
  <div class="student-accessibility-warp ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="student-accessibility-content">
            <div class="blog-title">
              <h2>
                Our Commitment to Accessibility and the Accessibility for
                Ontarians with Disabilities Act (AODA)
              </h2>
              <p>
                Tuva at all times undertakes reasonable efforts to provide our
                educational goods, services or facilities in ways that:
              </p>
              <ul class="accessibility-list">
                <li>
                  respect the dignity and independence of persons with
                  disabilities
                </li>
                <li>
                  provide persons with disabilities the same opportunity to
                  access Sheridan goods, services or facilities and;
                </li>
                <li>
                  allow them to benefit from these same services, in the same
                  place and in a similar way as that given to other persons
                </li>
              </ul>
            </div>
            <div class="accessibility-content2">
              <h4>Let us know how we are doing!</h4>
              <p>
                We welcome your accessibility feedback. All feedback, including
                complaints will be directed to the
                <span>Manager, Accessibility and Inclusion.</span> Please be
                sure to include your contact information and preferred method of
                communication (phone, email, virtual meeting, etc.) and we will
                respond in a timely manner. Appointments may also be scheduled.
              </p>
              <ul class="accessibility-contact-list">
                <li>Phone: <a href="tel:132313242354"> +1 3231 3242 354</a></li>
                <li>
                  Email <a href="mailto:info.gccschool.com">info.gccschool.com</a>
                </li>
                <li>
                  Mailing address:
                  <span>
                    Manager, Accessibility and Inclusion, Centre for Equity and
                    Inclusion, Davis Campus 7899 McLaughlin Road, Brampton
                  </span>
                </li>
              </ul>

              <div class="accessibility-accordion-warp">
                <h4>Important accessibility information</h4>
                <BAccordion class="accessibility-accordion">
                  <BAccordionItem
                    title="Prospective students with disabilities"
                    visible
                  >
                    <p>
                      If you are planning on attending Sheridan and have a
                      disability you can get more information about requesting
                      academic accommodation at the
                      <NuxtLink to="/about-campus">
                        Accessible Learning Office.
                      </NuxtLink>
                    </p>
                  </BAccordionItem>
                  <BAccordionItem title="Current students with disabilities">
                    <p>
                      If you are a student with a disability at Sheridan and
                      registered with
                      <NuxtLink to="/accessibility"
                        >Accessible Learning</NuxtLink
                      >
                      you can contact the office directly about your academic
                      accommodations.
                    </p>
                    <p>
                      If you are a student with a disability at Sheridan, you
                      can find out more about the
                      <NuxtLink to="/about-overview">
                        accessibility features at Tuva Library and Learning
                        Services.
                      </NuxtLink>
                    </p>
                  </BAccordionItem>
                  <BAccordionItem title="Job Applicants with disabilities">
                    <p>
                      Job applicants with disabilities applying to Sheridan can
                      contact Human Resources to ask about the
                      <a href="mailto:info.gccschool.com">
                        availability of accommodation for job applicants with
                        disabilities
                      </a>
                      in the recruitment process
                    </p>
                  </BAccordionItem>
                  <BAccordionItem title="Tuva Employees with disabilities">
                    <p>
                      If you are planning on attending Sheridan and have a
                      disability you can get more information about requesting
                      academic accommodation at the
                      <NuxtLink to="/about-campus">
                        Accessible Learning Office.
                      </NuxtLink>
                    </p>
                  </BAccordionItem>
                  <BAccordionItem title="Campus visitors with disabilities">
                    <p>
                      If you are a student with a disability at Sheridan and
                      registered with
                      <NuxtLink to="/accessibility">
                        Accessible Learning
                      </NuxtLink>
                      you can contact the office directly about your academic
                      accommodations.
                    </p>
                    <p>
                      If you are a student with a disability at Sheridan, you
                      can find out more about the
                      <NuxtLink to="/about-overview">
                        accessibility features at Tuva Library and Learning
                        Services.
                      </NuxtLink>
                    </p>
                  </BAccordionItem>
                </BAccordion>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="accessibility-link-widget">
            <ul class="accessibility-link-list">
              <li>
                <NuxtLink to="/accessibility"> Accessibility At Tuva </NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/book-store">Book Store</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/information-technology">
                  Information & Technology
                </NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/parking-locker">Parking & Locker</NuxtLink>
                <div class="icon">
                  <i class="ti ti-caret-right-filled"></i>
                </div>
              </li>
              <li>
                <NuxtLink to="/residence">Residence</NuxtLink>
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
  name: "Accessibility",
};
</script>
