const d = document;
let contadorInterval;
export default function contadorTiempo(contador, h2Props){
    contador = d.querySelector(contador);
    contadorInterval = setInterval(() => {
        let time = Date.now(),
            time1 = new Date("2021", "08", "2", "18", "10", "50"),
            diferencia = (time - time1)/(1000*60*60*24*365);
        if(diferencia < 0) diferencia = diferencia * -1;
        let anios = diferencia - Math.floor(diferencia),
            dias = (anios - Math.floor(anios)) * 365,
            horas = (dias - Math.floor(dias)) * 24,
            minutos = (horas - Math.floor(horas)) * 60,
            segundos = (minutos - Math.floor(minutos)) * 60,
            contadorAux = ``;
        if(d.querySelector(h2Props).classList.contains("is-active")){
            contadorAux = `<h1 class="is-active" >Faltan: ${Math.floor(diferencia)} años ${Math.floor(dias)} dias ${Math.floor(horas)} horas ${Math.floor(minutos)} minutos ${Math.floor(segundos)} segundos</h1>`
        }
        else{
            contadorAux = `<h1>Faltan: ${Math.floor(diferencia)} años ${Math.floor(dias)} dias ${Math.floor(horas)} horas ${Math.floor(minutos)} minutos ${Math.floor(segundos)} segundos</h1>`
        }
        //console.log(Math.floor(diferencia), Math.floor(dias), Math.floor(horas), Math.floor(minutos), Math.floor(segundos));
        contador.innerHTML = contadorAux;
        if(Math.floor(segundos) === 0 && Math.floor(minutos) === 0 && Math.floor(horas) === 0 && Math.floor(dias) === 0 && Math.floor(diferencia) === 0){
            clearInterval(contadorInterval);
            contadorAux = `<h1>Llego al final</h1>`;
            contador.innerHTML = contadorAux;
        }
    }, 1000);
}
/* arraySM = [];
function datoSM(nreg, nres){
    for (let i = 1; i < 3; i++) {
        interval = setInterval(() => {
            document.getElementsByTagName("input")[0].value = nreg;
            document.getElementsByTagName("input")[1].value = "C";
            document.getElementsByTagName("input")[2].value = nres;
            document.getElementsByTagName("input")[3].value = 2021;
            document.getElementsByTagName("button")[0].click();
            arraySM[i-1] = document.getElementsByTagName("div")[58].textContent;
        }, 1500);
    }
}
datoSM(197038, 4956)
function datoSM(nreg, nres){
    let i = 0;
    interval = setInterval(() => {
        document.getElementsByTagName("input")[0].value = nreg;
        document.getElementsByTagName("input")[1].value = "C";
        document.getElementsByTagName("input")[2].value = nres;
        document.getElementsByTagName("input")[3].value = 2021;
        document.getElementsByTagName("button")[0].click();
        arraySM[i-1] = document.getElementsByTagName("div")[58].textContent;
        i++;
        nreg++;
        nres++;
    }, 3000);
} */