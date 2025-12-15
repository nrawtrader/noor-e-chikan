import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Noor Kurta",
    category: "Kurtas",
    price: "₹4,850",
    isNew: true,
  },
  {
    id: 2,
    name: "Lucknowi Saree",
    category: "Sarees",
    price: "₹12,500",
  },
  {
    id: 3,
    name: "Chikan Dupatta",
    category: "Dupattas",
    price: "₹2,200",
    isNew: true,
  },
  {
    id: 4,
    name: "Sitara Suit",
    category: "Suit Sets",
    price: "₹8,900",
  },
  {
    id: 5,
    name: "Pearl Kurta",
    category: "Kurtas",
    price: "₹5,650",
  },
  {
    id: 6,
    name: "Mogra Kurti",
    category: "Kurtis",
    price: "₹3,200",
  },
];

const ProductCarousel = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="mb-8">
        <p className="text-sm tracking-[0.3em] text-heritage-gold mb-2 font-display uppercase">
          Featured
        </p>
        <h2 className="text-2xl md:text-3xl font-serif text-foreground">
          New Arrivals
        </h2>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 pr-2 md:pr-4"
            >
              <Link to={`/product/${product.id}`}>
                <Card className="border-none shadow-none bg-transparent group">
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] mb-4 overflow-hidden bg-heritage-ivory relative border border-heritage-gold/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-2xl font-serif text-heritage-gold/20">
                          {product.name.charAt(0)}
                        </p>
                      </div>
                      {product.isNew && (
                        <div className="absolute top-3 left-3 px-2 py-1 text-xs font-display tracking-wider text-heritage-gold bg-background/90">
                          NEW
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-display text-muted-foreground">
                        {product.category}
                      </p>
                      <div className="flex justify-between items-center">
                        <h3 className="text-base font-serif text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-sm font-display text-foreground">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProductCarousel;