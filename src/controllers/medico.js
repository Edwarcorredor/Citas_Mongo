import { ModelMedico } from "../models/medico.js";

export class ControllerMedico {

    /**
     ** Funcion para obtener los datos de la coleccion medicos dependiendo de la especialidad 
    */
    static async getEspe(req, res) {
        const result = await ModelMedico.getAll(req.params.especialidad)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }

    /**
     ** Funcion para obtener todos los datos de la coleccion medicos y mostrar el consultorio y nombre del medico
    */
    static async getConsultorios(req, res) {
        const result = await ModelMedico.getConsultorios()
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }

    /**
     ** Funcion para obtener los datos de la coleccion medicos dependiendo del medico y la fecha
    */
    static async getCitas(req, res) {
        const result = await ModelMedico.getCitas(req.params.id, req.params.fecha)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }
}