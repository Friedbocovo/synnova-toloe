import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Film, Leaf, Quote } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import SectionReveal from '../components/SectionReveal'
import { useApp } from '../context/AppContext'

export default function About() {
  const { t, theme } = useApp()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Enable scroll snap on mount, disable on unmount
  useEffect(() => {
    document.body.classList.add('snap-scroll')
    return () => {
      document.body.classList.remove('snap-scroll')
    }
  }, [])

  const storyIcons = [
    <Award className="w-6 h-6" />,
    <Users className="w-6 h-6" />,
    <Film className="w-6 h-6" />,
    <Leaf className="w-6 h-6" />,
  ]

  const storyPhotos = [
    '/images/h51.webp',
    '/images/h15.webp',
    '/images/h4.webp',
    '/images/h65.webp',
  ]

  return (
    <PageWrapper>
      <div ref={containerRef}>
        {/* Hero Section - Cinematic Full Screen */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden snap-section">
          {/* Parallax Background */}
          <motion.div 
            className="absolute inset-0"
            style={{ scale: useTransform(scrollYProgress, [0, 0.2], [1, 1.1]) }}
          >
            <img 
              src="/images/h66.webp" 
              alt="Synnova Tocloe" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </motion.div>
          
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
                {t.about.badge}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-tight" 
                style={{ fontFamily: 'Itim, cursive', color: '#ffffff' }}
              >
                {t.about.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-gray-100 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t.about.intro}
              </motion.p>
            </motion.div>
          </div>

          {/* Scroll Indicator - Cinematic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="text-white/70 text-xs tracking-widest uppercase">Découvrir</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[2px] h-16 bg-gradient-to-b from-primary to-transparent"
            />
          </motion.div>
        </section>

        {/* Story Sections - Full Screen Cinematic */}
        {t.about.story.map((item, i) => (
          <section 
            key={item.tag} 
            className="relative min-h-screen flex items-center overflow-hidden snap-section"
            style={{ 
              backgroundColor: theme === 'dark' 
                ? (i % 2 === 0 ? 'var(--bg)' : 'var(--bg-card)')
                : (i % 2 === 0 ? '#f8f9fa' : '#ffffff')
            }}
          >
            {/* Background Image with Parallax */}
            <motion.div 
              className="absolute inset-0"
              style={{ opacity: theme === 'dark' ? 0.1 : 0.15 }}
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: theme === 'dark' ? 0.1 : 0.15 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={storyPhotos[i]} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                    {/* Decorative Frame */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={storyPhotos[i]} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay Badge */}
                      <div className="absolute top-6 left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-3 rounded-full">
                        <div className="text-primary">
                          {storyIcons[i]}
                        </div>
                        <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: '#ffffff' }}>
                          {item.tag}
                        </span>
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
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <Quote className="w-12 h-12 text-primary/30 mb-6" />
                  </motion.div>

                  <h2 
                    className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight" 
                    style={{ fontFamily: 'Itim, cursive', color: theme === 'light' ? '#111827' : '#ffffff' }}
                  >
                    {item.title}
                  </h2>
                  
                  <p className="text-primary text-lg font-semibold mb-6 tracking-wide">
                    {item.subtitle}
                  </p>
                  
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mb-8 rounded-full" />
                  
                  <p 
                    className="text-lg sm:text-xl leading-relaxed mb-8" 
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item.text}
                  </p>

                  {/* Number Indicator */}
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-bold text-primary/20" style={{ fontFamily: 'Itim, cursive' }}>
                      0{i + 1}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Values Section - Cinematic Grid */}
        <section 
          className="relative py-32 overflow-hidden snap-section min-h-screen flex items-center" 
          style={{ backgroundColor: theme === 'dark' ? 'var(--bg)' : '#f8f9fa' }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
                Mes Piliers
              </span>
              <h2 
                className="text-5xl sm:text-6xl font-bold mb-6" 
                style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}
              >
                {t.about.values.title}
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                {t.about.values.subtitle}
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.about.values.items.map((value, i) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 overflow-hidden"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255, 255, 255, 0.05)',
                      borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)'
                    }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={`/images/v${i + 1}.webp`}
                        alt={value.label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                        style={{ opacity: theme === 'dark' ? 0.2 : 0.25 }}
                      />
                    </div>

                    {/* Gradient Overlay for better readability */}
                    <div 
                      className="absolute inset-0 rounded-2xl transition-all duration-500"
                      style={{
                        background: theme === 'dark' 
                          ? 'linear-gradient(135deg, rgba(194, 24, 91, 0) 0%, rgba(147, 51, 234, 0) 100%)'
                          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)'
                      }}
                    />

                    {/* Gradient Glow on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-purple-500/0 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-all duration-500" />
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-primary/50 group-hover:scale-110 transition-all duration-300">
                        {[<Award className="w-8 h-8" />, <Users className="w-8 h-8" />, <Film className="w-8 h-8" />, <Leaf className="w-8 h-8" />][i]}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 
                      className="text-2xl font-bold mb-3" 
                      style={{ color: 'var(--text)', fontFamily: 'Itim, cursive' }}
                    >
                      {value.label}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {value.desc}
                    </p>

                    {/* Number */}
                    <div className="absolute top-4 right-4 text-4xl font-bold opacity-10 group-hover:opacity-20 transition-opacity" style={{ fontFamily: 'Itim, cursive' }}>
                      0{i + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Cinematic */}
        <section 
          className="relative py-32 overflow-hidden snap-section min-h-screen flex items-center" 
          style={{ backgroundColor: theme === 'dark' ? 'var(--bg-card)' : '#ffffff' }}
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
              <div className="relative p-16 rounded-3xl backdrop-blur-sm border-2 overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.95)',
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
                    {t.about.ctaTitle}
                  </h2>
                  <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                    {t.about.ctaDesc}
                  </p>
                  
                  <Link 
                    to="/univers" 
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-purple-500 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                  >
                    {t.about.cta}
                    <ArrowRight size={24} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
