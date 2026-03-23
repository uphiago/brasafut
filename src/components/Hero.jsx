import { useLang } from '../LanguageContext'
import { teamConfig } from '../data/team'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero
  const { nextMatch } = teamConfig

  return (
    <div className="hero">
      <div className="hero-bg">
        <div className="hero-glow glow-verde" />
        <div className="hero-glow glow-amarelo" />
      </div>

      <div className="hero-content">
        <p className="hero-badge mono">{h.badge}</p>

        <h1 className="hero-title pixel">
          {teamConfig.name}
        </h1>

        <p className="hero-tagline">{h.tagline}</p>
        <p className="hero-sub">{h.sub}</p>

        <div className="hero-next">
          <span className="hero-next-label mono">{h.nextMatch}</span>
          <div className="hero-next-card">
            <span className="hero-next-date mono">{nextMatch.date} · {nextMatch.time}</span>
            <div className="hero-next-match">
              <span className="hero-next-team">{teamConfig.name}</span>
              <span className="hero-next-vs mono">{h.vs}</span>
              <span className="hero-next-team opp">{nextMatch.opponent}</span>
            </div>
            <span className="hero-next-venue mono">{nextMatch.venue}</span>
          </div>
        </div>
      </div>

      <div className="hero-fade" />
      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </div>
  )
}
