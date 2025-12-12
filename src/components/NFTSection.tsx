import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import nft1 from "@/assets/nft-1.png";
import nft2 from "@/assets/nft-2.png";
import nft3 from "@/assets/nft-3.png";
import nft4 from "@/assets/nft-4.mp4";

const nftImages = [
  { src: nft1, alt: "NFT Character 1", type: "image" },
  { src: nft2, alt: "NFT Character 2", type: "image" },
  { src: nft3, alt: "NFT Character 3", type: "image" },
  { src: nft4, alt: "NFT Character 4", type: "video" },
];

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
          {/* NFT Collection Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4 max-w-[680px] mx-auto">
              {nftImages.map((nft, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] xl:w-[320px] xl:h-[320px] rounded-2xl overflow-hidden border-2 border-primary shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                >
                  {nft.type === "video" ? (
                    <video
                      src={nft.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <img
                      src={nft.src}
                      alt={nft.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </motion.div>
              ))}
            </div>
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
