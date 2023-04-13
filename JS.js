
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
        pressed = true;
        menutendinaopen.style.display = "none";
        document.body.style.overflow = "auto";
        menutendinaImg.setAttribute("src", "photos/SECTION_OPEN.PNG"); // Aggiorna l'immagine quando il menu a tendina è aperto
    } else {
        pressed = false;
        menutendinaopen.style.display = "list-item";
        document.body.style.overflow = "hidden";
        menutendinaImg.setAttribute("src", "photos/SECTION.PNG"); // Ripristina l'immagine quando il menu a tendina è chiuso
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
    } else {
        // scorrimento verso l'alto
        header.classList.remove("hidden");
        header.classList.add("visible");
    }
    lastScroll = currentScroll;
});


//DATA
var oggi = new Date();
var elementoData = document.getElementById("data");
var opzioni = { month: 'long', day: 'numeric', year: 'numeric' };
var dataFormattata = oggi.toLocaleDateString('en-US', opzioni).toUpperCase();
elementoData.innerHTML = "<strong>" + dataFormattata + "</strong>";


