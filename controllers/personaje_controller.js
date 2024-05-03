import Personaje from "../models/personaje_model.js"

async function getPersonaje(){
    let personajeActivos = await Personaje.find({"estado": true})
    
    return personajeActivos;
}

async function createPersonaje(body) {
    try {
      // Verificar que se proporcionen todos los parámetros requeridos
      if (!body.nombre || !body.apellido || !body.edad) {
        throw new Error('Faltan parámetros requeridos para crear el personaje');
      }
    
      // Crear un nuevo objeto Personaje con los datos proporcionados
      let personaje = new Personaje({
        nombre: body.nombre,
        apellido: body.apellido,
        edad: body.edad,
        estado: true
      });
    
      // Guardar el personaje en la base de datos
      return await personaje.save();
    } catch (error) {
      // Manejar errores y devolver mensaje
      return { error: error.message };
    }
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