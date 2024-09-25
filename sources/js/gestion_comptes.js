"use strict"
 // Récupérer les éléments HTML
 let inputMail = document.getElementById("idMail");
 let inputPrenom = document.getElementById("idPrenom");
 let inputNom = document.getElementById("idNom");
 let inputMdp = document.getElementById("idMdp");
 let btnValider = document.getElementById("btnValider");
 let formulaire = document.getElementById("idForm");
 let divErr = document.getElementById("idErr");

 // Abonner les boutons HTML
 formulaire.addEventListener("submit", function(event){
    event.preventDefault();

    let mail = inputMail.value;
    let prenom = inputPrenom.value;
    let nom = inputNom.value;
    let mdp = inputMdp.value;

    divErr.innerHTML="";
    try{
        let compte = new Compte(mail,prenom,nom,mdp);

    } catch (err){
        divErr.innerHTML = err.message;
    }


 });
 
 
 
 //btnValider.addEventListener("click", recupChamps);


 // recupChamps
 function recupChamps(event) {
   
    let mail = inputMail.value;
    let prenom = inputPrenom.value;
    let nom = inputNom.value;
    let mdp = inputMdp.value;

    // console.log(mail + ""+ prenom+""+nom+""+mdp)

    // créer un compte
    try {
        let compte = new Compte(mail,prenom,nom,mdp);
        //console.log(compte);
    } catch (err) {
        divErr.innerHTML = err.message;
    }
    
 }
 function montreMdp(){
    let mdp= document.getElementById("idMdp");
    if (mdp.type === "password") {
        mdp.type = "text";
    } else {
        mdp.type ="password";
    }
 }