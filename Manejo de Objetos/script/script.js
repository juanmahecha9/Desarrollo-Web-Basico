// let datosJson = {
//     "instuto": "BIT",
//     "instructor": "Camila",
//     "alumnos": 12,
//     "empresa": "Rappi"
// };

// // datosJson.CLAVE o datosJson['clave']
// console.log(datosJson)
// console.log(datosJson.alumnos)

// //Agragar nuevos atributos
// resultado.innerHTML = datosJson.nuevo = "Hola Chicos";
// console.log(datosJson)

// //modificar key
// resultado.innerHTML = datosJson.alumnos = 12;
// console.log(datosJson)

var resultado = document.getElementById("resultado");
var btn = document.getElementById("btn")
btn.addEventListener("click", ()=>{
dataUser = {}; 
let nombreUser = document.getElementById("dato").value;
let edadUser = document.getElementById("dato1").value;

dataUser.nombre=nombreUser;
dataUser.edad=edadUser;
console.log(dataUser)
resultado.innerHTML = `El nombre ingresado es ${dataUser.nombre} y su edad es ${dataUser.edad}`
});

