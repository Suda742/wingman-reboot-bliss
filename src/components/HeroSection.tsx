import { motion } from "framer-motion";
import centerCharacter from "@/assets/center-character.png";
import wingmenLogo from "@/assets/wingmen-logo.png";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      
      {/* Orange glow behind character */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile/Tablet: Stacked layout */}
        <div className="flex flex-col items-center gap-8 lg:hidden">
          {/* Title */}
          <div className="text-center">
            <img src={wingmenLogo} alt="WINGMEN" className="h-[70px] md:h-[100px] w-auto mx-auto mb-4" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
              THE FIRST FILM ABOUT CRYPTO ENTHUSIASTS
            </p>
          </div>

          {/* Center Character */}
          <motion.div className="relative" whileHover={{
          scale: 1.02
        }} transition={{
          duration: 0.3
        }}>
            <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px] scale-75 transition-all duration-300 group-hover:bg-primary/25" />
            <img src={centerCharacter} alt="Wingmen character" className="relative z-10 h-[240px] md:h-[320px] w-auto object-contain" />
          </motion.div>

          {/* CTA Button */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }}>
            <div className="gradient-orange-box rounded-3xl p-6 md:p-8 animate-pulse-glow">
              <motion.a href="https://cardswingmen.space/" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="bg-background/90 hover:bg-background text-foreground font-display text-base md:text-lg tracking-wider px-6 py-3 rounded-full transition-colors duration-300 shadow-lg inline-block">
                3000 NFT PRESALE
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Desktop: 3-column layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center min-h-[600px]">
          {/* Left content - Title */}
          <div className="text-left">
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <img src={wingmenLogo} alt="WINGMEN" className="h-[160px] lg:h-[200px] xl:h-[240px] 2xl:h-[280px] w-auto mb-8" />
              <p className="text-xl text-muted-foreground max-w-md">
                THE FIRST FILM ABOUT CRYPTO ENTHUSIASTS
              </p>
            </motion.div>
          </div>

          {/* Center - Character Image */}
          <div className="flex items-center justify-center">
            <motion.div className="relative group" whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] scale-90 transition-all duration-300 group-hover:bg-primary/30 group-hover:blur-[120px]" />
              <img alt="Wingmen character" src="/lovable-uploads/8792a70d-7f59-4d57-9765-4769a6cefd5f.png" className="relative z-20 h-[620px] xl:h-[760px] 2xl:h-[820px] w-auto object-contain " />
            </motion.div>
          </div>

          {/* Right content - NFT Card */}
          <div className="flex items-center justify-end">
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }}>
              <div className="gradient-orange-box rounded-3xl p-8 xl:p-12 animate-pulse-glow">
                <div className="text-center">
                  <motion.a href="https://cardswingmen.space/" target="_blank" rel="noopener noreferrer" whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className="bg-background/90 hover:bg-background text-foreground font-display text-lg xl:text-xl tracking-wider px-8 py-4 rounded-full transition-colors duration-300 shadow-lg inline-block">
                    3000 NFT PRESALE
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          repeat: Infinity,
          duration: 1.5
        }} className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>;
};