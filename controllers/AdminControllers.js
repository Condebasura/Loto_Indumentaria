import path from "path";
import {__dirname} from "../app.js";
import bd from "../model/bd.js";


const getAdmin = (req, res )=>{
    res.sendFile(path.join(__dirname, 'admin', 'html', 'IniciarCrear.html'))
}



const PostUser = async(req, res)=>{
    try {
        const User ={
            user:req.body.InputUser,
            password: req.body.InputPass,
        }

        console.log(User);
        const userCoincide = await bd.Coincide(User);
        if(userCoincide){
            res.status(200);
            console.log("Los datos coinciden");

        }else{
            res.status(409);
            console.log("Credenciales incorrectas!!");
        }
    } catch (error) {
        console.log(error)
    }
}

const getDashbord = async(req,res)=>{
const User = {
    user: req.body.InputUser,
    password: req.body.InputPass,
}
//configurar el ingreso a dashbord por medio de token y autorizacion
    const dataok = await bd.Coincide(User)
    if(!dataok){
        res.status(409).json({mensaje:"Imposible ingresar"});
        console.log("Imposible ingresar")
    }else if(dataok){
        res.status(200).res.sendFile(path.join(__dirname, 'admin', 'html', 'dashbord.html'));
        console.log("Deveria ingresar")
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