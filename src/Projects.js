import React from 'react';
import FadeInSection from './FadeInSection';
import { FaGithub } from 'react-icons/fa';

// To add a new project, add a new object to the 'projects' array below.
// Example:
// {
//   title: 'My New Project',
//   description: 'Short description of the project.',
//   tech: ['React', 'Node.js'],
//   github: 'https://github.com/yourusername/my-new-project',
// },

// In the future, you can load projects from a JSON file or API:
// import projectsData from './projects.json';
// const projects = projectsData;

const projects = [
  {
    title: 'Slack-Integrated Chatbot for Student Data Querying',
    description: 'Built a Slack bot for natural language student data queries using Spring Boot and LangChain.',
    tech: ['LangChain', 'Spring Boot', 'Slack Bolt', 'Socket Mode', 'Streamlit', 'REST API'],
    github: 'https://github.com/Myana03/slackbot'
  },
  {
    title: 'Microservices Implementation with Spring Boot',
    description: 'Designed scalable quiz and question APIs with Spring Boot, Eureka, and MySQL.',
    tech: ['Spring Boot', 'Eureka', 'Feign', 'MySQL', 'REST API'],
    github: 'https://github.com/Myana03/microservices'
  },
  {
    title: 'GenAI Capstone Project – Board Game Rules Explainer',
    description: 'Created an AI assistant to explain board game rules using OpenAI GPT and vector search.',
    tech: ['OpenAI GPT', 'RAG', 'Milvus', 'Vector Search', 'Streamlit', 'Python'],
    github: 'https://github.com/Myana03/board-game-rules-explainer'
  },
  {
    title: 'MSK Associates – Freelance Project',
    description: 'Developed a modern static website for a structural engineering firm in India as a freelance project.',
    tech: ['React', 'CSS', 'HTML'],
    github: 'https://github.com/Myana03/Msk-Associates'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a modern, responsive portfolio website to showcase my projects and experience.',
    tech: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/Myana03/portfolio'
  }
];

const Projects = () => (
  <section className="section projects-fullwidth" id="projects">
    <div className="container">
      <FadeInSection>
        <h2 className="section-title visible">Projects</h2>
      </FadeInSection>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <FadeInSection key={project.title} delay={idx * 80}>
            <div className="project-card" style={{ position: 'relative' }}>
              {project.github && (
                <a
                  href={project.github}
                  className="project-github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on GitHub"
                  style={{ position: 'absolute', top: 18, right: 18, color: '#0071e3', fontSize: 24, zIndex: 2 }}
                >
                  <FaGithub />
                </a>
              )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span className="tech-badge" key={i}>{t}</span>
                ))}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

 