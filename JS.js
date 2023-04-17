
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
var lastScroll = 0;
var header = document.getElementById("header");
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScroll) {
        // scorrimento verso il basso
        header.classList.remove("visible");
        header.classList.add("hidden");
        datahead.classList.remove("visible");
        datahead.classList.add("hidden");
    } else {
        // scorrimento verso l'alto
        header.classList.remove("hidden");
        header.classList.add("visible");
        datahead.classList.remove("hidden");
        datahead.classList.add("visible");
    }
    lastScroll = currentScroll;
});



//DATA
var oggi = new Date();
var elementoData = document.getElementById("data");
var opzioni = { month: 'long', day: 'numeric', year: 'numeric' };
var dataFormattata = oggi.toLocaleDateString('en-US', opzioni).toUpperCase();
elementoData.innerHTML = "<strong>" + dataFormattata + "</strong>";


