document.getElementById("cambiarContenido").addEventListener("click", cambio) 
function cambio(){
    var xhr = new XMLHttpRequest(); // Se declara el objeto HTTPS
    xhr.onreadystatechange = function(){
        //Evaluar el estado de la respuesta
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("texto").innerHTML = this.responseText;
            //A traves del DOM imprime la respueta
        }
    };

    xhr.open("GET", 'holamundo.txt', true); //El metodo de enbio es asincrono; con el open genera la solicitud para la url del contenido requerido
    xhr.send(); // se utilizapost si debo especificar los parametros.

}

