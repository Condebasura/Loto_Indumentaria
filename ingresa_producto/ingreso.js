import { inService } from "../service/in-service.js";
console.log(inService);
const crearnuevoProducto = (producto, precio, id) =>{
    const linea = document.createElement("li");
    linea.setAttribute("class", "Pantalones")
     const contenido = `
    <div class="box-item" >
        <div class="productimag">
             <a class="img-prod" href="">
                 <img class="image" src="/Imagen_Producto/Hombre/remeras-chombas/chomba-1.jpg"  alt="" title="Chomba Polo"  >
             </a>
             <div class="datos">
              <a class="name" href="" title="${producto}">${producto}</a>
              <hr>
              <div class=" precio">
                  <span class="bestprecio">$ ${precio}</span>
                  <div class="control-cuotas">
                      <span class="cuotas" >
                          6 cuotas de 
                          <b>$183,16</b>
                      </span>
                    <br>    
                      <span class="int">
                          sin interés
                      </span>
                      <button class="fas fa-shopping-cart" title="Agregar al carrito"></button>
                  </div>
              </div>
             </div>
        </div>
        </div> `;

        linea.innerHTML = contenido;
        const btn = linea.querySelector("button");
        btn.addEventListener("click", () =>{
         const id = btn.id;
         clientServices.eliminarCliente(id).then( respuesta => {
          
         }).catch(err => alert("Error al querer borrar"));
        })
        return linea;
     }
        
        const ul = document.querySelector("[data-ul]");

        inService.listaProductos().then((data) =>{
            data.forEach(({producto ,precio , id}) => {
                const nuevoProducto = crearnuevoProducto(producto, precio, id);
                ul.appendChild(nuevoProducto);
            });
        })
        .catch((error)=> alert("Ocurrio un error!!"))
