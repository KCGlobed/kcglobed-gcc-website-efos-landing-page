<template>
  <div class="job-details-warp ptb-100">
    <div class="container">
      <div class="job-description inner-job-widget">
        <ul class="description-list">
          <li>
            <span>Career</span>
          </li>
          <li>
            <span>Engineer</span>
          </li>
          <li>
            <span>Full-Time</span>
          </li>
          <li>
            <span>Salary Range:</span> <span class="bold">$ 100K - $ 120K</span>
          </li>
        </ul>
        <h3>Job Description</h3>
        <p>
          We are seeking a skilled and motivated DevOps Engineer to join our
          dynamic team. As a DevOps Engineer, you will play a crucial role in
          designing, implementing, and maintaining our continuous integration,
          delivery, and deployment pipelines. Your expertise in automating
          processes, optimizing infrastructure, and ensuring seamless software
          releases will contribute to the overall efficiency and reliability of
          our software development lifecycle.
        </p>
      </div>
      <div class="inner-job-widget job-responsibilities">
        <h3>Responsibilities:</h3>
        <ul class="responsibilities-list">
          <li>
            <i class="ti ti-arrow-right"></i>
            Collaborate with cross-functional teams, including software
            developers, system administrators, and quality assurance, to
            establish efficient and automated deployment processes.
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Design, implement, and manage CI/CD pipelines using
            industry-standard tools and practices to ensure consistent and
            reliable software releases.
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Develop and maintain infrastructure as code (IaC) using tools like
            Terraform, Ansible, or similar, to enable scalable and reproducible
            deployments.
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Monitor, analyze, and troubleshoot system performance, identifying
            and addressing potential bottlenecks or issues to ensure optimal
            application and infrastructure performance.
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Implement security best practices throughout the CI/CD pipelines and
            infrastructure to ensure compliance and protect sensitive data.
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Collaborate on the design and implementation of containerization and
            orchestration solutions using Docker and Kubernetes or similar
            technologies.
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Manage cloud infrastructure (e.g., AWS, Azure, GCP), optimizing
            resource utilization and cost-effectiveness.
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Participate in on-call rotation and provide timely response to
            system incidents or outages, implementing corrective actions to
            minimize downtime.
          </li>
        </ul>
      </div>
      <div class="inner-job-widget job-responsibilities">
        <h3>Qualifications::</h3>
        <ul class="responsibilities-list style2">
          <li>
            <i class="ti ti-arrow-right"></i>
            Bachelor's degree in Computer Science, Information Technology, or
            related field, or equivalent work experience.
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Proven experience as a DevOps Engineer or similar role, with a
            strong understanding of software development principles and
            methodologies.
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Hands-on experience with CI/CD tools (e.g., Jenkins, CircleCI,
            GitLab CI/CD) and version control systems (e.g., Git).
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Proficiency in scripting languages (e.g., Bash, Python, Ruby) for
            automation and task scripting.
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Solid knowledge of containerization and orchestration tools (e.g.,
            Docker, Kubernetes).
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Experience with infrastructure as code (IaC) tools (e.g., Terraform,
            Ansible) for provisioning and managing cloud resources.
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Familiarity with cloud platforms (e.g., AWS, Azure, GCP) and cloud
            services (e.g., EC2, S3, RDS).
          </li>
          <li>
            <i class="ti ti-arrow-right"></i>
            Strong understanding of networking, security practices, and system
            monitoring.
          </li>
        </ul>
      </div>
      <div class="inner-job-details">
        <div class="inner-job-widget job-benefits">
          <h3>Benefits that we will cover</h3>
          <ul class="benefits-list">
            <li>
              <i class="ti ti-circle-check-filled"></i>
              Competitive salary and performance-based bonuses.
            </li>
            <li>
              <i class="ti ti-circle-check-filled"></i>
              Comprehensive benefits package including health, dental, and
              retirement plans.
            </li>
            <li>
              <i class="ti ti-circle-check-filled"></i>
              Professional development opportunities, including access to
              workshops and conferences.
            </li>
            <li>
              <i class="ti ti-circle-check-filled"></i>
              Collaborative and innovative work environment.
            </li>
            <li>
              <i class="ti ti-circle-check-filled"></i>
              Opportunity to work with cutting-edge technologies and contribute
              to impactful projects.
            </li>
            <li>
              <i class="ti ti-circle-check-filled"></i>
              Flexible work hours and remote work options.
            </li>
          </ul>
        </div>
      </div>
      <div class="job-details-button-content inner-job-widget">
        <p>
          If you are a proactive and detail-oriented DevOps Engineer with a
          passion for building and maintaining robust infrastructure and
          streamlined deployment processes, we encourage you to apply and become
          a valuable part of our dedicated team.
        </p>
        <NuxtLink to="/admission-form" class="default-btn">
          Apply Now <i class="ti ti-arrow-narrow-right"></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
};
</script>
