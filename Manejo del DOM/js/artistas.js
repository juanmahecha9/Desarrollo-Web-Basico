var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var artista1, edad1, nacionalidad1, tipo1;
var artista2, edad2, nacionalidad2, tipo2;
var artista3, edad3, nacionalidad3, tipo3;

//al dar click a la imagen 1
img1.onclick = function () {
    var x = document.getElementById('display1');
    if (x.style.display1 == 'none') {
        x.style.display1 = 'block';
        a1();
    }
    else {
        x.style.display1 = 'none';
    }
}

function a1() {

    artista1 = prompt("Nombre del artista"); //genera casilla par ingreso de texto
    edad1 = prompt("edad");
    nacionalidad1 = prompt("Nacionalidad");
    tipo1 = prompt("Genero Musical");

    alert(`El nombre del artista es: ${artista1} \nLa edad de ${artista1} es: ${edad1} \nLa nacionalidad de ${artista1} es: ${nacionalidad1} \n Su genero musical: ${tipo1}`)

    //nombre
    dato1 = document.createElement("p");
    dato1.innerHTML ="Nomnbre:" + " " + artista1;
    document.getElementById("display1").appendChild(dato1);
    //edad
    dato2 = document.createElement("p");
    dato2.innerHTML = "Edad:" + " " + edad1;
    document.getElementById("display1").appendChild(dato2);
    //nacionalidad
    dato3 = document.createElement("p");
    dato3.innerHTML = "Nacionalidad:" + " " + nacionalidad1;
    document.getElementById("display1").appendChild(dato3);
    //tipo
    dato4 = document.createElement("p");
    dato4.innerHTML = "Genero:" + " " + tipo1;
    document.getElementById("display1").appendChild(dato4);
}

//al dar click en la imagen 2
img2.onclick = function () {
    var x = document.getElementById('display1');
    if (x.style.display2 == 'none') {
        x.style.display2 = 'block';
        a2();
    }
    else {
        x.style.display2 = 'none';
    }
}

function a2() {

    artista2 = prompt("Nombre del artista"); //genera casilla par ingreso de texto
    edad2 = prompt("edad");
    nacionalidad2 = prompt("Nacionalidad");
    tipo2 = prompt("Genero musical");

    alert(`El nombre del artista es: ${artista1} \nLa edad de ${artista1} es: ${edad1} \nLa nacionalidad de ${artista1} es: ${nacionalidad1} \nSu genero musical: ${tipo1}`)

    //nombre
    dato1 = document.createElement("p");
    dato1.innerHTML ="Nombre" + " " + artista2;
    document.getElementById("display2").appendChild(dato1);
    //edad
    dato2 = document.createElement("p");
    dato2.innerHTML = "Edad" + " " +edad2;
    document.getElementById("display2").appendChild(dato2);
    //nacionalidad
    dato3 = document.createElement("p");
    dato3.innerHTML = "Nacionalidad" + " " +nacionalidad2;
    document.getElementById("display2").appendChild(dato3);
    //tipo
    dato4 = document.createElement("p");
    dato4.innerHTML = "Genero" + " " +tipo2;
    document.getElementById("display2").appendChild(dato4);
}

//Al dar click en l imagen 3
img3.onclick = function () {
    var x = document.getElementById('display1');
    if (x.style.display3 == 'none') {
        x.style.display3 = 'block';
        a3();
    }
    else {
        x.style.display3 = 'none';
    }
}

function a3() {

    artista3 = prompt("Nombre del artista"); //genera casilla par ingreso de texto
    edad3 = prompt("edad");
    nacionalidad3 = prompt("Nacionalidad");
    tipo3 = prompt("Genero Musical");

    alert(`El nombre del artista es: ${artista1} \nLa edad de ${artista1} es: ${edad1} \nLa nacionalidad de ${artista1} es: ${nacionalidad1} \nSu genero musical: ${tipo1}`)

    //nombre
    dato1 = document.createElement("p");
    dato1.innerHTML ="Nomnbre" + " " + artista3;
    document.getElementById("display3").appendChild(dato1);
    //edad
    dato2 = document.createElement("p");
    dato2.innerHTML ="Edad" + " " + edad3;
    document.getElementById("display3").appendChild(dato2);
    //nacionalidad
    dato3 = document.createElement("p");
    dato3.innerHTML = "Nacioanlidad" + " " +nacionalidad3;
    document.getElementById("display3").appendChild(dato3);
    //tipo
    dato4 = document.createElement("p");
    dato4.innerHTML ="Genero" + " " + tipo3;
    document.getElementById("display3").appendChild(dato4);
}



