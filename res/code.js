window.onload = function () {
    var content = document.getElementById("contenido");
    content.innerHTML("<p></p>");

    var preinscripcion = document.getElementById("preinscripcion");
    var talleresCharlas = document.getElementById("talleresCharlas");
    var disertantes = document.getElementById("disertantes");
    var instaladores = document.getElementById("instaladores");

    preinscripcion.addEventListener("click", loadPreinscripcion);
    talleresCharlas.addEventListener("click", loadTalleresCharlas);
    disertantes.addEventListener("click", loadDisertantes);
    instaladores.addEventListener("click", loadInstaladores);

    console.log(content);
}

function loadPreinscripcion(content){
    var newContent="";
    content.innerHTML(newContent);
}

function loadTalleresCharlas(content){
    var newContent="";
    content.innerHTML(newContent);
}

function loadDisertantes(content){
    var newContent="";
    content.innerHTML(newContent);
}

function loadInstaladores(content){
    var newContent="";
    content.innerHTML(newContent);
}