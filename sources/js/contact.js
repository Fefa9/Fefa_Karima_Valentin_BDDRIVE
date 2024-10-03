"use strict";

let myform = document.getElementById("form");
myform.addEventListener("submit", function(event) {
event.preventDefault(); // Empêche le formulaire de se soumettre immédiatement
// Réinitialisation des messages d'erreur
    document.getElementById("error-idprenom").textContent = "";
    document.getElementById("error-idname").textContent = "";
    document.getElementById("error-idmail").textContent = "";

        try {
        let firstname = document.getElementById("idprenom").value.trim();
        let lastname = document.getElementById("idname").value.trim();
        let email = document.getElementById("idmail").value.trim();

        // Vérification des champs
        if (!firstname) {
            throw new Error("Le prénom est requis !");
        }
        if (!lastname) {
            throw new Error("Le nom est requis !");
        }
        if (!email) {
            throw new Error("L'adresse e-mail est requise !");
        }

        // Validation du prénom
        if (firstname.length < 3) {
            throw new Error("Le prénom doit comporter au moins 3 caractères !");
        }
        if (!isNaN(firstname.charAt(0))) {
            throw new Error("Le prénom ne doit pas commencer par un nombre !");
        }

        // Validation du nom
        if (lastname.length < 3) {
            throw new Error("Le nom doit comporter au moins 3 caractères !");
        }
        if (!isNaN(lastname.charAt(0))) {
            throw new Error("Le nom ne doit pas commencer par un nombre !");
        }

        // Expression régulière pour valider l'email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            throw new Error("Veuillez entrer une adresse e-mail valide !");
        }

        // Si tout est valide
        Swal.fire({
            title: " ",
            text: "Votre message a été soumis avec succès.",
            icon: "success"
        }).then(function() {
            // Redirection vers la page catalogue après la validation
            window.location.href = "catalogue.html"; // Remplace par l'URL de la page catalogue
        });
    } 
    catch (error) {
        // Affichage des messages d'erreur spécifiques sous chaque champ
        if (error.message.includes("prénom")) {
            document.getElementById("error-idprenom").textContent = error.message;
        } else if (error.message.includes("nom")) {
            document.getElementById("error-idname").textContent = error.message;
        } else if (error.message.includes("adresse e-mail")) {
            document.getElementById("error-idmail").textContent = error.message;
        } else {
            console.error(error.message);
        }
    }
    
});
