import { SignJWT, jwtVerify } from "jose"
import dotenv from 'dotenv';
import connect from "../config/connectDB.js";
import { funSchemaLogin, rolSchema} from "../schemas/modelSchema.js"
import { ObjectId } from "mongodb";

dotenv.config();
const db = await connect();
const rolesSwich = {
    1: "usuarios",
    2: "medicos",
}

const crearToken = async (req, res) => {
    let validacion = rolSchema.safeParse(req.body)
    if (!validacion.success) return res.status(400).json({ message: validacion.error.errors.map(error => `${error.path} - ${error.message}`)});
    validacion = funSchemaLogin(validacion.data.rol).safeParse(req.body)
    if (!validacion.success) return res.status(400).json({ message: validacion.error.errors.map(error => `${error.path} - ${error.message}`)});
    const { rol } = req.body;
    const consulta = rol == 1 ? { usu_email: validacion.data.email } : { med_nroMatriculaProfesional: validacion.data.matricula_profesional };
    const documento = await db.collection(rolesSwich[req.body.rol]).findOne(consulta)
    if (!documento) return res.status(400).json({ message: "Usuario no encontrado"});
    const { _id } = documento;
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT({ id: _id.toString(), rol})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));
    res.send(jwtConstructor);
}

const validarToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );
        const { id, rol } = jwtData.payload;
        const usuario = await db.collection(rolesSwich[rol]).findOne({_id: new ObjectId(id)});
        return { usuario, rol };
    } catch (error) {
        return false;
    }

}

export {
    crearToken,
    validarToken
}