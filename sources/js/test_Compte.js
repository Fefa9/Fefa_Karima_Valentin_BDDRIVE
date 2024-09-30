"use strict"

console.log("Tests de la classe Compte\n");

//var compte3 = new Compte("ajax@gm.fr", "Felix","Roberta", "eddd!II");
//var compte4 = new Compte("ajax@gm.fr", "Felix","Robert", "edddTYGDF#");

//console.log(compte4);

//compte1.afficher();
//compte2.afficher();

// Scenarios alternatifs
try {
    //var compte1 = new Compte("ajax@gm.fr", "Felix","Robert", "eddd");
    var compte2 = new Compte("ajax@gm.fr", "Feli3","Robert", "edddTYGDF#");

} catch(err) {
    console.error(err.message);
}
console.log(compte2);
//console.log(compte2.toString());
