import bd from "../model/bd.js";
import jwt from "jsonwebtoken";
import { __dirname } from "../app.js";
import { USER_SECRET } from "../app.js";
import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


dotenv.config();

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
           const EnUso = await bd.EmailenUso(usuario)
           if(!EnUso){
              await bd.CrearUsuario(usuario);
              res.status(200);
              res.json({mensaje: "Usuario creado con exito"});
           }else if(EnUso){
            res.status(409);
            res.json({mensaje:`El email ${usuario.email} Ya esta en uso`});

           }

    } catch (error) {
        res.json({mensaje:"Ocurrio un error al insertar los datos!!"})
    }
}

export default{
    PostUsuario,
    CrearUsuario,
}