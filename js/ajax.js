(() => {
    //XHMLHttpRequest
    //instancia
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();
        //especificacion de eventos
    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;
        //console.log(xhr);   
        if(xhr.status >= 200 && xhr.status < 300){
            //console.log("exito");   
            //console.log(xhr.responseText);   
            let json = JSON.parse(xhr.responseText);
            //console.log(json);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
                $fragment.appendChild($li); 
            });
            $xhr.appendChild($fragment);
        }
        else{
            //console.log("error"); 
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;  
        }
    });
        //apertura metodo y Url
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
        //envio dependiendo a la utilidad
        xhr.send();
})();
(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => {
        //console.log(respuesta);
        return respuesta.ok ?respuesta.json(): Promise.reject(respuesta);
    })
    .then(json => {
        json.forEach(el => {
            let $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        })
        $fetch.appendChild($fragment);
    })
    .catch(error => {
        //console.log("error",error);
        let message = error.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Error ${error.status}: ${message}`;
    }).finally(() => {
        //console.log("esto se ejecuta siempre");
    });
})();
(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();
    async function getData(){
        try{
            let respuesta = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await respuesta.json();
            //console.log(respuesta, json);
            if(!respuesta.ok) throw{status: respuesta.status, statusText: respuesta.statusText}
            json.forEach(el => {
                let $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })
            $fetchAsync.appendChild($fragment);
        }
        catch(err){
            //console.log("error", err)
            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        }
        finally{
            //console.log("Esto se ejecuta siempre async")
        }
    }
    getData()
})();
(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => {
        //console.log(respuesta);
        let json = respuesta.data;
        json.forEach(el => {
            let $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        })
        $axios.appendChild($fragment);
    })
    .catch(error => {
        //console.log(error.response);
        let message = error.response.statusText || "Ocurrió un error";
            $axios.innerHTML = `Error ${error.response.status}: ${message}`;
    })
    .finally(() => {
        //console.log("Se ejecuta siempre axios")
    })
})();
(() => {
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();
    async function getData(){
        try{
            let respuesta = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await respuesta.data;
           json.forEach(el => {
                let $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })
            $axiosAsync.appendChild($fragment);
        }
        catch(error){
            let message = error.response.statusText || "Ocurrió un error";
            $axiosAsync.innerHTML = `Error ${error.response.status}: ${message}`;
        }
        finally{
            //console.log("Se ejecuta siempre axios-async");
        }
    }
    getData();
})()