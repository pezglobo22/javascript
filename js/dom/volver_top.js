const d = document;
export default function volverUp(row, btnTop){
    let $boton = d.querySelector(btnTop);
    setInterval(() => {
        let $limiteTop = d.querySelector(row);
        $limiteTop = $limiteTop.getBoundingClientRect();
        if($limiteTop.y < -500){
            d.querySelector(btnTop).classList.remove("hidden");
            d.addEventListener("click", e => {             
                if(e.target.matches(btnTop) || e.target.matches(`${btnTop} *`)){
                    scrollTo(0, 0);
                }
            });
        }
        else{
            d.querySelector(btnTop).classList.add("hidden")
        }
    }, 100);
}
//(para hacerlo de otra manera)https://www.youtube.com/watch?v=ZBaClgP7i_c&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=89