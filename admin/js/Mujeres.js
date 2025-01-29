const mujer = document.querySelector(".Mujeres");


mujer.addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.target){
        formAdd.style.display = "none";
        boxNames.innerHTML = "";
        boxContent.innerHTML = "";
        if(!MinEdit.classList.contains("d-none")){

            MinEdit.classList.remove("Min_Edit","card"
  ,"mb-5" , "pe-2");
                  
                  MinEdit.classList.add("d-none");
                }
        const remeras = document.createElement("a");
        const pantalones = document.createElement("a");
        const vestidos = document.createElement("a");
        const accesorios = document.createElement("a");
        remeras.innerHTML = "Remeras";
        pantalones.innerHTML = "Pantalones";
        vestidos.innerHTML = "Vestidos";
         accesorios.innerHTML = "Accesorios";
        
         remeras.setAttribute("class", "list-group-item mb-2 mt-5 btn btn-outline-secondary");
         pantalones.setAttribute("class", "list-group-item mb-2 btn btn-outline-secondary");
         vestidos.setAttribute("class", "list-group-item mb-2 btn btn-outline-secondary");
         accesorios.setAttribute("class", "list-group-item mb-2 btn btn-outline-secondary");

        boxNames.appendChild(remeras);
        boxNames.appendChild(pantalones);
        boxNames.appendChild(vestidos);
        boxNames.appendChild(accesorios);
        ulNombres.appendChild(boxNames);
        Add.addEventListener("click", (e)=>{
            e.preventDefault();
            if(e.target){
             formAdd.style.display = "flex";
               
               
                boxNames.innerHTML = "";
        MinEdit.innerHTML = "";
        boxContent.innerHTML = "";
            }
        })
     


remeras.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Mujeres/Remeras").then(res =>  res.json()).then(async data=>{
        
        DataProductos(data);
         
        }).catch(err => console.log("error", err))
                
}

});

pantalones.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Mujeres/Pantalones").then(res =>  res.json()).then(async data=>{
        
         DataProductos(data);
        }).catch(err => console.log("error", err))
                
}

});

vestidos.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Mujeres/Vestidos").then(res =>  res.json()).then(async data=>{
           
        DataProductos(data);
        }).catch(err => console.log("error", err))
                
}

});

accesorios.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Mujeres/Accesorios").then(res =>  res.json()).then(async data=>{
        
        DataProductos(data);
        }).catch(err => console.log("error", err))
                
}

});
    }
    })
