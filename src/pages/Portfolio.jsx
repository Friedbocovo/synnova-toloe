import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import Lightbox from '../components/Lightbox'
import { useApp } from '../context/AppContext'

const gallery = [
  // Cinéma
  { src: '/images/24.webp', cat: 'Cinema', title: 'Production Cinéma', description: 'Sur le plateau en tant que régisseuse' },
  { src: '/images/26.webp', cat: 'Cinema', title: 'Tournage', description: 'Coordination technique sur un projet audiovisuel' },
  
  // Événements
  { src: '/images/h52.webp', cat: 'Evenements', title: 'Animation Événement', description: 'Maîtresse de cérémonie lors d\'un événement culturel' },
  { src: '/images/h53.webp', cat: 'Evenements', title: 'Festival des Arts', description: 'Animation au Festival International des Arts du Bénin' },
  { src: '/images/h54.webp', cat: 'Evenements', title: 'Événement Live', description: 'Présentation d\'un événement en direct' },
  { src: '/images/h41.webp', cat: 'Evenements', title: 'Cérémonie Officielle', description: 'Animation d\'une cérémonie institutionnelle' },
  { src: '/images/h28.webp', cat: 'Evenements', title: 'Événement Culturel', description: 'Animation d\'un événement culturel à Grand-Popo' },
  { src: '/images/h29.webp', cat: 'Evenements', title: 'Conférence', description: 'Modération d\'une conférence' },
  
  // Communication
  { src: '/images/h12.webp', cat: 'Communication', title: 'Campagne Digitale', description: 'Création de contenu pour les réseaux sociaux' },
  { src: '/images/h13.webp', cat: 'Communication', title: 'Stratégie Communication', description: 'Développement de stratégie de communication digitale' },
  { src: '/images/13.webp', cat: 'Communication', title: 'Production Contenu', description: 'Création de contenu visuel pour campagne' },
  { src: '/images/h44.webp', cat: 'Communication', title: 'Communication Visuelle', description: 'Shooting pour campagne de communication' },
  { src: '/images/h45.webp', cat: 'Communication', title: 'Réseaux Sociaux', description: 'Contenu pour engagement communautaire' },
  { src: '/images/h47.webp', cat: 'Communication', title: 'Campagne Institutionnelle', description: 'Communication pour partenaire institutionnel' },
  
  // Entrepreneuriat
  { src: '/images/h14.webp', cat: 'Entrepreneuriat', title: 'Emballages Biodégradables', description: 'Production d\'emballages éco-responsables' },
  { src: '/images/h15.webp', cat: 'Entrepreneuriat', title: 'Entrepreneuriat Social', description: 'Projet d\'entrepreneuriat pour un Bénin plus vert' },
]

export default function Portfolio() {
  const { t, theme } = useApp()
  const filters = t.portfolio.filters
  const [active, setActive] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Filtrer par index : 0 = Tous, 1 = Événements, 2 = Cinéma, 3 = Communication, 4 = Entrepreneuriat
  const filtered = active === 0 ? gallery : gallery.filter(i => {
    if (active === 1) return i.cat === 'Evenements'
    if (active === 2) return i.cat === 'Cinema'
    if (active === 3) return i.cat === 'Communication'
    if (active === 4) return i.cat === 'Entrepreneuriat'
    return false
  })

  console.log('Active filter:', active, 'Filtered count:', filtered.length)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevPhoto = useCallback(() => {
    if (filtered.length === 0) return
    setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length)
  }, [filtered.length])
  const nextPhoto = useCallback(() => {
    if (filtered.length === 0) return
    setLightboxIndex(i => (i + 1) % filtered.length)
  }, [filtered.length])

  return (
    <PageWrapper>
      {/* Hero Section - Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/h48.webp" 
            alt="Portfolio" 
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
              {t.portfolio.badge}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-tight" 
              style={{ fontFamily: 'Itim, cursive', color: '#ffffff' }}
            >
              {t.portfolio.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-gray-100 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
            >
              {t.portfolio.intro}
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
          <span className="text-white/70 text-xs tracking-widest uppercase">Explorer</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[2px] h-16 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section 
        className="py-20" 
        style={{ backgroundColor: theme === 'dark' ? 'var(--bg)' : '#f8f9fa' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            {filters.map((f, i) => (
              <button 
                key={f} 
                onClick={() => { setActive(i); setLightboxIndex(null) }}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === i 
                    ? 'bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg shadow-primary/30 scale-105' 
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {f} {active === i && `(${filtered.length})`}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid - Masonry Layout */}
          <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4 mx-auto max-w-[1600px]">
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                viewport={{ once: true }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 mb-4"
                onClick={() => setLightboxIndex(i)}
              >
                <img 
                  src={item.src} 
                  alt={item.title || "Synnova Portfolio"} 
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
                {/* Overlay avec infos */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h4 className="text-white font-bold text-base mb-1 drop-shadow-lg" style={{ fontFamily: 'Itim, cursive', color: '#ffffff' }}>
                    {item.title}
                  </h4>
                  <p className="text-white text-sm font-semibold drop-shadow-lg" style={{  color: '#C2185B' }}>
                    {item.cat}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-20" 
        style={{ backgroundColor: theme === 'dark' ? 'var(--bg-card)' : '#ffffff' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-4" 
              style={{ color: 'var(--text)', fontFamily: 'Itim, cursive'  }}
            >
              {t.portfolio.testimonials.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.portfolio.testimonials.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
                  borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                }}
              >
                <div className="text-primary text-5xl font-display mb-4">"</div>
                <p className="text-base leading-relaxed mb-6 italic" style={{ color: 'var(--text-muted)' }}>
                  {item.text}
                </p>
                <div className="pt-4 border-t flex items-center gap-4" style={{ borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                  {/* Avatar */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ 
                      background: 'linear-gradient(135deg, #C2185B 0%, #9C27B0 100%)'
                    }}
                  >
                    {item.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{item.author}</p>
                    <p className="text-xs mt-1 text-primary">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20" 
        style={{ backgroundColor: theme === 'dark' ? 'var(--bg)' : '#f8f9fa' }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative p-16 rounded-3xl backdrop-blur-sm border-2 overflow-hidden shadow-xl"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)'
              }}
            >
              <motion.div
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(194, 24, 91, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(194, 24, 91, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, rgba(194, 24, 91, 0.1) 0%, transparent 50%)',
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-0"
              />

              <div className="relative">
                <h2 
                  className="text-4xl sm:text-5xl font-bold mb-6" 
                  style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}
                >
                  {t.portfolio.cta.title}
                </h2>
                <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                  {t.portfolio.cta.desc}
                </p>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-purple-500 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                >
                  {t.portfolio.cta.btn}
                  <ArrowRight size={24} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox 
          photos={filtered} 
          index={lightboxIndex} 
          onClose={closeLightbox} 
          onPrev={prevPhoto} 
          onNext={nextPhoto} 
        />
      )}
    </PageWrapper>
  )
}
