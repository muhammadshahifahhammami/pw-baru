// Membuat dua input elemen secara dinamis
var inputBilangan1 = document.createElement("input");
inputBilangan1.type = "number";
inputBilangan1.id = "bilangan1";
inputBilangan1.addEventListener("change", hitungJumlah);

var inputBilangan2 = document.createElement("input");
inputBilangan2.type = "number";
inputBilangan2.id = "bilangan2";
inputBilangan2.addEventListener("change", hitungJumlah);

// Membuat elemen untuk menampilkan hasil jumlah
var hasilJumlahElement = document.createElement("p");
hasilJumlahElement.innerHTML = "Hasil Jumlah: <span id='hasilJumlah'>0</span>";

// Menambahkan elemen ke dalam body dokumen
document.body.appendChild(document.createTextNode("Bilangan 1: "));
document.body.appendChild(inputBilangan1);
document.body.appendChild(document.createElement("br"));

document.body.appendChild(document.createTextNode("Bilangan 2: "));
document.body.appendChild(inputBilangan2);
document.body.appendChild(document.createElement("br"));

document.body.appendChild(hasilJumlahElement);

// Fungsi untuk menghitung jumlah dan menampilkan hasilnya
function hitungJumlah() {
    // Ambil nilai dari input bilangan1
    var bilangan1 = document.getElementById("bilangan1").value;
    
    // Ambil nilai dari input bilangan2
    var bilangan2 = document.getElementById("bilangan2").value;
    
    // Hitung jumlah kedua bilangan
    var jumlah = parseInt(bilangan1) + parseInt(bilangan2);
    
    // Tampilkan hasil jumlah pada elemen dengan id "hasilJumlah"
    document.getElementById("hasilJumlah").innerText = jumlah;
}