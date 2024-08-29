const d = document,
    $main = d.querySelector("main");
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
        url: "http://127.0.0.1:5500/ajax-ejercicios/assets/home.html",
        success: (respuesta) => $main.innerHTML = respuesta,
        error: (err) => $main.innerHTML = err
    })
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