import path from "path";
import {__dirname} from "../app.js";
import bd from "../model/bd.js";

const getAdmin = (req, res )=>{
    res.sendFile(path.join(__dirname, 'admin', 'html', 'ingresa_producto.html'))
}


const postProduct = async (req , res)=>{
    let products ={
        producto: req.body.nombre,
        descuento: req.body.descuento,
        precio: req.body.precio,
        cuotas: req.body.cuotas,
        seccion: req.body.seccion,
        subSeccion: req.body.subSeccion,
        imagen: req.file,
    }

    let data = await bd.InsertProducto(products);
    if(data){

        res.status(200);
        res.json({mensaje: `El producto ${products} ingreso correctamente`})
        console.log(data);
    }else{
        res.status(209);
        res.json({mensaje: `ocurrio un error al ingresar el producto`});
    }
}

export default {
    getAdmin,
    postProduct,
}