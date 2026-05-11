// Toutes les photos de Synnova
export const photos = Array.from({ length: 35 }, (_, i) => `/images/${i + 1}.jpg`)

export const banner = '/images/banner.jpg'

// Sélections par usage
export const heroPhotos = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg']

export const galleryByCategory = {
  'Événements':      [1,2,3,4,5,6,7,8,9].map(n => `/images/${n}.jpg`),
  'Cinéma':          [10,11,12,13,14,15,16].map(n => `/images/${n}.jpg`),
  'Communication':   [17,18,19,20,21,22,23].map(n => `/images/${n}.jpg`),
  'Entrepreneuriat': [24,25,26,27,28,29,30].map(n => `/images/${n}.jpg`),
}

export const allGallery = Array.from({ length: 35 }, (_, i) => ({
  src: `/images/${i + 1}.jpg`,
  id: i + 1,
}))
