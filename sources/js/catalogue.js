    "use strict"

        let innerCatalogue= document.querySelector("#innerCatalogue");
        let prixAlbum = document.querySelector("#prixAlbum");
        let auteurAlbum = document.querySelector("#auteurAlbum");
        let titreAlbum = document.querySelector("#titreAlbum");


    //----Creer le catalogue au log de la page (le cataloque suis l'ordre de la db)
    window.addEventListener("load",(event)=>{
        afficheCatalogue()



    })








    //-----fonctions//




    //recupére l'album




    //affiche les info de l'album

    // console.log("Liste des albums");
	// albums.forEach(album => {
        
	//     let serie = series.get(album.idSerie);
	//   let  auteur = auteurs.get(album.idAuteur);
	//     console.log(album.titre+" N°"+album.numero+" Série:"+serie.nom+" Auteur:"+auteur.nom);
	// });

    //Réduire l'affichache des BD à 20 pour les tests

    //let albumsArray = Array.from(albums.values()); // Convertit la Map en tableau
    //let albumsAffiches = albumsArray.slice(0, 20); // Prend les 20 premiers albums


    function afficheCatalogue (){

        // remplace albumsAffiches par albums pour revenir à toutees lesbd
        albums.forEach((albums,id)=>{
            
                let auteur = auteurs.get(albums.idAuteur)
                let serie = series.get(albums.idSerie)
                let titre = albums.titre;
                let prix = albums.prix;
                let num = albums.numero;

            
           
            //let idAlbums = albums
//console.log(idAlbums)

            let nomfichier = `${serie.nom}-${num}-${titre}`

            nomfichier = nomfichier.replace(/'|!|\?|\.|"|:|\$/g, "");
            

            innerCatalogue.innerHTML += `
            <div class="carte col-4 col-lg-3 col-xl-2 mb-3" id="${id}">
            <div class="card h-100 bg-secondary text-white">
                    <a href="detail_BD.html?auteur=${auteur.nom}&serie=${serie.nom}&prix=${prix}&numero=${num}&titre=${titre}&id=${id}&img=${nomfichier}"><img src="images/albumsMini/${nomfichier}.jpg" class="card-img-top rounded mt-2 px-3 " alt="..." id="imageAlbum"></a>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-wrap" id="titreAlbum">${serie.nom}-${num}-${titre}</h5>
                        <h6 class="card-subtitle mb-2 text-white" id="auteurAlbum">${auteur.nom}</h6>
                        <p class="card-text mt-auto" id="prixAlbum">${prix} €</p>
                    <div class="text-center d-grid gap-2">
                        <a href="#" class="btn btn-danger center-self">Ajouter</a>
                    </div>
                    </div>
                    </div>
            </div>`


        })
    }

