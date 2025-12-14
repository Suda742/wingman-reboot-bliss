import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Circle } from "lucide-react";

const roadmapItems = [
  {
    phase: "Stage 1",
    title: "Fundraising",
    description: "Initial crypto fundraising to launch film production. All investments accepted exclusively in cryptocurrency.",
    completed: true,
  },
  {
    phase: "Stage 2",
    title: "Token & NFT",
    description: "Launch of the WINGMEN token and exclusive NFT collection. Building the holder community and establishing secondary market presence.",
    completed: true,
  },
  {
    phase: "Stage 3",
    title: "Production",
    description: "Active film production and content creation. Completing all six episodes of the first season using collected crypto assets.",
    completed: false,
  },
  {
    phase: "Stage 4",
    title: "Seasons",
    description: "Release of future seasons and expansion of the storyline. Continuing the WINGMEN universe based on community support.",
    completed: false,
  },
  {
    phase: "Stage 5",
    title: "Festivals",
    description: "Presentation at international film festivals worldwide. Submitting to major awards and industry recognition programs.",
    completed: false,
  },
  {
    phase: "Stage 6",
    title: "Streaming",
    description: "Release on major global streaming platforms and VOD services. Reaching mainstream audiences through established distribution channels.",
    completed: false,
  },
  {
    phase: "Stage 7",
    title: "Expansion",
    description: "Distribution of the Web3 solution model within the film industry. Demonstrating a working crypto-funded production and distribution framework.",
    completed: false,
  },
];

export const RoadmapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          ROADMAP
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-muted" />

            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  {item.completed ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <Circle className="w-3 h-3 text-muted-foreground" />
                  )}
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}
                >
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors duration-300">
                    <span className="text-primary font-display text-sm tracking-wider">
                      {item.phase}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
