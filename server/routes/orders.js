const express = require("express");
const db = require("../db");
const { requireAuth, optionalAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/", optionalAuth, (req, res) => {
  const { items, customerDetails, shippingAddress, shippingOption, subtotal, shippingCost, total } = req.body;

  if (!items || !items.length) {
    return res.status(400).json({ error: "Order must contain at least one item" });
  }
  if (!customerDetails?.email) {
    return res.status(400).json({ error: "Customer email is required" });
  }

  const orderNumber = `NEC-${Date.now().toString(36).toUpperCase()}`;

  const insertOrder = db.prepare(`
    INSERT INTO orders (order_number, user_id, guest_email, subtotal, shipping_cost, total,
      shipping_name, shipping_address, shipping_city, shipping_postal, shipping_country)
    VALUES (@order_number, @user_id, @guest_email, @subtotal, @shipping_cost, @total,
      @shipping_name, @shipping_address, @shipping_city, @shipping_postal, @shipping_country)
  `);

  const insertItem = db.prepare(`
    INSERT INTO order_items (order_id, product_id, product_name, price, quantity, size)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const createOrder = db.transaction(() => {
    const result = insertOrder.run({
      order_number: orderNumber,
      user_id: req.user?.id ?? null,
      guest_email: req.user ? null : customerDetails.email,
      subtotal: Math.round(subtotal * 100),
      shipping_cost: Math.round((shippingCost || 0) * 100),
      total: Math.round(total * 100),
      shipping_name: `${customerDetails.firstName} ${customerDetails.lastName}`,
      shipping_address: shippingAddress?.address || null,
      shipping_city: shippingAddress?.city || null,
      shipping_postal: shippingAddress?.postalCode || null,
      shipping_country: shippingAddress?.country || null,
    });

    for (const item of items) {
      const priceNum = typeof item.price === "string"
        ? parseFloat(item.price.replace(/[₹,]/g, ""))
        : item.price;
      insertItem.run(result.lastInsertRowid, item.id || null, item.name, Math.round(priceNum * 100), item.quantity, item.size || null);
    }

    return result.lastInsertRowid;
  });

  try {
    const orderId = createOrder();
    const order = db.prepare("SELECT * FROM orders WHERE id = ?").get(orderId);
    res.status(201).json({ orderNumber, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

router.get("/my", requireAuth, (req, res) => {
  const orders = db.prepare(`
    SELECT o.*,
      json_group_array(json_object(
        'id', oi.id, 'product_name', oi.product_name,
        'price', oi.price, 'quantity', oi.quantity, 'size', oi.size
      )) as items
    FROM orders o
    LEFT JOIN order_items oi ON oi.order_id = o.id
    WHERE o.user_id = ?
    GROUP BY o.id
    ORDER BY o.created_at DESC
  `).all(req.user.id);

  res.json(orders.map(o => ({ ...o, items: JSON.parse(o.items) })));
});

router.get("/:orderNumber", optionalAuth, (req, res) => {
  const order = db.prepare("SELECT * FROM orders WHERE order_number = ?").get(req.params.orderNumber);
  if (!order) return res.status(404).json({ error: "Order not found" });

  if (order.user_id && order.user_id !== req.user?.id) {
    return res.status(403).json({ error: "Forbidden" });
  }

  const items = db.prepare("SELECT * FROM order_items WHERE order_id = ?").all(order.id);
  res.json({ ...order, items });
});

module.exports = router;
