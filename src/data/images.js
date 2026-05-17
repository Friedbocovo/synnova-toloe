// Toutes les photos de Synnova
export const photos = Array.from({ length: 35 }, (_, i) => `/images/${i + 1}.webp`)

export const banner = '/images/banner.webp'

// Sélections par usage
export const heroPhotos = ['/images/1.webp', '/images/2.webp', '/images/3.webp']

export const galleryByCategory = {
  'Événements':      [1,2,3,4,5,6,7,8,9].map(n => `/images/${n}.webp`),
  'Cinéma':          [10,11,12,13,14,15,16].map(n => `/images/${n}.webp`),
  'Communication':   [17,18,19,20,21,22,23].map(n => `/images/${n}.webp`),
  'Entrepreneuriat': [24,25,26,27,28,29,30].map(n => `/images/${n}.webp`),
}

export const allGallery = Array.from({ length: 35 }, (_, i) => ({
  src: `/images/${i + 1}.webp`,
  id: i + 1,
}))
