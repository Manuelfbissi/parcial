import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import personajes_routes from "./routes/personaje_routes.js"
import caracteristicas_routes from "./routes/caracteristicas_routes.js"
//"mongodb://127.0.0.1:27017/personajes_rickAndMorty"
//mongodb+srv://manuelfernandez:1234@cluster0.6dqlz9l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose
.connect(process.env.MONGO_DEPLOY )
    .then(() => console.log("conectado"))
    .catch((error) => console.error("error al conectar", error))


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/personajes", personajes_routes)
app.use("/caracteristicas", caracteristicas_routes)


const port = process.env.PORT || 3002
app.listen(port)