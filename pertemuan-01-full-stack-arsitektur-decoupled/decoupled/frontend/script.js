const API_URL = "http://localhost:4000/api/produk";

async function muatProduk() {
  const container = document.getElementById("daftar-produk");

  const response = await fetch(API_URL);
  const daftarProduk = await response.json();

  daftarProduk.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.nama} - Rp${p.harga.toLocaleString("id-ID")}`;
    container.appendChild(li);
  });
}

muatProduk();