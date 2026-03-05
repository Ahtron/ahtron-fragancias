var catalogo = document.getElementById("catalogo");

function enviarWhatsApp(nombre, tipo) {
    var numero = "5492613392404";
    var mensaje = "Hola! Quisiera consultar por el perfume " + nombre;

    if (tipo === "5") {
        mensaje = "Hola! Quisiera consultar por el decant de 5ml de " + nombre;
    } else if (tipo === "10") {
        mensaje = "Hola! Quisiera consultar por el decant de 10ml de " + nombre;
    }

    // Formato con barras explícitas para evitar el error de DNS
    var link = "https://wa.me" + numero + "?text=" + encodeURIComponent(mensaje);
    window.open(link, "_blank");
}

var perfumes = [
    { nombre: "9PM Elixir EDP", marca: "Afnan", botellaNombre: "100ml", price: 90000, decant5: 9500, decant10: 18000, imagen: "img/perfumes/afnan_9pm_elixir.jpg", link: "https://www.fragrantica.es" },
    { nombre: "9PM EDP Masculino", marca: "Afnan", botellaNombre: "100ml", price: 70000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/afnan_9pm.jpg", link: "https://www.fragrantica.es" },
    { nombre: "9PM Rebel EDP", marca: "Afnan", botellaNombre: "100ml", price: "SIN STOCK", decant5: 9500, decant10: 18000, imagen: "img/perfumes/afnan_9pm_rebel.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Mandarin Sky EDP", marca: "Armaf", botellaNombre: "100ml", price: "SIN STOCK", decant5: 8500, decant10: 16000, imagen: "img/perfumes/armaf_mandarine_sky.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Club de Nuit Intense Man EDT", marca: "Armaf", botellaNombre: "105ml", price: "SIN STOCK", decant5: 8500, decant10: 16000, imagen: "img/perfumes/armaf_cdn_intense.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Club de Nuit Precieux 1 EDP", marca: "Armaf", botellaNombre: "55ml", price: 105000, decant5: 17000, decant10: 34000, imagen: "img/perfumes/armaf_precieux.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Club de Nuit Maleka EDP", marca: "Armaf", botellaNombre: "105ml", price: 85000, decant5: 9000, decant10: 17000, imagen: "img/perfumes/armaf_maleka.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Art of Universe EDP", marca: "Lattafa", botellaNombre: "100ml", price: 78000, decant5: 8200, decant10: 16000, imagen: "img/perfumes/lattafa_art_of_universe.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Vintage Radio EDP", marca: "Lattafa", botellaNombre: "100ml", price: 68000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/lattafa_vintage_radio.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Khamrah Qahwa EDP", marca: "Lattafa", botellaNombre: "100ml", price: 63000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/lattafa_khamrah_qahwa.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Asad EDP", marca: "Lattafa", botellaNombre: "100ml", price: 67000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/lattafa_asad.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Asad Bourbon EDP", marca: "Lattafa", botellaNombre: "100ml", price: 74000, decant5: 8000, decant10: 15500, imagen: "img/perfumes/lattafa_asad_bourbon.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Badee Al Oud Honor & Glory EDP", marca: "Lattafa", botellaNombre: "100ml", price: 62000, decant5: 7000, decant10: 14000, imagen: "img/perfumes/lattafa_honor_glory.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Badee Al Oud For Glory EDP", marca: "Lattafa", botellaNombre: "100ml", price: 55000, decant5: 5500, decant10: 10000, imagen: "img/perfumes/lattafa_for_glory.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Jean Lowe Inmortel EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: 70000, decant5: 7500, decant10: 15000, imagen: "img/perfumes/maison_jean_lowe_inmortel.jpg", link: "https://www.fragrantica.es" },
    { nombre: "Salvo Intense EDP", marca: "Maison Alhambra", botellaNombre: "100ml", price: 60000, decant5: 6500, decant10: 12000, imagen: "img/perfumes/maison_salvo_intense.jpg", link: "https://www.fragrantica.es" }
];

function formatearPrecio(valor) {
    if (typeof valor === "number") {
        return "$" + valor.toLocaleString("es-AR");
    }
    return valor;
}

function mostrarPerfumes(filtro) {
    if (!filtro) { filtro = "todas"; }
    catalogo.innerHTML = "";

    perfumes.forEach(function(p) {
        if (filtro === "todas" || p.marca === filtro) {
            var card = document.createElement("div");
            card.className = "producto";
            var nBotella = p.botellaNombre || "Botella";

            card.innerHTML = 
                '<div style="height:200px;display:flex;align-items:center;justify-content:center;overflow:hidden;">' +
                    '<img src="' + p.imagen + '" alt="' + p.nombre + '" class="img-perfume" style="max-height:100%;transition:transform 0.4s ease;">' +
                '</div>' +
                '<h2>' + p.nombre + '</h2>' +
                '<p>' + p.marca + '</p>' +
                '<div class="decants">' +
                    '<button class="decant-btn activo" data-tipo="botella">' + nBotella + '</button>' +
                    '<button class="decant-btn" data-tipo="5">5ml</button>' +
                    '<button class="decant-btn" data-tipo="10">10ml</button>' +
                '</div>' +
                '<p class="info-puffs" style="font-size:0.85rem;color:#888;margin:10px 0;">Botella Original</p>' +
                '<p class="precio">' + formatearPrecio(p.price) + '</p>' +
                '<button class="btn-ws">Consultar</button>' +
                '<a href="' + p.link + '" target="_blank" class="btn-ver-mas">Ver mas</a>';

            var img = card.querySelector(".img-perfume");
            var precioTxt = card.querySelector(".precio");
            var infoTxt = card.querySelector(".info-puffs");
            var btnWS = card.querySelector(".btn-ws");

            card.querySelectorAll(".decant-btn").forEach(function(btn) {
                btn.onclick = function() {
                    card.querySelectorAll(".decant-btn").forEach(function(b) { b.classList.remove("activo"); });
                    btn.classList.add("activo");
                    var tipo = btn.getAttribute("data-tipo");
                    if (tipo === "botella") {
                        img.style.transform = "scale(1)";
                        infoTxt.innerHTML = "Botella Original";
                        precioTxt.innerHTML = formatearPrecio(p.price);
                    } else if (tipo === "5") {
                        img.style.transform = "scale(0.55)";
                        infoTxt.innerHTML = "~75 atomizaciones";
                        precioTxt.innerHTML = formatearPrecio(p.decant5);
                    } else if (tipo === "10") {
                        img.style.transform = "scale(0.75)";
                        infoTxt.innerHTML = "~150 atomizaciones";
                        precioTxt.innerHTML = formatearPrecio(p.decant10);
                    }
                };
            });

            btnWS.onclick = function() {
                var act = card.querySelector(".decant-btn.activo");
                var t = act ? act.getAttribute("data-tipo") : "botella";
                enviarWhatsApp(p.nombre, t);
            };

            catalogo.appendChild(card);
        }
    });
}

document.querySelectorAll(".filtros button").forEach(function(b) {
    b.onclick = function() { 
        mostrarPerfumes(this.getAttribute("data-marca")); 
    };
});

mostrarPerfumes("todas");
