import { inService } from "../service/in-service.js";

const producto = document.querySelector(".name");
let archivo = document.querySelector(".image");
const precio = document.querySelector(".bestprecio");
const cuotas = document.querySelector(".cuotas");
const interes = document.querySelector(".int");
;

const informeImg = async () => {
   let url = new URL(window.location);
   const id = url.searchParams.get("id");
   console.log(id);
   let EstaImg = url.searchParams.get("estaimg");
   console.log(EstaImg);


   if (id == null) {
      window.location.href = "../ingresa_producto/Error.html";
   }

   if (EstaImg == null) {
      window.location.href = "../ingresa_producto/Error.html";
   }
   if (EstaImg == "H-Rem.html") {



      try {
         const perfil = await inService.detalleProductoH_R(id);
         console.log(perfil);
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
            interes.textContent = interes.textContent + interes.value;
            foto.src = archivo;
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


   if (EstaImg == "H-Pant.html") {

      try {
         const perfil = await inService.detalleProductoH_P(id);
         console.log(perfil);
         if (perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo) {
            producto.value = perfil.producto;
            precio.value = perfil.precio;
            cuotas.value = perfil.cuotas;
            interes.value = perfil.interes;
            archivo = perfil.archivo;
            //queda arreglar el problema de la imagen por defecto y las cuotas 
            let foto = document.querySelector(".image");
            producto.textContent = producto.value;
            precio.textContent = precio.textContent + precio.value;
            cuotas.textContent = cuotas.value + cuotas.textContent;
            interes.value = precio.value / cuotas.value;
            interes.textContent = interes.textContent + interes.value;
            foto.src = archivo;
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
informeImg();

