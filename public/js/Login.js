
const Create = document.querySelector(".Create");
const Login = document.querySelector(".Login");
let modalcontainer = document.getElementById("modalContainer");


window.addEventListener("resize", (e)=>{

  
  if(window.innerWidth <= 1024 ){
    
    return Login.innerHTML = "Iniciar";
    
  }else if(window.innerWidth > 1024){
  
   return Login.innerHTML = "Iniciar Sesion";
   
  }
})

Login.addEventListener("click", (e)=>{

  if(e.target){
 modalcontainer.innerHTML = "";
  const modTbi = document.createElement("div");
      const modDialog = document.createElement("div");
      const modContent = document.createElement("div");
      const modHeader = document.createElement("div");
      const modBody = document.createElement("div");  

         const form = document.createElement("form");
         const titulo = document.createElement("h5");
         const divEmail = document.createElement("div");
         const LabelEmail = document.createElement("label");
         const InputEmail = document.createElement("input");
         const divPass = document.createElement("div");
         const LabelPass = document.createElement("label");
         const InputPass = document.createElement("input");
         const NoPass = document.createElement("p");
         const parrafo = document.createElement("p");
         const btn = document.createElement("button");
         
         
                Login.setAttribute("type", "button");
                Login.setAttribute("data-bs-target", "#exampleModal");  
                Login.setAttribute("data-bs-toggle", "modal");  
                modTbi.setAttribute("class", "modal fade backLogin d-flex ");
                modTbi.setAttribute("tabindex", "-1");
                modTbi.setAttribute("id", "exampleModal");
                modTbi.setAttribute("aria-labelledby", "exampleModalLabel");
                modTbi.setAttribute("aria-hidden", "true");
                modTbi.setAttribute("inert", "");

                modDialog.setAttribute("class", "modal-dialog");
                modContent.setAttribute("class", "modal-content");
                modHeader.setAttribute("class", "modal-header text-bg-success text-center justify-content-center");
                titulo.setAttribute("class", "modal-title");
                titulo.setAttribute("id", "exampleModalLabel");
                modBody.setAttribute("class", "modal-body");
              
                
                
         form.setAttribute("class", "form-Login p-3 justify-content-center text-center");
          
          divEmail.setAttribute("class","form-floating mb-3");
          InputEmail.setAttribute("class", "form-control");
          InputEmail.setAttribute("id", "floatingInput");
          InputEmail.setAttribute("placeholder", "Email");
          LabelEmail.setAttribute("for", "floatingInput");
           
          divPass.setAttribute("class","form-floating");
          InputPass.setAttribute("class", "form-control");
          InputPass.setAttribute("id", "floatingInput");
          InputPass.setAttribute("placeholder", "Password");
          LabelPass.setAttribute("for", "floatingInput");


         InputEmail.setAttribute("type","email");
         InputPass.setAttribute("type", "password");
         
         btn.setAttribute("type", "submit");
         btn.setAttribute("class", "btn btn-primary");
         
        
        NoPass.setAttribute("class", "NoPass mt-2");
        parrafo.setAttribute("class", "link-danger m-2")

         titulo.innerHTML = "Iniciar Sesion";
         LabelEmail.innerHTML = "Email";
         LabelPass.innerHTML = "Password";
         NoPass.innerHTML = `Olvido la contraseña ?`;
         
         btn.innerHTML = "iniciar sesion";

         modHeader.appendChild(titulo);
      
         divEmail.appendChild(InputEmail);
         divEmail.appendChild(LabelEmail);
         divPass.appendChild(InputPass);
         divPass.appendChild(LabelPass);
         form.appendChild(divEmail);
         form.appendChild(divPass);
         form.appendChild(parrafo);
         form.appendChild(btn);
         form.appendChild(NoPass);
         modBody.appendChild(form);
         
         modContent.appendChild(modHeader);
         modContent.appendChild(modBody);
         modDialog.appendChild(modContent);
         modTbi.appendChild(modDialog);
         modalcontainer.innerHTML = "";
         modalcontainer.appendChild(modTbi);

                

        InputEmail.addEventListener("keyup", ()=>{
         if(InputEmail.value === ""){
           parrafo.innerHTML = "";
         }
        });

        InputPass.addEventListener("keyup", ()=>{
          if(InputPass.value === ""){
            parrafo.innerHTML = "";

          }
        })
          
        modTbi.removeAttribute("inert");
    modTbi.removeAttribute("aria-hidden");
        const bootstrapModal = new bootstrap.Modal(modTbi);
                bootstrapModal.show();
           
        modTbi.addEventListener("hidden.bs.modal", ()=>{
          modalcontainer.innerHTML = "";
          modTbi.setAttribute("aria-hidden", "true");
          modTbi.setAttribute("inert", "");
        })

        form.addEventListener("submit",  (e)=>{
           e.preventDefault();
             
           const IniSesion = async(InputEmail, InputPass)=>{

             try {
                   const res = await fetch("usuario", {
                     method: "POST", 
                     headers:{
                        "Content-Type": "application/json"
                     },
                     body: JSON.stringify({InputEmail, InputPass})
                   });
                     const data = await res.text();

                     if(res.status === 409){
                        const obj =JSON.parse(data);
                      
                        return parrafo.innerHTML = obj.mensaje;
                     }else if(res.status === 200){
                      Login.style.display = "none";
                      Create.style.display = "none";
                        const obj = JSON.parse(data);
                        const tokenJWT = obj.token;
                        let coso = document.cookie = 'SesionTKs=' + " "+tokenJWT + ';path=/';
                        document.cookie = 'SesionTks=' + " " +tokenJWT + ';path=/';
                         
                        
                        modal.close();
                        window.location.reload();
                        Login.style.display = "none";
                      Create.style.display = "none";
                       
                         

                     }

             } catch (error) {
                console.log(error)
              }


           }
           IniSesion(InputEmail.value , InputPass.value)

           const loader = document.createElement("div");
           loader.setAttribute("class", "fa-solid fa-circle-notch"); 
           NoPass.addEventListener("click", async(e)=>{
             e.preventDefault();
             NoPass.appendChild(loader);
               if(e.target){
                   loader.style.display = "inline-block";
                   
                   let mail = InputEmail.value;
                   console.log(mail)
                   
                 const res = await fetch("RecuperarPass", {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/json"
                   },
                   body: JSON.stringify({mail})
                  })
                  const result = await res.text();
                  const datos = await JSON.parse(result);
                  try{
                    if(res.status === 250){
       
                          modal.innerHTML = "";
                          let parrafoRecu = document.createElement("h2");
                          parrafoRecu.setAttribute("class", "SendEmail");
                          parrafoRecu.innerHTML = datos.mensaje;
                          modal.appendChild(parrafoRecu);
                          modal.showModal();
                          NoPass.removeChild(loader);
                       }
                       
                   }catch(err){
                       console.log(err);
                      }
                    }
                  })
        })
      }
      });
  



