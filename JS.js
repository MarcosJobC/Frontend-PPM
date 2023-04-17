
//MENU A TENDINA
let button = document.getElementById("menutendina");
let button1 = document.getElementById("menutendina1");
let menutendinaopen = document.getElementById("menutendinaopen");
let pressed = menutendinaopen.style.display === "none";
let menutendinaImg = document.getElementById("menutendina");

button.addEventListener("click", aperturamenu);
button1.addEventListener("click", aperturamenu);
function aperturamenu() {
    if (!pressed) {
        menutendinaopen.style.display = "none";
        document.body.style.overflow = "auto";
        pressed = true;
    } else {
        menutendinaopen.style.display = "list-item";
        document.body.style.overflow = "hidden";
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


