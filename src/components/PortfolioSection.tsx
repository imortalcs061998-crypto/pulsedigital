import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";

const projects = [
  {
    title: "FinanceFlow",
    category: "SaaS",
    desc: "Plataforma de gestão financeira inteligente com dashboards em tempo real e automações de cobrança.",
    tech: ["React", "Node.js", "AI"],
    color: "from-primary to-secondary",
  },
  {
    title: "UrbanConnect",
    category: "Aplicativo",
    desc: "App de mobilidade urbana conectando moradores a serviços locais com geolocalização inteligente.",
    tech: ["React Native", "Firebase", "Maps"],
    color: "from-secondary to-primary",
  },
  {
    title: "MedSync",
    category: "Sistema",
    desc: "Sistema de gestão para clínicas médicas com agendamento inteligente e prontuário eletrônico.",
    tech: ["Next.js", "PostgreSQL", "HIPAA"],
    color: "from-primary to-glow-purple",
  },
  {
    title: "EcoTrack",
    category: "Landing Page",
    desc: "Landing page de alta conversão para startup de sustentabilidade com 340% de aumento em leads.",
    tech: ["Webflow", "Analytics", "A/B Test"],
    color: "from-glow-purple to-primary",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-32">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Portfólio</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
            Projetos que <span className="gradient-text">geram resultados</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              whileHover={{ rotateY: 5, rotateX: -3, scale: 1.03 }}
              onClick={() => setSelected(i)}
              className="card-3d glass rounded-xl p-8 cursor-pointer hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${p.color} mb-6 opacity-60 group-hover:opacity-100 transition-opacity`} />
              <span className="text-xs text-primary font-semibold tracking-wider uppercase">{p.category}</span>
              <h3 className="text-xl font-heading font-bold mt-2 mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{p.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass rounded-2xl p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
            <div className={`w-full h-2 rounded-full bg-gradient-to-r ${projects[selected].color} mb-6`} />
            <span className="text-xs text-primary font-semibold tracking-wider uppercase">{projects[selected].category}</span>
            <h3 className="text-2xl font-heading font-bold mt-2 mb-4">{projects[selected].title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{projects[selected].desc}</p>
            <div className="flex gap-2 flex-wrap mb-6">
              {projects[selected].tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary">{t}</span>
              ))}
            </div>
            <a href="#cta" onClick={() => setSelected(null)} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Quero algo similar <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioSection;
