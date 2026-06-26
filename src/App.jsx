import useTheme from './hooks/useTheme.js'
import { personal } from './data/portfolio.js'
import Navbar, { LogoIcon } from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Experience from './components/Experience/Experience.jsx'
import Contact from './components/Contact/Contact.jsx'

function Footer() {
  return (
    <footer className="footer">
      {/* GET IN TOUCH CTA Banner */}
      <a href="#contact" className="footer-cta" aria-label="Get in touch">
        <span className="footer-cta-sub">Got a project? Need unfair advantage?</span>
        <div className="footer-cta-headline">
          <span className="footer-cta-word">GET</span>
          <span className="footer-cta-word">IN</span>
          <span className="footer-cta-word footer-cta-touch">
            T
            <span className="footer-cta-logo-wrap">
              <LogoIcon className="footer-cta-logo-svg" />
            </span>
            UCH
          </span>
        </div>
      </a>

      {/* Neumorphic divider */}
      <div className="footer-divider" />

      {/* Bottom meta row */}
      <div className="footer-meta">
        {/* <p className="footer-name">{personal.name}</p>
        <p className="footer-role">{personal.role}</p> */}
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />
      {/* Spacer for fixed navbar (height matches .navbar-inner height: 70px) */}
      <div style={{ height: '70px', flexShrink: 0 }} aria-hidden="true" />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
