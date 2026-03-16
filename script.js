const catalogo = document.getElementById("catalogo");

function consultar(nombrePerfume, tipo = "botella") {
    const telefono = "5492613392404";
    let mensaje = "Hola! Quisiera consultar por el perfume " + nombrePerfume;

    if (tipo === "5") {
        mensaje = "Hola! Quisiera consultar por el decant de 5ml del perfume " + nombrePerfume;
    }
    if (tipo === "10") {
        mensaje = "Hola! Quisiera consultar por el decant de 10ml del perfume " + nombrePerfume;
    }

    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

const perfumes = [
    { nombre: "9PM Elixir EDP", marca: "Afnan", botellaNombre: "100ml", price: 90000, decant5: 9500, decant10: 18000, imagen: "img/perfumes/afnan_9pm_elixir.jpg", link: "https://www.fragrantica.es/perfume/Afnan/9PM-Elixir-111894.html" },
    { nombre: "9PM EDP Masculino", marca: "Afnan", botellaNombre: "100ml", price: 70000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/afnan_9pm.jpg", link: "https://www.fragrantica.es/perfume/Afnan/9pm-65414.html" },
    { nombre: "9PM Rebel EDP", marca: "Afnan", botellaNombre: "100ml", price: "SIN STOCK", decant5: 9500, decant10: 18000, imagen: "img/perfumes/afnan_9pm_rebel.jpg", link: "https://www.fragrantica.es/perfume/Afnan/9-PM-Rebel-99238.html" },
    { nombre: "Odyssey HOMME EDP", marca: "Armaf", botellaNombre: "100ml", price: "SIN STOCK", decant5: 7500, decant10: 15000, imagen: "img/perfumes/odyssey_homme.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Odyssey-Homme-64464.html" },
    { nombre: "Odyssey HOMME White Edition EDP", marca: "Armaf", botellaNombre: "100ml", price: "SIN STOCK", decant5: 7500, decant10: 15000, imagen: "img/perfumes/odyssey_hommewhite.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Odyssey-Homme-White-Edition-64466.html" },
    { nombre: "Mandarin Sky EDP", marca: "Armaf", botellaNombre: "100ml", price: "SIN STOCK", decant5: 8500, decant10: 16000, imagen: "img/perfumes/armaf_mandarine_sky.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Odyssey-Mandarin-Sky-83132.html" },
    { nombre: "Club de Nuit Urban Man Elixir EDP", marca: "Armaf", botellaNombre: "105ml", price: 80000, decant5: 8500, decant10: 16000, imagen: "img/perfumes/armaf_cdn_urbanelixir.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Club-De-Nuit-Urban-Elixir-77860.html" },
    { nombre: "Club de Nuit Intense Man EDT", marca: "Armaf", botellaNombre: "105ml", price: 80000, decant5: 8500, decant10: 16000, imagen: "img/perfumes/armaf_cdn_intense.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Intense-Man-34696.html" },
    { nombre: "Club de Nuit Precieux 1 EDP", marca: "Armaf", botellaNombre: "55ml", price: 105000, decant5: 17000, decant10: 34000, imagen: "img/perfumes/armaf_precieux.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Precieux-I-93272.html" },
    { nombre: "Club de Nuit Maleka EDP", marca: "Armaf", botellaNombre: "105ml", price: 85000, decant5: 9000, decant10: 17000, imagen: "img/perfumes/armaf_maleka.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Club-De-Nuit-Maleka-106168.html" },
    { nombre: "Club de Nuit Woman EDP", marca: "Armaf", botellaNombre: "105ml", price: 72000, decant5: 8500, decant10: 16000, imagen: "img/perfumes/armaf_woman.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Woman-27655.html" },
    { nombre: "Mayar Natural Intense EDP", marca: "Lattafa", botellaNombre: "100ml", price: "62000", decant5: "7500", decant10: "15000", imagen: "img/perfumes/mayar.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Mayar-Natural-Intense-89759.html" },
    { nombre: "YARA EDP", marca: "Lattafa", botellaNombre: "100ml", price: "62000", decant5: "7500", decant10: "15000", imagen: "img/perfumes/yarapink.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Yara-76880.html" },
    { nombre: "Art of Universe EDP", marca: "Lattafa", botellaNombre: "100ml", price: 78000, decant5: 8200, decant10: 16000, imagen: "img/perfumes/lattafa_art_of_universe.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Art-Of-Universe-101314.html" },
    { nombre: "Teriaq Intense EDP", marca: "Lattafa", botellaNombre: "100ml", price: "SIN STOCK", decant5: "7500", decant10: "15000", imagen: "img/perfumes/teriaqintense.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Teriaq-Intense-99586.html" },
    { nombre: "Vintage Radio EDP", marca: "Lattafa", botellaNombre: "100ml", price: 68000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/lattafa_vintage_radio.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Vintage-Radio-89454.html" },
    { nombre: "Khamrah Qahwa EDP", marca: "Lattafa", botellaNombre: "100ml", price: 63000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/lattafa_khamrah_qahwa.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Khamrah-Qahwa-88175.html" },
    { nombre: "Asad EDP", marca: "Lattafa", botellaNombre: "100ml", price: 67000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/lattafa_asad.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-72821.html" },
    { nombre: "Asad Bourbon EDP", marca: "Lattafa", botellaNombre: "100ml", price: 74000, decant5: 8000, decant10: 15500, imagen: "img/perfumes/lattafa_asad_bourbon.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-Bourbon-101124.html" },
    { nombre: "Badee Al Oud Honor & Glory EDP", marca: "Lattafa", botellaNombre: "100ml", price: "62000", decant5: "7500", decant10: "15000", imagen: "img/perfumes/lattafa_honor_glory.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Honor-Glory-84302.html" },
    { nombre: "Badee Al Oud For Glory EDP", marca: "Lattafa", botellaNombre: "100ml", price: 55000, decant5: 5500, decant10: 10000, imagen: "img/perfumes/lattafa_for_glory.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Oud-for-Glory-64948.html" },
    { nombre: "L'Intrude EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: "55000", decant5: "6500", decant10: "13000", imagen: "img/perfumes/intrude.jpg", link: "https://www.fragrantica.es/perfume/Maison-Alhambra/L-Intrude-93651.html" },
    { nombre: "Delilah EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: "65000", decant5: "7500", decant10: "15000", imagen: "img/perfumes/delilah.jpg", link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Delilah-90273.html" },
    { nombre: "Jean Lowe Inmortel EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: "SIN STOCK", decant5: "SIN STOCK", decant10: "SIN STOCK", imagen: "img/perfumes/maison_jean_lowe_inmortel.jpg", link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Jean-Lowe-Immortal-83666.html" },
    { nombre: "Salvo Intense EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: 60000, decant5: 6500, decant10: 12000, imagen: "img/perfumes/maison_salvo_intense.jpg", link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Salvo-Intense-96001.html" }
];

function formatearPrecio(valor) {
    if (typeof valor === "number") return "$" + valor.toLocaleString("es-AR");
    return valor;
}

function mostrarPerfumes(filtro = "todas") {
    catalogo.innerHTML = "";

    perfumes.forEach(function(p) {
        if (filtro === "todas" || p.marca === filtro) {

            var card = document.createElement("div");
            card.className = "producto";
            var nombreBotella = p.botellaNombre || "Botella";

            var claseStock = (p.price === "SIN STOCK") ? "decant-btn activo sin-stock" : "decant-btn activo";

            var textoInfo = (p.price === "SIN STOCK") ? "SOLO DECANTS" : "Botella Original";

            card.innerHTML =
                '<div class="contenedor-img" style="height:200px;display:flex;align-items:center;justify-content:center;overflow:hidden;">' +
                '<img src="' + p.imagen + '" alt="' + p.nombre + '" class="img-perfume" style="max-height:100%;transition:transform 0.4s ease;">' +
                '</div>' +
                '<h2>' + p.nombre + '</h2>' +
                '<p>' + p.marca + '</p>' +
                '<div class="decants">' +
                '<button class="' + claseStock + '" data-tipo="botella">' + nombreBotella + '</button>' +
                '<button class="decant-btn ' + (p.decant5 === "SIN STOCK" ? 'sin-stock' : '') + '" data-tipo="5">5ml</button>' +
                '<button class="decant-btn ' + (p.decant10 === "SIN STOCK" ? 'sin-stock' : '') + '" data-tipo="10">10ml</button>' +
                '</div>' +
                '<p class="info-puffs" style="font-size:0.85rem;color:#888;margin:10px 0;">' + textoInfo + '</p>' +
                '<p class="precio">' + formatearPrecio(p.price) + '</p>' +
                '<button class="btn-consultar-ws">Consultar</button>' +
                '<a href="' + p.link + '" target="_blank" class="btn-ver-mas">Ver más</a>';

            catalogo.appendChild(card);
        }
    });
}

mostrarPerfumes();
