import path from "path";
import {__dirname} from "../app.js";
import bd from "../model/bd.js";

const GetIndex = (req, res)=>{
    res.sendFile(path.join(__dirname , 'public', 'html' , 'index.html'))
};

const GetHombres = (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'html', 'Hombres.html'))
};

const GetMujeres = (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'html', 'Mujeres.html'))
};

const GetNiñas = (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'html', 'Nenas.html'))
};

const GetNiños =(req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'html' , 'Child.html'))
};

const GetVisualProducto = (req, res) =>{
  res.sendFile(path.join(__dirname, 'public', 'html', 'visualProducto.html'))
};

const DataProduct = async (req, res)=>{
    
   const data = await bd.getProducts();
 
    res.status(200).json(data);
   
};

const DataProdHom = async (req, res)=>{
    try {
        const data = await bd.GetProdHom();
        if(!data){
            res.status(404).json({mensaje: "Sin datos para mostrar"});
        }else{
            console.log(data);
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
}

export default {
    GetIndex, 
    GetHombres,
   GetMujeres,
   GetNiñas,
  GetNiños,
  GetVisualProducto,
  DataProduct,
  DataProdHom,

    

}