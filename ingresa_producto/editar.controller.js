import { inService } from "../service/in-service.js";
const formulario = document.querySelector("[data-form]");
const producto = document.querySelector(".name");
const precio = document.querySelector(".bestprecio");
const cuotas = document.querySelector(".cuotas");
let newArchivo = document.querySelector(".image");









const   CodeError = () =>{

   const modal = document.getElementById("modal");
   const volver = document.createElement("button");
   const FaCheck = document.querySelector(".fa-solid.fa-check");
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
   modal.removeChild(FaCheck);
   
   modal.appendChild(spanTriengle);
   modal.appendChild(Mensaje);
   modal.appendChild(volver);

   volver.addEventListener("click", (e)=>{
       modal.close();
       location.reload();
       
       });
      }

      
const obtenerInformacion = async () => {

   const url = new URL(window.location);
   const id = url.searchParams.get("id");
   console.log(id);
   let EstaPagina = url.searchParams.get("estapagina");
console.log(EstaPagina);



   if (id == null) {
      CodeError();
   }

   if(EstaPagina == null){
      CodeError();
   }

   if (EstaPagina == "H-Rem.html") {



      try {
         const perfil = await inService.detalleProductoH_R(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas &&  perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            
            newArchivo = perfil.newArchivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   };


   if (EstaPagina == "H-Pant.html") {



      try {
         const perfil = await inService.detalleProductoH_P(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas  && perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            newArchivo = perfil.newArchivo;

           
          
         
            
         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }


   if (EstaPagina == "H-Acce.html") {



      try {
         const perfil = await inService.detalleProductoH_A(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas &&  perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            newArchivo = perfil.newArchivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }



   if (EstaPagina == "M-Rem.html") {



      try {
         const perfil = await inService.detalleProductoW_R(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas &&  perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            newArchivo = perfil.newArchivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }



   if (EstaPagina == "M-Pant.html") {



      try {
         const perfil = await inService.detalleProductoW_P(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas &&  perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            newArchivo = perfil.newArchivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }



   if (EstaPagina == "M-Vest.html") {



      try {
         const perfil = await inService.detalleProductoW_V(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas &&  perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
             newArchivo = perfil.newArchivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }




   if (EstaPagina == "M-Acce.html") {



      try {
         const perfil = await inService.detalleProductoW_A(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas  && perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            newArchivo = perfil.newArchivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }



   if (EstaPagina == "N-Rem.html") {



      try {
         const perfil = await inService.detalleProductoN_R(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas &&  perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            newArchivo = perfil.newArchivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }




   if (EstaPagina == "N-Pant.html") {



      try {
         const perfil = await inService.detalleProductoN_P(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas &&  perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            newArchivo = perfil.newArchivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }





   if (EstaPagina == "N-Vest.html") {



      try {
         const perfil = await inService.detalleProductoN_V(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas &&  perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            newArchivo = perfil.newArchivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }




   if (EstaPagina == "Ch-Rem.html") {



      try {
         const perfil = await inService.detalleProductoCH_R(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas &&  perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            newArchivo = perfil.newArchivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }






   if (EstaPagina == "Ch-Pant.html") {

console.log(EstaPagina)

      try {
         const perfil = await inService.detalleProductoCH_P(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas  && perfil.newArchivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            newArchivo = perfil.newArchivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         CodeError();
      }
   }


};




newArchivo.addEventListener("change", (e)=>{
   e.preventDefault();
   
   
      if(e.target){
         //  ASI SE INGRESA AL NOMBRE DE LA IMG, VEAMOS SI LA PODEMOS HACER CAMBIAR AL EDITAR UN PRODUCTO!!!
         const url = new URL(newArchivo);
         let ip = window.location.hostname;
         let port = window.location.port;
         let carpeta =  url.pathname.split("/")[1]
         let seccion = url.pathname.split("/")[2];
         let sub_seccion = url.pathname.split("/")[3];
        
       let imgChang  =  e.target.files[0].name;
       
    let cambioArchivo =   newArchivo.replace(newArchivo, `http://${ip}:${port}/${carpeta}/${seccion}/${sub_seccion}/${imgChang}`);

   
formulario.addEventListener("submit", (e) => {
   // Evitar que el formulario haga la petición , nosotros la hacemos con javascript
   e.preventDefault();
   const producto = document.querySelector(".name");
const precio = document.querySelector(".bestprecio");
const cuotas = document.querySelector(".cuotas");
   const url = new URL(window.location);
   const id = url.searchParams.get("id");
   let EstaPagina = url.searchParams.get("estapagina");
   
   
   const EdicionFin = () =>  {

      if(e.target.matches(".form") ){
         
         
          let parrafoModal = document.querySelector(".p_modal-edit");
          parrafoModal.textContent = `Edición Finalizada!! Volviendo al Listado` ;
           let modal = document.getElementById("modal");
           modal.showModal();
          
         }

            return  window.location.href = `../html/${EstaPagina}`;    
  }
   
 
       
    
  
   if(EstaPagina == "H-Rem.html"){
   inService.actualizarProductoH_R(producto.value, precio.value, cuotas.value, cambioArchivo, id).then(() => {
  EdicionFin();
    //   window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};


if(EstaPagina == "H-Pant.html"){

   inService.actualizarProductoH_P(producto.value, precio.value, cuotas.value, cambioArchivo, id).then(() => {
      EdicionFin();
      // window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};

if(EstaPagina == "H-Acce.html"){
   inService.actualizarProductoH_A(producto.value, precio.value, cuotas.value, cambioArchivo, id).then(() => {
      EdicionFin();
      //window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};

if(EstaPagina == "M-Rem.html"){
   inService.actualizarProductoW_R(producto.value, precio.value, cuotas.value,  cambioArchivo, id).then(() => {
  EdicionFin();
     // window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};

if(EstaPagina == "M-Pant.html"){
   inService.actualizarProductoW_P(producto.value, precio.value, cuotas.value,  cambioArchivo, id).then(() => {
     EdicionFin();
      // window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};

if(EstaPagina == "M-Vest.html"){
   inService.actualizarProductoW_V(producto.value, precio.value, cuotas.value,  cambioArchivo, id).then(() => {
      EdicionFin();
      //window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};


if(EstaPagina == "M-Acce.html"){
   inService.actualizarProductoW_A(producto.value, precio.value, cuotas.value,  cambioArchivo, id).then(() => {
      EdicionFin();
      //window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};

if(EstaPagina == "N-Rem.html"){
   inService.actualizarProductoN_R(producto.value, precio.value, cuotas.value,  cambioArchivo, id).then(() => {
      EdicionFin();
     // window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};

if(EstaPagina == "N-Pant.html"){
   inService.actualizarProductoN_P(producto.value, precio.value, cuotas.value,  cambioArchivo, id).then(() => {
      EdicionFin();
      // window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};

if(EstaPagina == "N-Vest.html"){
   inService.actualizarProductoN_V(producto.value, precio.value, cuotas.value,  cambioArchivo, id).then(() => {
      EdicionFin();
      // window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};


if(EstaPagina == "Ch-Rem.html"){
   inService.actualizarProductoCH_R(producto.value, precio.value, cuotas.value,  cambioArchivo, id).then(() => {
      EdicionFin();
      //window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};


if(EstaPagina == "Ch-Pant.html"){
   inService.actualizarProductoCH_P(producto.value, precio.value, cuotas.value,  cambioArchivo, id).then(() => {
      EdicionFin();
     // window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => CodeError())
};

});
}
});

obtenerInformacion();