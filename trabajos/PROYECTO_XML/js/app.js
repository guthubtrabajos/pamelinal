$(document).ready(()=>{
    $.ajax({
        type:"GET", //recibir informacion
        url:"data/alumnos.xml", //de donde - ruta
        dataType:"xml" //tipo de dato(archivo)
    }).done((data)=>{
        $(data).find('alumno').each(
            function(){
                let fila=$('<tr>')
                fila.append($(`<td>${$(this).find('dni').text()}</td>`))
                fila.append($(`<td>${$(this).find('nombre').text()}</td>`))
                fila.append($(`<td>${$(this).find('apellido').text()}</td>`))
                fila.append($(`<td>${$(this).find('edad').text()}</td>`))

                $('#alumnos tbody').append(fila)
            })
            $('#alumno').show()

    })
})

$(document).ready(()=>{
    $.ajax({
        type:"GET", //recibir informacion
        url:"data/cursos.xml", //de donde - ruta
        dataType:"xml" //tipo de dato(archivo)
    }).done((data)=>{
        $(data).find('curso').each(
            function(){
                let fila=$('<tr>')
                fila.append($(`<td>${$(this).find('id_curso').text()}</td>`))
                fila.append($(`<td>${$(this).find('nombre_curso').text()}</td>`))
                fila.append($(`<td>${$(this).find('n_horas').text()}</td>`))
    

                $('#cursos tbody').append(fila)
            })
            $('#alumno').show()

    })
})



$(document).ready(()=>{
    $.ajax({
        type:"GET", //recibir informacion
        url:"data/docentes.xml", //de donde - ruta
        dataType:"xml" //tipo de dato(archivo)
    }).done((data)=>{
        $(data).find('docente').each(
            function(){
                let fila=$('<tr>')
                fila.append($(`<td>${$(this).find('dni').text()}</td>`))
                fila.append($(`<td>${$(this).find('nombre').text()}</td>`))
                fila.append($(`<td>${$(this).find('apellido').text()}</td>`))
                fila.append($(`<td>${$(this).find('curso').text()}</td>`))

                $('#docentes tbody').append(fila)
            })
            $('#docente').show()

    })
})

