let texto = "";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);
console.log("******elementos del documento**********");
console.log(document.head);
console.log(document.documentElement);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
//setTimeout(() => {
//    console.log(document.getSelection().toString()); //para seleccionar lo marcado
//}, 3000);
//document.write("<h2>Hola mundo</h2>");
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByTagName("li"));
console.log(document.getElementById("menu")); 
//o
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((elemento) => console.log(elemento));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));


console.log("************atributos*************");
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.getAttribute("lang"));
//ó
document.documentElement.setAttribute("lang", "es-BO");
console.log(document.documentElement.getAttribute("lang"));

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_black"); //abrir en nueva página
$linkDOM.setAttribute("rel", "noopener"); //para no generar dependencia de la primera pagina
$linkDOM.setAttribute("href", "http://www.ebid.edu.bo/");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//data-atributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
$linkDOM.setAttribute("data-description", "ModeloDeObjetoDelDocumento")
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.hasAttribute("data-id"));

//css 
//https://www.youtube.com/watch?v=asR6_XGzI3s&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=65
const $card = document.querySelector(".card");
//acceder al atributo de la clase
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");//agregar propiedad
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");//quitar propiedad
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");//si tiene lo quita si no tiene agrega
$card.classList.replace("rotate-45", "rotate-135");//para remplazar
$card.classList.add("opacity-80", "sepia");//agragar mas de una

//texto y html
const whatIsDOM = document.getElementById("que-es");
let text = `
    <p>
        El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML.
    </p>
    <p>
        Éste proveé una representación estructural del documento, premitiendo modificar su contenido y presentación visual mediante código JS
    </p>
    <p>
        <mark>
            El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.
        </mark>
    </p>
`;
//para remplazar el texto en el documento
//whatIsDOM.innerText = text; //para internet explorer
whatIsDOM.textContent = text; //estandar
whatIsDOM.innerHTML = text; //para renderisar el documento
whatIsDOM.outerHTML = text; //remplaza la etiqueta por esta

//DOM traversing camputura elementos //element para elementos sin elementos para node
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.children[3].closest("section"));//busca ansestros por nombre de etiqueta div, body, etc

//crear elementos y fragmentos
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals");
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul")
document.body.appendChild($ul);
estaciones.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});
const continentes = ["America", "Europa", "Asia", "Africa", "Oceania"],
    $ul2 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();
continentes.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});
$ul2.appendChild($fragment);
document.body.appendChild($ul2);

//templates es una figura a seguir para crear elementos
const $cards1 = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment1 = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals",

        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people",

        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature"

        },

    ];
cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
    let $clone = document.importNode($template, true);//copiar el espacio del nodo 
    $fragment1.appendChild($clone);
})
$cards1.appendChild($fragment1);

//modificar elementos del DOM
const $cards2 = document.querySelector(".cards"),
    $newCard = document.createElement("figure");
$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");
$cards2.insertAdjacentElement("beforebegin", $newCard);//o $cards.before($newCard) hermano anterior,// beforeend (ultimo hijo) .append()
$cards2.insertAdjacentElement("afterbegin", $newCard);//o $cards.prepend($newCard) primer hijo,// afterend (hermano siguiente) .after()

//manejadores de eventos
function holaMundo(){
    alert("Hola Mundo");
    console.log(event);
}
function saludar(nombre="desconocid@"){
    alert(`Hola: ${nombre}`)
}
const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-remover");
$eventoSemantico.onclick = holaMundo //sin parentesis para que no aparesca al cargar la pagina
//ó
$eventoSemantico.onclick = (e) =>{
    alert("Hola mundo manejador semantico");
    console.log(e);
}
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola mundo Manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("ALE");
});
const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
}
$eventoRemover.addEventListener("dblclick", removerDobleClick);
//flujo de eventos
const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");
function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    e.stopPropagation();
}
console.log($divsEventos);
$divsEventos.forEach(div => {
    div.addEventListener("click", flujoEventos, {
        caputure: false,//false, burbuja del interno al externo - true captura del externo al interno
        //once: true,
    });
});
$linkEventos.addEventListener("click", (e) => {
    alert("hola zZzZzZz");
    e.preventDefault();//cancela el evento de abrir el link
})
//ó para menor uso de recursos y mayor precision en base a condicionales
document.addEventListener("dblclick", (e) => {
    console.log("Click en: ", e.target);
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }
    if(e.target.matches(".eventos-flujo a")){
        alert("Hola zZzZz");
        e.preventDefault();
    }
});//video 77 https://www.youtube.com/watch?v=j2fWSgOrxRs&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=77








