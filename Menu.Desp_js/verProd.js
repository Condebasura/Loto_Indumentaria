import { inService } from "../service/in-service.js";
         
import { imgZoom } from "./visual.js";
const producto = document.querySelector(".name");
let archivo = document.querySelector(".image");
const precio = document.querySelector(".bestprecio");
const cuotas = document.querySelector(".cuotas");
const interes = document.querySelector(".int");





  
   const link = document.querySelector(".med_pago");
  link.addEventListener("click", (e) =>{
e.preventDefault();
     if(e.target.matches(".med_pago")){
        const urls = ["https://http2.mlstatic.com/storage/logos-api-admin/fe827370-f3be-11eb-8e0d-6f4af49bf82e-m.svg","https://http2.mlstatic.com/storage/logos-api-admin/27764c60-ed7a-11ec-87df-cb682e3b026f-m.svg","https://http2.mlstatic.com/storage/logos-api-admin/ba8b96a0-cd41-11ea-a668-0563a89e00fd-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/c9f71470-6f07-11ec-9b23-071a218bbe35-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg","https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
      ];
      const modal = document.getElementById("modal");
      modal.innerHTML = "";
   const salir = document.createElement("i");
   const titulo = document.createElement("h1");
   const cards = document.createElement("div");
   const cuote = document.createElement("span");
   
   cards.setAttribute("class", "cards");
   titulo.setAttribute("class", "titulo");
   cuote.setAttribute("class", "cuote");
   salir.setAttribute("class", "fa-solid fa-circle-xmark");
   
   
   titulo.textContent = "Medios de pago y promociones";
   cuote.textContent = "Hasta 3 cuotas sin interes";
   
   modal.showModal();
   modal.appendChild(salir);
   modal.appendChild(titulo);
   modal.appendChild(cuote);

   modal.appendChild(cards);
  
   urls.forEach(url =>{
      const divCard = document.createElement("div");
      const imgCard = document.createElement("img")
      imgCard.src = url;
      console.log(url);
      divCard.setAttribute("class", "card_cuo");
      imgCard.setAttribute("class", "t_cards");
      
     // modal.appendChild(divCard); 
     cards.appendChild(divCard);
     divCard.appendChild(imgCard);
   })
   
   
  
   salir.addEventListener("click", (e)=>{
      if(e.target){
         modal.close();
         modal.innerHTML = "";
         
      }
      
   })
}

}); 





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
   let  EstaImg = url.searchParams.get("estaimg");
   console.log(EstaImg);
function GetDatos(perfil){
   // De esta forma hacemos que si el archivo .json contiene otra ip, se cambie por la que estamos usando
   let ip = window.location.hostname;
   console.log(ip)
   let url = new URL(perfil.newArchivo);
   let puerto = window.location.port;
   let urlPort = url.port;
   let urlJson = url.hostname;
     
   perfil.newArchivo =    perfil.newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ;
   if (perfil.producto && perfil.precio && perfil.cuotas && perfil.newArchivo) {
      
      producto.value = perfil.producto;
      precio.value = perfil.precio;
      cuotas.value = perfil.cuotas;
      archivo = perfil.newArchivo;
     
      let foto = document.querySelector(".image");
      producto.textContent = producto.value;
      precio.textContent = precio.textContent + precio.value;
      cuotas.textContent = cuotas.value + cuotas.textContent;
      interes.value = precio.value / cuotas.value;
      interes.textContent = interes.textContent + interes.value.toFixed(2);
      foto.src = archivo;
     // al importar "imgZoom" hace que el zoom de la imagen muestre la imagen por defecto al cargar la pagina
      imgZoom.src = archivo;
   }else{
    throw new Error();
    
   }
     }

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




}
      
informeImg();

export {archivo };
