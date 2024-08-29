const d = document,
    w = window;
export default function videoInteligenteF(video){
    d.addEventListener("visibilitychange", e => {
        if(d.visibilityState === "visible"){
            d.getElementById("videoInteligente").play();
        }
        else{
            d.getElementById("videoInteligente").pause();
        }
    });
    let videoPlay = d.querySelector(video);
    let cb = (elemento) => {
        if(elemento[0].isIntersecting){
            d.getElementById("videoInteligente").play();
        }
        else{
            d.getElementById("videoInteligente").pause();
        }
    }
    const observer = new IntersectionObserver(cb, {
        threshold: [0.5, 0.75]
    });
    observer.observe(videoPlay)
}