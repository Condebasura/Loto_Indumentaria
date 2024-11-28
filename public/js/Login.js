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
         form.appendChild(btn);
        
         modal.appendChild(form);

        modal.showModal()

        form.addEventListener("submit",  (e)=>{
           e.preventDefault();
             
           const IniSesion = async(InputEmail, InputPass)=>{

             try {
                console.log(InputEmail, InputPass)
             } catch (error) {
                console.log(error)
             }


           }
           IniSesion(InputEmail.value , InputPass.value)
           
        })

    }
});


