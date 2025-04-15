// MATERI SWITCH CASE
// TUGAS PENGECEKAN GANJIL GENAP (PLAT NOMOR) 

console.log("-------TUGAS PENGECEKAN PLAT GANJIL GENAP-------")
let platNomor = ["A 3125 WOP" , "B 4371 BSK" , "E 1428 RIZ" , "B 2974 NVD"]

for (let i = 0; i < platNomor.length; i++) {
    let pisahinAngka = platNomor[i].match(/\d+/)
    
    if (pisahinAngka) {
        let angka = parseInt(pisahinAngka[0])
        let sisa = angka % 2

        switch (sisa) {
            case 0 :
                console.log(`Plat ${platNomor[i]} ini adalah GENAP`)
                break;
            case 1 :
                console.log(`Plat ${platNomor[i]} ini adalah GANJIL`)
                break;
            
        }

    }
}

// TUGAS PENILAIAN SISWA


console.log("-------- TUGAS PENILAIAN SISWA-------")
let siswa = [
    { nama: "Nafisa", nilai: "A" },
    { nama: "Raisa", nilai: "D" },
    { nama: "Qania", nilai: "A" },
    { nama: "Chelsea", nilai: "B" },
    { nama: "Azkiya", nilai: "B" },
    { nama: "Alvino", nilai: "C" },
    { nama: "Mahansa", nilai: "A" },
    { nama: "Fhabil", nilai: "Tidak ada" }
  ];

for (let i = 0; i < siswa.length; i++) {
    let namaSiswa = siswa[i];
    let nilaiSiswa = namaSiswa.nilai

    switch (nilaiSiswa) {
        case "A" :
            console.log(`Siswa ${namaSiswa.nama} mendapat nilai yang sangat baik`);
            break;
        case "B" :
            console.log(`Siswa ${namaSiswa.nama} mendapat nilai baik`);
            break;
        case "C" :
            console.log(`Siswa ${namaSiswa.nama} mendapat nilai cukup`);
            break;
        case "D" :
            console.log(`Siswa ${namaSiswa.nama} mendapat nilai yang kurang baik dan perlu ditingkatkan lagi`);
            break;
        default :
            console.log(`Siswa ${namaSiswa.nama} memiliki nilai yang buruk dan harus mengulang`)
    }
        
}
