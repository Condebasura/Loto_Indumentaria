import { inService } from "../service/in-service.js";
const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const producto = document.querySelector("[data-producto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const cuotas = document.querySelector("[data-cuotas]").value;
    const interes = document.querySelector("[data-interes]").value;
    const seccion = document.querySelector("[data-seccion]").options[document.querySelector("[data-seccion]").selectedIndex];
    const sub_seccion = document.querySelector("[data-sub_seccion]").value;
    const archivo = document.querySelector("[data-archivo]").value;
   const nodeList = document.querySelector("[data-li]");

   console.log(nodeList.firstChild.textContent);
   

console.log(seccion.textContent)
    if(seccion.selectedIndex == nodeList.firstChild.textContent){
         console.log("es igual")
    }

    

    console.log(producto , "---" , precio, "---" , seccion, "---", sub_seccion, "--", archivo);
    
    inService.addProducto(producto, precio, cuotas,interes,archivo)
        
        .then(() =>{
            window.location.href = "../ingresa_producto/prod_end.html";
        }).catch(err => window.location.href = "../ingresa_producto/Error.html")
        
    })
    
