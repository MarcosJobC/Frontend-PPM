
//Menu a tendina
let button = document.getElementById("menutendina");
let menutendinaopen = document.getElementById("menutendinaopen");
let pressed = false;

button.addEventListener("click",aperturamenu);

function aperturamenu(){
    if (!pressed){
        pressed=true;
        menutendinaopen.style.display="list-item";
        // Disabilita lo scorrimento della pagina
        document.body.style.overflow = "hidden";
    }
    else{
        pressed=false;
        menutendinaopen.style.display="none";
        // Abilita lo scorrimento della pagina
        document.body.style.overflow = "auto";
    }
}







//Header
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


