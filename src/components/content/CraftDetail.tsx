import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stitches = [
  { name: "Tepchi", description: "The foundation running stitch — simple yet precise" },
  { name: "Bakhiya", description: "Shadow work creating ethereal patterns on sheer fabric" },
  { name: "Jaali", description: "Intricate net-like openwork, the crown of Chikankari" },
  { name: "Murri", description: "French knot clusters forming delicate rice-grain motifs" },
  { name: "Phanda", description: "Tiny, raised dots creating subtle textured patterns" },
  { name: "Keel Kangan", description: "Delicate vine patterns along borders and edges" },
];

const CraftDetail = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.4em] text-heritage-gold mb-4 font-display uppercase">
            The Artistry
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
            36 Stitches of Mastery
          </h2>
          <p className="text-lg font-display text-muted-foreground max-w-2xl mx-auto">
            Each stitch in Chikankari is a language unto itself — a vocabulary of{" "}
            <span className="text-heritage-gold italic font-serif">noor</span> 
            {" "}(light) woven by hands that have known no other craft
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stitches.map((stitch, index) => (
            <motion.div
              key={stitch.name}
              className="border border-border p-8 text-center group hover:border-heritage-gold/30 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-heritage-gold transition-colors">
                {stitch.name}
              </h3>
              <div className="w-8 h-[1px] bg-heritage-gold/30 mx-auto mb-4" />
              <p className="text-sm font-display text-muted-foreground leading-relaxed">
                {stitch.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftDetail;
