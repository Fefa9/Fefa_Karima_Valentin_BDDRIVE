const SRC_IMG = "images/";
// const ALBUM_DEFAULT_MINI = SRC_IMG + "noComicsMini.jpg";
// const ALBUM_DEFAULT = SRC_IMG + "noComics.jpg";

 const ALBUM_DEFAULT_MINI = "images/albumsMini/Spirou et Fantasio-07-Le dictateur et le champignon.jpg"; // Chemin statique
const ALBUM_DEFAULT = "mages/albums/Spirou et Fantasio-07-Le dictateur et le champignon.jpg"; // Chemin statique

const albums = new Map();
albums.set("1", { titre: "Croc vert", numero: "23", idSerie: "2", idAuteur: "8", prix: "24.50" +"€"});

const auteurs = new Map();
auteurs.set("8", { nom: "Gaudin, Danard" });

const series = new Map();
series.set("2", { nom: "Spirou et Fantasio" });

document.addEventListener("DOMContentLoaded", function () {
    const txtSerie = document.getElementById("serie");
    const txtNumero = document.getElementById("numero");
    const txtTitre = document.getElementById("titre");
    const txtAuteur = document.getElementById("auteur");
    const txtPrix = document.getElementById("prix");
    const imgAlbum = document.getElementById("album");
    const imgAlbumMini = document.getElementById("albumMini");
    const id = document.getElementById("id");

    id.addEventListener("change", function () {
        getAlbum(this);
    });

    // Charger l'album par défaut au chargement
    getAlbum({ value: "1" });

    function getAlbum(num) {
        const album = albums.get(num.value);

        if (album === undefined) {
            txtSerie.value = "";
            txtNumero.value = "";
            txtTitre.value = "";
            txtAuteur.value = "";
            txtPrix.value = 0;

            imgAlbum.src = ALBUM_DEFAULT; // Image par défaut
            imgAlbumMini.src = ALBUM_DEFAULT_MINI; // Image par défaut
        } else {
            const serie = series.get(album.idSerie);
            const auteur = auteurs.get(album.idAuteur);

            txtSerie.value = serie.nom;
            txtNumero.value = album.numero;
            txtTitre.value = album.titre;
            txtAuteur.value = auteur.nom;
            txtPrix.value = album.prix;

            const nomFic = `${serie.nom}-${album.numero}-${album.titre}`.replace(/'|!|\?|\.|"|:|\$/g, "");

            imgAlbum.src = `${SRC_IMG}albums/${nomFic}.jpg`; // Chemin de l'image
            imgAlbumMini.src = `${SRC_IMG}albumsMini/${nomFic}.jpg`; // Chemin de l'image mini
        }
    }
});