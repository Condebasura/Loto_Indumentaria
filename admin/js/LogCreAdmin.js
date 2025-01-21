let cuerpo = document.querySelector(".body")
document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault();

    if(e.target){
        const elBody = document.querySelector("body");
        const card = document.createElement("div");
        const cardHeader = document.createElement("div");
        const cardBody = document.createElement("div");
        const cardFooter = document.createElement("div");


        const form = document.createElement("form");
        const titulo = document.createElement("spam");
        const LabelUser = document.createElement("label");
        const InputUser = document.createElement("input");
       const LabelPass = document.createElement("label");
        const InputPass = document.createElement("input");
        const btn = document.createElement("button");
        const Create = document.createElement("a");

        // continuar aca , ver el cambio de cards para  la creacion de usuario

         card.setAttribute("class", "card")
         cardHeader.setAttribute("class", "card-header")
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
       
       cardHeader.appendChild(titulo)
       form.appendChild(LabelUser)
       form.appendChild(InputUser)
       form.appendChild(LabelPass)
       form.appendChild(InputPass)
       form.appendChild(btn);
       form.appendChild(Create)
      
       
       cardBody.appendChild(form);
       card.appendChild(cardHeader);
       card.appendChild(cardBody);
         elBody.appendChild(card);
       
        document.addEventListener("keyup", (e)=>{
            e.preventDefault();
            if(e.key === "Escape"){
                modal.showModal();
            }
        })
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
                            const parrafo = document.createElement("p");
                            parrafo.innerHTML = "Credenciales incorrectas";
                            parrafo.style.fontSize = "12px";
                            parrafo.style.color = "red";
                            parrafo.style.margin = "0%";
                            form.appendChild(parrafo);
                            
                            setTimeout(() => {
                                form.removeChild(parrafo)
                            }, 5000);
                        }
                        else if(res.status === 200){
                            console.log("inicio correcto");
                            const GetData = async ()=>{
            
                                const tokenName = 'mitoken';
                                 const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));
                
                    const cookie = cookies.find(([name, value]) => name === tokenName);
                    const tokenValue = cookie[1];
                    const tokenPayload = tokenValue.split('.')[1];
                    const decodedPayload = JSON.parse(window.atob(tokenPayload));
                
                    const getCookie =  (name)=>{
                    const  value = `; ${document.cookie}`;
                    const parts = value.split(`; ${name}=`);
                    if(parts.length === 2) return parts.pop().split(';').shift();
                }
                   
                let separacokie = getCookie(tokenName);
                           
                                try {
                                    const res = await fetch("dashbord",{
                                        method: 'GET',
                                        headers:{
                                        Authorization: `Bearer ${getCookie('mitoken')} `,
                                        },
                                        
                                    });
                                    const dataget = await res.text();
                                  
                                    
                                 if(!res.ok){
                                    return console.log(dataget.mensaje);
                                 }else{
                                     const datos =  decodedPayload;
                                     const dataUser = datos.User;
                                     return window.location.href = '/admin/dashbord';
                                
                                    
                                 }
                                 
                                } catch (error) {
                                    console.log(error);
                                }
                                
                            }
                            GetData();
                        }
                    } catch (error) {
                        console.log(error)   
                    }

            }
            Login(InputUser.value , InputPass.value);
            
      
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
                      modal.showModal();
                      setTimeout(() => {
                        
                          return location.reload();
                      }, 2000);
            }
              else if(res.status === 200){
                    modal.innerHTML = "";
               let obj = JSON.parse(data);
                 let parrafo = document.createElement("p");
                    parrafo.innerHTML = obj.mensaje;
                    modal.style.background ="rgba(30,723, 20)";
                    parrafo.style.textShadow = "2px 2px 5px #000";
                    parrafo.style.color = "rgb(255,255,255)"
                     modal.appendChild(parrafo);
                     modal.showModal()
                     setTimeout(() => {
                        
                        return location.reload();
                    }, 2000);
                    }
                     
            }
            InsertDatos(InputUser2.value, InputPass2.value);
        })
        }
    })
    }
});