    "use strict"
    //localStorage.setItem("Authentifie",false);

    var connecte = localStorage.getItem("Authentifie")
    JSON.parse(connecte)
    console.log(connecte)
    let boutonCompte = ""
    if (!connecte || connecte === "false") {
      boutonCompte = `<button type="button" data-bs-toggle="modal" data-bs-target="#ModalForm" class="btn btn-lg btn-dark"><span class="bi bi-person"></span></button>`
      console.log(boutonCompte)
    }
    if (connecte === "true") {
      boutonCompte = `<button type="button" id="deconnexion" class="btn btn-lg btn-dark"><span class="bi bi-arrow-bar-right"></span></button>`

      console.log(boutonCompte)
    }


    //Fonction Ajouter (class="ajouter") le bouton ajouter adds les ids des bd au local storage. Elles seront recupérés plus tard par un click sur le panier
    function ajouterPanier() {
      let bdId = event.target.getAttribute('data-id'); // Récupère l'ID du produit
      console.log(bdId);
      
      // On récupère le contenu du panier
      let tpanier = localStorage.getItem("panier");
      console.log(tpanier);
      
      if (tpanier) {
          // Si le panier existe, on parse pour obtenir un tableau 
          tpanier = JSON.parse(tpanier);
          
          // Vérifier si l'article est déjà dans le panier
          let item = tpanier.find(article => article.id == bdId);
          
          if (item) {
              // Si l'article existe déjà, on +1 la quantité
              item.quantity += 1;
          } else {
              // Sinon, on ajoute un nouvel article au panier
              tpanier.push({ id: bdId, quantity: 1 });
          }
  
          console.log(tpanier);
          // On update le panier 
          localStorage.setItem("panier", JSON.stringify(tpanier));
          
      } else {
          // Si le panier n'existe pas, on crée un nouveau tableau 
          tpanier = [{ id: bdId, quantity: 1 }];
          localStorage.setItem("panier", JSON.stringify(tpanier));
          console.log(tpanier);
      }
  }

    // fonction generation du menu dans toutes div (de class="navigation")
    function genererMenu(div) {
      let navigationHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark arizonia-regular"> 
                <div class="container-fluid"> 
                <h1>BD Kiosque</h1>
                ${boutonCompte}
                <button class="btn btn-lg btn-dark" id="panier" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-cart"></i></button>

                </div>
            </nav> 
            <div class="ligne-rouge fixed-top" style="top: 49px;"></div>
        
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"  style="top: 50px; font-size: 30px;">
                <div class="container-fluid"> 
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse arizonia-regular" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="catalogue.html">Catalogue / </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="contact.html">Aide / </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="mentionslegales.html">Mentions légales</a>
                        </li>
                    </ul>
                </div>
                <form class="d-flex">
                    <input class="form-control me-2" type="search"  id="idRecherche" placeholder="Auteur,titre,ISBN" aria-label="Search">
                    <a href="WIP.html" class="btn btn-light" type="submit"><i class="bi bi-search"></i></a>
                </form>
                </div>
              </nav>

            <div class="modal fade" id="ModalForm" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                  <!-- Login Form -->
                  <form action="" class="bg-dark" id="formulaire">
                    <div class="">
                    <div class="modal-header">
                      <h5 class="modal-title text-light">Connexion</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3 form-group">
                          <label for="Username" class="text-light">Mail<span class="text-danger">*</span></label>
                          <input type="text" name="username" class="form-control" id="username" placeholder="JaneDoe@gmail.com" required>
                      </div>
          
                      <div class="mb-3 form-group">
                          <label for="Password" class="text-light">Mot de passe<span class="text-danger">*</span></label>
                          <input type="password" name="password" class="form-control" id="password" required>
                      </div>
                      <div class="mb-1">
                          <a class="text-light" href="WIP.html">Mot de passe oublié</a>
                          <a  href="inscription.html" class="float-end text-light">Inscription</a>
                      </div>
                    </div>
                    <div id="erreur" style="color: red; text-align: center;"></div>
                    <div class="modal-footer pt-3">                  
                      <button type="button" id="connexion" class="btn btn-danger mx-auto w-100">Login</button>
                    </div>
                    <p class="text-center"></p> 
                    </div>
                </form>
              </div>
            </div>
          </div>


          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title " id="offcanvasRightLabel">panier</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
            <div class="offcanvas-body" id="cartevide" style="background: #000;">


                  
              </div>
    </div>
              `;
      div.innerHTML = navigationHTML;


      //---Abonner le bouton connexion/deconnexion
      let connexion = document.querySelector("#connexion");
      let deconnexion = document.querySelector("#deconnexion")


      if (deconnexion) {
        deconnexion.addEventListener("click", (event) => {
          localStorage.setItem("Authentifie", false);
          localStorage.removeItem("CompteConnecte")
          location.reload()
        }, )
      }


      if (connexion) {
        connexion.addEventListener("click", (event) => {
          //----recuperer les comptes 
          var liste = localStorage.getItem("listeCompte")
          if (liste) {
            let Authentifie = false
            var tCompte = liste.split(";");
            for (let i in tCompte) {
              var compteJSON = JSON.parse(tCompte[i])
              //var compte = new Compte (compteJSON.mail, compteJSON.prenom, compteJSON.nom, compteJSON.mdp);
              //console.log(compte.mail)//{"mail":"Jesuispilote@gmail.com","prenom":"Pilote","nom":"Dananas","mdp":"AZERTy@19999"}
              //console.log(compteJSON.mail)

              let form = document.querySelector('#formulaire')
              if (form.checkValidity()) {

                let username = document.querySelector("#username").value;
                //console.log(username);
                let password = document.querySelector('#password').value;
                //console.log(password)
                if (username === compteJSON.mail && password === compteJSON.mdp) {
                  Authentifie = true
                  console.log(compteJSON)
                  console.log("compteJSON")
                  localStorage.setItem("Authentifie", true);
                  let compteJSONSerial = '{"mail":"' + compteJSON.mail + '","prenom":"' + compteJSON.prenom + '","nom":"' + compteJSON.nom + '","mdp":"' + compteJSON.mdp + '"}'
                  console.log(compteJSONSerial)
                  localStorage.setItem("CompteConnecte", compteJSONSerial)
                  console.log("Connexion reussi (Le compte existe");
                  window.location.href = "index.html"
                  break;
                }
              } else {
                form.reportValidity()
              }
              if (!Authentifie) {
                let erreurConnexion = document.querySelector("#erreur");
                erreurConnexion.innerHTML = "Mail ou mot de passe incorrect"
                console.log("Connexion non reussi (Le compte n'existe pas)")
              }
            }

          }
        }, )
      }




      // Creation des cartes dans le panier 

      let panier = document.querySelector("#panier");
      if (panier) {
      panier.addEventListener("click", (event) => {
      let cartevide = document.querySelector("#cartevide");
      cartevide.innerHTML = "";

    // Recup dans le localstorage le tableau
    let tpanier = localStorage.getItem("panier");

    if (tpanier) {
      tpanier = JSON.parse(tpanier);

      // On retrouve les infos des BD dans les datas via les ids du tableau
      tpanier.forEach((idAlbum, index) => {
        let album = albums.get(idAlbum.id); // recup  album avec idAlbum.id
        let titre = album.titre;
        let prix = parseFloat(album.prix);
        let num = album.numero;
        let serie = series.get(album.idSerie);

        let nomfichier = `${serie.nom}-${num}-${titre}`
        nomfichier = nomfichier.replace(/'|!|\?|\.|"|:|\$/g, "");

        console.log(serie, titre, prix, num);

        // Créer le html de la carte et on l'ajoute
        cartevide.innerHTML += `
          <div class="card-sm mb-3 bg-dark text-white" style="max-width: 540px;">
            <div class="row">
              <div class="col-md-4">
                <img src="images/albumsMini/${nomfichier}.jpg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${titre}</h5>
                  <p class="card-text">${serie.nom}</p>
                  <p class="card-text">${num}</p>
                  <select class="form-select-sm" aria-label="Select quantity" data-id="${idAlbum.id}" id="select-${index}" onchange="changeQuantity(${index})">
                    ${[...Array(10).keys()].map(i => `<option value="${i + 1}" ${idAlbum.quantity === i + 1 ? 'selected' : ''}>${i + 1}</option>`).join('')} 
                  </select>
                </div>
              </div>
            </div>
            <div class="card-footer row">
              <div class="col">
                <div class="card-title" id="price-${idAlbum.id}" data-base-price="${prix}">${(prix * idAlbum.quantity).toFixed(2)}</div>
              </div>
              <div class="col text-end">
                <button type="button" class="btn-close-white" data-id="${idAlbum.id}" aria-label="Close">
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          </div>`;

        
      });

      // Creer l'addEventListener pour le changement de quantité
      

      // Supprimer un article dans la liste et le localstorage
      cartevide.addEventListener('click', function (e) {
        if (e.target.closest('.bi-trash3')) {
          const button = e.target.closest('.btn-close-white');
          let itemId = button.getAttribute('data-id'); 
          console.log("supprimer l'article avec l'id:", itemId);

          
          let itemIndex = tpanier.findIndex(item => item.id === itemId);
          if (itemIndex !== -1) {
            
            tpanier.splice(itemIndex, 1);
            localStorage.setItem("panier", JSON.stringify(tpanier));

            
            button.closest('.card-sm').remove();
          }
        }
      });
    }
  });
}
          

    }
    document.addEventListener('DOMContentLoaded', function () {
      let menuDivs = document.querySelectorAll('.navigation');
      menuDivs.forEach(div => {
        genererMenu(div);
      });
    });


    // fonction Change la quantité et ajuste le prix
    function changeQuantity(index){
        let value = document.getElementById(`select-${index}`).value;
        let tpanier = localStorage.getItem("panier");
        tpanier = JSON.parse(tpanier);

        console.log(tpanier);
        let album = albums.get(tpanier[index].id); // recup  album avec idAlbum.id
        console.log(album);
        console.log(index);
        console.log(tpanier[index].id);


        let prix = parseFloat(album.prix);

        const quantity = parseInt(value);
        //console.log(`select-${index}`);
        console.log(quantity);
        const priceElement = document.getElementById(`price-${tpanier[index].id}`);
        priceElement.textContent = (prix * quantity).toFixed(2); // Change le prix
        

        // Update la quantité dans le localStorage
        tpanier[index].quantity = quantity; // 
        localStorage.setItem("panier", JSON.stringify(tpanier)); 
      

    }