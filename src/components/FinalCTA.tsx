import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg animate-grid-move opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        {/* Glow orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-[100px]"
        />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold max-w-4xl mx-auto mb-6"
        >
          Sua ideia merece{" "}
          <span className="gradient-text glow-text-blue">sair do papel.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Agende uma reunião estratégica gratuita e descubra como transformar sua visão em realidade.
        </motion.p>

        <motion.a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg glow-blue hover:shadow-[0_0_40px_hsl(192_100%_50%_/_0.4)] transition-all duration-300"
        >
          Quero construir meu projeto
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCTA;
