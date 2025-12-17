import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Ticket, Star, Trophy } from "lucide-react";
import attendeeBanner from "@/assets/attendee-banner.png";

const benefits = [
  {
    icon: Ticket,
    title: "Product Placement",
    description: "Brand integration and product placement opportunities directly inside the film. Joint PR and collaboration projects with the production team.",
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Exclusive NFT holder club access. Influence on story direction and scenario decisions. Use of Web3 solutions in real film production.",
  },
  {
    icon: Star,
    title: "Premium Events",
    description: "Private premium celebration events. Participation in international festivals and award campaigns. Industry-first case study involvement.",
  },
  {
    icon: Trophy,
    title: "Long-term Role",
    description: "Long-term participation and support of the WINGMEN project. Ability to trade tokens on secondary markets. Ongoing involvement in future seasons.",
  },
];

export const AttendeeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="attendee" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="bg-card/70 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 gradient-orange-box rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Banner Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 relative w-full h-[320px] md:h-[360px] lg:h-[380px] rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 0 40px hsl(var(--primary) / 0.15), inset 0 0 60px hsl(var(--primary) / 0.05)"
          }}
        >
          {/* Background Image */}
          <img
            src={attendeeBanner}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark cinematic overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/20" />
          {/* Soft orange glow edges */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: "inset 0 0 30px hsl(var(--primary) / 0.1)"
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
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
