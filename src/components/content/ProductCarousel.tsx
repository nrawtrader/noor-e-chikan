import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import artisanImage from "@/assets/hero-chikankari-artisan.jpg";
import fabricImage from "@/assets/hero-chikankari-fabric.jpg";
import handsImage from "@/assets/hero-hands-embroidery.jpg";
import elephantImage from "@/assets/heritage-elephant.jpg";
import lotusImage from "@/assets/heritage-lotus.jpg";
import jharokhaImage from "@/assets/heritage-jharokha.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  fabric: string;
  isNew?: boolean;
}

const products: Product[] = [
  { id: 1, name: "Noor Kurta", category: "Kurtas", price: "₹4,850", image: artisanImage, fabric: "Pure Cotton", isNew: true },
  { id: 4, name: "Mukaish Saree", category: "Sarees", price: "₹12,500", image: elephantImage, fabric: "Pure Silk" },
  { id: 3, name: "Jasmine Dupatta", category: "Dupattas", price: "₹3,200", image: handsImage, fabric: "Chiffon", isNew: true },
  { id: 5, name: "Sitara Suit Set", category: "Suit Sets", price: "₹8,900", image: lotusImage, fabric: "Cotton Silk" },
  { id: 2, name: "Lucknowi Anarkali", category: "Kurtas", price: "₹6,950", image: fabricImage, fabric: "Georgette" },
  { id: 7, name: "Jaali Dupatta", category: "Dupattas", price: "₹4,450", image: jharokhaImage, fabric: "Organza" },
];

const ProductCarousel = () => {
  return (
    <section className="w-full mb-20 px-6">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-[0.4em] text-heritage-gold mb-3 font-display uppercase">
            Featured
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground">
            New Arrivals
          </h2>
        </div>
        <Link
          to="/category/shop"
          className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.2em] font-display uppercase text-muted-foreground hover:text-foreground hover:gap-3 transition-all duration-300"
        >
          View All <ArrowRight size={12} />
        </Link>
      </div>

      <Carousel opts={{ align: "start", loop: false }} className="w-full">
        <CarouselContent className="-ml-4">
          {products.map((product, index) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-heritage-ivory">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                    <div className="absolute inset-0 border border-heritage-gold/0 group-hover:border-heritage-gold/30 transition-all duration-500 pointer-events-none" />
                    {product.isNew && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 text-[0.6rem] tracking-[0.2em] font-display uppercase bg-foreground text-background">
                        New
                      </div>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xs tracking-[0.2em] font-display text-muted-foreground uppercase">
                      {product.category} &middot; {product.fabric}
                    </p>
                    <div className="flex justify-between items-end gap-2">
                      <h3 className="text-sm md:text-base font-serif text-foreground group-hover:text-heritage-gold transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm font-display text-foreground shrink-0">{product.price}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-8 text-center md:hidden">
        <Link
          to="/category/shop"
          className="inline-flex items-center gap-2 text-xs tracking-[0.25em] font-display uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          View All Arrivals <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
};

export default ProductCarousel;
