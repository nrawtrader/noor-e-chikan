import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-heritage-cream text-foreground pt-12 pb-4 px-6 border-t border-heritage-gold/20 mt-24">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand - Left side */}
          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">
              Noor-e-Chikan
            </h2>
            <p className="text-base font-display text-muted-foreground leading-relaxed max-w-md mb-6">
              Preserving the timeless art of Lucknowi Chikankari, one stitch at a time. 
              Handcrafted elegance from the heart of Lucknow.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 text-base font-display text-muted-foreground">
              <div>
                <p className="font-serif text-foreground mb-1">Visit Our Atelier</p>
                <p>Hazratganj, Lucknow</p>
                <p>Uttar Pradesh, India 226001</p>
              </div>
              <div>
                <p className="font-serif text-foreground mb-1 mt-4">Contact</p>
                <p>+91 522 XXX XXXX</p>
                <p>hello@noorechikan.com</p>
              </div>
            </div>
          </div>

          {/* Link lists - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shop */}
            <div>
              <h4 className="text-sm font-serif mb-4 tracking-wide">Shop</h4>
              <ul className="space-y-2">
                <li><Link to="/category/kurtas" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Kurtas</Link></li>
                <li><Link to="/category/sarees" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Sarees</Link></li>
                <li><Link to="/category/dupattas" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Dupattas</Link></li>
                <li><Link to="/category/suits" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Suit Sets</Link></li>
                <li><Link to="/category/kurtis" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Kurtis</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-serif mb-4 tracking-wide">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/about/size-guide" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Size Guide</Link></li>
                <li><Link to="/about/care" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Care Instructions</Link></li>
                <li><Link to="/about/returns" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Returns</Link></li>
                <li><Link to="/about/shipping" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Shipping</Link></li>
                <li><Link to="/about/customer-care" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-serif mb-4 tracking-wide">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">Facebook</a></li>
                <li><a href="#" className="text-base font-display text-muted-foreground hover:text-foreground transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - edge to edge separator */}
      <div className="border-t border-heritage-gold/20 -mx-6 px-6 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-display text-muted-foreground mb-2 md:mb-0">
            © 2024 Noor-e-Chikan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm font-display text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm font-display text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;