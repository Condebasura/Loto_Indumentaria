
 const search = document.querySelector(".input");
 
const template = document.getElementById("result").content;
const Prod = document.querySelector(".product");

const fragment = document.createDocumentFragment(); 



const urls =[
   'H-Rem',
   'H-Pant',
   'H-Acce',
   'M-Rem',
   'M-Pant',
   'M-Vest',
   'M-Acce',
   'N-Rem',
   'N-Pant',
   'N-Vest',
   'Ch-Rem',
   'Ch-Pant'
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
               // encontrar la manera de que se carguen los datos al ingresar al producto en la busqueda
              template.querySelector("a").href = `/html/visualProducto.html?id=${el.id}&estaimg=${el.href}`
               
              
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

    



   

   
   
      
      
         

