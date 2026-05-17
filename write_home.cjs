
const fs = require('fs');
const jsx = `
export default function Home() {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slidePhotos.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <PageWrapper>
      <section className='relative overflow-hidden bg-gradient-to-br from-secondary via-purple-950 to-gray-950'>
        <div className='hidden lg:flex min-h-screen'>
          <div className='w-1/2 flex items-center px-16 xl:px-24 py-32 z-10'>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className='inline-block px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold tracking-wider uppercase mb-6'>
                Animatrice · Communicatrice · Actrice
              </span>
              <h1 className='font-display text-5xl xl:text-7xl font-bold mb-6 leading-tight text-white'>
                <span className='gradient-text'>Synnova</span><br /><span>Tocloe</span>
              </h1>
              <p className='font-script text-xl text-gray-300 mb-4'>
                Je suis une femme en chemin, portee par la creation, la parole et l engagement.
              </p>
              <p className='text-gray-400 text-sm max-w-sm mb-10'>
                Journaliste · Animatrice · Actrice · Entrepreneuse sociale — Grand-Popo, Benin
              </p>
              <div className='flex gap-4'>
                <Link to='/about' className='btn-primary'>Decouvrir mon univers <ArrowRight size={18} /></Link>
                <Link to='/contact' className='btn-outline'>Me contacter</Link>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className='w-1/2 relative overflow-hidden' style={{ clipPath: 'ellipse(100% 100% at 100% 50%)' }}>
            <AnimatePresence mode='sync'>
              <motion.img key={current} src={slidePhotos[current]} alt='Synnova'
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className='w-full h-full object-cover absolute inset-0' />
            </AnimatePresence>
            <div className='absolute inset-0 bg-gradient-to-r from-secondary/80 via-transparent to-transparent' />
            <div className='absolute bottom-6 right-6 flex gap-2 z-10'>
              {slidePhotos.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={'w-2 h-2 rounded-full transition-all duration-300 ' + (i === current ? 'bg-white scale-125' : 'bg-white/40')} />
              ))}
            </div>
          </motion.div>
        </div>
        <div className='lg:hidden flex flex-col'>
          <div className='px-6 pt-28 pb-10'>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className='inline-block px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold tracking-wider uppercase mb-5'>
                Animatrice · Communicatrice · Actrice
              </span>
              <h1 className='font-display text-4xl sm:text-5xl font-bold mb-5 leading-tight text-white'>
                <span className='gradient-text'>Synnova</span><br /><span>Tocloe</span>
              </h1>
              <p className='font-script text-lg text-gray-300 mb-3'>
                Je suis une femme en chemin, portee par la creation, la parole et l engagement.
              </p>
              <p className='text-gray-400 text-sm mb-8'>
                Journaliste · Animatrice · Actrice · Entrepreneuse sociale — Grand-Popo, Benin
              </p>
              <div className='flex flex-col sm:flex-row gap-3'>
                <Link to='/about' className='btn-primary justify-center'>Decouvrir mon univers <ArrowRight size={18} /></Link>
                <Link to='/contact' className='btn-outline justify-center'>Me contacter</Link>
              </div>
            </motion.div>
          </div>
          <div className='relative w-full aspect-video overflow-hidden'>
            <AnimatePresence mode='sync'>
              <motion.img key={current} src={slidePhotos[current]} alt='Synnova'
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className='w-full h-full object-cover absolute inset-0' />
            </AnimatePresence>
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
              {slidePhotos.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={'w-2 h-2 rounded-full transition-all duration-300 ' + (i === current ? 'bg-white scale-125' : 'bg-white/40')} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 bg-gray-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionReveal><h2 className='section-title text-center mb-4'>Mes Facettes</h2><p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Quatre univers, une meme passion</p></SectionReveal>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {facets.map((f,i)=>(<SectionReveal key={f.title} delay={i*0.1}><Link to={f.to} className='group card-dark hover:scale-105 transition-transform duration-300 block'><div className={'w-14 h-14 rounded-xl bg-gradient-to-br '+f.color+' flex items-center justify-center text-white mb-4'}>{f.icon}</div><h3 className='text-xl font-bold text-white mb-2'>{f.title}</h3><p className='text-gray-400 text-sm'>{f.desc}</p></Link></SectionReveal>))}
          </div>
        </div>
      </section>
      <section className='py-20 bg-gradient-to-b from-gray-950 to-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionReveal><h2 className='section-title text-center mb-4'>En Images</h2><p className='text-gray-400 text-center mb-14'>Quelques instants captures</p></SectionReveal>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {teaserPhotos.map((src,i)=>(<SectionReveal key={src} delay={i*0.1}><div className='aspect-square rounded-2xl overflow-hidden group'><img src={src} alt='Synnova' className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' /></div></SectionReveal>))}
          </div>
          <SectionReveal delay={0.3}><div className='text-center mt-10'><Link to='/portfolio' className='btn-outline'>Voir toute la galerie <ArrowRight size={16} /></Link></div></SectionReveal>
        </div>
      </section>
      <section className='py-20 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionReveal><h2 className='section-title text-center mb-16'>Moments Forts</h2></SectionReveal>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {highlights.map((item,i)=>(<SectionReveal key={item.label} delay={i*0.1}><div className='card-dark flex items-center justify-between'><div><p className='text-gray-400 text-sm mb-1'>{item.label}</p><p className='text-white font-semibold text-lg'>{item.value}</p></div><div className='w-2 h-2 rounded-full bg-primary flex-shrink-0' /></div></SectionReveal>))}
          </div>
        </div>
      </section>
      <section className='py-20 bg-gray-950'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <SectionReveal><h2 className='section-title mb-6'>Travaillons Ensemble</h2><p className='text-gray-400 text-lg mb-8 max-w-2xl mx-auto'>Un evenement a animer ? Un projet de communication ? Ecrivons la suite ensemble.</p><Link to='/contact' className='btn-primary text-lg px-8 py-4'>Contactez-moi <ArrowRight size={20} /></Link></SectionReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
`;
fs.appendFileSync('src/pages/Home.jsx', jsx);
console.log('done len=' + (require('fs').readFileSync('src/pages/Home.jsx').length));
