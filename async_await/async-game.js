//async-game.js
// Fungsi asinkron untuk simulasi memuat profil pemain
async function loadPlayerGame() {
    console.log("Memulai loading game..."); // 

    try {
        // 'await' memastikan kita menunggu data profil sebelum lanjut
        const profile = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const data = await profile.json(); // 
        
        console.log(`Selamat datang kembali, ${data.name}!`);
    } catch (error) {
        console.log("Gagal memuat profil, cek koneksi internet."); // Mitigasi error 
    }
}

loadPlayerGame();