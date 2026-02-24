import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, XCircle, Clock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Ideias que nunca saem do papel",
    desc: "Falta de execução técnica mata projetos com potencial bilionário.",
  },
  {
    icon: XCircle,
    title: "Desenvolvimento caro e lento",
    desc: "Empresas perdem meses e milhares em processos ultrapassados.",
  },
  {
    icon: Clock,
    title: "Tecnologia que não escala",
    desc: "Soluções mal construídas limitam o crescimento do negócio.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problema" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">O Problema</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 max-w-3xl mx-auto">
            Grandes ideias morrem por falta de{" "}
            <span className="gradient-text">execução técnica</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass rounded-xl p-8 text-center hover:border-destructive/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-destructive/20 transition-colors">
                <p.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
