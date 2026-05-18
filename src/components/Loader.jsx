import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PHOTOS = [
  '/images/1.webp', '/images/3.webp', '/images/5.webp', '/images/7.webp',
  '/images/8.webp', '/images/11.webp', '/images/13.webp', '/images/15.webp',
  '/images/17.webp', '/images/19.webp', '/images/21.webp', '/images/23.webp',
  '/images/25.webp', '/images/27.webp', '/images/29.webp',
]

function FallingPhoto({ src, rowIndex, photoIndex }) {
  // Position horizontale basée sur l'index de la photo dans la ligne
  const left = (photoIndex * 20) % 100 // Espacement régulier de 20%
  const delay = rowIndex * 0.8 // Délai augmenté pour plus d'espace entre les lignes
  const duration = 3 + Math.random() * 1
  const rotate = -10 + Math.random() * 20

  // Détecter la préférence utilisateur pour les animations réduites (SSR-safe)
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  return (
    <motion.div
      className="absolute rounded-2xl overflow-hidden shadow-2xl pointer-events-none w-[120px] h-[162px] md:w-[220px] md:h-[297px]"
      style={{ left: left + '%', zIndex: 2, top: -200 }}
      initial={{ y: 0, opacity: 0, rotate }}
      animate={{ 
        y: '120vh', 
        opacity: [0, 1, 1, 0], 
        rotate: rotate + 5 
      }}
      transition={prefersReducedMotion 
        ? { duration: 2, ease: 'linear', delay }
        : { duration, delay, ease: 'linear' }
      }
    >
      <img src={src} alt="" className="w-full h-full object-cover" draggable={false} />
    </motion.div>
  )
}

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [fallingPhotos, setFallingPhotos] = useState([])
  const [done, setDone] = useState(false)

  // Détecter la préférence utilisateur pour les animations réduites (SSR-safe)
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + 1
      })
    }, 28)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Créer 4 lignes de photos qui tombent
    const rows = 4
    const photosPerRow = 5
    const allPhotos = []
    
    for (let row = 0; row < rows; row++) {
      for (let i = 0; i < photosPerRow; i++) {
        const src = PHOTOS[Math.floor(Math.random() * PHOTOS.length)]
        allPhotos.push({ 
          src, 
          id: `${row}-${i}`, 
          rowIndex: row, 
          photoIndex: i 
        })
      }
    }
    
    setFallingPhotos(allPhotos)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setDone(true), 400)
      setTimeout(() => onDone(), 900)
    }
  }, [progress, onDone])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center"
          style={{ backgroundColor: '#030712' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Photos qui pleuvent */}
          <div className="absolute inset-0 overflow-hidden">
            {fallingPhotos.map(p => (
              <FallingPhoto key={p.id} src={p.src} rowIndex={p.rowIndex} photoIndex={p.photoIndex} />
            ))}
          </div>

          {/* Overlay pour lisibilite */}
          <div className="absolute inset-0 bg-gray-950/60" style={{ zIndex: 3 }} />

          {/* Contenu central */}
          <div className="relative flex flex-col items-center gap-6" style={{ zIndex: 10 }}>
            {/* Grand pourcentage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-script font-black text-white leading-none"
              style={{ fontSize: 'clamp(100px, 20vw, 200px)', fontFamily: 'Itim, cursive' }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="Chargement en cours"
            >
              <span style={{ background: "linear-gradient(to right, #C2185B, #F9A825)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{progress}</span>
              <span className="text-primary" style={{ fontSize: '0.4em' }}>%</span>
            </motion.div>

            {/* Barre de progression avec icône cœur */}
            <div className="relative w-64 md:w-80 h-1 bg-gray-800 rounded-full overflow-visible">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-gold to-primary rounded-full"
                animate={{ width: progress + '%' }}
                transition={{ duration: 0.1 }}
              />
              {/* Icône cœur animée */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 text-2xl"
                animate={{ left: `calc(${progress}% - 12px)` }}
                transition={prefersReducedMotion 
                  ? { duration: 0.3, ease: 'linear' }
                  : { duration: 0.1, ease: 'linear' }
                }
                style={{ willChange: 'left' }}
              >
                ❤️
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
