import React, { useState } from 'react';
import './Contact.css';

const LINKS = [
  {
    label: 'Email',
    value: 'sonalimali293949@gmail.com',
    href: 'mailto:sonalimali293949@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2 7.5l8 5 8-5" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'sonali-mali-117049396',
    href: 'https://www.linkedin.com/in/sonali-mali-117049396',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M6 8.5v5.5M6 5.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 14V11c0-1.1.9-2 2-2s2 .9 2 2v3M10 8.5V14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'CodeChef',
    value: 'rcp_fy_24457',
    href: 'https://www.codechef.com/users/rcp_fy_24457',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText('sonalimali293949@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="section fade-up" id="contact" style={{ animationDelay: '0.25s' }}>
      <p className="section-label">Contact</p>
      <h2 className="section-title">Let's connect</h2>

      <p className="contact-intro">
        I'm open to internships, collaboration, and project opportunities.
        Feel free to reach out via any of the channels below!
      </p>

      <div className="contact-cards">
        {LINKS.map((link) => (
          <a
            key={link.label}
            className="contact-card"
            href={link.href}
            target={link.href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noreferrer"
          >
            <span className="cc-icon">{link.icon}</span>
            <div className="cc-text">
              <span className="cc-label">{link.label}</span>
              <span className="cc-value">{link.value}</span>
            </div>
            <span className="cc-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <div className="contact-copy">
        <span className="copy-email">sonalimali293949@gmail.com</span>
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? '✓ Copied!' : 'Copy email'}
        </button>
      </div>
    </section>
  );
}

export default Contact;
