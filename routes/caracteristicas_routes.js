import express from "express"
import { getCaracteristicas,createCaracteristicas  } from "../controllers/caracteristicas_controllers.js"
const ruta = express.Router();


// GET para obtener todos los usuarios
ruta.get("/", (req, res) => {
    let resultado = getCaracteristicas();
    resultado
        .then((caracteristicas) => { res.status(200).json(caracteristicas) })
        .catch((error) => { res.status(400).json(error) })
})

// POST para crear un nuevo usuario
ruta.post("/:id", (req, res) => {
    let resultado = createCaracteristicas(req);
    resultado
        .then((car) => { res.status(201).json(car) })
        .catch((error) => { res.status(400).json(error) })
})



export default ruta;