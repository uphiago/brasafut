import { useState } from 'react'
import { useLang } from '../LanguageContext'
import { players } from '../data/team'
import './Squad.css'

const posGroup = pos => {
  if (pos === 'GK') return 'gk'
  if (['CB','RB','LB','SW'].includes(pos)) return 'def'
  if (['DM','CM','AM','MF','LM','RM'].includes(pos)) return 'mid'
  return 'fwd'
}

export default function Squad() {
  const { t } = useLang()
  const s = t.squad
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? players : players.filter(p => posGroup(p.pos) === filter)
  const sorted = [...filtered].sort((a, b) => a.number - b.number)

  const filters = [
    { key: 'all', label: s.all },
    { key: 'gk',  label: s.gk },
    { key: 'def', label: s.def },
    { key: 'mid', label: s.mid },
    { key: 'fwd', label: s.fwd },
  ]

  return (
    <section>
      <p className="section-label">{s.label}</p>
      <h2 className="section-title">{s.title} <span>{s.titleSpan}</span></h2>
      <p className="section-desc">{s.desc}</p>

      <div className="squad-filters">
        {filters.map(f => (
          <button
            key={f.key}
            className={`squad-filter mono${filter === f.key ? ' active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="squad-grid">
        {sorted.map(p => (
          <div key={p.id} className={`squad-card glass-card group-${posGroup(p.pos)}`}>
            <div className="squad-card-top">
              <span className="squad-number pixel">#{p.number}</span>
              <span className={`squad-pos mono group-${posGroup(p.pos)}`}>
                {s.posNames[p.pos] || p.pos}
              </span>
            </div>
            <div className="squad-name">
              <span className="squad-first">{p.name}</span>
              <span className="squad-last">{p.surname}</span>
            </div>
            <div className="squad-stats">
              <div className="squad-stat">
                <span className="squad-stat-val">{p.goals}</span>
                <span className="squad-stat-lbl mono">{s.goals}</span>
              </div>
              <div className="squad-stat-sep" />
              <div className="squad-stat">
                <span className="squad-stat-val">{p.assists}</span>
                <span className="squad-stat-lbl mono">{s.assists}</span>
              </div>
              <div className="squad-stat-sep" />
              <div className="squad-stat">
                <span className="squad-stat-val">{p.matches}</span>
                <span className="squad-stat-lbl mono">{s.matches}</span>
              </div>
              {(p.yellow > 0 || p.red > 0) && (
                <>
                  <div className="squad-stat-sep" />
                  <div className="squad-stat">
                    <span className="squad-stat-cards">
                      {p.yellow > 0 && <span className="card-yellow">{p.yellow}</span>}
                      {p.red > 0 && <span className="card-red">{p.red}</span>}
                    </span>
                    <span className="squad-stat-lbl mono">cartões</span>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
