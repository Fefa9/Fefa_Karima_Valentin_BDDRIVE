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
      



    // fonction generation du menu dans toutes div (de class="navigation")
    function genererMenu(div){
        let navigationHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark arizonia-regular">
                <div class="container-fluid"> 
                <h1>BD Kiosque</h1>
                ${boutonCompte}
                <a class="nav-link text-light" style="font-size:larger;" href="#">
                    <i class="bi bi-cart"></i>
                </a>
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
                        <a class="nav-link" href="aide.html">Aide / </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="mentions_légales.html">Mentions légales</a>
                        </li>
                    </ul>
                </div>
                <form class="d-flex">
                    <input class="form-control me-2" type="search"  id="idRecherche" placeholder="Auteur,titre,ISBN" aria-label="Search">
                    <button class="btn btn-light" type="submit">
                        <i class="bi bi-search"></i>
                      </button>
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
                          <a class="text-light" href="#">Mot de passe oublié</a>
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
              `;
          div.innerHTML = navigationHTML;


          //---Abonner le bouton connexion/deconnexion
        let connexion = document.querySelector("#connexion");
        let deconnexion = document.querySelector("#deconnexion")


        if (deconnexion){
        deconnexion.addEventListener("click",(event)=>{
        localStorage.setItem("Authentifie",false);
        localStorage.removeItem("CompteConnecte")
        location.reload()
        },)
      }


      if (connexion) {
        connexion.addEventListener("click",(event)=>{
          //----recuperer les comptes 
        var liste = localStorage.getItem("listeCompte")
        if(liste){
          let Authentifie = false
          var tCompte = liste.split(";");
          for (let i in tCompte){
            var compteJSON = JSON.parse(tCompte[i])
            //var compte = new Compte (compteJSON.mail, compteJSON.prenom, compteJSON.nom, compteJSON.mdp);
//console.log(compte.mail)//{"mail":"Jesuispilote@gmail.com","prenom":"Pilote","nom":"Dananas","mdp":"AZERTy@19999"}
//console.log(compteJSON.mail)

        let form = document.querySelector('#formulaire')
        if(form.checkValidity()){

        let username = document.querySelector("#username").value;
//console.log(username);
        let password = document.querySelector('#password').value;
//console.log(password)
            if (username === compteJSON.mail && password === compteJSON.mdp) {
              Authentifie = true
              console.log(compteJSON)
              console.log("compteJSON")
              localStorage.setItem("Authentifie",true);
              let compteJSONSerial = '{"mail":"'+ compteJSON.mail +'","prenom":"'+ compteJSON.prenom +'","nom":"'+ compteJSON.nom +'","mdp":"'+ compteJSON.mdp +'"}'
              console.log(compteJSONSerial)
              localStorage.setItem("CompteConnecte",compteJSONSerial)
            console.log("Connexion reussi (Le compte existe");
            window.location.href = "index.html"
            break;
            }
        } else {
          form.reportValidity()
        } 
            if (!Authentifie){
              let erreurConnexion = document.querySelector("#erreur");
              erreurConnexion.innerHTML="Mail ou mot de passe incorrect"
              console.log("Connexion non reussi (Le compte n'existe pas)")
            }
          }
          
        }
        
      







        },)
                        }
                      }
        document.addEventListener('DOMContentLoaded', function() {
            let menuDivs = document.querySelectorAll('.navigation'); 
            menuDivs.forEach(div => {
        genererMenu(div);  
            });
        });

        




        

        