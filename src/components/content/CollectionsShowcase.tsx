import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heritageElephant from "@/assets/heritage-elephant.jpg";
import heritageLotus from "@/assets/heritage-lotus.jpg";
import heritageTapestry from "@/assets/heritage-tapestry.jpg";
import heritageJharokha from "@/assets/heritage-jharokha.jpg";

const collections = [
  {
    name: "Kurtas",
    slug: "kurtas",
    image: heritageElephant,
    alt: "Chikankari Kurtas Collection",
    description: "Hand-embroidered elegance for every occasion",
    count: "48 pieces",
  },
  {
    name: "Dupattas",
    slug: "dupattas",
    image: heritageLotus,
    alt: "Chikankari Dupattas Collection",
    description: "Delicate drapes of centuries-old artistry",
    count: "32 pieces",
  },
  {
    name: "Sarees",
    slug: "sarees",
    image: heritageTapestry,
    alt: "Chikankari Sarees Collection",
    description: "Timeless six yards of pure elegance",
    count: "24 pieces",
  },
  {
    name: "Suit Sets",
    slug: "suits",
    image: heritageJharokha,
    alt: "Chikankari Suit Sets Collection",
    description: "Complete ensembles of intricate craft",
    count: "36 pieces",
  },
];

const CollectionsShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-[0.5em] text-heritage-gold mb-5 font-display uppercase">
            Our Collections
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
            Explore the Craft
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-heritage-gold/30" />
            <span className="text-xl font-serif text-heritage-gold/40 italic">&#10022;</span>
            <div className="h-px w-16 bg-heritage-gold/30" />
          </div>

          <p className="text-lg font-display text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Each collection is a chapter in the story of{" "}
            <span className="text-heritage-gold italic font-serif">Noor</span>-e-Chikan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/category/${collection.slug}`} className="block group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.alt}
                    className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-500" />
                  <div className="absolute inset-0 border border-heritage-gold/0 group-hover:border-heritage-gold/40 transition-all duration-700 pointer-events-none" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                    <p className="text-[0.65rem] tracking-[0.45em] text-white/50 mb-2 font-display uppercase">
                      {collection.count}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-tight">
                      {collection.name}
                    </h3>
                    <p className="text-sm font-display text-white/60 mb-5 max-w-xs">
                      {collection.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-display text-heritage-gold tracking-[0.2em] uppercase group-hover:gap-4 transition-all duration-500">
                      Explore Collection <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/category/shop"
            className="inline-flex items-center gap-3 text-xs tracking-[0.35em] font-display uppercase text-foreground border border-foreground/20 px-8 py-4 hover:border-heritage-gold hover:text-heritage-gold transition-all duration-400 group"
          >
            View All Collections
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsShowcase;
