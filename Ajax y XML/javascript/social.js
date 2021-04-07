
//Para cargar el archivo al cargar la pagina
document.addEventListener("DOMContentLoaded", ajax)
function ajax() {
    var http = new XMLHttpRequest(); //encargado de crear la solicitud
    var url = "http://127.0.0.1:5500/barraNav.html" // cargar la url a llamar

    http.onreadystatechange = function () {
        //Evaluar el estado de la respuesta
        if (this.readyState == 4 && this.status == 200) {
            // se indica que lo que queremos que se ejecute o cambie
            document.getElementById("respuesta").innerHTML = this.responseText;
        }
    };
    http.open("GET", url);
    http.send();
};




// cargra la pagina al hacer click
document.getElementById("btn").addEventListener("click", ajax1)
function ajax1() {
    var http = new XMLHttpRequest(); //encargado de crear la solicitud
    var url = "http://127.0.0.1:5500/barraNav.html" // cargar la url a llamar

    http.onreadystatechange = function () {
        //Evaluar el estado de la respuesta
        if (this.readyState == 4 && this.status == 200) {
            // se indica que lo que queremos que se ejecute o cambie
            document.getElementById("respuesta1").innerHTML = this.responseText;
        }
    };
    http.open("GET", url);
    http.send();
};

