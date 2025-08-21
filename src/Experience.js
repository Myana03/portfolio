import React from 'react';
import FadeInSection from './FadeInSection';
import Timeline from './Timeline';

const experience = [
  {
    company: 'Walmart Global Tech',
    role: 'Java Developer',
    dates: 'July 2024 - Present',
    responsibilities: [
      'Built a scalable batch processing system that analyzes 10K+ APMIDs and 50K+ service accounts per job run, ensuring 99.99% reliability, auto-recovery, and full audit traceability.',
      'Reduced policy violation processing time by 60% by implementing multithreaded Spring Batch jobs with parallel execution, chunk tuning, and efficient data ingestion from LDAP, SFTP, and APIs.',
      'Automated 15+ compliance checks across Walmart\'s internal infra, achieving 100% policy coverage with zero manual intervention.',
      'Integrated with ServiceNow to auto-generate 10K+ violation tickets monthly, reducing manual workload by 70% through dynamic owner resolution and pre-filled remediation details.',
      'Assesses policy violations, answers user queries, and routes to ServiceNow tickets and support channels—cutting support load by 50%.',
      'Improved visibility and issue triaging by implementing custom logging, alerting, and centralized dashboards, reducing debugging time by 50% and improving SLA adherence by 30%.',
      'Drove performance optimization and code refactoring efforts across critical backend modules, reducing API response times by 40% and improving system reliability under peak load conditions.'
    ],
  },
        {
    company: 'Accenture',
    role: 'Software Engineer',
    dates: 'Aug 2019 – Aug 2022',
    responsibilities: [
      'Facilitated continuous integration processes through consistent participation in agile ceremonies along with successful completion of assigned tasks ahead of planned sprints demonstrating commitment as most junior member on the engineering team.',
      'Refactored existing Java code to enhance modularity and reusability, decreasing technical debt by 25%.',
      'Spearheaded the integration of advanced error-handling techniques within the existing Java codebase when managing database connections via JDBC; resolved the top five causes of runtime errors impacting user experience.',
      'Leveraged Git to establish a robust system of source control management; ensured continuous monitoring of application versions across three major projects, facilitating faster bug resolution times, and enhancing team collaboration.',
      'Devised test cases and strategies for unit and integration testing with JUnit and Mockito, achieving 90% test coverage.'
    ],
  },
];

const Experience = () => (
  <section className="section" id="experience">
    <div className="container">
      <FadeInSection>
        <h2 className="section-title visible">Experience</h2>
      </FadeInSection>
      <Timeline experience={experience} />
    </div>
  </section>
);

export default Experience; 