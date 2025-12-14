import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import nftFoundersPass from "@/assets/nft-founders-pass.png";
export const NFTSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="nft" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4">
        <motion.h2 initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="section-title text-center mb-16">
          NFT
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* NFT Founders Pass Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="order-2 lg:order-1 flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden border-2 border-primary shadow-[0_0_30px_rgba(255,107,0,0.4)] max-w-[600px] w-full">
              <img alt="WINGMEN PASS - Founders Edition" className="w-full h-auto object-contain" src="/lovable-uploads/f2bad79f-a409-4bc3-a72c-fc8d46430d9a.png" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="space-y-6 order-1 lg:order-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The WINGMEN NFT collection features 3,000 unique digital collectibles. Each NFT grants access to exclusive content, behind-the-scenes footage, and community events. Holders gain influence on story direction and creative decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NFTs serve as membership tokens to the WINGMEN holder club. Participate in the first crypto-funded film project and own a piece of cinema history. Tokens can be traded on secondary markets, providing long-term value and flexibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="gradient-orange-box text-primary-foreground font-display text-lg tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                VIEW COLLECTION
              </motion.button>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="border-2 border-primary text-primary font-display text-lg tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:bg-primary/10">
                MINT NOW
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};