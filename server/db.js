const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(path.join(__dirname, "noor.db"));

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price INTEGER NOT NULL,
    fabric TEXT NOT NULL,
    embroidery TEXT,
    description TEXT,
    image_key TEXT,
    is_new INTEGER DEFAULT 0,
    is_bestseller INTEGER DEFAULT 0,
    stock INTEGER DEFAULT 50,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_number TEXT UNIQUE NOT NULL,
    user_id INTEGER REFERENCES users(id),
    guest_email TEXT,
    status TEXT DEFAULT 'confirmed',
    subtotal INTEGER NOT NULL,
    shipping_cost INTEGER DEFAULT 0,
    total INTEGER NOT NULL,
    shipping_name TEXT,
    shipping_address TEXT,
    shipping_city TEXT,
    shipping_postal TEXT,
    shipping_country TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    product_name TEXT NOT NULL,
    price INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    size TEXT
  );
`);

// Seed products if table is empty
const count = db.prepare("SELECT COUNT(*) as c FROM products").get().c;
if (count === 0) {
  const insert = db.prepare(`
    INSERT INTO products (name, category, price, fabric, embroidery, description, image_key, is_new, is_bestseller, stock)
    VALUES (@name, @category, @price, @fabric, @embroidery, @description, @image_key, @is_new, @is_bestseller, @stock)
  `);
  const seedMany = db.transaction((products) => {
    for (const p of products) insert.run(p);
  });
  seedMany([
    { name: "Noor White Kurta", category: "Kurtas", price: 4850, fabric: "Pure Cotton Cambric", embroidery: "Tepchi, Bakhiya & Jaali", description: "A timeless white kurta adorned with intricate Chikankari embroidery — perfect for festive occasions and everyday elegance.", image_key: "artisan", is_new: 1, is_bestseller: 0, stock: 30 },
    { name: "Lucknowi Anarkali", category: "Kurtas", price: 6950, fabric: "Georgette", embroidery: "Mukaish & Shadow Work", description: "Flowing Anarkali silhouette with delicate Mukaish embellishments and Chikankari shadow work.", image_key: "fabric", is_new: 1, is_bestseller: 0, stock: 20 },
    { name: "Jasmine Dupatta", category: "Dupattas", price: 3200, fabric: "Chiffon", embroidery: "Phanda & Murri", description: "Sheer chiffon dupatta adorned with delicate Phanda and Murri Chikankari work.", image_key: "hands", is_new: 0, is_bestseller: 0, stock: 40 },
    { name: "Mukaish Saree", category: "Sarees", price: 12500, fabric: "Pure Silk", embroidery: "Mukaish embellishments", description: "Luxurious pure silk saree with traditional Mukaish gold embellishments.", image_key: "elephant", is_new: 0, is_bestseller: 1, stock: 15 },
    { name: "Shadow Work Suit", category: "Suit Sets", price: 8250, fabric: "Cotton Silk", embroidery: "Bakhiya Shadow Work", description: "Elegant three-piece suit set with intricate Bakhiya shadow work Chikankari.", image_key: "lotus", is_new: 0, is_bestseller: 0, stock: 25 },
    { name: "Tepchi Kurta Set", category: "Kurtas", price: 5950, fabric: "Pure Cotton", embroidery: "Tepchi running stitch", description: "Classic kurta set featuring the traditional Tepchi running stitch — the foundation of Chikankari.", image_key: "tapestry", is_new: 0, is_bestseller: 1, stock: 35 },
    { name: "Jaali Work Dupatta", category: "Dupattas", price: 4450, fabric: "Organza", embroidery: "Jaali cutwork", description: "Organza dupatta with exquisite Jaali cutwork creating a lattice of light and shadow.", image_key: "jharokha", is_new: 0, is_bestseller: 0, stock: 20 },
    { name: "Phanda Saree", category: "Sarees", price: 15800, fabric: "Pure Silk", embroidery: "Phanda & Keel", description: "Heirloom-quality pure silk saree with Phanda and Keel embroidery throughout.", image_key: "palace", is_new: 0, is_bestseller: 0, stock: 10 },
    { name: "Bakhiya Kurta", category: "Kurtas", price: 3550, fabric: "Linen", embroidery: "Bakhiya chain stitch", description: "Relaxed linen kurta with Bakhiya chain stitch — effortlessly elegant for everyday wear.", image_key: "rumi", is_new: 0, is_bestseller: 0, stock: 40 },
    { name: "Kamdani Suit Set", category: "Suit Sets", price: 9850, fabric: "Georgette", embroidery: "Kamdani goldwork", description: "Luxurious Georgette suit set with Kamdani gold threadwork and Chikankari embroidery.", image_key: "artisan", is_new: 0, is_bestseller: 0, stock: 15 },
    { name: "Hool Work Kurta", category: "Kurtas", price: 4050, fabric: "Pure Cotton", embroidery: "Hool chain stitch", description: "Pure cotton kurta featuring Hool chain stitch patterns — a signature of Lucknowi craft.", image_key: "fabric", is_new: 0, is_bestseller: 0, stock: 30 },
    { name: "Resham Dupatta", category: "Dupattas", price: 3650, fabric: "Pure Silk", embroidery: "Resham thread embroidery", description: "Pure silk dupatta with vibrant Resham thread Chikankari in traditional motifs.", image_key: "hands", is_new: 0, is_bestseller: 0, stock: 25 },
    { name: "Keel Kangan Saree", category: "Sarees", price: 14150, fabric: "Banarasi Silk", embroidery: "Keel Kangan work", description: "A rare fusion of Banarasi weave and Lucknowi Keel Kangan Chikankari embroidery.", image_key: "elephant", is_new: 1, is_bestseller: 0, stock: 8 },
    { name: "Murri Suit Set", category: "Suit Sets", price: 10950, fabric: "Cotton", embroidery: "Murri & Phanda", description: "Premium cotton suit set with Murri and Phanda Chikankari — ideal for weddings and celebrations.", image_key: "lotus", is_new: 0, is_bestseller: 0, stock: 20 },
    { name: "Zanzeera Kurta", category: "Kurtas", price: 5750, fabric: "Georgette", embroidery: "Zanzeera chain stitch", description: "Flowing Georgette kurta with the distinctive Zanzeera chain stitch creating an intricate pattern.", image_key: "tapestry", is_new: 0, is_bestseller: 0, stock: 25 },
    { name: "Patti Work Dupatta", category: "Dupattas", price: 2850, fabric: "Cotton", embroidery: "Patti buttonhole stitch", description: "Cotton dupatta with Patti buttonhole stitch Chikankari — everyday elegance.", image_key: "jharokha", is_new: 0, is_bestseller: 0, stock: 50 },
    { name: "Chikankari A-Line Kurta", category: "Kurtas", price: 4350, fabric: "Pure Cotton", embroidery: "Mixed stitch work", description: "A-line silhouette kurta combining multiple Chikankari stitch styles in a cohesive design.", image_key: "palace", is_new: 0, is_bestseller: 1, stock: 35 },
    { name: "Dhaaga Saree", category: "Sarees", price: 13450, fabric: "Organza Silk", embroidery: "Dhaaga thread work", description: "Organza silk saree with delicate Dhaaga thread Chikankari in traditional floral motifs.", image_key: "rumi", is_new: 0, is_bestseller: 0, stock: 12 },
    { name: "Jangla Work Suit", category: "Suit Sets", price: 11250, fabric: "Silk", embroidery: "Jangla all-over work", description: "Silk suit set with all-over Jangla Chikankari — the most complex and coveted embroidery style.", image_key: "artisan", is_new: 0, is_bestseller: 0, stock: 10 },
    { name: "Khatau Kurta", category: "Kurtas", price: 6150, fabric: "Linen Blend", embroidery: "Khatau shadow stitch", description: "Linen blend kurta with Khatau shadow stitch Chikankari — modern fabric, timeless craft.", image_key: "fabric", is_new: 0, is_bestseller: 0, stock: 20 },
    { name: "Net Chikan Dupatta", category: "Dupattas", price: 3950, fabric: "Net", embroidery: "Net embroidery", description: "Delicate net dupatta with Chikankari embroidery — perfect for layering over festive ensembles.", image_key: "hands", is_new: 0, is_bestseller: 0, stock: 30 },
    { name: "Ghas Patti Saree", category: "Sarees", price: 16500, fabric: "Pure Silk", embroidery: "Ghas Patti grass stitch", description: "Finest pure silk saree with Ghas Patti grass stitch — a rare and intricate Chikankari technique.", image_key: "elephant", is_new: 1, is_bestseller: 0, stock: 6 },
    { name: "Bijli Kurta Set", category: "Kurtas", price: 5250, fabric: "Cotton Lawn", embroidery: "Bijli zigzag stitch", description: "Lightweight cotton lawn kurta set with Bijli zigzag stitch Chikankari.", image_key: "lotus", is_new: 0, is_bestseller: 0, stock: 30 },
    { name: "Tarkashi Suit Set", category: "Suit Sets", price: 9750, fabric: "Georgette", embroidery: "Tarkashi wirework", description: "Georgette suit set with Tarkashi wirework Chikankari — a rare fusion technique from Lucknow.", image_key: "tapestry", is_new: 0, is_bestseller: 0, stock: 15 },
  ]);
}

module.exports = db;
