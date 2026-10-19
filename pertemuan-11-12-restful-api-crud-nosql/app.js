// TODO: require('express-async-errors') di baris PALING ATAS, sebelum require express
require('express-async-errors');

// Baris ini memaksa Node.js memakai DNS Google/Cloudflare untuk mengatasi error querySrv EBADRESP
// const dns = require('dns');
// dns.setServers(['8.8.8.8', '1.1.1.1']);

// Panggil dan konfigurasi dotenv di baris paling awal sebelum memuat modul lain
require('dotenv').config(); 

const express = require("express");
const mongoose = require("mongoose");

const app = express();
// Sekarang process.env.PORT sudah pasti terbaca dengan aman
const PORT = process.env.PORT || 3000;

const mahasiswaRoutes = require("./routes/mahasiswaRoutes");
const prodiRoutes = require("./routes/prodiRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

app.use("/mahasiswa", mahasiswaRoutes);
app.use("/prodi", prodiRoutes);

// TODO: pasang errorHandler dengan app.use(errorHandler) di sini, PALING AKHIR
app.use(errorHandler);

mongoose
  .connect('mongodb+srv://tia:1234567890@cluster0.ushwpl7.mongodb.net/pawsi5a')
  .then(() => {
    console.log("Terhubung ke MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Gagal terhubung ke MongoDB:", err.message);
    process.exit(1);
  });
