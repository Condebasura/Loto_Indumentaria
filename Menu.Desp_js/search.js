
 const search = document.querySelector(".input");
 const cajaProd = document.querySelector(".caja-prod");
const lista = document.getElementById("result").content;
const modal = document.getElementById("modal");
const fragment = document.createDocumentFragment(); 
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
            datos.forEach(el => {
            if(el.producto.toLowerCase().includes(search.value.toLowerCase())){
               lista.querySelector("h3").textContent = el.producto;
               lista.querySelector("img").src = el.archivo;
             

           
            let clone = document.importNode(lista,true);
           fragment.appendChild(clone);
          
           modal.appendChild(fragment);
        ;
           
           
         
           console.log(fragment)
         }
      });
   })
   modal.showModal();
   
}

   

   
   
      
      
         
         let salir = document.createElement("button");
         salir.textContent = "salir";
         
       salir.addEventListener("click", e =>{
         if(e.target){
            modal.close();
            modal.innerHTML = "";
            search.value = "";
         }
       });
       window.addEventListener("keyup", e =>{
         if(e.key === "Escape") {
            modal.close();
            modal.innerHTML = "";
            search.value = "";
         }
       });
   }
  



})

