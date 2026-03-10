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
    alt: "Kurtas Collection",
    description: "Hand-embroidered elegance for every occasion",
  },
  {
    name: "Dupattas",
    slug: "dupattas",
    image: heritageLotus,
    alt: "Dupattas Collection",
    description: "Delicate drapes of centuries-old artistry",
  },
  {
    name: "Sarees",
    slug: "sarees",
    image: heritageTapestry,
    alt: "Sarees Collection",
    description: "Timeless six yards of pure elegance",
  },
  {
    name: "Suit Sets",
    slug: "suits",
    image: heritageJharokha,
    alt: "Suit Sets Collection",
    description: "Complete ensembles of intricate craft",
  },
];

const CollectionsShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="w-full py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.4em] text-heritage-gold mb-4 font-display uppercase">
            Our Collections
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
            Explore the Craft
          </h2>
          <p className="text-lg font-display text-muted-foreground max-w-xl mx-auto">
            Each collection is a chapter in the story of{" "}
            <span className="text-heritage-gold italic font-serif">Noor</span>-e-Chikan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Link to={`/category/${collection.slug}`} className="block group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors duration-500" />
                  <div className="absolute inset-0 border border-white/10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <p className="text-xs tracking-[0.4em] text-white/60 mb-3 font-display uppercase">
                      Collection
                    </p>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">
                      {collection.name}
                    </h3>
                    <p className="text-base font-display text-white/70 mb-6 max-w-xs text-center">
                      {collection.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-display text-heritage-gold tracking-wider uppercase group-hover:gap-3 transition-all duration-300">
                      Explore <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsShowcase;
