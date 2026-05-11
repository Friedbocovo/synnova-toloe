import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Heart, Film, Leaf } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionReveal from '../components/SectionReveal'

const story = [
  {
    icon: <GraduationCap className="w-7 h-7" />,
    tag: 'Formation',
    title: 'Licence en Journalisme',
    subtitle: 'UCAE — Union Culturelle et Artistique des Étudiants',
    text: "Titulaire d'une licence professionnelle en journalisme, Synnova a forgé sa plume et sa voix à l'UCAE. Cette formation solide lui a donné les outils pour raconter des histoires qui touchent, informer avec rigueur et communiquer avec impact.",
    color: 'text-primary',
    bg: 'bg-primary/10',
    photo: '/images/3.jpg',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    tag: 'Engagement Social',
    title: 'UReport & Société Civile',
    subtitle: 'Coordonnatrice UReport Grand-Popo · Ex-Chargée Communication Mairie des Jeunes',
    text: "Profondément engagée dans sa communauté, Synnova coordonne UReport Grand-Popo et a été Chargée de Communication de la Mairie des Jeunes. Elle croit en la force de la jeunesse africaine pour transformer le continent.",
    color: 'text-gold',
    bg: 'bg-gold/10',
    photo: '/images/18.jpg',
  },
  {
    icon: <Film className="w-7 h-7" />,
    tag: 'Cinéma & Événements',
    title: 'Actrice · Régisseuse · Animatrice',
    subtitle: 'Festival International des Arts du Bénin',
    text: "Sur les plateaux de cinéma comme sur les scènes d'événements, Synnova rayonne. Actrice, régisseuse plateau et animatrice live, elle a marqué le Festival International des Arts du Bénin de son empreinte.",
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    photo: '/images/11.jpg',
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    tag: 'Entrepreneuriat Éco',
    title: 'Emballages Biodégradables',
    subtitle: 'Créatrice & Confectionneuse',
    text: "Militante pour un avenir durable, Synnova crée et confectionne des emballages biodégradables. Une démarche entrepreneuriale qui allie innovation sociale, respect de l'environnement et vision africaine du futur.",
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    photo: '/images/25.jpg',
  },
]

const values = [
  { label: 'Création', desc: 'Donner vie à des idées qui inspirent', emoji: '✨' },
  { label: 'Engagement', desc: 'Agir pour sa communauté et son continent', emoji: '🌍' },
  { label: 'Authenticité', desc: 'Rester vraie, toujours', emoji: '💫' },
  { label: 'Impact', desc: 'Laisser une trace positive', emoji: '🌱' },
]

export default function About() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/2.jpg" alt="Synnova Tocloe" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/70 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(194,24,91,0.15),transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionReveal>
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              Mon Histoire
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Une femme en chemin
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl max-w-3xl leading-relaxed">
              Animatrice d'événements, communicatrice digitale, actrice de cinéma et entrepreneuse sociale — Synnova Tocloe incarne une génération africaine qui crée, s'engage et transforme.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* STORYTELLING ZIGZAG */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {story.map((item, i) => (
            <SectionReveal key={item.tag} delay={0.1}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                {/* Photo */}
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                    <img
                      src={item.photo}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                {/* Text */}
                <div className="flex-1">
                  <div className={`inline-flex items-center gap-2 ${item.color} ${item.bg} px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4`}>
                    {item.icon}
                    {item.tag}
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">{item.title}</h2>
                  <p className="text-gray-500 text-sm mb-5">{item.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed text-base">{item.text}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="section-title text-center mb-4">Mes Valeurs</h2>
            <p className="text-gray-400 text-center max-w-xl mx-auto mb-14">
              Quatre piliers qui guident chaque action, chaque projet, chaque engagement
            </p>
          </SectionReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <SectionReveal key={v.label} delay={i * 0.1}>
                <div className="card-dark text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{v.emoji}</div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{v.label}</h3>
                  <p className="text-gray-400 text-sm">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Envie d'en savoir plus ?</h2>
            <p className="text-gray-400 mb-8">Découvrez mes univers professionnels en détail</p>
            <Link to="/univers" className="btn-primary">
              Mes Univers <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
