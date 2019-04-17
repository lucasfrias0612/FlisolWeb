window.onload = function () {
    var preinscripcion = document.getElementById("preinscripcion");
    var talleresCharlas = document.getElementById("talleresCharlas");
    var disertantes = document.getElementById("disertantes");
    var instaladores = document.getElementById("instaladores");

    preinscripcion.addEventListener("click", loadPreinscripcion);
    talleresCharlas.addEventListener("click", loadTalleresCharlas);
    disertantes.addEventListener("click", loadDisertantes);
    instaladores.addEventListener("click", loadInstaladores);
}

function loadPreinscripcion() {
    var newContent = "<h2>¿Cómo me inscribo a las charlas y talleres?</h2><p><strong>Enviar un mail indicando:</strong></p>" +
        "<ul><li>Apellido y nombres</li><li>Carrera</li><li>Talleres a los que desea asistir</li></ul><br><hr>" +
        "<h2>¿Cómo me inscribo para la instalación de software en mi computadora?</h2><p><strong>Enviar un mail indicando:</strong></p>" +
        "<ul><li>Datos del equipo (procesador, capacidad de disco, etc.)</li><li>Si ya fue realizada la copia de seguridad de los datos (no se realizan copias de seguridad durante el Flisol)</li></ul>"+
        "<p>Una vez que escribas tu solicitud de inscripción te enviaremos la confirmación de las actividades.</p>"+
        "<p>Te pedimos por favor que, en caso de no concurrir, nos avises con anticipación para que podamos darle lugar a otra persona.</p>";
    document.getElementById("contenido").innerHTML = newContent;
}

function loadTalleresCharlas() {
    document.getElementById("contenido").innerHTML = "<style scoped>.card {background-color: #f2f2f2;border: none;}</style><div class=\"row\"><div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-body\">" +
        "<h2 style=\"margin-left: 1%; margin-right: 1%\">Talleres y charlas</h2></div></div></div><div class=\"col-sm-6\"><div class=\"card\">" +
        "<div class=\"card-body\"><h3>Charlas (Aula 207)</h3><p>12:00 a 12:45. Ana Marotias: ¿Qué es el Software Libre?</p>" +
        "<p>13:00 a 13:45. Javier Castrillo: Software libre en educación</p><p>14:00 a 14:45. Claudio Andaur: Animación integral con Software Libre </p>" +
        "<p>15:00 a 15:45. Pablo Vannini: Trabajando con Software Libre en el mundo real</p></div></div></div>" +
        "<div class=\"col-sm-6\"><div class=\"card\"><div class=\"card-body\"><h3>Talleres (Aula 208)</h3>" +
        "<p>13:00 a 13:45. Iris Fernández: Primeros pasos en robótica con Arduino</p><p>15:00 a 15:45. Marisa Conde: Creación de gráficos SVG para impresión 3D</p>" +
        "<p>16:00 a 17:45. Ignacio Abadie - José Guerra Prado: introducción a Godot, motor gráfico para desarrollo de videojuegos 2d y 3d</p></div></div></div></div>";
}

function loadDisertantes() {
    var newContent = "";
    document.getElementById("contenido").innerHTML = newContent;
}

function loadInstaladores() {
    var newContent = "<div class=\"row\"><div class=\"col-sm-3\"><div class=\"card\" style=\"width: 18rem;\"><img src=\"./res/lucasfrias.jpg\" class=\"card-img-top\" alt=\"Lucas Frías\">"+
    "<div class=\"card-body\"><h4 class=\"card-title\">Lucas Frías</h4><p class=\"card-text\">Estudiante avanzado de Analista Programador Universitario en UNPAZ</p>"+
    "</div></div></div><div class=\"col-sm-3\"><div class=\"card\" style=\"width: 18rem;\"><div class=\"card\" style=\"width: 18rem;\">"+
    "<img src=\"./res/fernandocorinaldesi.jpg\" class=\"card-img-top\" alt=\"Fernando Corinaldesi\"><div class=\"card-body\"><h4 class=\"card-title\">Fernando Corinaldesi</h4>"+
    "<p class=\"card-text\">Técnico reparador de PC. Estudiante avanzado de Analista Programador Universitario en UNPAZ</p></div></div></div></div></div>";
    document.getElementById("contenido").innerHTML = newContent;
}