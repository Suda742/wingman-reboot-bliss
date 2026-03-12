import { motion } from "framer-motion";
import wingmenLogo from "@/assets/wingmen-logo.png";
import heroBg from "@/assets/hero-bg.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: 'center 52%' }}
      />

      {/* Directional overlay — left darker, center lighter to preserve faces */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Edge fade gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      {/* Orange glow behind center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] bg-primary/15 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile/Tablet: Stacked layout — text on top, button below, faces visible */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          {/* Mobile overlay boost */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: 'rgba(0,0,0,0.3)' }}
          />

          <div className="text-center relative z-10 pt-4">
            <img src={wingmenLogo} alt="WINGMEN" className="h-[60px] md:h-[90px] w-auto mx-auto mb-3" />
            <p className="text-base md:text-lg text-muted-foreground max-w-xs mx-auto">
              THE FIRST FILM ABOUT CRYPTO ENTHUSIASTS
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10"
          >
            <div className="gradient-orange-box rounded-3xl p-5 md:p-7 animate-pulse-glow">
              <motion.a
                href="https://cardswingmen.space/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background/90 hover:bg-background text-foreground font-display text-base md:text-lg tracking-wider px-6 py-3 rounded-full transition-colors duration-300 shadow-lg inline-block"
              >
                3000 NFT PRESALE
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Desktop: text far left, button lower right — faces stay uncovered */}
        <div className="hidden lg:flex lg:items-end lg:justify-between min-h-[600px] pb-20">
          {/* Left content — pushed left with max-w to avoid center character */}
          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={wingmenLogo} alt="WINGMEN" className="h-[140px] lg:h-[170px] xl:h-[200px] 2xl:h-[240px] w-auto mb-6" />
              <p className="text-xl text-muted-foreground max-w-sm">
                THE FIRST FILM ABOUT CRYPTO ENTHUSIASTS
              </p>
            </motion.div>
          </div>

          {/* Right content — lowered to avoid faces */}
          <div className="flex items-end justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="gradient-orange-box rounded-3xl p-8 xl:p-12 animate-pulse-glow">
                <motion.a
                  href="https://cardswingmen.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-background/90 hover:bg-background text-foreground font-display text-lg xl:text-xl tracking-wider px-8 py-4 rounded-full transition-colors duration-300 shadow-lg inline-block"
                >
                  3000 NFT PRESALE
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
