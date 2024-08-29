const d = document;
export default function carrucelJs(sliderPadre, sliders, btnPrev, btnNext){
    d.addEventListener("click", ev => {
        if(ev.target.matches(btnPrev)){
            if(d.querySelector(sliderPadre).firstElementChild.classList.contains("active")){
                d.querySelector(sliderPadre).lastElementChild.classList.add("active");
                d.querySelector(sliderPadre).firstElementChild.classList.remove("active");
            }
            else{
                //console.log(d.querySelector(sliderPadre).children[0].classList)
                for(let i=0; i<d.querySelector(sliderPadre).children.length; i++){
                    if(d.querySelector(sliderPadre).children[i].classList.contains("active")){
                        d.querySelector(sliderPadre).children[i].classList.remove("active");
                        d.querySelector(sliderPadre).children[i-1].classList.add("active");
                    }
                }
            }
        }
        if(ev.target.matches(btnNext)){
            if(d.querySelector(sliderPadre).lastElementChild.classList.contains("active")){
                d.querySelector(sliderPadre).firstElementChild.classList.add("active");
                d.querySelector(sliderPadre).lastElementChild.classList.remove("active");
            }
            else{
                //console.log(d.querySelector(sliderPadre).children[0].classList)
                for(let i=0; i<d.querySelector(sliderPadre).children.length; i++){
                    if(d.querySelector(sliderPadre).children[i].classList.contains("active")){
                        d.querySelector(sliderPadre).children[i].classList.remove("active");
                        d.querySelector(sliderPadre).children[i+1].classList.add("active");
                        break;
                    }
                }
            }
        }
    });
}