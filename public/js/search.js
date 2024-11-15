
const search = document.querySelector(".input");

const template = document.getElementById("result").content;
const Prod = document.querySelector(".product");
const fragment = document.createDocumentFragment();



// en camino a que funcione el buscador, falta tiempo ,!!!
search.addEventListener("search", async (e) => {
   e.preventDefault()
   if (e.target) {
         
      const valor = search.value;
      console.log(valor)
      
      const response = await fetch("/search", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ valor })
      });
      const result = await response.json();

      if( valor === ""){
         Prod.classList.remove("product_search");
         Prod.classList.remove("product");
         

        }
   else if( valor !== "" ){  
     
      Prod.classList.remove("product");
      Prod.classList.add("product_search");
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
            template.querySelector("img").src = imagenObjectURL;
            template.querySelector("img").setAttribute("class", "img_search");
            template.querySelector("a").textContent = "Ver";
            template.querySelector("a").setAttribute("class", "ver_prod");
            // encontrar la manera de que se carguen los datos al ingresar al producto en la busqueda
            template.querySelector("a").href = `/visualProducto.html?id=${el.id}&estaimg=${el.imagen}&producto=${el.producto}&precio=${rebajadoDe}&descuento=${el.descuento}&cuotas=${el.cuotas}&stock=${el.stock}`
            
            let clone = document.importNode(template, true);
            
            fragment.appendChild(clone);
         }

            
            
            
            


         }
         
      }
      Prod.innerHTML = "";
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

     



   


    










