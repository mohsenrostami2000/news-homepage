// select buttons
const openMenu = document.querySelector('.menu-img');
const closeMenu = document.querySelector('.close-menu-img');

// select elements
const menuItesm = document.querySelector('.menu-items');
const bgShaddow = document.querySelector('.menu-bg');

// add event to buttons
openMenu.addEventListener("click", ()=> {
    menuItesm.classList.add("open-sidebar");
    bgShaddow.style.display = "block";
    menuItesm.classList.remove("close-sidebar");
});

closeMenu.addEventListener("click", ()=> {
    menuItesm.classList.add("close-sidebar");
    bgShaddow.style.display = "none";
});
