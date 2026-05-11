import { Link } from 'react-router-dom'
import { Mic, Sparkles, Film, Leaf, ArrowRight, Calendar, Users, Globe } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionReveal from '../components/SectionReveal'

const univers = [
  {
    id: 'animation',
    icon: <Mic className="w-8 h-8" />,
    tag: '01',
    title: 'Animation & Événements',
    subtitle: 'Animatrice live · Maîtresse de cérémonie',
    gradient: 'from-pink-500 to-rose-600',
    accent: 'text-primary',
    border: 'border-pink-500/30',
    photo: '/images/4.jpg',
    desc: "Synnova donne vie aux événements avec une énergie communicative et une présence scénique naturelle. Des festivals aux cérémonies officielles, elle sait captiver une audience et créer des moments mémorables.",
    items: [
      { icon: <Calendar size={16} />, text: 'Festival International des Arts du Bénin' },
      { icon: <Users size={16} />, text: 'Cérémonies officielles & galas' },
      { icon: <Mic size={16} />, text: 'Animation live & conférences' },
      { icon: <Globe size={16} />, text: 'Événements culturels & sociaux' },
    ],
    cta: 'Me contacter pour un événement',
  },
  {
    id: 'communication',
    icon: <Sparkles className="w-8 h-8" />,
    tag: '02',
    title: 'Communication Digitale',
    subtitle: 'Stratégie · Création de contenu · Réseaux sociaux',
    gradient: 'from-purple-500 to-indigo-600',
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
    photo: '/images/20.jpg',
    desc: "Communicatrice digitale aguerrie, Synnova maîtrise l'art de raconter des histoires sur les réseaux sociaux. Elle crée du contenu engageant, développe des stratégies de communication et accompagne les organisations dans leur présence digitale.",
    items: [
      { icon: <Sparkles size={16} />, text: 'Création de contenu social media' },
      { icon: <Globe size={16} />, text: 'Stratégie de communication digitale' },
      { icon: <Users size={16} />, text: 'Community management' },
      { icon: <Mic size={16} />, text: 'Ex-Chargée Communication Mairie des Jeunes' },
    ],
    cta: 'Collaborer sur un projet digital',
  },
  {
    id: 'cinema',
    icon: <Film className="w-8 h-8" />,
    tag: '03',
    title: 'Cinéma & Régie',
    subtitle: 'Actrice · Régisseuse plateau · Production',
    gradient: 'from-amber-500 to-orange-600',
    accent: 'text-gold',
    border: 'border-amber-500/30',
    photo: '/images/13.jpg',
    desc: "Formée à l'UCAE, Synnova s'est imposée dans le cinéma béninois comme actrice et régisseuse plateau. Elle a participé à des productions majeures et contribué à la mise en scène d'événements culturels d'envergure nationale.",
    items: [
      { icon: <Film size={16} />, text: 'Actrice de cinéma — productions béninoises' },
      { icon: <Calendar size={16} />, text: 'Régisseuse plateau — Festival des Arts du Bénin' },
      { icon: <Users size={16} />, text: 'Coordination de productions' },
      { icon: <Sparkles size={16} />, text: 'Formation UCAE — Arts & Communication' },
    ],
    cta: "Discuter d'une collaboration cinéma",
  },
  {
    id: 'entrepreneuriat',
    icon: <Leaf className="w-8 h-8" />,
    tag: '04',
    title: 'Entrepreneuriat Social',
    subtitle: 'Emballages biodégradables · Éco-responsabilité',
    gradient: 'from-green-500 to-emerald-600',
    accent: 'text-green-400',
    border: 'border-green-500/30',
    photo: '/images/27.jpg',
    desc: "Militante pour un Bénin plus vert, Synnova crée et confectionne des emballages biodégradables. Une initiative entrepreneuriale qui répond à un enjeu environnemental concret tout en créant de la valeur économique locale.",
    items: [
      { icon: <Leaf size={16} />, text: "Création d'emballages 100% biodégradables" },
      { icon: <Globe size={16} />, text: 'Impact environnemental positif' },
      { icon: <Users size={16} />, text: 'Entrepreneuriat social & communautaire' },
      { icon: <Sparkles size={16} />, text: 'Innovation éco-responsable africaine' },
    ],
    cta: 'En savoir plus sur les emballages bio',
  },
]

export default function Univers() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/6.jpg" alt="Mes univers" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/70 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(249,168,37,0.15),transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionReveal>
            <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full text-gold text-xs font-semibold tracking-wider uppercase mb-6">
              Mes Univers
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Ce que je fais
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl max-w-3xl leading-relaxed">
              Quatre univers distincts, une même vision : créer de l'impact, raconter des histoires et contribuer à un monde meilleur.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* UNIVERS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {univers.map((u, i) => (
            <SectionReveal key={u.id} delay={0.1}>
              <div className={`rounded-3xl border ${u.border} bg-gray-900 overflow-hidden`}>
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Photo */}
                  <div className="lg:w-2/5 aspect-video lg:aspect-auto overflow-hidden relative">
                    <img
                      src={u.photo}
                      alt={u.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 min-h-64"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${u.gradient} opacity-30`} />
                    <div className="absolute bottom-4 left-4">
                      <span className="font-display text-5xl font-black text-white/20">{u.tag}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className={`inline-flex items-center gap-2 ${u.accent} mb-4`}>
                      {u.icon}
                      <span className="text-xs font-semibold tracking-widest uppercase">{u.title}</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">{u.title}</h2>
                    <p className="text-gray-500 text-sm mb-5">{u.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed mb-8 text-base">{u.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {u.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-400 text-sm">
                          <span className={`${u.accent} flex-shrink-0`}>{item.icon}</span>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary self-start">
                      {u.cta} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Voir mes réalisations</h2>
            <p className="text-gray-400 mb-8">Photos, événements, productions — tout ce que j'ai accompli</p>
            <Link to="/portfolio" className="btn-primary">
              Portfolio & Galerie <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
