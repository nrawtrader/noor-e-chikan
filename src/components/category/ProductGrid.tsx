import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import pantheonImage from "@/assets/pantheon.jpg";
import eclipseImage from "@/assets/eclipse.jpg";
import haloImage from "@/assets/halo.jpg";
import obliqueImage from "@/assets/oblique.jpg";
import lintelImage from "@/assets/lintel.jpg";
import shadowlineImage from "@/assets/shadowline.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const products: Product[] = [
  { id: 1, name: "Noor White Kurta", category: "Kurtas", price: "₹4,850", image: pantheonImage, isNew: true },
  { id: 2, name: "Lucknowi Dupatta", category: "Dupattas", price: "₹3,200", image: eclipseImage },
  { id: 3, name: "Chikan Anarkali", category: "Kurtas", price: "₹6,950", image: haloImage, isNew: true },
  { id: 4, name: "Mukaish Saree", category: "Sarees", price: "₹12,500", image: obliqueImage },
  { id: 5, name: "Shadow Work Suit", category: "Suits", price: "₹8,250", image: lintelImage },
  { id: 6, name: "Tepchi Kurta Set", category: "Kurtas", price: "₹5,950", image: shadowlineImage },
  { id: 7, name: "Jaali Work Dupatta", category: "Dupattas", price: "₹4,450", image: pantheonImage },
  { id: 8, name: "Phanda Saree", category: "Sarees", price: "₹15,800", image: eclipseImage },
  { id: 9, name: "Bakhiya Kurta", category: "Kurtas", price: "₹3,550", image: haloImage },
  { id: 10, name: "Kamdani Suit", category: "Suits", price: "₹9,850", image: obliqueImage },
  { id: 11, name: "Hool Work Kurta", category: "Kurtas", price: "₹4,050", image: lintelImage },
  { id: 12, name: "Resham Dupatta", category: "Dupattas", price: "₹3,650", image: shadowlineImage },
  { id: 13, name: "Keel Kangan Saree", category: "Sarees", price: "₹14,150", image: pantheonImage },
  { id: 14, name: "Murri Suit Set", category: "Suits", price: "₹10,950", image: eclipseImage },
  { id: 15, name: "Zanzeera Kurta", category: "Kurtas", price: "₹5,750", image: haloImage },
  { id: 16, name: "Patti Work Dupatta", category: "Dupattas", price: "₹2,850", image: obliqueImage },
  { id: 17, name: "Chikankari A-Line Kurta", category: "Kurtas", price: "₹4,350", image: lintelImage },
  { id: 18, name: "Dhaaga Saree", category: "Sarees", price: "₹13,450", image: shadowlineImage },
  { id: 19, name: "Jangla Work Suit", category: "Suits", price: "₹11,250", image: pantheonImage },
  { id: 20, name: "Khatau Kurta", category: "Kurtas", price: "₹6,150", image: eclipseImage },
  { id: 21, name: "Net Chikan Dupatta", category: "Dupattas", price: "₹3,950", image: haloImage },
  { id: 22, name: "Ghas Patti Saree", category: "Sarees", price: "₹16,500", image: obliqueImage },
  { id: 23, name: "Bijli Kurta Set", category: "Kurtas", price: "₹5,250", image: lintelImage },
  { id: 24, name: "Tarkashi Suit", category: "Suits", price: "₹9,750", image: shadowlineImage },
];

const ProductGrid = () => {
  return (
    <section className="w-full px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="border-none shadow-none bg-transparent group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] mb-3 overflow-hidden bg-muted/10 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/[0.03]"></div>
                    {product.isNew && (
                      <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium text-foreground bg-background/80">
                        NEW
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light text-muted-foreground">{product.category}</p>
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
                      <p className="text-sm font-light text-foreground">{product.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      <Pagination />
    </section>
  );
};

export default ProductGrid;
