 let buscarPrenda =  document.querySelector("#buscPr");

 buscarPrenda.addEventListener("input",  function () {
  
    let productos = document.querySelectorAll(".box-item");

    
    
   for(let i = 0; i < productos.length; i++){
      let producto = productos[i];
      let prNombre = producto.querySelector(".name");
      let nombre = prNombre.textContent;
      let exprecion = /(\w+.)/gi;
      
if(exprecion.test(nombre)){
const padre = document.querySelector(".invisible");
   let list = document.createElement("p");

   list.textContent = nombre;
padre.style.display = "block";
padre.style.backgroundColor = "white";
padre.appendChild(list);

}
}
}

)

