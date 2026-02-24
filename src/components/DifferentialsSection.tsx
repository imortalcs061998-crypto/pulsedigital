import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingUp, Target, Brain } from "lucide-react";

const diffs = [
  { icon: Zap, title: "Velocidade de Execução", desc: "Entregamos projetos em semanas, não meses. Metodologia ágil com tecnologias modernas." },
  { icon: TrendingUp, title: "Foco em Escalabilidade", desc: "Cada solução é construída para crescer junto com seu negócio sem limites técnicos." },
  { icon: Target, title: "Estratégia antes do Código", desc: "Planejamos cada detalhe antes de desenvolver. Resultados previsíveis e mensuráveis." },
  { icon: Brain, title: "Mentalidade de Produto", desc: "Pensamos como founders. Cada feature é validada pelo impacto no negócio." },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diferenciais" className="relative py-32">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Diferenciais</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
            Por que a <span className="gradient-text">PulseDigital</span>?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-xl p-8 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <d.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">{d.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
