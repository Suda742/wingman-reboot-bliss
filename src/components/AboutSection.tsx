import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

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
          {/* Video placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-video bg-card rounded-2xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-foreground">
                <p className="font-display text-lg">Wingmen Trailer</p>
                <p className="text-sm text-muted-foreground">Watch on YouTube</p>
              </div>
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
              WINGMEN is a groundbreaking film that dives deep into the world of cryptocurrency enthusiasts. 
              Follow the journey of individuals who believed in a financial revolution when the world doubted them.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the early days of Bitcoin to the rise of NFTs, this film captures the passion, 
              the risks, and the triumphs of the crypto community.
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
