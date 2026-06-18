import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Pagination from "./Pagination";
import artisanImage from "@/assets/hero-chikankari-artisan.jpg";
import fabricImage from "@/assets/hero-chikankari-fabric.jpg";
import handsImage from "@/assets/hero-hands-embroidery.jpg";
import elephantImage from "@/assets/heritage-elephant.jpg";
import lotusImage from "@/assets/heritage-lotus.jpg";
import tapestryImage from "@/assets/heritage-tapestry.jpg";
import jharokhaImage from "@/assets/heritage-jharokha.jpg";
import palaceImage from "@/assets/heritage-palace.jpg";
import rumiImage from "@/assets/heritage-rumi-darwaza.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  fabric: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const products: Product[] = [
  { id: 1, name: "Noor White Kurta", category: "Kurtas", price: "₹4,850", image: artisanImage, fabric: "Pure Cotton", isNew: true },
  { id: 2, name: "Lucknowi Anarkali", category: "Kurtas", price: "₹6,950", image: fabricImage, fabric: "Georgette", isNew: true },
  { id: 3, name: "Jasmine Dupatta", category: "Dupattas", price: "₹3,200", image: handsImage, fabric: "Chiffon" },
  { id: 4, name: "Mukaish Saree", category: "Sarees", price: "₹12,500", image: elephantImage, fabric: "Pure Silk", isBestseller: true },
  { id: 5, name: "Shadow Work Suit", category: "Suit Sets", price: "₹8,250", image: lotusImage, fabric: "Cotton Silk" },
  { id: 6, name: "Tepchi Kurta Set", category: "Kurtas", price: "₹5,950", image: tapestryImage, fabric: "Pure Cotton", isBestseller: true },
  { id: 7, name: "Jaali Work Dupatta", category: "Dupattas", price: "₹4,450", image: jharokhaImage, fabric: "Organza" },
  { id: 8, name: "Phanda Saree", category: "Sarees", price: "₹15,800", image: palaceImage, fabric: "Pure Silk" },
  { id: 9, name: "Bakhiya Kurta", category: "Kurtas", price: "₹3,550", image: rumiImage, fabric: "Linen" },
  { id: 10, name: "Kamdani Suit Set", category: "Suit Sets", price: "₹9,850", image: artisanImage, fabric: "Georgette" },
  { id: 11, name: "Hool Work Kurta", category: "Kurtas", price: "₹4,050", image: fabricImage, fabric: "Pure Cotton" },
  { id: 12, name: "Resham Dupatta", category: "Dupattas", price: "₹3,650", image: handsImage, fabric: "Pure Silk" },
  { id: 13, name: "Keel Kangan Saree", category: "Sarees", price: "₹14,150", image: elephantImage, fabric: "Banarasi Silk", isNew: true },
  { id: 14, name: "Murri Suit Set", category: "Suit Sets", price: "₹10,950", image: lotusImage, fabric: "Cotton" },
  { id: 15, name: "Zanzeera Kurta", category: "Kurtas", price: "₹5,750", image: tapestryImage, fabric: "Georgette" },
  { id: 16, name: "Patti Work Dupatta", category: "Dupattas", price: "₹2,850", image: jharokhaImage, fabric: "Cotton" },
  { id: 17, name: "Chikankari A-Line Kurta", category: "Kurtas", price: "₹4,350", image: palaceImage, fabric: "Pure Cotton", isBestseller: true },
  { id: 18, name: "Dhaaga Saree", category: "Sarees", price: "₹13,450", image: rumiImage, fabric: "Organza Silk" },
  { id: 19, name: "Jangla Work Suit", category: "Suit Sets", price: "₹11,250", image: artisanImage, fabric: "Silk" },
  { id: 20, name: "Khatau Kurta", category: "Kurtas", price: "₹6,150", image: fabricImage, fabric: "Linen Blend" },
  { id: 21, name: "Net Chikan Dupatta", category: "Dupattas", price: "₹3,950", image: handsImage, fabric: "Net" },
  { id: 22, name: "Ghas Patti Saree", category: "Sarees", price: "₹16,500", image: elephantImage, fabric: "Pure Silk", isNew: true },
  { id: 23, name: "Bijli Kurta Set", category: "Kurtas", price: "₹5,250", image: lotusImage, fabric: "Cotton Lawn" },
  { id: 24, name: "Tarkashi Suit Set", category: "Suit Sets", price: "₹9,750", image: tapestryImage, fabric: "Georgette" },
];

const ProductGrid = () => {
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
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                <div className="absolute inset-0 border border-heritage-gold/0 group-hover:border-heritage-gold/30 transition-all duration-500 pointer-events-none" />

                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {product.isNew && (
                    <span className="px-2.5 py-1 text-[0.6rem] tracking-[0.2em] font-display uppercase bg-foreground text-background">
                      New
                    </span>
                  )}
                  {product.isBestseller && (
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
                  <p className="text-sm font-display text-foreground shrink-0">{product.price}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default ProductGrid;
