// select buttons
const openMenu = document.querySelector('.menu-img');
const closeMenu = document.querySelector('.close-menu-img');

// select elements
const menuItesm = document.querySelector('.menu-items');
const bgShaddow = document.querySelector('.menu-bg');

window.addEventListener('DOMContentLoaded', () => {
    openSideBar();
    closeSideBar();
    checkScreenSize();
});

// open side-bar
function openSideBar() {
    
    openMenu.addEventListener("click", ()=> {
        menuItesm.classList.add("open-sidebar");
        bgShaddow.style.display = "block";
        menuItesm.classList.remove("close-sidebar");
    });
};

// close side-bar
function closeSideBar() {
    closeMenu.addEventListener("click", ()=> {
        menuItesm.classList.add("close-sidebar");
        bgShaddow.style.display = "none";
    });
}

// hide sidebar menu on tablet screen
function checkScreenSize() {
    window.addEventListener('resize', () => {
        if (screen.width > 767) {
            menuItesm.classList.remove('open-sidebar');
            menuItesm.classList.remove('close-sidebar');
            bgShaddow.style.display = "none";
        }
    });
}
