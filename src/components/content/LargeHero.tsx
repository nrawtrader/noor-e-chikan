import heritagePalace from "@/assets/heritage-palace.jpg";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="w-full aspect-[16/7] mb-4 overflow-hidden relative">
        <img
          src={heritagePalace}
          alt="The Art of Chikankari - Lucknow Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8 max-w-3xl">
            <p className="text-sm tracking-[0.4em] text-amber-300 mb-4 font-display uppercase">
              A Legacy of Lucknow
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              The Art of Chikankari
            </h2>
            <p className="text-lg font-display text-white/80 max-w-xl mx-auto leading-relaxed">
              Each stitch tells a story of artisans who have preserved this delicate craft 
              through generations, weaving threads of heritage into every garment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeHero;
