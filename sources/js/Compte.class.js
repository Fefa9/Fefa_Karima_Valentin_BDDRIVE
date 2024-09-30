"use strict"

class Compte {
    #mail;
    #prenom;
    #nom;
    #mdp;

    /**
     * 
     * @param {string} mail 
     * @param {string} prenom 
     * @param {string} nom 
     * @param {string} mdp 
     */

    constructor(mail,prenom,nom,mdp) {
        this.#setMail(mail);
        this.#setPrenom(prenom);
        this.#setNom(nom);
        this.#setMdp(mdp);
    }

    // Getter et Setter
    getMail(){
        return this.#mail;
    }
    getPrenom(){
        return this.#prenom;
    }
    getNom(){
        return this.#nom;
    }
    getMdp(){
        return this.#mdp;
    }

    #setMail(mail){
        if (!mail) throw new Error("Saisir une adresse mail");
        let pattern = /^[a-z A-Z 0-9._]+@[a-z A-Z]+\.[a-z A-Z]+$/
        if (!pattern.test(mail)) throw new Error("Adresse mail incorrecte");

        // Vérifier les mails dans le local storage
        let recupMail = localStorage.getItem("listeMail");
        let tMail = [];
        if(recupMail) {
            tMail=recupMail.split(";").map(item => JSON.parse(item).mail);
        } 
        // Vérifier si le mail existe déjà
        if (tMail.includes(mail)) {
            throw new Error("Cet e-mail est déjà répertorié.");
        }
        
        this.#mail=mail;
    }
    #setPrenom(prenom){
        if (!prenom) throw new Error("Saisir votre Prénom");
        let pattern = /^[a-zA-Zéè ]+$/
        if (!pattern.test(prenom)) throw new Error("Le prénom ne doit contenir que des lettres");
        this.#prenom=prenom;
    }
    #setNom(nom){
        if (!nom) throw new Error("Saisir votre Nom");
        let pattern = /^[a-zA-Zéè ]+$/
        if (!pattern.test(nom)) throw new Error("Le Nom ne doit contenir que des lettres");
        this.#nom=nom;
    }
    #setMdp(mdp){
        if (!mdp) throw new Error("Saisir un mot de passe");
        if (mdp.length<8) throw new Error("Le mot de passe doit contenir au moins 8 caractères");
        let pattern = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[@#$%^&+=]).{8,}$/
        if (!pattern.test(mdp)) throw new Error(" le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un carcrère spécial.");
        this.#mdp=mdp;
    }
    // fonctions utiles
    toString() {
        return `Votre compte: ${this.#mail} + ${this.#prenom} + ${this.#nom} + ${this.#mdp} ` 
    }
}