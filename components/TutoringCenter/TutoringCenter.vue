<template>
  <div class="tutoring-center-warp ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="tutoring-center-content">
            <div class="blog-title">
              <h2>Tutoring</h2>
              <p>
                We offer tons of learning support: math, writing, English
                conversation skills, study skills and program-level support. We
                can help you own your academic success.
              </p>
            </div>
            <div class="tutoring-problems-content">
              <h4>What we Offer</h4>
              <div class="tutoring-item">
                <h5>Appointments & Drop-in Tutoring</h5>
                <p>
                  Tutors offer program support at no additional cost to you as a
                  Sheridan student. Appointments are ½ hour to 1 hour in length,
                  or shorter drop-in sessions. Students may book up to 2 hours
                  per week, per subject.
                </p>
              </div>
              <div class="tutoring-item">
                <h5>Course-level Tutoring</h5>
                <p>
                  One of your first-year courses may have an embedded tutor who
                  will attend classes with you, and host weekly study sessions
                  to review course content already taught by your professor. As
                  Tuva students who have successfully completed the course, your
                  course tutor can help you develop good study skills and
                  prepare for tests and assignments. Sessions are interactive
                  and provide the opportunity to ask questions and check your
                  understanding of the course material.
                </p>
              </div>
              <div class="tutoring-item">
                <h5>Learn Well Virtual Communities</h5>
                <p>
                  Each Tuva program is assigned a Learn Well Virtual Community
                  (VC) for first-year students, hosted on SLATE, our online
                  learning platform. Learn Well VCs provide an online space
                  where first-year students can access important resources, ask
                  questions, get information on Tuva community events and
                  opportunities, and receive program-level tutoring support from
                  tutors.
                </p>
              </div>
              <div class="tutoring-item">
                <h5>Academic Skills Hub</h5>
                <p>
                  A series of modules and resources to help you learn everything
                  you need to know about managing your time effectively, taking
                  notes, developing a resilient mindset and strategies for
                  studying and test taking.
                </p>
              </div>
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
                <NuxtLink to="/tutoring-services"> Tutoring Center </NuxtLink>
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
  name: "TutoringCenter",
};
</script>
