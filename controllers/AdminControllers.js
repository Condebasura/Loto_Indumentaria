import path, { join } from "path";
import {__dirname} from "../app.js";
import bd from "../model/bd.js";
import { ScrT } from "../app.js";
import jwt from "jsonwebtoken";
import fs from 'fs';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { error } from "console";

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
        const tkn =   req.cookies.mitoken;
        if(!tkn){
           return  res.status(401).json({mensaje:"Credenciales incorrectas"});
        }
    jwt.verify(tkn, ScrT, async(err)=>{
        if(err){
            console.error(err.message);
			return	 res.status(409).json({mensaje: "Ocurio un error al cargar"});
        }else{
          return  res.status(200).sendFile(path.join(__dirname, '/admin/html/dashbord.html'))
        }
    })
    
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
};


const DataProd = async (req, res)=>{
try{
  console.log(req.body);
    const validar = await bd.validaDatos(req.body.id);
   
    
    if(!validar){
        res.status(404).json({mensaje:"No hay productos para mostrar!!"})
    }else{
        const imgbox = path.join(__dirname, `./public/uploads` , validar.imagen);
        console.log(imgbox);
        
        console.log(`Los datos de ${req.body.id} coinciden con los de la bd`)
        res.status(200).json(validar);
    }
}catch(err){
    console.log(err.message);
}

};


const ActualizarProd = async (req, res)=>{
    let imgDefoult = 'a4937c6a789a8856d0632422c7af52fa';
    const validar = await bd.validaDatos(req.params.id);
    const imgPrev = path.join(__dirname, `./public/uploads` , validar.imagen);
    let ImgPrevPath = path.basename(imgPrev).split(',')
   const ImgBSNM = path.basename(imgPrev);
    
   
    let imagenes = req.files.map(file => file.filename);
    if (imagenes.length === 0) {
        imagenes = ImgPrevPath.filter(img => img !== imgDefoult); 
    }

   
    if (imagenes.length === 0) {
        imagenes = [imgDefoult]; 
    }
    while(imagenes.length < 5 ){
        imagenes.push(imgDefoult);
    };
        
  let img = imagenes.join(',');
try {
    
    const products = {
        id: validar.id,
        producto: req.body.nomProd,
        stock: req.body.InpStock,
        descuento: req.body.InpDesc,
        precio: req.body.InpPrecio,
        cuotas: req.body.InpSInt,
        seccion: validar.seccion,
        subSeccion: validar.subSeccion,
        imagen: img,
        
    }
   
let imagenProd = products.imagen;

for (let i = 0; i < ImgPrevPath.length; i++) {
    const imgPrevia = ImgPrevPath[i]; // Imagen previa en la iteración actual
    const lasImgs = path.join(__dirname, './public/uploads', imgPrevia);

    let imgDelEdSplit = imagenProd.split(",");
    let imgDEditBase = imgDelEdSplit.map(ruta => ruta.split("\\").pop());

    // Eliminar solo si la imagen previa no es la imagen por defecto y no está en las nuevas imágenes
    if (imgPrevia !== imgDefoult && !imgDEditBase.includes(imgPrevia)) {
        if (fs.existsSync(lasImgs)) {
            fs.unlink(lasImgs, (err) => {
                if (err) {
                    console.error('Error al eliminar la imagen anterior:', err);
                    return res.status(500).send('Error al actualizar la imagen');
                }
                console.log('Imagen anterior eliminada correctamente:', imgPrevia);
            });
        } else {
            console.log('Imagen ya eliminada o inexistente:', imgPrevia);
        }
    } else {
        console.log('Manteniendo la imagen o es la imagen por defecto:', imgPrevia);
    }
}


// Subir las nuevas imágenes
for (let file of req.files) {
    const destino = path.join(__dirname, './public/uploads', file.filename);
    
    fs.copyFile(file.path, destino, (err) => {
        if (err) {
            console.error('Error al subir la nueva imagen:', err);
            return res.status(500).send('Error al subir la imagen');
        }
        console.log('Nueva imagen subida correctamente:', file.filename);
    });
}

// Actualizar el producto en la base de datos
await bd.UpdateProd(products);
return res.status(200).json({mensaje:'Producto actualizado con éxito'});


} 
catch (error) {
res.status(409).json({mwnsaje: "Ocurrio un problema al actualizar el producto!!"})    
}
} 

const pago = async (req, res)=>{

    console.log(req.body)
    const client = new MercadoPagoConfig({ accessToken: 'TEST-8903627529364535-110700-9770d295c0baff074494e738ea48e878-15967463' });
    
    const payment = new Payment(client);
   const payBody =  payment.create({ body: req.body })
   .then(res.status(200).json(payment))
   .catch(console.log(error.message));
   console.log(payBody)
}
const EliminarProducto = async (req , res)=>{
    
    try{

        let id = await req.params.id;
         let img = await req.params.img;
         const imgDef = path.join(__dirname, './public/uploads/',"a4937c6a789a8856d0632422c7af52fa");

         let imgbox = path.join(__dirname, './public/uploads', img);
        const paths = imgDef.split('uploads\\');
        const imgDefault = paths[1];

        const data = imgbox.split('uploads\\');
        const imgData = data[1].split(",");
               imgData.map(img =>{
            if(img !== imgDefault){
                const imagPath = path.join(__dirname, './public/uploads', img);
                fs.unlink(imagPath , (err)=>{
                    if(err){
                        console.error("Se produjo un error al eliminar las imagenes", err);
                        return res.status(500).send("Error al eliminar las imagenes")
                    }
                    console.log("Imagenes eliminadas con exito");
                })
            }
        })   

        
         
      bd.DeleteProd(id);
    console.log(`Producto con id ${id} fue  eliminado correctamente.`);
}catch(err){
    console.log(err.message)
};

}



const logout = async (req,res)=>{
	try{
			await res.cookie('mitoken', '', {expires: new Date(0), httpOnly: true});
			await res.cookie('SesionTks', '', {expires: new Date(0), httpOnly: true});
			return res.sendFile(path.join(__dirname , '/admin/html/IniciarCrear.html'))
		

	}catch(err){
		console.log(err)
	}
	
   
		
	
}

export default {
    getAdmin,
    postProduct,
    CrearUser,
    PostUser,
    getDashbord,
    DataProd,
    ActualizarProd,
    pago,
    EliminarProducto,
    logout,
}