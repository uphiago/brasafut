import { useLang } from '../LanguageContext'
import { teamConfig } from '../data/team'
import './Coach.css'

const FORMATION = [
  { row: 'fwd', dots: ['ALE', 'CA', 'ALD'] },
  { row: 'mid', dots: ['MC', 'VOL', 'MC'] },
  { row: 'def', dots: ['LE', 'ZAG', 'ZAG', 'LD'] },
  { row: 'gk',  dots: ['GOL'] },
]

export default function Coach() {
  const { lang, t } = useLang()
  const c = t.coach
  const { coach } = teamConfig

  return (
    <section>
      <p className="section-label">{c.label}</p>
      <h2 className="section-title">{c.title} <span>{c.titleSpan}</span></h2>
      <p className="section-desc">{c.desc}</p>

      <div className="coach-wrap">
        <div className="coach-card glass-card">
          <div className="coach-info">
            <div className="coach-avatar">
              <span className="coach-avatar-icon">⚽</span>
            </div>
            <div className="coach-details">
              <p className="coach-role mono">{c.role}</p>
              <h3 className="coach-name">{coach.name}</h3>
            </div>
          </div>

          <div className="coach-meta">
            <div className="coach-meta-item">
              <span className="coach-meta-label mono">{c.formation}</span>
              <span className="coach-meta-val pixel">{coach.formation}</span>
            </div>
            <div className="coach-meta-item">
              <span className="coach-meta-label mono">{c.style}</span>
              <span className="coach-meta-val style">
                {lang === 'pt-BR' ? coach.stylePt : coach.styleEn}
              </span>
            </div>
          </div>
        </div>

        <div className="coach-pitch glass-card">
          <div className="pitch-inner">
            <div className="pitch-center-line" />
            <div className="pitch-circle" />
            {FORMATION.map((row, ri) => (
              <div key={ri} className={`pitch-row row-${row.row}`}>
                {row.dots.map((pos, di) => (
                  <div key={di} className={`pitch-dot dot-${row.row}`}>
                    <span>{pos}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="pitch-label mono">{coach.formation}</p>
        </div>
      </div>
    </section>
  )
}
