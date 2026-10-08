import { motion } from "framer-motion";

interface MediaPartner {
  name: string;
  logo: string;
  href: string;
}

// Add future media partners here — each renders as a clickable logo card.
const mediaPartners: MediaPartner[] = [{
  name: "MetaTalks",
  logo: "/lovable-uploads/metatalks-logo.svg",
  href: "https://www.metatalks.ai/inside-wingmen-the-web3-crime-drama-pioneering-on-chain-film-production/",
}];

export const MediaSection = () => {
  return (
    <section id="media" className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider text-chrome">
            MEDIA
          </h2>
          <div className="mt-3 h-px w-24 mx-auto bg-primary/60" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {mediaPartners.map(partner => (
            <motion.a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${partner.name} article about Wingmen`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300 rounded-lg px-4 py-3 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-10 md:h-12 w-auto"
                loading="lazy"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
