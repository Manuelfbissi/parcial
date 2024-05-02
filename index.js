import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import user_routes from "./routes/personaje_routes.js"

// mongodb://127.0.0.1:27017/cursos
mongoose
.connect ("mongodb://127.0.0.1:27017/personajes_rickAndMorty")
    .then(() => console.log("conectado"))
    .catch(() => console.log("error al conectar"))


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/personajes", user_routes)


const port = process.env.PORT || 3002
app.listen(port)