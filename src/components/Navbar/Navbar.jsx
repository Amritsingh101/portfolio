import { useState, useEffect } from 'react'
import { personal } from '../../data/portfolio.js'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'
import './Navbar.css'

export function LogoIcon({ className }) {
  return (
    <svg
      width="28"
      viewBox="0 0 214 237"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform="translate(0,237) scale(0.1,-0.1)" fill="currentColor">
        <path d="M1096 2187 c-16 -28 -83 -144 -149 -257 -109 -185 -263 -450 -527
          -905 -51 -88 -128 -219 -172 -292 -43 -73 -85 -148 -95 -167 l-16 -35 43 -73
          c23 -40 67 -116 98 -168 76 -132 101 -170 110 -170 4 0 25 33 48 73 22 39 74
          130 116 202 41 72 119 207 173 300 54 94 138 240 188 325 49 85 168 292 265
          460 96 168 180 313 186 323 12 20 14 18 -135 275 -51 89 -96 162 -99 162 -3 0
          -18 -24 -34 -53z" />
        <path d="M1532 1232 c-46 -81 -96 -167 -111 -192 l-27 -45 -160 -3 -159 -3
          -16 -27 c-172 -298 -211 -365 -215 -377 -5 -13 47 -15 381 -17 l386 -3 124
          -215 c68 -118 127 -216 132 -217 8 -2 243 378 243 395 0 11 -32 68 -235 422
          -87 151 -178 310 -202 353 -24 42 -47 77 -51 77 -4 0 -45 -67 -90 -148z" />
      </g>
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState('#hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => sections.forEach((s) => observer.unobserve(s))
  }, [])

  const handleNavClick = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation">
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" aria-label="Home">
          <LogoIcon className="navbar-logo-icon" />
          {/* <span className="navbar-logo-text">{personal.name.split(' ')[0]}</span> */}
        </a>

        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar-link${active === link.href ? ' navbar-link--active' : ''}`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar-drawer${menuOpen ? ' navbar-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="navbar-drawer-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar-drawer-link${active === link.href ? ' navbar-drawer-link--active' : ''}`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className="navbar-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </nav>
  )
}
