const catalogo = document.getElementById("catalogo");

function consultar(nombrePerfume) {
const telefono = "5492613392404";
const mensaje = "Hola! Quisiera consultar por el perfume " + nombrePerfume;
const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
window.open(url, "_blank");
}

function consultarDecant(nombrePerfume, ml) {
const telefono = "5492613392404";
const mensaje = "Hola! Quisiera consultar por el decant de " + ml + "ml del perfume " + nombrePerfume;
const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
window.open(url, "_blank");
}

const perfumes = [

{
nombre: "9PM Elixir EDP 100ml",
marca: "Afnan",
price: 90000,
decant5: 7000,
decant10: 12000,
imagen: "img/perfumes/afnan_9pm_elixir.jpg",
link: "https://www.fragrantica.es/perfume/Afnan/9PM-Elixir-111894.html"
},

{
nombre: "9PM EDP Masculino 100ml",
marca: "Afnan",
price: 70000,
decant5: 6000,
decant10: 10000,
imagen: "img/perfumes/afnan_9pm.jpg",
link: "https://www.fragrantica.es/perfume/Afnan/9pm-65414.html"
}

];

function formatearPrecio(valor) {
if (typeof valor === "number") {
return "$" + valor.toLocaleString("es-AR");
} else {
return valor;
}
}

function mostrarPerfumes(filtro = "todas") {

catalogo.innerHTML = "";

perfumes.forEach(p => {

if (filtro === "todas" || p.marca === filtro) {

const card = document.createElement("div");
card.className = "producto";

card.innerHTML =
`<img src="${p.imagen}" alt="${p.nombre}">

<h2>${p.nombre}</h2>
<p>${p.marca}</p>

<p class="precio">${formatearPrecio(p.price)}</p>

<div class="tamaños">

<button class="btn-botella">Botella</button>

<button class="btn-decant5">Decant 5ml</button>

<button class="btn-decant10">Decant 10ml</button>

</div>

<button class="btn-consultar">Consultar</button>

<a href="${p.link}" target="_blank" class="btn-ver-mas">Ver más</a>`;

const precioElemento = card.querySelector(".precio");

card.querySelector(".btn-botella").onclick = function () {

precioElemento.innerText = formatearPrecio(p.price);

consultar(p.nombre);

};

card.querySelector(".btn-decant5").onclick = function () {

if(p.decant5){

precioElemento.innerText = formatearPrecio(p.decant5);

}

consultarDecant(p.nombre,5);

};

card.querySelector(".btn-decant10").onclick = function () {

if(p.decant10){

precioElemento.innerText = formatearPrecio(p.decant10);

}

consultarDecant(p.nombre,10);

};

card.querySelector(".btn-consultar").onclick = function () {

consultar(p.nombre);

};

catalogo.appendChild(card);

}

});

}

document.querySelectorAll(".filtros button").forEach(btn => {

btn.addEventListener("click", function () {

mostrarPerfumes(this.dataset.marca);

});

});

mostrarPerfumes();

