import { useState } from 'react'
import { Facebook, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionReveal from '../components/SectionReveal'

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

const demandes = [
  'Animation d\'événement',
  'Collaboration cinéma',
  'Communication digitale',
  'Emballages biodégradables',
  'Partenariat',
  'Autre',
]

export default function Contact() {
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', demande: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.prenom.trim()) e.prenom = 'Prénom requis'
    if (!form.nom.trim()) e.nom = 'Nom requis'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email valide requis'
    if (!form.demande) e.demande = 'Veuillez choisir un type de demande'
    if (!form.message.trim() || form.message.length < 20) e.message = 'Message trop court (min. 20 caractères)'
    return e
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(194,24,91,0.12),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              Contact
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Travaillons ensemble
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Un projet, une idée, une collaboration ? Je suis à l'écoute. Écrivez-moi et construisons quelque chose de beau.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Formulaire + Réseaux */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <SectionReveal>
                {submitted ? (
                  <div className="card-dark flex flex-col items-center justify-center py-20 text-center">
                    <CheckCircle className="w-16 h-16 text-green-400 mb-6" />
                    <h2 className="font-display text-2xl font-bold text-white mb-3">Message envoyé !</h2>
                    <p className="text-gray-400 max-w-sm">
                      Merci pour votre message. Synnova vous répondra dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="card-dark space-y-6">
                    <h2 className="font-display text-2xl font-bold text-white mb-2">Envoyez un message</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Prénom */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="prenom">Prénom</label>
                        <input
                          id="prenom"
                          name="prenom"
                          type="text"
                          value={form.prenom}
                          onChange={handleChange}
                          placeholder="Votre prénom"
                          className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.prenom ? 'border-red-500' : 'border-gray-700 focus:border-primary'}`}
                        />
                        {errors.prenom && <p className="text-red-400 text-xs mt-1">{errors.prenom}</p>}
                      </div>
                      {/* Nom */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="nom">Nom</label>
                        <input
                          id="nom"
                          name="nom"
                          type="text"
                          value={form.nom}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.nom ? 'border-red-500' : 'border-gray-700 focus:border-primary'}`}
                        />
                        {errors.nom && <p className="text-red-400 text-xs mt-1">{errors.nom}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.email ? 'border-red-500' : 'border-gray-700 focus:border-primary'}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Type de demande */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="demande">Type de demande</label>
                      <select
                        id="demande"
                        name="demande"
                        value={form.demande}
                        onChange={handleChange}
                        className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.demande ? 'border-red-500 text-gray-400' : 'border-gray-700 focus:border-primary'} ${form.demande ? 'text-white' : 'text-gray-500'}`}
                      >
                        <option value="" disabled>Choisissez un type de demande</option>
                        {demandes.map(d => <option key={d} value={d} className="text-white bg-gray-800">{d}</option>)}
                      </select>
                      {errors.demande && <p className="text-red-400 text-xs mt-1">{errors.demande}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet ou votre demande..."
                        className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-700 focus:border-primary'}`}
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </SectionReveal>
            </div>

            {/* Réseaux sociaux */}
            <div className="lg:col-span-2 space-y-6">
              <SectionReveal delay={0.2}>
                <div className="card-dark">
                  <h3 className="font-display text-xl font-bold text-white mb-6">Suivez mon quotidien</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Retrouvez-moi sur TikTok & Instagram pour suivre mes aventures au quotidien.
                  </p>
                  <div className="space-y-3">
                    {socials.map(({ href, icon, label, handle }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 hover:border-primary/30 border border-transparent transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          {icon}
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{label}</p>
                          <p className="text-gray-500 text-xs">{handle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="card-dark bg-gradient-to-br from-primary/10 to-gold/5 border-primary/20">
                  <p className="font-script text-2xl text-primary mb-3">Grand-Popo, Bénin</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Synnova est basée à Grand-Popo et intervient sur tout le territoire béninois et au-delà.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
