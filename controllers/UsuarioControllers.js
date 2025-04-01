import bd from "../model/bd.js";
import jwt from "jsonwebtoken";
import { __dirname } from "../app.js";
import { USER_SECRET } from "../app.js";
import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


dotenv.config();

// Recuperar contraseña
const getRecuPassword = (req, res) =>{
    res.sendFile(path.join(__dirname , 'public', 'html', 'RecuPass.html'))
}

// Post para iniciar sesión
const PostUsuario = async (req, res)=>{
    try {
         
        const usuario = {
            email:req.body.InputEmail,
            password: req.body.InputPass,
        }
        const User = await bd.NoCoincide(usuario);
        if(User){
            const data = await bd.DataUser(usuario);
            const payload = {usuario,
                nombre: data.nombre,
                apellido: data.apellido,
                email: data.email, 
                password: data.password
            };
               const secret = USER_SECRET;
               const token = jwt.sign(payload, secret);

               console.log("Creo token")
               res.cookie('mitoken', token,  { sameSite: 'Strict' } , {
					httpOnly: true
				}, {path:'/'});
                
                     res.status(200).json({token});
        }else if(!User){
            res.status(409);
            res.json({mensaje: "Credenciales Incorrectas"});
        }
    } catch (error) {
        res.json("Ocurrio un error al verificar los datos")
    }
};

// Crear usuario
const CrearUsuario = async (req, res)=>{
    try {
         const usuario = {
            nombre: req.body.InputNombre,
            apellido: req.body.InputApellido,
            email: req.body.InputCorreo, 
            password: req.body.InputPassword,

         }
         let usPass = usuario.password;
           const EnUso = await bd.EmailenUso(usuario)
           if(!EnUso && usPass.length >= 6){
              await bd.CrearUsuario(usuario);
              res.status(200);
              res.json({mensaje: "Usuario creado con exito"});
           }else if(EnUso){
            res.status(409);
            res.json({mensaje:`El email ya esta en uso`});

           }else if(usPass.length < 6){
            res.status(400);
            res.json({mensaje: "Ingrese mas de 6 caracteres"})
           }

    } catch (error) {
        res.json({mensaje:"Ocurrio un error al insertar los datos!!"})
    }
}

// Autentica que el usuario exista e inicia sesion.
const GetUsuario = async (req, res)=>{
try {
    const token = req.cookies.mitoken;
    const secret = USER_SECRET;
    if(!token){
        return res.status(401).render("CloseSesion", {mensaje: "La sesion ha caducado"})
    }
jwt.verify(token, secret, async(err, usuario)=>{
    if(err){
        console.error(err.message);
					return res.status(409).json({mensaje: "Ocurio un error al cargar los datos del usuario"});
    }else{
        
        
        res.status(200).json({token});
    }
})
} catch (error) {
    console.log(error.mensaje)
}
};


// Envia un Email de recuperacion de contraseña
const PostRecuPass = async (req, res)=>{
    
     try {
        const UserEmail = await req.body.mail;
        const transport = nodemailer.createTransport({
            host: "smtp.gmail.com", 
            port:587,
            secure: false, 
           auth:{ 
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
            
           
        });
        async function main() {
            const secret = USER_SECRET;
            const token = jwt.sign({UserEmail}, secret,{
                expiresIn: '1h'
            });
            const info = await transport.sendMail({
                from: '"Loto Indumentaria <indumentaria.Loto@gmail.com>',
                to: `${UserEmail}`,
                subject: "Cambio de contraseña",
                text:'',
                html:`<div style="display: flex;
			  flex-direction: column;
			  align-items: center;
			  justify-content: center;
			  background-color: rgb(156, 6, 8);
			  padding: 2em;
			  margin:2em;
			  box-shadow: 2px 2px 12px #444545;">
			  <h2>En el siguiente enlace podras cambiar tu contraseña</h2>
			  <a href= "http://localhost:3000/RecuPass?token=${token}"  style="border-style: none;
      background-color: rgba(28, 60, 202, 1);
      color: white;
      padding: 3px;
	  text-decoration: none;
      border-radius: 4px;
			  ">Cambiar Contraseña</a> </div>`,
            })
            console.log("Mensaje enviado %s", info);

        }
        await main();
        res.status(250).json({mensaje: `Se envio un email a ${UserEmail}`})
     } catch (error) {
        console.log(error)
     }
}

// Permite cambiar la contraseña 
const ChangePass = async(req, res)=>{
    try{
   
        const usuario = {
       email: req.body.inputEmail,
       password: req.body.inputPass,
    }
    let datos = await bd.DataUser({email:usuario.email});
    
    if(usuario.password.length < 6){
        res.status(409);
        res.json({mensaje: "Ingrese al menos 6 digitos"});
    }else{
       
       await bd.UpdatePass(usuario);
       res.status(200);
       res.json({mensaje: "Se actualizo la contraseña correctamente"})
    }
   }catch(err){
       console.log(err)
   }
   
   };

// Actualiza el perfil 
   const ActualizarPerfil = async (req, res)=>{
	         
    
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.correo,
        password: req.body.password,
        
        
    }
    
       let UserPas = usuario.password;
       
       
         let datos = await bd.DataUser({email: usuario.email});
       
          try{
              const secret = USER_SECRET;
              if(UserPas === '' || UserPas === undefined){
                  let PasAnterior = datos.password;
                  UserPas = PasAnterior;
                  console.log("se mantiene la contraseña anterior")
                 
            const newtoken = jwt.sign(usuario = {
                nombre: usuario.nombre, 
                apellido: usuario.apellido,
                email: usuario.email,
                
            }, secret) 
            
            
        
        await bd.UpdatePerfilSinPassword(usuario);
        res.status(200).json({token: newtoken})
        }else{
            const newtoken = jwt.sign(usuario , secret);
            await bd.UpdatePerfil(usuario);
            res.status(200).json({token: newtoken})
        }
    }
           
    catch(err){
        console.log(err),
        res.status(500).json({err: "Ocurrio un error al querer actualizar los datos , intente nuevamente"});
    }

};
  // Reparar el problema en sqlite al querer ingresar un mismo favorito
const AFavoritos = async(req, res)=>{
    
const usuario={
    email:req.body.email,
    favorito:req.body.favoritos,
}
try {
    let favorito = usuario.favorito;
    let Usuario = usuario.email;
      let contieneElId = await bd.ConsultfavID(Usuario ,favorito)
     
      if (contieneElId) {
        return res.status(404).json({ mensaje: "El favorito ya existe en su lista" });
    }else{
        
        await bd.AddFavorito(usuario);
        res.status(200).json({mensaje: "Se agrego a favoritos"})
    }
      
    
     
    
} catch (error) {
    res.status(500).json({err: "Ocurrio un error al querer agregar favorito"});
    
}

};

const GetFavoritos = async (req, res)=>{
     
    const favorito ={
        Usuario: req.body.usuario,
    }
try {
    
    let favDeuser = await bd.ConsultFavorito({Usuario: favorito.Usuario})
    if (!favDeuser.length) {
        return res.status(404).json({ mensaje: "Sin Favoritos" });
    }
    // console.log(favDeuser.Producto_id)
    const productosFavoritos = [];
    for(let favoProdu of favDeuser){
         
        let prod = favoProdu.Producto_id;

       let ProdFavorito = await bd.ConsultProdID({prod: prod});
       
     if(ProdFavorito){
         productosFavoritos.push(ProdFavorito);
    }
    
}
       return res.status(200).json({productosFavoritos});

  
  

  
  
} catch (error) {
   console.log("Error en GetFavoritos:", error)   
   return res.status(500).json({ mensaje: "Error interno del servidor" }); 
}
  
    
};

const EliminarFavorito = async(req,res)=>{
    let id = await req.params.id;
   
    if(!id){
        console.log("no se encontro ningun favorito")
    }else{
        bd.DeleteFav(id);
        console.log("favorito eliminado con exito");
    }

}


// cierra la session del usuario
const Logout = async (req, res)=>{
    try {
         await res.clearCookie('SesionTKs');
        await res.cookie('SesionTks', '', {expires: new Date(0), httpOnly: true});
        await res.cookie('mitoken', '', {expires: new Date(0), httpOnly: true});
        return res.json({ message: "Sesión cerrada correctamente" });
        
            
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al cerrar sesión" });
    }
}
    

export default{
    getRecuPassword,
    PostUsuario,
    CrearUsuario,
    PostRecuPass,
    GetUsuario,
    ChangePass,
    ActualizarPerfil,
    AFavoritos,
    GetFavoritos,
    EliminarFavorito,
    Logout
}