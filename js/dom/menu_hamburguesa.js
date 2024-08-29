export default function hamburgerMenu(panelBtn, panel, linkMenu){
    const d= document; 
    d.addEventListener("click", e => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){ //el segundo para incluir a todos los elementos que tenga el boton
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if(e.target.matches(linkMenu)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}