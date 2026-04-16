//async-promise-medium.js
// Menggunakan Dynamic Key untuk Header 
const authHeaderName = "api_key";
const apiUrl = "https://petstore.swagger.io/v2/pet/4";

// Generator Function untuk melacak langkah proses 
function* processTracker() {
    yield "Langkah 1: Menyiapkan konfigurasi request...";
    yield "Langkah 2: Menghubungi Server Petstore...";
    yield "Langkah 3: Memproses data yang diterima...";
}

const tracker = processTracker();

// IIFE untuk menjalankan kode secara otomatis dan menjaga enkapsulasi 
(function() {
    console.log(tracker.next().value);

    const requestOptions = {
        method: 'GET',
        headers: {
            [authHeaderName]: "special_key", // Object Enhancement: Dynamic Key 
            "Content-Type": "application/json"
        }
    };

    console.log(tracker.next().value);

    // Menggunakan Fetch (Promise) tanpa async/await 
    fetch(apiUrl, requestOptions)
        .then((response) => {
            // Pengecekan status sukses (2XX) 
            if (response.status === 200) {
                return response.json(); 
            }
            throw new Error(`Server bermasalah: ${response.status}`);
        })
        .then((petData) => {
            console.log(tracker.next().value);

            // Destructuring Assignment untuk mengambil data 
            const { name, status, tags } = petData;
            
            console.log("--- HASIL API ---");
            console.log(`Nama Hewan: ${name}`);
            console.log(`Status    : ${status}`);

            // Perbaikan Logika: Cek apakah array 'tags' memiliki isi sebelum diakses
            if (tags && tags.length > 0) {
                // Mengambil ID dari elemen pertama array tags
                console.log(`Tag 1 ID  : ${tags.id}`);
            } else {
                console.log("Tag 1 ID  : Tidak ada tag tersedia.");
            }
        })
        .catch((err) => {
            // Mitigasi error jika terjadi kegagalan network atau data 
            console.error("Terjadi Kesalahan:", err.message);
        });
})();