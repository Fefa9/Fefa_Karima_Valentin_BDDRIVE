"use strict";

// Fonction pour obtenir les paramètres de l'URL
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    let bdDetails = {
        auteur: params.get("auteur"),
        serie: params.get("serie"),
        prix: params.get("prix"),
        numero: params.get("numero"),
        titre: params.get("titre")
    };
    return bdDetails;
}

// Fonction pour afficher les détails de la BD
function afficheDetailsBD() {
    const bd = getURLParams();

    // Vérifie que les données sont bien récupérées
    if (!bd.titre || !bd.serie || !bd.numero || !bd.auteur || !bd.prix) {
        console.error("Les détails de la BD ne sont pas complets !");
        return; // Arrête la fonction si les détails ne sont pas complets
    }

    // Met à jour l'image
    const bdImageDiv = document.getElementById("bdImage");
    const nomFichierImage = `${bd.serie}-${bd.numero}-${bd.titre}`.replace(/'|!|\?|\.|"|:|\$/g,"");
    bdImageDiv.innerHTML = `<img src="images/albumsMini/${nomFichierImage}.jpg" alt="Image de la BD" class="img-fluid rounded">`;

    // Met à jour les détails
    const bdDetailsDiv = document.getElementById("bdDetails");
    bdDetailsDiv.innerHTML = `
        <h2>${bd.titre}</h2>
        <p><strong>Série:</strong> ${bd.serie}</p>
        <p><strong>Numéro:</strong> ${bd.numero}</p>
        <p><strong>Auteur:</strong> ${bd.auteur}</p>
        <p><strong>Prix:</strong> ${bd.prix} €</p>
    `;
}

// Appel de la fonction pour afficher les détails de la BD
afficheDetailsBD();