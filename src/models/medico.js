import conexion from "../db/atlas.js";
const db = await conexion();

export class ModelMedico {

    /**
     ** Funcion para obtener los datos de la coleccion medicos dependiendo de la especialidad 
    */
    static async getEspe(especialidad) {
        try {
            if (isNaN(especialidad)) return {status: 400, message: "Especialidad debe ser un número"};
            return await db.collection('medicos').find({med_especialidad: parseInt(especialidad)}).toArray();
        } catch (error) {
            return {status: 500, message: error};
        }
    }

    /**
     ** Funcion para obtener todos los datos de la coleccion medicos y mostrar el consultorio y nombre del medico
    */
    static async getConsultorios() {
        try {
            return await db.collection('medicos').find({}).project({med_consultorio: 1, med_nombreCompleto: 1, _id: 0}).toArray();
        } catch (error) {
            return {status: 500, message: error};
        }
    }

    /**
     ** Funcion para obtener los datos de la coleccion medicos dependiendo del medico y la fecha
    */
    static async getCitas(id, fecha) {
        try {
            if (isNaN(id)) return {status: 400, message: "Id debe ser un número"};
            if (isNaN(Date.parse(fecha))) return {status: 400, message: "Fecha debe ser una fecha valida"};
            return await db.collection('citas').find({cit_medico: parseInt(id), cit_fecha: new Date(fecha)}).toArray();
        } catch (error) {
            return {status: 500, message: error};
        }
    }
}