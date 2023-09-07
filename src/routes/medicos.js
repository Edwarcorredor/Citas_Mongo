import { Router } from 'express';
import { ControllerMedico } from '../controllers/medicos.js';

const medicosRouter = Router();
medicosRouter
//Obtener los médicos y sus consultorios
.get('/consultorios', ControllerMedico.getConsultorios)

//Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)
.get('/citas/:id/:fecha', ControllerMedico.getCitas)

//Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):
.get('/:especialidad', ControllerMedico.getAll) 

export default medicosRouter;