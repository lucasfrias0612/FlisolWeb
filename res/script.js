window.onload = function () {
    var preinscripcion = document.getElementById("preinscripcion");
    var talleresCharlas = document.getElementById("talleresCharlas");
    var disertantes = document.getElementById("disertantes");
    var colaboradores = document.getElementById("colaboradores");

    preinscripcion.addEventListener("click", loadPreinscripcion);
    talleresCharlas.addEventListener("click", loadTalleresCharlas);
    disertantes.addEventListener("click", loadDisertantes);
    colaboradores.addEventListener("click", loadColaboradores);
}

function loadPreinscripcion() {
    document.getElementById("contenido").innerHTML = "<h2>¿Cómo me inscribo a las charlas y talleres?</h2><p><strong>Enviar un mail indicando:</strong></p>" +
        "<ul><li>Apellido y nombres</li><li>Carrera</li><li>Talleres a los que desea asistir</li></ul><br><hr>" +
        "<h2>¿Cómo me inscribo para la instalación de software en mi computadora?</h2><p><strong>Enviar un mail indicando:</strong></p>" +
        "<ul><li>Datos del equipo (procesador, capacidad de disco, etc.)</li><li>Si ya fue realizada la copia de seguridad de los datos (no se realizan copias de seguridad durante el Flisol)</li></ul>"+
        "<p>Una vez que escribas tu solicitud de inscripción te enviaremos la confirmación de las actividades.</p>"+
        "<p>Te pedimos por favor que, en caso de no concurrir, nos avises con anticipación para que podamos darle lugar a otra persona.</p>";
}

function loadTalleresCharlas() {
    document.getElementById("contenido").innerHTML = "<div class=\"container\"><div class=\"row\"><h2 style=\"margin-left:1%\">Talleres y Charlas</h2></div>"+
    "<table style=\"background-color: white\" class=\"table table-bordered\"><thead><tr><th scope=\"col\" style=\"text-align:center\">Horarios</th>"+
    "<th scope=\"col\" style=\"text-align:center\">Charlas (Aula 207)</th><th scope=\"col\" style=\"text-align:center\">Talleres (Aula 208)</th></tr></thead>"+
    "<tbody><tr><th scope=\"row\">12:00 a 12:45</th><td>Ana Marotias: ¿Qué es el Software Libre?</td><td>-</td></tr>"+
    "<tr><th scope=\"row\">13:00 a 13:45</th><td>Javier Castrillo: Software libre en educación</td><td>Iris Fernández: Primeros pasos en robótica con Arduino</td></tr>"+
    "<tr><th scope=\"row\">14:00 a 14:45</th><td>Claudio Andaur: Animación integral con Software Libre</td><td>-</td></tr>"+
    "<tr><th scope=\"row\">15:00 a 15:45</th><td>Pablo Vannini: Trabajando con Software Libre en el mundo real</td><td>Marisa Conde: Creación de gráficos SVG para impresión 3D</td></tr>"+
    "<tr><th scope=\"row\">16:00 a 17:45</th><td>-</td><td>Ignacio Abadie - José Guerra Prado: introducción a Godot, motor gráfico para desarrollo de videojuegos 2d y 3d</td></tr>"+
    "</tbody></table></div>";
}

function loadDisertantes() {
    document.getElementById("contenido").innerHTML = "</div><h3 style=\"margin-left:2%\">Charlas (Aula 207)</h3><br>"+
    "<div class=\"row\"><div class=\"col-sm-3\"><div class=\"card\" style=\"width: 18rem;\">"+
    "<img src=\"./res/anamarotias.jpeg\" class=\"card-img-top\" alt=\"Lucas Frías\"><div class=\"card-body\">"+
    "<h4 class=\"card-title\">Ana Marotias</h4><p class=\"card-text\">Lic. Ciencias de las Comunicación, Magíster Cs. Sociales y Educación (FLACSO), docente e investigadora UBA y UNRAF. Integrante del Observatorio Interuniversitario de Sociedad, Tecnología y Educación. Especialista en educación virtual."+
    "Fundadora de \"Conocimiento. Gestión y Formación\", consultora de educación virtual que desarrolla proyectos basados en software libre.</p><p><strong>Redes: </strong>@anusca en Twitter</p></div></div></div>"+
    "<div class=\"col-sm-3\"><div class=\"card\" style=\"width: 18rem;\"><div class=\"card\" style=\"width: 18rem;\">"+
    "<img src=\"./res/pablovannini.jpg\" class=\"card-img-top\" alt=\"Pablo Vannini\"><div class=\"card-body\">"+
    "<h4 class=\"card-title\">Pablo Vannini</h4><p class=\"card-text\">Sociólogo (Universidad de Buenos Aires-UBA), cursó la Maestría en Economia Social (UNGS). Socio fundador de gcoop - Cooperativa de Software Libre. Además de su trabajo en gcoop, investiga temas relacionados con la cultura, la juventud y las nuevas tecnologías y es autor de diversas publicaciones sobre estas temáticas. Docente de UNPAZ.</p>"+
    "<p><strong>Redes: </strong>www.gcoop.coop @gcooplibre</p></div></div></div></div>"+
    "<div class=\"col-sm-3\"><div class=\"card\" style=\"width: 18rem;\"><div class=\"card\" style=\"width: 18rem;\">"+
    "<img src=\"./res/claudioandaur.jpg\" class=\"card-img-top\" alt=\"Claudio Andaur\"><div class=\"card-body\"><h4 class=\"card-title\">Claudio Andaur</h4>"+
    "<p class=\"card-text\">Ingeniero Químico (UTN), animador, ilustrador, historietista y humorista gráfico. Trabajó en largometrajes y cortos de animación 3D. Director de arte del proyecto Huayra Gnu/Linux.</p>"+
    "<p><strong>Redes: </strong>@maleficomix en Instagram</p></div></div></div></div><div class=\"col-sm-3\">"+
    "<div class=\"card\" style=\"width: 18rem;\"><div class=\"card\" style=\"width: 18rem;\"><img src=\"./res/javiercastrillo.jpg\" class=\"card-img-top\" alt=\"Javier Castrillo\">"+
    "<div class=\"card-body\"><h4 class=\"card-title\">Javier Castrillo</h4>"+
    "<p class=\"card-text\">Licenciado en Historia. Fue coordinador general del Proyecto Huayra GNU/Linux, la distribución oficial del Programa Conectar Igualdad. Militante por el Software Libre, organizó numerosos encuentros y talleres. Docente de UNPAZ.</p></div></div></div></div></div>"+
    "<hr><br><h3 style=\"margin-left:2%\">Talleres (Aula 208)</h3><br><div class=\"row\"><div class=\"col-sm-3\">"+
    "<div class=\"card\" style=\"width: 18rem;\"><div class=\"card\" style=\"width: 18rem;\"><img src=\"./res/irisfernandez.jpg\" class=\"card-img-top\" alt=\"Iris Fernández\">"+
    "<div class=\"card-body\"><h4 class=\"card-title\">Iris Fernández</h4>"+
    "<p class=\"card-text\">Licenciada en Educación. Trabaja en proyectos vinculados con robótica educativa. Especialista en Moodle. Docente de UNPAZ.</p>"+
    "<p><strong>Redes: </strong>@irisfz en Twitter</p></div></div></div></div>"+
    "<div class=\"col-sm-3\"><div class=\"card\" style=\"width: 18rem;\"><div class=\"card\" style=\"width: 18rem;\">"+
    "<img src=\"./res/marisaconde.jpg\" class=\"card-img-top\" alt=\"Marisa Conde\"><div class=\"card-body\"><h4 class=\"card-title\">Marisa Conde</h4>"+
    "<p class=\"card-text\">Mg en Educación y Videojuegos -Universidad de Valencia -UV- Especialista en Tecnología Educativa -UBA- Especialista en EVA, -OEI- Prof en Informática.</p>"+
    "<p class=\"card-text\">Se desempeña en la Universidad Nacional de José C Paz -UNPAZ- INSPT-UTN y en UNTREF Virtual, INET, Referente Pedagógico en el Programa Nacional de formación para docentes y directivos de la Escuela Técnica</p>"+
    "<p><strong>Redes: </strong><a href=\"https://aciertosyerroresen3d.blogspot.com/\">Aciertos y errores en 3d</a></p></div></div></div></div>"+
    "<div class=\"col-sm-3\"><div class=\"card\" style=\"width: 18rem;\"><div class=\"card\" style=\"width: 18rem;\">"+
    "<img src=\"./res/ignacioabadie.jpg\" class=\"card-img-top\" alt=\"Ignacio Abadie\"><div class=\"card-body\"><h4 class=\"card-title\">Ignacio Abadie</h4>"+
    "<p class=\"card-text\">Analista en Computación, titulado en la Universidad Nacional de Tres de Febrero. Actualmente finalizando los estudios de Ingeniero en Computación. Project Leader, Arquitect Staff de la región de Norte América, y Desarrollo de Aplicaciones Mobile en Wolox.</p>"+
    "<p class=\"card-text\">Docente de la Tecnicatura universitaria en Producción y diseño de videojuegos, a cargo de las materias Recursos Tecnológicos y Prototipado Digital.</p><p><strong>Redes: </strong><a href=\"https://www.linkedin.com/in/ignacio-abadie-b541a5177\">Perfil de Linkedin</a></p></div></div></div></div>"+
    "<div class=\"col-sm-3\"><div class=\"card\" style=\"width: 18rem;\"><div class=\"card\" style=\"width: 18rem;\">"+
    "<img src=\"./res/joseguerraprado.jpg\" class=\"card-img-top\" alt=\"José Guerra Prado\"><div class=\"card-body\">"+
    "<h4 class=\"card-title\">José Guerra Prado</h4><p class=\"card-text\">Licenciado y Profesor de Comunicación, Diseño Audiovisual e Informática. Profesor de Seminario de Orientación de Videojuegos en Universidad Nacional de José C. Paz.</p>"+
    "<p><strong>Redes: </strong><a href=\"https://www.linkedin.com/in/jos%C3%A9-guerra-prado-54762916\">Perfil de Linkedin</a></p></div></div></div></div></div>";
}

function loadColaboradores() {
    document.getElementById("contenido").innerHTML = "<div class=\"row\"><div class=\"col-sm-6\"><div class=\"row\"><div class=\"col-sm-10\">"+
    "<h3 style=\"text-align:center\">Instaladores</h3></div></div><div class=\"row\"><div class=\"col-sm-6\"><div class=\"card\" style=\"width: 18rem;\"><img src=\"./res/lucasfrias.jpeg\" class=\"card-img-top\""+
    "alt=\"Lucas Frías\"><div class=\"card-body\"><h4 class=\"card-title\">Lucas Frías</h4><p class=\"card-text\">Estudiante avanzado de Analista Programador Universitario en UNPAZ"+
    "</p><p><strong>Redes: </strong><a href=\"https://www.linkedin.com/in/lucas-frías-516268130\">Perfil de Linkedin</a></p></div></div></div><div class=\"col-sm-6\">"+
    "<div class=\"card\" style=\"width: 18rem;\"><div class=\"card\" style=\"width: 18rem;\"><img src=\"./res/fernandocorinaldesi.jpg\" class=\"card-img-top\" alt=\"Fernando Corinaldesi\">"+
    "<div class=\"card-body\"><h4 class=\"card-title\">Fernando Corinaldesi</h4><p class=\"card-text\">Técnico reparador de PC. Estudiante avanzado de Analista Programador Universitario en UNPAZ</p>"+
    "</div></div></div></div></div></div><div class=\"col-sm-6\"><h3>Acreditación</h3><div class=\"row\"><div class=\"col-sm-6\"><div class=\"card\" style=\"width: 18rem;\">"+
    "<div class=\"card\" style=\"width: 18rem;\"><img src=\"./res/mariazelaya.jpg\" class=\"card-img-top\" alt=\"Fernando Corinaldesi\"><div class=\"card-body\">"+
    "<h4 class=\"card-title\">María Zelaya</h4><p class=\"card-text\">Estudiante avanzada de la Tecnicatura en Gestión de Gobierno Electrónico y de la Licenciatura en Gestión Gubernamental (Unpaz)</p>"+
    "<p>Ayudante de la materia \"Tecnologías digitales, públicas y abiertas\"</p></div></div></div></div></div></div></div>";
}