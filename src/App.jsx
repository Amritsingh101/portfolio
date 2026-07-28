import { useRef, useEffect, useState } from 'react'
import useTheme from './hooks/useTheme.js'
import { personal } from './data/portfolio.js'
import Navbar, { LogoIcon } from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Experience from './components/Experience/Experience.jsx'
import Contact from './components/Contact/Contact.jsx'
import LetterGlitch from './components/LetterGlitch/LetterGlitch.jsx'
import CursorGlitchBackground from './components/LetterGlitch/CursorGlitchBackground.jsx'

function Footer() {
  const ctaRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const ctaEl = ctaRef.current
    if (!ctaEl) return

    const handleMouseMove = (e) => {
      const rect = ctaEl.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      ctaEl.style.setProperty('--cta-cursor-x', `${x}px`)
      ctaEl.style.setProperty('--cta-cursor-y', `${y}px`)
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    ctaEl.addEventListener('mousemove', handleMouseMove)
    ctaEl.addEventListener('mouseenter', handleMouseEnter)
    ctaEl.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      ctaEl.removeEventListener('mousemove', handleMouseMove)
      ctaEl.removeEventListener('mouseenter', handleMouseEnter)
      ctaEl.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <footer className="footer">
      {/* GET IN TOUCH CTA Banner */}
      <a ref={ctaRef} href="#contact" className="footer-cta" aria-label="Get in touch">
        <div className={`footer-cta-glitch-bg ${isHovered ? 'is-visible' : ''}`} aria-hidden="true">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={false}
            smooth={true}
            glitchColors={['#2E7088', '#61dca3', '#61b3dc', '#82B4C9']}
          />
        </div>

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
      <CursorGlitchBackground />
      <Navbar theme={theme} onToggleTheme={toggle} />
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
