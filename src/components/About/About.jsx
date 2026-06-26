import { useEffect, useRef, useState } from 'react'
import { personal } from '../../data/portfolio.js'
import './About.css'

const STATS = [
  { label: 'Years Experience', value: personal.yearsExp, suffix: '+' },
  { label: 'Projects Completed', value: personal.projectsCount, suffix: '+' },
  { label: 'Happy Clients', value: personal.clientsCount, suffix: '+' },
  { label: 'Coffees Consumed', value: personal.coffeeCount, suffix: '+' },
]

const INFO_CHIPS = [
  { icon: '📍', label: 'Location', value: personal.location },
  { icon: '✉', label: 'Email', value: personal.email },
  { icon: '📞', label: 'Phone', value: personal.phone },
  { icon: '💼', label: 'Status', value: 'Open to Work' },
  { icon: '🎓', label: 'Degree', value: 'B.Sc. Computer Science' },
  { icon: '🌐', label: 'Languages', value: 'English, Hindi' },
]

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const startTime = performance.now()
          const step = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.reveal')
    if (!items) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    items.forEach((el) => observer.observe(el))
    return () => items.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <section id="about" ref={sectionRef}>
      <div className="section">
        <div className="section-header reveal">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">About <span>Me</span></h2>
          <p className="section-subtitle">A brief intro to the person behind the code.</p>
        </div>

        <div className="about-grid">
          {/* Left card */}
          <div className="about-card reveal">
            <div className="about-avatar-wrap">
              <div className="about-avatar avatar-gradient">
                <svg width="60" height="60" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                  <circle cx="40" cy="30" r="18" fill="rgba(255,255,255,0.4)"/>
                  <ellipse cx="40" cy="72" rx="28" ry="18" fill="rgba(255,255,255,0.3)"/>
                </svg>
              </div>
              <div className="about-name-block">
                <h3 className="about-person-name">{personal.name}</h3>
                <span className="about-person-role">{personal.role}</span>
              </div>
            </div>
            <div className="about-stats">
              {STATS.map((s) => (
                <div key={s.label} className="about-stat-item">
                  <div className="about-stat-value">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div className="about-content reveal" style={{ transitionDelay: '0.15s' }}>
            <h3 className="about-content-title">Crafting digital experiences since 2019</h3>
            <p className="about-bio">{personal.bio1}</p>
            <p className="about-bio">{personal.bio2}</p>
            <div className="about-chips">
              {INFO_CHIPS.map((chip) => (
                <div key={chip.label} className="about-chip">
                  <span className="about-chip-icon">{chip.icon}</span>
                  <div>
                    <div className="about-chip-label">{chip.label}</div>
                    <div className="about-chip-value">{chip.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
