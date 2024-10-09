import path from "path";
import {__dirname} from "../app.js";
import bd from "../model/bd.js";

const getAdmin = (req, res )=>{
    res.sendFile(path.join(__dirname, 'admin', 'html', 'IniciarCrear.html'))
}

const CrearUser = async(req, res)=>{
    const user = {
        user: req.body.InputUser2,
        password: req.body.InputPass2,
    }
   const consulUser = bd.consultaUser(user)
}
const postProduct = async (req , res)=>{

   let imgDefoult = 'a4937c6a789a8856d0632422c7af52fa';
   let imagenes = req.files.map(file => file.filename);
     while(imagenes.length < 5 ){
         imagenes.push(imgDefoult);
     };
         console.log(imagenes);
   let img = imagenes.join(',');


    let products ={
        producto: req.body.producto,
        stock: req.body.Stock,
        descuento: req.body.Descuento,
        precio: req.body.Precio,
        cuotas: req.body.Cuotas,
        seccion: req.body.Seccion,
        subSeccion: req.body.Sub_seccion,
        imagen:  img,
    }
    let data = await bd.InsertProducto(products);
    if(data){

        res.status(200);
        res.json({mensaje: `El producto ${products.producto} ingreso correctamente`})
        
    }else{
        res.status(209);
        res.json({mensaje: `ocurrio un error al ingresar el producto`});
    }
}

export default {
    getAdmin,
    postProduct,
    CrearUser,
}