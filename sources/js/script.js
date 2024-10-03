
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
    } else {
        console.log(`L'album avec l'ID ${id} est déjà dans le panier.`);
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

// Fonction pour vider le panier
function viderPanier() {
    localStorage.removeItem("panier"); // Supprime l'entrée "panier" dans le localStorage
    console.log("Le panier a été vidé.");
}

// Comment out the line below, as it will clear the cart on every page load
//viderPanier();





















// const panier_data = localStorage.getItem("panier");
// if (panier_data === null) {
//     localStorage.setItem("panier", JSON.stringify([])); // Initialise le panier comme un tableau vide
// }
// function ajouterAuPanier(id, prix) {
//     // Récupérer le panier du localStorage (sous forme de tableau)
//     let panier = JSON.parse(localStorage.getItem("panier"));

//     // Vérifier si l'album avec cet ID existe déjà dans le panier
//     const albumExistant = panier.find(album => album.id === id);
    
//     if (!albumExistant) {
//         // Si l'album n'est pas déjà dans le panier, on l'ajoute
//         panier.push({ id: id, prix: prix });
//         localStorage.setItem("panier", JSON.stringify(panier)); // Sauvegarder le panier mis à jour
//         console.log(`Album avec ID ${id} ajouté au panier.`);
//     } else {
//         console.log(`L'album avec l'ID ${id} est déjà dans le panier.`);
//     }
// }

// // Fonction pour ajouter un album au panier
// // function ajouterAuPanier(id) {
// //     const panier = JSON.parse(localStorage.getItem("panier"));
// //     if (!panier.includes(id)) { // Vérifie si l'ID existe déjà dans le panier
// //         panier.push(id); // Ajoute l'ID si non présent
// //         localStorage.setItem("panier", JSON.stringify(panier)); // Sauvegarde le panier mis à jour
// //         console.log(panier);
// //     } else {
// //         console.log(`L'album avec l'ID ${id} est déjà dans le panier.`);
// //     }
// // }

// // // Ajout des événements sur les boutons d'ajout au panier
// const ajouterBtn = document.querySelectorAll(".btn-danger");

// ajouterBtn.forEach((btn) => {
//     const id = albumDetail.get("id"); // Récupère l'ID de l'album à partir de l'URL
//     btn.dataset.id = id; // Assigner l'ID de l'album à chaque bouton

//     btn.addEventListener("click", (e) => {
//         const id = Number(e.target.dataset.id);
//         ajouterAuPanier("id :" +id);
//         Swal.fire({
//             title: "Bon travail !",
//             text: "Votre Album a été ajouté avec succès.",
//             icon: "success"
//         });
//         // Vous pouvez aussi afficher un message de succès ici si nécessaire
//     });
// });

// // // Fonction pour mettre à jour le compteur du panier
// function updateCartCounter() {
//     let counter = document.getElementById("cart-counter");
//     let panier = JSON.parse(localStorage.getItem("panier")) || [];
//     counter.textContent = panier.length;  // Met à jour le compteur avec la taille du panier
// }

// // Appel de la fonction après avoir ajouté un article au panier
// document.querySelectorAll(".btn-danger").forEach((btn) => {
//     btn.addEventListener("click", () => {
//         // Exemple d'ajout au panier
//         let idAlbum = btn.dataset.id;  // Récupérer l'ID de l'album
//         ajouterAuPanier(id, prix);      // Ajouter l'album au panier
//         updateCartCounter();           // Mettre à jour le compteur du panier
//         //viderPanier();
//     });
// });
// function viderPanier() {

//     localStorage.removeItem("panier"); // Supprime l'entrée "panier" dans le localStorage
//     console.log("Le panier a été vidé.");
// }
// // // Exemple d'utilisation de la fonction
// viderPanier();

// // if (!localStorage.getItem("panier")) {
// //     localStorage.setItem("panier", JSON.stringify([]));
// // }
// // //stocker les données albums:auteur, titre, série

// // // Fonction pour ajouter l'album au panier
// // function ajouterAuPanier(album) {
// //     const panier = JSON.parse(localStorage.getItem("panier"));
// // // Vérifier si l'album existe déjà dans le panier
// // if (!panier.some(item => item.id === album.id)) {
// //     panier.push(album);
// //     localStorage.setItem("panier", JSON.stringify(panier));
// //     console.log("Album ajouté au panier :", album);
// // } else {
// //     console.log("Cet album est déjà dans le panier");
// // }

// // // Mettre à jour le compteur du panier
// // mettreAJourCompteurPanier();
// // }

// // // Fonction pour récupérer les détails de l'album et l'ajouter au panier
// // function ajouterAlbumAuPanier() {
// // const album = {
// //     id: albumDetail.get("id"),  // ID de l'album
// //     titre: albumDetail.get("titre"),
// //     auteur: albumDetail.get("auteur"),
// //     serie: albumDetail.get("serie"),
// //     prix: albumDetail.get("prix"),
// //     image: imgfichier
// // };
// // ajouterAuPanier(album);
// // }

// // // Fonction pour mettre à jour le compteur du panier dans l'interface utilisateur
// // function mettreAJourCompteurPanier() {
// // const panier = JSON.parse(localStorage.getItem("panier"));
// // const compteur = document.querySelector(".one-pastille"); // Sélectionner le compteur du panier
// // compteur.textContent = panier.length;
// // }

// // // Mettre à jour le compteur au chargement de la page
// // document.addEventListener("DOMContentLoaded", () => {
// // mettreAJourCompteurPanier();
// // });

// // // Assigner l'événement au bouton "Ajouter au panier"
// // const ajouterBtn = document.querySelector(".btn-danger");
// // ajouterBtn.addEventListener("click", ajouterAlbumAuPanier);

// // if (localStorage.getItem("panier") === null) {
// //     localStorage.setItem("panier", JSON.stringify([]));
// // }

// // Fonction pour ajouter un album au panier
const SRC_IMG = "images/";
// const ALBUM_DEFAULT_MINI = SRC_IMG + "noComicsMini.jpg";
// const ALBUM_DEFAULT = SRC_IMG + "noComics.jpg";

 const ALBUM_DEFAULT_MINI = "images/albumsMini/Spirou et Fantasio-07-Le dictateur et le champignon.jpg"; // Chemin statique
const ALBUM_DEFAULT = "mages/albums/Spirou et Fantasio-07-Le dictateur et le champignon.jpg"; // Chemin statique

const albums = new Map();
albums.set("1", { titre: "Croc vert", numero: "23", idSerie: "2", idAuteur: "8", prix: "24.50" +"€"});

const auteurs = new Map();
auteurs.set("8", { nom: "Gaudin, Danard" });

const series = new Map();
series.set("2", { nom: "Spirou et Fantasio" });

document.addEventListener("DOMContentLoaded", function () {
    const txtSerie = document.getElementById("serie");
    const txtNumero = document.getElementById("numero");
    const txtTitre = document.getElementById("titre");
    const txtAuteur = document.getElementById("auteur");
    const txtPrix = document.getElementById("prix");
    const imgAlbum = document.getElementById("album");
    const imgAlbumMini = document.getElementById("albumMini");
    const id = document.getElementById("id");

    id.addEventListener("change", function () {
        getAlbum(this);
    });

    // Charger l'album par défaut au chargement
    getAlbum({ value: "1" });

    function getAlbum(num) {
        const album = albums.get(num.value);

        if (album === undefined) {
            txtSerie.value = "";
            txtNumero.value = "";
            txtTitre.value = "";
            txtAuteur.value = "";
            txtPrix.value = 0;

            imgAlbum.src = ALBUM_DEFAULT; // Image par défaut
            imgAlbumMini.src = ALBUM_DEFAULT_MINI; // Image par défaut
        } else {
            const serie = series.get(album.idSerie);
            const auteur = auteurs.get(album.idAuteur);

            txtSerie.value = serie.nom;
            txtNumero.value = album.numero;
            txtTitre.value = album.titre;
            txtAuteur.value = auteur.nom;
            txtPrix.value = album.prix;

            const nomFic = `${serie.nom}-${album.numero}-${album.titre}`.replace(/'|!|\?|\.|"|:|\$/g, "");

            imgAlbum.src = `${SRC_IMG}albums/${nomFic}.jpg`; // Chemin de l'image
            imgAlbumMini.src = `${SRC_IMG}albumsMini/${nomFic}.jpg`; // Chemin de l'image mini
        }
    }
});

