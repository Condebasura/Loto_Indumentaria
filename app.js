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
import AdminControllers from "./controllers/AdminControllers.js";
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
app.use(helmet({ contentSecurityPolicy:{
    directives:{
      defaultSrc:["'self'"],

      styleSrc: ["'self'", "https://kit.fontawesome.com/523f183385.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" ,"'unsafe-inline'"],
  
      fontSrc: ["'self'", "https://kit.fontawesome.com/",  "cdnjs.cloudflare.com"],
  imgSrc: ["'self'", "data:", "blob:", 'https://http2.mlstatic.com'],
    }
  }}));

app.use(express.static(path.join(__dirname , 'public')));
app.use(express.static(path.join(__dirname, 'admin')));
app.use( 'uploads/',express.static(path.join(__dirname, "public/uploads/")));
app.use( 'img/',express.static(path.join(__dirname, "public/img/")));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const upload = multer({dest: 'public/uploads/'});


app.get("/consulta", bd.ConsultProduct);
app.get("/", ProductControllers.GetIndex);
app.get("/Hombres.html", ProductControllers.GetHombres);
app.get("/Mujeres.html", ProductControllers.GetMujeres);
app.get("/Nenas.html", ProductControllers.GetNiñas);
app.get("/Child.html", ProductControllers.GetNiños);
app.get("/Hombres.html/producto", ProductControllers.DataProduct);
app.get("/Mujeres.html/producto", ProductControllers.DataProduct);
app.get("/Nenas.html/producto", ProductControllers.DataProduct);
app.get("/Child.html/producto", ProductControllers.DataProduct);
app.get("/visualProducto.html", ProductControllers.GetVisualProducto);
app.get("/addProducto", AdminControllers.getAdmin);
app.post("/addProducto",upload.array("archivos", 5), AdminControllers.postProduct);


app.listen(port, ()=>{
    console.log(`la app esta escuchando el pueto ${port}` );
}
)

export  {
    __dirname,
}