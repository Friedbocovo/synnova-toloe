import { Link } from 'react-router-dom'
import { ArrowRight, Mic, Sparkles, Film, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import { useApp } from '../context/AppContext'

export default function Univers() {
  const { t, theme } = useApp()

  // Enable scroll snap on mount, disable on unmount
  useEffect(() => {
    document.body.classList.add('snap-scroll')
    return () => {
      document.body.classList.remove('snap-scroll')
    }
  }, [])

  const universIcons = [
    <Mic className="w-8 h-8" />,
    <Sparkles className="w-8 h-8" />,
    <Film className="w-8 h-8" />,
    <Leaf className="w-8 h-8" />,
  ]

  const universPhotos = [
    '/images/h24.webp',
    '/images/h12.webp',
    '/images/24.webp',
    '/images/h65.webp',
  ]

  const universGradients = [
    'from-primary to-pink-600',
    'from-purple-500 to-indigo-600',
    'from-amber-500 to-orange-600',
    'from-green-500 to-emerald-600',
  ]

  return (
    <PageWrapper>
      {/* Hero Section - Cinematic Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden snap-section">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/uni1.webp" 
            alt="Mes Univers" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
        {/* Hero Content */}
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
              {t.univers.badge}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-tight" 
              style={{ fontFamily: 'Itim, cursive', color: '#ffffff' }}
            >
              {t.univers.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-gray-100 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
            >
              {t.univers.intro}
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

      {/* Univers Sections - Full Screen Cinematic */}
      {t.univers.items.map((item, i) => (
        <section 
          key={item.tag} 
          className="relative min-h-screen flex items-center overflow-hidden snap-section border-t-2"
          style={{ 
            backgroundColor: theme === 'dark' 
              ? (i % 2 === 0 ? 'var(--bg)' : 'var(--bg-card)')
              : (i % 2 === 0 ? '#e8eaed' : '#f5f5f5'),
            borderColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.12)'
          }}
        >
          {/* Background Image with Parallax */}
          <motion.div 
            className="absolute inset-0"
            style={{ opacity: theme === 'dark' ? 0.08 : 0.15 }}
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: theme === 'dark' ? 0.08 : 0.15 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <img 
              src={universPhotos[i]} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative group">
                  {/* Decorative Gradient Glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-br ${universGradients[i]} opacity-20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500`} />
                  
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={universPhotos[i]} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${universGradients[i]} opacity-20`} />
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 left-6 w-16 h-16 rounded-xl bg-black/60 backdrop-blur-md flex items-center justify-center">
                      <span className="text-white text-2xl font-bold" style={{ fontFamily: 'Itim, cursive' }}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute bottom-6 right-6 w-14 h-14 rounded-xl bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                      {universIcons[i]}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${universGradients[i]} items-center justify-center text-white shadow-lg`}>
                    {universIcons[i]}
                  </div>
                </motion.div>

                <h2 
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight" 
                  style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}
                >
                  {item.title}
                </h2>
                
                <p className="text-primary text-lg font-semibold mb-6 tracking-wide">
                  {item.subtitle}
                </p>
                
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mb-8 rounded-full" />
                
                <p 
                  className="text-lg sm:text-xl leading-relaxed mb-10" 
                  style={{ color: 'var(--text-muted)' }}
                >
                  {item.desc}
                </p>

                {/* CTA Button */}
                <Link 
                  to="/contact" 
                  className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${universGradients[i]} text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                >
                  {item.cta}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section - Portfolio */}
      <section 
        className="relative py-32 overflow-hidden snap-section min-h-screen flex items-center border-t-2" 
        style={{ 
          backgroundColor: theme === 'dark' ? 'var(--bg)' : '#e8eaed',
          borderColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.12)'
        }}
      >
        <div className="absolute inset-0">
          <img 
            src="/images/hero.png" 
            alt="Background"
            className="w-full h-full object-cover"
            style={{ opacity: theme === 'dark' ? 0.05 : 0.08 }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center w-full">
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
              {/* Animated Gradient Background */}
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
                  className="text-5xl sm:text-6xl font-bold mb-6" 
                  style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}
                >
                  {t.univers.portfolioCta}
                </h2>
                <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                  {t.univers.portfolioDesc}
                </p>
                
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-purple-500 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                >
                  {t.univers.portfolioCta}
                  <ArrowRight size={24} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
