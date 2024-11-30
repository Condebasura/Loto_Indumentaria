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

        form.addEventListener("submit", (e)=>{
          e.preventDefault();

          const PastData = async (InputNombre, InputCorreo , InputPassword)=>{
            try {
                
                const res = await fetch("CrearUsuario",{
                  method: "POST",
                  headers:{
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({InputNombre, InputCorreo, InputPassword})
                 });
                 const data = await res.text();

                 if(res.status === 200){
                    modal.innerHTML = "";
                    const obj = JSON.parse(data);
                    const parrafo = document.createElement("p");
                    parrafo.innerHTML = obj.mensaje;
                    modal.appendChild(parrafo);
                    modal.showModal();

                 }else if(res.status === 409){
                    modal.innerHTML = "";
                    const obj = JSON.parse(data);
                    const parrafo = document.createElement("p");
                    parrafo.innerHTML = obj.mensaje;
                    modal.appendChild(parrafo);
                    modal.showModal();
                 }

            } catch (error) {
                console.log(error.mensaje)
            }
          }

          PastData(InputNombre.value, InputCorreo.value, InputPassword.value)
        })

        }
    })