function consultar(nombrePerfume) {
    const telefono = "5492613392404"; // TU NÚMERO
    const mensaje = `Hola! Quisiera consultar por el perfume ${nombrePerfume}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

const perfumes = [
    {
        nombre: "Oud Al Sultan",
        descripcion: "Fragancia intensa con notas de oud y ámbar.",
        imagen: "img/perfumes/perfume1.jpg",
        tipo: "amaderado",
        etiqueta: "Más vendido"
    },
    {
        nombre: "Amber Rose",
        descripcion: "Dulce y sofisticado, ideal para la noche.",
        imagen: "img/perfumes/perfume2.jpg",
        tipo: "dulce",
        etiqueta: "Nuevo"
    },
    {
        nombre: "Desert Musk",
        descripcion: "Aroma limpio y elegante con almizcle.",
        imagen: "img/perfumes/perfume3.jpg",
        tipo: "almizcle",
        etiqueta: ""
    }
];

catalogo.innerHTML += `
    <div class="producto">
        ${perfume.etiqueta ? `<span class="badge">${perfume.etiqueta}</span>` : ""}
        <img src="${perfume.imagen}" alt="${perfume.nombre}">
        <h2>${perfume.nombre}</h2>
        <p>${perfume.descripcion}</p>
        <button onclick="consultar('${perfume.nombre}')">
            Consultar
        </button>
    </div>
`;


