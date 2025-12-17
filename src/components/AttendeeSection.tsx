import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Users, Calendar, Trophy, Vote, Repeat, Wrench, Megaphone } from "lucide-react";

const investorBenefits = [
  {
    icon: Megaphone,
    title: "Product Placement",
    description: "Brand integration and product placement opportunities directly inside the film.",
  },
  {
    icon: Sparkles,
    title: "PR Collaboration",
    description: "Joint PR and collaboration projects with the production team.",
  },
  {
    icon: Calendar,
    title: "Premium Events",
    description: "Private premium celebration events and exclusive gatherings.",
  },
  {
    icon: Trophy,
    title: "Festival Access",
    description: "Participation in international festivals and award campaigns.",
  },
];

const holderBenefits = [
  {
    icon: Users,
    title: "Community Access",
    description: "Exclusive NFT holder club access and community participation.",
  },
  {
    icon: Vote,
    title: "Creative Influence",
    description: "Influence on story direction and scenario decisions.",
  },
  {
    icon: Repeat,
    title: "Token Trading",
    description: "Ability to trade tokens on secondary markets after one year.",
  },
  {
    icon: Wrench,
    title: "Web3 Production",
    description: "Use of Web3 solutions in real film production processes.",
  },
];

export const AttendeeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="attendee" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-6"
        >
          ATTENDEE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16"
        >
          Join as an investor or NFT holder. Unlock collaboration opportunities, exclusive events, creative influence, and long-term participation in the WINGMEN project.
        </motion.p>

        {/* Two-column comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* INVESTORS Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-card/40 backdrop-blur-md rounded-2xl border border-border/30 p-8 lg:p-10 h-full">
              {/* Header */}
              <div className="mb-8">
                <div className="w-full h-px bg-gradient-to-r from-primary/60 via-primary/30 to-transparent mb-6" />
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-primary tracking-wide">
                  INVESTORS
                </h3>
                <p className="text-muted-foreground mt-2">
                  Strategic partners & brand collaborators
                </p>
              </div>

              {/* Benefits list */}
              <ul className="space-y-6">
                {investorBenefits.map((benefit, index) => (
                  <motion.li
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* HOLDERS Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-card/40 backdrop-blur-md rounded-2xl border border-border/30 p-8 lg:p-10 h-full">
              {/* Header */}
              <div className="mb-8">
                <div className="w-full h-px bg-gradient-to-r from-primary/60 via-primary/30 to-transparent mb-6" />
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-primary tracking-wide">
                  HOLDERS
                </h3>
                <p className="text-muted-foreground mt-2">
                  NFT owners & community members
                </p>
              </div>

              {/* Benefits list */}
              <ul className="space-y-6">
                {holderBenefits.map((benefit, index) => (
                  <motion.li
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://x.com/Wingmenfilm"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block gradient-orange-box text-primary-foreground font-display text-lg tracking-wider px-10 py-5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            BECOME A WINGMEN ATTENDEE
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
