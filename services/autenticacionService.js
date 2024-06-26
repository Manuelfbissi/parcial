// http://localhost:3000/personajes?token=12345
// Simula la autenticación 
const autenticacionService = {
    verificarToken: (req, res, next) => {
        const token = req.query.token;
        if (token === '12345') {
            next();
        } else {
            res.status(401).send('Token inválido');
        }
    }
};

export default autenticacionService;
