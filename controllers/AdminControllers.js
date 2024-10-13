import path from "path";
import {__dirname} from "../app.js";
import bd from "../model/bd.js";
import { ScrT } from "../app.js";
import jwt from "jsonwebtoken";


const getAdmin = (req, res )=>{
    res.sendFile(path.join(__dirname, 'admin', 'html', 'IniciarCrear.html'))
}



const PostUser = async(req, res)=>{
    try {
        const User ={
            user:req.body.InputUser,
            password: req.body.InputPass,
        }
        const userCoincide = await bd.Coincide(User);
        if(!userCoincide){
            
            res.status(401).send("Usuario o contraseña incorrectas")
            console.log("Credenciales incorrectas!!");
            
        }else if(userCoincide){
             const data = await bd.consultaUser(User);
             const pay = {User, 
                user: data.user,
                password: data.password,

             }
              const token = jwt.sign({
                pay, User
              }, ScrT);
              res.cookie('mitoken', token,  { sameSite: 'Strict' } , {
                httpOnly: true
            });
            res.cookie('SesionTks', token ,{sameSite: 'Strict'},{
           httpOnly:true});
            res.status(200).json({token});
            console.log(`Los datos coinciden ${token}`);
        }
    } catch (error) {
        console.log(error)
    }
}

const getDashbord = async(req,res)=>{
    
    try {
        const tkn = req.body.token;
     const coincide = await bd.Coincide(tkn);
     if(!coincide){
        res.status(401).json({mensaje: "Datos Incorrectos"})
     }else if(coincide){

         res.status(200).sendFile(path.join(__dirname, 'admin', 'html', 'dashbord.html'));
         console.log("Deveria ingresar")
        }
    
    
    } catch (error) {
        console.log(error)
    }
        
}

const CrearUser = async(req, res)=>{
  try{

      const User = {
          user: req.body.InputUser2,
          password: req.body.InputPass2,
        }
        let usuario = User.user;
        const consulUser = await bd.consultaUser(User);
        if(consulUser){
           
            res.status(409);
            res.json({mensaje:`ya existe un usuario!!`});
           return;
        }else{
            await bd.InsertUser(User);
				res.status(200);
				res.json({mensaje: `Usuario registrado con exito`});
        }
    }catch(err){
        console.log(err.message)
    }
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
    PostUser,
    getDashbord,
}