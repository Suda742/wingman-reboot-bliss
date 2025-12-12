import { motion } from "framer-motion";
import heroCharacter from "@/assets/hero-character.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      
      {/* Orange glow */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />

      {/* Centered Badge */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <div 
          className="w-[280px] md:w-[320px] h-[90px] md:h-[110px] rounded-2xl bg-primary flex items-center justify-center"
          style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.4)' }}
        >
          <div className="bg-background/90 rounded-full px-6 py-2.5 h-[40px] flex items-center justify-center">
            <span className="text-foreground font-display text-sm md:text-base font-bold tracking-wider">
              3000 NFT PRESALE
            </span>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider text-chrome-large leading-none mb-6">
                WINGMEN
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
                THE FIRST FILM ABOUT CRYPTO ENTHUSIASTS
              </p>
            </motion.div>

            {/* Character image on mobile */}
            <motion.div
              className="lg:hidden mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src={heroCharacter} alt="Wingmen character" className="w-full max-w-sm mx-auto" />
            </motion.div>
          </div>

          {/* Right content - NFT Card */}
          <div className="flex flex-col items-center lg:items-end gap-8">
            {/* Character image on desktop */}
            <motion.div
              className="hidden lg:block absolute left-1/3 -translate-x-1/2 bottom-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
            </motion.div>

            {/* NFT Presale Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="gradient-orange-box rounded-3xl p-8 md:p-12 w-full max-w-sm animate-pulse-glow">
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-background/90 hover:bg-background text-foreground font-display text-lg md:text-xl tracking-wider px-8 py-4 rounded-full transition-colors duration-300 shadow-lg"
                  >
                    3000 NFT PRESALE
                  </motion.button>
                </div>
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