import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Contact'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="nav-inner">
          <span className="nav-logo">SM<span className="nav-logo-dot">.</span></span>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? 'bar bar--top open' : 'bar bar--top'} />
            <span className={menuOpen ? 'bar bar--mid open' : 'bar bar--mid'} />
            <span className={menuOpen ? 'bar bar--bot open' : 'bar bar--bot'} />
          </button>
        </div>
      </nav>

      {/* ── Sections ── */}
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <p>Designed &amp; Built by <strong>Sonali Mali</strong> · 2026</p>
      </footer>
    </div>
  );
}

export default App;
