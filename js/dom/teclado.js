const d = document;
let x = 0,
    y = 0;
export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),//objeto con la altura anchura y la posicion en top botton left y right
        limitsStage = $stage.getBoundingClientRect();
    //  console.log(e.keyCode);
    //console.log(limitsBall, limitsStage);
    switch(e.keyCode){
        case 37:
            e.preventDefault();//para que se desactiven otras funciones del teclado
            if(limitsBall.left > limitsStage.left) x--;
            break;
        case 38:
            e.preventDefault();
            if(limitsBall.top > limitsStage.top) y--;
            break;
        case 39:
            e.preventDefault();
            if(limitsStage.right > limitsBall.right) x++;
            break;
        case 40:
            e.preventDefault();
            if(limitsStage.bottom > limitsBall.bottom) y++;
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
export function shorcuts(e){
    /*console.log(e.type);
    console.log(e.key)
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e);*/
    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el Teclado");
    }
    if(e.key === "c" && e.ctrlKey){
        confirm("Haz lanzado una alerta con el Teclado");
    }
    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado una alerta con el Teclado");
    }
}