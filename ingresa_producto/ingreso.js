import { inService } from "../service/in-service.js";
let hombres = document.querySelector(".hombre");
let mujeres = document.querySelector(".mujer");
let niña = document.querySelector(".niña");
let niño = document.querySelector(".niño");
console.log(hombres.innerText)
const crearnuevoProducto = (producto, precio, cuotas,archivo,id, seccion, sub_seccion, interes) =>{
        const linea = document.createElement("li");
        linea.setAttribute("class", "Pantalones");
        let enCuotas = precio / cuotas;
        
        const contenido = `
    <div class="box-item" >
        <div class="productimag">
             <a class="img-prod" href="">
                 <img class="image" src= ${archivo} title=${producto}  >
             </a>
             <div class="datos">
              <a class="name" href="" title="${producto}">${producto}</a>
              <hr>
              <div class=" precio">
                  <span class="bestprecio">$ ${precio}</span>
                  <div class="control-cuotas">
                      <span class="cuotas" >
                          ${cuotas} cuotas de 
                          <b>${enCuotas.toFixed(2)}</b>
                      </span>
                      <br>    
                      <span class="int">
                          sin interes
                      </span>
                      <button class="fas fa-shopping-cart" title="Agregar al carrito"></button>
                      <button  class="fa-solid fa-trash-can" title="Eliminar" id= "${id}"></button>
                  </div>
              </div>
             </div>
             </div>
             </div> `;
            
             
             linea.innerHTML = contenido;
             const btn = linea.querySelector(".fa-trash-can");
        btn.addEventListener("click", () =>{
         const id = btn.id;
         inService.eliminarProducto(id).then( respuesta => {
          
         }).catch(err => alert("Error al querer borrar"));
        })
        return linea;
     }
        
        const ul = document.querySelector("[data-ul]");

        inService.listaProductos().then((data) =>{
            data.forEach(({producto ,precio ,cuotas, interes , archivo, id }) => {
                const nuevoProducto = crearnuevoProducto(producto, precio,cuotas, interes,archivo, id );
                ul.appendChild(nuevoProducto);
            });
        })
        .catch((error)=> alert("Ocurrio un error!!"))
