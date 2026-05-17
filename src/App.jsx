import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './pages/Home'
import About from './pages/About'
import Univers from './pages/Univers'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/univers" element={<Univers />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      {!loading && (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </BrowserRouter>
      )}
    </>
  )
}
