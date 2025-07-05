import React from 'react';

const Timeline = ({ experience }) => (
  <div className="about-timeline">
    {experience.map((exp, idx) => (
      <div className="timeline-item" key={idx}>
        <div className="timeline-dot" />
        <div className="timeline-content">
          <div className="timeline-header">
            <span className="timeline-role">{exp.role}</span> @ <span className="timeline-company">{exp.company}</span>
            <span className="timeline-dates">{exp.dates}</span>
          </div>
          <ul className="timeline-resp">
            {exp.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export default Timeline; 