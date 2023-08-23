/**
 ** Cambio de nombres para ingreso a base de datos 
*/

const userMapping = {
    direccion: "usu_direccion",
    email: "usu_email",
    genero: "usu_genero",
    nombre: "usu_nombre",
    segundoNombre: "usu_segdo_nombre",
    primerApellido: "usu_primer_apellido",
    segundoApellido: "usu_segdo_apellido",
    telefono: "usu_telefono",
    tipoDoc: "usu_tipodoc",
  };
  
const funMapping = (validatedData) => {
    // Realiza la transformación de nombres de campo
    const transformedData = {};
    for (const original in userMapping) {
        const copy = userMapping[original];
        transformedData[copy] = validatedData[original];
    }
    return transformedData;
}

export default funMapping;