const resources = {
    1: ['pacientes', 'citas'],
    2: ['citas', 'medicos'],
}

const autorización = (req, res, next) => {
    const { rol } = req.user;
    if (resources[rol].includes(req.url.split('/')[1])) return next();
    return res.status(401).json({ message: "No tiene permisos para acceder a este recurso" });
}

export default autorización;