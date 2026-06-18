const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  const { category, search, sort } = req.query;
  let sql = "SELECT * FROM products WHERE 1=1";
  const params = [];

  if (category && category !== "shop") {
    const normalized = category.charAt(0).toUpperCase() + category.slice(1);
    sql += " AND category = ?";
    params.push(normalized);
  }
  if (search) {
    sql += " AND (name LIKE ? OR fabric LIKE ? OR embroidery LIKE ?)";
    const term = `%${search}%`;
    params.push(term, term, term);
  }

  switch (sort) {
    case "price-asc": sql += " ORDER BY price ASC"; break;
    case "price-desc": sql += " ORDER BY price DESC"; break;
    case "newest": sql += " ORDER BY is_new DESC, created_at DESC"; break;
    default: sql += " ORDER BY id ASC";
  }

  const products = db.prepare(sql).all(...params);
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = db.prepare("SELECT * FROM products WHERE id = ?").get(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

module.exports = router;
