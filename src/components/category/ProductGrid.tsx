import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { api, Product } from "@/lib/api";
import artisanImage from "@/assets/hero-chikankari-artisan.jpg";
import fabricImage from "@/assets/hero-chikankari-fabric.jpg";
import handsImage from "@/assets/hero-hands-embroidery.jpg";
import elephantImage from "@/assets/heritage-elephant.jpg";
import lotusImage from "@/assets/heritage-lotus.jpg";
import tapestryImage from "@/assets/heritage-tapestry.jpg";
import jharokhaImage from "@/assets/heritage-jharokha.jpg";
import palaceImage from "@/assets/heritage-palace.jpg";
import rumiImage from "@/assets/heritage-rumi-darwaza.jpg";

const imageMap: Record<string, string> = {
  artisan: artisanImage,
  fabric: fabricImage,
  hands: handsImage,
  elephant: elephantImage,
  lotus: lotusImage,
  tapestry: tapestryImage,
  jharokha: jharokhaImage,
  palace: palaceImage,
  rumi: rumiImage,
};

const ProductGrid = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getProducts({ category })
      .then(setProducts)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return (
      <section className="w-full px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[3/4] bg-heritage-cream/50 mb-4" />
              <div className="h-3 bg-heritage-cream/50 rounded mb-2 w-3/4" />
              <div className="h-4 bg-heritage-cream/50 rounded w-1/2" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-6 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
          >
            <Link to={`/product/${product.id}`} className="group block">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-heritage-cream">
                <img
                  src={imageMap[product.image_key || "artisan"] || artisanImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                <div className="absolute inset-0 border border-heritage-gold/0 group-hover:border-heritage-gold/30 transition-all duration-500 pointer-events-none" />

                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {product.is_new === 1 && (
                    <span className="px-2.5 py-1 text-[0.6rem] tracking-[0.2em] font-display uppercase bg-foreground text-background">
                      New
                    </span>
                  )}
                  {product.is_bestseller === 1 && (
                    <span className="px-2.5 py-1 text-[0.6rem] tracking-[0.2em] font-display uppercase bg-heritage-gold/90 text-white">
                      Bestseller
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-1.5 text-[0.65rem] tracking-[0.2em] font-display uppercase bg-background/90 text-foreground">
                    View Details
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="text-xs tracking-[0.2em] font-display text-muted-foreground uppercase">
                  {product.category} &middot; {product.fabric}
                </p>
                <div className="flex justify-between items-end gap-2">
                  <h3 className="text-sm md:text-base font-serif text-foreground leading-snug group-hover:text-heritage-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm font-display text-foreground shrink-0">₹{product.price.toLocaleString("en-IN")}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      {products.length > 0 && <Pagination />}
    </section>
  );
};

export default ProductGrid;
