const nenes = document.querySelector(".Nenes");


nenes.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target){
        boxNames.innerHTML = "";
        MinEdit.innerHTML = "";
        boxContent.innerHTML = "";
        formAdd.style.display = "none";
        btnAdd.style.display = "none";
        btnsForm.style.display = "none";
        const remeras = document.createElement("a");
        const pantalones = document.createElement("a");
        
        remeras.innerHTML = "Remeras";
        pantalones.innerHTML = "Pantalones";
        
        boxNames.appendChild(remeras);
        boxNames.appendChild(pantalones);
        boxCargas.appendChild(boxNames);
       
        Add.addEventListener("click", (e)=>{
            e.preventDefault();
            if(e.target){
             formAdd.style.display = "block";
                btnAdd.style.display = "block";
                btnsForm.style.display = "block";
                // el boxCarga en "" me queta el formulario para ingresar productos , intentarlo con css mejor.
                boxNames.innerHTML = "";
        MinEdit.innerHTML = "";
        boxContent.innerHTML = "";
            }
        });


        remeras.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
          
            const res = await fetch("/Nene/Remeras").then(res =>  res.json()).then(async data=>{
                
                DataProductos(data);
                
                }).catch(err => console.log("error", err))
                        
        }
        
        
        });
        
        
        pantalones.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
          
            const res = await fetch("/Nene/Pantalones").then(res =>  res.json()).then(async data=>{
                
                DataProductos(data);
               
                }).catch(err => console.log("error", err))
                        
        }
        
        });
        
        
    }
    })