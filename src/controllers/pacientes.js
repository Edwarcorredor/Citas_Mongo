import { ModelPaciente } from "../models/paciente.js";
import { pacienteSchema } from "../schemas/modelSchema.js";
import funMapping from "../schemas/transformSchema.js";

export class ControllerPaciente {
    static async getPacientes(req, res) {
        const pacientes = await ModelPaciente.getPacientes();
        res.json(pacientes);
    }
    static async getConsultorios(req, res) {
        const consultorios = await ModelPaciente.getConsultorios(req.params.id);
        if (consultorios.status == 400) return res.status(400).json({ message: consultorios.message});
        res.json(consultorios);
    }
    static async postPaciente(req, res) {
        const validacion = pacienteSchema.safeParse(req.body);
        if (!validacion.success) return res.status(400).json({ message: validacion.error.errors.map(error => `${error.path} - ${error.message}`)});
        const result = await ModelPaciente.postPaciente(funMapping(validacion.data));
        if (result.status) return res.status(result.status).json({ message: result.message});
        res.json(result);
    }
}