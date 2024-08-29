const d = document,
    n = navigator;
export default function conexionDesconcexion(header, contH1){
    let conectado = "Conectado a una red con acceso a internet",
        noConectado = "Sin conexión a internet";
    contH1 = d.querySelector(contH1);
    n.connection.addEventListener("change", e => {
        if(!n.onLine){
            contH1.textContent = noConectado;
            d.querySelector(header).classList.add("conexion-off");
            setTimeout(() => {
                contH1.textContent = "";
                d.querySelector(header).classList.remove("conexion-off");
            }, 2000);
        }
        else{
            contH1.textContent = conectado;
            d.querySelector(header).classList.add("conexion-on");
            setTimeout(() => {
                contH1.textContent = "";
                d.querySelector(header).classList.remove("conexion-on");
            }, 2000);
            //console.log("VOLVEMOS A TENER CONEXION");
        }
    })
}
//(otra alternativa) https://www.youtube.com/watch?v=kRVXR0v1SKk&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=94 