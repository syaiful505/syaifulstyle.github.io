/*JavaScript menu navbar Perintah*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

//Ketika Unhide
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})
//ketika Hide
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/* Menghilangkan Menu */