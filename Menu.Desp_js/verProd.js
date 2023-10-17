import { inService } from "../service/in-service.js";
         
import { imgZoom } from "./visual.js";
const producto = document.querySelector(".name");
let archivo = document.querySelector(".image");
const precio = document.querySelector(".bestprecio");
const cuotas = document.querySelector(".cuotas");
const interes = document.querySelector(".int");


// Creamos una funcion para que se muestre un cuadro de dialogo al producirse un error.
const   CodeError = () =>{

   const modal = document.getElementById("modal");
   const volver = document.createElement("button");
   volver.setAttribute("class", "boton_volver");
   volver.textContent = "Aceptar";
   modal.getElementsByClassName("cont_error");
   const spanTriengle = document.createElement("span");
   spanTriengle.setAttribute("class", "fa-solid fa-triangle-exclamation");
   const Mensaje = document.createElement("h1");
   Mensaje.getAttribute("class", "text_prin");
   Mensaje.classList.toggle("text_prin");
   Mensaje.textContent = "Ocurrio un Error!! Pruebe denuevo";
   modal.showModal();
   modal.appendChild(spanTriengle);
   modal.appendChild(Mensaje);
   modal.appendChild(volver);
   
   

   volver.addEventListener("click", (e)=>{
       modal.close();
       location.reload();
       
       });
      }

const informeImg = async () => {
   let url = new URL(window.location);
   const id = url.searchParams.get("id");
   console.log(id);
   let EstaImg = url.searchParams.get("estaimg");
   console.log(EstaImg);
function GetDatos(perfil){
   if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
      producto.value = perfil.producto;
      precio.value = perfil.precio;
      cuotas.value = perfil.cuotas;
      interes.value = perfil.interes;
      archivo = perfil.archivo;
     
      let foto = document.querySelector(".image");
      producto.textContent = producto.value;
      precio.textContent = precio.textContent + precio.value;
      cuotas.textContent = cuotas.value + cuotas.textContent;
      interes.value = precio.value / cuotas.value;
      interes.textContent = interes.textContent + interes.value.toFixed(2);
      foto.src = archivo;
     // al importar "imgZoom" hace que el zoom de la imagen muestre la imagen por defecto al cargar la pagina
      imgZoom.src = archivo;
   }
   else {
      throw CodeError();
   }
};

   if (id == null) {
      CodeError();
   }
   
   
 
   if (EstaImg == null) {
      CodeError();
   }
   
   
   if (EstaImg == "H-Rem.html") {

      try {
         const perfil = await inService.detalleProductoH_R(id);
         console.log(perfil);
         GetDatos(perfil);
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   };


   if (EstaImg == "H-Pant.html") {

      try {
         const perfil = await inService.detalleProductoH_P(id);
         console.log(perfil);
         GetDatos(perfil);
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }

if(EstaImg == "H-Acce.html"){
   try {
      const perfil = await inService.detalleProductoH_A(id);
      console.log(perfil);
      GetDatos(perfil);
   }
   catch (error) {
      console.error("Catch Error -", error);
      CodeError();
   }
};

if(EstaImg == "M-Rem.html"){
   try {
      const perfil = await inService.detalleProductoW_R(id);
      console.log(perfil);
      GetDatos(perfil);
   }
   catch (error) {
      console.error("Catch Error -", error);
      CodeError();
   }
};

if(EstaImg == "M-Pant.html"){
   try {
      const perfil = await inService.detalleProductoW_P(id);
      console.log(perfil);
      GetDatos(perfil);
   }
   catch (error) {
      console.error("Catch Error -", error);
      CodeError();
   }
};

if(EstaImg == "M-Vest.html"){
   try {
      const perfil = await inService.detalleProductoW_V(id);
      console.log(perfil);
      GetDatos(perfil);
   }
   catch (error) {
      console.error("Catch Error -", error);
      CodeError();
   }
};

if(EstaImg == "M-Acce.html"){
   try {
      const perfil = await inService.detalleProductoW_A(id);
      console.log(perfil);
      GetDatos(perfil);
   }
   catch (error) {
      console.error("Catch Error -", error);
      CodeError();
   }
};

if(EstaImg == "N-Rem.html"){
   try {
      const perfil = await inService.detalleProductoN_R(id);
      console.log(perfil);
      GetDatos(perfil);
   }
   catch (error) {
      console.error("Catch Error -", error);
      CodeError();
   }
};


if(EstaImg == "N-Pant.html"){
   try {
      const perfil = await inService.detalleProductoN_P(id);
      console.log(perfil);
      GetDatos(perfil);
   }
   catch (error) {
      console.error("Catch Error -", error);
      CodeError();
   }
};

if(EstaImg == "N-Vest.html"){
   try {
      const perfil = await inService.detalleProductoN_V(id);
      console.log(perfil);
      GetDatos(perfil);
   }
   catch (error) {
      console.error("Catch Error -", error);
      CodeError();
   }
};

if(EstaImg == "Ch-Rem.html"){
   try {
      const perfil = await inService.detalleProductoCH_R(id);
      console.log(perfil);
      GetDatos(perfil);
   }
   catch (error) {
      console.error("Catch Error -", error);
      CodeError();
   }
};

if(EstaImg == "Ch-Pant.html"){
   try {
      const perfil = await inService.detalleProductoCH_P(id);
      console.log(perfil);
      GetDatos(perfil);
   }
   catch (error) {
      console.error("Catch Error -", error);
      CodeError();
   }
};




};
informeImg();

export {archivo};