import { inService } from "/service/in-service.js"; 

// Nesesito encontrar la forma de colocar lo de in-service aca y obtener los datos del producto por su id!!!
const formulario = document.querySelector(".EndEdit");

const obtenerInformacion = async () =>{
   
   const url =  new URL(window.location);
   const id = url.searchParams.get("id");
   let  EstaPagina = url.searchParams.get("estapagina");
   if(EstaPagina == "/html/H-Rem.html"){

  return  console.log("Es la pagina")
}
    if(id == null){
      window.location.href = "../ingresa_producto/Error.html";
    }

    const producto = document.querySelector("[data-producto]");
    const precio = document.querySelector("[data-precio]");
    const cuotas = document.querySelector("[data-cuotas]");
    const interes = document.querySelector("[data-interes]");
    let archivo = document.querySelector("[data-archivo]");
    try{
        const perfil = await inService.detalleProducto(id);
        console.log(perfil);
        if(perfil.producto && perfil.precio && perfil.cuotas && perfil.interes && perfil.archivo){
                producto.value = perfil.producto;
                precio.value = perfil.precio;
                cuotas.value = perfil.cuotas;
                interes.value = perfil.interes;
                archivo = perfil.archivo;
               
             }
             else{
                throw new Error();
             }
            }
             catch(error){
                console.error("Catch Error -" , error);
                window.location.href = "../ingresa_producto/Error.html";
             }};

             obtenerInformacion();

             formulario.addEventListener("submit" , (e) =>{
                // Evitar que el formulario haga la petición , nosotros la hacemos con javascript
                e.preventDefault();
                const url = new URL(window.location);
                const id = url.searchParams.get("id");
                let  EstaPagina = url.searchParams.get("estapagina");
               

                const producto = document.querySelector("[data-producto]").value;
                const precio = document.querySelector("[data-precio]").value;
                const cuotas = document.querySelector("[data-cuotas]").value;
                const interes = document.querySelector("[data-interes]").value;
                const archivo = document.querySelector("[data-archivo]");
                  
                inService.actualizarProducto(producto , precio , cuotas, interes, archivo, id).then(()=>{
                    window.location.href = EstaPagina;
                }).catch(err => console.log(err))
               
             });