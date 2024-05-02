// autenticacionService.js
// Simula la autenticación (podría ser más elaborado en un entorno real)
const autenticacionService = {
    verificarToken: (req, res, next) => {
        const token = req.query.token;
        if (token === 'TOKEN_SECRETO') {
            next();
        } else {
            res.status(401).send('Token inválido');
        }
    }
};

export default autenticacionService;
