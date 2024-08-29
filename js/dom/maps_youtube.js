const d = document,
    w = window;
export default function enlaces(enlaceY, enlaceM){
    let auxNumero = 0,
        auxEnlaceY = d.querySelector(enlaceY),
        auxEnlaceM = d.querySelector(enlaceM),
        cambioYEnlace = `<a href="https://www.youtube.com/watch?v=OCIx92eMsfw" target="_black", rel="noopener">Enlace del video</a>`,
        cambioYVideo = `<iframe width="650" height="250" src="https://www.youtube.com/embed/OCIx92eMsfw" allowfullscreen></iframe>`,
        cambioMEnlace = `<a href="https://www.google.com.bo/maps/place/Cancha+San+Antonio+Bajo+Rafael+Pabon/@-16.4988703,-68.1114912,17.75z/data=!4m5!3m4!1s0x915f2044c1860a59:0x9899cbb557c6c73a!8m2!3d-16.4986697!4d-68.1115617?hl=es" target="_black", rel="noopener">Enlace Mapa</a>`,
        cambioMVideo = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7651.085622457348!2d-68.11381165064435!3d-16.498671818052788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2044c1860a59%3A0x9899cbb557c6c73a!2sCancha%20San%20Antonio%20Bajo%20Rafael%20Pabon!5e0!3m2!1ses!2sbo!4v1630619061897!5m2!1ses!2sbo" width="650" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    if(d.body.clientWidth < 751){
        auxEnlaceM.innerHTML = cambioMEnlace;
        auxEnlaceY.innerHTML = cambioYEnlace;
    }
    w.addEventListener("resize", e => {
        if(d.body.clientWidth < 751){
            auxEnlaceY.innerHTML = cambioYEnlace;
            auxEnlaceM.innerHTML = cambioMEnlace;
            auxNumero = 0;
        }
    });
    w.addEventListener("resize", e => {
        if(d.body.clientWidth >= 752){
            if(auxNumero === 0){
                auxEnlaceY.innerHTML = cambioYVideo;
                auxEnlaceM.innerHTML = cambioMVideo;
                auxNumero++;
            }
        }
    
    });
}


