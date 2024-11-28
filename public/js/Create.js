const Create =  document.querySelector(".Create");


Create.addEventListener("click", (e)=>{
    e.preventDefault()
    if(e.target){
         modal.innerHTML = "";
         const form = document.createElement("form");
         const title = document.createElement("h3");
         const LabelNombre = document.createElement("label");
         const InputNombre = document.createElement("input");
         const LabelCorreo = document.createElement("label");
         const InputCorreo = document.createElement("input");
         const LabelPassword = document.createElement("label");
         const InputPassword = document.createElement("input");
        const BtnReg = document.createElement("button");

         InputCorreo.setAttribute("type", "email");
         InputPassword.setAttribute("type", "password");
         BtnReg.setAttribute("type", "submit");

         title.innerHTML = "Crear Cuenta";
         LabelNombre.innerHTML = "Nombre Completo";
         LabelCorreo.innerHTML = "Email";
         LabelPassword.innerHTML = "Password";
         BtnReg.innerHTML = "Crear";

         form.appendChild(title);
         form.appendChild(LabelNombre);
         form.appendChild(InputNombre);
         form.appendChild(LabelCorreo);
         form.appendChild(InputCorreo);
         form.appendChild(LabelPassword);
         form.appendChild(InputPassword);
         form.appendChild(BtnReg);
         modal.appendChild(form);

         modal.showModal();



        }
    })