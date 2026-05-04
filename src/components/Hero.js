import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero fade-up">
      <div className="hero-badge">Available for Internships</div>

      <div className="hero-content">
        <div className="hero-avatar" aria-hidden="true">SM</div>
        <div className="hero-text">
          <h1 className="hero-name">
            Sonali <em>Khushal</em> Mali
          </h1>
          <p className="hero-sub">
            2nd Year Computer Science Student &nbsp;·&nbsp; RCPIT, Shirpur
          </p>
          <p className="hero-desc">
            Passionate about building clean web experiences. Currently
            exploring <span className="hl">React</span>,&nbsp;
            <span className="hl">Python</span>, and full-stack development
            while sharpening competitive programming skills on CodeChef.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">Get in touch</a>
            <a className="btn btn-outline" href="#projects">View Projects</a>
          </div>
        </div>
      </div>

      <div className="hero-chips">
        <span className="chip">HTML / CSS</span>
        <span className="chip">JavaScript</span>
        <span className="chip">React</span>
        <span className="chip">Python</span>
        <span className="chip">Node.js</span>
        <span className="chip">Git</span>
      </div>
    </section>
  );
}

export default Hero;
