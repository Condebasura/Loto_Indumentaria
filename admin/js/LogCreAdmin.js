let cuerpo = document.querySelector(".body")
document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault();

    if(e.target){
        let modal = document.getElementById("modal");
        const form = document.createElement("form");
        const titulo = document.createElement("spam");
        const LabelUser = document.createElement("label");
        const InputUser = document.createElement("input");
       const LabelPass = document.createElement("label");
        const InputPass = document.createElement("input");
        const btn = document.createElement("button");
        const Create = document.createElement("a");
        InputPass.setAttribute("type", "password")
        btn.innerHTML = "Entrar";
        Create.innerHTML = "Crear Usuario";
        titulo.innerHTML = "Login";
        LabelUser.innerHTML = "Usuario";
        LabelPass.innerHTML = "Pasword";
        Create.style.cursor = "pointer";
        cuerpo.style.backgroundColor =  "rgba(50,40,20,0.111)"
       modal.style.backgroundColor = " rgba(413,893, 113, 0.66)";
       form.style.display = "flex";
       form.style.flexDirection = "column";
       form.style.gap =  ".5em";
       Create.style.fontSize = "10px";
        form.appendChild(titulo)
        form.appendChild(LabelUser)
        form.appendChild(InputUser)
        form.appendChild(LabelPass)
        form.appendChild(InputPass)
        form.appendChild(btn);
        form.appendChild(Create)
        modal.appendChild(form)
        modal.showModal();
    Create.addEventListener("click",(e)=>{
        e.preventDefault();
        if(e.target){
            modal.close();
            modal.innerHTML = "";
          const form2 = document.createElement("form")
          const titulo2 = document.createElement("span");
          const LabelUser2 = document.createElement("label");
        const InputUser2 = document.createElement("input");
       const LabelPass2 = document.createElement("label");
        const InputPass2 = document.createElement("input");
        const btn2 = document.createElement("button");
        const Login = document.createElement("a");

        InputPass2.setAttribute("type", "password")
        btn2.innerHTML = "Enviar";
        Login.innerHTML = "Login";
        titulo2.innerHTML = "Create";
        LabelUser2.innerHTML = "Usuario";
        LabelPass2.innerHTML = "Pasword";
        Login.style.cursor = "pointer";
        cuerpo.style.backgroundColor =  "rgba(50,40,20,0.111)"
       modal.style.backgroundColor = " rgba(13,13, 42, 0.66)";
       form2.style.display = "flex";
       form2.style.flexDirection = "column";
       form2.style.gap =  ".5em";
         Login.style.fontSize = "10px";
         form2.appendChild(titulo2)
        form2.appendChild(LabelUser2)
        form2.appendChild(InputUser2)
        form2.appendChild(LabelPass2)
        form2.appendChild(InputPass2)
        form2.appendChild(btn2);
        form2.appendChild(Login)
        modal.appendChild(form2)
        modal.showModal();
        Login.addEventListener("click", (e)=>{
            e.preventDefault();
            if(e.target){
                return location.reload();
            }
        })
        }
    })
    }
});