var nueva = document.getElementsByClassName('pendientes'); // Variable para llamar al div donde se va a escribir las tareas 
var btn = document.getElementById('add');

function agregar() {
    var tareaNombre = document.getElementById('tarea').value;
        if(tareaNombre == ""){
        alert("Campo de tarea nueva vacia...")
    }
    else{
        var newTask = createTask(tareaNombre);
    document.getElementById('pendientes').appendChild(newTask);

    }
}

function createTask(tareaNombre) {
    var newTask = document.createElement('div');
    newTask.setAttribute("class","textoDiv");
    var checkbox = document.createElement('input'); // cear un input
    checkbox.type = 'checkbox'; // tipo del input es checkbox
    var label = document.createElement('label'); //le crea el  texto al checkbox
    label.setAttribute("class","texto");
    label.innerHTML = tareaNombre;

    //Crear boton para borrar
    var button = document.createElement('button');
    button.innerHTML = 'Borrar Tarea';
    button.setAttribute('onclick', 'borrar(id)');
    button.id = 'button' + nueva;

    //Agegar hijo al div, conctenido o lista de atrea
    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    newTask.appendChild(button);
    return newTask;
}

function borrar(buttonId) {
    //La propiedad de sólo lectura node.parentNode devuelve el padre del nodo especificado en el árbol.
    var task = document.getElementById(buttonId).parentNode;
    task.remove();
}

btn.onclick = function(){
    agregar();
}