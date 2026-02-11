const catalogo = document.getElementById("catalogo");

// ==========================
// WHATSAPP
// ==========================
function consultar(nombrePerfume) {
    const telefono = "5492613392404";
    const mensaje = "Hola! Quisiera consultar por el perfume " + nombrePerfume;
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

// ==========================
// PERFUMES
// ==========================
const perfumes = [

    // AFNAN
    {
        nombre: "9PM Elixir EDP 100ml",
        marca: "Afnan",
        price: "50000",
        imagen: "img/perfumes/afnan_9pm_elixir.jpg",
        link: "https://www.fragrantica.es/perfume/Afnan/9PM-Elixir-111894.html"
    },
    {
        nombre: "9PM EDP Masculino 100ml",
        marca: "Afnan",
        price: "48000",
        imagen: "img/perfumes/afnan_9pm.jpg",
        link: "https://www.fragrantica.es/perfume/Afnan/9pm-65414.html"
    },

    // ARMAF
    {
        nombre: "Club de Nuit Intense Man EDT 105ml",
        marca: "Armaf",
        price: "52000",
        imagen: "img/perfumes/armaf_cdn_intense.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Intense-Man-34696.html"
    },
    {
        nombre: "Club de Nuit Precieux 1 EDP 55ml",
        marca: "Armaf",
        price: "46000",
        imagen: "img/perfumes/armaf_precieux.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Precieux-I-93272.html"
    },

    // LATTAFA
    {
        nombre: "Art of Universe EDP 100ml",
        marca: "Lattafa",
        price: "43000",
        imagen: "img/perfumes/lattafa_art_of_universe.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Art-Of-Universe-101314.html"
    },
    {
        nombre: "Khamrah Qahwa EDP 100ml",
        marca: "Lattafa",
        price: "47000",
        imagen: "img/perfumes/lattafa_khamrah_qahwa.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Khamrah-Qahwa-88175.html"
    },

    // MAISON ALHAMBRA
    {
        nombre: "Jean Lowe Inmortel EDP 100ml",
        marca: "Maison Alhambra",
        price: "45000",
        imagen: "img/perfumes/maison_jean_lowe_inmortel.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Jean-Lowe-Immortal-83666.html"
    }
];

// ==========================
// FORMATEAR PRECIO (ARG)
// ==========================
function formatearPrec
