// for of 
// for in 
// function statement dan argument
// let untuk function
// var untuk global
 
// function expresion
// const   hasilpangkatan = function (nilai){
//     return nilai * nilai;
// }

// foreach untuk callback function 

// function lempardadu(sisi) {
//     return Math.floor(Math.random()*sisi)+1;
    
// }

// function sapa(nama, msg) {
//     console.log('${nama} $msg');
    
// }

// mengubah array atau objek menjadi deret value argument function 
// const angka = [1,2,3,4,5]
// Math.max(...angka)

// const angka = [1,2,3,4,5,6,7,8,];
// const nama = [wilad, surya, mandala];

// const campuran = [...angka, ...nama];

// const user = {
//     nama: 'wilad',
//     email: 'wilad@email.com'
// }
// const userbaru = {...user, role: 'admin'}

// function hitung(...nomer) {
//     return nomer.reduce((total,el) => total + el);
// }

// const nama = [wilad, surya, mandala];

// const pemenang = (gold, silver, bronze) => {
//     console.log('medali emas diraih: ${gold}');
//     console.log('medali silver diraih: ${silver')';
//     console.log('bronze telah diraih: ${bronze})';
// }


// const peserta = [wilad, surya, mandala];
// cont [Gold, ...peserta] = nama;

// const user = {
//     nama: 'wilad',
//     email: 'wilad@email.com'
// }
// const{name, email} = user;

// untuk objek dalam Array
// const anime = anomes.map(({title, year, rating})=> {
//     return '${title} (${anime.year}) rating ${anime.rating}';
// });

// // Document.getElementById('banner')
// Document.getElementById()
// Document.getElementByTagName()
// Document.getElementByClassName()
// Document.querySelector()
// Document.querySelectorAll()

// const Menu = Document.getElementById('Bp')
// Menu.


//button navbar
const buttons = document.querySelectorAll(".menu button");
for (const button of buttons){
    button.addEventListener('click', function(){
        const href = this.getAttribute("href");
        window.location.href = href;
    });
}


