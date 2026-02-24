import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Layout, Smartphone, Cloud, Zap, Settings } from "lucide-react";

const services = [
  { icon: Globe, title: "Sites Institucionais", desc: "Presença digital premium que gera autoridade e confiança." },
  { icon: Layout, title: "Landing Pages", desc: "Páginas de alta conversão otimizadas para resultados." },
  { icon: Smartphone, title: "Aplicativos", desc: "Apps modernos e responsivos para web e mobile." },
  { icon: Cloud, title: "SaaS", desc: "Plataformas escaláveis de software como serviço." },
  { icon: Zap, title: "Automações Inteligentes", desc: "Fluxos automatizados que eliminam trabalho manual." },
  { icon: Settings, title: "Sistemas Personalizados", desc: "Soluções sob medida para desafios únicos." },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucao" className="relative py-32">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">A Solução</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 max-w-3xl mx-auto">
            Desenvolvemos <span className="gradient-text">tecnologia que escala</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Do conceito ao lançamento, construímos soluções digitais completas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-xl p-8 group cursor-pointer hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:glow-blue transition-all duration-300">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
