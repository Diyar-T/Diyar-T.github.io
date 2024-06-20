//boucle afficher les carrés SAE
let ligne = " ";

for (let cle in SAE) {
    ligne += '<a href="../sae.html?sae=' + cle + '"><div class="rectangle">' + cle + '</div></a>'

}
document.querySelector(".lessae").innerHTML = ligne

//bouton pour retourner tout en haut
function retourEnHaut() {
    document.documentElement.scrollTop = 0;
}