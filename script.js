const catalogo = document.getElementById("catalogo");

function consultar(nombrePerfume, tipo = "botella") {
    const telefono = "5492613392404";
    let mensaje = "Hola! Quisiera consultar por el perfume " + nombrePerfume;

    if (tipo === "5") mensaje = "Hola! Quisiera consultar por el decant de 5ml del perfume " + nombrePerfume;
    if (tipo === "10") mensaje = "Hola! Quisiera consultar por el decant de 10ml del perfume " + nombrePerfume;

    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

const perfumes = [
    {
        nombre: "9PM Elixir EDP",
        marca: "Afnan",
        botellaNombre: "100ml",
        price: 90000,
        decant5: 9500,
        decant10: 18000,
        imagen: "img/perfumes/afnan_9pm_elixir.jpg",
        link: "https://www.fragrantica.es/perfume/Afnan/9PM-Elixir-111894.html"
    },
    // ... (Mantené el resto de tus perfumes igual aquí)
    {
        nombre: "Salvo Intense EDP",
        marca: "Maison Alhambra",
        botellaNombre: "100ml",
        price: 60000,
        decant5: 6500,
        decant10: 12000,
        imagen: "img/perfumes/maison_salvo_intense.jpg",
        link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Salvo-Intense-96001.html"
    }
];

function formatearPrecio(valor) {
    if (typeof valor === "number") return "$" + valor.toLocaleString("es-AR");
    return valor;
}

function mostrarPerfumes(filtro = "todas") {
    catalogo.innerHTML = "";

    perfumes.forEach(p => {
        if (filtro === "todas" || p.marca === filtro) {
            const card = document.createElement("div");
            card.className = "producto";
            const nombreBotella = p.botellaNombre || "Botella";

            card.innerHTML = `
                <div class="contenedor-img">
                    <img src="${p.imagen}" alt="${p.nombre}" class="img-perfume">
                </div>
                <h2>${p.nombre}</h2>
                <p class="marca-txt">${p.marca}</p>
                <div class="decants">
                    <button class="decant-btn activo" data-tipo="botella">${nombreBotella}</button>
                    <button class="decant-btn" data-tipo="5">5ml</button>
                    <button class="decant-btn" data-tipo="10">10ml</button>
                </div>
                <p class="info-puffs">Tamaño completo</p>
                <p class="precio">${formatearPrecio(p.price)}</p>
                <button class="btn-consultar">Consultar</button>
                <a href="${p.link}" target="_blank" class="btn-ver-mas">Ver más</a>`;

            const img = card.querySelector(".img-perfume");
            const precio = card.querySelector(".precio");
            const infoPuffs = card.querySelector(".info-puffs");

            card.querySelectorAll(".decant-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    card.querySelectorAll(".decant-btn").forEach(b => b.classList.remove("activo"));
                    btn.classList.add("activo");

                    const tipo = btn.dataset.tipo;
                    let nuevoPrecio = p.price;

                    // LÓGICA DE ESCALA VISUAL
                    if (tipo === "botella") {
                        img.style.transform = "scale(1)";
                        infoPuffs.textContent = "Tamaño completo";
                        nuevoPrecio = p.price;
                    } else if (tipo === "5") {
                        img.style.transform = "scale(0.6)"; // Se achica para simular decant
                        infoPuffs.textContent = "~75 atomizaciones";
                        nuevoPrecio = p.decant5;
                    } else if (tipo === "10") {
                        img.style.transform = "scale(0.8)"; // Tamaño intermedio
                        infoPuffs.textContent = "~150 atomizaciones";
                        nuevoPrecio = p.decant10;
                    }

                    precio.textContent = formatearPrecio(nuevoPrecio);
                });
            });

            card.querySelector(".btn-consultar").onclick = () => {
                const activo = card.querySelector(".decant-btn.activo");
                consultar(p.nombre, activo ? activo.dataset.tipo : "botella");
            };

            catalogo.appendChild(card);
        }
    });
}

// Inicialización de filtros
document.querySelectorAll(".filtros button").forEach(btn => {
    btn.addEventListener("click", function () {
        mostrarPerfumes(this.dataset.marca);
    });
});

mostrarPerfumes();














