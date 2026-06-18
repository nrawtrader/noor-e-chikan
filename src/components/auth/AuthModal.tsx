import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();

  const [form, setForm] = useState({
    email: "", password: "", firstName: "", lastName: "", phone: "",
  });

  if (!isOpen) return null;

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (mode === "login") {
        await login(form.email, form.password);
      } else {
        await register({ email: form.email, password: form.password, firstName: form.firstName, lastName: form.lastName, phone: form.phone });
      }
      onClose();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-screen w-full max-w-md bg-background border-l border-border animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-serif text-foreground">
            {mode === "login" ? "Sign In" : "Create Account"}
          </h2>
          <button onClick={onClose} className="p-2 text-foreground hover:text-muted-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-sm font-display text-muted-foreground mb-8">
            {mode === "login"
              ? "Welcome back. Sign in to access your orders and saved favourites."
              : "Join Noor-e-Chikan to track orders and enjoy a seamless shopping experience."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === "register" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-light">First Name *</Label>
                  <Input id="firstName" value={form.firstName} onChange={e => set("firstName", e.target.value)} className="mt-1.5 rounded-none" placeholder="First name" required />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-light">Last Name *</Label>
                  <Input id="lastName" value={form.lastName} onChange={e => set("lastName", e.target.value)} className="mt-1.5 rounded-none" placeholder="Last name" required />
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="email" className="text-sm font-light">Email *</Label>
              <Input id="email" type="email" value={form.email} onChange={e => set("email", e.target.value)} className="mt-1.5 rounded-none" placeholder="your@email.com" required />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-light">Password *</Label>
              <Input id="password" type="password" value={form.password} onChange={e => set("password", e.target.value)} className="mt-1.5 rounded-none" placeholder={mode === "register" ? "Min. 6 characters" : "Your password"} required />
            </div>

            {mode === "register" && (
              <div>
                <Label htmlFor="phone" className="text-sm font-light">Phone (optional)</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} className="mt-1.5 rounded-none" placeholder="+91 98765 43210" />
              </div>
            )}

            {error && (
              <p className="text-sm text-red-500 font-display">{error}</p>
            )}

            <Button type="submit" className="w-full rounded-none h-11" disabled={loading}>
              {loading ? "Please wait..." : mode === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => { setMode(m => m === "login" ? "register" : "login"); setError(""); }}
              className="text-sm font-display text-muted-foreground hover:text-foreground transition-colors underline"
            >
              {mode === "login" ? "Don't have an account? Register" : "Already have an account? Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
