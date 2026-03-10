import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StorySectionProps {
  image: string;
  imageAlt: string;
  subtitle: string;
  title: string;
  description: string | React.ReactNode;
  reverse?: boolean;
  fullWidth?: boolean;
}

const StorySection = ({
  image,
  imageAlt,
  subtitle,
  title,
  description,
  reverse = false,
  fullWidth = false,
}: StorySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (fullWidth) {
    return (
      <section ref={ref} className="relative w-full mb-0">
        <div className="relative h-[80vh] overflow-hidden">
          <motion.img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 chikan-pattern opacity-10" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center px-6 max-w-3xl">
              <p className="text-sm tracking-[0.4em] text-heritage-gold mb-4 font-display uppercase">
                {subtitle}
              </p>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                {title}
              </h2>
              <div className="text-lg font-display text-white/80 max-w-xl mx-auto leading-relaxed">
                {description}
              </div>
            </div>
          </motion.div>
          <div className="absolute inset-4 md:inset-8 border border-white/5 pointer-events-none" />
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="w-full py-24 md:py-32 px-6">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto ${
          reverse ? "direction-rtl" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          className={`overflow-hidden relative ${reverse ? "lg:order-2" : ""}`}
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 60 : -60 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="aspect-[4/5] overflow-hidden relative group">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/10" />
            <div className="absolute inset-0 border border-heritage-gold/10" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className={`space-y-6 ${reverse ? "lg:order-1" : ""}`}
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -60 : 60 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-sm tracking-[0.4em] text-heritage-gold font-display uppercase">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight">
            {title}
          </h2>
          <div className="w-16 h-[1px] bg-heritage-gold/40" />
          <div className="text-lg font-display text-muted-foreground leading-relaxed space-y-4">
            {description}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
