import path from "path";
import {__dirname} from "../app.js";
import bd from "../model/bd.js";

const getAdmin = (req, res )=>{
    res.sendFile(path.join(__dirname, 'admin', 'html', 'ingresa_producto.html'))
}


const postProduct = async (req , res)=>{
   
   let imagenes = req.files.map(file => file.filename);
   let img = imagenes.join(',');
    let products ={
        producto: req.body.producto,
        descuento: req.body.Descuento,
        precio: req.body.Precio,
        cuotas: req.body.Cuotas,
        seccion: req.body.Seccion,
        subSeccion: req.body.Sub_seccion,
        imagen:  img,
    }
console.log(img);

    let data = await bd.InsertProducto(products);
    if(data){

        res.status(200);
        res.json({mensaje: `El producto ${products} ingreso correctamente`})
        
    }else{
        res.status(209);
        res.json({mensaje: `ocurrio un error al ingresar el producto`});
    }
}

export default {
    getAdmin,
    postProduct,
}