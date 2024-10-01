"use strict";

let txtSerie = document.getElementById("serie");
let txtNumero = document.getElementById("numero");
let txtTitre = document.getElementById("titre");
let txtAuteur = document.getElementById("auteur");
let txtPrix = document.getElementById("prix");
let imgAlbum = document.getElementById("album");
let albumDetail = new URLSearchParams(window.location.search);
// Récupère et affiche les détails dans les éléments HTML
txtAuteur.innerHTML = albumDetail.get("auteur");
txtTitre.innerHTML = albumDetail.get("titre");
txtNumero.innerHTML = albumDetail.get("numero");
txtSerie.innerHTML = albumDetail.get("serie");
txtPrix.innerHTML = `${albumDetail.get("prix")} €`;

// Récupère l'image si elle est définie dans l'URL
const imgfichier = albumDetail.get("img");
console.log("Nom de fichier image : ", imgfichier);
if (imgfichier) {
    imgAlbum.src = `images/albums/${imgfichier}.jpg`;  // Vérifie que le chemin est correct
    console.log(imgfichier);
} else {
    console.error("L'image n'a pas pu être trouvée dans l'URL");
}
// Sauvegarde dans le local storage
// Initialiser le panier s'il n'existe pas déjà
const panier_data = localStorage.getItem("panier");
if (panier_data === null) {
    localStorage.setItem("panier", JSON.stringify([])); // Initialise le panier comme un tableau vide
}
// Fonction pour ajouter un album au panier
function ajouterAuPanier(id, prix) {
    // Récupérer le panier du localStorage (sous forme de tableau)
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    // Vérifier si l'album avec cet ID existe déjà dans le panier
    const albumExistant = panier.find(album => album.id === id);
    if (!albumExistant) {
        // Si l'album n'est pas déjà dans le panier, on l'ajoute
        panier.push({ id: id, prix: prix });
        localStorage.setItem("panier", JSON.stringify(panier)); // Sauvegarder le panier mis à jour
        console.log(`Album avec ID ${id} et prix ${prix} ajouté au panier.`);
        // Afficher une notification SweetAlert2
        Swal.fire({
            title: 'Ajouté au panier !',
            text: `L'album a été ajouté avec succès au panier.`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else {
        console.log(`L'album avec l'ID ${id} est déjà dans le panier.`);
        // Optionnel : tu peux afficher une alerte ici aussi
        Swal.fire({
            title: 'Déjà dans le panier',
            text: `Cet album est déjà dans votre panier.`,
            icon: 'info',
            confirmButtonText: 'OK'
        });
    }
}
// Écouter le clic sur le bouton "Ajouter au panier"
document.getElementById("btn-panier").addEventListener("click", () => {
    // Récupérer l'ID de la BD depuis l'URL ou une variable
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id'); // Assurez-vous que l'ID est passé dans l'URL
    // Récupérer le prix à partir du texte dans l'élément
    let txtPrix = document.getElementById("prix");
    let prix = parseFloat(txtPrix.textContent.replace("€", "").trim()); // Extraire la valeur du prix
    // Appel de la fonction pour ajouter au panier
    ajouterAuPanier(id, prix);
});

// filter les bd
// function getQueryParameter(name) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(name);
// }
// if (albumListDiv.innerHTML === '') {
//     albumListDiv.innerHTML = '<p>Aucun résultat trouvé.</p>';
// }
// // Sélectionner le formulaire
// const searchForm = document.getElementById('searchForm');

// // Abonner l'événement 'submit' au formulaire
// searchForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire

//     // Récupérer la valeur saisie dans le champ de recherche
//     const query = searchForm.querySelector('input[name="query"]').value;

//     // Rediriger vers la page de recherche avec la requête dans l'URL
//     window.location.href = `recherche.html?query=${encodeURIComponent(query)}`;
// });















