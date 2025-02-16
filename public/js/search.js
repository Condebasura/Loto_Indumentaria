
const search = document.querySelector(".input");
const boxCargas = document.querySelector(".boxCargas");
const template = document.getElementById("result").content;
const Prod = document.querySelector(".product");
const contUltimas = document.querySelector(".contUltimas");
let textH1 = document.createElement("h1");
const fragment = document.createDocumentFragment();




search.addEventListener("search", async (e) => {
   e.preventDefault()
   if (e.target) {
         
      const valor = search.value;
      
      
      const response = await fetch("/search", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({valor})
      });
      const result = await response.json();
    
      search.addEventListener("focus", ()=>{
         if(search.value.trim() === ""){
            Prod.classList.add("product", "d-none");
            Prod.classList.remove("product_search","row" , "gy-sm-3" , "gx-sm-5" ,"gx-0", "gy-0" ,  "mt-5", "text-center", "justify-content-center","fixed-top", "z-3", "border","border-2" ,"text-bg-success", "bg-opacity-75", "p-5");
         }
      });

      search.addEventListener("input", ()=>{
         if(search.value.trim() === ""){
            Prod.classList.add("product", "d-none");
      Prod.classList.remove("product_search","row" , "gy-sm-3" , "gx-sm-5" ,"gx-0", "gy-0" ,  "mt-5", "text-center", "justify-content-center","fixed-top", "z-3", "border","border-2" ,"text-bg-success", "bg-opacity-75", "p-5");
         }
      });
      
      if( response.status === 400 ){
               
             
         Prod.classList.add("product", "d-none");
         Prod.classList.remove("product_search","row" , "gy-sm-3" , "gx-sm-5" ,"gx-0", "gy-0" ,  "mt-5", "text-center", "justify-content-center","fixed-top", "z-3", "border","border-2" ,"text-bg-success", "bg-opacity-75", "p-5");
              
            
            
         }
         
         else if( response.status === 404 ){  

            
            Prod.classList.remove("product", "d-none");
            Prod.classList.add("product_search","row" , "gy-sm-3" , "gx-sm-5" ,"gx-0", "gy-0" ,  "mt-5", "text-center", "justify-content-center","fixed-top", "z-3", "border","border-2" ,"text-bg-success", "bg-opacity-75", "p-5");
            
            Prod.innerHTML = "";
              textH1.innerHTML = result.mensaje;
              Prod.appendChild(textH1);
            
         }else if(response.status === 200){
            
          
            textH1.innerHTML = "Resultado de la Busqueda";
      Prod.classList.remove("product", "d-none");
      Prod.classList.add("product_search","row" , "gy-sm-3" , "gx-sm-5" ,"gx-0", "gy-0" ,  "mt-5", "text-center", "justify-content-center","fixed-top", "z-3", "border","border-2" ,"text-bg-success", "bg-opacity-75", "p-5", "overflow-y-auto");
       
      for (let el of result) {
          
          
         let bestPrecio = Number(el.precio);
         let desc = Number(el.descuento);
         let porcentaje = (bestPrecio * desc) / 100;
         let rebajadoDe = bestPrecio - porcentaje;

         let img1 = el.imagen.split(",")[0];
         let imgURl = `http://localhost:3000/uploads/${img1}`;
         let imagenResponse = await fetch(imgURl);
         let imgBlob = await imagenResponse.blob();
         let imagenObjectURL = URL.createObjectURL(imgBlob);
         const valorNormal = valor.toLowerCase();
         
         
         if (el.producto.toLowerCase().includes(valorNormal)) {
            
            template.querySelector("h3").textContent = el.producto;
            template.querySelector("h3").style.fontSize = "16px";
            template.querySelector("h3").setAttribute("class", "card-title text-truncate");
            template.querySelector("img").src = imagenObjectURL;
            template.querySelector("img").setAttribute("class", "img_search card-img-top");
            template.querySelector("a").textContent = "Ver";
            template.querySelector("a").setAttribute("class", "ver_prod card-text");
            
            template.querySelector("a").href = `/visualProducto.html?id=${el.id}&estaimg=${el.imagen}&producto=${el.producto}&precio=${rebajadoDe}&descuento=${el.descuento}&cuotas=${el.cuotas}&stock=${el.stock}`
            
            let clone = document.importNode(template, true);
            
            fragment.appendChild(clone);
         }
         
         
         
         
         
         
         
      }
      
   }
   
   Prod.innerHTML = "";
   Prod.appendChild(textH1);
   Prod.appendChild(fragment);
}
      
   

});



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

     



   


    










