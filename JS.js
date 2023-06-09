
//MENU A TENDINA
let button = document.getElementById("menutendina");
let menutendinaopen = document.getElementById("menutendinaopen");
let pressed = menutendinaopen.style.display === "none";
let menutendinaImg = document.getElementById("menutendina");
button.addEventListener("click", aperturamenu);

function aperturamenu() {
    if (!pressed) {
        menutendinaopen.style.display = "none";
        document.body.style.overflow = "auto";
        menutendinaImg.src = "photos/SECTION.PNG";
        pressed = true;
    } else {
        menutendinaopen.style.display = "list-item";
        document.body.style.overflow = "hidden";
        menutendinaImg.src = "photos/SECTION_OPEN.PNG";
        pressed = false;
    }
}
let button1 = document.getElementById("menutendina1");
let menutendina1Img = document.getElementById("menutendina1");
button1.addEventListener("click", aperturamenu1);
function aperturamenu1() {
    if (!pressed) {
        menutendinaopen.style.display = "none";
        document.body.style.overflow = "auto";
        menutendina1Img.src = "photos/SECTION_MINI.PNG";
        pressed = true;
    } else {
        menutendinaopen.style.display = "list-item";
        document.body.style.overflow = "hidden";
        menutendina1Img.src = "photos/SECTION_MINI_OPEN.PNG";
        pressed = false;
    }
}




//HEADER
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
let isHeaderVisible = true;

const dataheaad = document.querySelector('datahead');
let isDataVisible = true;

let prevScrollY = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollY = window.pageYOffset;

  if (currentScrollY > prevScrollY && currentScrollY > headerHeight && isHeaderVisible) {
    // scroll verso il basso
    datahead.classList.add('hidden');
    isDataVisible = false;
    header.classList.add('hidden');
    isHeaderVisible = false;
  } else if (currentScrollY < prevScrollY && !isHeaderVisible) {
    // scroll verso l'alto
    datahead.classList.add('hidden');
    isDataVisible = true;
    header.classList.remove('hidden');
    isHeaderVisible = true;
  }

  prevScrollY = currentScrollY;
});




//DATA
var oggi = new Date();
var elementoData = document.getElementById("data");
var opzioni = { month: 'long', day: 'numeric', year: 'numeric' };
var dataFormattata = oggi.toLocaleDateString('en-US', opzioni).toUpperCase();
elementoData.innerHTML = "<strong>" + dataFormattata + "</strong>";


//COOKIE
function acceptCookies() {
    document.cookie = "acceptedCookies=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";
    document.querySelector('.cookie-banner').style.display = 'none';
}
function declineCookies() {
    document.cookie = "acceptedCookies=false; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";
    document.querySelector('.cookie-banner').style.display = 'none';
}
function checkCookies() {
    if (document.cookie.indexOf("acceptedCookies") < 0) {
        document.querySelector('.cookie-banner').style.display = 'block';
    } else if (getCookie("acceptedCookies") === "false") {
        document.querySelector('.cookie-banner').style.display = 'none';
    }
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
checkCookies();



//Barra di ricerca
const searchBar = document.querySelector('#search-bar');
searchBar.style.display = 'none';
const lenteingrandimento = document.querySelector('#lenteingrandimento');

lenteingrandimento.addEventListener('click', () => {
    if (searchBar.style.display === 'block') {
        searchBar.style.display = 'none';
    } else {
        searchBar.style.display = 'block';
    }
});

//Schermata disclaimer
const overlay = document.querySelector('.overlay');
overlay.addEventListener('transitionend', () => {
    overlay.remove();
});
setTimeout(() => {
    overlay.style.opacity = 0;
}, 1250);
