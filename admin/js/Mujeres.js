const mujer = document.querySelector(".Mujeres");


mujer.addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.target){
        formAdd.style.display = "none";
        boxNames.innerHTML = "";
        MinEdit.innerHTML = "";
        boxContent.innerHTML = "";
        const remeras = document.createElement("a");
        const pantalones = document.createElement("a");
        const vestidos = document.createElement("a");
        const accesorios = document.createElement("a");
        remeras.innerHTML = "Remeras";
        pantalones.innerHTML = "Pantalones";
        vestidos.innerHTML = "Vestidos";
         accesorios.innerHTML = "Accesorios";
        boxNames.appendChild(remeras);
        boxNames.appendChild(pantalones);
        boxNames.appendChild(vestidos);
        boxNames.appendChild(accesorios);
        boxCargas.appendChild(boxNames);
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
