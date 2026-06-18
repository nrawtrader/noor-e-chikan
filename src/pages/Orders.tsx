import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useAuth } from "@/context/AuthContext";
import { api, Order } from "@/lib/api";

const Orders = () => {
  const { user, isLoading } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!user) return;
    setFetching(true);
    api.getMyOrders()
      .then(setOrders)
      .catch(() => {})
      .finally(() => setFetching(false));
  }, [user]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <h1 className="text-2xl font-serif text-foreground mb-2">Your Orders</h1>
        <p className="text-sm text-muted-foreground font-display mb-10">A record of your Chikankari treasures</p>

        {isLoading || fetching ? (
          <div className="space-y-4">
            {[1, 2].map(i => <div key={i} className="h-24 bg-heritage-cream/30 animate-pulse" />)}
          </div>
        ) : !user ? (
          <div className="text-center py-16 border border-border">
            <p className="text-muted-foreground font-display mb-4">Please sign in to view your orders.</p>
            <Link to="/" className="text-sm font-display underline text-foreground">Return to Home</Link>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-16 border border-border">
            <p className="text-muted-foreground font-display mb-4">You haven't placed any orders yet.</p>
            <Link to="/category/shop" className="text-sm font-display underline text-foreground">Browse the Collection</Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="border border-border p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs tracking-[0.2em] font-display text-muted-foreground uppercase mb-1">Order Number</p>
                    <p className="font-serif text-foreground">{order.order_number}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs tracking-[0.2em] font-display text-muted-foreground uppercase mb-1">Total</p>
                    <p className="font-serif text-foreground">₹{(order.total / 100).toLocaleString("en-IN")}</p>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground font-display">
                  <span>{new Date(order.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span className="capitalize px-2 py-0.5 bg-heritage-cream text-heritage-gold">{order.status}</span>
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  {order.items?.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="font-display text-foreground">
                        {item.product_name} {item.size ? `(${item.size})` : ""} × {item.quantity}
                      </span>
                      <span className="text-muted-foreground">₹{(item.price / 100 * item.quantity).toLocaleString("en-IN")}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Orders;
