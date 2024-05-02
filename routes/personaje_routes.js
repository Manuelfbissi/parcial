import express from "express"
import { getPersonaje, createPersonaje, updatePersonaje, deletePersonaje } from "../controllers/personaje_controller.js"

const ruta = express.Router();

// GET para obtener todos los usuarios
ruta.get("/", (req, res) => {
    let resultado = getPersonaje();
    resultado
        .then((users) => { res.status(200).json(users) })
        .catch((error) => { res.status(400).json(error) })
})

// POST para crear un nuevo usuario
ruta.post("/", (req, res) => {
    let body = req.body;
    let resultado = createPersonaje(body);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})

// PUT para actualizar un usuario existente
ruta.put("/:id", (req, res) => {
    let body = req.body;
    let resultado = updatePersonaje(req.params.id, body);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})

// DELETE para eliminar un usuario existente
ruta.delete("/:id", (req, res) => {
    let body = req.body;
    let resultado = deletePersonaje(req.params.id, body);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})


export default ruta;