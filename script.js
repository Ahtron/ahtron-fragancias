const catalogo = document.getElementById("catalogo");

function consultar(nombrePerfume) {
    const telefono = "5492613392404";
    const mensaje = "Hola! Quisiera consultar por el perfume " + nombrePerfume;
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

const perfumes = [
    {
        nombre: "9PM",
        descripcion: "Fragancia intensa, ideal para salir.",
        imagen: "img/perfumes/perfume1.jpg",
        marca: "Afnan",
        etiqueta: "Más vendido"
    },
    {
        nombre: "Amber Rose",
        descripcion: "Dulce y sofisticado, ideal para la noche.",
        imagen: "img/perfumes/perfume2.jpg",
        marca: "Lattafa",
        etiqueta: "Nuevo"
    },
    {
        nombre: "Desert Musk",
        descripcion: "Aroma limpio y elegante con almizcle.",
        imagen: "img/perfumes/perfume3.jpg",
        marca: "Armaf",
        etiqueta: ""
    }
];

function mostrarPerfumes(filtro) {
    if (!filtro) filtro = "todas";
    catalogo.innerHTML = "";

    for (let i = 0; i < perfumes.length; i++) {
        const perfume = perfumes[i];

        if (filtro === "todas" || perfume.marca === filtro) {
            const div = document.createElement("div");
            div.className = "producto";

            if (perfume.etiqueta !== "") {
                const badge = document.createElement("span");
                badge.className = "badge";
                badge.innerText = perfume.etiqueta;
                div.appendChild(badge);
            }

            const img = document.createElement("img");
            img.src = perfume.imagen;
            img.alt = perfume.nombre;

            const h2 = document.createElement("h2");
            h2.innerText = perfume.nombre;

            const p = document.createElement("p");
            p.innerText = perfume.descripcion;

            const btn = document.createElement("button");
            btn.innerText = "Consultar";
            btn.onclick = function () {
                consultar(perfume.nombre);
            };

            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(btn);

            catalogo.appendChild(div);
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

// Mostrar al cargar
mostrarPerfumes();
