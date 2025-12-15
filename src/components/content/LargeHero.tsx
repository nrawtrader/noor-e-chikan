const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="w-full aspect-[16/7] mb-4 overflow-hidden bg-heritage-cream relative">
        <div className="absolute inset-0 flex items-center justify-center chikan-pattern">
          <div className="text-center p-8 max-w-3xl">
            <p className="text-sm tracking-[0.4em] text-heritage-gold mb-4 font-display uppercase">
              A Legacy of Lucknow
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
              The Art of Chikankari
            </h2>
            <p className="text-lg font-display text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Each stitch tells a story of artisans who have preserved this delicate craft 
              through generations, weaving threads of heritage into every garment.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 border border-heritage-gold/20"></div>
      </div>
    </section>
  );
};

export default LargeHero;