import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import nftCollection from "@/assets/nft-collection.png";

export const NFTSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nft" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          NFT
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* NFT Collection Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <img
              src={nftCollection}
              alt="NFT Collection"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join the exclusive WINGMEN NFT collection featuring 3,000 unique digital collectibles. 
              Each NFT grants you access to exclusive content, behind-the-scenes footage, and community events.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Own a piece of crypto cinema history and become part of the WINGMEN revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-orange-box text-primary-foreground font-display text-lg tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                VIEW COLLECTION
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary font-display text-lg tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:bg-primary/10"
              >
                MINT NOW
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
