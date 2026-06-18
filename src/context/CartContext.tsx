import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: string;
  size?: string;
  fabric?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  updateQuantity: (id: number, size: string | undefined, newQuantity: number) => void;
  removeFromCart: (id: number, size?: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem("noor-cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("noor-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    setCartItems(prev => {
      const key = `${item.id}-${item.size ?? ""}`;
      const existing = prev.find(i => `${i.id}-${i.size ?? ""}` === key);
      if (existing) {
        return prev.map(i =>
          `${i.id}-${i.size ?? ""}` === key
            ? { ...i, quantity: i.quantity + (item.quantity ?? 1) }
            : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity ?? 1 }];
    });
  };

  const updateQuantity = (id: number, size: string | undefined, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id, size);
    } else {
      setCartItems(prev =>
        prev.map(i =>
          i.id === id && (i.size ?? "") === (size ?? "")
            ? { ...i, quantity: newQuantity }
            : i
        )
      );
    }
  };

  const removeFromCart = (id: number, size?: string) => {
    setCartItems(prev =>
      prev.filter(i => !(i.id === id && (i.size ?? "") === (size ?? "")))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const totalPrice = cartItems.reduce((sum, i) => {
    const price = parseFloat(i.price.replace("₹", "").replace(/,/g, ""));
    return sum + price * i.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
