"use strict"
let catalogue = document.getElementById("catalogue");
let filtreAuteur = document.getElementById("filtreAuteur");
let filtreSerie = document.getElementById("filtreSerie");
let filtre = document.getElementById("filtre");




filtreAuteur.addEventListener("click", function(event){
    event.preventDefault();
    afficheCatalogueFiltre1();

});
filtreSerie.addEventListener("click", function(event){
    event.preventDefault();
    
    afficheCatalogueFiltre2();

});

function afficheCatalogueFiltre1() {
    const innerCatalogue = document.getElementById('innerCatalogue');
    innerCatalogue.innerHTML = ""; // Réinitialiser le contenu
    let titreFiltre = document.createElement('h3');
    titreFiltre.style.color = "white";
    titreFiltre.style.textAlign = "center";
    titreFiltre.textContent = "Liste par auteur(s) :";
    innerCatalogue.appendChild(titreFiltre);

    for (let [idAuteur, auteur] of auteurs.entries()) {
        // Afficher le nom de l'auteur
        const auteurDiv = document.createElement('div');
        auteurDiv.innerHTML = `<br><br><h1 style="color: gold; font-size:x-large;">${auteur.nom}</h1><br>`;
        innerCatalogue.appendChild(auteurDiv);

        let albumTrouve = false; // Pour vérifier s'il y a des albums pour l'auteur

        for (let [id, album] of albums.entries()) {
            if (album.idAuteur === idAuteur) {
                album.titre = album.titre.replace(/'|!|\?|\.|"|:|\$/g, ""); // Nettoyer le titre
                
                // Récupérer le nom de la série
                const serie = series.get(album.idSerie);
                const nomSerie = serie ? serie.nom : "Inconnu"; // Utiliser "Inconnu" si la série n'est pas trouvée
                
                let nomFic = `${nomSerie}-${album.numero}-${album.titre}`;
                nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, ""); // Nettoyer le nom de fichier

                const imgSrc = `images/albumsMini/${nomFic}.jpg`;


                const albumDiv = document.createElement('div');
                albumDiv.className = ` carte col-4 col-lg-3 col-xl-2 mb`//'col-6 col-md-4 col-lg-2 mb-3'; // 6 colonnes pour mobile, 4 pour tablette, 2 pour bureau
                //const imgSrc = `images/albumsMini/${nomSerie}-${album.numero}-${album.titre}.jpg`; 
                albumDiv.style.marginBottom = "20px"; 

                albumDiv.innerHTML = ` 
                
                <a href="detail_BD.html?auteur=${auteur.nom}&serie=${serie.nom}&prix=${album.prix}&numero=${album.numero}&titre=${album.titre}&id=${id}&img=${nomFic}" class="text-decoration-none">

                    <div class="card h-100 bg-secondary text-white ">
                        <img src="${imgSrc}" class="card-img-top rounded mt-2 px-3 " alt="${album.titre}"> 
                        <div class="card-body d-flex flex-column justify-content-between ">
                            <h5 class="card-title text-wrap " style="color: white;">${album.titre}</h5>
                            <p class="card-text mt-auto"  style="color: white;">${album.prix} €</p>
                            <div class="text-center d-grid gap-2 mt-auto">
                                <a  data-id="${id}" class=" ajouter btn btn-danger center-self">Ajouter</a>
                            </div>
                        </div>
                    </div>
                </a>    
                   
                    <br><br>
                `;
                
                // Ajouter la carte à la grille
                innerCatalogue.appendChild(albumDiv);
                albumTrouve = true;
            }
        }

        
    }
    document.querySelectorAll(".ajouter").forEach(button => {
        button.addEventListener('click', (event) => {
            ajouterPanier()

        });
    });
}


function afficheCatalogueFiltre2() {
    const innerCatalogue = document.getElementById('innerCatalogue');
    innerCatalogue.innerHTML = ""; // Réinitialiser le contenu
    let titreFiltre = document.createElement('h3');
    titreFiltre.style.color = "white";
    titreFiltre.style.textAlign = "center";
    titreFiltre.textContent = "Liste par série :";
    innerCatalogue.appendChild(titreFiltre);

    // Parcourir les séries et afficher les albums associés
    for (let [idSerie, serie] of series.entries()) {
        const serieDiv = document.createElement('div');
        serieDiv.className = 'mb-4';
        serieDiv.innerHTML = `<h1 style="color: gold; font-size:x-large;">${serie.nom}</h1><br>`;

        innerCatalogue.appendChild(serieDiv);

        let albumTrouve = false; // Pour vérifier s'il y a des albums pour la série
        for (let [id, album] of albums.entries()) {
            if (album.idSerie === idSerie) {
                const auteur = auteurs.get(album.idAuteur);

                // Créer le nom de fichier avec les détails de l'album
                var nomFic = `${serie.nom}-${album.numero}-${album.titre}`;
                
                // Utilisation d'une expression régulière pour supprimer les caractères non autorisés
                nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
                
                const imgSrc = `images/albumsMini/${nomFic}.jpg`;

                const albumDiv = document.createElement('div');
                 albumDiv.className = `carte col-4 col-lg-3 col-xl-2 mb`
                //albumDiv.className = 'col-6 col-md-4 col-lg-2 mb-3';
                albumDiv.style.marginBottom = "20px";

                albumDiv.innerHTML = `
                   <a href="detail_BD.html?auteur=${auteur.nom}&serie=${serie.nom}&prix=${album.prix}&numero=${album.numero}&titre=${album.titre}&id=${id}&img=${nomFic}" class="text-decoration-none">

                    <div class="card h-100 bg-secondary text-white ">
                        <img src="${imgSrc}" class="card-img-top rounded mt-2 px-3 " alt="${album.titre}"> 
                        <div class="card-body d-flex flex-column justify-content-between ">
                            <h5 class="card-title text-wrap " style="color: white;">${album.titre}</h5>
                            <p class="card-text mt-auto"  style="color: white;">${album.prix} €</p>
                            <div class="text-center d-grid gap-2 mt-auto">
                                <a  data-id="${id}" class=" ajouter btn btn-danger center-self">Ajouter</a>
                            </div>
                        </div>
                    </div>
                </a>    
                   
                    <br><br>
                `;

                innerCatalogue.appendChild(albumDiv);
                albumTrouve = true;
            }
        }

        
    }
    document.querySelectorAll(".ajouter").forEach(button => {
        button.addEventListener('click', (event) => {
            ajouterPanier()

        });
    });
}

    