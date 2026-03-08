import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Noor-e-Chikan";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-light text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 8, 2026</p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Noor-e-Chikan ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make a purchase, or interact with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed">We may collect personal information that you provide directly to us, including:</p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Name, email address, and contact information</li>
                    <li>Billing and shipping addresses</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Account preferences and communication settings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Usage Information</h3>
                  <p className="text-muted-foreground leading-relaxed">We automatically collect certain information about your device and usage patterns to improve our services and user experience.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">If you have any questions about this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicy;
