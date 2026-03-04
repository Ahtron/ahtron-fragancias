const catalogo = document.getElementById("catalogo");

let tipoSeleccionado = "botella";

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

{
nombre: "9PM Elixir EDP 100ml",
marca: "Afnan",
botellaNombre: "100ml",
price: 90000,
decant5: 7000,
decant10: 12000,
imagen: "img/perfumes/afnan_9pm_elixir.jpg",
link: "https://www.fragrantica.es/perfume/Afnan/9PM-Elixir-111894.html"
},

{
nombre: "9PM EDP Masculino 100ml",
marca: "Afnan",
botellaNombre: "100ml",
price: 70000,
decant5: 6000,
decant10: 10000,
imagen: "img/perfumes/afnan_9pm.jpg",
link: "https://www.fragrantica.es/perfume/Afnan/9pm-65414.html"
},

{
nombre: "Club de Nuit Intense Man EDT 105ml",
marca: "Armaf",
botellaNombre: "105ml",
price: "Sin Stock",
imagen: "img/perfumes/armaf_cdn_intense.jpg",
link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Intense-Man-34696.html"
},

{
nombre: "Club de Nuit Precieux 1 EDP 55ml",
marca: "Armaf",
botellaNombre: "55ml",
price: 105000,
decant5: 9000,
decant10: 15000,
imagen: "img/perfumes/armaf_precieux.jpg",
link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Precieux-I-93272.html"
},

{
nombre: "Club de Nuit Maleka EDP 105ml",
marca: "Armaf",
botellaNombre: "105ml",
price: 85000,
decant5: 7000,
decant10: 12000,
imagen: "img/perfumes/armaf_maleka.jpg",
link: "https://www.fragrantica.es/perfume/Armaf/Club-De-Nuit-Maleka-106168.html"
},

{
nombre: "Art of Universe EDP 100ml",
marca: "Lattafa",
botellaNombre: "100ml",
price: 78000,
decant5: 6500,
decant10: 11000,
imagen: "img/perfumes/lattafa_art_of_universe.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Art-Of-Universe-101314.html"
},

{
nombre: "Vintage Radio EDP 100ml",
marca: "Lattafa",
botellaNombre: "100ml",
price: 68000,
decant5: 6000,
decant10: 10000,
imagen: "img/perfumes/lattafa_vintage_radio.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Vintage-Radio-89454.html"
},

{
nombre: "Khamrah Qahwa EDP 100ml",
marca: "Lattafa",
botellaNombre: "100ml",
price: 63000,
decant5: 5500,
decant10: 9500,
imagen: "img/perfumes/lattafa_khamrah_qahwa.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Khamrah-Qahwa-88175.html"
},

{
nombre: "Asad EDP 100ml",
marca: "Lattafa",
botellaNombre: "100ml",
price: 67000,
decant5: 6000,
decant10: 10000,
imagen: "img/perfumes/lattafa_asad.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-72821.html"
},

{
nombre: "Asad Bourbon EDP 100ml",
marca: "Lattafa",
botellaNombre: "100ml",
price: 74000,
decant5: 6500,
decant10: 11000,
imagen: "img/perfumes/lattafa_asad_bourbon.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-Bourbon-101124.html"
},

{
nombre: "Badee Al Oud Honor & Glory EDP 100ml",
marca: "Lattafa",
botellaNombre: "100ml",
price: 62000,
decant5: 5500,
decant10: 9500,
imagen: "img/perfumes/lattafa_honor_glory.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Honor-Glory-84302.html"
},

{
nombre: "Badee Al Oud For Glory EDP 100ml",
marca: "Lattafa",
botellaNombre: "100ml",
price: 62000,
decant5: 5500,
decant10: 9500,
imagen: "img/perfumes/lattafa_for_glory.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Oud-for-Glory-64948.html"
},

{
nombre: "Jean Lowe Inmortel EDP 100ml",
marca: "Maison Alhambra",
botellaNombre: "100ml",
price: 70000,
decant5: 6000,
decant10: 10000,
imagen: "img/perfumes/maison_jean_lowe_inmortel.jpg",
link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Jean-Lowe-Immortal-83666.html"
},

{
nombre: "Salvo Intense EDP 100ml",
marca: "Maison Alhambra",
botellaNombre: "100ml",
price: 60000,
decant5: 5000,
decant10: 9000,
imagen: "img/perfumes/maison_salvo_intense.jpg",
link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Salvo-Intense-96001.html"
}

];

function formatearPrecio(valor){

if(typeof valor === "number"){
return "$" + valor.toLocaleString("es-AR");
}

return valor;

}

function mostrarPerfumes(filtro = "todas"){

catalogo.innerHTML = "";

perfumes.forEach(p => {

if(filtro === "todas" || p.marca === filtro){

const card = document.createElement("div");
card.className = "producto";

let precioMostrar = p.price;

if(tipoSeleccionado === "5" && p.decant5){
precioMostrar = p.decant5;
}

if(tipoSeleccionado === "10" && p.decant10){
precioMostrar = p.decant10;
}

const nombreBotella = p.botellaNombre || "Botella";

card.innerHTML =

`<img src="${p.imagen}" alt="${p.nombre}">

<h2>${p.nombre}</h2>
<p>${p.marca}</p>

<div class="selector-tamano">

<button class="decant-btn" data-ml="botella">${nombreBotella}</button>

${p.decant5 ? `<button class="decant-btn" data-ml="5">5ml</button>` : ""}

${p.decant10 ? `<button class="decant-btn" data-ml="10">10ml</button>` : ""}

</div>

<p class="precio">${formatearPrecio(precioMostrar)}</p>

<button class="btn-consultar">Consultar</button>

<a href="${p.link}" target="_blank" class="btn-ver-mas">Ver más</a>`;

card.querySelector(".btn-consultar").onclick = function(){
consultar(p.nombre, tipoSeleccionado);
};

catalogo.appendChild(card);

}

});

}

document.querySelectorAll(".filtros button").forEach(btn => {

btn.addEventListener("click", function(){

mostrarPerfumes(this.dataset.marca);

});

});

document.addEventListener("click", function(e){

if(e.target.classList.contains("decant-btn")){

tipoSeleccionado = e.target.dataset.ml;

mostrarPerfumes();

}

});

mostrarPerfumes();

