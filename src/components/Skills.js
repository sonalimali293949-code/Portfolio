import React from 'react';
import './Skills.css';

const SKILLS = [
  { name: 'HTML & CSS',   level: 85, category: 'Frontend' },
  { name: 'JavaScript',   level: 65, category: 'Frontend' },
  { name: 'React',        level: 50, category: 'Frontend' },
  { name: 'Python',       level: 72, category: 'Backend' },
  { name: 'Node.js',      level: 42, category: 'Backend' },
  { name: 'Git & GitHub', level: 65, category: 'Tools' },
  { name: 'C / C++',      level: 60, category: 'Core' },
  { name: 'SQL Basics',   level: 45, category: 'Database' },
];

function SkillBar({ name, level, category }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-meta">
          <span className="skill-tag">{category}</span>
          <span className="skill-pct">{level}%</span>
        </span>
      </div>
      <div className="skill-track" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100}>
        <div className="skill-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="section fade-up" id="skills" style={{ animationDelay: '0.15s' }}>
      <p className="section-label">Skills</p>
      <h2 className="section-title">Technologies I work with</h2>

      <div className="skills-grid">
        {SKILLS.map((s) => (
          <SkillBar key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
