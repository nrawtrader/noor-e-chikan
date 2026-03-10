import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineEvents = [
  {
    era: "17th Century",
    title: "The Mughal Origins",
    description:
      "Legend traces Chikankari to Empress Nur Jahan, whose love for delicate needlework on muslin birthed this exquisite art in the courts of Lucknow.",
  },
  {
    era: "18th Century",
    title: "The Golden Age",
    description:
      "Under Nawabi patronage, Chikankari flourished with over 36 stitches perfected by master artisans, becoming the pride of Awadhi culture.",
  },
  {
    era: "19th Century",
    title: "Through Resilience",
    description:
      "Despite colonial upheavals, the artisans of Lucknow preserved their craft, passing down needle and thread through generations of devoted families.",
  },
  {
    era: "Today",
    title: "A Living Heritage",
    description:
      "Noor-e-Chikan honours this 400-year legacy, working directly with master artisans to bring authentic Lucknawi Chikankari to the world.",
  },
];

const StoryTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.4em] text-heritage-gold mb-4 font-display uppercase">
            Through the Ages
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">
            The History of Chikankari
          </h2>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-heritage-gold/20" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-20 last:mb-0 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Content */}
              <div className={`w-[45%] ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                <p className="text-xs tracking-[0.4em] text-heritage-gold font-display uppercase mb-2">
                  {event.era}
                </p>
                <h3 className="text-xl md:text-2xl font-serif text-foreground mb-3">
                  {event.title}
                </h3>
                <p className="text-base font-display text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-heritage-gold border-2 border-background z-10" />

              {/* Spacer */}
              <div className="w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;
