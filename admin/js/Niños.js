const nenes = document.querySelector(".Nenes");

// Muestra las subsecciones en la seccion "Niños";
nenes.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target){
        boxNames.innerHTML = "";
        boxContent.innerHTML = "";
        
        if(!MinEdit.classList.contains("d-none")){

            MinEdit.classList.remove("Min_Edit","card"
  ,"mb-5" ,"pe-2");
                  
                  MinEdit.classList.add("d-none");
                }
        const remeras = document.createElement("a");
        const pantalones = document.createElement("a");
        
        remeras.innerHTML = "Remeras";
        pantalones.innerHTML = "Pantalones";

        remeras.setAttribute("class", "list-group-item mb-2 mt-5 btn btn-outline-secondary");
        pantalones.setAttribute("class", "list-group-item mb-2 btn btn-outline-secondary");
        
        boxNames.appendChild(remeras);
        boxNames.appendChild(pantalones);
        ulNombres.appendChild(boxNames);
       
        Add.addEventListener("click", (e)=>{
            e.preventDefault();
            if(e.target){
             formAdd.style.display = "flex";
               
                // el boxCarga en "" me queta el formulario para ingresar productos , intentarlo con css mejor.
                boxNames.innerHTML = "";
        MinEdit.innerHTML = "";
        boxContent.innerHTML = "";
            }
        });


        remeras.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
            formAdd.style.display = "none";
            const res = await fetch("/Nene/Remeras").then(res =>  res.json()).then(async data=>{
                
                DataProductos(data);
                
                }).catch(err => console.log("error", err))
                        
        }
        
        
        });
        
        
        pantalones.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
            formAdd.style.display = "none";
            const res = await fetch("/Nene/Pantalones").then(res =>  res.json()).then(async data=>{
                
                DataProductos(data);
               
                }).catch(err => console.log("error", err))
                        
        }
        
        });
        
        
    }
    })