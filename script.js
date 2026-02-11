const catalogo = document.getElementById("catalogo");

function consultar(nombrePerfume) {
    const telefono = "5492613392404";
    const mensaje = "Hola! Quisiera consultar por el perfume " + nombrePerfume;
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

const perfumes = [

    // AFNAN
    {
        nombre: "9PM Elixir EDP 100ml",
        marca: "Afnan",
        price: 50000,
        imagen: "img/perfumes/afnan_9pm_elixir.jpg",
        link: "https://www.fragrantica.es/perfume/Afnan/9PM-Elixir-111894.html"
    },
    {
        nombre: "9PM EDP Masculino 100ml",
        marca: "Afnan",
        price: 48000,
        imagen: "img/perfumes/afnan_9pm.jpg",
        link: "https://www.fragrantica.es/perfume/Afnan/9pm-65414.html"
    },

    // ARMAF
    {
        nombre: "Club de Nuit Intense Man EDT 105ml",
        marca: "Armaf",
        price: 52000,
        imagen: "img/perfumes/armaf_cdn_intense.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Intense-Man-34696.html"
    },
    {
        nombre: "Club de Nuit Precieux 1 EDP 55ml",
        marca: "Armaf",
        price: 46000,
        imagen: "img/perfumes/armaf_precieux.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Precieux-I-93272.html"
    },
    {
        nombre: "Club de Nuit Maleka EDP 105ml",
        marca: "Armaf",
        price: 47000,
        imagen: "img/perfumes/armaf_maleka.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Club-De-Nuit-Maleka-106168.html"
    },
    {
        nombre: "Odyssey Mandarin Sky EDP 100ml",
        marca: "Armaf",
        price: 49000,
        imagen: "img/perfumes/armaf_odyssey_mandarin_sky.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Odyssey-Mandarin-Sky-83132.html"
    },

    // LATTAFA
    {
        nombre: "Art of Universe EDP 100ml",
        marca: "Lattafa",
        price: 43000,
        imagen: "img/perfumes/lattafa_art_of_universe.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Art-Of-Universe-101314.html"
    },
    {
        nombre: "Vintage Radio EDP 100ml",
        marca: "Lattafa",
        price: 45000,
        imagen: "img/perfumes/lattafa_vintage_radio.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Vintage-Radio-89454.html"
    },
    {
        nombre: "Khamrah Qahwa EDP 100ml",
        marca: "Lattafa",
        price: 47000,
        imagen: "img/perfumes/lattafa_khamrah_qahwa.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Khamrah-Qahwa-88175.html"
    },
    {
        nombre: "Asad EDP 100ml",
        marca: "Lattafa",
        price: 42000,
        imagen: "img/perfumes/lattafa_asad.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-72821.html"
    },
    {
        nombre: "Asad Bourbon EDP 100ml",
        marca: "Lattafa",
        price: 44000,
        imagen: "img/perfumes/lattafa_asad_bourbon.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-Bourbon-101124.html"
    },
    {
        nombre: "Badee Al Oud Honor & Glory EDP 100ml",
        marca: "Lattafa",
        price: 46000,
        imagen: "img/perfumes/lattafa_honor_glory.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Honor-Glory-84302.html"
    },
    {
        nombre: "Badee Al Oud For Glory EDP 100ml",
        marca: "Lattafa",
        price: 45000,
        imagen: "img/perfumes/lattafa_for_glory.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Oud-for-Glory-64948.html"
    },

    // MAISON ALHAMBRA
    {
        nombre: "Jean Lowe Inmortel EDP 100ml",
        marca: "Maison Alhambra",
        price: 45000,
        imagen: "img/perfumes/maison_jean_lowe_inmortel.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Jean-Lowe-Immortal-83666.html"
    },
    {
        nombre: "Salvo Intense EDP 100ml",
        marca: "Maison Alhambra",
        price: 43000,
        imagen: "img/perfumes/maison_salvo_intense.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Salvo-Intense-96001.html"
    }
];

function formatearPrecio(valor) {
    return "$" + valor.toLocaleString("es-AR");
}

function mostrarPerfumes(filtro = "todas") {

    catalogo.innerHTML = "";

    perfumes.forEach(p => {

        if (filtro === "todas" || p.marca === filtro) {

            const card = document.createElement("div");
            card.className = "producto";

            card.innerHTML =
                `<img src="${p.imagen}" alt="${p.nombre}">
                 <h2>${p.nombre}</h2>
                 <p>${p.marca}</p>
                 <p class="precio">${formatearPrecio(p.price)}</p>
                 <button class="btn-consultar">Consultar</button>
                 <a href="${p.link}" target="_blank" class="btn-ver-mas">Ver más</a>`;

            card.querySelector(".btn-consultar").onclick = function () {
                consultar(p.nombre);
            };

            catalogo.appendChild(card);
        }

    });
}

document.querySelectorAll(".filtros button").forEach(btn => {
    btn.addEventListener("click", function () {
        mostrarPerfumes(this.dataset.marca);
    });
});

mostrarPerfumes();

