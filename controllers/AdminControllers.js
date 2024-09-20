import path from "path";
import {__dirname} from "../app.js";
import bd from "../model/bd.js";

const getAdmin = (req, res )=>{
    res.sendFile(path.join(__dirname, 'admin', 'html', 'ingresa_producto.html'))
}


const postProduct = async (req , res)=>{
    let products ={
        nombre: req.body.nombre,
        descuento: req.body.descuento,
        precio: req.body.precio,
        cuotas: req.body.cuotas,
        seccion: req.body.seccion,
        subSeccion: req.body.subSeccion,
        archivos: req.file,
    }

    let data = await products;
    console.log(data);
}

export default {
    getAdmin,
    postProduct,
}