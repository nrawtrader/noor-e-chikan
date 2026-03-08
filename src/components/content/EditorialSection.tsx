import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heritageRumiDarwaza from "@/assets/heritage-rumi-darwaza.jpg";

const EditorialSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-[600px]">
          <p className="text-sm tracking-[0.3em] text-heritage-gold font-display uppercase">
            Our Heritage
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
            Born in the Heart of Lucknow
          </h2>
          <div className="space-y-4">
            <p className="text-lg font-display text-muted-foreground leading-relaxed">
              Chikankari, meaning "embroidery," has graced the fabric of Lucknow for over 
              400 years. Legend traces its origins to Nur Jahan, the Mughal empress whose 
              love for delicate needlework gave birth to this exquisite art form.
            </p>
            <p className="text-lg font-display text-muted-foreground leading-relaxed">
              At <span className="text-heritage-gold italic font-serif">Noor</span>-e-Chikan, we honor this legacy by working directly with master artisans 
              whose families have practiced this craft for generations, ensuring every piece 
              carries the authentic soul of Lucknawi tradition.
            </p>
          </div>
          <Link 
            to="/about/our-story" 
            className="inline-flex items-center gap-2 text-base font-display text-primary hover:text-primary-hover transition-colors duration-300 group"
          >
            <span>Discover Our Story</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="order-first md:order-last">
          <div className="w-full aspect-[4/5] overflow-hidden relative group">
            <img
              src={heritageRumiDarwaza}
              alt="Rumi Darwaza - The Gateway of Lucknow"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 border border-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
