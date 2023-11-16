
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
search.addEventListener("keypress", async (e, el) => {
 
        if(search.value == "" && e.key == "Enter"){
         Prod.classList.remove("product_search");
         

        }
    if(e.key === "Enter" && search.value != ""){  
     
      Prod.classList.add("product_search");
      Prod.classList.remove("product");
      
     
      for(let url of urls){
         
         let prod = `http://localhost:3000/${url}`;
       await fetch(prod).then(res => res.json())
         .then(data =>{
            
            let datos = data;
        
            let found = false;
            const noResult = document.createElement("div");
            noResult.innerHTML = `<h3> No se encontro resultado para: ${search.value}<h3>`;

            datos.forEach(el => {
               let ip = window.location.hostname;
               console.log(ip)
               let uRl = new URL(el.newArchivo);
               let port = window.location.port;
               let carpeta =  uRl.pathname.split("/")[1]
               let seccion = uRl.pathname.split("/")[2];
               let sub_seccion = uRl.pathname.split("/")[3];
               let img = uRl.pathname.split("/")[4];
               let uRlJson = uRl.hostname;
              
                   // Esta es otra posible forma del cambio de ip, el problema esta en que en la notbook funciona, en la pc no!!
                  el.newArchivo =    el.newArchivo.replace(`http://${uRlJson}:${port}/${carpeta}/${seccion}/${sub_seccion}/${img}`, `http://${ip}:${port}/${carpeta}/${seccion}/${sub_seccion}/${img}`)
            if(el.producto.toLowerCase().includes(search.value.toLowerCase())){
              found = true;
               template.querySelector("h3").textContent = el.producto;
               template.querySelector("h3").style.fontSize = "16px";
               template.querySelector("img").src = el.newArchivo;
               template.querySelector("img").setAttribute("class", "img_search");
               template.querySelector("a").textContent = "Ver";
               template.querySelector("a").setAttribute("class", "ver_prod");
               // encontrar la manera de que se carguen los datos al ingresar al producto en la busqueda
              template.querySelector("a").href = `/html/visualProducto.html?id=${el.id}&estaimg=${url}.html`;
               
              
               let clone = document.importNode(template,true);
               
               fragment.appendChild(clone);
               
            } 
      });
     
    

    /*  if(!found){
         Prod.innerHTML = "";
         Prod.appendChild(noResult);
         
      }else{
         Prod.removeChild(noResult);
         
      }*/
      
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

    



   

   
   
      
      
         

