import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroArtisan from "@/assets/hero-chikankari-artisan.jpg";
import heroHands from "@/assets/hero-hands-embroidery.jpg";
import heroFabric from "@/assets/hero-chikankari-fabric.jpg";

const StoryHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 0.7]);

  // Second image (hands close-up) reveal
  const handsOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const handsScale = useTransform(scrollYProgress, [0.25, 0.6], [1.1, 1]);

  // Third image (fabric detail) reveal
  const fabricOpacity = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);

  // Text reveals
  const taglineOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const taglineY = useTransform(scrollYProgress, [0.55, 0.7], [40, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Layer 1: Artisan sitting and weaving */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale }}
        >
          <img
            src={heroArtisan}
            alt="Chikankari artisan at work"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Layer 2: Close-up hands embroidery */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: handsOpacity, scale: handsScale }}
        >
          <img
            src={heroHands}
            alt="Delicate hands creating Chikankari embroidery"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Layer 3: Finished fabric detail */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: fabricOpacity }}
        >
          <img
            src={heroFabric}
            alt="Intricate Chikankari embroidery pattern on fabric"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 bg-foreground"
          style={{ opacity: overlayOpacity }}
        />

        {/* Chikan pattern overlay */}
        <div className="absolute inset-0 chikan-pattern opacity-20" />

        {/* Initial hero text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y: textY, opacity: heroOpacity }}
        >
          <div className="text-center px-6 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm md:text-base tracking-[0.5em] text-heritage-gold mb-6 font-display uppercase"
            >
              From the Heart of Lucknow
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]"
            >
              <span className="text-heritage-gold italic">Noor</span>-e-Chikan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg md:text-xl font-display text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Where every thread carries the light of centuries-old tradition
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-12 flex flex-col items-center gap-2 text-white/50"
            >
              <p className="text-xs tracking-[0.3em] font-display uppercase">Scroll to discover</p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-[1px] h-8 bg-heritage-gold/50"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll-revealed tagline over fabric */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: taglineOpacity }}
        >
          <motion.div className="text-center px-6 max-w-3xl" style={{ y: taglineY }}>
            <p className="text-sm tracking-[0.4em] text-heritage-gold mb-4 font-display uppercase">
              The Craft
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Each Stitch, A Prayer
            </h2>
            <p className="text-lg md:text-xl font-display text-white/80 max-w-xl mx-auto leading-relaxed">
              From needle to fabric, our artisans weave{" "}
              <span className="text-heritage-gold italic font-serif">noor</span> — 
              the radiance of tradition — into every thread
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative border */}
        <div className="absolute inset-4 md:inset-8 border border-white/5 pointer-events-none" />
      </div>
    </div>
  );
};

export default StoryHero;
