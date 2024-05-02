import mongoose from "mongoose"

const caracteristicasSchema = new mongoose.Schema({

    datos_personaje: {
        type: Schema.Types.ObjectId, ref: 'personajes'
    },

    Especie: {
        type: String,
        required: true
    },
    Planeta_origen: {
        type: String,
        required: true
    },
    Debut : {
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