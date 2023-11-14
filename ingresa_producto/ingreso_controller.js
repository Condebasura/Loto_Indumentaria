const formulario = document.querySelector("[data-form]");
let producto = document.querySelector("[data-producto]");
let precio = document.querySelector("[data-precio]");
let cuotas = document.querySelector("[data-cuotas]");
let archivo = document.querySelector("[data-archivo]");
let hom = document.querySelector(".hombre");
let muj = document.querySelector(".mujer");
let girl = document.querySelector(".niña");
let child = document.querySelector(".niño");
let Error = document.querySelector("[data-No]");

let Homb = document.querySelectorAll("[data-homb]");
let Wom = document.querySelectorAll("[data-wom]");
let g = document.querySelectorAll("[data-girl]");
let ch = document.querySelectorAll("[data-child]");
let sub_seccion = document.querySelector("[data-sub_seccion]");
let seccion = document.querySelector("[data-seccion]");

const IngresoEnd = () => {
   const spanCheck = document.createElement("span");
   spanCheck.setAttribute("class", "fa-sharp fa-solid fa-check");
   let parrafoModal = document.querySelector(".p_modal-in");
   parrafoModal.textContent = `El producto "${producto.value}" ingreso correctamente!!`;
   let modal = document.getElementById("modal");
   modal.appendChild(spanCheck);
   modal.showModal();
   setTimeout(function () {
      modal.close();
      location.reload();
   }, 5000);
}


const CodeError = () => {

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



   volver.addEventListener("click", (e) => {
      modal.close();
      location.reload();

   });
}

formulario.addEventListener("submit", (e) => {
   e.preventDefault();


   let ip = window.location.hostname;
   let port = window.location.port;
   let newArchivo = archivo.value.replace("C:\\fakepath\\", `http://${ip}:${port}/Imagen_producto/${seccion.value}/${sub_seccion.value}/`);


   const laSeccion = (producto, precio, cuotas, newArchivo) => {
      if (seccion.value == "Hombre" && sub_seccion.value == "Remeras") {
         seccion = hom;
         sub_seccion = Homb[0];


         return fetch("http://localhost:3000/H-Rem", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas, newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res => {

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      };

      if (seccion.value == "Hombre" && sub_seccion.value == "Pantalones") {
         sub_seccion = Homb[1]
         return fetch("http://localhost:3000/H-Pant", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas, newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res => {

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      }
      if (seccion.value == "Hombre" && sub_seccion.value == "Accesorios") {
         sub_seccion = Homb[3];
         return fetch("http://localhost:3000/H-Acce", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas, newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res => {

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      };





      if (seccion.value == "Mujer" && sub_seccion.value == "Remeras") {
         sub_seccion = Wom[0];
         return fetch("http://localhost:3000/M-Rem", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas, newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res => {

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      }
      if (seccion.value == "Mujer" && sub_seccion.value == "Pantalones") {
         sub_seccion = Wom[1];
         return fetch("http://localhost:3000/M-Pant", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas,newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res => {

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      };

      if (seccion.value == "Mujer" && sub_seccion.value == "Vestidos") {
         sub_seccion = Wom[2];
         return fetch("http://localhost:3000/M-Vest", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas, newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res => {

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      };

      if (seccion.value == "Mujer" && sub_seccion.value == "Accesorios") {
         sub_seccion = Wom[3];
         return fetch("http://localhost:3000/M-Acce", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas, newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res => {

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      };





      if (seccion.value == "Niña" && sub_seccion.value == "Remeras") {
         sub_seccion = g[0];
         return fetch("http://localhost:3000/N-Rem", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas, newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res =>{

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      };

      if (seccion.value == "Niña" && sub_seccion.value == "Pantalones") {
         sub_seccion = g[1];
         return fetch("http://localhost:3000/N-Pant", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas, newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res => {

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      };

      if (seccion.value == "Niña" && sub_seccion.value == "Vestidos") {
         sub_seccion = g[2];
         return fetch("http://localhost:3000/N-Vest", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas, newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res => {

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      };



      if (seccion.value == "Niño" && sub_seccion.value == "Remeras") {
         sub_seccion = ch[0];
         return fetch("http://localhost:3000/Ch-Rem", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas,newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res => {

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      };

      if (seccion.value == "Niño" && sub_seccion.value == "Pantalones") {
         sub_seccion = ch[1];
         return fetch("http://localhost:3000/Ch-Pant", {
            method: "POST",
            body: JSON.stringify({ producto, precio, cuotas, newArchivo, id: uuid.v4() }),
            headers: {
               'Content-Type': 'application/json'
            }

         })
            .then(res => {

               res.json();
               IngresoEnd();
            }

            )
            .catch(err => CodeError())
      };

   };

   console.log(sub_seccion.value)


   console.log(producto, "---", precio, newArchivo);




   laSeccion(producto.value, precio.value, cuotas.value, newArchivo);


});
