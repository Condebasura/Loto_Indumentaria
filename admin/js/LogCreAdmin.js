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
        btn.innerHTML = "Entrar";
        Create.innerHTML = "Crear Usuario";
        titulo.innerHTML = "Login";
        LabelUser.innerHTML = "Usuario";
        LabelPass.innerHTML = "Pasword";
        cuerpo.style.backgroundColor = "rgba(10,20,53,0.66)"
       modal.style.backgroundColor = " rgba(933, 723, 523, 0.2)";
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
    }
});