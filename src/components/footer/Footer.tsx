import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-foreground text-background mt-24">
      <div className="border-b border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.4em] font-display uppercase text-heritage-gold mb-3">
              Stay Connected
            </p>
            <h3 className="text-2xl md:text-3xl font-serif text-white leading-snug">
              Receive Letters from Lucknow
            </h3>
            <p className="text-sm font-display text-white/50 mt-2">
              New arrivals, craft stories &amp; exclusive previews &#8212; in your inbox.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-0 min-w-[320px]">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/15 px-4 py-3 text-sm font-display text-white placeholder:text-white/30 outline-none focus:border-heritage-gold/50 transition-colors"
            />
            <button className="bg-heritage-gold text-white px-5 py-3 flex items-center gap-2 text-xs tracking-[0.2em] font-display uppercase hover:bg-heritage-gold/90 transition-colors shrink-0">
              Subscribe <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-serif text-white mb-5">
                <span className="text-heritage-gold italic">Noor</span>-e-Chikan
              </h2>
              <p className="text-base font-display text-white/50 leading-relaxed max-w-sm mb-8">
                Preserving the timeless art of Lucknowi Chikankari, one stitch at a time.
                Handcrafted elegance from the heart of Lucknow, since generations.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-heritage-gold/30" />
                <span className="text-sm font-serif text-heritage-gold/40 italic">चिकन</span>
                <div className="h-px w-10 bg-heritage-gold/30" />
              </div>

              <div className="space-y-5 text-sm font-display text-white/40">
                <div>
                  <p className="font-serif text-white/70 mb-1.5 text-base">Visit Our Atelier</p>
                  <p>Hazratganj, Lucknow</p>
                  <p>Uttar Pradesh, India 226001</p>
                </div>
                <div>
                  <p className="font-serif text-white/70 mb-1.5 text-base mt-4">Contact</p>
                  <p>+91 522 XXX XXXX</p>
                  <p>hello@noorechikan.com</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs tracking-[0.3em] font-display uppercase text-white/40 mb-6">Shop</h4>
                <ul className="space-y-3">
                  {["Kurtas", "Sarees", "Dupattas", "Suit Sets", "Kurtis"].map((item) => (
                    <li key={item}>
                      <Link
                        to={`/category/${item.toLowerCase().replace(" ", "-")}`}
                        className="text-sm font-display text-white/60 hover:text-heritage-gold transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.3em] font-display uppercase text-white/40 mb-6">About</h4>
                <ul className="space-y-3">
                  {[
                    { label: "Our Story", href: "/about/our-story" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-sm font-display text-white/60 hover:text-heritage-gold transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.3em] font-display uppercase text-white/40 mb-6">Connect</h4>
                <ul className="space-y-3">
                  {["Instagram", "Facebook", "WhatsApp"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm font-display text-white/60 hover:text-heritage-gold transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-display text-white/30">
              &copy; 2024 Noor-e-Chikan. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-xs font-display text-white/30 hover:text-white/60 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-xs font-display text-white/30 hover:text-white/60 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
