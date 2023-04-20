import { inService } from "../service/in-service.js";

const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const producto = document.querySelector("[data-producto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const cuotas = document.querySelector("[data-cuotas]").value;
    const interes = document.querySelector("[data-interes]").value;
    let archivo = document.querySelector("[data-archivo]").value;
   
     function laSeccion () {
        let seccion = document.querySelector("[data-seccion]");
        let hom = document.querySelector(".hombre");
        let muj = document.querySelector(".mujer");
        let girl = document.querySelector(".niña");
        let child = document.querySelector(".niño");
        let Error = document.querySelector("[data-No]");
        let sub_seccion = document.querySelector("[data-sub_seccion]");
       let Homb =document.querySelectorAll("[data-homb]");
       let Wom = document.querySelectorAll("[data-wom]");
       let g = document.querySelectorAll("[data-girl]");
       let ch = document.querySelectorAll("[data-child]");
    
    
        if(seccion.value == "Hombres"){
        seccion = hom;
        if(sub_seccion.value == "Remeras")
        sub_seccion = Homb[0];
        if(sub_seccion.value == "Pantalones")
        sub_seccion = Homb[1];
        if(sub_seccion.value == "Accesorios")
        sub_seccion = Homb[2];    
                              };
    
        if(seccion.value == "Mujeres"){
        seccion = muj;
        if(sub_seccion.value == "Remeras")
        sub_seccion = Wom[0];
        if(sub_seccion.value == "Pantalones")
        sub_seccion = Wom[1];
         if(sub_seccion.value == "Vestidos")
         sub_seccion = Wom[2];
         if(sub_seccion.value == "Accesorios")
         sub_seccion = Wom[3];
                      };
    
    
        if(seccion.value == "Niñas"){
        seccion = girl;
        if(sub_seccion.value == "Remeras")
        sub_seccion = g[0];
        if(sub_seccion.value == "Pantalones")
        sub_seccion = g[1];
        if(sub_seccion.value == "Vestidos")
        sub_seccion = g[2];
     };
    
        if(seccion.value == "Niños"){
            seccion = child;
         if(sub_seccion.value == "Remereas")
         sub_seccion = ch[0];
         if(sub_seccion.value == "Pantalones")
         sub_seccion = ch[1];
        };
        
    
    
    }

       laSeccion();
            console.log(laSeccion());
            
     
            console.log(producto , "---" , precio,  "---",  "--", archivo);
            
            
    inService.addProducto(producto, precio, cuotas,interes, archivo,seccion,sub_seccion )
        
        .then(() =>{
            window.location.href = "../ingresa_producto/prod_end.html";
        }).catch(err => window.location.href = "../ingresa_producto/Error.html")
        
        
    });
  

