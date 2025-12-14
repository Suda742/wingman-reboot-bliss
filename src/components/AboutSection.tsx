import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          ABOUT
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* YouTube Video Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-video bg-card rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/LZw2DAgtnGE"
                title="Wingmen Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              WINGMEN is a multi-part crime drama film whose main plot develops inside the crypto world. This is a long-term project, not a single movie. The story follows characters whose lives, risks, and choices unfold within the Web3 ecosystem. The project combines film production, Web3 funding, NFTs, and digital distribution into one unified system.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For the first time in the global film industry, a multi-episode feature film is being created where funding, spending, and accounting are done only in crypto. The uniqueness lies in both the crime drama script and the principled crypto-only financial model.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The first episode and official trailer are already completed. Season one will include six episodes. Crypto assets are currently being collected to complete the full season. The film will first be presented through international online cinemas and services, then submitted to major film festivals worldwide. Later stages include release on global streaming platforms.
            </p>
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-orange-box text-primary-foreground font-display text-lg tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                LEARN MORE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
