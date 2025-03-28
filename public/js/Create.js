const Create =  document.querySelector(".Create");
let modalcontainer = document.getElementById("modalContainer"); 

// Muestra el cuadro de dialogo para crear usuario
Create.addEventListener("click", (e)=>{
    e.preventDefault()
    if(e.target){
         modalcontainer.innerHTML = "";
          
         const modTbi = document.createElement("div");
         const modDialog = document.createElement("div");
         const modContent = document.createElement("div");
         const modHeader = document.createElement("div");
         const modBody = document.createElement("div"); 

         const form = document.createElement("form");
         const title = document.createElement("h5");
         const divNombre = document.createElement("div");
         const LabelNombre = document.createElement("label");
         const InputNombre = document.createElement("input");
         const divApellido = document.createElement("div");
         const LabelApellido = document.createElement("label");
         const InputApellido = document.createElement("input");
         const divCorreo = document.createElement("div");
         const LabelCorreo = document.createElement("label");
         const InputCorreo = document.createElement("input");
         const divPassword = document.createElement("div");
         const LabelPassword = document.createElement("label");
         const InputPassword = document.createElement("input");
        const BtnReg = document.createElement("button");
        let textPass = document.createElement("p");
        const parrafo = document.createElement("p");
        
        
        Create.setAttribute("type", "button");
        Create.setAttribute("data-bs-target", "#exampleModal");  
        Create.setAttribute("data-bs-toggle", "modal");  
        modTbi.setAttribute("class", "modal fade backCrea d-flex ");
        modTbi.setAttribute("tabindex", "-1");
        modTbi.setAttribute("id", "exampleModal");
        modTbi.setAttribute("aria-labelledby", "exampleModalLabel");
        modTbi.setAttribute("aria-hidden", "true");
        modTbi.setAttribute("inert", "");
        
        modDialog.setAttribute("class", "modal-dialog");
        modContent.setAttribute("class", "modal-content ms-4 ms-lg-0");
        modHeader.setAttribute("class", "modal-header text-bg-primary text-center justify-content-center");
        title.setAttribute("class", "modal-title");
        title.setAttribute("id", "exampleModalLabel");
        modBody.setAttribute("class", "modal-body");
        
        
        
        form.setAttribute("class", "form-Login p-3 justify-content-center text-center");
        
        divNombre.setAttribute("class", "form-floating mb-3");
        InputNombre.setAttribute("class", "form-control");
        InputNombre.setAttribute("required", "");
        InputNombre.setAttribute("id", "floatingInput");
        InputNombre.setAttribute("placeholder", "Nombre");
        LabelNombre.setAttribute("for", "floatingInput");

        divApellido.setAttribute("class", "form-floating mb-3");
        InputApellido.setAttribute("class", "form-control");
        InputApellido.setAttribute("required", "");
        InputApellido.setAttribute("id", "floatingInput");
        InputApellido.setAttribute("placeholder", "Apellido");
        LabelApellido.setAttribute("for", "floatingInput");
        
        
        divCorreo.setAttribute("class", "form-floating mb-3");
        InputCorreo.setAttribute("class", "form-control");
        InputCorreo.setAttribute("id", "floatingInput");
        InputCorreo.setAttribute("placeholder","Email");
        InputCorreo.setAttribute("required", "");
        LabelCorreo.setAttribute("for","floatingInput");
        
        divPassword.setAttribute("class", "form-floating mb-3");
        InputPassword.setAttribute("class","form-control elPass");
        InputPassword.setAttribute("id","floatingPassword");
        InputPassword.setAttribute("placeholder","Password");
        InputPassword.setAttribute("required", "");
        LabelPassword.setAttribute("for","floatingPassword");
        
        
        
        InputCorreo.setAttribute("type", "email");
        InputPassword.setAttribute("type", "password");
        BtnReg.setAttribute("type", "submit");
        BtnReg.setAttribute("class", "btn btn-success");
        parrafo.setAttribute("class", "link-danger");
         textPass.setAttribute("class", "link-danger mt-2");

         title.innerHTML = "Crear Cuenta";
         LabelNombre.innerHTML = "Nombre";
         LabelApellido.innerHTML = "Apellido";
         LabelCorreo.innerHTML = "Email";
         LabelPassword.innerHTML = "Password";
         BtnReg.innerHTML = "Crear";
         InputCorreo.addEventListener("keyup", ()=>{
          if(InputCorreo.value === ""){
            parrafo.innerHTML = "";
          }
         })
           InputPassword.addEventListener("keyup", ()=>{
            if(InputPassword.value === ""){
              textPass.innerHTML = "";
            }
           })

         modHeader.appendChild(title);
         divNombre.appendChild(InputNombre);
         divNombre.appendChild(LabelNombre);
         divApellido.appendChild(InputApellido);
         divApellido.appendChild(LabelApellido);
         divCorreo.appendChild(InputCorreo);
         divCorreo.appendChild(LabelCorreo);
         divPassword.appendChild(InputPassword);
         divPassword.appendChild(LabelPassword);
         form.appendChild(divNombre);
         form.appendChild(divApellido);
         form.appendChild(divCorreo);
         form.appendChild(divPassword);
         form.appendChild(BtnReg);
         modBody.appendChild(form);
         
         modContent.appendChild(modHeader);
         modContent.appendChild(modBody);
         modDialog.appendChild(modContent);
         modTbi.appendChild(modDialog);
         modalcontainer.innerHTML = "";
         modalcontainer.appendChild(modTbi);
         
         modTbi.removeAttribute("inert");
         modTbi.removeAttribute("aria-hidden");
             const bootstrapModal = new bootstrap.Modal(modTbi);
                     bootstrapModal.show();

                     modTbi.addEventListener("hidden.bs.modal", ()=>{
                      modalcontainer.innerHTML = "";
                      modTbi.setAttribute("aria-hidden", "true");
                      modTbi.setAttribute("inert", "");
                    })           

        form.addEventListener("submit", (e)=>{
          e.preventDefault();

          const PastData = async (InputNombre,InputApellido, InputCorreo , InputPassword)=>{
            try {
                
                const res = await fetch("CrearUsuario",{
                  method: "POST",
                  headers:{
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({InputNombre,InputApellido, InputCorreo, InputPassword})
                 });
                 const data = await res.text();

                 if(res.status === 200){
                    modBody.innerHTML = "";
                    const obj = JSON.parse(data);
                    const parrafoOk = document.createElement("p");
                    parrafoOk.setAttribute("class", "link-success");
                    parrafoOk.innerHTML = obj.mensaje;
                    modBody.appendChild(parrafoOk);
                    

                 }else if(res.status === 409){
                    
                    const obj = JSON.parse(data);
                   
                    parrafo.innerHTML = obj.mensaje;
                    divCorreo.appendChild(parrafo);
                    
                 }else if(res.status === 400){
                  
                  const obj = JSON.parse(data);
                  textPass.innerHTML = obj.mensaje;
                  divPassword.appendChild(textPass);
                 
                  
                  
               }

            } catch (error) {
                console.log(error.mensaje)
            }
          }

          PastData(InputNombre.value,InputApellido.value, InputCorreo.value, InputPassword.value)
        })

        }
    })