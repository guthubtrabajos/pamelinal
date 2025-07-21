// Declaramos una función asincrónica para poder usar 'await' al hacer peticiones HTTP
async function consultarDni() {
    // Obtenemos el valor ingresado por el usuario en el input con id "dni"
    const dni = document.getElementById('dni').value;

    // Obtenemos el elemento donde mostraremos el resultado o los mensajes
    const resultado = document.getElementById('resultado');

    // Token de acceso personal de ConsultasPeru
    const token = "6f3a4dddf7159bc8a2ec6233b18bdade180e797dcd47b4a0297572e71c5ec98c";

    // Validamos que el DNI ingresado tenga 8 dígitos y sea numérico
    if (dni.length !== 8 || isNaN(dni)) {
        resultado.innerHTML = "<p style='color:red;'>Ingrese un DNI válido de 8 dígitos.</p>";
        return; // Finaliza la función si el DNI no es válido
    }

    // Mostramos un mensaje temporal mientras se realiza la consulta
    resultado.innerHTML = "Consultando...";

    // Intentamos hacer la consulta a la API
    try {
        // Realizamos una petición POST a la API de ConsultasPeru
        const response = await fetch("https://api.consultasperu.com/api/v1/query", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Indicamos que el cuerpo es JSON
            },
            body: JSON.stringify({
                token: token,
                type_document: "dni",
                document_number: dni
            })
        });

        // Convertimos la respuesta JSON en un objeto JavaScript
        const json = await response.json();
        console.log(json); // Imprimimos la respuesta completa en consola para depuración

        // Verificamos si la respuesta fue exitosa
        if (!json.success) {
            resultado.innerHTML = "<p style='color:red;'>DNI no encontrado o token no válido.</p>";
            return;
        }

        // Extraemos los datos personales del objeto de respuesta
        const data = json.data;

        // Mostramos los datos obtenidos en el HTML
        resultado.innerHTML = `
            <p><strong>DNI:</strong> ${data.number}</p>
            <p><strong>Nombre Completo:</strong> ${data.full_name}</p>
            <p><strong>Apellido:</strong> ${data.surname}</p>
            <p><strong>Nombres:</strong> ${data.name}</p>
            <p><strong>Fecha de nacimiento:</strong> ${data.date_of_birth}</p>
            <p><strong>Dirección:</strong> ${data.address}</p>
            <p><strong>Departamento:</strong> ${data.department}</p>
            <p><strong>Provincia:</strong> ${data.province}</p>
            <p><strong>Distrito:</strong> ${data.district}</p>
            <p><strong>Ubigeo:</strong> ${data.ubigeo}</p>
        `;
    } catch (error) {
        // Si ocurre un error en la conexión o en la API, mostramos un mensaje genérico
        resultado.innerHTML = `<p style='color:red;'>Error al conectar con la API.</p>`;
        console.error("Error en la solicitud:", error);
    }
}
