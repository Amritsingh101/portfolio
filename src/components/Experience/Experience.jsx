import { useEffect, useRef } from 'react'
import { experience } from '../../data/portfolio.js'
import './Experience.css'

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.timeline-item')
    if (!items) return
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.2 }
    )
    items.forEach((el) => obs.observe(el))
    return () => items.forEach((el) => obs.unobserve(el))
  }, [])

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    if (!reveals) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    reveals.forEach((el) => obs.observe(el))
    return () => reveals.forEach((el) => obs.unobserve(el))
  }, [])

  return (
    <section id="experience" ref={sectionRef}>
      <div className="section">
        <div className="section-header reveal">
          <span className="section-tag">Career Path</span>
          <h2 className="section-title">Work <span>Experience</span></h2>
          <p className="section-subtitle">The milestones that have shaped my professional journey.</p>
        </div>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />

          {experience.map((job, i) => (
            <div
              key={job.id}
              className={`timeline-item timeline-item--${i % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot" aria-hidden="true" />

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div
                    className="timeline-logo"
                    style={{ background: `${job.color}20`, color: job.color }}
                  >
                    {job.logo}
                  </div>
                  <div className="timeline-meta">
                    <h3 className="timeline-role">{job.role}</h3>
                    <div className="timeline-company">{job.company}</div>
                  </div>
                </div>

                <div className="timeline-period-row">
                  <span className="timeline-period">{job.period}</span>
                  <span className="timeline-type">{job.type}</span>
                </div>

                <ul className="timeline-achievements">
                  {job.achievements.map((a, ai) => (
                    <li key={ai} className="timeline-achievement">
                      <span className="timeline-bullet" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
