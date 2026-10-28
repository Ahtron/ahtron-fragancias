const catalogo = document.getElementById("catalogo");

let tipoCatalogoActual = "botellas";
let marcaActual = "todas";

// ===============================
// WHATSAPP
// ===============================

function consultar(nombrePerfume, tipo = "botella") {
    const telefono = "5492613392404";

    let mensaje =
        "Hola! Quisiera consultar por el perfume " + nombrePerfume;

    if (tipo === "5") {
        mensaje =
            "Hola! Quisiera consultar por el decant de 5ml del perfume " +
            nombrePerfume;
    }

    if (tipo === "10") {
        mensaje =
            "Hola! Quisiera consultar por el decant de 10ml del perfume " +
            nombrePerfume;
    }

    const url =
        "https://wa.me/" +
        telefono +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(url, "_blank", "noopener,noreferrer");
}

// ===============================
// PRODUCTOS
// ===============================

// Cuando un perfume tiene link, muestra "Conocer la fragancia".
// Cuando no tiene link, muestra su ficha de notas interna.

const perfumes = [
    {
        nombre: "9PM Elixir EDP",
        marca: "Afnan",
        botellaNombre: "100ml",
        price: 85000,
        decant5: 9000,
        decant10: 18000,
        imagen: "img/perfumes/afnan_9pm_elixir.jpg",
        link: "https://www.fragrantica.es/perfume/Afnan/9PM-Elixir-111894.html"
    },
    {
        nombre: "9PM EDP Masculino",
        marca: "Afnan",
        botellaNombre: "100ml",
        price: 75000,
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/afnan_9pm.jpg",
        link: "https://www.fragrantica.es/perfume/Afnan/9pm-65414.html"
    },
    {
        nombre: "9PM Rebel EDP",
        marca: "Afnan",
        botellaNombre: "100ml",
        price: "SIN STOCK",
        decant5: 9000,
        decant10: 18000,
        imagen: "img/perfumes/afnan_9pm_rebel.jpg",
        link: "https://www.fragrantica.es/perfume/Afnan/9-PM-Rebel-99238.html"
    },
    {
        nombre: "Odyssey HOMME EDP",
        marca: "Armaf",
        botellaNombre: "100ml",
        price: "SIN STOCK",
        decant5: 7500,
        decant10: 16000,
        imagen: "img/perfumes/odyssey_homme.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Odyssey-Homme-64464.html"
    },
    {
        nombre: "Odyssey HOMME White Edition EDP",
        marca: "Armaf",
        botellaNombre: "100ml",
        price: "SIN STOCK",
        decant5: 7500,
        decant10: 16000,
        imagen: "img/perfumes/odyssey_hommewhite.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Odyssey-Homme-White-Edition-64466.html"
    },
    {
        nombre: "Mandarin Sky EDP",
        marca: "Armaf",
        botellaNombre: "100ml",
        price: 78000,
        decant5: 8500,
        decant10: 17000,
        imagen: "img/perfumes/armaf_mandarine_sky.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Odyssey-Mandarin-Sky-83132.html"
    },
    {
        nombre: "Club de Nuit Urban Man Elixir EDP",
        marca: "Armaf",
        botellaNombre: "105ml",
        price: 82000,
        decant5: 8500,
        decant10: 17000,
        imagen: "img/perfumes/armaf_cdn_urbanelixir.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Club-De-Nuit-Urban-Elixir-77860.html"
    },
    {
        nombre: "Club de Nuit Intense Man EDT",
        marca: "Armaf",
        botellaNombre: "105ml",
        price: 82000,
        decant5: 8500,
        decant10: 16000,
        imagen: "img/perfumes/armaf_cdn_intense.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Intense-Man-34696.html"
    },
    {
        nombre: "Club de Nuit Precieux 1 EDP",
        marca: "Armaf",
        botellaNombre: "55ml",
        price: 93000,
        decant5: 13000,
        decant10: 25000,
        imagen: "img/perfumes/armaf_precieux.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Precieux-I-93272.html"
    },
    {
        nombre: "Club de Nuit Maleka EDP",
        marca: "Armaf",
        botellaNombre: "105ml",
        price: 82000,
        decant5: 9000,
        decant10: 17000,
        imagen: "img/perfumes/armaf_maleka.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Club-De-Nuit-Maleka-106168.html"
    },
    {
        nombre: "Club de Nuit Woman EDP",
        marca: "Armaf",
        botellaNombre: "105ml",
        price: 75000,
        decant5: 8500,
        decant10: 16000,
        imagen: "img/perfumes/armaf_woman.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Woman-27655.html"
    },
    {
        nombre: "Mayar Natural Intense EDP",
        marca: "Lattafa",
        botellaNombre: "100ml",
        price: 65000,
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/mayar.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Mayar-Natural-Intense-89759.html"
    },
    {
        nombre: "YARA EDP",
        marca: "Lattafa",
        botellaNombre: "100ml",
        price: 65000,
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/yarapink.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Yara-76880.html"
    },
    {
        nombre: "Art of Universe EDP",
        marca: "Lattafa",
        botellaNombre: "100ml",
        price: 78000,
        decant5: 8200,
        decant10: 17000,
        imagen: "img/perfumes/lattafa_art_of_universe.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Art-Of-Universe-101314.html"
    },
    {
        nombre: "Teriaq Intense EDP",
        marca: "Lattafa",
        botellaNombre: "100ml",
        price: "SIN STOCK",
        decant5: 7500,
        decant10: 18000,
        imagen: "img/perfumes/teriaqintense.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Teriaq-Intense-99586.html"
    },
    {
        nombre: "Vintage Radio EDP",
        marca: "Lattafa",
        botellaNombre: "100ml",
        price: 70000,
        decant5: 7500,
        decant10: 16000,
        imagen: "img/perfumes/lattafa_vintage_radio.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Vintage-Radio-89454.html"
    },
    {
        nombre: "Fire On Ice EDP",
        marca: "Lattafa",
        botellaNombre: "110ml",
        price: 68000,
        decant5: "SIN STOCK",
        decant10: 16000,
        imagen: "img/perfumes/Fire-On-Ice.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Fire-On-Ice-111414.html"
    },
    {
        nombre: "Khamrah Qahwa EDP",
        marca: "Lattafa",
        botellaNombre: "100ml",
        price: 68000,
        decant5: 7500,
        decant10: 16000,
        imagen: "img/perfumes/lattafa_khamrah_qahwa.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Khamrah-Qahwa-88175.html"
    },
    {
        nombre: "Asad EDP",
        marca: "Lattafa",
        botellaNombre: "100ml",
        price: 67000,
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/lattafa_asad.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-72821.html"
    },
    {
        nombre: "Asad Bourbon EDP",
        marca: "Lattafa",
        botellaNombre: "100ml",
        price: 75000,
        decant5: 7500,
        decant10: 17000,
        imagen: "img/perfumes/lattafa_asad_bourbon.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-Bourbon-101124.html"
    },
    {
        nombre: "Ta'weel EDP",
        marca: "Lattafa",
        botellaNombre: "100ml",
        price: 60000,
        decant5: "SIN STOCK",
        decant10: 15000,
        imagen: "img/perfumes/Ta_weel.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Ta-weel-85095.html"
    },
    {
        nombre: "Badee Al Oud Honor & Glory EDP",
        marca: "Lattafa",
        botellaNombre: "100ml",
        price: 65000,
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/lattafa_honor_glory.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Honor-Glory-84302.html"
    },
    {
        nombre: "Badee Al Oud For Glory EDP",
        marca: "Lattafa",
        botellaNombre: "100ml",
        price: 60000,
        decant5: 5500,
        decant10: 15000,
        imagen: "img/perfumes/lattafa_for_glory.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Oud-for-Glory-64948.html"
    },
    {
        nombre: "L'Intrude EDP",
        marca: "Maison Alhambra",
        botellaNombre: "100ml",
        price: "SIN STOCK",
        decant5: 6500,
        decant10: 15000,
        imagen: "img/perfumes/intrude.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/L-Intrude-93651.html"
    },
    {
        nombre: "Delilah EDP",
        marca: "Maison Alhambra",
        botellaNombre: "100ml",
        price: 65000,
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/delilah.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Delilah-90273.html"
    },
    {
        nombre: "Opera Noir EDP",
        marca: "Maison Alhambra",
        botellaNombre: "100ml",
        price: "SIN STOCK",
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/operanoir.jpg",
        link: "https://www.fragrantica.com/perfume/Maison-Alhambra/Opera-Noir-92625.html"
    },
    {
        nombre: "Jean Lowe Inmortel EDP",
        marca: "Maison Alhambra",
        botellaNombre: "100ml",
        price: 60000,
        decant5: 7000,
        decant10: 15000,
        imagen: "img/perfumes/maison_jean_lowe_inmortel.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Jean-Lowe-Immortal-83666.html"
    },
    {
        nombre: "Salvo Intense EDP",
        marca: "Maison Alhambra",
        botellaNombre: "100ml",
        price: 60000,
        decant5: 6500,
        decant10: 15000,
        imagen: "img/perfumes/maison_salvo_intense.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Salvo-Intense-96001.html"
    },
    {
        nombre: "Alpine Homme Sport EDP",
        marca: "Maison Alhambra",
        botellaNombre: "100ml",
        price: 60000,
        decant5: 6500,
        decant10: 15000,
        imagen: "img/perfumes/alpinehomme.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Alpine-Homme-Sport-83311.html"
    },
    {
        nombre: "L'Aventure Ciel EDP",
        marca: "Al Haramain",
        botellaNombre: "100ml",
        price: 80000,
        decant5: "SIN STOCK",
        decant10: 18000,
        imagen: "img/perfumes/L'aventure-ciel.jpg",
        link: "https://www.fragrantica.es/perfume/Al-Haramain-Perfumes/L-Aventure-Ciel-94349.html"
    },

    // ===============================
    // SOLO DECANTS
    // ===============================

    {
        nombre: "Triumph Noir",
        marca: "Vurv",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/Triumph Noir.jpg",
        link: ""
    },
    {
        nombre: "Tobacco D'Feu",
        marca: "French Avenue",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8500,
        decant10: 17000,
        imagen: "img/perfumes/Tobacco D'Feu.jpg",
        link: "https://www.fragrantica.es/perfume/French-Avenue/Tobacco-D-Feu-99737.html"
    },
    {
        nombre: "Sheikh Shuyukh Supreme",
        marca: "Lattafa",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/Sheikh Shuyukh Supreme.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Sheikh-Al-Shuyukh-Supreme-110556.html"
    },
    {
        nombre: "Musamam Black Intense",
        marca: "Lattafa",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8500,
        decant10: 17000,
        imagen: "img/perfumes/Musamam Black Intense.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Musamam-Black-Intense-119987.html"
    },
    {
        nombre: "MochaWood",
        marca: "Fragrance World",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8000,
        decant10: 16000,
        imagen: "img/perfumes/MochaWood.jpg",
        link: "https://www.fragrantica.es/perfume/Fragrance-World/Mocha-Wood-96819.html"
    },
    {
        nombre: "Oud Najdia",
        marca: "Lattafa",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/Oud Najdia.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Oud-Najdia-89896.html"
    },
    {
        nombre: "Galactic Men Elixir",
        marca: "Maison Alhambra",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8000,
        decant10: 16000,
        imagen: "img/perfumes/Galactic Men Elixir.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Galactic-Men-Elixir-134154.html"
    },
    {
        nombre: "Milano Platina",
        marca: "Pendora Scents",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/Milano Platina.jpg",
        link: ""
    },
    {
        nombre: "Royal Blend",
        marca: "French Avenue",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8500,
        decant10: 17000,
        imagen: "img/perfumes/Royal Blend.jpg",
        link: "https://www.fragrantica.es/perfume/French-Avenue/Royal-Blend-94022.html"
    },
    {
        nombre: "Kaaf Noir",
        marca: "Ahmed Al Maghribi",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8500,
        decant10: 17000,
        imagen: "img/perfumes/Kaaf Noir.jpg",
        link: "https://www.fragrantica.es/perfume/Ahmed-Al-Maghribi/Kaaf-Noir-130637.html"
    },
    {
        nombre: "Exquisite Prive",
        marca: "Maison Alhambra",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8000,
        decant10: 16000,
        imagen: "img/perfumes/Exquisite Prive.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Exquisite-Prive-122030.html"
    },
    {
        nombre: "Timeline",
        marca: "Vurv",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/Timeline.jpg",
        link: ""
    },
    {
        nombre: "Aqua de Classic Profumo",
        marca: "Fragrance World",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8000,
        decant10: 16000,
        imagen: "img/perfumes/Aqua de Classic Profumo.jpg",
        link: "https://www.fragrantica.es/perfume/Fragrance-World/Aqua-de-Classic-Profumo-107463.html"
    },
    {
        nombre: "Aif Al Batal",
        marca: "Ard Al Zaafaran",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/Aif Al Batal.jpg",
        link: ""
    },
    {
        nombre: "Aurum Luxura",
        marca: "Maison Alhambra",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8000,
        decant10: 16000,
        imagen: "img/perfumes/Aurum Luxura.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/The-Aurum-Luxura-123469.html"
    },
    {
        nombre: "Checkmate Knight",
        marca: "Armaf",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8500,
        decant10: 17000,
        imagen: "img/perfumes/Checkmate Knight.jpg",
        link: "https://www.fragrantica.es/perfume/Armaf/Black-Knight-123192.html"
    },
    {
        nombre: "Ameer Al Oud Intense Oud",
        marca: "Lattafa",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 7500,
        decant10: 15000,
        imagen: "img/perfumes/Ameer Al Oud Intense Oud.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Ameer-Al-Oudh-Intense-Oud-64947.html"
    },
    {
        nombre: "Mashrabya",
        marca: "Lattafa",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8500,
        decant10: 17000,
        imagen: "img/perfumes/Mashrabya.jpg",
        link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Mashrabya-100127.html"
    },
    {
        nombre: "Tibyan",
        marca: "Al Wataniah",
        soloDecants: true,
        price: "SIN STOCK",
        decant5: 8000,
        decant10: 16000,
        imagen: "img/perfumes/Tibyan.jpg",
        link: "https://www.fragrantica.es/perfume/Al-Wataniah/Tibyan-118493.html"
    }
];

// ===============================
// FICHAS DE PERFUMES SIN ENLACE
// ===============================

const fichasPerfumes = {
    "Triumph Noir": {
        perfil: "Especiado, amaderado y cálido.",

        descripcion:
            "El cardamomo abre una composición con cuero y un fondo de tabaco, ámbar y pachulí.",

        salida: [
            "Cardamomo",
            "Notas amaderadas"
        ],

        corazon: [
            "Cuero",
            "Jazmín sambac"
        ],

        fondo: [
            "Tabaco",
            "Ámbar",
            "Pachulí"
        ],

        aviso:
            "Notas publicadas por un distribuidor; no se encontró una ficha del fabricante.",

        fuentes: [
            {
                nombre: "VeneCuba Fashion",
                url: "https://www.venecuba.com/products/triumph-noir-eau-de-parfum-by-vurv-100ml"
            }
        ]
    },

    "Milano Platina": {
        perfil: "Frutal, dulce y amaderado.",

        descripcion:
            "Combina ciruela y cítricos con un corazón de avellana y miel, sobre una base de maderas y vetiver.",

        salida: [
            "Bergamota",
            "Pomelo",
            "Notas ozónicas",
            "Ciruela"
        ],

        corazon: [
            "Cashmeran",
            "Cedro",
            "Avellana",
            "Miel",
            "Jazmín",
            "Flor de azahar"
        ],

        fondo: [
            "Madera ambarada",
            "Pachulí",
            "Musgo de roble",
            "Vetiver"
        ],

        aviso: "",

        fuentes: [
            {
                nombre: "Parfumo",
                url: "https://www.parfumo.com/Perfumes/pendora-scents/milano-platina"
            },
            {
                nombre: "Sixth Scent",
                url: "https://sixthscent.co.uk/products/milano-platina-eau-de-parfum-100ml-edp-perfume-by-pendora-paris-corner"
            }
        ]
    },

    "Timeline": {
        perfil: "Amaderado y aromático.",

        descripcion:
            "Las fichas consultadas coinciden en un carácter amaderado, pero difieren en su pirámide. Por eso no mostramos notas de salida, corazón y fondo como confirmadas.",

        salida: [],
        corazon: [],
        fondo: [],

        aviso:
            "Pirámide olfativa pendiente de confirmar con el fabricante. Consultanos por WhatsApp para orientarte.",

        fuentes: [
            {
                nombre: "Nissei",
                url: "https://nissei.com/py/perfume-vurv-timeline-edp-masculino-100ml"
            },
            {
                nombre: "Shopping China",
                url: "https://www.shoppingchina.com.py/producto/perfume-vurv-timeline-men-edp-100ml-1056877"
            }
        ]
    },

    "Aif Al Batal": {
        perfil: "Versión pendiente de confirmar.",

        descripcion:
            "Encontramos una ficha para Al Batal / Saif Al Batal de Ard Al Zaafaran, pero el nombre cargado es Aif Al Batal. Hasta confirmar que se trata de esa presentación, no mostramos sus notas como si fueran las de este producto.",

        salida: [],
        corazon: [],
        fondo: [],

        aviso:
            "Consultanos por WhatsApp por las notas y la presentación disponible.",

        fuentes: [
            {
                nombre: "Referencia encontrada: Al Batal",
                url: "https://ardalzaafaranshop.com/products/al-batal-100-ml"
            }
        ]
    }
};

// ===============================
// PRECIOS Y DISPONIBILIDAD
// ===============================

function formatearPrecio(valor) {
    return typeof valor === "number"
        ? "$" + valor.toLocaleString("es-AR")
        : valor;
}

function disponible(valor) {
    return typeof valor === "number" &&
        Number.isFinite(valor) &&
        valor > 0;
}

// ===============================
// TEXTO Y ENLACES
// ===============================

function normalizar(texto) {
    return String(texto)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, function(caracter) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[caracter];
    });
}

function obtenerLinkSeguro(link) {
    if (typeof link !== "string" || !link.trim()) {
        return "";
    }

    try {
        const url = new URL(link.trim());

        if (url.protocol === "https:" || url.protocol === "http:") {
            return url.href;
        }
    } catch {
        return "";
    }

    return "";
}

// ===============================
// MOSTRAR CATÁLOGO
// ===============================

function mostrarPerfumes(filtro = marcaActual) {
    marcaActual = filtro;
    catalogo.replaceChildren();

    const esDecant = tipoCatalogoActual === "decants";

    const buscador =
        document.getElementById("buscar-perfume");

    const busqueda =
        normalizar(buscador ? buscador.value : "");

    const productosFiltrados = perfumes.filter(function(p) {
        const coincideMarca =
            filtro === "todas" || p.marca === filtro;

        const coincideBusqueda =
            normalizar(p.nombre + " " + p.marca).includes(busqueda);

        const perteneceSeccion = esDecant
            ? p.decant5 !== undefined || p.decant10 !== undefined
            : !p.soloDecants && disponible(p.price);

        return coincideMarca &&
            coincideBusqueda &&
            perteneceSeccion;
    });

    const tituloCatalogo =
        document.getElementById("titulo-catalogo");

    const cantidadProductos =
        document.getElementById("cantidad-productos");

    if (tituloCatalogo) {
        tituloCatalogo.textContent = esDecant
            ? "Decants de 5 y 10 ml"
            : "Perfumes completos";
    }

    if (cantidadProductos) {
        const cantidad = productosFiltrados.length;

        cantidadProductos.textContent =
            cantidad + (cantidad === 1 ? " fragancia" : " fragancias");
    }

    if (productosFiltrados.length === 0) {
        const mensaje = document.createElement("p");

        mensaje.className = "sin-resultados";

        mensaje.textContent =
            "No encontramos fragancias con esos filtros. Probá otra marca o búsqueda.";

        catalogo.appendChild(mensaje);
        return;
    }

    const fragmento = document.createDocumentFragment();

    productosFiltrados.forEach(function(p) {
        const card = document.createElement("article");

        card.className = "producto";

        let controles;

        if (esDecant) {
            controles = ["5", "10"]
                .filter(function(tipo) {
                    return p["decant" + tipo] !== undefined;
                })
                .map(function(tipo) {
                    const hayStock =
                        disponible(p["decant" + tipo]);

                    return `
                        <button
                            type="button"
                            class="decant-btn ${hayStock ? "" : "sin-stock"}"
                            data-tipo="${tipo}"
                            aria-pressed="false"
                            ${hayStock ? "" : 'disabled title="Sin stock"'}
                        >
                            ${tipo} ml${hayStock ? "" : " · Agotado"}
                        </button>
                    `;
                })
                .join("");
        } else {
            controles = `
                <span class="presentacion">
                    ${escaparHTML(p.botellaNombre || "")}
                </span>
            `;
        }

        const etiqueta = esDecant
            ? (
                p.soloDecants || !disponible(p.price)
                    ? "SOLO DECANTS"
                    : "DECANT"
            )
            : "PERFUME COMPLETO";

        const linkPerfume = obtenerLinkSeguro(p.link);

        card.innerHTML = `
            <div class="contenedor-img">
                <span class="producto-etiqueta">
                    ${etiqueta}
                </span>

                <img
                    src="${escaparHTML(p.imagen)}"
                    alt="${escaparHTML(p.nombre)}"
                    class="img-perfume"
                    loading="lazy"
                    decoding="async"
                    width="240"
                    height="240"
                >
            </div>

            <p class="marca">
                ${escaparHTML(p.marca)}
            </p>

            <h2>
                ${escaparHTML(p.nombre)}
            </h2>

            <div class="decants">
                ${controles}
            </div>

            <p class="info-puffs"></p>

            <p class="precio"></p>

            <button
                type="button"
                class="btn-consultar-ws"
            >
                Consultar por WhatsApp ↗
            </button>

            ${linkPerfume ? `
                <a
                    href="${escaparHTML(linkPerfume)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-ver-mas"
                >
                    Conocer la fragancia ↗
                </a>
            ` : `
                <button
                    type="button"
                    class="btn-ver-mas btn-notas"
                >
                    Notas del perfume
                </button>
            `}
        `;

        const botonNotas =
            card.querySelector(".btn-notas");

        if (botonNotas) {
            botonNotas.addEventListener("click", function() {
                abrirFichaPerfume(p);
            });
        }

        const precioLabel =
            card.querySelector(".precio");

        const infoPuffs =
            card.querySelector(".info-puffs");

        const btnWS =
            card.querySelector(".btn-consultar-ws");

        // PERFUMES COMPLETOS

        if (!esDecant) {
            precioLabel.textContent =
                formatearPrecio(p.price);

            infoPuffs.textContent = "Botella original";

            btnWS.addEventListener("click", function() {
                consultar(p.nombre, "botella");
            });
        }

        // DECANTS

        else {
            let tipoSeleccionado = null;

            const botones =
                card.querySelectorAll(".decant-btn");

            function seleccionarDecant(tipo) {
                if (!disponible(p["decant" + tipo])) {
                    return;
                }

                tipoSeleccionado = tipo;

                botones.forEach(function(boton) {
                    const seleccionado =
                        boton.dataset.tipo === tipo;

                    boton.classList.toggle(
                        "activo",
                        seleccionado
                    );

                    boton.setAttribute(
                        "aria-pressed",
                        String(seleccionado)
                    );
                });

                precioLabel.textContent =
                    formatearPrecio(p["decant" + tipo]);

                infoPuffs.textContent = tipo === "5"
                    ? "5 ml · Aprox. 75 atomizaciones*"
                    : "10 ml · Aprox. 150 atomizaciones*";

                infoPuffs.title =
                    "Cantidad orientativa: varía según el atomizador y el uso.";

                btnWS.disabled = false;
            }

            botones.forEach(function(boton) {
                boton.addEventListener("click", function() {
                    seleccionarDecant(boton.dataset.tipo);
                });
            });

            if (disponible(p.decant5)) {
                seleccionarDecant("5");
            } else if (disponible(p.decant10)) {
                seleccionarDecant("10");
            } else {
                precioLabel.textContent = "SIN STOCK";

                infoPuffs.textContent =
                    "Decants temporalmente agotados";

                btnWS.disabled = true;
                btnWS.textContent = "Sin stock";
            }

            btnWS.addEventListener("click", function() {
                if (tipoSeleccionado) {
                    consultar(p.nombre, tipoSeleccionado);
                }
            });
        }

        fragmento.appendChild(card);
    });

    catalogo.appendChild(fragmento);
}

// ===============================
// PESTAÑAS PERFUMES / DECANTS
// ===============================

document.querySelectorAll(".tipo-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        tipoCatalogoActual = btn.dataset.tipo;

        document.querySelectorAll(".tipo-btn").forEach(function(boton) {
            const seleccionado = boton === btn;

            boton.classList.toggle(
                "activo",
                seleccionado
            );

            boton.setAttribute(
                "aria-pressed",
                String(seleccionado)
            );
        });

        mostrarPerfumes(marcaActual);
    });
});

// ===============================
// FILTROS POR MARCA
// ===============================

document.querySelectorAll(".filtros button").forEach(function(btn) {
    btn.addEventListener("click", function() {
        marcaActual = btn.dataset.marca;

        document.querySelectorAll(".filtros button").forEach(function(boton) {
            const seleccionado = boton === btn;

            boton.classList.toggle(
                "activo",
                seleccionado
            );

            boton.setAttribute(
                "aria-pressed",
                String(seleccionado)
            );
        });

        mostrarPerfumes(marcaActual);
    });
});

// ===============================
// BUSCADOR
// ===============================

const campoBusqueda =
    document.getElementById("buscar-perfume");

if (campoBusqueda) {
    campoBusqueda.addEventListener("input", function() {
        mostrarPerfumes(marcaActual);
    });
}

// ===============================
// ESTILO DE LAS FICHAS INTERNAS
// ===============================

// Se agrega desde JavaScript para no modificar el CSS.

const estilosNotas = document.createElement("style");

estilosNotas.textContent = `
    .producto .btn-notas {
        width: 100%;
        border: 1px solid rgba(201, 162, 77, .35);
        border-radius: 6px;
        background: transparent;
        color: var(--dorado-claro, #f0d37a);
        font: inherit;
        font-size: 11px;
        cursor: pointer;
    }

    .producto .btn-notas:hover {
        background: rgba(201, 162, 77, .12);
    }

    html.ahtron-ficha-abierta {
        overflow: hidden;
    }

    .ahtron-ficha {
        box-sizing: border-box;
        width: min(620px, calc(100vw - 28px));
        max-height: calc(100dvh - 32px);
        margin: auto;
        padding: 0;
        overflow: auto;

        border: 1px solid #c9a24d80;
        border-radius: 18px;

        background: #141414;
        color: #f2f0eb;
        font-family: "Poppins", sans-serif;
        color-scheme: dark;

        box-shadow: 0 25px 90px #0009;
    }

    .ahtron-ficha::backdrop {
        background: rgba(0, 0, 0, .78);
    }

    .ahtron-ficha-contenido {
        padding: 28px;
    }

    .ahtron-ficha-barra {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        margin-bottom: 18px;
    }

    .ahtron-ficha-marca {
        margin: 0;
        color: #c9a24d;
        font-size: 11px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .ahtron-ficha-cerrar {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        padding: 0;

        border: 1px solid #ffffff30;
        border-radius: 50%;

        background: #222;
        color: #fff;
        font-size: 24px;
        cursor: pointer;
    }

    .ahtron-ficha h2 {
        margin: 0 0 10px;
        font-family: "Playfair Display", serif;
        font-size: clamp(25px, 5vw, 36px);
        line-height: 1.25;
    }

    .ahtron-ficha-perfil {
        margin: 0 0 15px;
        color: #f0d37a;
        font-size: 13px;
    }

    .ahtron-ficha-descripcion,
    .ahtron-ficha-aviso {
        margin: 0 0 18px;
        color: #bbb7af;
        font-size: 12px;
        line-height: 1.8;
    }

    .ahtron-ficha-grupo {
        margin: 12px 0;
        padding: 16px;

        border: 1px solid #ffffff15;
        border-radius: 10px;

        background: #1c1c1c;
    }

    .ahtron-ficha h3 {
        margin: 0 0 12px;
        color: #c9a24d;
        font-size: 11px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    .ahtron-ficha-notas {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;

        margin: 0;
        padding: 0;
        list-style: none;
    }

    .ahtron-ficha-notas li {
        padding: 6px 10px;
        border: 1px solid #c9a24d35;
        border-radius: 20px;

        color: #eee;
        font-size: 12px;
    }

    .ahtron-ficha-aviso {
        margin-top: 20px;
        padding-left: 12px;
        border-left: 2px solid #c9a24d;
    }

    .ahtron-ficha details {
        margin: 20px 0;
        color: #aaa69d;
        font-size: 11px;
        line-height: 1.8;
    }

    .ahtron-ficha summary {
        cursor: pointer;
    }

    .ahtron-ficha-fuentes {
        display: grid;
        gap: 6px;
        margin-top: 10px;
    }

    .ahtron-ficha-fuentes a {
        color: #f0d37a;
    }

    .ahtron-ficha-consulta {
        display: block;
        margin-top: 22px;
        padding: 13px 16px;

        border-radius: 7px;
        background: #c9a24d;
        color: #17120a;

        text-align: center;
        text-decoration: none;
        font-size: 12px;
        font-weight: 600;
    }

    .ahtron-ficha :focus-visible {
        outline: 2px solid #f0d37a;
        outline-offset: 4px;
    }

    @media (max-width: 480px) {
        .ahtron-ficha-contenido {
            padding: 20px;
        }
    }
`;

document.head.appendChild(estilosNotas);

// ===============================
// VENTANA DE NOTAS
// ===============================

const dialogoNotas = document.createElement("dialog");

dialogoNotas.className = "ahtron-ficha";

dialogoNotas.setAttribute(
    "aria-labelledby",
    "ahtron-ficha-titulo"
);

document.body.appendChild(dialogoNotas);

let focoAnteriorFicha = null;

// Restaurar el foco al cerrar.

dialogoNotas.addEventListener("close", function() {
    document.documentElement.classList.remove(
        "ahtron-ficha-abierta"
    );

    if (focoAnteriorFicha && focoAnteriorFicha.isConnected) {
        focoAnteriorFicha.focus();
    }
});

// Cerrar al tocar el fondo exterior.

dialogoNotas.addEventListener("click", function(evento) {
    if (evento.target !== dialogoNotas) {
        return;
    }

    const rect = dialogoNotas.getBoundingClientRect();

    const fuera =
        evento.clientX < rect.left ||
        evento.clientX > rect.right ||
        evento.clientY < rect.top ||
        evento.clientY > rect.bottom;

    if (fuera) {
        dialogoNotas.close();
    }
});

// ===============================
// ABRIR FICHA DEL PERFUME
// ===============================

function abrirFichaPerfume(perfume) {
    const ficha = fichasPerfumes[perfume.nombre] || {
        perfil: "Notas pendientes de confirmar.",

        descripcion:
            "Consultanos para conocer el perfil de esta fragancia.",

        salida: [],
        corazon: [],
        fondo: [],
        aviso: "",
        fuentes: []
    };

    function grupoNotas(titulo, notas) {
        if (!notas || notas.length === 0) {
            return "";
        }

        return `
            <section class="ahtron-ficha-grupo">
                <h3>
                    ${escaparHTML(titulo)}
                </h3>

                <ul class="ahtron-ficha-notas">
                    ${notas.map(function(nota) {
                        return (
                            "<li>" +
                            escaparHTML(nota) +
                            "</li>"
                        );
                    }).join("")}
                </ul>
            </section>
        `;
    }

    const fuentes = (ficha.fuentes || [])
        .map(function(fuente) {
            const url = obtenerLinkSeguro(fuente.url);

            if (!url) {
                return "";
            }

            return `
                <a
                    href="${escaparHTML(url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${escaparHTML(fuente.nombre)} ↗
                </a>
            `;
        })
        .join("");

    const urlWhatsApp =
        "https://wa.me/5492613392404?text=" +
        encodeURIComponent(
            "Hola! Quisiera saber más sobre el aroma y las notas de " +
            perfume.nombre +
            "."
        );

    dialogoNotas.innerHTML = `
        <div class="ahtron-ficha-contenido">
            <div class="ahtron-ficha-barra">
                <p class="ahtron-ficha-marca">
                    ${escaparHTML(perfume.marca)}
                </p>

                <button
                    type="button"
                    class="ahtron-ficha-cerrar"
                    aria-label="Cerrar ficha"
                    autofocus
                >
                    ×
                </button>
            </div>

            <h2 id="ahtron-ficha-titulo">
                ${escaparHTML(perfume.nombre)}
            </h2>

            <p class="ahtron-ficha-perfil">
                ${escaparHTML(ficha.perfil)}
            </p>

            <p class="ahtron-ficha-descripcion">
                ${escaparHTML(ficha.descripcion)}
            </p>

            ${grupoNotas(
                "Salida · Primera impresión",
                ficha.salida
            )}

            ${grupoNotas(
                "Corazón · Al desarrollarse",
                ficha.corazon
            )}

            ${grupoNotas(
                "Fondo · La estela",
                ficha.fondo
            )}

            ${ficha.aviso ? `
                <p class="ahtron-ficha-aviso">
                    ${escaparHTML(ficha.aviso)}
                </p>
            ` : ""}

            ${fuentes ? `
                <details>
                    <summary>
                        Fuentes de la información
                    </summary>

                    <div class="ahtron-ficha-fuentes">
                        ${fuentes}
                    </div>
                </details>
            ` : ""}

            <a
                class="ahtron-ficha-consulta"
                href="${escaparHTML(urlWhatsApp)}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Consultar esta fragancia por WhatsApp ↗
            </a>
        </div>
    `;

    dialogoNotas
        .querySelector(".ahtron-ficha-cerrar")
        .addEventListener("click", function() {
            dialogoNotas.close();
        });

    focoAnteriorFicha = document.activeElement;

    dialogoNotas.showModal();

    document.documentElement.classList.add(
        "ahtron-ficha-abierta"
    );
}

// ===============================
// INICIO
// ===============================

mostrarPerfumes();
