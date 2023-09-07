import { Router } from "express";
import { CitaController } from "../controllers/citas.js";

const router = Router();

router
//Obtener todas las citas alfabéticamente
.get("/", CitaController.getAll)
//Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):
.get("/paciente/:id", CitaController.getByPaciente)
// Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)
.get("/medico/:id", CitaController.getByMedico)
//Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)
.get("/fecha/:fecha", CitaController.getByFecha)
//Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad
.get("/genero/:genero", CitaController.getByGenero)
//Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.
.get("/rechazadas/:mes", CitaController.getRechazadas)

export default router;