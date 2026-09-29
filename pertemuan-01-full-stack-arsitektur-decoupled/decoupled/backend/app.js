const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());

const produk = [
  { nama: "Laptop", harga: 8500000 },
  { nama: "Mouse Wireless", harga: 150000 },
  { nama: "Keyboard Mekanik", harga: 650000 },
];

app.get("/api/produk", (req, res) => {
  res.json(produk);
});

app.listen(PORT, () => {
  console.log(`Backend API decoupled berjalan di http://localhost:${PORT}/api/produk`);
});