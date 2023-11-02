
 const search = document.querySelector(".input");
 
const template = document.getElementById("result").content;
const Prod = document.querySelector(".product");

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
 
        if(search.value == "" && e.key == "Enter"){
         Prod.classList.remove("product_search");
         

        }
    if(e.key === "Enter" && search.value != ""){  
      Prod.classList.add("product_search");
      
     
      for(let url of urls){
         
         let prod = `http://localhost:3000/${url}`;
       await fetch(prod).then(res => res.json())
         .then(data =>{
            
            let datos = data;
            datos.forEach(el => {
            if(el.producto.toLowerCase().includes(search.value.toLowerCase())){
              
               
               Prod.innerHTML = "";
               template.querySelector("h3").textContent = el.producto;
               template.querySelector("h3").style.fontSize = "16px";
               template.querySelector("img").src = el.archivo;
               template.querySelector("img").setAttribute("class", "img_search");
               template.querySelector("a").textContent = "Ver";
               template.querySelector("a").setAttribute("class", "ver_prod");
               // encontrar la manera de que se c
              template.querySelector("a").href = `/html/visualProducto.html?id=${id}&estaimg=${EstaImg.split('/').pop()}`;
               
              
               let clone = document.importNode(template,true);
               fragment.appendChild(clone);
               
            }
           
      });
     
      Prod.appendChild(fragment);
      
})

}
  }

 

     let salir = document.createElement("button");
salir.textContent = "salir";

salir.addEventListener("click", e =>{
   if(e.target || search.value == ""){
      
      Prod.innerHTML = "";
      Prod.classList.remove("product_search");
      
      
}
});
window.addEventListener("keyup", e =>{
if(e.key === "Escape" || search.value == "") {
   
   Prod.innerHTML = "";
   Prod.classList.remove("product_search");
   
   
   
}
})

     



   
})

    



   

   
   
      
      
         

