import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const categoryDescriptions: Record<string, string> = {
  kurtas: "Hand-embroidered Chikankari kurtas for every occasion — from morning muslin to evening silk.",
  sarees: "Six yards of timeless artistry. Each saree tells a story woven over generations.",
  dupattas: "Delicate Chikankari dupattas — the finishing grace of every ensemble.",
  suits: "Complete suit sets with intricate embroidery, crafted for the modern Indian woman.",
  "suit-sets": "Complete suit sets with intricate embroidery, crafted for the modern Indian woman.",
  kurtis: "Everyday elegance in lightweight Chikankari — effortless and eternally beautiful.",
  shop: "The complete Noor-e-Chikan collection — authentic Lucknowi Chikankari, handcrafted by master artisans.",
  default: "Authentic Lucknowi Chikankari, handcrafted with centuries of artisan tradition.",
};

interface CategoryHeaderProps {
  category: string;
}

const CategoryHeader = ({ category }: CategoryHeaderProps) => {
  const slug = category.toLowerCase();
  const displayName = category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const description = categoryDescriptions[slug] ?? categoryDescriptions.default;

  return (
    <section className="w-full px-6 mb-10">
      <div className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to="/"
                  className="text-xs tracking-[0.15em] font-display uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-muted-foreground/40" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xs tracking-[0.15em] font-display uppercase text-foreground">
                {displayName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="border-b border-heritage-gold/20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-[0.4em] font-display uppercase text-heritage-gold mb-4">
            Collection
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-5 leading-tight">
            {displayName}
          </h1>
          <p className="text-base font-display text-muted-foreground max-w-xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="mt-6 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="h-px w-12 bg-heritage-gold/40" />
          <span className="text-lg font-serif text-heritage-gold/40 italic">चिकन</span>
          <div className="h-px w-12 bg-heritage-gold/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryHeader;
