// Contenedor del catálogo
const catalogo = document.getElementById("catalogo");

// Botón WhatsApp
function consultar(nombrePerfume) {
    const telefono = "5492613392404";
    const mensaje = `Hola! Quisiera consultar por el perfume ${nombrePerfume}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

// Lista de perfumes
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
