const hamMenu = document.querySelector('.menu-button');
const offScreenMenu = document.querySelector('.off-screen-menu');
const download = document.getElementById('poslednjiLi');
const crnaLinija = document.querySelector(".crnaLinija");
hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    poslednjiLi.classList.toggle("hidden");
})

