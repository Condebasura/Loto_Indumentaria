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


const DataProduct = async (req, res)=>{
  
   const data = await bd.getProducts()
   res.json(data);
};



export default {
    GetIndex, 
    GetHombres,
   GetMujeres,
   GetNiñas,
  GetNiños,
  DataProduct,

    

}