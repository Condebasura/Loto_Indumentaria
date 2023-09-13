import { inService } from "../service/in-service.js";
const formulario = document.querySelector("[data-form]");
const producto = document.querySelector(".name");
const precio = document.querySelector(".bestprecio");
const cuotas = document.querySelector(".cuotas");
const interes = document.querySelector(".int");
let archivo = document.querySelector(".image");


const obtenerInformacion = async () => {

   const url = new URL(window.location);
   const id = url.searchParams.get("id");
   console.log(id);
   let EstaPagina = url.searchParams.get("estapagina");
console.log(EstaPagina);

   if (id == null) {
      window.location.href = "../ingresa_producto/Error.html";
   }

   if(EstaPagina == null){
      window.location.href = "../ingresa_producto/Error.html";
   }

   if (EstaPagina == "H-Rem.html") {



      try {
         const perfil = await inService.detalleProductoH_R(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   };


   if (EstaPagina == "H-Pant.html") {



      try {
         const perfil = await inService.detalleProductoH_P(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   }


   if (EstaPagina == "H-Acce.html") {



      try {
         const perfil = await inService.detalleProductoH_A(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   }



   if (EstaPagina == "M-Rem.html") {



      try {
         const perfil = await inService.detalleProductoW_R(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   }



   if (EstaPagina == "M-Pant.html") {



      try {
         const perfil = await inService.detalleProductoW_P(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   }



   if (EstaPagina == "M-Vest.html") {



      try {
         const perfil = await inService.detalleProductoW_V(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   }




   if (EstaPagina == "M-Acce.html") {



      try {
         const perfil = await inService.detalleProductoW_A(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   }



   if (EstaPagina == "N-Rem.html") {



      try {
         const perfil = await inService.detalleProductoN_R(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   }




   if (EstaPagina == "N-Pant.html") {



      try {
         const perfil = await inService.detalleProductoN_P(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   }





   if (EstaPagina == "N-Vest.html") {



      try {
         const perfil = await inService.detalleProductoN_V(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   }




   if (EstaPagina == "Ch-Rem.html") {



      try {
         const perfil = await inService.detalleProductoCH_R(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   }






   if (EstaPagina == "Ch-Pant.html") {

console.log(EstaPagina)

      try {
         const perfil = await inService.detalleProductoCH_P(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;

         }
         else {
            throw new Error();
         }
      }
      catch (error) {
         console.error("Catch Error -", error);
         window.location.href = "../ingresa_producto/Error.html";
      }
   }


};

obtenerInformacion();

formulario.addEventListener("submit", (e) => {
   // Evitar que el formulario haga la petición , nosotros la hacemos con javascript
   e.preventDefault();
   const url = new URL(window.location);
   const id = url.searchParams.get("id");
   let EstaPagina = url.searchParams.get("estapagina");
   
   
  
   if(EstaPagina == "H-Rem.html"){
   inService.actualizarProductoH_R(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};


if(EstaPagina == "H-Pant.html"){
   inService.actualizarProductoH_P(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "H-Acce.html"){
   inService.actualizarProductoH_A(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "M-Rem.html"){
   inService.actualizarProductoW_R(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "M-Pant.html"){
   inService.actualizarProductoW_P(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "M-Vest.html"){
   inService.actualizarProductoW_V(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};


if(EstaPagina == "M-Acce.html"){
   inService.actualizarProductoW_A(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "N-Rem.html"){
   inService.actualizarProductoN_R(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "N-Pant.html"){
   inService.actualizarProductoN_P(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "N-Vest.html"){
   inService.actualizarProductoN_V(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};


if(EstaPagina == "Ch-Rem.html"){
   inService.actualizarProductoCH_R(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};


if(EstaPagina == "Ch-Pant.html"){
   inService.actualizarProductoCH_P(producto.value, precio.value, cuotas.value, interes.value, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

});
