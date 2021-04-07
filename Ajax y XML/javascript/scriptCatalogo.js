document.getElementById("catalogo").addEventListener("click", catalogo)
function catalogo() {
    var xhr = new XMLHttpRequest(); // Se declara el objeto HTTPS
    xhr.onreadystatechange = function () {
        //Evaluar el estado de la respuesta
        if (this.readyState == 4 && this.status == 200) {
            // se indica que lo que queremos que se ejecute o cambie
            //ejecutar la funcion
            cargarXML(this);
        }
    };

    xhr.open("GET", 'catalogo.xml', true); //El metodo de enbio es asincrono; con el open genera la solicitud para la url del contenido requerido
    xhr.send(); // se utiliza post si debo especificar los parametros.
}

function cargarXML(xml) {
    var docXML = xml.responseXML; //Se espera un elemento XML
    var tabla = "<tr> <th>ARTISTA</th> <th>TITULO</th> </tr>";
    var discos = docXML.getElementsByTagName("CD"); //Se crea un array donde se traen los cd

    for (let index = 0; index < discos.length; index++) {
        //con el for se van aregalndo tablas y filias
        //Abre las etiquetas de la tabla y las agrega
        tabla += "<tr><td>"
        //Agregar contenido a la tabla (+=)-> agragar contenido que se trae por medio de la etiqueta
        tabla += discos[index].getElementsByTagName("ARTIST")[0].textContent;
        tabla += "</td><td>";
        
        tabla += discos[index].getElementsByTagName("TITLE")[0].textContent;
        //cierra las etiquetas de la taba cuando ya el contenido se agrego
        tabla += "</td></tr>";
    
    }
    document.getElementById("demo").innerHTML = tabla;

}


