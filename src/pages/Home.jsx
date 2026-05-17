import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Mic, Film, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import SectionReveal from '../components/SectionReveal'
import CountUp from '../components/CountUp'
import PhotoCarousel from '../components/PhotoCarousel'
import GradualSpacing from '../components/GradualSpacing'
import { useApp } from '../context/AppContext'

const facets = [
  { icon: <Mic size={22} />, iconBg: 'bg-primary/15', accent: 'text-primary', to: '/univers' },
  { icon: <Sparkles size={22} />, iconBg: 'bg-amber-500/15', accent: 'text-amber-400', to: '/univers' },
  { icon: <Film size={22} />, iconBg: 'bg-blue-500/15', accent: 'text-blue-400', to: '/univers' },
  { icon: <Leaf size={22} />, iconBg: 'bg-green-500/15', accent: 'text-green-400', to: '/univers' },
]

const stats = [
  { value: 5, suffix: '+', color: 'text-primary' },
  { value: 20, suffix: '+', color: 'text-gold' },
  { value: 5, suffix: '+', color: 'text-blue-600' },
  { value: 2, suffix: '+', color: 'text-green-400' },
]

const highlights = [
  { label: '', value: 'Événements à venir' },
  { label: '', value: 'UReport' },
  { label: '', value: 'Mood' },
]

const teaserPhotos = ['/images/h1.webp', '/images/h3.webp', '/images/h5.webp', '/images/h2.webp', '/images/h10.webp', '/images/h11.webp', '/images/h13.webp', '/images/15.webp']

export default function Home() {
  const { t, theme } = useApp()

  return (
    <PageWrapper >
      {/* HERO */}
      <section className={`relative min-h-screen ${theme === 'light' ? 'md:flex md:items-center' : 'flex items-center'} overflow-hidden bg-gray-950`}>
        {/* Image en haut sur mobile light, absolute sur desktop et dark mobile */}
        <div className={theme === 'light' ? 'md:absolute md:inset-0 w-full md:h-full h-[40vh]' : 'absolute inset-0'}>
          <img
            src={
              theme === 'dark'
                ? (window.innerWidth < 768 ? '/images/h6.webp' : '/images/h6def.webp')
                : (window.innerWidth < 768 ? '/images/h3.webp' : '/images/bg-blanc-1.webp')
            }
            alt='Synnova Tocloe'
            className={`w-full h-full object-cover md:object-[right_15%] ${theme === 'light' ? 'object-top' : ''}`}
          />
          {theme === 'dark' && (
            <>

            </>
          )}
        </div>

        {/* Contenu texte */}
        <div className={`relative w-full md:max-w-[75%] mx-auto px-8 sm:px-12 lg:px-2 ${theme === 'light' ? 'md:py-32 py-8' : 'py-32 md:translate-y-0 translate-y-[160px]'} flex justify-start`}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className={`max-w-xl w-full lg:w-1/2 ${theme === 'light' ? 'md:bg-transparent md:backdrop-blur-none md:p-0' : 'md:bg-transparent bg-black/40 md:backdrop-blur-none backdrop-blur-sm md:p-0 p-6 rounded-2xl'}`}>

            <span className='inline-block px-4 py-1.5 bg-primary/20 border hidden md:inline border-primary/40 rounded-full text-primary text-xs font-semibold tracking-wider uppercase mb-6'>
              {t.hero.badge}
            </span>
            <h1 className='font-display text-6xl sm:text-7xl xl:text-[180px] font-bold mb-6 leading-tight' style={{ color: theme === 'light' ? 'var(--text)' : 'white' }}>
              <motion.span 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`hero-title-synnova ${theme === 'dark' ? 'gradient-text' : ''}`} 
                style={{ fontFamily: 'Itim, cursive', color: theme === 'light' ? '#C2185B' : undefined, display: 'inline-block' }}
              >
                Synnova
              </motion.span>
              <br />
              <motion.span 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ fontFamily: 'Itim, cursive', display: 'inline-block' }}
              >
                Tocloe
              </motion.span>
            </h1>
            <p className='hero-subtitle font-script text-xl sm:text-4xl mb-4 leading-relaxed' style={{ color: theme === 'light' ? 'var(--text-muted)' : '#e5e7eb' }}>
              <GradualSpacing
                text={t.hero.subtitle}
                delay={0.5}
              />
            </p>
            <p className='hero-description text-sm sm:text-base max-w-sm mb-10' style={{ color: theme === 'light' ? 'var(--text-muted)' : '#9ca3af' }}>{t.hero.desc}</p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link to='/univers' className='btn-primary '>{t.hero.cta1} <ArrowRight size={18} /></Link>
              <Link to='/contact' className='btn-outline border-[5px] md:border-2 text-center md:text-inherit !text-white'>{t.hero.cta2}</Link>
            </div>
          </motion.div>
        </div>

        <div className='absolute bottom-8 right-8 flex gap-2 z-10' />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className='absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 z-10'
        >
          {/* Cercle avec double flèche */}
          <motion.div
            className='w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center'
            animate={{
              scale: [1, 1.1, 1],
              borderColor: ['rgba(194, 24, 91, 0.5)', 'rgba(194, 24, 91, 1)', 'rgba(194, 24, 91, 0.5)']
            }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className='text-primary'
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </motion.svg>
          </motion.div>
          <motion.p
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className='text-xs tracking-widest uppercase text-primary font-semibold'
          >
            Scroll
          </motion.p>
        </motion.div>
      </section>
      {/* FACETTES */}
      <section className='py-20' style={{ backgroundColor: 'var(--bg)' }}>
        <div className='max-w-[80%]  mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionReveal>
            <h2 className='section-title md:text-9xl text-center mb-4' style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}>{t.facets.title}</h2>
            <p className='text-center md:text-3xl max-w-auto mx-auto mb-16' style={{ color: 'var(--text-muted)' }}>{t.facets.subtitle}</p>
          </SectionReveal>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {facets.map((f, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className='card-dark md:w-[350px] flex flex-col h-full group hover:border-primary/40 transition-all duration-300'>
                  <div className={'w-16 h-16 rounded-full flex items-center justify-center mb-6 ' + f.iconBg}>
                    <span className={f.accent}>{f.icon}</span>
                  </div>
                  <h3 className='font-display text-2xl font-bold mb-3' style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}>{t.facets.items[i].title}</h3>
                  <p className='text-sm leading-relaxed flex-1' style={{ color: 'var(--text-muted)' }}>{t.facets.items[i].desc}</p>
                  <Link to={f.to} className={'inline-flex items-center gap-1 mt-6 text-xs font-bold tracking-widest uppercase ' + f.accent + ' hover:gap-3 transition-all duration-200'}>
                    {t.facets.seeMore} <ArrowRight size={12} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800'>
            {stats.map((s, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className='text-center'>
                  <div className={'font-display text-5xl sm:text-6xl font-black mb-2 ' + s.color} style={{ fontFamily: 'Itim, cursive' }} >
                    {s.value !== null ? <CountUp end={s.value} suffix={s.suffix} /> : s.suffix}
                  </div>
                  <p className='text-xs tracking-widest uppercase' style={{ color: 'var(--text-muted)' }}>{t.stats[i].label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      {/* CAROUSEL */}
      <section className='py-20' style={{ backgroundColor: 'var(--bg)' }}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionReveal>
            <h2 className='section-title md:text-9xl text-center mb-4' style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}>{t.gallery.title}</h2>
            <p className='text-center md:text-3xl mb-10' style={{ color: 'var(--text-muted)' }}>{t.gallery.subtitle}</p>
          </SectionReveal>
          <PhotoCarousel photos={teaserPhotos} />
          <SectionReveal delay={0.3}>
            <div className='text-center mt-8'>
              <Link to='/portfolio' className='btn-outline'>{t.gallery.cta} <ArrowRight size={16} /></Link>
            </div>
          </SectionReveal>
        </div>
      </section>
      {/* MOMENTS FORTS */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionReveal><h2 className='section-title md:text-7xl text-center mb-16' style={{ color: 'var(--text)', fontFamily: `Itim` }}>{t.highlights.title}</h2></SectionReveal>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Colonne gauche : 2 cards empilées */}
            <div className='flex flex-col gap-6'>
              {t.highlights.items.slice(0, 2).map((item, i) => {
                const bgImages = ['/images/h64.webp', '/images/h54.webp']
                return (
                  <SectionReveal key={item.label} delay={i * 0.1}>
                    <div className='card-dark flex items-end justify-between relative overflow-hidden group min-h-[250px] md:min-h-[320px]'>
                      {/* Image de background */}
                      <div
                        className='absolute inset-0  group-hover:opacity-50 transition-opacity duration-300'
                        style={{
                          backgroundImage: `url(${bgImages[i]})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      {/* Contenu */}
                      <div className='relative z-10 bg-white/50 backdrop-blur-sm px-4 py-3 rounded-lg'>
                        <p className='text-sm mb-1 font-semibold text-gray-700'>{item.label}</p>
                        <p className='font-black md:text-4xl text-lg' style={{ color: '#C2185B', fontFamily: `Itim` }}>{item.value}</p>
                      </div>
                      <div className='w-2 h-2 rounded-full bg-primary flex-shrink-0 relative z-10' />
                    </div>
                  </SectionReveal>
                )
              })}
            </div>

            {/* Colonne droite : Card vidéo pleine hauteur */}
            <SectionReveal delay={0.2}>
              <div className='card-dark flex items-end justify-between relative overflow-hidden group h-full min-h-[400px] md:min-h-[250px]'>
                {/* Vidéo de background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='absolute inset-0 w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300'
                >
                  <source src='/hero.mp4' type='video/mp4' />
                </video>
                {/* Contenu */}
                <div className='relative z-10 bg-white/50 backdrop-blur-sm px-4 py-3 rounded-lg'>
                  <p className='text-sm mb-1 font-semibold text-gray-700'>{t.highlights.items[2].label}</p>
                  <p className='font-black md:text-4xl text-lg' style={{ color: '#C2185B', fontFamily: `Itim` }}>{t.highlights.items[2].value}</p>
                </div>
                <div className='w-2 h-2 rounded-full bg-primary flex-shrink-0 relative z-10' />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className='py-20' style={{ backgroundColor: 'var(--bg)' }}>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <SectionReveal>
            <h2 className='section-title md:text-7xl mb-6' style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}>{t.cta.title}</h2>
            <p className='text-lg mb-8 md:text-2xl max-w-2xl mx-auto' style={{ color: 'var(--text-muted)' }}>{t.cta.desc}</p>
            <Link to='/contact' className='btn-primary text-lg px-8 py-4'>{t.cta.btn} <ArrowRight size={20} /></Link>
          </SectionReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
