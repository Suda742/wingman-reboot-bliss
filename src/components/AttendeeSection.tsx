import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const investorItems = [
  "PRESENTATION OF YOUR PRODUCTS THROUGH PRODUCT PLACEMENT",
  "JOINT COLLABORATIONS AND PR PROJECTS",
  "A PRIVATE CELEBRATION IN A LUXURIOUS VENUE IN TBILISI FOR ATTENDEES",
  "PARTICIPATION OF THE FILM IN FESTIVALS AND WINNING AWARDS",
  "THE FIRST CASE IN THE INDUSTRY.",
];

const holderItems = [
  "SALE OF THE TOKEN ON EXCHANGES IN THE SECONDARY MARKET AFTER 1 YEAR",
  "CLUB OF NFT HOLDERS WITH INFLUENCE ON THE SCENARIO",
  "FIRST-TIME ADAPTATION OF WEB3 SOLUTIONS FOR FILM PRODUCTION. LET'S ACHIEVE WHAT DIDN'T WORK FOR DUNE.",
  "LONG-TERM SUPPORT OF THE PROJECT",
  "LONG-TERM SUPPORT OF THE PROJECT",
];

export const AttendeeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="attendee" className="py-24 relative overflow-hidden bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          ATTENDEE
        </motion.h2>

        {/* Two-column layout with center timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-primary/60 via-primary to-primary/60 hidden lg:block" />
          
          {/* Glowing dots on the line */}
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary hidden lg:block"
              style={{ 
                top: `${10 + index * 20}%`,
                boxShadow: '0 0 12px hsl(var(--primary)), 0 0 24px hsl(var(--primary) / 0.5)'
              }}
            />
          ))}

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* INVESTORS Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pr-12"
            >
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-primary tracking-wide mb-8 text-center lg:text-right">
                INVESTORS
              </h3>
              <ul className="space-y-6">
                {investorItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 lg:flex-row-reverse lg:text-right"
                  >
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-foreground text-sm lg:text-base leading-relaxed">
                      {item}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* HOLDERS Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pl-12"
            >
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-primary tracking-wide mb-8 text-center lg:text-left">
                HOLDERS
              </h3>
              <ul className="space-y-6">
                {holderItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-foreground text-sm lg:text-base leading-relaxed">
                      {item}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
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