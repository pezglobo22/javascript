const d = document,
    w = window;
export default function testResponsivo(idText1, idText2, idText3, btnS1, btnS2){
    let btnSub1 = d.querySelector(btnS1).id;
    btnSub1 = d.getElementById(btnSub1);
    let btnSub2 = d.querySelector(btnS2),
        varText = "",
        varAncho = "",
        varAlto = "",
        varTodo = "",
        Ventana = "";
    d.addEventListener("click", e => {
        if(e.target.matches(btnS1)){
            //console.log(typeof(d.getElementById(idText2).value));
            //console.log(d.getElementById(idText1).value)
            if(d.getElementById(idText1).value === "" || d.getElementById(idText2).value == ""|| d.getElementById(idText3).value == ""){
                alert(`Faltan datos en: ${d.getElementById(idText1).placeholder} ó ${d.getElementById(idText2).placeholder} ó ${d.getElementById(idText3).placeholder}`);
            }
            else{
                varText = d.getElementById(idText1).value;
                varAncho = d.getElementById(idText2).value;
                varAlto = d.getElementById(idText3).value;
                btnSub1.disabled = true;
                varText = "https://" + varText + "/";
                varAncho = Number(varAncho); 
                varAlto = Number(varAlto); 
                varTodo = `width=${varAncho}, height=${varAlto}`;
                Ventana = window.open(varText, varText, varTodo);
                d.getElementById(idText1).disabled = true;
                d.getElementById(idText2).disabled = true;
                d.getElementById(idText3).disabled = true;
            }
        }
        if(e.target.matches(btnS2)){
            d.getElementById(idText1).value = null;
            d.getElementById(idText2).value = null;
            d.getElementById(idText3).value = null;
            btnSub1.disabled = false;
            d.getElementById(idText1).disabled = false;
            d.getElementById(idText2).disabled = false;
            d.getElementById(idText3).disabled = false;
            Ventana.close();
        }
    });
}
//(otra manera con submit) https://www.youtube.com/watch?v=9uIcLSHgzrM&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=92