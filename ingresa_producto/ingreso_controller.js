import { inService } from "../service/in-service.js";
const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const producto = document.querySelector("[data-producto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const cuotas = document.querySelector("[data-cuotas]").value;
    const interes = document.querySelector("[data-interes]").value;
    let seccion = document.querySelector("[data-seccion]").options[document.querySelector("[data-seccion]").selectedIndex];
    let sub_seccion = document.querySelector("[data-sub_seccion]").options[document.querySelector("[data-sub_seccion]").selectedIndex];
    let archivo = document.querySelector("[data-archivo]").value;
   let hom = document.querySelector(".hombre")
    let muj = document.querySelector(".mujer");
    let girl = document.querySelector(".niña");
    let child = document.querySelector(".niño");
   let subHombres = document.querySelectorAll(".homb");


    switch(sub_seccion.value){
        case "Remeras":
            sub_seccion = subHombres[0];
            
            break;

        case "Pantalones":
            sub_seccion = subHombres[1];
            break;

            case "Accesorios":
                sub_seccion = subHombres[2];
                break;
    }


   function laSeccion (){
    if(seccion.value == "Hombres")
        seccion = hom;
               
         if(seccion.value == "Mujeres")
        seccion = muj;

         if(seccion.value == "Niñas")
        seccion = girl;

         if(seccion.value == "Niños")
        seccion = child;

    }
    laSeccion();
    
console.log(seccion)
    


    console.log(producto , "---" , precio, "---" , seccion, "---", sub_seccion, "--", archivo);
    
    inService.addProducto(producto, precio, cuotas,interes,seccion,sub_seccion, archivo)
        
        .then(() =>{
            window.location.href = "../ingresa_producto/prod_end.html";
        }).catch(err => window.location.href = "../ingresa_producto/Error.html")
        
    })
    
