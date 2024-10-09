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
          const form2 = document.createElement("form")
          const titulo2 = document.createElement("span");
        }
    })
    }
});