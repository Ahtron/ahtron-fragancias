const catalogo = document.getElementById("catalogo");

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
},

{
nombre: "Club de Nuit Intense Man EDT 105ml",
marca: "Armaf",
price: "Sin Stock",
imagen: "img/perfumes/armaf_cdn_intense.jpg",
link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Intense-Man-34696.html"
},

{
nombre: "Club de Nuit Precieux 1 EDP 55ml",
marca: "Armaf",
price: 105000,
decant5: 9000,
decant10: 15000,
imagen: "img/perfumes/armaf_precieux.jpg",
link: "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Precieux-I-93272.html"
},

{
nombre: "Club de Nuit Maleka EDP 105ml",
marca: "Armaf",
price: 85000,
decant5: 7000,
decant10: 12000,
imagen: "img/perfumes/armaf_maleka.jpg",
link: "https://www.fragrantica.es/perfume/Armaf/Club-De-Nuit-Maleka-106168.html"
},

{
nombre: "Art of Universe EDP 100ml",
marca: "Lattafa",
price: 78000,
decant5: 6500,
decant10: 11000,
imagen: "img/perfumes/lattafa_art_of_universe.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Art-Of-Universe-101314.html"
},

{
nombre: "Vintage Radio EDP 100ml",
marca: "Lattafa",
price: 68000,
decant5: 6000,
decant10: 10000,
imagen: "img/perfumes/lattafa_vintage_radio.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Vintage-Radio-89454.html"
},

{
nombre: "Khamrah Qahwa EDP 100ml",
marca: "Lattafa",
price: 63000,
decant5: 5500,
decant10: 9500,
imagen: "img/perfumes/lattafa_khamrah_qahwa.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Khamrah-Qahwa-88175.html"
},

{
nombre: "Asad EDP 100ml",
marca: "Lattafa",
price: 67000,
decant5: 6000,
decant10: 10000,
imagen: "img/perfumes/lattafa_asad.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-72821.html"
},

{
nombre: "Asad Bourbon EDP 100ml",
marca: "Lattafa",
price: 74000,
decant5: 6500,
decant10: 11000,
imagen: "img/perfumes/lattafa_asad_bourbon.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-Bourbon-101124.html"
},

{
nombre: "Badee Al Oud Honor & Glory EDP 100ml",
marca: "Lattafa",
price: 62000,
decant5: 5500,
decant10: 9500,
imagen: "img/perfumes/lattafa_honor_glory.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Honor-Glory-84302.html"
},

{
nombre: "Badee Al Oud For Glory EDP 100ml",
marca: "Lattafa",
price: 62000,
decant5: 5500,
decant10: 9500,
imagen: "img/perfumes/lattafa_for_glory.jpg",
link: "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Oud-for-Glory-64948.html"
},

{
nombre: "Jean Lowe Inmortel EDP 100ml",
marca: "Maison Alhambra",
price: 70000,
decant5: 6000,
decant10: 10000,
imagen: "img/perfumes/maison_jean_lowe_inmortel.jpg",
link: "https://www.fragrantica.es/perfume/Maison-Alhambra/Jean-Lowe-Immortal-83666.html"
},

{
nombre: "Salvo Intense EDP 100ml",
marca: "Maison Alhambra",
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

function mostrarPerfumes(filtro="todas"){

catalogo.innerHTML="";

perfumes.forEach(p=>{

if(filtro==="todas" || p.marca===filtro){

const card=document.createElement("div");
card.className="producto";

card.innerHTML=`

<img src="${p.imagen}" alt="${p.nombre}">

<h2>${p.nombre}</h2>

<p>${p.marca}</p>

<div class="opciones">

<button onclick="cambiarTipo(this,'botella',${p.price},'${p.nombre}')">Botella</button>

${p.decant5 ? `<button onclick="cambiarTipo(this,'5',${p.decant5},'${p.nombre}')">5ml</button>` : ""}

${p.decant10 ? `<button onclick="cambiarTipo(this,'10',${p.decant10},'${p.nombre}')">10ml</button>` : ""}

</div>

<p class="precio">${formatearPrecio(p.price)}</p>

<button class="btn-consultar" onclick="consultar('${p.nombre}','botella')">Consultar</button>

<a href="${p.link}" target="_blank" class="btn-ver-mas">Ver más</a>

`;

catalogo.appendChild(card);

}

});

}

function cambiarTipo(btn,tipo,precio,nombre){

const card = btn.closest(".producto");

card.querySelector(".precio").innerText = formatearPrecio(precio);

card.querySelector(".btn-consultar").onclick=function(){
consultar(nombre,tipo);
}

}

document.querySelectorAll(".filtros button").forEach(btn=>{

btn.addEventListener("click",function(){

mostrarPerfumes(this.dataset.marca);

});

});

mostrarPerfumes();

mostrarPerfumes();

