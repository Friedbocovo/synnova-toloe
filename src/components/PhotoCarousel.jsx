import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const variants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

const CARD_W = 280
const CARD_H = 400

// Écarts : 2px entre centrale et ±1, 5px entre ±1 et ±2
const GAP_1 = 15   // px entre carte centrale et carte ±1
const GAP_2 = 50   // px entre carte ±1 et carte ±2

const SCALE_1 = 0.78
const SCALE_2 = 0.55

// Position tx de ±1 : moitié centrale + moitié ±1 + gap
const TX_1 = (CARD_W / 2) + (CARD_W * SCALE_1 / 2) + GAP_1
// Position tx de ±2 : tx_1 + moitié ±1 + moitié ±2 + gap
const TX_2 = TX_1 + (CARD_W * SCALE_1 / 2) + (CARD_W * SCALE_2 / 2) + GAP_2

const POSITIONS = [
  { tx: -TX_2, scale: SCALE_2, opacity: 0.4, zIndex: 1  },
  { tx: -TX_1, scale: SCALE_1, opacity: 0.7, zIndex: 2  },
  { tx: 0,     scale: 1,       opacity: 1,   zIndex: 10 },
  { tx:  TX_1, scale: SCALE_1, opacity: 0.7, zIndex: 2  },
  { tx:  TX_2, scale: SCALE_2, opacity: 0.4, zIndex: 1  },
]

export default function PhotoCarousel({ photos }) {
  const [[current, direction], setPage] = useState([0, 0])
  const total = photos.length

  const paginate = (dir) => {
    setPage(([c]) => [(c + dir + total) % total, dir])
  }

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -60) paginate(1)
    else if (info.offset.x > 60) paginate(-1)
  }

  const getIdx = (offset) => (current + offset + total) % total

  return (
    <div className="relative w-full select-none">
      {/* Masques bords */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-20 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-20 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }} />

      {/* Track */}
      <div className="relative flex items-center justify-center overflow-hidden"
        style={{ height: CARD_H + 60 }}>

        {[-2, -1, 0, 1, 2].map((offset) => {
          const idx = getIdx(offset)
          const pos = POSITIONS[offset + 2]
          const isCenter = offset === 0

          return (
            <motion.div
              key={offset}
              className={`absolute ${!isCenter ? 'cursor-pointer' : ''}`}
              style={{ zIndex: pos.zIndex }}
              animate={{ x: pos.tx, scale: pos.scale, opacity: pos.opacity }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              onClick={() => !isCenter && paginate(offset > 0 ? 1 : -1)}
            >
              {/* Pas de rounded sur la carte centrale, rounded-lg sur les autres */}
              <div
                className={`overflow-hidden shadow-2xl ${
                  isCenter
                    ? 'ring-2 ring-primary shadow-primary/30 rounded-lg '
                    : 'rounded-lg'
                }`}
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  /* thème clair : border visible */
                  border: !isCenter ? '1px solid var(--border)' : undefined,
                }}
              >
                {isCenter ? (
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={current}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: 'spring', stiffness: 320, damping: 36, mass: 0.8 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.12}
                      onDragEnd={handleDragEnd}
                      className="absolute inset-0 cursor-grab active:cursor-grabbing rounded-lg"
                    >
                      <img src={photos[idx]} alt={`Photo ${idx + 1}`}
                        className="w-full h-full object-cover rounded-lg" draggable={false} />
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <img src={photos[idx]} alt=""
                    className="w-full h-full object-cover" draggable={false} />
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <button onClick={() => paginate(-1)}
          className="flex items-center gap-1.5 px-5 py-2 rounded-full border border-gray-700 hover:border-primary hover:text-primary transition-all duration-200 text-sm font-medium"
          style={{ color: 'var(--text-muted)' }}>
          <ChevronLeft size={15} /> Prev
        </button>
        <button onClick={() => paginate(1)}
          className="flex items-center gap-1.5 px-5 py-2 rounded-full border border-gray-700 hover:border-primary hover:text-primary transition-all duration-200 text-sm font-medium"
          style={{ color: 'var(--text-muted)' }}>
          Next <ChevronRight size={15} />
        </button>
      </div>
    </div>
  )
}
