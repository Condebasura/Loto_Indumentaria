import { inService } from "../service/in-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () =>{

    const url =  new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        alert("Ocurrio un error al querer cargar los datos del producto!!");
    }

    const producto = document.querySelector("[data-producto]");
    const precio = document.querySelector("[data-precio]");
    const cuotas = document.querySelector("[data-cuotas]");
    const interes = document.querySelector("[data-interes]");
    
    try{
        const perfil = await inService.detalleProducto(id);
        console.log(perfil);
        if(perfil.producto && perfil.precio && perfil.cuotas && perfil.interes){
                producto.value = perfil.producto;
                precio.value = perfil.precio;
                cuotas.value = perfil.cuotas;
                interes.value = perfil.interes;
               
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

             formulario.addEventListener("submit" , (evento) =>{
                // Evitar que el formulario haga la petición , nosotros la hacemos con javascript
                evento.preventDefault();
                const url = new URL(window.location);
                const id = url.searchParams.get("id");

                const producto = document.querySelector("[data-producto]").value;
                const precio = document.querySelector("[data-precio]").value;
                const cuotas = document.querySelector("[data-cuotas]").value;
                const interes = document.querySelector("[data-interes]").value;
                

                inService.actualizarProducto(producto , precio , cuotas, interes, id).then(()=>{
                    window.location.href = "/html/Ch-Pant.html";
                })

             });