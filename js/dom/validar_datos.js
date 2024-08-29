const d = document;
export default function validarDatos(name, email, asunto, contenido, btnEnviar){
    let auxName = d.getElementById(name),
        auxEmail = d.getElementById(email),
        auxAsunto = d.getElementById(asunto),
        auxContenido = d.getElementById(contenido);
    d.addEventListener("keyup", e => {
        if(auxName.value !== ""){
            if((/([a-z])/.test(auxName.value))){
                auxName.classList.add("datos-validados");
                //d.getElementById(name).nextElementSibling.attributes.hidden.specified = false;
                //console.log(auxName.nextElementSibling.attributes);
                if(!auxName.nextElementSibling.hasAttribute("hidden")){
                    auxName.nextElementSibling.toggleAttribute("hidden")
                }
            }
            else{
                auxName.nextElementSibling.removeAttribute("hidden");
            }
        }
        else{
            auxName.classList.remove("datos-validados");
        }
        if(auxEmail.value !== ""){
            if(/[@.]/.test(auxEmail.value)){
                auxEmail.classList.add("datos-validados");
                //d.getElementById(EmaauxEmail).nextElementSibling.attributes.hidden.specified = false;
                //console.log(auxEmail.nextElementSibling.attributes);
                if(!auxEmail.nextElementSibling.hasAttribute("hidden")){
                    auxEmail.nextElementSibling.toggleAttribute("hidden")
                }
            }
            else{
                auxEmail.nextElementSibling.removeAttribute("hidden");
            }
        }
        else{
            auxEmail.classList.remove("datos-validados");
        }
        if(auxAsunto.value !== ""){
            auxAsunto.classList.add("datos-validados");
        }
        else{
            auxAsunto.classList.remove("datos-validados");
        }
        if(auxContenido.value !== ""){
            if(auxContenido.value.length < 51){
                auxContenido.classList.add("datos-validados");
                //d.getElementById(name).nextElementSibling.attributes.hidden.specified = false;
                if(!auxContenido.nextElementSibling.hasAttribute("hidden")){
                    auxContenido.nextElementSibling.toggleAttribute("hidden")
                }
            }
            else{
                auxContenido.nextElementSibling.removeAttribute("hidden");
            }
        }
        else{
            auxContenido.classList.remove("datos-validados");
        }
    });
    d.addEventListener("click", ev => {
        if(ev.target.matches(btnEnviar)){
            alert(`Nombre: ${auxName.value}, Email: ${auxEmail.value}, Asunto: ${auxAsunto.value}, Contenido: ${auxContenido.value}`)
        }
    });
}