const d = document,
    n = navigator.geolocation;
export default function geolocalizacion(latitud, longitud, precision, mapa){
    let auxLatitud =  d.getElementById(latitud).textContent,
        auxLongitud =  d.getElementById(longitud).textContent,
        auxPrecision =  d.getElementById(precision).textContent;
    n.getCurrentPosition(pos => {
        let lat = pos.coords.latitude,
            long = pos.coords.longitude,
            preci = pos.coords.accuracy;
        d.getElementById(latitud).innerHTML = `${auxLatitud}<b>${lat}</b>`;
        d.getElementById(longitud).innerHTML = `${auxLongitud}<b>${long}</b>`;
        //otra manera sin usar variables
        d.getElementById(precision).innerHTML = `${d.getElementById(precision).textContent}<b>${pos.coords.accuracy} </b>metros`;
        //creando coordenadas para el mapa
        let auxMapa = new google.maps.LatLng(lat, long);
        //creando opciones del mapa
        let myOptions = {
            zoom: 15, 
            center: auxMapa, 
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        //instanciando el mapa en el html segun el id del div y con las opciones y coordenadas correspondientes
        let map = new google.maps.Map(d.getElementById(mapa), myOptions);
        //agregando el punto rojo de ubicacion en el mapa ya instanciado
        let marker = new google.maps.Marker({
            position:auxMapa,
            map: map,
            title: ""
        });
    });
}
