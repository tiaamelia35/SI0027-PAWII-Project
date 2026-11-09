// Mini Project - Pertemuan 17-18: Komponen anak, menerima data lewat props
// TODO 1: lengkapi komponen agar menerima props { nama, nim } dan menampilkannya.

function MahasiswaCard( { nama, nim }) {
  return (
    <div className="card">
      <h3>{nama}</h3>
      <p>NIM: {nim}</p>

      {/* TODO: tampilkan nama di dalam <h3> */}
      {/* TODO: tampilkan "NIM: <nim>" di dalam <p> */}
    </div>
  );
}

export default MahasiswaCard;
