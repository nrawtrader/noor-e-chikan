import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import StoryHero from "../components/content/StoryHero";
import StorySection from "../components/content/StorySection";
import StoryTimeline from "../components/content/StoryTimeline";
import CraftDetail from "../components/content/CraftDetail";
import CollectionsShowcase from "../components/content/CollectionsShowcase";
import heritageRumiDarwaza from "@/assets/heritage-rumi-darwaza.jpg";
import heritagePalace from "@/assets/heritage-palace.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero: Scroll-driven artisan animation */}
        <StoryHero />

        {/* Story: Born in Lucknow */}
        <StorySection
          image={heritageRumiDarwaza}
          imageAlt="Rumi Darwaza — The Gateway of Lucknow"
          subtitle="Our Heritage"
          title="Born in the Heart of Lucknow"
          description={
            <>
              <p>
                Chikankari, meaning "embroidery," has graced the fabric of Lucknow for over
                400 years. Legend traces its origins to Nur Jahan, the Mughal empress whose
                love for delicate needlework gave birth to this exquisite art form.
              </p>
              <p>
                At <span className="text-heritage-gold italic font-serif">Noor</span>-e-Chikan,
                we honour this legacy by working directly with master artisans whose families
                have practiced this craft for generations, ensuring every piece carries the
                authentic soul of Lucknawi tradition.
              </p>
            </>
          }
        />

        {/* Full-width Lucknow heritage */}
        <StorySection
          image={heritagePalace}
          imageAlt="Mughal Palace Art — Heritage of Lucknow"
          subtitle="A Legacy of Lucknow"
          title="The Art of Chikankari"
          description="Each stitch tells a story of artisans who have preserved this delicate craft through generations, weaving threads of heritage into every garment."
          fullWidth
        />

        {/* Timeline: History of Chikankari */}
        <StoryTimeline />

        {/* Craft details: The stitches */}
        <CraftDetail />

        {/* Collections showcase */}
        <CollectionsShowcase />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
