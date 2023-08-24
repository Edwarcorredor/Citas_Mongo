import { ModelCita } from "../models/cita.js";
export class ControllerCita {

    /**
     ** Funcion para obtener todos los datos de la coleccion citas y organizarlos por fecha
    */
    static async getAll(req, res) {
        res.json(await ModelCita.getAll())
    }

    /**
     ** Funcion para obtener los datos de las citas en funcion del id de usuario
    */
    static async getByUsuario(req, res) {
        const result = await ModelCita.getByUsuario(req.params.id)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }

    /**
     **Funcion para obtener los datos de las citas en funcion del id del medico 
    */
    static async getByMedico(req, res) {
        const result = await ModelCita.getByMedico(req.params.id)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }

    /**
     ** Funcion para obtener los datos de las citas en funcion de la fecha de la cita
    */
    static async getByFecha(req, res) {
        const result = await ModelCita.getByFecha(req.params.fecha)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }


    /**
     ** Funcion para obtener los datos de usuarios masculinos o femeninos
    */
    static async getByGenero(req, res) {
        const result = await ModelCita.getByGenero(req.params.genero)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }


    /**
     ** Funcion para obtener las citas rechazadas en un mes especifico
    */
    static async getRechazadas(req, res) {
        const result = await ModelCita.getRechazadas(req.params.mes)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }
}