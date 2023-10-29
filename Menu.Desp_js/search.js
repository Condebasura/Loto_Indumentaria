let datos = document.querySelectorAll(".name");
 const search = document.querySelector(".input");
let lista = document.querySelector("#result");
const modal = document.getElementById("modal");
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
// en camino a que funcione el buscador, falta tiempo ,!!!
search.addEventListener("keypress", async (e) => {
   if(e.key === "Enter"){   
    
   for(let url of urls){
      let prod = `http://localhost:3000/${url}`;
      fetch(prod).then(res => res.json())
      .then(data =>{
         let datos = data;
         console.log(datos)
      })
        
   
     
   }
    
      
      
         
         let salir = document.createElement("button");
         salir.textContent = "salir";
         
       salir.addEventListener("click", e =>{
         if(e.target){
            modal.close();
            lista.innerHTML = "";
            search.value = "";
         }
       });
       window.addEventListener("keyup", e =>{
         if(e.key === "Escape") {
            modal.close();
            lista.innerHTML = "";
            search.value = "";
         }
       });
   }
  



})

