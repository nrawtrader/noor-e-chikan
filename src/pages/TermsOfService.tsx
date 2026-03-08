import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - Noor-e-Chikan";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-light text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: March 8, 2026</p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Noor-e-Chikan website and services, you accept and agree to be bound by these Terms of Service. These terms govern your use of our website, products, and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                All our products are handcrafted Chikankari garments. Due to the handmade nature of our products, slight variations in embroidery patterns are natural and add to the uniqueness of each piece. We strive to provide accurate product descriptions, pricing, and availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Returns and Exchanges</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Returns and exchanges are accepted within 7 days of delivery, subject to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Items must be unworn, unwashed, and in original condition with tags</li>
                <li>Custom or personalized items are final sale</li>
                <li>Return shipping costs are the responsibility of the customer</li>
                <li>Refunds will be processed to the original payment method</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">If you have any questions about these Terms, please contact us at:</p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: care@noorechikan.com</p>
                <p>Phone: +91 522 XXX XXXX</p>
                <p>Address: Lucknow, Uttar Pradesh, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
