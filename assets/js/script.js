// global variables
var screenScrollY;
var sideMenu = false;
var translateX = 0;


// elements
var navbarEl = document.getElementById('navbar');
var menuEl = document.querySelectorAll('header .menues a');
var sideMenuEl = document.getElementById('sideMenu');
var menuIconEl = document.getElementById('menuIcon');
var menuIconDivEl = document.getElementById('menuIconDiv');
var cardsEl = document.querySelectorAll('.card');
var leftArrowEl = document.getElementById('left-arrow');
var rightArrowEl = document.getElementById('right-arrow');

// changes when scroll page
document.addEventListener('scroll', () => {
    screenScrollY = window.scrollY;
    
    if(screenScrollY > 100){
        navbarEl.style.backgroundColor = '#e8e9eb';
        navbarEl.style.color = '#160647';
        navbarEl.style.top = 0;

        menuEl.forEach(menu =>{
            menu.style.color = "#160647b4";
            menu.addEventListener('mouseover', () => {
                menu.style.color = "#2F006B"
            })
            menu.addEventListener('mouseleave', () => {
                menu.style.color = "#160647"
            })
            
        })

        menuIconEl.style.color = "#160647b4"        
    }
    else{
        navbarEl.style.backgroundColor = 'transparent';
        navbarEl.style.color = '#e8e9eb';
        navbarEl.style.top = '5px';
        menuEl.forEach(menu =>{
            menu.style.color = "#cecece";
            menu.addEventListener('mouseover', () => {
                menu.style.color = "#f3f3f3";
            })
            menu.addEventListener('mouseleave', () => {
                menu.style.color = "#cecece";
            })
        })
        menuIconEl.style.color = "#bcbcbc"
    }
})

// side menu toggle
menuIconEl.addEventListener('click', () => {
    sideMenu = !sideMenu;

    if (sideMenu) {
        // menuIconDivEl.innerHTML = '<i class="fa fa-times menu-icon" id="menuIcon" aria-hidden="true"></i>';   
        sideMenuEl.style.display = 'flex';
        window.addEventListener('resize', ()=>{
            if (window.innerWidth >= 1200) {
                    sideMenuEl.style.display = 'none'
                    sideMenu = false;
            }
            else{
                sideMenuEl.style.display = 'flex';
                sideMenu = true;
            }
        })
        
    }
    else{
        // menuIconDivEl.innerHTML = '<i class="fa fa-bars menu-icon" id="menuIcon" aria-hidden="true"></i>'
        sideMenuEl.style.display = 'none';
    }
})

// function for explore more button
function exploreMore() {
    window.scrollTo({
        top: window.innerHeight + window.screenScrollY,
        behavior: 'smooth'
    }) 
}

// distination section right left arrow function
leftArrowEl.addEventListener('click', ()=>{
    translateX += 410
    if (translateX >= 820) {
        leftArrowEl.style.display = 'none';       
    }
    else if (translateX < 900) {
        leftArrowEl.style.display = 'block';
    }
    cardsEl.forEach(card => {
        card.style.transform = "translateX(" + translateX + "px)";
        
    })
    
})

rightArrowEl.addEventListener('click', ()=>{
    translateX -= 410
    if (translateX == -820) {
        rightArrowEl.style.display = 'none';
    }
    else{
        rightArrowEl.style.display = 'flex';
    }
    cardsEl.forEach(card => {
        card.style.transform = "translateX(" + translateX + "px)";
    })

    
})




