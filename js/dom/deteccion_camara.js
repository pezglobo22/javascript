const d = document,
    n = navigator;
export default function webCamara(id){
    const $video = d.getElementById(id);
    if(n.mediaDevices.getUserMedia){//validacion
        //estructura de promesas
        n.mediaDevices
        .getUserMedia({video: true, audio: false})
        .then((stream) => {
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
        .catch((error) => {
            $video.insertAdjacentHTML("afterend", `<p><mark>${error}</mark></p>`);
            //console.log(`Sucedio un error: ${error}`);
            }
        );
    }
}