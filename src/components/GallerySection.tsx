import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/gallery-1.gif";
import gallery2 from "@/assets/gallery-2.gif";
import gallery3 from "@/assets/gallery-3.gif";
import gallery4 from "@/assets/gallery-4.gif";

const galleryImages = [
  { src: gallery1, alt: "Wingmen Character 1" },
  { src: gallery2, alt: "Wingmen Character 2" },
  { src: gallery3, alt: "Wingmen Character 3" },
  { src: gallery4, alt: "Wingmen Character 4" },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          GALLERY
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 max-w-[760px] mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] xl:w-[360px] xl:h-[360px] overflow-hidden rounded-2xl border-2 border-primary shadow-[0_0_20px_rgba(255,107,0,0.3)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
