// select buttons

const openMenu = document.querySelector('.menu-img');
const closeMenu = document.querySelector('.close-menu-img');

console.log(openMenu, closeMenu)

// select elements
const menuItesm = document.querySelector('.menu-items');
const navShaddow = document.querySelector('.nav-bg');

console.log(navShaddow, menuItesm)

window.addEventListener('click', (e)=> {
    console.log(e.target)
        // open menu
        menuItesm.classList.add('open-menu')
        navShaddow.style.zIndex = '10'
    
        // close menu
    closeMenu.addEventListener('click', ()=> {
        menuItesm.classList.add('close-menu')
        navShaddow.style.zIndex = '-10'
    })
    
})
// if(window.screen.width <= 912){
//     })
// }