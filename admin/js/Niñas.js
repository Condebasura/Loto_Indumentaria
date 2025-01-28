const nenas = document.querySelector(".Nenas");


nenas.addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.target){
        formAdd.style.display = "none";
        boxContent.innerHTML = "";
        boxNames.innerHTML = "";
        if(!MinEdit.classList.contains("d-none")){

            MinEdit.classList.remove("Min_Edit","card"
  ,"mb-5");
                  
                  MinEdit.classList.add("d-none");
                }
        const remeras = document.createElement("a");
        const pantalones = document.createElement("a");
        const vestidos = document.createElement("a");
        remeras.innerHTML = "Remeras";
        pantalones.innerHTML = "Pantalones";
         vestidos.innerHTML = "Vestidos";
         
         remeras.setAttribute("class", "list-group-item mb-2 mt-5 btn btn-outline-secondary");
         pantalones.setAttribute("class", "list-group-item mb-2 btn btn-outline-secondary");
         vestidos.setAttribute("class", "list-group-item mb-2 btn btn-outline-secondary");

        boxNames.appendChild(remeras);
        boxNames.appendChild(pantalones);
        boxNames.appendChild(vestidos);
        ulNombres.appendChild(boxNames);

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