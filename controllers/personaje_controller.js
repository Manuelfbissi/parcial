import Personaje from "../models/personaje_model.js"

async function getPersonaje(){
    let personajeActivos = await Personaje.find({"estado": true})
    
    return personajeActivos;
}

async function createPersonaje(body){
   let personaje = new Personaje({
        nombre: body.nombre,
        apellido: body.apellido,
        edad: body.edad,
        estado: true
   })
   return await personaje.save();
}

async function updatePersonaje(id, body){
    try {
        const personaje = await Personaje.updateOne(
            { "_id": id },
            { $set: { 
                nombre: body.nombre,
                apellido: body.apellido,
               
            }}
        );
        return personaje;
    } catch (error) {
        throw error;
    }
}



 async function deletePersonaje(id){
    let eliminarPersonaje = await Personaje.findByIdAndUpdate(id, {
        $set: {
            estado: false
        }
    }, {new: true})
    return eliminarPersonaje;
}


export { getPersonaje, createPersonaje, updatePersonaje, deletePersonaje }