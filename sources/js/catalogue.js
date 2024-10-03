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

    function afficheCatalogue (){
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
            <div class="carte col-6 col-lg-3 col-xl-2 mb-3" id="${id}">
            <div class="card h-100 bg-secondary text-white">
                    <a href="detail_BD.html?auteur=${auteur.nom}&serie=${serie.nom}&prix=${prix}&numero=${num}&titre=${titre}&id=${id}&img=${nomfichier}"><img src="images/albumsMini/${nomfichier}.jpg" class="card-img-top rounded mt-2 px-3 " alt="..." id="imageAlbum"></a>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-wrap" id="titreAlbum">${serie.nom}-${num}-${titre}</h5>
                        <h6 class="card-subtitle mb-2 text-white" id="auteurAlbum">${auteur.nom}</h6>
                        <p class="card-text mt-auto" id="prixAlbum">${prix} €</p>
                    <div class="text-center d-grid gap-2">
                        <a data-id="${id}" class="btn btn-danger center-self ajouter">Ajouter</a>
                    </div>
                    </div>
                    </div>
            </div>`
        })
    

    document.querySelectorAll(".ajouter").forEach(button => {
        button.addEventListener('click', (event) => {
            ajouterPannier()

//             let bdId = event.target.getAttribute('data-id'); // Récupère l'ID de l'utilisateur
// console.log(bdId);
//             //On recupere le contenue du pannier
            
//             let tPannier = localStorage.getItem("pannier");
// console.log(tPannier)
//             if(tPannier){
//                 tPannier = JSON.parse(tPannier);
//             // On ajoute le nouvelle article
//                 tPannier.push(bdId)
//             // On On push le nouveau pannier
//                 localStorage.setItem("pannier",JSON.stringify(tPannier))
//         }else { 
//             tPannier = [];
//             tPannier.push(bdId);
//             localStorage.setItem("pannier", JSON.stringify(tPannier));
//         }
        });
    });
    }