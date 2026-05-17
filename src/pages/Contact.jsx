import { useState } from 'react'
import { Facebook, Instagram, Linkedin, ArrowRight, MapPin, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { useApp } from '../context/AppContext'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
)

const socials = [
  { href: 'https://facebook.com/synnovalumiere', icon: <Facebook size={20} />, label: 'Facebook', handle: 'synnovalumiere' },
  { href: 'https://tiktok.com/@_synnova', icon: <TikTokIcon />, label: 'TikTok', handle: '@_synnova' },
  { href: 'https://instagram.com/_synnova', icon: <Instagram size={20} />, label: 'Instagram', handle: '@_synnova' },
  { href: 'https://linkedin.com/in/synnova-tocloe', icon: <Linkedin size={20} />, label: 'LinkedIn', handle: 'Synnova Tocloe' },
]

export default function Contact() {
  const { t, theme } = useApp()
  const f = t.contact.form
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', demande: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Créer le contenu de l'email
    const subject = `${form.demande} - ${form.prenom} ${form.nom}`
    const body = `Nom: ${form.nom}%0D%0APrénom: ${form.prenom}%0D%0AEmail: ${form.email}%0D%0ADemande: ${form.demande}%0D%0A%0D%0AMessage:%0D%0A${form.message}`
    
    // Ouvrir le client email avec les informations pré-remplies
    window.location.href = `mailto:synnovatocloe@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    
    setTimeout(() => { 
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <PageWrapper>
      {/* Hero Section - Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/h33.webp" 
            alt="Contact" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block px-5 py-2 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full text-primary text-sm font-semibold tracking-widest uppercase mb-8"
            >
              {t.contact.badge}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-tight" 
              style={{ fontFamily: 'Itim, cursive', color: '#ffffff' }}
            >
              {t.contact.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-gray-100 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
            >
              {t.contact.subtitle}
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-white/70 text-xs tracking-widest uppercase">Contact</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[2px] h-16 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </section>

      {/* Contact Form & Info Section */}
      <section 
        className="py-20" 
        style={{ backgroundColor: theme === 'dark' ? 'var(--bg)' : '#f8f9fa' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <ArrowRight className="w-10 h-10 text-primary" />
                  </div>
                  <h2 
                    className="text-3xl font-bold mb-4" 
                    style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}
                  >
                    {f.success}
                  </h2>
                  <p className="text-lg max-w-md" style={{ color: 'var(--text-muted)' }}>
                    {f.successDesc}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-primary">
                        {f.prenom}
                      </label>
                      <input
                        name="prenom"
                        type="text"
                        value={form.prenom}
                        onChange={handleChange}
                        placeholder={f.placeholder.prenom}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:border-primary focus:outline-none"
                        style={{
                          backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#ffffff',
                          borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                          color: 'var(--text)'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-primary">
                        {f.nom}
                      </label>
                      <input
                        name="nom"
                        type="text"
                        value={form.nom}
                        onChange={handleChange}
                        placeholder={f.placeholder.nom}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:border-primary focus:outline-none"
                        style={{
                          backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#ffffff',
                          borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                          color: 'var(--text)'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-primary">
                      {f.email}
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={f.placeholder.email}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:border-primary focus:outline-none"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#ffffff',
                        borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        color: 'var(--text)'
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-primary">
                      {f.demande}
                    </label>
                    <select
                      name="demande"
                      value={form.demande}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:border-primary focus:outline-none"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#ffffff',
                        borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        color: 'var(--text)'
                      }}
                    >
                      <option value="">{f.placeholder.demande}</option>
                      {f.types.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-primary">
                      {f.message}
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={f.placeholder.message}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:border-primary focus:outline-none resize-none"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#ffffff',
                        borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        color: 'var(--text)'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-500 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? f.sending : f.send}
                    <ArrowRight size={20} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}>
                    {t.contact.location}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {t.contact.locationDesc}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}>
                    Email
                  </h3>
                  <a 
                    href="mailto:synnovatocloe@gmail.com"
                    className="text-base leading-relaxed text-primary hover:underline"
                  >
                    synnovatocloe@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}>
                  {t.contact.social}
                </h3>
                <div className="space-y-4">
                  {socials.map(({ href, icon, label, handle }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 hover:border-primary hover:shadow-lg group"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#ffffff',
                        borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                      }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {icon}
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: 'var(--text)' }}>{label}</p>
                        <p className="text-sm text-primary">{handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
