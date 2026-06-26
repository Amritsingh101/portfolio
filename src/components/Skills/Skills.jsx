import { useEffect, useRef, useState } from 'react'
import { skills } from '../../data/portfolio.js'
import './Skills.css'

const ALL_CATEGORY = 'All'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY)
  const sectionRef = useRef(null)

  const categories = [ALL_CATEGORY, ...skills.map((g) => g.category)]

  const filteredGroups =
    activeCategory === ALL_CATEGORY
      ? skills
      : skills.filter((g) => g.category === activeCategory)

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    if (!reveals) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    reveals.forEach((el) => obs.observe(el))
    return () => reveals.forEach((el) => obs.unobserve(el))
  }, [filteredGroups])

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section">
        <div className="section-header reveal">
          <span className="section-tag">My Expertise</span>
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <p className="section-subtitle">A curated set of tools and technologies I work with daily.</p>
        </div>

        <div className="skills-filters reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skills-filter-btn${activeCategory === cat ? ' skills-filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-groups">
          {filteredGroups.map((group, gi) => (
            <div key={group.category} className="skills-group reveal" style={{ transitionDelay: `${gi * 0.1}s` }}>
              <h3 className="skills-group-title">{group.category}</h3>
              <div className="skills-list">
                {group.items.map((skill) => (
                  <div key={skill.name} className="skill-pill">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
