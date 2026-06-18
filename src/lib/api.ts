const BASE = "http://localhost:3001/api";

function getToken() {
  return localStorage.getItem("noor-token");
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, { ...options, headers });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data as T;
}

export const api = {
  // Auth
  register: (body: { email: string; password: string; firstName: string; lastName: string; phone?: string }) =>
    request<{ token: string; user: User }>("/auth/register", { method: "POST", body: JSON.stringify(body) }),

  login: (body: { email: string; password: string }) =>
    request<{ token: string; user: User }>("/auth/login", { method: "POST", body: JSON.stringify(body) }),

  me: () => request<User>("/auth/me"),

  // Products
  getProducts: (params?: { category?: string; search?: string; sort?: string }) => {
    const q = new URLSearchParams(params as Record<string, string>).toString();
    return request<Product[]>(`/products${q ? `?${q}` : ""}`);
  },

  getProduct: (id: number | string) => request<Product>(`/products/${id}`),

  // Orders
  placeOrder: (body: PlaceOrderBody) =>
    request<{ orderNumber: string }>("/orders", { method: "POST", body: JSON.stringify(body) }),

  getMyOrders: () => request<Order[]>("/orders/my"),

  getOrder: (orderNumber: string) => request<Order>(`/orders/${orderNumber}`),
};

// Types
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  created_at?: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  fabric: string;
  embroidery?: string;
  description?: string;
  image_key?: string;
  is_new: number;
  is_bestseller: number;
  stock: number;
}

export interface PlaceOrderBody {
  items: { id?: number; name: string; price: string | number; quantity: number; size?: string }[];
  customerDetails: { email: string; firstName: string; lastName: string; phone?: string };
  shippingAddress: { address: string; city: string; postalCode: string; country: string };
  shippingOption: string;
  subtotal: number;
  shippingCost: number;
  total: number;
}

export interface Order {
  id: number;
  order_number: string;
  status: string;
  total: number;
  created_at: string;
  items: { product_name: string; price: number; quantity: number; size?: string }[];
}
