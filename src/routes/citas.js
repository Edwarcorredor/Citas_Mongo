import { Router } from "express";
import { ControllerCita } from "../controllers/citas.js";

const citasRouter = Router();

citasRouter

//Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.
.get("/rechazadas/:mes", ControllerCita.getRechazadas)

//Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)
.get("/fecha/:fecha", ControllerCita.getByFecha)

//Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad
.get("/genero/:genero", ControllerCita.getByGenero)

//Obtener todas las citas alfabéticamente
.get("/", ControllerCita.getAll)

//Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):
.get("/paciente/:id", ControllerCita.getByPaciente)

// Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)
.get("/medico/:id", ControllerCita.getByMedico)


export default citasRouter;