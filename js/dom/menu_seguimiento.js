const d = document,
    n = navigator,
    w = window;
export default function seguimientoMenu(panel, menuA, seccion){
    const $section = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries) => {
        //console.log("entries:", entries)
        entries.forEach(entry => {
            //(entry.target.getAttribute("id") === entry.target.id) lo mismo
            //console.log("entry", entry.target.getAttribute("id"));
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${entry.target.id}"]`).classList.add("active");
            }
            else{
                d.querySelector(`a[data-scroll-spy][href="#${entry.target.id}"]`).classList.remove("active");
            }
        });
    }
    const observer = new IntersectionObserver(cb, {
        //root/* de quien observo por defecto document */
        //rootMargin: "-250px" para reducir el area de observación
        threshold: [0.5, 0.75] //trabaja con porcentaje de visualizacion de 0 a 1 para este caso del 50% al 75% del observado  
    });
    $section.forEach(el => observer.observe(el))
}