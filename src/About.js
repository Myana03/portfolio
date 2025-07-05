import React from 'react';
import FadeInSection from './FadeInSection';

// Sample skills
const skills = [
  'Java', 'Python', 'JavaScript', 'Spring Boot', 'React', 'LangChain', 'MySQL', 'PostgreSQL', 'NoSQL', 'MongoDB', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Kafka', 'RabbitMQ', 'Jest', 'Rest-Assured', 'JUnit', 'Mockito', 'Selenium', 'Splunk', 'Grafana', 'Prometheus', 'SonarQube', 'OpenAI API', 'RAG', 'Embeddings', 'Vector Search', 'Prompt Engineering', 'Agentic AI'
];

const About = () => (
  <section className="section" id="about">
    <div className="about-bg-accent"></div>
    <div className="container">
      <FadeInSection>
        <h2 className="section-title visible">About Me</h2>
      </FadeInSection>
      <FadeInSection>
        <div className="about-bio">
          <p>Software Engineer skilled in <strong>Java, Spring Boot, and cloud-native development</strong>. Experienced in building secure APIs, scalable microservices, and integrating Generative AI into enterprise systems. Passionate about delivering business value through clean code and modern technology.</p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="about-learning-badge">
          Currently exploring: LLMs, LangGraph, and Prompt Engineering to design intelligent, end-to-end AI systems for real-world use.
        </div>
      </FadeInSection>
      <FadeInSection>
        <h3 className="about-subtitle">What I'm Looking For</h3>
        <div className="about-goals">
          <p>Seeking opportunities to build impactful backend or AI-powered systems with innovative teams.</p>
        </div>
      </FadeInSection>
      <h3 className="about-subtitle">Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <span className="skill-badge" key={idx}>{skill}</span>
        ))}
      </div>
      <FadeInSection>
        <div className="about-mission-box">
          <strong>Why I Love Building Software</strong><br/>
          I love building systems that make people's lives easier and businesses more efficient. I'm always learning, always shipping.
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="about-connect-box">
          Let's connect and build something amazing together!
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default About; 