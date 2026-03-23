import { useEffect } from 'react'
import './App.css'
import { LanguageProvider } from './LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'
import SiteNav from './components/SiteNav'
import Hero from './components/Hero'
import Squad from './components/Squad'
import Coach from './components/Coach'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.06 }
    )
    sections.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <LanguageProvider>
      <div className="app">
        <SiteNav current="brasafut" />
        <LanguageSwitcher />
        <Hero />
        <Squad />
        <Coach />
        <Stats />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
