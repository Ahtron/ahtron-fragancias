```javascript
const catalogo = document.getElementById("catalogo");

let tipoCatalogoActual = "botellas";
let marcaActual = "todas";


// ===============================
// WHATSAPP
// ===============================

function consultar(nombrePerfume, tipo = "botella") {

    const telefono = "5492613392404";

    let mensaje = "Hola! Quisiera consultar por el perfume " + nombrePerfume;

    if (tipo === "5") {
        mensaje = "Hola! Quisiera consultar por el decant de 5ml del perfume " + nombrePerfume;
    }

    if (tipo === "10") {
        mensaje = "Hola! Quisiera consultar por el decant de 10ml del perfume " + nombrePerfume;
    }

    const url =
        "https://wa.me/" +
        telefono +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(url, "_blank");
}


// ===============================
// PRODUCTOS
// ===============================

const perfumes = [
    { nombre: "9PM Elixir EDP", marca: "Afnan", botellaNombre: "100ml", price: 85000, decant5: 9000, decant10: 18000, imagen: "img/perfumes/afnan_9pm_elixir.jpg", link: "https://www.fragrantica.es/perfume/Afnan/9PM-Elixir-111894.html" },

    { nombre: "9PM EDP Masculino", marca: "Afnan", botellaNombre: "100ml", price: 75000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/afnan_9pm.jpg", link: "https://www.fragrantica.es/perfume/Afnan/9pm-65414.html" },

    { nombre: "9PM Rebel EDP", marca: "Afnan", botellaNombre: "100ml", price: "SIN STOCK", decant5: 9000, decant10: 18000, imagen: "img/perfumes/afnan_9pm_rebel.jpg", link: "https://www.fragrantica.es/perfume/Afnan/9-PM-Rebel-99238.html" },

    { nombre: "Odyssey HOMME EDP", marca: "Armaf", botellaNombre: "100ml", price: "SIN STOCK", decant5: 7500, decant10: 16000, imagen: "img/perfumes/odyssey_homme.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Odyssey-Homme-64464.html" },

    { nombre: "Odyssey HOMME White Edition EDP", marca: "Armaf", botellaNombre: "100ml", price: "SIN STOCK", decant5: 7500, decant10: 16000, imagen: "img/perfumes/odyssey_hommewhite.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Odyssey-Homme-White-Edition-64466.html" },

    { nombre: "Mandarin Sky EDP", marca: "Armaf", botellaNombre: "100ml", price: 78000, decant5: 8500, decant10: 17000, imagen: "img/perfumes/armaf_mandarine_sky.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Odyssey-Mandarin-Sky-83132.html" },

    { nombre: "Club de Nuit Urban Man Elixir EDP", marca: "Armaf", botellaNombre: "105ml", price: 82000, decant5: 8500, decant10: 17000, imagen: "img/perfumes/armaf_cdn_urbanelixir.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Club-De-Nuit-Urban-Elixir-77860.html" },

    { nombre: "Club de Nuit Intense Man EDT", marca: "Armaf", botellaNombre: "105ml", price: 82000, decant5: 8500, decant10: 16000, imagen: "img/perfumes/armaf_cdn_intense.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Intense-Man-34696.html" },

    { nombre: "Club de Nuit Precieux 1 EDP", marca: "Armaf", botellaNombre: "55ml", price: 93000, decant5: 13000, decant10: 25000, imagen: "img/perfumes/armaf_precieux.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Precieux-I-93272.html" },

    { nombre: "Club de Nuit Maleka EDP", marca: "Armaf", botellaNombre: "105ml", price: 82000, decant5: 9000, decant10: 17000, imagen: "img/perfumes/armaf_maleka.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Club-De-Nuit-Maleka-106168.html" },

    { nombre: "Club de Nuit Woman EDP", marca: "Armaf", botellaNombre: "105ml", price: 75000, decant5: 8500, decant10: 16000, imagen: "img/perfumes/armaf_woman.jpg", link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Woman-27655.html" },

    { nombre: "Mayar Natural Intense EDP", marca: "Lattafa", botellaNombre: "100ml", price: 65000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/mayar.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Mayar-Natural-Intense-89759.html" },

    { nombre: "YARA EDP", marca: "Lattafa", botellaNombre: "100ml", price: 65000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/yarapink.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Yara-76880.html" },

    { nombre: "Art of Universe EDP", marca: "Lattafa", botellaNombre: "100ml", price: 78000, decant5: 8200, decant10: 17000, imagen: "img/perfumes/lattafa_art_of_universe.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Art-Of-Universe-101314.html" },

    { nombre: "Teriaq Intense EDP", marca: "Lattafa", botellaNombre: "100ml", price: "SIN STOCK", decant5: 7500, decant10: 18000, imagen: "img/perfumes/teriaqintense.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Teriaq-Intense-99586.html" },

    { nombre: "Vintage Radio EDP", marca: "Lattafa", botellaNombre: "100ml", price: 70000, decant5: 7500, decant10: 16000, imagen: "img/perfumes/lattafa_vintage_radio.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Vintage-Radio-89454.html" },

    { nombre: "Fire On Ice EDP", marca: "Lattafa", botellaNombre: "110ml", price: 68000, decant5: "SIN STOCK", decant10: 16000, imagen: "img/perfumes/Fire-On-Ice.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Fire-On-Ice-111414.html" },

    { nombre: "Khamrah Qahwa EDP", marca: "Lattafa", botellaNombre: "100ml", price: 68000, decant5: 7500, decant10: 16000, imagen: "img/perfumes/lattafa_khamrah_qahwa.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Khamrah-Qahwa-88175.html" },

    { nombre: "Asad EDP", marca: "Lattafa", botellaNombre: "100ml", price: 67000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/lattafa_asad.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-72821.html" },

    { nombre: "Asad Bourbon EDP", marca: "Lattafa", botellaNombre: "100ml", price: 75000, decant5: 7500, decant10: 17000, imagen: "img/perfumes/lattafa_asad_bourbon.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-Bourbon-101124.html" },

    { nombre: "Ta'weel EDP", marca: "Lattafa", botellaNombre: "100ml", price: 60000, decant5: "SIN STOCK", decant10: 15000, imagen: "img/perfumes/Ta_weel.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Ta-weel-85095.html" },

    { nombre: "Badee Al Oud Honor & Glory EDP", marca: "Lattafa", botellaNombre: "100ml", price: 65000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/lattafa_honor_glory.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Honor-Glory-84302.html" },

    { nombre: "Badee Al Oud For Glory EDP", marca: "Lattafa", botellaNombre: "100ml", price: 60000, decant5: 5500, decant10: 15000, imagen: "img/perfumes/lattafa_for_glory.jpg", link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Oud-for-Glory-64948.html" },

    { nombre: "L'Intrude EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: "SIN STOCK", decant5: 6500, decant10: 15000, imagen: "img/perfumes/intrude.jpg", link: "https://www.fragrantica.es/perfume/Maison-Alhambra/L-Intrude-93651.html" },

    { nombre: "Delilah EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: 65000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/delilah.jpg", link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Delilah-90273.html" },

    { nombre: "Opera Noir EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: "SIN STOCK", decant5: 7500, decant10: 15000, imagen: "img/perfumes/operanoir.jpg", link: "https://www.fragrantica.com/perfume/Maison-Alhambra/Opera-Noir-92625.html" },

    { nombre: "Jean Lowe Inmortel EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: 60000, decant5: 7000, decant10: 15000, imagen: "img/perfumes/maison_jean_lowe_inmortel.jpg", link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Jean-Lowe-Immortal-83666.html" },

    { nombre: "Salvo Intense EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: 60000, decant5: 6500, decant10: 15000, imagen: "img/perfumes/maison_salvo_intense.jpg", link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Salvo-Intense-96001.html" },

    { nombre: "Alpine Homme Sport EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: 60000, decant5: 6500, decant10: 15000, imagen: "img/perfumes/alpinehomme.jpg", link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Alpine-Homme-Sport-83311.html" },

    { nombre: "L'Aventure Ciel EDP", marca: "Al Haramain", botellaNombre: "100ml", price: 80000, decant5: "SIN STOCK", decant10: 18000, imagen: "img/perfumes/L'aventure-ciel.jpg", link: "https://www.fragrantica.es/perfume/Al-Haramain-Perfumes/L-Aventure-Ciel-94349.html" }
];


// ===============================
// FORMATEAR PRECIO
// ===============================

function formatearPrecio(valor) {

    if (typeof valor === "number") {
        return "$" + valor.toLocaleString("es-AR");
    }

    return valor;
}


// ===============================
// MOSTRAR CATÁLOGO
// ===============================

function mostrarPerfumes(filtro = marcaActual) {

    catalogo.innerHTML = "";

    marcaActual = filtro;

    perfumes.forEach(function(p) {

        // FILTRO DE MARCA
        if (filtro !== "todas" && p.marca !== filtro) {
            return;
        }


        // =====================================
        // SECCIÓN PERFUMES COMPLETOS
        // =====================================

        if (tipoCatalogoActual === "botellas") {

            // Si no hay botella disponible, NO aparece acá
            if (p.price === "SIN STOCK") {
                return;
            }

            const card = document.createElement("div");

            card.className = "producto";

            card.innerHTML =

                '<div class="contenedor-img" style="height:200px;display:flex;align-items:center;justify-content:center;overflow:hidden;">' +

                    '<img src="' + p.imagen + '" ' +
                    'alt="' + p.nombre + '" ' +
                    'class="img-perfume" ' +
                    'style="max-height:100%;transition:transform 0.4s ease;">' +

                '</div>' +

                '<h2>' + p.nombre + '</h2>' +

                '<p>' + p.marca + '</p>' +

                '<div class="decants">' +

                    '<button class="decant-btn activo" data-tipo="botella">' +
                        p.botellaNombre +
                    '</button>' +

                '</div>' +

                '<p class="info-puffs">' +
                    'Botella Original' +
                '</p>' +

                '<p class="precio">' +
                    formatearPrecio(p.price) +
                '</p>' +

                '<button class="btn-consultar-ws">' +
                    'Consultar' +
                '</button>' +

                '<a href="' + p.link + '" target="_blank" class="btn-ver-mas">' +
                    'Ver más' +
                '</a>';


            const btnWS = card.querySelector(".btn-consultar-ws");


            btnWS.onclick = function() {

                consultar(p.nombre, "botella");

            };


            catalogo.appendChild(card);

        }


        // =====================================
        // SECCIÓN DECANTS
        // =====================================

        else if (tipoCatalogoActual === "decants") {

            // Si no existe ningún decant, no mostrar
            if (p.decant5 === undefined && p.decant10 === undefined) {
                return;
            }

            const card = document.createElement("div");

            card.className = "producto";


            let boton5 = "";
            let boton10 = "";


            // DECANT 5 ML
            if (p.decant5 !== undefined) {

                boton5 =

                    '<button class="decant-btn ' +
                    (p.decant5 === "SIN STOCK" ? "sin-stock" : "activo") +
                    '" data-tipo="5">' +

                    '5ml' +

                    '</button>';
            }


            // DECANT 10 ML
            if (p.decant10 !== undefined) {

                boton10 =

                    '<button class="decant-btn ' +
                    (p.decant10 === "SIN STOCK" ? "sin-stock" : "") +
                    '" data-tipo="10">' +

                    '10ml' +

                    '</button>';
            }


            card.innerHTML =

                '<div class="contenedor-img" style="height:200px;display:flex;align-items:center;justify-content:center;overflow:hidden;">' +

                    '<img src="' + p.imagen + '" ' +
                    'alt="' + p.nombre + '" ' +
                    'class="img-perfume" ' +
                    'style="max-height:100%;transition:transform 0.4s ease;transform:scale(0.75);">' +

                '</div>' +

                '<h2>' + p.nombre + '</h2>' +

                '<p>' + p.marca + '</p>' +

                '<div class="decants">' +

                    boton5 +
                    boton10 +

                '</div>' +

                '<p class="info-puffs">' +
                    'Seleccioná el tamaño del decant' +
                '</p>' +

                '<p class="precio">' +
                    '' +
                '</p>' +

                '<button class="btn-consultar-ws">' +
                    'Consultar' +
                '</button>' +

                '<a href="' + p.link + '" target="_blank" class="btn-ver-mas">' +
                    'Ver más' +
                '</a>';


            const img = card.querySelector(".img-perfume");
            const precioLabel = card.querySelector(".precio");
            const infoPuffs = card.querySelector(".info-puffs");
            const btnWS = card.querySelector(".btn-consultar-ws");


            // =====================================
            // BOTONES DE DECANT
            // =====================================

            card.querySelectorAll(".decant-btn").forEach(function(btn) {

                btn.onclick = function() {

                    // No hacer nada si está sin stock
                    if (btn.classList.contains("sin-stock")) {
                        return;
                    }


                    card.querySelectorAll(".decant-btn").forEach(function(b) {

                        b.classList.remove("activo");

                    });


                    btn.classList.add("activo");


                    const tipo = btn.getAttribute("data-tipo");

                    let nuevoPrecio;


                    if (tipo === "5") {

                        img.style.transform = "scale(0.55)";

                        infoPuffs.textContent = "~75 atomizaciones";

                        nuevoPrecio = p.decant5;

                    }


                    if (tipo === "10") {

                        img.style.transform = "scale(0.75)";

                        infoPuffs.textContent = "~150 atomizaciones";

                        nuevoPrecio = p.decant10;

                    }


                    precioLabel.textContent =
                        formatearPrecio(nuevoPrecio);

                };

            });


            // =====================================
            // WHATSAPP DECANT
            // =====================================

            btnWS.onclick = function() {

                const activo =
                    card.querySelector(".decant-btn.activo");


                if (!activo) {

                    alert("Seleccioná primero 5ml o 10ml.");

                    return;
                }


                const tipoEnvio =
                    activo.getAttribute("data-tipo");


                consultar(p.nombre, tipoEnvio);

            };


            catalogo.appendChild(card);

        }

    });
}


// ===============================
// BOTONES PERFUMES / DECANTS
// ===============================

document.querySelectorAll(".tipo-btn").forEach(function(btn) {

    btn.onclick = function() {

        document.querySelectorAll(".tipo-btn").forEach(function(b) {

            b.classList.remove("activo");

        });


        btn.classList.add("activo");


        tipoCatalogoActual =
            btn.getAttribute("data-tipo");


        mostrarPerfumes(marcaActual);

    };

});


// ===============================
// FILTROS DE MARCA
// ===============================

document.querySelectorAll(".filtros button").forEach(function(btn) {

    btn.onclick = function() {

        document.querySelectorAll(".filtros button").forEach(function(b) {

            b.classList.remove("activo");

        });


        btn.classList.add("activo");


        marcaActual =
            btn.getAttribute("data-marca");


        mostrarPerfumes(marcaActual);

    };

});


// ===============================
// INICIO
// ===============================

mostrarPerfumes();
```
