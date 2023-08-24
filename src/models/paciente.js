import conexion from "../db/atlas.js";
const db = await conexion();

export class ModelPaciente {

    /**
     ** Función para obtener los documentos de la colección usuarios y ordenarlos por el primer apellido
    */
    static async getPacientes() {
        const pacientes = await db.collection("usuarios").find().sort({usu_primer_apellido:1}).toArray();
        return pacientes;
    }

    /**
     ** Función para obtener los documentos de la colección citas en el que coincida el id del usuario
    */
    static async getConsultorios(id) {
        try{
            if (isNaN(id)) throw new Error("El id debe ser un numero");
            const consultorios = await db.collection("citas").aggregate([
                {
                    $lookup: {
                        from: "usuarios",
                        localField: "cit_datosUsuario",
                        foreignField: "usu_id",
                        as: "usuario"
                    }
                },
                {
                    $unwind: "$usuario"
                },
                {
                    $lookup: {
                        from: "medicos",
                        localField: "cit_medico",
                        foreignField: "med_nroMatriculaProfesional",
                        as: "medico"
                    }
                },
                {
                    $unwind: "$medico"
                },
                {
                    $lookup: {
                        from: "consultorios",
                        localField: "medico.med_consultorio",
                        foreignField: "cons_id",
                        as: "consultorio"
                    }
                },
                {
                    $unwind: "$consultorio"
                },
                {
                    $match: {
                        "cit_datosUsuario": parseInt(id),
                    }
                },
                {
                    $project: {
                        _id: 0,
                        usuario: {
                            usu_id: 1,
                            usu_nombre: 1,
                            usu_primer_apellido: 1,
                        },
                        consultorio: {
                            cons_id: 1,
                            cons_nombre: 1,
                        }
                    }
                }
            ])
            return await consultorios.toArray();
        }catch(error){
            return {status: 400, message: error.message};
        }
    }

    /**
     ** Función para ingresar un nuevo documento en la colección usuarios
    */
    static async postPaciente(usuario) {
        try{
            const result = await db.collection("usuarios").insertOne(usuario);
            return result;
        }catch(error){
            return {status: 400, message: error.message};
        }
    }
}