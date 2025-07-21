$(document).ready(function () {
    $.ajax({
        url: "data/iest.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            $("#institucion").text(data.institucion);
            $("#practica").text(data.practica);
            $("#nombres").text(data.nombres);
            $("#unidad").text(data.unidad);


        }
        
    });
});

$(document).ready(function () {
    $.ajax({
        url: "data/estudiantes.json",
        method: "GET",
        dataType: "json",
        success: function (data) {

            const estudiantes = data.estudiantes;
            estudiantes.forEach(function(estudiante){
                const fila = `
                    <tr>
                        <td>${estudiante.dni}</td>
                        <td>${estudiante.nombre}</td>
                        <td>${estudiante.apellido}</td>
                        <td>${estudiante.edad}</td>
                    </tr>
                `;
                $("#tabla-estudiantes tbody").append(fila);
            });
        }
        
    });
});
$(document).ready(function () {
    $.ajax({
        url: "data/docentes.json",
        method: "GET",
        dataType: "json",
        success: function (data) { 
            const docentes = data.docentes;
            docentes.forEach(function(docente){
                const fila = `
                    <tr>
                        <td>${docente.dni}</td>
                        <td>${docente.nombre}</td>
                        <td>${docente.apellido}</td>
                        <td>${docente.curso}</td>
                    </tr>
                `;
                $("#tabla-docentes tbody").append(fila);
            });

        }
        
    });
});
$(document).ready(function () {
    $.ajax({
        url: "data/curso.json",
        method: "GET",
        dataType: "json",
        success: function (data) {

            const cursos = data.cursos;
            cursos.forEach(function(curso){
                const fila = `
                    <tr>
                        <td>${curso.id_curso}</td>
                        <td>${curso.nombre}</td>
                        <td>${curso.n_horas}</td>
                    </tr>
                `;
                $("#tabla-cursos tbody").append(fila);
            });
        }
        
    });
});

