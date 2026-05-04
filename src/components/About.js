import React from 'react';
import './About.css';

const STATS = [
  { value: '2nd', label: 'Year of B.Tech' },
  { value: '3+', label: 'Projects Built' },
  { value: 'CS', label: 'Major' },
  { value: 'RCPIT', label: 'College' },
];

function About() {
  return (
    <section className="section fade-up" id="about" style={{ animationDelay: '0.1s' }}>
      <p className="section-label">About Me</p>
      <h2 className="section-title">A little about myself</h2>

      <div className="about-layout">
        <div className="about-body">
          <p>
            Hi! I'm <strong>Sonali Khushal Mali</strong>, a second-year Computer Science
            student at <strong>R.C. Patel Institute of Technology (RCPIT), Shirpur</strong>.
            I have a genuine love for turning ideas into real, working products on the web.
          </p>
          <p>
            I started my journey with the basics — HTML &amp; CSS — and have since
            expanded into JavaScript, Python, and the React ecosystem. I enjoy competitive
            programming and regularly practice problem-solving on <strong>CodeChef</strong>,
            where I'm sharpening my algorithmic thinking.
          </p>
          <p>
            When I'm not coding, I'm exploring new technologies, contributing to college
            projects, and looking for opportunities to apply what I've learned in
            real-world settings. I'm actively seeking <strong>internships</strong> and
            collaborative projects to grow as a developer.
          </p>
        </div>

        <div className="about-stats">
          {STATS.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
