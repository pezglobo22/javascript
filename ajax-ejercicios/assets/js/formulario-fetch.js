const d = document;
function enviarFormulario(){
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");
    //console.log($form, $inputs)
    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span);
        });
    d.addEventListener("keyup", e => {
        if(e.target.matches(".contact-form [required]")){
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern
            if(pattern && $input.value !== ""){
                let exReg = new RegExp(pattern);
                return !exReg.exec($input.value)
                    ?d.getElementById($input.name).classList.add("is-active")
                    :d.getElementById($input.name).classList.remove("is-active")
            }
            if(!pattern){
                return $input.value === ""
                    ?d.getElementById($input.name).classList.add("is-active")
                    :d.getElementById($input.name).classList.remove("is-active")
            }
        }
    });
    d.addEventListener("submit", e => {
        e.preventDefault();
        alert("Envio de formulario!!!");
        const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/f4316221e0633d454e469963f85dfdc1", {
            method: "POST",
            body: new FormData(e.target)//para ya no asignar a cada valor sino todo los campos del formulario con el atributo name
        })
        .then(respuesta => respuesta.ok? respuesta.json(): Promise.reject(respuesta))
        .then(json => {
            console.log(json);
            $loader.classList.add("none");
            $response.classList.remove("none");
            $response.innerHTML = `<p>${json.message}</p>`;
            $form.reset();
        })
        .catch(error => {
            console.log(error);
            let message = error.statusText || "Ocurrio un error al eviar";
            $response.innerHTML = `<p>Error ${error.status}: ${message}</p>`;
        })
        .finally(
            setTimeout(() => {
                $response.classList.add("none");
                $response.innerHTML = "";
            }, 3000)
        )
    })
}
d.addEventListener("DOMContentLoaded", enviarFormulario());