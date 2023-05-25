import { inService } from "/service/in-service.js";


const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {

   const url = new URL(window.location);
   const id = url.searchParams.get("id");
   let EstaPagina = url.searchParams.get("estapagina");


   if (id == null) {
      window.location.href = "../ingresa_producto/Error.html";
   }

   if(EstaPagina == null){
      window.location.href = "../ingresa_producto/Error.html";
   }

   const producto = document.querySelector("[data-producto]");
   const precio = document.querySelector("[data-precio]");
   const cuotas = document.querySelector("[data-cuotas]");
   const interes = document.querySelector("[data-interes]");
   let archivo = document.querySelector("[data-archivo]");


  


   if (EstaPagina == "/html/H-Rem.html") {



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


   if (EstaPagina == "/html/H-Pant.html") {



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


   if (EstaPagina == "/html/H-Acce.html") {



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



   if (EstaPagina == "/html/M-Rem.html") {



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



   if (EstaPagina == "/html/M-Pant.html") {



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



   if (EstaPagina == "/html/M-Vest.html") {



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




   if (EstaPagina == "/html/M-Acce.html") {



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



   if (EstaPagina == "/html/N-Rem.html") {



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




   if (EstaPagina == "/html/N-Pant.html") {



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





   if (EstaPagina == "/html/N-Vest.html") {



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




   if (EstaPagina == "/html/Ch-Rem.html") {



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






   if (EstaPagina == "/html/Ch-Pant.html") {

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
   
   const producto = document.querySelector("[data-producto]").value;
   const precio = document.querySelector("[data-precio]").value;
   const cuotas = document.querySelector("[data-cuotas]").value;
   const interes = document.querySelector("[data-interes]").value;
   const archivo = document.querySelector("[data-archivo]").value;
  
   if(EstaPagina == "/html/H-Rem.html"){
   inService.actualizarProductoH_R(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};


if(EstaPagina == "/html/H-Pant.html"){
   inService.actualizarProductoH_P(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "/html/H-Acce.html"){
   inService.actualizarProductoH_A(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "/html/M-Rem.html"){
   inService.actualizarProductoW_R(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "/html/M-Pant.html"){
   inService.actualizarProductoW_P(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "/html/M-Vest.html"){
   inService.actualizarProductoW_V(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};


if(EstaPagina == "/html/M-Acce.html"){
   inService.actualizarProductoW_A(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "/html/N-Rem.html"){
   inService.actualizarProductoN_R(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "/html/N-Pant.html"){
   inService.actualizarProductoN_P(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

if(EstaPagina == "/html/N-Vest.html"){
   inService.actualizarProductoN_V(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};


if(EstaPagina == "/html/Ch-Rem.html"){
   inService.actualizarProductoCH_R(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};


if(EstaPagina == "/html/Ch-Pant.html"){
   inService.actualizarProductoCH_P(producto, precio, cuotas, interes, archivo, id).then(() => {
      window.location.href = "/ingresa_producto/prod_end.html";
   }).catch(err => console.log(err))
};

});