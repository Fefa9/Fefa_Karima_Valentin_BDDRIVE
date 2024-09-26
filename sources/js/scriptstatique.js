// Définit l'ID de l'album à récupérer
let idAlbum = "19";

let album = albums.get(idAlbum);
console.log('Album:', album);


if (album) {
    let serie = series.get(album.idSerie);
    let auteur = auteurs.get(album.idAuteur);
    console.log('Série:', serie); 
    console.log('Auteur:', auteur); 
    if (serie && auteur) {
        
        let nomfichier = `${serie.nom}-${album.numero}-${album.titre}`.replace(/'|!|\?|\.|"|:|\$/g, "");
        let imgUrl = `images/albums/${nomfichier}.jpg`; // URL de l'image
        console.log('Image URL:', imgUrl); // Vérifie si l'URL de l'image est correcte

        // Sélectionne le conteneur principal où sera affichée la bande dessinée
        let divBandeDessinee = document.getElementById("bande-dessinee");

        if (divBandeDessinee) {
            // Crée un conteneur pour la bande dessinée avec des classes Bootstrap pour le style
            let bandeDessineeContainer = document.createElement("div");
            bandeDessineeContainer.classList.add("bande-dessinee-container", "d-flex", "flex-column", "flex-md-row", "mt-4");

            // Crée l'élément image
            let img = document.createElement("img");
            img.src = imgUrl; // Définit la source de l'image
            img.alt = `Image de l'album ${album.titre}`;
            img.classList.add("album-image", "img-fluid");

            // Crée un conteneur pour les détails de l'album
            let divInfos = document.createElement("div");
            divInfos.classList.add("album-details", "ml-md-4", "mt-4");

            // Crée des éléments pour afficher les informations de l'album
            let spanTitre = document.createElement("span");
            let spanNumeroAlbum = document.createElement("span");
            let spanSerie = document.createElement("span");
            let spanAuteur = document.createElement("span");
            let spanPrix = document.createElement("span");

            // Remplit les éléments avec les données correspondantes
            spanTitre.textContent = album.titre;
            spanNumeroAlbum.textContent = "Numéro : " + album.numero;
            spanSerie.textContent = `Série : ${serie.nom}`;
            spanAuteur.textContent = `Auteur : ${auteur.nom}`;
            spanPrix.textContent = `Prix : ${album.prix} €`;

            // Applique des styles supplémentaires aux éléments
            spanTitre.classList.add("font-weight-bold", "titre-personnalise");
            spanAuteur.classList.add("text-danger"); // Couleur rouge pour le nom de l'auteur

            // Ajoute les informations au conteneur des détails
            divInfos.appendChild(spanTitre);
            divInfos.appendChild(document.createElement("br"));
            divInfos.appendChild(spanNumeroAlbum);
            divInfos.appendChild(document.createElement("br"));
            divInfos.appendChild(spanSerie);
            divInfos.appendChild(document.createElement("br"));
            divInfos.appendChild(spanAuteur);
            divInfos.appendChild(document.createElement("br"));

            // Crée et ajoute un paragraphe "Lorem Ipsum"
            let paragraphe = document.createElement("p");
            paragraphe.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            paragraphe.classList.add("lorem-ipsum");
            divInfos.appendChild(paragraphe);

            divInfos.appendChild(document.createElement("br"));
            divInfos.appendChild(spanPrix);

            // Ajoute l'image et les informations dans le conteneur principal
            bandeDessineeContainer.appendChild(img);
            bandeDessineeContainer.appendChild(divInfos);

            // Ajoute le conteneur de la bande dessinée au div principal dans le document
            divBandeDessinee.appendChild(bandeDessineeContainer);

            // Crée et ajoute le bouton "Ajouter au panier"
            let divButton = document.createElement("div");
            divButton.classList.add("d-flex", "justify-content-center", "mt-3");
            let button = document.createElement("button");
            button.type = "button";
            button.classList.add("btn", "btn-danger", "btn-lg");
            button.textContent = "Ajouter au panier";
            button.onclick = () => { window.location.href = 'panier.html'; }; // Redirection vers la page panier lors du clic

            divButton.appendChild(button); // Ajoute le bouton au conteneur
            divInfos.appendChild(divButton); // Ajoute le conteneur du bouton en bas des détails

        } else {
            console.error("Le conteneur 'bande-dessinee' n'existe pas dans le DOM.");
        }

    } else {
        // Affiche une erreur dans la console si la série ou l'auteur n'existe pas
        console.error("La série ou l'auteur n'existe pas.");
    }

} else {
    // Affiche une erreur dans la console si l'album n'existe pas
    console.error("L'album n'existe pas.");
}
