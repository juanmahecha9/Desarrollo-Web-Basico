//Para cargar el archivo al cargar la pagina NAVBAR
document.addEventListener("DOMContentLoaded", ajax)
function ajax() {
    var http = new XMLHttpRequest(); //encargado de crear la solicitud
    var url = "http://127.0.0.1:5500/navbar.html" // cargar la url a llamar

    http.onreadystatechange = function () {
        //Evaluar el estado de la respuesta
        if (this.readyState == 4 && this.status == 200) {
            // se indica que lo que queremos que se ejecute o cambie
            document.getElementById("header").innerHTML = this.responseText;
        }
    };
    http.open("GET", url);
    http.send();
};


//Cargar FOOTER
//Para cargar el archivo al cargar la pagina
document.addEventListener("DOMContentLoaded", ajax1)
function ajax1() {
    var http = new XMLHttpRequest(); //encargado de crear la solicitud
    var url = "http://127.0.0.1:5500/footer.html#" // cargar la url a llamar

    http.onreadystatechange = function () {
        //Evaluar el estado de la respuesta
        if (this.readyState == 4 && this.status == 200) {
            // se indica que lo que queremos que se ejecute o cambie
            document.getElementById("footer").innerHTML = this.responseText;
        }
    };
    http.open("GET", url);
    http.send();
};
