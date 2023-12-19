// Mendapatkan input dari pengguna
var jumlahRupiah = prompt("Masukkan jumlah uang dalam Rupiah:");

// Konversi jumlah uang dalam Rupiah ke Dollar dengan kurs 1$ = 14.650 Rupiah
var kursDollar = 14650;
var jumlahDollar = jumlahRupiah / kursDollar;

// Menampilkan hasil konversi
console.log("Jumlah uang dalam Rupiah: " + jumlahRupiah + " IDR");
console.log("Jumlah uang dalam Dollar: $" + jumlahDollar.toFixed(2));