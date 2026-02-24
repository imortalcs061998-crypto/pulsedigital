import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImg from "@/assets/founder.jpg";

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fundador" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto">
          {/* Photo with scan effect */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0">

            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden glow-blue">
               <img
                src={founderImg}
                alt="Cleiton dos Santos - Fundador da PulseDigital"
                className="w-full h-full object-cover object-top" />

              {/* Scan line effect */}
              <div className="absolute inset-0 scan-line pointer-events-none" />
              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}>

            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Desenvolvedor</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-2">
              Cleiton dos Santos
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Apaixonado por criar e desenvolver tecnologias. Especialista em No Code, Low Code e Vibe Code, 
              ajudando empresas e visionários a tirarem projetos do papel.
            </p>
            <p className="text-muted-foreground leading-relaxed"> Te ajudo a transformar ideias em soluções digitais escaláveis e lucrativas.





            </p>
          </motion.div>
        </div>
      </div>
    </section>);};
export default FounderSection;