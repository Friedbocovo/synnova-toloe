import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import { useApp } from '../context/AppContext'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
)

const socials = [
  { href: 'https://facebook.com/synnovalumiere', icon: <Facebook size={16} />, label: 'Facebook' },
  { href: 'https://tiktok.com/@_synnova', icon: <TikTokIcon />, label: 'TikTok' },
  { href: 'https://instagram.com/_synnova', icon: <Instagram size={16} />, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/synnova-belvine-kybarance-tocloe-3882a9232/', icon: <Linkedin size={16} />, label: 'LinkedIn' },
]

export default function Footer() {
  const { t } = useApp()

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/univers', label: t.nav.univers },
    { to: '/portfolio', label: t.nav.portfolio },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <footer style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Partie principale — 4 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-3">
              <img src="/images/logo-synnova.png" alt="Synnova" className="h-16 md:h-20 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
              {t.footer.desc}
            </p>
            <div className="flex gap-2">
              {socials.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'var(--text)' }}>
              {t.footer.nav}
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}
                    className="text-sm transition-colors duration-200 hover:text-primary flex items-center gap-1 group"
                    style={{ color: 'var(--text-muted)' }}>
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-primary">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'var(--text)' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {['Animation d\'événements', 'Communication digitale', 'Cinéma & Régie', 'Emballages bio'].map(s => (
                <li key={s}>
                  <Link to="/univers"
                    className="text-sm transition-colors duration-200 hover:text-primary flex items-center gap-1 group"
                    style={{ color: 'var(--text-muted)' }}>
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-primary">›</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact CTA */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'var(--text)' }}>
              {t.footer.contact}
            </h4>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {t.footer.contactDesc}
            </p>
            <Link to="/contact" className="btn-primary text-xs py-2.5 px-5 inline-flex">
              {t.footer.contactBtn} <ArrowRight size={14} />
            </Link>
            <p className="text-xs mt-5" style={{ color: 'var(--text-muted)' }}>
              Grand-Popo · Bénin
            </p>
          </div>
        </div>

        {/* Bas — copyright */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Synnova Belvine Kybarance Tocloe. {t.footer.rights}
          </p>
          <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
            Made with <span className="text-primary mx-1">♥</span> in Bénin
          </div>
        </div>
      </div>
    </footer>
  )
}