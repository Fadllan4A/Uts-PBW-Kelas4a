function tampilkanHalaman(id) {
    document.querySelectorAll('.halaman').forEach(hal => hal.classList.remove('aktif'));
    document.getElementById(id).classList.add('aktif');
}
