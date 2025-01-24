const nenas = document.querySelector(".Nenas");


nenas.addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.target){
        formAdd.style.display = "none";
        boxContent.innerHTML = "";
        MinEdit.innerHTML = "";
        boxNames.innerHTML = "";
        const remeras = document.createElement("a");
        const pantalones = document.createElement("a");
        const vestidos = document.createElement("a");
        remeras.innerHTML = "Remeras";
        pantalones.innerHTML = "Pantalones";
         vestidos.innerHTML = "Vestidos";
        boxNames.appendChild(remeras);
        boxNames.appendChild(pantalones);
        boxNames.appendChild(vestidos);
        boxCargas.appendChild(boxNames);

        Add.addEventListener("click", (e)=>{
            e.preventDefault();
            if(e.target){
             formAdd.style.display = "flex";
                ;
                // el boxCarga en "" me queta el formulario para ingresar productos , intentarlo con css mejor.
        MinEdit.innerHTML = "";
        boxNames.innerHTML = "";
                boxContent.innerHTML = "";
            }
        });

        remeras.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
          
            const res = await fetch("/Nena/Remeras").then(res =>  res.json()).then(async data=>{
                
                  DataProductos(data)
                }).catch(err => console.log("error", err))
                        
        }
        
        });
        
        
        pantalones.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
          
            const res = await fetch("/Nena/Pantalones").then(res =>  res.json()).then(async data=>{
                
                  DataProductos(data)
                   
                }).catch(err => console.log("error", err))
                        
        }
        
        });
        
        vestidos.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
          
            const res = await fetch("/Nena/Vestidos").then(res =>  res.json()).then(async data=>{
                
                DataProductos(data)
              
                }).catch(err => console.log("error", err))
                        
        }
        
        });

    }
    })