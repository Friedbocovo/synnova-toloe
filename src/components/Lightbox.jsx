import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const currentPhoto = photos[index]
  
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-10"
          aria-label="Fermer"
        >
          <X size={24} />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
          aria-label="Précédent"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Content Container */}
        <div className="flex flex-col items-center max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
          {/* Image */}
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            src={typeof currentPhoto === 'string' ? currentPhoto : currentPhoto.src}
            alt={typeof currentPhoto === 'string' ? `Synnova - photo ${index + 1}` : currentPhoto.title || `Synnova - photo ${index + 1}`}
            className="max-h-[70vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          />
          
          {/* Photo Info */}
          {typeof currentPhoto === 'object' && (currentPhoto.title || currentPhoto.cat || currentPhoto.description) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center max-w-2xl px-4"
            >
              {currentPhoto.title && (
                <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Itim, cursive', color: '#ffffff' }}>
                  {currentPhoto.title}
                </h3>
              )}
              {currentPhoto.cat && (
                <p className="text-base font-semibold mb-2" style={{ color: '#C2185B' }}>
                  {currentPhoto.cat}
                </p>
              )}
              {currentPhoto.description && (
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {currentPhoto.description}
                </p>
              )}
            </motion.div>
          )}
        </div>

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
          aria-label="Suivant"
        >
          <ChevronRight size={28} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
          {index + 1} / {photos.length}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
