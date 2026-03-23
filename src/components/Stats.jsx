import { useLang } from '../LanguageContext'
import { teamConfig, players } from '../data/team'
import './Stats.css'

export default function Stats() {
  const { t } = useLang()
  const s = t.stats
  const { season } = teamConfig

  const winRate = Math.round((season.wins / season.matches) * 100)

  const topScorers = [...players]
    .sort((a, b) => b.goals - a.goals || b.assists - a.assists)
    .filter(p => p.goals > 0)
    .slice(0, 5)

  const topAssists = [...players]
    .sort((a, b) => b.assists - a.assists || b.goals - a.goals)
    .filter(p => p.assists > 0)
    .slice(0, 5)

  return (
    <section>
      <p className="section-label">{s.label}</p>
      <h2 className="section-title">{s.title} <span>{s.titleSpan}</span></h2>
      <p className="section-desc">{s.desc}</p>

      {/* main record */}
      <div className="stats-record">
        <div className="stat-big glass-card win">
          <span className="stat-big-val pixel">{season.wins}</span>
          <span className="stat-big-lbl mono">{s.wins}</span>
        </div>
        <div className="stat-big glass-card draw">
          <span className="stat-big-val pixel">{season.draws}</span>
          <span className="stat-big-lbl mono">{s.draws}</span>
        </div>
        <div className="stat-big glass-card loss">
          <span className="stat-big-val pixel">{season.losses}</span>
          <span className="stat-big-lbl mono">{s.losses}</span>
        </div>
        <div className="stat-big glass-card total">
          <span className="stat-big-val pixel">{season.matches}</span>
          <span className="stat-big-lbl mono">{s.matches}</span>
        </div>
      </div>

      {/* win rate bar + goals */}
      <div className="stats-mid">
        <div className="stats-winrate glass-card">
          <div className="stats-winrate-header">
            <span className="stats-mid-label mono">{s.winRate}</span>
            <span className="stats-winrate-pct pixel">{winRate}%</span>
          </div>
          <div className="stats-bar-track">
            <div className="stats-bar-fill" style={{ width: `${winRate}%` }} />
          </div>
          <div className="stats-goals-row">
            <div className="stats-goals-item">
              <span className="stats-goals-val">{season.goalsFor}</span>
              <span className="stats-goals-lbl mono">{s.goalsFor}</span>
            </div>
            <div className="stats-goals-sep" />
            <div className="stats-goals-item">
              <span className="stats-goals-val dim">{season.goalsAgainst}</span>
              <span className="stats-goals-lbl mono">{s.goalsAgainst}</span>
            </div>
          </div>
        </div>
      </div>

      {/* top scorers + assists */}
      <div className="stats-tables">
        <div className="stats-table glass-card">
          <h3 className="stats-table-title mono">{s.topScorers}</h3>
          <ol className="stats-list">
            {topScorers.map((p, i) => (
              <li key={p.id} className="stats-row">
                <span className="stats-rank mono">{i + 1}</span>
                <span className="stats-pname">{p.name} {p.surname}</span>
                <span className="stats-pval">{p.goals} <span className="stats-punit mono">{s.goals}</span></span>
              </li>
            ))}
          </ol>
        </div>

        <div className="stats-table glass-card">
          <h3 className="stats-table-title mono">{s.topAssists}</h3>
          <ol className="stats-list">
            {topAssists.map((p, i) => (
              <li key={p.id} className="stats-row">
                <span className="stats-rank mono">{i + 1}</span>
                <span className="stats-pname">{p.name} {p.surname}</span>
                <span className="stats-pval">{p.assists} <span className="stats-punit mono">{s.assists}</span></span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
