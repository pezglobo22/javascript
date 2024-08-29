export function tamanio (valor){
    let val = {
        variable: console.log(typeof(valor)),
        valor
    }
    if(valor==null){
        return "0";
    }
    if(Number(val.valor)){
        let valAux = String(val.valor);
        return valAux.length;
    }
    else{
        return val.valor.length;   
    }  
}
export function medida(valor1="",valor2=0){
    let val = {
        cadena: valor1,
        tamanio: valor1.length,
        numero: valor2,
        aux: console.log([typeof(valor1), typeof(valor2)])
    };
    if(val.numero >= 0 || val.numero != null){
        let aux = val.cadena + " ";
        for(let i=0; i<val.numero-1; i++){
            if (i === val.numero-2){
                aux= aux + val.cadena;
            }
            else{
                aux= aux + val.cadena + " ";
            }
        }
        let reversa;
        reversa = ""
        for(let i=val.tamanio; i>0; i--){
            reversa = reversa + val.cadena[i-1];
        }
        let tamanioAux = val.tamanio,
            cadenaAux = val.cadena,
            contador = 0,
            expReg = new RegExp(val.numero,"ig"),
            palindromo;
        while(expReg.test(cadenaAux) == true){
            cadenaAux = cadenaAux.slice(cadenaAux.search(val.numero)+val.numero.length,cadenaAux.length) 
            expReg.test(cadenaAux)
            contador += 1;
        }
        let auxContador = 0,
            auxString = String(val.cadena),
            cadenaAux1 = 0;
            cadenaAux1 = auxString.replaceAll(val.numero,"1");
            //console.log(cadenaAux1);
        for(let i=0; i<cadenaAux1.length; i++){
            if(cadenaAux1[i]==="1"){
                auxContador += 1;
            }
        }
        let conversion = 0;
        if(val.cadena === "C"){
            conversion = (val.numero * 1.8) + 32;
        }
        else{
            if(val.cadena === "F"){
                conversion = (val.numero - 32) / 1.8;
            }
            else{
               conversion = "datos incorrectos"; 
            }
        }
        let base = String(val.cadena),
            auxBase = 0,
            auxBase1 = [],
            j = 0,
            dividir = val.cadena,
            auxBase2 = 0;
        if(val.numero === 2){
            for(let i=0; i<base.length; i++){
                if(base[i] === "1"){
                    auxBase = auxBase + Math.pow(2, (base.length - 1) - i);
                }
            }
        }
        else{
            if(val.numero === 10){
                while((dividir / 2) >= 1){
                    if((dividir % 2) === 0){
                        if (dividir === 2 ){
                            auxBase1[j] = 0;
                            auxBase1[j+1] = dividir / 2;
                        }
                        else{
                            auxBase1[j] = 0;
                        }
                        dividir = dividir / 2;
                    }
                    else{
                        if (dividir === 3){
                            auxBase1[j] = 1;
                            auxBase1[j+1] = (dividir / 2 - 0.5);
                        }
                        else{
                            auxBase1[j] = 1;
                        }
                        dividir = (dividir / 2) - 0.5;
                    }
                    j += 1;
                }
                let aux2 = 1;
                for(let i=0; i<auxBase1.length; i++){
                    auxBase2 = auxBase2 + (auxBase1[i] * aux2);
                    aux2 = aux2 * 10;
                }
            }         
            else{
                auxBase = "base no definida";
            }
        }
        let descuento = val.cadena - ((val.numero * val.cadena) / 100);
        let numeroVocales = 0,
            numeroConsonantes = 0,
            cadenaAuxVocales = val.cadena;
        for(let i=0; i<cadenaAuxVocales.length; i++){
            if(cadenaAuxVocales[i] === "a" || cadenaAuxVocales[i] === "e" || cadenaAuxVocales[i] === "i" || cadenaAuxVocales[i] === "o" || cadenaAuxVocales[i] === "u"){
                numeroVocales += 1;
            }
            else{
                numeroConsonantes += 1;
            }
        }
        let auxContadorVocales = [("numero de vocales :"+ numeroVocales), ("numero de consonantes :"+ numeroConsonantes)];
        let nuevaCadena = {
            ejer2: auxString.slice(0, val.numero),
            ejer3: auxString.replaceAll(" ", ","),
            ejer4: aux,
            ejer5: reversa,
            ejer6: contador,
            ejer7: palindromo = (reversa === val.cadena)? true: false,
            ejer8: auxString.replaceAll(val.numero, ""),
            ejer9: auxContador,
            ejer10: conversion,
            ejer11: auxBase,
            ejer12: auxBase2,
            ejer13: descuento,
            ejer14: auxContadorVocales 
        }
        return nuevaCadena;
    }
    else{
        return " numero negativo";
    }
}
export function numeros(valor=0, valor1=0,valor3=""){
    let val = valor,
        auxVal = valor,
        capicua = 0,
        factorial = 1,
        primo = 0,
        parImpar = 0;
    while(auxVal / 10 > 0.01){
        capicua = (capicua * 10) + auxVal % 10;
        auxVal = (auxVal / 10 ) - ((auxVal % 10) * 0.1);
    }
    for(let i=1; val+1>i; i++){
        factorial = factorial * i;
    }
    for(let i=1; Math.round(val/2)>=i; i++){
        if((val % i) === 0){
            primo += 1;
        }
    }
    let tiempoPasado = valor1 - Date.now();
    tiempoPasado = Math.floor(tiempoPasado / -(1000*3600*24*365))
    let valido,
        valido1,
        arrobaValido = valor3.replaceAll("@", "1"),
        puntoValido = valor3.replaceAll(".", "2"),
        auxArroba = 0,
        auxPunto = 0;
    for(let i=0; i<arrobaValido.length; i++){
        if(arrobaValido[i] === "1"){
            auxArroba += 1;  
        }  
    } 
    for(let i=0; i<puntoValido.length; i++){
        if(puntoValido[i] === "2"){
            auxPunto += 1;  
        }  
    }
    let resulatodos = {
        ejer9: Math.round(Math.random()*(600 - 501) + 501),
        ejer10: capicua = (capicua === val)? true: false,
        ejer11: factorial,
        ejer12: primo = (primo > 1)? false: true,
        ejer13: parImpar = ((val % 2) === 0)? true: false,
        ejer14: tiempoPasado,
        ejer15: valido = (val.length >= 6)? true: false,
        ejer16: valido1 = (auxArroba === 1 && auxPunto >= 1)? true: false
    }
    return resulatodos;
}

export function vector(valor=[]){
    let auxVector = {
        tamanio: valor.length,
        valor
    }
    let guardarVector = [];
    for(let i=0; i<auxVector.tamanio; i++){
        guardarVector[i] = auxVector.valor[i] * auxVector.valor[i]; 
    }
    let auxMenor = 1000,
        auxMayor = 0;
    for(let i=0; i<auxVector.tamanio; i++){
        if(auxVector.valor[i] > auxMayor){
            auxMayor=auxVector.valor[i];
        }
        if(auxVector.valor[i] < auxMenor){
            auxMenor=auxVector.valor[i];
        }
    }
    let auxPar = 0,
        auxImpar = 0,
        vectorPar = [],
        vectorImpar = [];
    for(let i=0; i<auxVector.tamanio; i++){
        if((auxVector.valor[i] % 2) === 0){
            vectorPar[auxPar] = auxVector.valor[i];
            auxPar += 1;
        }
        else{
            vectorImpar[auxImpar] = auxVector.valor[i];
            auxImpar += 1;
        }
    }
    let aarray = auxVector.valor.sort(function(a, b){
        return a - b;
        })
    let ordenarDecendente = aarray,
        ordenarAcendente = aarray;
    ordenarDecendente = ordenarDecendente.reverse();
    ordenarAcendente = ordenarAcendente.reverse();
    let mismos = auxVector.valor,
        comparar = 0;
    for(let i=0; i<auxVector.tamanio; i++){
        comparar = auxVector.valor[i];
        for(let j=0; j<auxVector.tamanio; j++){
            if(comparar === auxVector.tamanio[j+1]){
                
            }
        }
    }
    let devolver = {
        ejer21: guardarVector,
        ejer22: [auxMayor, auxMenor],
        ejer23: {
            pares: vectorPar,
            impares: vectorImpar
        },
        ejer24: ordenarAcendente
    }
    return devolver;
}
