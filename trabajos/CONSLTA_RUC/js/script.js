async function consultarRuc() {
    const ruc = document.getElementById('ruc').value.trim();
    const resultado = document.getElementById('resultado');

    const token = "6f3a4dddf7159bc8a2ec6233b18bdade180e797dcd47b4a0297572e71c5ec98c";

    if (ruc.length !== 11 || isNaN(ruc)) {
        resultado.innerHTML = "<p style='color:red;'>Ingrese un RUC válido de 11 dígitos.</p>";
        return;
    }

    resultado.innerHTML = "Consultando...";

    try {
        const response = await fetch("https://api.consultasperu.com/api/v1/query", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                type_document: "ruc",
                document_number: ruc
            })
        });

        const json = await response.json();
        console.log(json);

        if (!json.success) {
            resultado.innerHTML = "<p style='color:red;'>RUC no encontrado o token no válido.</p>";
            return;
        }

        const data = json.data;

        resultado.innerHTML = `
    <p><strong>RUC:</strong> ${data.number}</p>
    <p><strong>Razón Social:</strong> ${data.name}</p>
    <p><strong>Línea de Negocio:</strong> ${data.business_line}</p>
    <p><strong>Estado:</strong> ${data.status}</p>
    <p><strong>Condición de Domicilio:</strong> ${data.domicile_conditions}</p>
    <p><strong>Dirección:</strong> ${data.address}</p>
    <p><strong>Departamento:</strong> ${data.department}</p>
    <p><strong>Provincia:</strong> ${data.province}</p>
    <p><strong>Distrito:</strong> ${data.district}</p>
    <p><strong>Ubigeo:</strong> ${data.ubigeo}</p>
    <p><strong>Fecha de Creación:</strong> ${data.date_creation}</p>
    <p><strong>Última Actualización:</strong> ${data.date_update}</p>
    <p><strong>Tipo de Persona:</strong> ${data.person_type}</p>
    <p><strong>Zona:</strong> ${data.zone}</p>
    <p><strong>Buen Contribuyente:</strong> ${data.es_buen_contribuyente ? "Sí" : "No"}</p>
    <p><strong>Agente de Retención:</strong> ${data.es_agente_de_retencion ? "Sí" : "No"}</p>
`;



    } catch (error) {
        resultado.innerHTML = `<p style='color:red;'>Error al conectar con la API.</p>`;
        console.error("Error en la solicitud:", error);
    }
}
