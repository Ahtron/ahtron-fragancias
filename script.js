const catalogo = document.getElementById("catalogo");

function consultar(nombrePerfume) {
    const telefono = "5492613392404";
    const mensaje = `Hola! Quisiera consultar por el perfume ${nombrePerfume}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
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

function mostrarPerfumes(filtro = "todas") {
    catalogo.innerHTML = "";

    perfumes.forEach(perfume => {
        if (filtro === "todas" || perfume.marca === filtro) {
            const card = document.createElement("div");
            card.className = "producto";

            card.innerHTML = `
                ${perfume.etiqueta ? `<span class="badge">${perfume.etiqueta}</span>` : ""}
                <img src="${perfume.imagen}" alt="${perfume.nombre}">
                <h2>${perfume.nombre}</h2>
                <p>${perfume.descripcion}</p>
                <button>Consultar</button>
            `;

            card.querySelector("button").addEventListener("click", () => {
                consultar(perfume.nombre);
            });

            catalogo.appendChild(card);
        }
    });
}

// 🔹 listeners de botones
document.querySelectorAll(".filtros button").forEach(btn => {
    btn.addEventListener("click", () => {
        mostrarPerfumes(btn.dataset.marca);
    });
});

// 🔹 mostrar al cargar
mostrarPerfumes();
