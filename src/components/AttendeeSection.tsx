import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Ticket, Star, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Ticket,
    title: "Exclusive Access",
    description: "Priority access to premieres and screenings.",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Meetups with cast, crew, and enthusiasts.",
  },
  {
    icon: Star,
    title: "Behind the Scenes",
    description: "Exclusive content and production updates.",
  },
  {
    icon: Trophy,
    title: "Special Rewards",
    description: "Unique rewards and merchandise.",
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
          className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16"
        >
          Become an official WINGMEN attendee and unlock exclusive community benefits.
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-orange-box text-primary-foreground font-display text-lg tracking-wider px-10 py-5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            BECOME A WINGMEN ATTENDEE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
