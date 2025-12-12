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
              WINGMEN is a film about four friends who grew up together and later entered the crypto world side by side. What started as childhood friendship turns into a shared risk, ambition, and belief in something bigger than themselves.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From early mistakes to bold moves, the film follows how they disconnect from ordinary paths and commit fully to crypto. As the market rises and falls, their friendship, trust, and values are tested while they chase freedom, meaning, and a future they chose together.
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
