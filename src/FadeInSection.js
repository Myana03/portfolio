import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FadeInSection.css';

const FadeInSection = ({ children, className = '', delay = 0, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const style = inView ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`fade-in-section${inView ? ' is-visible' : ''} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default FadeInSection; 