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
        const titulo = document.createElement("h4");

        const divUser = document.createElement("div");
        const LabelUser = document.createElement("label");
        const InputUser = document.createElement("input");
       
        const divPass = document.createElement("div");
        const LabelPass = document.createElement("label");
        const InputPass = document.createElement("input");
        const btn = document.createElement("button");
        const Create = document.createElement("a");

        

         card.setAttribute("class", "card mt-5");
         cardHeader.setAttribute("class", "card-header text-center  text-bg-success");
         cardBody.setAttribute("class", "card-body");
         cardFooter.setAttribute("class", "card-footer text-end text-bg-success");
          
        form.setAttribute("class", "form m-3 text-center ");

        divUser.setAttribute("class", "form-floating mb-3 p-1 ");
         InputUser.setAttribute("type","text");
         InputUser.setAttribute("class","form-control");
         InputUser.setAttribute("id","floatingInput");
         InputUser.setAttribute("placeholder", "Usuario")
         LabelUser.setAttribute("for","floatingInput");
         
        divPass.setAttribute("class", "form-floating mb-3 p-1");
        InputPass.setAttribute("type", "password");
        InputPass.setAttribute("placeholder", "Contraseña")
        InputPass.setAttribute("class", "form-control");
        InputPass.setAttribute("id", "floatingPassword");
        LabelPass.setAttribute("for", "floatingPassword");

        btn.setAttribute("type", "submit");
        btn.setAttribute("class", "btn btn-primary");
       
        Create.setAttribute("class", "Crea")

        btn.innerHTML = "Entrar";
        Create.innerHTML = "Crear Usuario";
        titulo.innerHTML = "Login";
        LabelUser.innerHTML = "Usuario";
        LabelPass.innerHTML = "Contraseña";
        Create.style.cursor = "pointer";
       

       
       
        divUser.appendChild(InputUser);
        divUser.appendChild(LabelUser);
        divPass.appendChild(InputPass)
        divPass.appendChild(LabelPass)
        form.appendChild(divUser);
        form.appendChild(divPass);
        form.appendChild(btn);
        
        
        cardHeader.appendChild(titulo)
       cardBody.appendChild(form);
       cardFooter.appendChild(Create);
       card.appendChild(cardHeader);
       card.appendChild(cardBody);
       card.appendChild(cardFooter)
         elBody.appendChild(card);
       
        document.addEventListener("keyup", (e)=>{
            e.preventDefault();
            if(e.key === "Escape"){
                window.location.reload();
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

        const cardCreate = document.createElement("div");
        const cardHeaderCreate = document.createElement("div");
        const cardBodyCreate = document.createElement("div");
        const cardFooterCreate = document.createElement("div");
        
        

          const form2 = document.createElement("form")
          const titulo2 = document.createElement("h4");
          
          const divUserCreate = document.createElement("div");
          const InputUser2 = document.createElement("input");
          const LabelUser2 = document.createElement("label");

         const divPassCreate = document.createElement("div"); 
         const InputPass2 = document.createElement("input");
         const LabelPass2 = document.createElement("label");

        const btn2 = document.createElement("button");
        const Login = document.createElement("a");
         
        cardCreate.setAttribute("class", "card mt-5");
        cardHeaderCreate.setAttribute("class", "card-header text-center text-bg-primary");
        cardBodyCreate.setAttribute("class", "card-body");
        cardFooterCreate.setAttribute("class", "card-footer text-end text-bg-primary");

        form2.setAttribute("class", "form  m-3 text-center");

        divUserCreate.setAttribute("class", "form-floating mb-3 p-1");
        InputUser2.setAttribute("type","text");
        InputUser2.setAttribute("class","form-control");
        InputUser2.setAttribute("id","floatingInput");
        InputUser2.setAttribute("placeholder","Usuario");
        LabelUser2.setAttribute("for", "floatingInput");

        divPassCreate.setAttribute("class", "form-floating mb-3 p-1");
        InputPass2.setAttribute("type", "password");
        InputPass2.setAttribute("placeholder","Contraseña");
        InputPass2.setAttribute("class","form-control");
        InputPass2.setAttribute("id","floatingPassword");
        LabelPass2.setAttribute("for","floatingPassword");

        btn2.setAttribute("type", "submit");
        btn2.setAttribute("class", "btn btn-success");

        Login.setAttribute("class", "Login");

        btn2.innerHTML = "Enviar";
        Login.innerHTML = "Login";
        titulo2.innerHTML = "Create";
        LabelUser2.innerHTML = "Usuario";
        LabelPass2.innerHTML = "Contraseña";
        Login.style.cursor = "pointer";
       
         divUserCreate.appendChild(InputUser2);
         divUserCreate.appendChild(LabelUser2);
         divPassCreate.appendChild(InputPass2);
         divPassCreate.appendChild(LabelPass2);
         form2.appendChild(divUserCreate);
         form2.appendChild(divPassCreate);
         form2.appendChild(btn2);
         
         cardHeaderCreate.appendChild(titulo2);
         cardBodyCreate.appendChild(form2);
         cardFooterCreate.appendChild(Login);
         cardCreate.appendChild(cardHeaderCreate);
         cardCreate.appendChild(cardBodyCreate);
         cardCreate.appendChild(cardFooterCreate);
         elBody.appendChild(cardCreate);
         elBody.removeChild(card);


        Login.addEventListener("click", (e)=>{
            e.preventDefault();
            if(e.target){
           window.location.reload(); 
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