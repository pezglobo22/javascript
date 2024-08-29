const d = document,
    $main = d.querySelector("main"),
    $header = d.querySelector("header");
const ajax = (options) => {
    let{url, success, error} = options;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;
        if(xhr.status >= 200 && xhr.status < 300){
            let html = xhr.responseText;
            success(html)
        }
        else{
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    });
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send();
}
d.addEventListener("DOMContentLoaded", e => {
    ajax({
        url: "http://127.0.0.1:5500/ajax-ejercicios/assets/header.html",
        success: (respuesta) => $header.innerHTML = respuesta,
        error: (err) => $main.innerHTML = err
    });
    ajax({
        url: "http://127.0.0.1:5500/ajax-ejercicios/assets/home.html",
        success: (respuesta) => $main.innerHTML = respuesta,
        error: (err) => $main.innerHTML = err
    });
    // de manera diferente con dataAtribute
    const includeHTML = (elemento, url) => {
        const xhr1 = new XMLHttpRequest();
        xhr1.addEventListener("readystatechange", e => {
            if(xhr1.readyState !== 4) return;
            if(xhr1.status >= 200 && xhr1.status < 300){
                elemento.outerHTML = xhr1.responseText;
            }
            else{
                let message = xhr1.statusText || "Ocurrió un error";
                elemento.outerHTML = `<div><p>${xhr1.status}: ${message}</p></div>` 
            }
        });
        xhr1.open("GET", url);
        xhr1.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhr1.send();
    }
    d.querySelectorAll("[data-include]").forEach(el => {includeHTML(el, el.getAttribute("data-include"))})
});

d.addEventListener("click", e => {
    if(e.target.matches(".menu a")){
        e.preventDefault();
        ajax({
            url: e.target.href,
            success: (respuesta) => $main.innerHTML = respuesta,
            error: (err) => $main.innerHTML = err
        })
    }
});