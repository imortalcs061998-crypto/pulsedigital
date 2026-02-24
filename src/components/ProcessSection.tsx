import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, FileText, Palette, Code, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Ideia", desc: "Entendemos sua visão e objetivos." },
  { icon: FileText, title: "Estruturação", desc: "Mapeamos requisitos e estratégia." },
  { icon: Palette, title: "Prototipação", desc: "Design visual e experiência do usuário." },
  { icon: Code, title: "Desenvolvimento", desc: "Construção com tecnologia de ponta." },
  { icon: Rocket, title: "Lançamento", desc: "Deploy otimizado e validação." },
  { icon: TrendingUp, title: "Escala", desc: "Crescimento e otimização contínua." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processo" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Nosso Processo</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
            Da <span className="gradient-text">ideia à escala</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-heading font-semibold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary glow-blue z-10 border-4 border-background" />

                {/* Empty side */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
