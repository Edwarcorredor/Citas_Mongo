import { Router } from "express";
import { PacienteController } from "../controllers/pacientes.js";

const router = Router();
router
//Obtener todos los pacientes alfabeticamente
.get("/", PacienteController.getPacientes)
//Obtener los consultorio donde se aplicó las citas de un paciente
.get("/consultorios/:id", PacienteController.getConsultorios)
//Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.
.post("/", PacienteController.postPaciente)

export default router;