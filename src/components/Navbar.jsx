import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../context/AppContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, lang, theme, toggleLang, toggleTheme } = useApp()

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/univers', label: t.nav.univers },
    { to: '/portfolio', label: t.nav.portfolio },
    { to: '/contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? theme === 'dark' 
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/20' 
          : 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-[95%] md:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 lg:gap-16 h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/images/logo-synnova.png" alt="Synnova" className="h-14 md:h-24 lg:h-26 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                    isActive ? 'text-primary' : theme === 'light' ? 'text-gray-800 hover:text-gray-950' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </>
                )}
              </NavLink>
            ))}

            {/* Langue + Thème */}
            <div className="flex items-center gap-2 ml-2">
              {/* Toggle langue */}
              <button
                onClick={toggleLang}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-gray-950'
                }`}
                aria-label="Changer la langue"
              >
                <span className="text-base">{lang === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>

              {/* Toggle thème */}
              <button
                onClick={toggleTheme}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-gray-950'
                }`}
                aria-label="Changer le thème"
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              <Link to="/contact" className="btn-primary text-xs py-2 px-4">
                {t.nav.cta}
              </Link>
            </div>
          </nav>

          {/* Mobile right */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleLang}
              className={`px-2 py-1 rounded-full text-xs font-bold ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300' 
                  : 'bg-gray-200 text-gray-800'
              }`}
              aria-label="Langue">
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <button onClick={toggleTheme}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300' 
                  : 'bg-gray-200 text-gray-800'
              }`}
              aria-label="Thème">
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button 
              className="flex flex-col gap-1.5 p-2" 
              onClick={() => setOpen(!open)} 
              aria-label="Menu"
            >
              <motion.span 
                animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-primary rounded-full"
              />
              <motion.span 
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-primary rounded-full"
              />
              <motion.span 
                animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-primary rounded-full"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-md border-t ${
              theme === 'dark' 
                ? 'bg-gray-950/98 border-gray-800' 
                : 'bg-white/98 border-gray-200'
            }`}
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {links.map(({ to, label }) => (
                <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'bg-primary/10 text-primary' : theme === 'light' ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`
                  }>
                  {label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
