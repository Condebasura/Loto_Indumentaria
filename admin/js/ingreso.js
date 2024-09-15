import { inService } from "../service/in-service.js";
// la funcion crea un cuadro de dialogo para los  errores.
const   CodeError = () =>{

    const modal = document.getElementById("modal");
    let aceptar = document.getElementById("confirm");
    let cancelar = document.getElementById("cancel");
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
    modal.removeChild(aceptar);
    modal.removeChild(cancelar);
    
    modal.appendChild(spanTriengle);
    modal.appendChild(Mensaje);
    modal.appendChild(volver);

    volver.addEventListener("click", (e)=>{
        modal.close();
        location.reload();
        
        });
};

// Funcion para la creacion de los productos
const crearnuevoProducto = (producto, precio, cuotas, newArchivo, id) => {
  
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
                 <img class="image" src= ${newArchivo} title=${producto}  >
             </a>
             <div class="datos">
              <a  class="name" href="" title="${producto}">${producto}</a>
              <hr>
              <div class=" precio">
                  <span class="bestprecio">$ ${precio}</span>
                  <div class="control-cuotas">
                      <span class="cuotas" >
                        Hasta  ${cuotas} cuotas de 
                          <b><br>$ ${enCuotas.toFixed(2)}</b>
                          sin interes
                      </span>
                      <br>  
                      <hr>
                      <div class="accesos">  
                      <button class="fas fa-shopping-cart" title="Agregar al carrito"></button>
                      <button  class="fa-solid fa-trash-can" title="Eliminar" id= "${id}"></button>
                      <a class="fa-solid fa-pen-to-square"  title="Editar" href= /ingresa_producto/editar_producto.html?id=${id}&estapagina=${EstaPagina.split('/').pop()}></a>
                      </div>
                      </div>
              </div>
             </div>
             </div>
             </div> `;


    linea.innerHTML = contenido;

// creamos un array que contenga todas las rutas.
    const urls =[
        'H-Rem',
        'H-Pant',
        'H-Acce',
        'M-Rem',
        'M-Pant',
        'M-Vest',
        'M-Acce',
        'N-Rem',
        'N-Pant',
        'N-Vest',
        'Ch-Rem',
        'Ch-Pant'
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
            parrafoModal.textContent = `Se va a eliminar el producto: ${producto} !!`;
            let modal = document.getElementById("modal");
            modal.showModal();
            if(aceptar){
                // Al aceptar se elimina el prodicto, sale del cuadro de dialogo y se recarga la pagina.
                aceptar.addEventListener("click", ()=>{

                  eliminarProducto(id).then(res => {
                   modal.close();
                
                if(res.status >= 400){
                    CodeError();
                }
  
                  })
                  .catch(err =>{
              
                      
                      modal.close();
                      });
                  })
               
      
                }cancelar.addEventListener("click", () => {
                    // si se cancela solamente se cierra el cuadro de dialogo.
                    modal.close();
                   });
       
            
            }    
})
console.log(linea)
    return linea;


};

const ul = document.querySelector("[data-ul]");
let EstaPagina = window.location.pathname;


 // Se crea un loader para esperar que cargue la pagina   
     const loader = document.createElement("div");
    loader.setAttribute("class","spinner");
    ul.appendChild(loader);
    
if (EstaPagina == "/html/H-Rem.html") {
    inService.listaProductosH_R().then((data) => {
        data.forEach(({ producto, precio, cuotas, newArchivo, id }) => {
            
            let ip = window.location.hostname;
            let puerto = window.location.port;
            console.log(ip)
            let url = new URL(newArchivo);
            let urlPort = url.port;
            let urlJson = url.hostname;
           
                // Para el uso en localhost usamos una forma de cambiar el ip y el puerto para que se muestre la imagen
               newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ;
                  
                  console.log(newArchivo)
            
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, newArchivo, id);


            ul.appendChild(nuevoProducto);
            
        });
        // Cuando el producto se carga se remueve el loader.
        ul.removeChild(loader);
    })
        .catch((err) => CodeError());
    
};

if (EstaPagina == "/html/H-Pant.html") {
    inService.listaProductosH_P().then((data) => {
       
        data.forEach(({ producto, precio, cuotas, newArchivo, id }) => {
            let ip = window.location.hostname;
            let puerto = window.location.port;
            console.log(ip)
            let url = new URL(newArchivo);
            let urlPort = url.port;
            let urlJson = url.hostname;
           
                
                newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ;
                  
                  console.log(newArchivo)
              
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas,newArchivo, id);


            ul.appendChild(nuevoProducto);
        });
        ul.removeChild(loader);
    })
        .catch((err) => CodeError());
};

if (EstaPagina == "/html/H-Acce.html") {
    inService.listaProductosH_A().then((data) => {
        
        data.forEach(({ producto, precio, cuotas, newArchivo, id }) => {
            let ip = window.location.hostname;
            let puerto = window.location.port;
            console.log(ip)
            let url = new URL(newArchivo);
            let urlPort = url.port;
            let urlJson = url.hostname;
           
               
                newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ; 
                  
                  console.log(newArchivo)
                  const nuevoProducto = crearnuevoProducto(producto, precio, cuotas,  newArchivo, id);
                  
                  
                 
                  ul.appendChild(nuevoProducto);
                });
                ul.removeChild(loader);
            })
        .catch((error) => window.location.href = "../ingresa_producto/Error.html");
};

if (EstaPagina == "/html/M-Rem.html") {
    inService.listaProductosW_R().then((data) => {
        data.forEach(({ producto, precio, cuotas,  newArchivo, id }) => {
            let ip = window.location.hostname;
            let puerto = window.location.port;
            console.log(ip)
            let url = new URL(newArchivo);
            let urlPort = url.port;
            let urlJson = url.hostname;
           
                
                newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ;
                  
                  console.log(newArchivo)  
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, newArchivo, id);


            ul.appendChild(nuevoProducto);
        });
        ul.removeChild(loader);
    })
        .catch((error) => CodeError());
};


if (EstaPagina == "/html/M-Pant.html") {
  
    inService.listaProductosW_P().then((data) => {
        data.forEach(({ producto, precio, cuotas,  newArchivo, id }) => {
            let ip = window.location.hostname;
            let puerto = window.location.port;
            console.log(ip)
            let url = new URL(newArchivo);
            let urlPort = url.port;
            let urlJson = url.hostname;
           
                
                newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ; 
                  
                  console.log(newArchivo) 
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, newArchivo, id);


            ul.appendChild(nuevoProducto);
        });
        ul.removeChild(loader);
    })
        .catch((error) => CodeError());
};

if (EstaPagina == "/html/M-Vest.html") {
    inService.listaProductosW_V().then((data) => {
        data.forEach(({ producto, precio, cuotas,  newArchivo, id }) => {
            let ip = window.location.hostname;
            let puerto = window.location.port;
            console.log(ip)
            let url = new URL(newArchivo);
            let urlPort = url.port;
            let urlJson = url.hostname;
           
                
                newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ; 
                  
                  console.log(newArchivo)
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas,  newArchivo, id);


            ul.appendChild(nuevoProducto);
        });
        ul.removeChild(loader);
    })
        .catch((error) =>CodeError());
};

if (EstaPagina == "/html/M-Acce.html") {
    inService.listaProductosW_A().then((data) => {
        data.forEach(({ producto, precio, cuotas,  newArchivo, id }) => {
            let ip = window.location.hostname;
            let puerto = window.location.port;
            console.log(ip)
            let url = new URL(newArchivo);
            let urlPort = url.port;
            let urlJson = url.hostname;

               
                newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ; 
                  
                  console.log(newArchivo)
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, newArchivo, id);


            ul.appendChild(nuevoProducto);
        });
        ul.removeChild(loader);
    })
        .catch((error) => CodeError());
};

if (EstaPagina == "/html/N-Rem.html") {
    inService.listaProductosN_R().then((data) => {
        data.forEach(({ producto, precio, cuotas, newArchivo, id }) => {
            let ip = window.location.hostname;
            let puerto = window.location.port;
            console.log(ip)
            let url = new URL(newArchivo);
            let urlPort = url.port;
            let urlJson = url.hostname;
           
                
                newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ; 
                  
                  console.log(newArchivo)  
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas,  newArchivo, id);


            ul.appendChild(nuevoProducto);
        });
        ul.removeChild(loader);
    })
        .catch((error) => CodeError());
};

if (EstaPagina == "/html/N-Pant.html") {
    inService.listaProductosN_P().then((data) => {
        data.forEach(({ producto, precio, cuotas,  newArchivo, id }) => {
            let ip = window.location.hostname;
            let puerto = window.location.port;
            console.log(ip)
            let url = new URL(newArchivo);
            let urlPort = url.port;
            let urlJson = url.hostname;
           
               
                newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ; 
                  
                  console.log(newArchivo)
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas, newArchivo, id);


            ul.appendChild(nuevoProducto);
        });
        ul.removeChild(loader);
    })
        .catch((error) => CodeError());
};

if (EstaPagina == "/html/N-Vest.html") {
    inService.listaProductosN_V().then((data) => {
        data.forEach(({ producto, precio, cuotas, newArchivo, id }) => {
            let ip = window.location.hostname;
            console.log(ip)
            let url = new URL(newArchivo);
            let puerto = window.location.port;
            let urlPort = url.port;
            let urlJson = url.hostname;
           
                
                newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ;
                  
                  console.log(newArchivo)
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas,  newArchivo, id);


            ul.appendChild(nuevoProducto);
        });
        ul.removeChild(loader);
    })
        .catch((error) => CodeError());
};

if (EstaPagina == "/html/Ch-Rem.html") {
    inService.listaProductosCH_R().then((data) => {
        data.forEach(({ producto, precio, cuotas,  newArchivo, id }) => {
            let ip = window.location.hostname;
            let puerto = window.location.port;
            console.log(ip)
            let url = new URL(newArchivo);
            let urlPort = url.port;
            let urlJson = url.hostname;
           
                
                newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ;
                  
                  console.log(newArchivo) 
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas,  newArchivo, id);


            ul.appendChild(nuevoProducto);
        });
        ul.removeChild(loader);
    })
        .catch((error) => CodeError());
};

if (EstaPagina == "/html/Ch-Pant.html") {
    inService.listaProductosCH_P().then((data) => {
        data.forEach(({ producto, precio, cuotas,  newArchivo, id }) => {
            let ip = window.location.hostname;
            console.log(ip)
            let url = new URL(newArchivo);
            let puerto = window.location.port;
            let urlPort = url.port;
            let urlJson = url.hostname;
           
               
                newArchivo =    newArchivo.replace(`http://${urlJson}:${urlPort}`, `http://${ip}:${puerto}`) ; 
                  
                  console.log(newArchivo) 
            const nuevoProducto = crearnuevoProducto(producto, precio, cuotas,  newArchivo, id);


            ul.appendChild(nuevoProducto);
        });
        ul.removeChild(loader);
    })
        .catch((error) => CodeError());
};



