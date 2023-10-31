
 const search = document.querySelector(".input");
 
const template = document.getElementById("result").content;
const Prod = document.getElementById("product");

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
              template.querySelector("h3").textContent = el.producto;
              template.querySelector("h3").style.fontSize = "16px";
              template.querySelector("img").src = el.archivo;
               template.querySelector("img").setAttribute("class", "img_search");
           
            let clone = document.importNode(template,true);
           fragment.appendChild(clone);
   
            }
      });
     
      Prod.appendChild(fragment);
      
})

}


    



   

   
   
      
      
         
         let salir = document.createElement("button");
         salir.textContent = "salir";
         
       salir.addEventListener("click", e =>{
         if(e.target){
           
            Prod.innerHTML = "";
            search.value = "";
         }
       });
       window.addEventListener("keyup", e =>{
         if(e.key === "Escape") {
            
            Prod.innerHTML = "";
            search.value = "";
         }
       });
   }
  



})

