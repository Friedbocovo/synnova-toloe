import { createContext, useContext, useState, useEffect } from 'react'
import fr from '../i18n/fr'
import en from '../i18n/en'

const AppContext = createContext()

// Helper function to safely access localStorage
const getLocalStorage = (key, defaultValue) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem(key) || defaultValue
  }
  return defaultValue
}

const setLocalStorage = (key, value) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(key, value)
  }
}

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => getLocalStorage('lang', 'fr'))
  const [theme, setTheme] = useState(() => getLocalStorage('theme', 'dark'))

  const t = lang === 'fr' ? fr : en

  useEffect(() => {
    setLocalStorage('lang', lang)
  }, [lang])

  useEffect(() => {
    setLocalStorage('theme', theme)
    if (typeof document !== 'undefined') {
      if (theme === 'light') {
        document.documentElement.classList.add('light')
      } else {
        document.documentElement.classList.remove('light')
      }
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
