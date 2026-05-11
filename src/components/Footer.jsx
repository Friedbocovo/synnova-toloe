import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
)

const socials = [
  { href: 'https://facebook.com/synnovalumiere', icon: <Facebook size={20} />, label: 'Facebook' },
  { href: 'https://tiktok.com/@_synnova', icon: <TikTokIcon />, label: 'TikTok' },
  { href: 'https://instagram.com/_synnova', icon: <Instagram size={20} />, label: 'Instagram' },
  { href: 'https://linkedin.com/in/synnova-tocloe', icon: <Linkedin size={20} />, label: 'LinkedIn' },
]

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À Propos' },
  { to: '/univers', label: 'Mes Univers' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-script text-3xl text-primary block mb-3">Synnova</span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Animatrice · Communicatrice · Actrice · Entrepreneuse sociale.<br />
              Basée à Grand-Popo, Bénin.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Contact</h3>
            <p className="text-gray-400 text-sm mb-4">
              Une idée de collaboration ? Un événement à animer ? Écrivons ensemble.
            </p>
            <Link to="/contact" className="btn-primary text-xs py-2 px-5">
              Me contacter
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Synnova Belvine Kybarance Tocloe. Tous droits réservés.
          </p>
          <p className="text-gray-700 text-xs">
            Grand-Popo · Bénin
          </p>
        </div>
      </div>
    </footer>
  )
}
