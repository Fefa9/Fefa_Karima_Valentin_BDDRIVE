"use strict"

// fonction generation du menu dans toutes div (de class="navigation")
function genererMenu(div){
    let navigationHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark arizonia-regular">
        <div class="container-fluid"> 
        <h1>BD Kiosque</h1>
        <a class="nav-link text-light" style="font-size: x-large;" href="inscription.html">
            <i class="bi bi-person"></i>
        </a>
        <a class="nav-link text-light" style="font-size:larger;" href="#">
            <i class="bi bi-cart"></i><span id="cart-counter" class="badge badge-pill badge-danger">0</span>
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
      </nav> `;
      div.innerHTML = navigationHTML;
}
document.addEventListener('DOMContentLoaded', function() {
    let menuDivs = document.querySelectorAll('.navigation'); 
    menuDivs.forEach(div => {
        genererMenu(div);  
    });
});