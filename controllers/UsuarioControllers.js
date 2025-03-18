import bd from "../model/bd.js";
import jwt from "jsonwebtoken";
import { __dirname } from "../app.js";
import { USER_SECRET } from "../app.js";
import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


dotenv.config();
const getRecuPassword = (req, res) =>{
    res.sendFile(path.join(__dirname , 'public', 'html', 'RecuPass.html'))
}

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
                email: data.email, 
                password: data.password
            };
               const secret = USER_SECRET;
               const token = jwt.sign(payload, secret);
               res.cookie('mitoken', token,  { sameSite: 'Strict' } , {
					httpOnly: true
				});
                res.cookie('SesionTks', token ,{sameSite: 'Strict'},{
                    httpOnly:true});
                     res.status(200).json({token});
        }else if(!User){
            res.status(409);
            res.json({mensaje: "Credenciales Incorrectas"});
        }
    } catch (error) {
        res.json("Ocurrio un error al verificar los datos")
    }
};

const CrearUsuario = async (req, res)=>{
    try {
         const usuario = {
            nombre: req.body.InputNombre,
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
			  <a href= "https://loto.hopto.org/RecuPass?token=${token}"  style="border-style: none;
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
   
   }



const Logout = async (req, res)=>{
    try {
        await res.cookie('mitoken', '', {expires: new Date(0), httpOnly: true});
			await res.cookie('SesionTks', '', {expires: new Date(0), httpOnly: true});
            return res.sendFile(path.join(__dirname , '/'))
    } catch (error) {
        console.log(error);
    }
}

export default{
    getRecuPassword,
    PostUsuario,
    CrearUsuario,
    PostRecuPass,
    GetUsuario,
    ChangePass,
    Logout,
}