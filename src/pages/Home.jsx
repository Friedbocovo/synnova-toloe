import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Mic, Film, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import SectionReveal from '../components/SectionReveal'

const facets = [
  { icon: <Mic className="w-8 h-8" />, title: 'Animatrice', desc: 'Événements live, festivals, cérémonies', color: 'from-pink-500 to-rose-600', to: '/univers' },
  { icon: <Sparkles className="w-8 h-8" />, title: 'Communicatrice', desc: 'Stratégie digitale, création de contenu', color: 'from-purple-500 to-indigo-600', to: '/univers' },
  { icon: <Film className="w-8 h-8" />, title: 'Actrice', desc: 'Cinéma, régie plateau, production', color: 'from-amber-500 to-orange-600', to: '/univers' },
  { icon: <Leaf className="w-8 h-8" />, title: 'Entrepreneuse', desc: 'Emballages biodégradables éco-responsables', color: 'from-green-500 to-emerald-600', to: '/univers' },
]

const highlights = [
  { label: 'Festival International des Arts du Bénin', value: 'Animatrice live' },
  { label: 'UReport Grand-Popo', value: 'Coordonnatrice' },
  { label: 'Mairie des Jeunes Grand-Popo', value: 'Ex-Chargée Communication' },
  { label: 'UCAE', value: 'Licence Journalisme' },
]

const teaserPhotos = ['/images/1.jpg', '/images/5.jpg', '/images/10.jpg', '/images/17.jpg']

export default function Home() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="/images/banner.jpg" alt="Synnova Tocloe" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/60 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(194,24,91,0.2),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              Animatrice · Communicatrice · Actrice
            </span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Synnova</span>
              <br />
              <span className="text-white">Tocloe</span>
            </h1>
            <p className="font-script text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              "Je suis une femme en chemin, portée par la création, la parole et l'engagement."
            </p>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10">
              Journaliste · Animatrice d'événements · Actrice de cinéma · Entrepreneuse sociale — Grand-Popo, Bénin
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/about" className="btn-primary">
                Découvrir mon univers <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Me contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FACETTES */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="section-title text-center mb-4">Mes Facettes</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Quatre univers, une même passion : créer, communiquer et inspirer</p>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facets.map((f, i) => (
              <SectionReveal key={f.title} delay={i * 0.1}>
                <Link to={f.to} className="group card-dark hover:scale-105 transition-transform duration-300 block">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE TEASER */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="section-title text-center mb-4">En Images</h2>
            <p className="text-gray-400 text-center max-w-xl mx-auto mb-14">Quelques instants capturés</p>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teaserPhotos.map((src, i) => (
              <SectionReveal key={src} delay={i * 0.1}>
                <div className="aspect-square rounded-2xl overflow-hidden group">
                  <img
                    src={src}
                    alt={`Synnova Tocloe - photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/portfolio" className="btn-outline">
                Voir toute la galerie <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* MOMENTS FORTS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="section-title text-center mb-16">Moments Forts</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <SectionReveal key={item.label} delay={i * 0.1}>
                <div className="card-dark flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                    <p className="text-white font-semibold text-lg">{item.value}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="section-title mb-6">Travaillons Ensemble</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Un événement à animer ? Un projet de communication ? Une collaboration créative ? Écrivons la suite ensemble.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Contactez-moi <ArrowRight size={20} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
