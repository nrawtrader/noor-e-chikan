import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to="/category/sarees" className="block">
            <div className="w-full h-[500px] lg:h-[700px] mb-4 overflow-hidden bg-heritage-ivory relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm tracking-[0.3em] text-muted-foreground mb-3 font-display">COLLECTION</p>
                  <h3 className="text-3xl font-serif text-foreground mb-4">
                    Sarees
                  </h3>
                  <p className="text-base font-display text-muted-foreground max-w-xs mx-auto">
                    Timeless six yards of pure elegance
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-heritage-gold/20"></div>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-2">
          <Link to="/category/suits" className="block">
            <div className="w-full h-[500px] lg:h-[700px] mb-4 overflow-hidden bg-heritage-cream relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm tracking-[0.3em] text-muted-foreground mb-3 font-display">COLLECTION</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                    Suit Sets
                  </h3>
                  <p className="text-lg font-display text-muted-foreground max-w-md mx-auto">
                    Complete ensembles featuring intricate Chikankari work, 
                    crafted for the discerning connoisseur
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

export default OneThirdTwoThirdsSection;