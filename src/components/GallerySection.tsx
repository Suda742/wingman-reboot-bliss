import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.gif";
import gallery3 from "@/assets/gallery-3.gif";
import gallery4 from "@/assets/gallery-4.gif";
import gallery5 from "@/assets/gallery-5.gif";
import gallery6 from "@/assets/gallery-6.gif";
import gallery7 from "@/assets/gallery-7.gif";
import gallery8 from "@/assets/gallery-8.gif";
import gallery9 from "@/assets/gallery-9.png";
import gallery10 from "@/assets/gallery-10.png";
import gallery11 from "@/assets/gallery-11.png";
import gallery12 from "@/assets/gallery-12.png";
import gallery13 from "@/assets/gallery-13.png";
import gallery14 from "@/assets/gallery-14.png";
import gallery15 from "@/assets/gallery-15.png";
import gallery16 from "@/assets/gallery-16.png";
import gallery17 from "@/assets/gallery-17.png";
import gallery18 from "@/assets/gallery-18.png";
import gallery19 from "@/assets/gallery-19.png";
import gallery20 from "@/assets/gallery-20.png";
type GalleryImage = {
  src: string | null;
  alt: string;
  isPlaceholder?: boolean;
};
const galleryImages: GalleryImage[] = [{
  src: "/lovable-uploads/a560db8f-ba9f-444a-affd-a0e3f1fe9344.png",
  alt: "Wingmen Character 1"
}, {
  src: gallery2,
  alt: "Wingmen Character 2"
}, {
  src: "/lovable-uploads/0561a221-cf58-4ea8-8e40-5135d2b8c998.png",
  alt: "Wingmen Character 3"
}, {
  src: "/lovable-uploads/aa8f8ba7-1645-4bad-967e-e1fb3571f661.png",
  alt: "Wingmen Character 4"
}, {
  src: gallery5,
  alt: "Wingmen Character 5"
}, {
  src: gallery6,
  alt: "Wingmen Character 6"
}, {
  src: gallery7,
  alt: "Wingmen Character 7"
}, {
  src: gallery8,
  alt: "Wingmen Character 8"
}, {
  src: gallery9,
  alt: "Wingmen Character 9"
}, {
  src: gallery10,
  alt: "Wingmen Character 10"
}, {
  src: gallery11,
  alt: "Wingmen Character 11"
}, {
  src: gallery12,
  alt: "Wingmen Character 12"
}, {
  src: gallery13,
  alt: "Wingmen Character 13"
}, {
  src: gallery14,
  alt: "Wingmen Character 14"
}, {
  src: gallery15,
  alt: "Wingmen Character 15"
}, {
  src: "/lovable-uploads/e0acc3ab-8929-44a1-8837-0259921d3f9b.png",
  alt: "Wingmen Character 16"
}, {
  src: gallery17,
  alt: "Wingmen Character 17"
}, {
  src: gallery18,
  alt: "Wingmen Character 18"
}, {
  src: gallery19,
  alt: "Wingmen Character 19"
}, {
  src: gallery20,
  alt: "Wingmen Character 20"
}];
const GalleryItem = ({
  image,
  index,
  isInView
}: {
  image: GalleryImage;
  index: number;
  isInView: boolean;
}) => <motion.div initial={{
  opacity: 0,
  scale: 0.8
}} animate={isInView ? {
  opacity: 1,
  scale: 1
} : {}} transition={{
  duration: 0.5,
  delay: 0.05 * index
}} className="p-2 sm:p-3 lg:p-4">
    <div className="w-[260px] h-[260px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] overflow-hidden rounded-2xl border-2 border-primary shadow-[0_0_20px_rgba(255,107,0,0.3)]">
      {image.isPlaceholder ? <div className="w-full h-full flex items-center justify-center bg-background/50">
          <span className="text-primary font-display text-xl">Coming soon</span>
        </div> : <img src={image.src!} alt={image.alt} className="w-full h-full object-cover object-center" />}
    </div>
  </motion.div>;
export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="gallery" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

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
          NFT  GALLERY
        </motion.h2>

        {/* Single grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-[1600px] mx-auto justify-items-center">
          {galleryImages.map((image, index) => <GalleryItem key={index} image={image} index={index} isInView={isInView} />)}
        </div>
      </div>
    </section>;
};