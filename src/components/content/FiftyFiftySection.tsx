import { Link } from "react-router-dom";
import heritageElephant from "@/assets/heritage-elephant.jpg";
import heritageLotus from "@/assets/heritage-lotus.jpg";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/kurtas" className="block">
            <div className="w-full aspect-square mb-4 overflow-hidden relative group">
              <img
                src={heritageElephant}
                alt="Kurtas Collection - Heritage Mughal Art"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm tracking-[0.3em] text-white/70 mb-3 font-display">COLLECTION</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Kurtas</h3>
                  <p className="text-base font-display text-white/80 max-w-xs mx-auto">
                    Hand-embroidered elegance for every occasion
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/10"></div>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/category/dupattas" className="block">
            <div className="w-full aspect-square mb-4 overflow-hidden relative group">
              <img
                src={heritageLotus}
                alt="Dupattas Collection - Traditional Lotus Motif"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm tracking-[0.3em] text-white/70 mb-3 font-display">COLLECTION</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Dupattas</h3>
                  <p className="text-base font-display text-white/80 max-w-xs mx-auto">
                    Delicate drapes adorned with centuries-old artistry
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/10"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;
