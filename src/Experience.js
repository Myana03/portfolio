import React from 'react';
import FadeInSection from './FadeInSection';
import Timeline from './Timeline';

const experience = [
  {
    company: 'Walmart Global Tech',
    role: 'Software Engineer',
    dates: 'May 2024 - Present',
    responsibilities: [
      'Designed and implemented Spring Boot Batch jobs to process and integrate data from APIs, SFTP, and LDAP, ensuring reliability and scalability.',
      'Secured and built RESTful APIs using OAuth2, JWT, and Spring Security to facilitate robust backend-frontend communication.',
      'Managed and orchestrated Kubernetes-deployed containerized batch jobs, enhancing system performance and observability.',
      'Integrated LLM capabilities into enterprise systems using RAG pipelines and Milvus for vector storage, enabling intelligent query-based agent responses.',
      'Developed agentic AI workflows by chaining tools (e.g., data fetchers, summarizers, transformers) based on user queries, enhancing system automation and adaptability.',
      'Worked on unit, integration, and contract tests for APIs and batch processors, achieving over 85% test coverage and reducing production defects.',
      'Optimized batch job performance by tuning chunk size, thread pool, and SQL queries, reducing average execution time by 40%.'
    ],
  },
  {
    company: 'Accenture',
    role: 'Software Engineer',
    dates: 'Aug 2019 – Aug 2022',
    responsibilities: [
      'Contributed to the development of Java backend services and APIs, gaining hands-on experience under senior mentorship to support project objectives.',
      'Assisted in database operations such as schema design and query optimization using Hibernate, contributing to data management efficiencies.',
      'Actively involved in code reviews, optimizing the code, and bug fixing for Java automation scripts.',
      'Worked on XML, Web Services, SOAP UI, and UNIX logs as part of backend service integration and maintenance, ensuring seamless communication across services.',
      'Leveraged Selenium, TestNG, and Maven for automation and testing of backend services, contributing to improved software quality and performance.'
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