import hamburgerMenu from "./dom/menu_hamburguesa.js";
import reloj_alarma from "./dom/reloj_alarma.js";
import contadorTiempo from "./dom/contador.js";
import {moveBall, shorcuts} from "./dom/teclado.js";
import volverUp from "./dom/volver_top.js";
import cambioEstilo from "./dom/dark_mode.js";
import enlaces from "./dom/maps_youtube.js";
import testResponsivo from "./dom/test_responsivo.js";
import conexionDesconcexion from "./dom/conexion.js"; 
import webCamara from "./dom/deteccion_camara.js";
import geolocalizacion from "./dom/geolocalizacion.js";
import flitrado from "./dom/filtrar_busqueda.js";
import valoresRandom from "./dom/valores_random.js";
import carrucelJs from "./dom/carrucel.js";
import seguimientoMenu from "./dom/menu_seguimiento.js";
import videoInteligenteF from "./dom/video_inteligente.js";
import validarDatos from "./dom/validar_datos.js";
import voiceInteligente from "./dom/voice_inteligente.js";
const $d = document;
$d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    reloj_alarma("#boton1","#boton2", "#boton3", "#boton4", "h2");
    contadorTiempo(".contador", "h2");
    volverUp(".row", ".panel-up"); 
    enlaces(".youtube", ".maps"); 
    testResponsivo("input1", "input2", "input3", "#btnSub1", "#btnSub2");
    /* sumar en tiempo real
    $d.addEventListener("keyup", e => {
        let a = $d.getElementById("input1").value,
            b = $d.getElementById("input2").value;
        if (a === null) a = 0;
        if (b === null) b = 0;
        a = Number(a);
        b = Number(b);
        $d.getElementById("input3").value = a + b;
    })
    */
    //conexionDesconcexion(".conexion", "#contConexion");
    webCamara("camaraWeb");
    geolocalizacion("latitud", "longitud", "precision", "mapsLink");
    flitrado("id-busqueda" ,"figcaption");
    valoresRandom(".valores", "#botonRandom");
    carrucelJs(".slider-slides", ".slider-slide", ".prev", ".next");
    seguimientoMenu(".panel", ".menu a", "section");
    videoInteligenteF(".videoI");
    validarDatos("nombre", "email", "asunto", "contenido", "#btnEnviar");
});
// keyup, keydown, keypress
$d.addEventListener("keydown", e => {
    shorcuts(e);
    moveBall(e, ".ball", ".stage");
}) 
cambioEstilo(".btn-change", "html", "h2", "h1", "header", "h3", "p");
voiceInteligente();



