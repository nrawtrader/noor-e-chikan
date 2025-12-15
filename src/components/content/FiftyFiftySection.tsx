import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/kurtas" className="block">
            <div className="w-full aspect-square mb-4 overflow-hidden bg-heritage-cream relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm tracking-[0.3em] text-muted-foreground mb-3 font-display">COLLECTION</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                    Kurtas
                  </h3>
                  <p className="text-base font-display text-muted-foreground max-w-xs mx-auto">
                    Hand-embroidered elegance for every occasion
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-heritage-gold/20"></div>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/category/dupattas" className="block">
            <div className="w-full aspect-square mb-4 overflow-hidden bg-heritage-ivory relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm tracking-[0.3em] text-muted-foreground mb-3 font-display">COLLECTION</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                    Dupattas
                  </h3>
                  <p className="text-base font-display text-muted-foreground max-w-xs mx-auto">
                    Delicate drapes adorned with centuries-old artistry
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-heritage-gold/20"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;