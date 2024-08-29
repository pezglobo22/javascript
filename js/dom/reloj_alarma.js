export default function reloj_alarma(btn, btn2, btn3, btn4, h2Props){
    const d= document;
    let estadoBoton1 = document.getElementById("boton1");
    let estadoBoton3 = document.getElementById("boton3");
    let audio = new Audio("../assets/Sebastián Yatra Myke Towers  Pareja del Año Official Video.mp3");
    setInterval(() => {
        let hora = new Date().toLocaleTimeString();
        //let relojMostrado = hora.getHours()+ ':' + hora.getMinutes() + ':' + hora.getSeconds();
        let reloj = "",
            text1 = ``,
            text2 = ``;
        if(d.querySelector(h2Props).classList.contains("is-active")){
            text1 = `<div class="row" id="fila1"><h1  class="is-active">
                        ${hora}
                        </h1></div>
                `;
            text2 = `<div class="row" id="fila1">
                    </div>
                `; 
        }
        else{
            text1 = `<div class="row" id="fila1"><h1>
                        ${hora}
                        </h1></div>
                `;
            text2 = `<div class="row" id="fila1">
                    </div>
                `; 
        }
        d.addEventListener("click", e => {
            if(e.target.matches(btn)){
                reloj = document.getElementById("fila1");
                reloj.outerHTML = text1;
                estadoBoton1.disabled = true;
            }
            if(e.target.matches(btn2)){
                reloj = document.getElementById("fila1");
                reloj.outerHTML = text2;
                estadoBoton1.disabled = false;        
            }
            if(e.target.matches(btn3)){
                audio.play();
                estadoBoton3.disabled = true;
            }
            if(e.target.matches(btn4)){
                audio.pause();
                audio.currentTime = 0;
                estadoBoton3.disabled = false;
            }
        })
        if(estadoBoton1.disabled === true){
            reloj = document.getElementById("fila1");
            reloj.outerHTML = text1;
        }
    }, 1000);
}
//otra opción en: https://www.youtube.com/watch?v=ktqSr7Lq_Hc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=84