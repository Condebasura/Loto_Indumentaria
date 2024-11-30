const DivUser = document.querySelector(".Login_Regis");
const Create = document.querySelector(".Create");
const Login = document.querySelector(".Login");
const modal = document.getElementById("modal");

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
         const parrafo = document.createElement("p");
         const btn = document.createElement("button");
          
         InputEmail.setAttribute("required", "")
         InputPass.setAttribute("required", "")
         InputEmail.setAttribute("type", "email")
         InputPass.setAttribute("type", "password")
         btn.setAttribute("type", "submit");
        
        
         titulo.innerHTML = "Iniciar Sesion";
         LabelEmail.innerHTML = "Email";
         LabelPass.innerHTML = "Password";
         
         btn.innerHTML = "iniciar sesion";

         
          
         
         form.appendChild(titulo);
         form.appendChild(LabelEmail);
         form.appendChild(InputEmail);
         form.appendChild(LabelPass);
         form.appendChild(InputPass);
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
                        const obj = JSON.parse(data);
                        const tokenJWT = obj.token;
                        let coso = document.cookie = 'SesionTKs=' + " "+tokenJWT + ';path=/';
                        document.cookie = 'SesionTks=' + " " +tokenJWT + ';path=/';
                         
                        const Perfil = document.createElement("span");
                        const Logout = document.createElement("span");
                        Perfil.innerHTML = "usuario";
                        Logout.innerHTML = "Logout";
                        DivUser.removeChild(Login);
                        DivUser.removeChild(Create);
                        DivUser.appendChild(Perfil);
                        DivUser.appendChild(Logout);
                        modal.close();
                         

                     }

             } catch (error) {
                console.log(error)
             }


           }
           IniSesion(InputEmail.value , InputPass.value)
           
        })

    }
});


