const d = document;
export default function valoresRandom(idValores, idBtn){
    let auxArray = [],
        i = 0;
    function generateRandomInt(min,max){
        return Math.floor((Math.random() * (max-min)) +min);
    }
    d.querySelectorAll(idValores).forEach(elemento => {
        auxArray[i] = elemento.textContent;
        i++;
    })
    d.addEventListener("click", e => {
        if(e.target.matches(idBtn)){
            let numeroAleatorio = generateRandomInt(1, auxArray.length+1);
            alert(`Del sorteo salió: ${auxArray[numeroAleatorio-1]}`);
        }
    })
}