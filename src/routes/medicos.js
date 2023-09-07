import { Router } from 'express';
import { MedicoController } from '../controllers/medicos.js';

const router = Router();
router
//Obtener los médicos y sus consultorios
.get('/consultorios', MedicoController.getConsultorios)
//Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)
.get('/citas/:id/:fecha', MedicoController.getCitas)
//Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):
.get('/:especialidad', MedicoController.getAll) 

export default router;