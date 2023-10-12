const formulario = document.querySelector("[data-form]");
let producto = document.querySelector("[data-producto]");
let precio = document.querySelector("[data-precio]");
let cuotas = document.querySelector("[data-cuotas]");
let interes = document.querySelector("[data-interes]");
let archivo = document.querySelector("[data-archivo]");
   
        let hom = document.querySelector(".hombre");
        let muj = document.querySelector(".mujer");
        let girl = document.querySelector(".niña");
        let child = document.querySelector(".niño");
        let Error = document.querySelector("[data-No]");
       
       let Homb =document.querySelectorAll("[data-homb]");
       let Wom = document.querySelectorAll("[data-wom]");
       let g = document.querySelectorAll("[data-girl]");
       let ch = document.querySelectorAll("[data-child]");
       let sub_seccion = document.querySelector("[data-sub_seccion]");
       let seccion = document.querySelector("[data-seccion]");
       formulario.addEventListener("submit", (e)=>{
       e.preventDefault();
  
  
  
       
     const laSeccion = (producto, precio, cuotas, interes,archivo) => {
        if(seccion.value == "Hombres" && sub_seccion.value == "Remeras"){
        seccion = hom; 
        sub_seccion = Homb[0];
          

       return fetch("http://localhost:3000/Hom_Remeras",{
         method: "POST",
         body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
         headers:{
            'Content-Type': 'application/json'
         }
       
       })
       .then(res =>
          res.json()
          
          
         )
       .catch(err => console.log(err))};
       
       if(seccion.value == "Hombres" && sub_seccion.value == "Pantalones"  ){
       sub_seccion = Homb[1]
       return fetch("http://localhost:3000/Hom_Pantalones",{
         method: "POST",
         body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
         headers:{
            'Content-Type': 'application/json'
         }
       
       })
       .then(res => res.json())
       .catch(err => console.log(err))
      }
        if( seccion.value == "Hombres" && sub_seccion.value == "Accesorios"){
        sub_seccion = Homb[3];    
        return fetch("http://localhost:3000/Hom_Accesorios",{
         method: "POST",
         body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
         headers:{
            'Content-Type': 'application/json'
         }
       
       })
       .then(res => res.json())
       .catch(err => console.log(err))};


           
        
       
        if(seccion.value == "Mujeres" && sub_seccion.value == "Remeras"){
        sub_seccion = Wom[0];
        return fetch("http://localhost:3000/Wom_Remeras",{
         method: "POST",
         body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
         headers:{
            'Content-Type': 'application/json'
         }
       
       })
       .then(res => res.json())
       .catch(err => console.log(err))  
      }
        if(seccion.value == "Mujeres" && sub_seccion.value == "Pantalones"){
           sub_seccion = Wom[1];
           return fetch("http://localhost:3000/Wom_Pantalones",{
            method: "POST",
            body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
            headers:{
               'Content-Type': 'application/json'
            }
          
          })
          .then(res => res.json())
          .catch(err => console.log(err))
        };
       
        if(seccion.value == "Mujeres" && sub_seccion.value == "Vestidos"){
           sub_seccion = Wom[2];
           return fetch("http://localhost:3000/Wom_Vestidos",{
            method: "POST",
            body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
            headers:{
               'Content-Type': 'application/json'
            }
          
          })
          .then(res => res.json())
          .catch(err => console.log(err))};
       
         if(seccion.value == "Mujeres" && sub_seccion.value == "Accesorios"){
            sub_seccion = Wom[3];
            return fetch("http://localhost:3000/Wom_Accesorios",{
               method: "POST",
               body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
               headers:{
                  'Content-Type': 'application/json'
               }
             
             })
             .then(res => res.json())
             .catch(err => console.log(err))
         };
                      
    
    
      
       
        if(seccion.value == "Niñas" && sub_seccion.value == "Remeras"){
           sub_seccion = g[0];
           return fetch("http://localhost:3000/Nena_Remeras",{
            method: "POST",
            body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
            headers:{
               'Content-Type': 'application/json'
            }
          
          })
          .then(res => res.json())
          .catch(err => console.log(err))
        };
       
        if(seccion.value == "Niñas" && sub_seccion.value == "Pantalones"){
           sub_seccion = g[1];
           return fetch("http://localhost:3000/Nena_Pantalones",{
            method: "POST",
            body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
            headers:{
               'Content-Type': 'application/json'
            }
          
          })
          .then(res => res.json())
          .catch(err => console.log(err))
        };
       
        if(seccion.value == "Niñas" && sub_seccion.value == "Vestidos"){
           sub_seccion = g[2];
           return fetch("http://localhost:3000/Nena_Vestidos",{
            method: "POST",
            body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
            headers:{
               'Content-Type': 'application/json'
            }
          
          })
          .then(res => res.json())
          .catch(err => console.log(err))
        };
     
    
       
            if(seccion.value == "Niños" && sub_seccion.value == "Remeras"){
               sub_seccion = ch[0];
               return fetch("http://localhost:3000/Nene_Remeras",{
            method: "POST",
            body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
            headers:{
               'Content-Type': 'application/json'
            }
          
          })
          .then(res => res.json())
          .catch(err => console.log(err))
            };
       
         if(seccion.value == "Niños" && sub_seccion.value == "Pantalones"){
            sub_seccion = ch[1];
            return fetch("http://localhost:3000/Nene_Pantalones",{
               method: "POST",
               body: JSON.stringify({producto, precio, cuotas, interes,archivo, id: uuid.v4()}),
               headers:{
                  'Content-Type': 'application/json'
               }
             
             })
             .then(res => res.json())
             .catch(err => console.log(err))
         };
        
        };

        console.log(sub_seccion.value)
        
        
        console.log(producto , "---" , precio,  archivo);
        



        laSeccion(producto.value, precio.value,cuotas.value, interes.value, archivo.value);

        if(e.target.matches(".form")){
      
         let parrafoModal = document.querySelector(".p_modal-in");
         parrafoModal.textContent = `El producto ${producto.value} se ingreso correctamente !!`; 
         let modal = document.getElementById("modal");
         modal.showModal();
         setTimeout(function(){
            modal.close();
            location.reload();
         }, 5000);
      }
        
       
        
        
    });
  

