import React, { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Personal Resume Page',
    description:
      'A clean, printable resume built with pure HTML and CSS. Features responsive layout with flexbox, styled sections for education, skills, and contact info — no JavaScript needed.',
    tech: ['HTML5', 'CSS3', 'Flexbox'],
    category: 'HTML · CSS',
    emoji: '📄',
    color: '#E1F5EE',
  },
  {
    title: 'To-Do List App',
    description:
      'A beginner-friendly task manager with add, complete, and delete features. Built with vanilla JS, data persists in localStorage with a mobile-friendly, minimal UI.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'HTML · CSS · JS',
    emoji: '✅',
    color: '#E6F1FB',
  },
  {
    title: 'Student Grade Calculator',
    description:
      'A command-line Python tool that accepts subject marks, calculates percentage and grade, and outputs a neat summary. Great for practising Python fundamentals.',
    tech: ['Python 3', 'CLI'],
    category: 'Python',
    emoji: '🐍',
    color: '#FAEEDA',
  },
  {
    title: 'Responsive Landing Page',
    description:
      'A multi-section landing page for a fictional product — built with HTML & CSS. Uses CSS Grid, media queries, and custom properties for a fully responsive design.',
    tech: ['HTML5', 'CSS Grid', 'Responsive'],
    category: 'HTML · CSS',
    emoji: '🌐',
    color: '#FBEAF0',
  },
];

function ProjectCard({ title, description, tech, category, emoji, color }) {
  return (
    <div className="proj-card">
      <div className="proj-icon" style={{ background: color }}>
        <span role="img" aria-label={title}>{emoji}</span>
      </div>
      <div className="proj-body">
        <span className="proj-tag">{category}</span>
        <h3 className="proj-title">{title}</h3>
        <p className="proj-desc">{description}</p>
        <div className="proj-tech">
          {tech.map((t) => (
            <span className="tech-badge" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="section fade-up" id="projects" style={{ animationDelay: '0.2s' }}>
      <p className="section-label">Projects</p>
      <h2 className="section-title">Things I've built</h2>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
