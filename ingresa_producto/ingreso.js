import { inService } from "../service/in-service.js";



const crearnuevoProducto = (producto, precio, cuotas, interes, archivo, id) => {
    let linea = document.createElement("li");
    linea.setAttribute("class", "box_pilcha");
    let EstaPagina = window.location.href;
    let EstaImg = window.location.href;
    let enCuotas = precio / cuotas;
    console.log(id)
    const contenido = `
    <div class="box-item" >
        <div class="productimag">
             <a class="img-prod" href=/html/visualProducto.html?id=${id}&estaimg=${EstaImg.split('/').pop()}>
                 <img class="image" src= ${archivo} title=${producto}  >
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
                      <a class="fa-solid fa-pen-to-square"  title="Editar" href= /ingresa_producto/editar_producto.html?id=${id}&estapagina=${EstaPagina.split('/').pop()}></a>
                  </div>
              </div>
             </div>
             </div>
             </div> `;


    linea.innerHTML = contenido;

// creamos un array que contenga todas las rutas.
    const urls =[
        'Hom_Remeras',
        'Hom_Pantalones',
        'Hom_Accesorios',
        'Wom_Remeras',
        'Wom_Pantalones',
        'Wom_Vestidos',
        'Wom_Accesorios',
        'Nena_Remeras',
        'Nena_Pantalones',
        'Nena_Vestidos',
        'Nene_Remeras',
        'Nene_Pantalones'
];
  // funcion para eliminar el producto por medio de su id.
    const eliminarProducto =  async (id) => {
        for(let url of urls){
       // hacemos una peticion get para comprobar si el id existe
            const response = await fetch(`http://localhost:3000/${url}/${id}`)

            if(response.ok){
               // si el id existe (la respuesta es ok "status = 200"), se pasa la peticion delete para eliminar el producto
           try{

               await fetch(`http://localhost:3000/${url}/${id}`, {
                   method: "DELETE",
                   headers:{
                       'Content-Type': 'application/json'
                    }
                })
            }catch(error){
                console.log(`No se pudo eliminar el producto de la url ${url}`)
            } 
    }
}
    }
    const btn = linea.querySelector(".fa-trash-can");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.id;
        // Al hacer click en el boton de eliminacion se crea un cuadro de dialogo que determina si en realidad queremos eliminarlo
        if(e.target.matches(".fa-trash-can")){
            let aceptar = document.getElementById("confirm");
            let cancelar = document.getElementById("cancel");
            let parrafoModal = document.querySelector(".p_modal");
            parrafoModal.textContent = `Se va a eliminar el producto ${producto}`;
            let modal = document.getElementById("modal");
            modal.showModal();
            if(aceptar){
                // Al aceptar se elimina el prodicto, sale del cuadro de dialogo y se recarga la pagina.
                aceptar.addEventListener("click", ()=>{

                  eliminarProducto(id).then(res => {
                   modal.close();
                console.log( res.json());
  
                  })
                  .catch(err =>{
              
  
                      modal.close();
                      window.location.href = "../ingresa_producto/Error.html"});
                  })
               
      
                }cancelar.addEventListener("click", () => {
                    // si se cancela solamente se cierra el cuadro de dialogo.
                    modal.close();
                   });
       
            
            }    
})

    return linea;


}

const ul = document.querySelector("[data-ul]");
let EstaPagina = window.location.pathname;

if (EstaPagina == "/html/H-Rem.html") {
    inService.listaProductosH_R().then((data) => {
        
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
            
        });
    })
        .catch((err) => 
       
            window.location = inService.CodeError());
        ; 
};

if (EstaPagina == "/html/H-Pant.html") {
    inService.listaProductosH_P().then((data) => {
       
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            console.log(archivo)
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
        });
    })
        .catch((err) => window.location.href = "../ingresa_producto/Error.html");
};

if (EstaPagina == "/html/H-Acce.html") {
    inService.listaProductosH_A().then((data) => {
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
        });
    })
        .catch((error) => window.location.href = "../ingresa_producto/Error.html");
};

if (EstaPagina == "/html/M-Rem.html") {
    inService.listaProductosW_R().then((data) => {
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
        });
    })
        .catch((error) => window.location.href = "../ingresa_producto/Error.html");
};


if (EstaPagina == "/html/M-Pant.html") {
    inService.listaProductosW_P().then((data) => {
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
        });
    })
        .catch((error) => window.location.href = "../ingresa_producto/Error.html");
};

if (EstaPagina == "/html/M-Vest.html") {
    inService.listaProductosW_V().then((data) => {
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
        });
    })
        .catch((error) => window.location.href = "../ingresa_producto/Error.html");
};

if (EstaPagina == "/html/M-Acce.html") {
    inService.listaProductosW_A().then((data) => {
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
        });
    })
        .catch((error) => window.location.href = "../ingresa_producto/Error.html");
};

if (EstaPagina == "/html/N-Rem.html") {
    inService.listaProductosN_R().then((data) => {
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
        });
    })
        .catch((error) => window.location.href = "../ingresa_producto/Error.html");
};

if (EstaPagina == "/html/N-Pant.html") {
    inService.listaProductosN_P().then((data) => {
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
        });
    })
        .catch((error) => window.location.href = "../ingresa_producto/Error.html");
};

if (EstaPagina == "/html/N-Vest.html") {
    inService.listaProductosN_V().then((data) => {
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
        });
    })
        .catch((error) => window.location.href = "../ingresa_producto/Error.html");
};

if (EstaPagina == "/html/Ch-Rem.html") {
    inService.listaProductosCH_R().then((data) => {
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
        });
    })
        .catch((error) => window.location.href = "../ingresa_producto/Error.html");
};

if (EstaPagina == "/html/Ch-Pant.html") {
    inService.listaProductosCH_P().then((data) => {
        data.forEach(({ producto, precio, cuotas, interes, archivo, id }) => {
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, interes, archivo, id);


            ul.appendChild(nuevoProducto);
        });
    })
        .catch((error) => window.location.href = "../ingresa_producto/Error.html");
};



