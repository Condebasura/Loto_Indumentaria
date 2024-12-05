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

const SearchProd = async (req, res)=>{
    try {
        const products = {
            producto: req.body.valor,
        }

        const prod = products.producto.toLowerCase();
        const data = await bd.consProducto(products);

        const DatProd = data[0].producto.toLowerCase();

        if(DatProd.includes(prod)){
            res.status(200).json(data);
        }else if(!DatProd.includes(prod)){
            res.status(404).json({mensaje: "Sin datos"})
        }
       
    
        
    } catch (error) {
        console.log(error)
    }
}

const DataProdHomR = async (req, res)=>{
    try {
        const data = await bd.GetProdHomR();
        if(data){
            
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
};

const DataProdHomP  = async (req, res)=>{
    try {
        const data = await bd.GetProdHomP();
        if(data){
            
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
};

const DataProdHomA = async (req, res)=>{
    try {
        const data = await bd.GetProdHomA();
        if(data){
            
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
};


const DataProdMujR = async (req, res)=>{
    try {
        const data = await bd.GetProdMujR();
        if(data){
            
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
};

const DataProdMujP = async (req, res)=>{
    try {
        const data = await bd.GetProdMujP();
        if(data){
           
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
};

const DataProdMujV = async (req, res)=>{
    try {
        const data = await bd.GetProdMujV();
        if(data){
           
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
};

const DataProdMujA = async (req, res)=>{
    try {
        const data = await bd.GetProdMujA();
        if(data){
            
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
};

const DataProdNenaR = async (req, res)=>{
    try {
        const data = await bd.GetProdNenaR();
        if(data){
            
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
};

const DataProdNenaP = async (req, res)=>{
    try {
        const data = await bd.GetProdNenaP();
        if(data){
           
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
};

const DataProdNenaV = async (req, res)=>{
    try {
        const data = await bd.GetProdNenaV();
        if(data){
           
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
};

const DataProdNeneR = async (req, res)=>{
    try {
        const data = await bd.GetProdNeneR();
        if(data){
           
            res.status(200).json(data);
        }
    } catch (error) {
        console.log(error)
    }
};

const DataProdNeneP = async (req, res)=>{
    try {
        const data = await bd.GetProdNeneP();
        if(data){
            
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
  SearchProd,
  GetVisualProducto,
  DataProdHomR,
  DataProdHomP,
  DataProdHomA,
  DataProdMujR,
  DataProdMujP,
  DataProdMujV,
  DataProdMujA,
  DataProdNenaR,
  DataProdNenaP,
  DataProdNenaV,
  DataProdNeneR,
  DataProdNeneP,
         

    

}