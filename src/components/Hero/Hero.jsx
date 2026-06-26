import { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { personal, social } from '../../data/portfolio.js'
import SocialIcon from '../SocialIcon/SocialIcon.jsx'
import './Hero.css'

const TYPING_SPEED = 80
const DELETE_SPEED = 30
const PAUSE_DURATION = 4500

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const roles = personal.roles
    const currentRole = roles[roleIndex]
    let timer

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    } else {
      const speed = isDeleting ? DELETE_SPEED : TYPING_SPEED
      timer = setTimeout(() => {
        setDisplayText(isDeleting
          ? currentRole.slice(0, displayText.length - 1)
          : currentRole.slice(0, displayText.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        {/* Left */}
        <div className="hero-content">
          <div className="hero-greeting">
            <DotLottieReact
              src="/hi_animation.lottie"
              autoplay
              loop
              speed={0.3}
              className="hero-lottie-wave"
            /> <span className="hero-greeting-text">Hi, I&apos;m</span>
          </div>
          <h1 className="hero-name">{personal.name}</h1>
          <div className="hero-role-wrap">
            <span className="hero-role-text">{displayText}</span>
            <span className="hero-cursor cursor-blink">|</span>
          </div>
          <p className="hero-tagline">{personal.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn--primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href={personal.cvUrl} className="hero-btn hero-btn--ghost" target="_blank" rel="noopener noreferrer">
              View Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          <div className="hero-socials">
            {social.map((s) => (
              <a key={s.label} href={s.href} className="hero-social" aria-label={s.label}>
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hero-visual">
          <div className="hero-blob animate-blob" aria-hidden="true" />

          <div className="hero-avatar-card animate-float">
            <div className="hero-avatar avatar-gradient">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <circle cx="40" cy="30" r="18" fill="rgba(255,255,255,0.4)" />
                <ellipse cx="40" cy="72" rx="28" ry="18" fill="rgba(255,255,255,0.3)" />
              </svg>
            </div>
          </div>

          <div className="hero-badge hero-badge--top animate-badge" style={{ animationDelay: '0s' }}>
            <span className="hero-badge-icon">⚡</span>
            <div>
              <div className="hero-badge-num">{personal.yearsExp}+</div>
              <div className="hero-badge-label">Years Exp.</div>
            </div>
          </div>

          <div className="hero-badge hero-badge--bottom animate-badge" style={{ animationDelay: '0.7s' }}>
            <span className="hero-badge-icon">🚀</span>
            <div>
              <div className="hero-badge-num">{personal.projectsCount}+</div>
              <div className="hero-badge-label">Projects</div>
            </div>
          </div>

          <div className="hero-badge hero-badge--left animate-badge" style={{ animationDelay: '1.4s' }}>
            <span className="hero-badge-icon">⭐</span>
            <div>
              <div className="hero-badge-num">{personal.clientsCount}+</div>
              <div className="hero-badge-label">Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll" aria-label="Scroll to about">
        <div className="hero-scroll-dot" />
      </a>
    </section>
  )
}
