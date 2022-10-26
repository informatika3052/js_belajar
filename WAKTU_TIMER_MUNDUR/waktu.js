// Menghitung Waktu Mundur


const tanggalTujuan = new Date('May 11 , 2020 10:00:00').getTime();



const hitungMundur = setInterval(function () {


    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;


    const hitungHari = Math.floor(selisih / (1000 * 60 * 60 * 24));

    const hitungJam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    const hitungMenit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));

    const hitungDetik = Math.floor(selisih % (1000 * 60) / (1000));

    const teks = document.getElementById('teks');

    teks.innerHTML = 'Waktu anda tinggal : ' + hitungHari + ' hari ' + hitungJam + ' jam ' + hitungMenit + ' menit ' + hitungDetik + ' detik';

    console.log(selisih);
    console.log(hitungHari);
    console.log(hitungJam);

});