const express = require("express");
const app = express();
const PORT = 3000;

const produk = [
  { nama: "Laptop", harga: 8500000 },
  { nama: "Mouse Wireless", harga: 150000 },
  { nama: "Keyboard Mekanik", harga: 650000 },
];

function renderHalamanProduk(daftarProduk) {
  const itemHtml = daftarProduk
    .map((p) => `<li>${p.nama} - Rp${p.harga.toLocaleString("id-ID")}</li>`)
    .join("");

  return `
    <html>
      <head><title>TokoKita - Monolitik</title></head>
      <body>
        <h1>Daftar Produk (Monolitik)</h1>
        <ul>${itemHtml}</ul>
      </body>
    </html>
  `;
}

app.get("/produk", (req, res) => {
  const html = renderHalamanProduk(produk);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server monolitik berjalan di http://localhost:${PORT}/produk`);
});