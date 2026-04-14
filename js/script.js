let sepet = [];

function sepeteEkle(isim, fiyat) {
    sepet.push({ isim, fiyat: Number(fiyat) });
    document.getElementById('sepet-sayi').textContent = sepet.length;
}

function sepetAc() {
    let icerik = document.getElementById('sepet-icerik');
    let toplam = 0;

    if (sepet.length === 0) {
        icerik.innerHTML = '<p style="color:#777;">Sepetiniz boş.</p>';
    } else {
        icerik.innerHTML = sepet.map((urun, index) =>
            `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <span>${urun.isim}</span>
                <div>
                    <span style="font-weight:bold;">₺${urun.fiyat}</span>
                    <button onclick="urunSil(${index})" style="margin-left:10px; background:#e74c3c; color:white; border:none; border-radius:5px; padding:3px 8px; cursor:pointer;">✕</button>
                </div>
            </div>`
        ).join('');
        toplam = sepet.reduce((acc, urun) => acc + urun.fiyat, 0);
    }

    document.getElementById('toplam-fiyat').textContent = toplam;
    document.getElementById('sepet-popup').style.display = 'block';
}

function sepetKapat() {
    document.getElementById('sepet-popup').style.display = 'none';
}

function sepetTemizle() {
    sepet = [];
    document.getElementById('sepet-sayi').textContent = 0;
    document.getElementById('sepet-icerik').innerHTML = '<p style="color:#777;">Sepetiniz boş.</p>';
    document.getElementById('toplam-fiyat').textContent = 0;
}

function urunSil(index) {
    sepet.splice(index, 1);
    document.getElementById('sepet-sayi').textContent = sepet.length;
    sepetAc();
}

function filtrele(kategori) {
    const kartlar = document.querySelectorAll('.card');
    kartlar.forEach(kart => {
        if (kategori === 'hepsi' || kart.dataset.category === kategori) {
            kart.style.display = 'block';
        } else {
            kart.style.display = 'none';
        }
    });
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}