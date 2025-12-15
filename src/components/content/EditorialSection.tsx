import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
              At Noor-e-Chikan, we honor this legacy by working directly with master artisans 
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
          <div className="w-full aspect-[4/5] overflow-hidden bg-heritage-ivory relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-6xl md:text-8xl font-serif text-heritage-gold/30">نور</p>
                <p className="text-sm tracking-[0.3em] text-muted-foreground mt-4 font-display">
                  NOOR • LIGHT
                </p>
              </div>
            </div>
            <div className="absolute inset-0 border border-heritage-gold/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;