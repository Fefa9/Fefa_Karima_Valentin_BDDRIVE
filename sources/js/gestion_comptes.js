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

        //sauvegarde localStorage
        let serialCompte = '{"mail":"'+ mail +'","prenom":"'+ prenom +'","nom":"'+ nom +'","mdp":"'+ mdp +'"}'
        let liste = localStorage.getItem("listeCompte");
        console.log("avant");
        if (liste) liste+=";" + serialCompte;
        else liste = serialCompte;
        localStorage.setItem("listeCompte",liste);

        console.log(localStorage.getItem("listeCompte"));
        console.log(liste);

console.log(liste.split(";"));
        let serialMail= '{ "mail":"' + mail +'"}'
        let recupMail= localStorage.getItem("listeMail");
        if (recupMail)
        recupMail+= ";" + serialMail;
        else recupMail=serialMail;
        localStorage.setItem("listeMail", recupMail);




    } catch (err){
        divErr.innerHTML = err.message;
    }
   
   
 });

  // viderLocalstorage()
  function viderLocalstorage() {
    localStorage.removeItem("listeCompte");
}
 
 
 

 function montreMdp(){
    let mdp= document.getElementById("idMdp");
    if (mdp.type === "password") {
        mdp.type = "text";
    } else {
        mdp.type ="password";
    }
 }