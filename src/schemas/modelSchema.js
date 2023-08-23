import { z } from "zod";

/**
 **Se crea la validación para los datos de los usuarios 
*/
const pacienteSchema = z.object({
    direccion: z.string({required_error: "La direccion es requerida"}).min(1).max(100),
    email: z.string({required_error: "El email es requerido"}).email(),
    genero: z.number({required_error: "El genero es requerido"}).int().min(1).max(2),
    nombre: z.string({required_error: "El nombre es requerido"}).min(1).max(50),
    segundoNombre: z.string({required_error: "El segundoNombre es requerido"}).min(1).max(50),
    primerApellido: z.string({required_error: "El primerApellido es requerido"}).min(1).max(50),
    segundoApellido: z.string({required_error: "El segundoApellido es requerido"}).min(1).max(50),
    telefono: z.string({required_error: "El telefono es requerido"}).min(1).max(20),
    tipoDoc: z.number({required_error: "El tipoDoc es requerido"}).int().min(1).max(3)
});

/**
 **Validación para los tipos de usuario 
*/
const tipoUsuarioSchema = z.object({
    email: z.string({required_error: "El email es requerido"}).email(),
});

/**
 ** Validación para tipo de medico  
*/
const tipoMedicoSchema = z.object({
    matricula_profesional: z.number({required_error: "La matricula_profesional es requerida"}).int().min(1).max(10),
});


/**
 ** Funcion para elegir el tipo de usuario o de medico 
*/
const schemaLogin = (tipo) => tipo == 1 ? tipoUsuarioSchema : tipoMedicoSchema;

/**
 ** Validación para el rol 
*/
const rolSchema = z.object({
    rol: z.number({required_error: "El rol es requerido"}).int().min(1).max(2),
});


export {
    pacienteSchema,
    schemaLogin,
    rolSchema
}