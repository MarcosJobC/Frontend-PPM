// Selezioniamo l'immagine della lente d'ingrandimento
var lente = document.getElementById("lenteingrandimento");

// Aggiungiamo un listener per gestire l'evento di click dell'utente
lente.addEventListener("click", function() {
    // Selezioniamo la barra di ricerca
    var ricerca = document.createElement("input");
    ricerca.type = "search";
    ricerca.placeholder = "Cerca...";

    // Aggiungiamo la barra di ricerca alla pagina
    var header = document.getElementsByTagName("header")[0];
    header.appendChild(ricerca);
});

