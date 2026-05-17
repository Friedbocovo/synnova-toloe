import { createContext, useContext, useState, useEffect } from 'react'
import fr from '../i18n/fr'
import en from '../i18n/en'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'fr')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  const t = lang === 'fr' ? fr : en

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme === 'light') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }, [theme])

  const toggleLang = () => setLang(l => l === 'fr' ? 'en' : 'fr')
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <AppContext.Provider value={{ lang, theme, t, toggleLang, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
