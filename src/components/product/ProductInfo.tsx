import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Minus, Plus } from "lucide-react";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="space-y-6">
      <div className="hidden lg:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/category/kurtas">Kurtas</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Noor White Kurta</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-light text-muted-foreground mb-1">Kurtas</p>
            <h1 className="text-2xl md:text-3xl font-light text-foreground">Noor White Kurta</h1>
          </div>
          <div className="text-right">
            <p className="text-xl font-light text-foreground">₹4,850</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 py-4 border-b border-border">
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Fabric</h3>
          <p className="text-sm font-light text-muted-foreground">Pure Cotton Cambric</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Embroidery</h3>
          <p className="text-sm font-light text-muted-foreground">Hand-embroidered Chikankari with Tepchi, Bakhiya & Jaali work</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Craft Origin</h3>
          <p className="text-sm font-light text-muted-foreground">Handcrafted in Lucknow by master artisans</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Editor's notes</h3>
          <p className="text-sm font-light text-muted-foreground italic">"A timeless white kurta adorned with intricate Chikankari embroidery — perfect for festive occasions and everyday elegance."</p>
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-light text-foreground">Size</h3>
          <Link to="/about/size-guide" className="text-sm font-light text-muted-foreground underline">Size Guide</Link>
        </div>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`h-10 min-w-[3rem] px-3 text-sm font-light border transition-colors ${
                selectedSize === size
                  ? 'bg-foreground text-background border-foreground'
                  : 'border-border text-foreground hover:border-foreground'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-light text-foreground">Quantity</span>
          <div className="flex items-center border border-border">
            <Button variant="ghost" size="sm" onClick={decrementQuantity} className="h-10 w-10 p-0 hover:bg-transparent hover:opacity-50 rounded-none border-none">
              <Minus className="h-4 w-4" />
            </Button>
            <span className="h-10 flex items-center px-4 text-sm font-light min-w-12 justify-center border-l border-r border-border">{quantity}</span>
            <Button variant="ghost" size="sm" onClick={incrementQuantity} className="h-10 w-10 p-0 hover:bg-transparent hover:opacity-50 rounded-none border-none">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-light rounded-none">
          Add to Bag
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
