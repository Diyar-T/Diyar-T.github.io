// Paramètres URL
let urlParams = new URLSearchParams(location.search);
let saeNumber = urlParams.get('sae'); //'sae' vient de sae.html?sae=SAE1.01

// Prendre les infos de l'objet SAE en fonction du nombre
let saeInfo = SAE[saeNumber];

// afficher sur la page
document.querySelector('h1').innerHTML = ('<h1>' + saeInfo.titre + '</h1>');
document.querySelector('.c').innerHTML = ('<p>Compétences: ' + saeInfo.compétences.join(', ') + '</p>');
document.querySelector('.d').innerHTML = ('<p>Description: ' + saeInfo.description + '</p>');
document.querySelector('.ac').innerHTML = ('<p>AC: ' + Object.values(saeInfo.AC).join(', ') + '</p>');
document.querySelector('.r').innerHTML = ('<p>Ressources: ' + Object.values(saeInfo.ressources).join(', ') + '</p>');
document.querySelector('.s').innerHTML = ('<p>Semestre: ' + saeInfo.semestre + '</p>');

document.querySelector('.pdf').innerHTML = ('<a href="./PDF/' + saeNumber + '.pdf">Télécharger</a>')

//bouton retourner en arriere 
function retournerEnArriere() {
    window.history.back();
}