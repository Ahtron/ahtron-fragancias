const catalogo = document.getElementById("catalogo");

// WhatsApp
function consultar(nombrePerfume) {
    const telefono = "5492613392404";
    const mensaje = "Hola! Quisiera consultar por el perfume " + nombrePerfume;
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

// PERFUMES (placeholders de imágenes)
const perfumes = [
    // AFNAN
    {
        nombre: "9PM Elixir EDP 100ml",
        marca: "Afnan",
        imagen: "img/perfumes/afnan_9pm_elixir.jpg"
    },
    {
        nombre: "9PM EDP Masculino 100ml",
        marca: "Afnan",
        imagen: "img/perfumes/afnan_9pm.jpg"
    },

// ARMAF
{
    nombre: "Club de Nuit Intense Man EDT 105ml",
    marca: "Armaf",
    imagen: "img/perfumes/armaf_cdn_intense.jpg"
},
{
    nombre: "Club de Nuit Precieux 1 EDP 55ml",
    marca: "Armaf",
    imagen: "img/perfumes/armaf_precieux.jpg"
},
{
    nombre: "Club de Nuit Maleka EDP 105ml",
    marca: "Armaf",
    imagen: "img/perfumes/armaf_maleka.jpg"
},
{
    nombre: "Odyssey Mandarin Sky EDP 100ml",
    marca: "Armaf",
    imagen: "img/perfumes/armaf_odyssey_mandarin_sky.jpg"
},

    // LATTAFA
    {
        nombre: "Art of Universe EDP 100ml",
        marca: "Lattafa",
        imagen: "img/perfumes/lattafa_art_of_universe.jpg"
    },
    {
        nombre: "Vintage Radio EDP 100ml",
        marca: "Lattafa",
        imagen: "img/perfumes/lattafa_vintage_radio.jpg"
    },
    {
        nombre: "Khamrah Qahwa EDP 100ml",
        marca: "Lattafa",
        imagen: "img/perfumes/lattafa_khamrah_qahwa.jpg"
    },
    {
        nombre: "Asad EDP 100ml",
        marca: "Lattafa",
        imagen: "img/perfumes/lattafa_asad.jpg"
    },
    {
        nombre: "Asad Bourbon EDP 100ml",
        marca: "Lattafa",
        imagen: "img/perfumes/lattafa_asad_bourbon.jpg"
    },
    {
        nombre: "Badee Al Oud Honor & Glory EDP 100ml",
        marca: "Lattafa",
        imagen: "img/perfumes/lattafa_honor_glory.jpg"
    },
    {
        nombre: "Badee Al Oud For Glory EDP 100ml",
        marca: "Lattafa",
        imagen: "img/perfumes/lattafa_for_glory.jpg"
    },

    // MAISON ALHAMBRA
    {
        nombre: "Jean Lowe Inmortel EDP 100ml",
        marca: "Maison Alhambra",
        imagen: "img/perfumes/maison_jean_lowe_inmortel.jpg"
    },
    {
        nombre: "Salvo Intense EDP 100ml",
        marca: "Maison Alhambra",
        imagen: "img/perfumes/maison_salvo_intense.jpg"
    }
];

// Render
function mostrarPerfumes(filtro) {
    if (!filtro) filtro = "todas";
    catalogo.innerHTML = "";

    for (let i = 0; i < perfumes.length; i++) {
        const p = perfumes[i];

        if (filtro === "todas" || p.marca === filtro) {
            const card = document.createElement("div");
            card.className = "producto";

            card.innerHTML =
                '<img src="' + p.imagen + '" alt="' + p.nombre + '">' +
                '<h2>' + p.nombre + '</h2>' +
                '<p>' + p.marca + '</p>' +
                '<button>Consultar</button>';

            card.querySelector("button").onclick = function () {
                consultar(p.nombre);
            };

            catalogo.appendChild(card);
        }
    }
}

// Filtros
const botones = document.querySelectorAll(".filtros button");
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        mostrarPerfumes(this.dataset.marca);
    });
}

// Mostrar todo al cargar
mostrarPerfumes();



