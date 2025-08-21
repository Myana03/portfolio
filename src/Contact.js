import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import FadeInSection from './FadeInSection';

const Contact = () => (
  <section className="section" id="contact">
    <div className="container">
      <FadeInSection>
        <h2 className="section-title visible">Contact</h2>
      </FadeInSection>
      <FadeInSection>
        <div className="contact-card contact-card-accent contact-card-centered">
          <div className="contact-status-badge">Open to Opportunities</div>
          <div className="contact-info-list contact-info-list-centered">
            <div className="contact-socials contact-socials-icons">
              <a href="mailto:sainath.myana.dev@gmail.com" className="contact-link" title="Email">
                <FaEnvelope />
              </a>
              <a href="tel:6462291089" className="contact-link" title="Phone">
                <FaPhone />
              </a>
              <a href="https://www.linkedin.com/in/sai-myana" target="_blank" rel="noopener noreferrer" className="contact-link" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Myana03" target="_blank" rel="noopener noreferrer" className="contact-link" title="GitHub">
                <FaGithub />
              </a>
            </div>
            <div className="contact-location">
              <FaMapMarkerAlt style={{ marginRight: 6 }} />Austin, Texas
            </div>
            <div className="contact-details-list contact-details-list-centered">
              <div><strong>Email:</strong> <a href="mailto:sainath.myana.dev@gmail.com" className="contact-link">sainath.myana.dev@gmail.com</a></div>
              <div><strong>Phone:</strong> <a href="tel:6462291089" className="contact-link">646-229-1089</a></div>
            </div>
            <div style={{ marginTop: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <a
                href="Sai Nath Myana Resume.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                download
                aria-label="Download Resume"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default Contact; 