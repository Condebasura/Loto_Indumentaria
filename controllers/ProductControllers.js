import path from "path";
import {__dirname} from "../app.js";

const GetIndex = (req, res)=>{
    res.sendFile(path.join(__dirname , 'public', 'html' , 'index.html'))
};

const GetHRem = (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'html', 'H-Rem.html'))
}

const GetHPant = (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'html', 'H-Pant.html'))
}


export default {
    GetIndex, 
    GetHRem,
    GetHPant,

}