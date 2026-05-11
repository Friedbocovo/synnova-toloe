import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionReveal from '../components/SectionReveal'
import Lightbox from '../components/Lightbox'

const filters = ['Tous', 'Événements', 'Cinéma', 'Communication', 'Entrepreneuriat']

// Distribution des 35 photos par catégorie
const gallery = [
  { src: '/images/1.jpg',  cat: 'Événements' },
  { src: '/images/2.jpg',  cat: 'Événements' },
  { src: '/images/3.jpg',  cat: 'Événements' },
  { src: '/images/4.jpg',  cat: 'Événements' },
  { src: '/images/5.jpg',  cat: 'Événements' },
  { src: '/images/6.jpg',  cat: 'Événements' },
  { src: '/images/7.jpg',  cat: 'Événements' },
  { src: '/images/8.jpg',  cat: 'Événements' },
  { src: '/images/9.jpg',  cat: 'Événements' },
  { src: '/images/10.jpg', cat: 'Cinéma' },
  { src: '/images/11.jpg', cat: 'Cinéma' },
  { src: '/images/12.jpg', cat: 'Cinéma' },
  { src: '/images/13.jpg', cat: 'Cinéma' },
  { src: '/images/14.jpg', cat: 'Cinéma' },
  { src: '/images/15.jpg', cat: 'Cinéma' },
  { src: '/images/16.jpg', cat: 'Cinéma' },
  { src: '/images/17.jpg', cat: 'Communication' },
  { src: '/images/18.jpg', cat: 'Communication' },
  { src: '/images/19.jpg', cat: 'Communication' },
  { src: '/images/20.jpg', cat: 'Communication' },
  { src: '/images/21.jpg', cat: 'Communication' },
  { src: '/images/22.jpg', cat: 'Communication' },
  { src: '/images/23.jpg', cat: 'Communication' },
  { src: '/images/24.jpg', cat: 'Entrepreneuriat' },
  { src: '/images/25.jpg', cat: 'Entrepreneuriat' },
  { src: '/images/26.jpg', cat: 'Entrepreneuriat' },
  { src: '/images/27.jpg', cat: 'Entrepreneuriat' },
  { src: '/images/28.jpg', cat: 'Entrepreneuriat' },
  { src: '/images/29.jpg', cat: 'Entrepreneuriat' },
  { src: '/images/30.jpg', cat: 'Entrepreneuriat' },
  { src: '/images/31.jpg', cat: 'Événements' },
  { src: '/images/32.jpg', cat: 'Cinéma' },
  { src: '/images/33.jpg', cat: 'Communication' },
  { src: '/images/34.jpg', cat: 'Entrepreneuriat' },
  { src: '/images/35.jpg', cat: 'Événements' },
]

const testimonials = [
  {
    text: "Synnova apporte une énergie incroyable sur scène. Son professionnalisme et sa spontanéité font d'elle une animatrice hors pair.",
    author: 'Organisateur, Festival des Arts du Bénin',
    role: 'Partenaire événementiel',
  },
  {
    text: "Une communicatrice digitale talentueuse qui comprend les enjeux de visibilité et sait créer du contenu qui résonne avec les audiences africaines.",
    author: 'Partenaire institutionnel',
    role: 'Collaboration communication',
  },
  {
    text: "Son engagement pour les emballages biodégradables est une inspiration. Elle prouve qu'entrepreneuriat et impact environnemental vont de pair.",
    author: 'Acteur de la société civile',
    role: 'Grand-Popo, Bénin',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('Tous')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = active === 'Tous' ? gallery : gallery.filter(i => i.cat === active)
  const filteredSrcs = filtered.map(i => i.src)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevPhoto = useCallback(() => setLightboxIndex(i => (i - 1 + filteredSrcs.length) % filteredSrcs.length), [filteredSrcs.length])
  const nextPhoto = useCallback(() => setLightboxIndex(i => (i + 1) % filteredSrcs.length), [filteredSrcs.length])

  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/banner.jpg" alt="Portfolio Synnova" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/75 via-gray-950/65 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(194,24,91,0.15),transparent_60%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionReveal>
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              Portfolio & Galerie
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Mes Réalisations
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl max-w-3xl leading-relaxed">
              35 photos · Événements, cinéma, communication, entrepreneuriat — une trace de chaque aventure.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* GALERIE FILTRABLE */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtres */}
          <SectionReveal>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => { setActive(f); setLightboxIndex(null) }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === f
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {f} {active === f && `(${filtered.length})`}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Masonry grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 space-y-3">
            {filtered.map((item, i) => (
              <div
                key={item.src}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={`Synnova Tocloe - ${item.cat}`}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full">
                    {item.cat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="section-title text-center mb-14">Ils parlent de moi</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="card-dark h-full flex flex-col">
                  <div className="text-primary text-4xl font-display mb-4">"</div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">{t.text}</p>
                  <div className="mt-6 pt-4 border-t border-gray-800">
                    <p className="text-white font-semibold text-sm">{t.author}</p>
                    <p className="text-gray-500 text-xs mt-1">{t.role}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Créons ensemble</h2>
            <p className="text-gray-400 mb-8">Un projet en tête ? Parlons-en.</p>
            <Link to="/contact" className="btn-primary">
              Me contacter <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={filteredSrcs}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </PageWrapper>
  )
}
