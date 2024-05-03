import Caracteristicas from "../models/caracterisitcas_model.js"

async function getCaracteristicas(){
    let caracteristicasActivas = await Caracteristicas.find({"estado": true})
    .populate('datos_personaje')
    
    return caracteristicasActivas;
}

async function createCaracteristicas(req){
    let caracteristicasNuevo = new Caracteristicas({
        especie: req.body.especie,
        planeta_origen: req.body.planeta_origen,
        debut: req.body.debut,
        estado: true,
        datos_personaje: req.params.id
        
    })
    return await caracteristicasNuevo.save()
}

async function updateCaracteristicas(id, body){
    let caracteristicasActualizadas = await Caracteristicas.findByIdAndUpdate(id, {
        $set: {
            especie: body.especie,
            planeta_origen: body.planeta_origen,
            debut:body.debut
        }
    }, {new: true})
    return caracteristicasActualizadas;
}

async function deactivarCaracteristicas(id){
    let caracteristicasDesactivadas = await Caracteristicas.findByIdAndUpdate(id, {
        $set: {
            estado: false
        }
    }, {new: true})
    return caracteristicasDesactivadas;
}
export {getCaracteristicas,createCaracteristicas,updateCaracteristicas,deactivarCaracteristicas }