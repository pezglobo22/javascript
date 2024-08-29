const d = document;
export default function flitrado(idBusqueda, idCard){
    function validarContenido(texto, letras){  
        return texto.includes(letras);
    }
    d.addEventListener("keyup", e => {
        if(!(d.getElementById(idBusqueda).value === "")){
            if(e.keyCode === 8){
                d.querySelectorAll(idCard).forEach(elemento => {
                    if(validarContenido(elemento.textContent, d.getElementById(idBusqueda).value)){
                        elemento.parentElement.classList.remove("filter");
                    }
                })
            }
            d.querySelectorAll(idCard).forEach(elemento => {
                if(!validarContenido(elemento.textContent, d.getElementById(idBusqueda).value)){
                    elemento.parentElement.classList.add("filter");
                }
            })
        }
        else{
            d.querySelectorAll(idCard).forEach(elemento => {
                elemento.parentElement.classList.remove("filter");
            })
        }
    })
}