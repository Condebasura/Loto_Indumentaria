import { inService } from "../service/in-service.js";
const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const producto = document.querySelector("[data-producto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const cuotas = document.querySelector("[data-cuotas]").value;
    const interes = document.querySelector("[data-interes]").value;
    const seccion = document.querySelector("[data-seccion]").value;
    const sub_seccion = document.querySelector("[data-sub_seccion]").value;
    const archivo = document.querySelector("[data-archivo]").value;
  

    

    console.log(producto , "---" , precio, "---" , seccion, "---", sub_seccion, "--", archivo);
    
    inService.addProducto(producto, precio, cuotas,interes,
        seccion , sub_seccion ,archivo)
        
        .then(() =>{
            alert("producto agregado");
        }).catch(err => console.log(err))
        
    })
    
