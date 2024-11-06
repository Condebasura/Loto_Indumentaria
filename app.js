import express from "express";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import { expressjwt } from "express-jwt";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import ProductControllers from "./controllers/ProductControllers.js";
import AdminControllers from "./controllers/AdminControllers.js";
import bd from "./model/bd.js";







const ScrT = "Puerto-Pasto-Coso"
// Directorio dependiendo del tipo de sistema
const __dirname = (process.platform === "win32")? fileURLToPath(new URL(".", import.meta.url)):path.dirname(new URL(import.meta.url).pathname);

const app = express();
const port = 3000;




app.use("usuario",expressjwt({
  secret: ScrT , algorithms: ['HS256'],
  credentialsRequired: false,
  getToken: function fromHeaderOrQuerystring(req) {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
     
      return req.headers.authorization.split(" ")[1];
    } else if (req.query && req.query.token) {
     
      return req.query.token;
    }
    return null;
  },
  
}));
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

const upload = multer({dest: 'public/uploads/'});


app.get("/consulta", bd.ConsultProduct);
app.get("/admin/consulta", bd.consultaUser);
app.get("/", ProductControllers.GetIndex);
app.post("/search", ProductControllers.SearchProd)
app.get("/search", ProductControllers.SearchProd)
app.get("/Hombres/Remeras", ProductControllers.DataProdHomR);
app.get("/Hombres/Pantalones", ProductControllers.DataProdHomP);
app.get("/Hombres/Accesorios", ProductControllers.DataProdHomA);
app.get("/Mujeres/Remeras", ProductControllers.DataProdMujR);
app.get("/Mujeres/Pantalones", ProductControllers.DataProdMujP);
app.get("/Mujeres/Vestidos", ProductControllers.DataProdMujV);
app.get("/Mujeres/Accesorios", ProductControllers.DataProdMujA);
app.get("/Nena/Remeras", ProductControllers.DataProdNenaR);
app.get("/Nena/Pantalones", ProductControllers.DataProdNenaP);
app.get("/Nena/Vestidos", ProductControllers.DataProdNenaV);
app.get("/Nene/Remeras", ProductControllers.DataProdNeneR);
app.get("/Nene/Pantalones", ProductControllers.DataProdNeneP);
app.get("/visualProducto.html", ProductControllers.GetVisualProducto);
app.post("/admin/IniciarCrear/Crear" , AdminControllers.CrearUser);
app.get("/admin/IniciarCrear", AdminControllers.getAdmin);
app.post("/admin/dashbord", AdminControllers.PostUser);
app.get("/admin/dashbord", AdminControllers.getDashbord);
app.post("/Product/edit", AdminControllers.DataProd);
app.put("/Product/Update/:id", upload.array("archivos", 5), AdminControllers.ActualizarProd);
app.post("/Product/delete", AdminControllers.DataProd);
app.delete("/product/delete/:id/:img", AdminControllers.EliminarProducto);
app.get("/admin/logout", AdminControllers.logout);
app.post("/admin/addProducto",upload.array("archivos", 5), AdminControllers.postProduct);

 
app.listen(port, ()=>{
    console.log(`la app esta escuchando el pueto ${port}` );
}
)

export  {
    __dirname,
    ScrT,
}