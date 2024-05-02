import mongoose from "mongoose"
const Schema = mongoose.Schema;


const caracteristicasSchema = new mongoose.Schema({

    datos_personaje: {
        type: Schema.Types.ObjectId, ref: 'personaje'
    },
   
    especie: {
        type: String,
        required: true
    },
    planeta_origen: {
        type: String,
        required: true
    },
    debut : {
        type: String,
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

export default mongoose.model("caracteristicas", caracteristicasSchema)

//prueba