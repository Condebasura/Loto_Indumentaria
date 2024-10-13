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
        InputPass.setAttribute("type", "password");
        btn.setAttribute("type", "submit");
        btn.innerHTML = "Entrar";
        Create.innerHTML = "Crear Usuario";
        titulo.innerHTML = "Login";
        LabelUser.innerHTML = "Usuario";
        LabelPass.innerHTML = "Contraseña";
        Create.style.cursor = "pointer";
        cuerpo.style.backgroundColor =  "rgba(50,40,20,0.111)"
        modal.style.backgroundColor = " rgba(113,173, 813, 0.46)";
       form.style.display = "flex";
       form.style.flexDirection = "column";
       form.style.gap =  ".5em";
       form.style.justifyContent = "center";
       form.style.alignItems = "center";

       Create.style.fontSize = "10px";
       btn.style.cursor = "pointer";
        form.appendChild(titulo)
        form.appendChild(LabelUser)
        form.appendChild(InputUser)
        form.appendChild(LabelPass)
        form.appendChild(InputPass)
        form.appendChild(btn);
        form.appendChild(Create)
        modal.appendChild(form)
        modal.showModal();
    
        form.addEventListener("submit", (e)=>{
            e.preventDefault();

            const Login = async(InputUser , InputPass)=>{
  
                 try {
                    
                     const res = await fetch("/admin/dashbord",{
                         method: 'POST',
                         headers:{
                             "Content-Type":"application/json",
                            },
                            body: JSON.stringify({InputUser, InputPass})
                        });
                        const data = await res.text();
                        if(res.status === 401){
                            console.log("Credenciales incorrectas")
                        }
                        else if(res.status === 200){
                            console.log(data);
                            console.log("inicio correcto");
                         
                        }
                    } catch (error) {
                        console.log(error)   
                    }

            }
            Login(InputUser.value , InputPass.value);
            
            const GetData = async ()=>{
                
                try {
                    const res = await fetch("/admin/dashbord",{
                        method: 'GET',
                        headers:{
                            "Accept": "text/html",
                        },
                        
                    });
                    if(res.status === 401){
                        console.log("No se pudo ingresar")
                    }else if(res.status === 200){
                  console.log("datos correctos");
                 
                    }
                 
                } catch (error) {
                    console.log(error);
                }
                
            }
            GetData();
        })

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
        btn2.setAttribute("type", "submit");
        btn2.innerHTML = "Enviar";
        Login.innerHTML = "Login";
        titulo2.innerHTML = "Create";
        LabelUser2.innerHTML = "Usuario";
        LabelPass2.innerHTML = "Contraseña";
        Login.style.cursor = "pointer";
        cuerpo.style.backgroundColor =  "rgba(50,40,20,0.111)"
       modal.style.backgroundColor = " rgba(130,803, 120, 0.46)";
       form2.style.display = "flex";
       form2.style.flexDirection = "column";
       form2.style.gap =  ".5em";
       form2.style.justifyContent = "center";
       form2.style.alignItems = "center";
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
                modal.innerHTML = "";
                Create.style.cursor = "pointer";
                cuerpo.style.backgroundColor =  "rgba(50,40,20,0.11)"
               modal.style.backgroundColor = " rgba(113,173, 813, 0.46)";
               form.style.display = "flex";
               form.style.flexDirection = "column";
               form.style.gap =  ".5em";
               form.style.justifyContent = "center";
               form.style.alignItems = "center";
               Create.style.fontSize = "10px";
               btn.style.cursor = "pointer";
                modal.appendChild(form);  
            }
        })
        form2.addEventListener("submit", (e)=>{
            e.preventDefault();

            const InsertDatos = async(InputUser2 , InputPass2)=>{
                let res = await fetch("/admin/IniciarCrear/Crear", {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({InputUser2 , InputPass2}),
                })
                const data = await res.text();
                
                if (res.status === 409){
                    modal.innerHTML = "";
                let objt = JSON.parse(data);
                  let parr = document.createElement("p");
                     parr.innerHTML = objt.mensaje;
                      modal.appendChild(parr);
                      modal.style.background = "rgba(190, 20 ,50 , 0.86)";
                      parr.style.textShadow = "2px 2px 2px #000";
                      parr.style.color = "white"
                      modal.showModal()
                      return location.reload();
            }
              else if(res.status === 200){
                    modal.innerHTML = "";
               let obj = JSON.parse(data);
                 let parrafo = document.createElement("p");
                    parrafo.innerHTML = obj.mensaje;
                    modal.style.background ="rgba(130,803, 120, 0.46)";
                    parrafo.style.textShadow = "2px 2px 2px #000";
                    parrafo.style.color = "white"
                     modal.appendChild(parrafo);
                     modal.showModal()
                     return location.reload();
                    }
                     
            }
            InsertDatos(InputUser2.value, InputPass2.value);
        })
        }
    })
    }
});