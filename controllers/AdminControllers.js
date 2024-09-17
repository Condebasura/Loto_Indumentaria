import path from "path";
import {__dirname} from "../app.js";
import bd from "../model/bd.js";

const getAdmin = (req, res )=>{
    res.sendFile(path.join(__dirname, 'admin', 'html', 'ingresa_producto.html'))
}

export default {
    getAdmin,
}