import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

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
    current: true,
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
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="roadmap" className="py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-20"
        >
          ROADMAP
        </motion.h2>

        <div className="max-w-5xl mx-auto" ref={timelineRef}>
          <div className="relative">
            {/* Timeline line background (muted) */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-muted/30" />
            
            {/* Timeline line animated (gradient with glow) */}
            <motion.div 
              className="absolute left-6 md:left-1/2 md:-translate-x-[1px] top-0 w-[2px] origin-top"
              style={{ 
                height: timelineHeight,
                background: "linear-gradient(to bottom, hsl(var(--primary) / 0.6), hsl(var(--primary)), hsl(var(--primary) / 0.8))",
                boxShadow: "0 0 8px hsl(var(--primary) / 0.3), 0 0 16px hsl(var(--primary) / 0.15)"
              }}
            />

            {roadmapItems.map((item, index) => {
              const isCurrent = 'current' in item && item.current;
              const isFuture = !item.completed && !isCurrent;
              
              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.12 }}
                  className={`relative flex items-center mb-16 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Horizontal connector line */}
                  <div 
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] w-8 bg-primary/20 ${
                      index % 2 === 0 ? "left-1/2 ml-4" : "right-1/2 mr-4"
                    }`}
                  />

                  {/* Timeline dot */}
                  <motion.div 
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center rounded-full transition-all duration-500 ${
                      item.completed 
                        ? "w-10 h-10 bg-primary/20 border-2 border-primary" 
                        : isCurrent 
                          ? "w-12 h-12 bg-primary/30 border-2 border-primary" 
                          : "w-8 h-8 bg-transparent border border-muted-foreground/30"
                    }`}
                    style={isCurrent ? {
                      boxShadow: "0 0 12px hsl(var(--primary) / 0.4), 0 0 24px hsl(var(--primary) / 0.2)"
                    } : {}}
                    whileInView={isCurrent ? {
                      boxShadow: [
                        "0 0 12px hsl(var(--primary) / 0.4), 0 0 24px hsl(var(--primary) / 0.2)",
                        "0 0 16px hsl(var(--primary) / 0.5), 0 0 32px hsl(var(--primary) / 0.3)",
                        "0 0 12px hsl(var(--primary) / 0.4), 0 0 24px hsl(var(--primary) / 0.2)"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {item.completed ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : isCurrent ? (
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    )}
                  </motion.div>

                  {/* Content card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0 ? "md:text-right md:mr-auto md:pr-12" : "md:text-left md:ml-auto md:pl-12"
                    }`}
                  >
                    <motion.div 
                      className={`bg-card/40 backdrop-blur-sm p-7 rounded-2xl border transition-all duration-500 ${
                        isCurrent 
                          ? "border-primary/40 bg-card/60" 
                          : isFuture 
                            ? "border-border/30 opacity-70 hover:opacity-100" 
                            : "border-border/40 hover:border-primary/30"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={`font-display text-xs tracking-[0.2em] uppercase ${
                        isCurrent ? "text-primary" : item.completed ? "text-primary/80" : "text-muted-foreground/60"
                      }`}>
                        {item.phase}
                      </span>
                      <h3 className={`font-display text-2xl font-bold mt-2 mb-3 ${
                        isFuture ? "text-foreground/70" : "text-foreground"
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        isFuture ? "text-muted-foreground/60" : "text-muted-foreground"
                      }`}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
