export default function cambioEstilo(btnChange, page, h2Props, h1Props, header, h3Props, parrafo){
    const d = document,
        ls = localStorage;
    let auxContenido = `&#9790`,
        boton = d.querySelector(btnChange);
    const modoLight = () => {
        auxContenido = `&#9790`;
        boton.innerHTML = auxContenido;
        d.querySelector(page).classList.remove("html-is-active");
        d.querySelectorAll(h2Props).forEach((elemento) => elemento.classList.remove("is-active"));   
        d.querySelectorAll(h3Props).forEach((elemento) => elemento.classList.remove("is-active"));   
        d.querySelectorAll(parrafo).forEach((elemento) => elemento.classList.remove("is-active"));   
        d.querySelectorAll(h1Props).forEach((elemento1) => elemento1.classList.remove("is-active"));
        d.querySelector(header).classList.remove("is-active");
        ls.setItem("modo", "light");
    };
    const modoDark = () => {
        auxContenido = `&#9728`;
        boton.innerHTML = auxContenido;
        d.querySelector(page).classList.add("html-is-active");
        d.querySelectorAll(h2Props).forEach((elemento) => elemento.classList.add("is-active"));   
        d.querySelectorAll(h3Props).forEach((elemento) => elemento.classList.add("is-active"));   
        d.querySelectorAll(parrafo).forEach((elemento) => elemento.classList.add("is-active"));   
        d.querySelectorAll(h1Props).forEach((elemento1) => elemento1.classList.add("is-active"));      
        d.querySelector(header).classList.add("is-active");
        ls.setItem("modo", "dark");
    };
    d.addEventListener("click", e => {
        if(e.target.matches(btnChange)){
            if(auxContenido === `&#9790`){
                modoDark();
            }
            else{
                modoLight();
            }
        }
    })
    d.addEventListener("DOMContentLoaded", e => {
        if(ls.getItem("modo") === null) ls.setItem("modo", "light");
        if(ls.getItem("modo") === "light") modoLight();
        if(ls.getItem("modo") === "dark") modoDark();
    })
}
// (OTRO MODO) https://www.youtube.com/watch?v=16geDhp5Xmg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=90