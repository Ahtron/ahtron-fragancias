const catalogo = document.getElementById("catalogo");

function consultar(nombrePerfume, tipo = "botella") {
    var telefono = "5492613392404";
    var mensaje = "Hola! Quisiera consultar por el perfume " + nombrePerfume;

    if (tipo === "5") {
        mensaje = "Hola! Quisiera consultar por el decant de 5ml del perfume " + nombrePerfume;
    } else if (tipo === "10") {
        mensaje = "Hola! Quisiera consultar por el decant de 10ml del perfume " + nombrePerfume;
    }

    // Formato ultra-compatible:
    var url = "https://wa.me" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

const perfumes = [
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

            card.innerHTML = 
                '<div class="contenedor-img" style="height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden;">' +
                    '<img src="' + p.imagen + '" alt="' + p.nombre + '" class="img-perfume" style="max-height: 100%; transition: transform 0.4s ease;">' +
                '</div>' +
                '<h2>' + p.nombre + '</h2>' +
                '<p>' + p.marca + '</p>' +
                '<div class="decants">' +
                    '<button class="decant-btn activo" data-tipo="botella">' + nombreBotella + '</button>' +
                    '<button class="decant-btn" data-tipo="5">5ml</button>' +
                    '<button class="decant-btn" data-tipo="10">10ml</button>' +
                '</div>' +
                '<p class="info-puffs" style="font-size: 0.85rem; color: #888; margin: 10px 0;">Botella Original</p>' +
                '<p class="precio">' + formatearPrecio(p.price) + '</p>' +
                '<button class="btn-consultar-ws">Consultar</button>' +
                '<a href="' + p.link + '" target="_blank" class="btn-ver-mas">Ver más</a>';

            var img = card.querySelector(".img-perfume");
            var precioLabel = card.querySelector(".precio");
            var infoPuffs = card.querySelector(".info-puffs");
            var btnWS = card.querySelector(".btn-consultar-ws");

            card.querySelectorAll(".decant-btn").forEach(function(btn) {
                btn.onclick = function() {
                    card.querySelectorAll(".decant-btn").forEach(function(b) { b.classList.remove("activo"); });
                    btn.classList.add("activo");

                    var tipo = btn.getAttribute("data-tipo");
                    var nuevoPrecio = p.price;

                    if (tipo === "botella") {
                        img.style.transform = "scale(1)";
                        infoPuffs.textContent = "Botella Original";
                        nuevoPrecio = p.price;
                    } else if (tipo === "5") {
                        img.style.transform = "scale(0.55)";
                        infoPuffs.textContent = "~75 atomizaciones";
                        nuevoPrecio = p.decant5;
                    } else if (tipo === "10") {
                        img.style.transform = "scale(0.75)";
                        infoPuffs.textContent = "~150 atomizaciones";
                        nuevoPrecio = p.decant10;
                    }
                    precioLabel.textContent = formatearPrecio(nuevoPrecio);
                };
            });

            btnWS.onclick = function() {
                var activo = card.querySelector(".decant-btn.activo");
                var tipoEnvio = activo ? activo.getAttribute("data-tipo") : "botella";
                consultar(p.nombre, tipoEnvio);
            };

            catalogo.appendChild(card);
        }
    });
}

document.querySelectorAll(".filtros button").forEach(function(btn) {
    btn.onclick = function () {
        mostrarPerfumes(this.getAttribute("data-marca"));
    };
});

mostrarPerfumes();

