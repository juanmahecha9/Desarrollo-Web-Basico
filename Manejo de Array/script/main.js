var btn = document.getElementById("btn");
var txt = document.getElementById("txt");
btn.onclick = function () {
    uno();
    txt.value = "";
}

function uno() {
    texto = txt.value;
    //    console.log(texto)
    texto = texto.split("");
    //  console.log(texto)
    c1 = 0;
    c2 = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == " ") {
            c1++;
        }
        if (texto[i] != " ") {
            c2++
        }
    }
    textoR = texto.reverse().join("");
    textoR = textoR.toString();
    document.getElementById("texto").innerHTML = `la frase ingresa al reves es: ${textoR}`;
    document.getElementById("texto1").innerHTML = `la cantidad de espacios en blanco es: ${c1}`
    document.getElementById("texto2").innerHTML = `la cantidad de letras son: ${c2}`
}


var btn1 = document.getElementById("btn1");
var txt1 = document.getElementById("txt1");
btn1.onclick = function () {
    dos();
    txt1.value = "";
}

function dos() {
    texto = txt1.value;
    text = texto;
    texto = texto.replace(/\s/g, "-");
    texto = texto.split('').join('-');
    texto1 = texto.replace(/---/g, "--");
    document.getElementById("texto3").innerHTML = `la frase ingresa es: ${text}`;
    document.getElementById("texto4").innerHTML = `la frase reemplazada es: ${texto1}`;
}


var btn2 = document.getElementById("btn2");
var txt2 = document.getElementById("txt2");
var lista = [];
var display = document.getElementById("display3");

btn2.onclick = function () {
    texto = txt2.value
    if (texto == "") {
        alert("NO HA INGRESADO NINGUN NOMBRE A LA LISTA")

    }
    lista.push(texto)
    txt2.value = "";

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == "") {
            lista.pop();
        }
    }
 
    if (texto == " ") {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] == " ") {
                lista.pop();
            }
        }

        lista = lista.sort();
        lista.forEach(function (data, i) {

            var linew = document.createElement("li");
            var contenido = document.createTextNode(data);
            display.appendChild(linew);
            linew.appendChild(contenido);

        })


        lista = [];
    }
}





