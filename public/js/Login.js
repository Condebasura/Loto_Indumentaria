
const Create = document.querySelector(".Create");
const Login = document.querySelector(".Login");
const modal = document.getElementById("modal");

window.addEventListener("resize", (e)=>{

  
  if(window.innerWidth <= 1024 ){
    
    return Login.innerHTML = "Iniciar";
    
  }else if(window.innerWidth > 1024){
  
   return Login.innerHTML = "Iniciar Sesion";
   
  }
})



Login.addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.target){
         modal.innerHTML = "";
         const form = document.createElement("form");
         const titulo = document.createElement("h3");
         const LabelEmail = document.createElement("label");
         const InputEmail = document.createElement("input");
         const LabelPass = document.createElement("label");
         const InputPass = document.createElement("input");
         const NoPass = document.createElement("p");
         const parrafo = document.createElement("p");
         const btn = document.createElement("button");
          
         InputEmail.setAttribute("type","email");
         InputPass.setAttribute("type", "password");
         InputEmail.setAttribute("required", "");
         InputPass.setAttribute("required", "");
         btn.setAttribute("type", "submit");
        
        
         titulo.innerHTML = "Iniciar Sesion";
         LabelEmail.innerHTML = "Email";
         LabelPass.innerHTML = "Password";
         NoPass.innerHTML = "Olvido la contraseña ?";
         
         btn.innerHTML = "iniciar sesion";

         
          
         
         form.appendChild(titulo);
         form.appendChild(LabelEmail);
         form.appendChild(InputEmail);
         form.appendChild(LabelPass);
         form.appendChild(InputPass);
         form.appendChild(NoPass);
         form.appendChild(parrafo);
         form.appendChild(btn);
        
         modal.appendChild(form);

        modal.showModal()

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


