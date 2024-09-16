import express from "express";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import { expressjwt } from "express-jwt";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import ProductControllers from "./controllers/ProductControllers.js";
import bd from "./model/bd.js";


// Directorio dependiendo del tipo de sistema
const __dirname = (process.platform === "win32")? fileURLToPath(new URL(".", import.meta.url)):path.dirname(new URL(import.meta.url).pathname);

const app = express();
const port = 3000;

const corsOptions = {
    origin: '*' ,  // Origen permitido (puedes usar * para permitir todo)
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization',
     // Encabezados permitidos
  
};
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(helmet());


app.use(express.static(path.join(__dirname , 'public')));

app.get("/consulta", bd.ConsultProduct);
app.get("/", ProductControllers.GetIndex);
app.get("/Hombres.html", ProductControllers.GetHombres);
app.get("/Mujeres.html", ProductControllers.GetMujeres);
app.get("/Nenas.html", ProductControllers.GetNiñas);
app.get("/Child.html", ProductControllers.GetNiños);
app.get("/Hombres.html/H-Rem", ProductControllers.DataProduct)

app.listen(port, ()=>{
    console.log(`la app esta escuchando el pueto ${port}` );
}
)

export  {
    __dirname,
}