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



// Ruta para la página principal
app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>API de Personajes</title>
        </head>
        <body>
          <h1>Bienvenido a la API de Personajes</h1>
          <p>Esta API proporciona acceso a una colección de personajes y sus características de Rick and Morty.</p>
          <h2>Endpoints Disponibles:</h2>
          <ul>
          <li><a href="/personajes?token=12345">/personajes - Obtener todos los personajes (requiere token)</a></li>
            <li><a href="/caracteristicas">/caracteristicas - Obtener todas las características</a></li>
          </ul>
          <footer>
            <p>Desarrollado por: [NOMBRE_DEL_DESARROLLADOR]</p>
            <p>Materia: [NOMBRE_DE_LA_MATERIA]</p>
            <p>Profesor: [NOMBRE_DEL_PROFESOR]</p>
            <p>Comisión: [COMISIÓN]</p>
            <p>Año: [AÑO]</p>
          </footer>
        </body>
      </html>
    `);
  });
  


const port = process.env.PORT || 3002
app.listen(port)