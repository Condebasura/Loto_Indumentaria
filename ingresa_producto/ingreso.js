const crearnuevoProducto = (producto, precio, cuotas, interes, archivo, id ) =>{
    let  linea = document.createElement("li");
    linea.setAttribute("class", "box_pilcha");
      let EstaPagina = window.location.pathname;
        let enCuotas = precio / cuotas;
        console.log(id)
        const contenido = `
    <div class="box-item" >
        <div class="productimag">
             <a class="img-prod" href="">
                 <img class="image" src= ${archivo} title=${archivo.location}  >
             </a>
             <div class="datos">
              <a  class="name" href="" title="${producto}">${producto}</a>
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
                      <a class="fa-solid fa-pen-to-square"  title="Editar" href= /ingresa_producto/editar_producto.html?id=${id}& estapagina=${EstaPagina}></a>
                  </div>
              </div>
             </div>
             </div>
             </div> `;
             
            
             linea.innerHTML = contenido;
             
            
             const eliminarProducto = (id) =>{
                 return fetch(`http://localhost:3000/Hom_Remeras/${id}`,{
                     method: "DELETE"
                    })
                }
                const btn = linea.querySelector(".fa-trash-can");
        btn.addEventListener("click", () =>{
         const id = btn.id;
         eliminarProducto(id).then( respuesta => {
          
         }).catch(err =>  window.location.href = "../ingresa_producto/Error.html");
        })
       
        return linea;
        
     
                }   
                
                const ul = document.querySelector("[data-ul]");

                const listaProductos = () => fetch(`http://localhost:3000/Hom_Remeras`)
                .then(respuesta => respuesta.json())
        listaProductos().then((data) =>{
            data.forEach(({producto ,precio ,cuotas, interes , archivo ,  id }) => {
                const nuevoProducto = crearnuevoProducto( producto, precio,cuotas, interes,archivo , id );
                
               
                ul.appendChild(nuevoProducto);
            });
        })
        .catch((error)=> window.location.href = "../ingresa_producto/Error.html");

 


    
        

    