const d = document;
export default function voiceInteligente(){
    const $selectVoice = d.getElementById("voice"),
        $contenidoVoice = d.getElementById("contenido_voice"),
        $btnVoice = d.getElementById("btnVoice");
    let voiceNueva = new SpeechSynthesisUtterance(),
        arrayVoice = [];
    d.addEventListener("DOMContentLoaded", e => {
        window.speechSynthesis.addEventListener("voiceschanged", ev => {
            arrayVoice = window.speechSynthesis.getVoices();
            arrayVoice.forEach(voice => {
                let $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name} - ${voice.lang}`;
                $selectVoice.appendChild($option);
            });
        })
    });
    d.addEventListener("change", e => {
        if(e.target === $selectVoice){
            voiceNueva.voice = arrayVoice.find(voice => voice.name === e.target.value)
        }
        console.log(voiceNueva);
    });
    d.addEventListener("click", e => {
        if(e.target === $btnVoice){
            console.log($contenidoVoice.value)
            voiceNueva.text = $contenidoVoice.value
            speechSynthesis.speak(voiceNueva);
            console.log(voiceNueva)

        }
        /*let texto = "";
        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        hablar(texto);*/
    });
}