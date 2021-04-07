var btn = document.getElementById('click');
var x = document.getElementById("contenido");

btn.addEventListener("click", () => { // cada vez que cambie la lista
    x.classList.remove("contenido");
})

