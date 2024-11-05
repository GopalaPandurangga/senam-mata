
//fixed
window.onscroll = function(){
    const header= document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else{
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}


//hamburger
const hamburger = document.querySelector('#hamburger');

const navMenu = document.querySelector('#nav-menu');

 hamburger.addEventListener('click', function() {
hamburger.classList.toggle('hamburger-active');
navMenu.classList.toggle('hidden');
 });

//  klik di luar hamburger
// window.addEventListener('click', function(e){
//     if(e.target != hamburger && e.target != navMenu){
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
//     }

// } );

//  balik
const balik = document.querySelector('#balik');
balik.addEventListener('click', function(){
    balik.classList.toggle('balik-active');
});

// darkmode toggle

// const DarkToggle = document.querySelector('#dark-toggle');
// const html = document.querySelector('html');

// DarkToggle.addEventListener('click', function() {
//     if(DarkToggle.Checked){
//         html.classList.add('dark');
//     }
//     else {
//         html.classList.remove('dark');
//     }
// } );

// dark mode sesungguhnya


