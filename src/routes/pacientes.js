import { Router } from "express";
import { ControllerPaciente } from "../controllers/pacientes.js";

const pacientesRouter = Router();
pacientesRouter

//Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.
.post("/", ControllerPaciente.postPaciente)

//Obtener los consultorio donde se aplicó las citas de un paciente
.get("/consultorios/:id", ControllerPaciente.getConsultorios)

//Obtener todos los pacientes alfabeticamente
.get("/", ControllerPaciente.getPacientes)





export default pacientesRouter;