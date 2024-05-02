import mongoose from "mongoose"
// schema
const personajeSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
    imagen: {
        type: String,
        required: false
    }
})

export default mongoose.model("personaje", personajeSchema)