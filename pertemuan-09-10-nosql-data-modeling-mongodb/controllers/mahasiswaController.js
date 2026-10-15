
const Mahasiswa = require("../models/mahasiswaModel");

// Mengambil semua data mahasiswa beserta data prodi
exports.getAll = async (req, res) => {
  try {
    const data = await Mahasiswa.find().populate("prodiId");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mengambil satu mahasiswa berdasarkan ID
exports.getById = async (req, res) => {
  try {
    const data = await Mahasiswa.findById(req.params.id).populate("prodiId");

    if (!data) {
      return res.status(404).json({ message: "Tidak ditemukan" });
    }

    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Menambahkan mahasiswa baru
exports.create = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.create(req.body);
    res.status(201).json(mahasiswa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Mengubah data mahasiswa
exports.update = async (req, res) => {
  try {
    const data = await Mahasiswa.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!data) {
      return res.status(404).json({ message: "Tidak ditemukan" });
    }

    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Menghapus mahasiswa
exports.remove = async (req, res) => {
  try {
    const data = await Mahasiswa.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Tidak ditemukan" });
    }

    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
