const boton = document.querySelector(".log-in");

boton.addEventListener("click", (e)=>{
   e.preventDefault();
        if(e.target.matches(".log-in")){
        let modal = document.getElementById("modal");
        modal.innerHTML = "";
        const cajainicio = document.createElement("div");
        const spam = document.createElement("div");
        const IniciarSesion = document.createElement("button");
        const Registro = document.createElement("button");
        const cajaInputs = document.createElement("div");
        const LabelInputUser = document.createElement("label");
        const InputUser = document.createElement("input");
        const LabelInputPass = document.createElement("label");
        const InputPass = document.createElement("Input");
        const salir = document.createElement("i");

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        cajaInputs.setAttribute("class", "cajaInput")
        LabelInputUser.setAttribute("for", "usuario");
        InputUser.setAttribute("id", "usuario");
        IniciarSesion.setAttribute("class", "sesion");
        IniciarSesion.setAttribute("type", "submit");
        Registro.setAttribute("class", "registrarse");
        Registro.setAttribute("type", "submit");
       
        cajainicio.setAttribute("class", "cajainicio");
        IniciarSesion.textContent = "Iniciar sesion";
        Registro.textContent = "Registrarse";
        spam.textContent = "O";

        LabelInputPass.setAttribute("for", "Pass");
        InputPass.setAttribute("id", "Pass")
        InputUser.setAttribute("type", "email");
        InputPass.setAttribute("type", "password")
        salir.setAttribute("class", "fa-solid fa-circle-xmark");
       
        InputUser.setAttribute("placeholder", "Ingrese su email");
        InputPass.setAttribute("placeholder", "Ingrese su contraseña");

        LabelInputUser.textContent = "Email";
        LabelInputPass.textContent = "Contraseña";
                
        modal.showModal();
        modal.appendChild(salir);
        modal.appendChild(cajaInputs);
        modal.appendChild(cajainicio);
        

        cajaInputs.appendChild(LabelInputUser);
        cajaInputs.appendChild(InputUser);
        cajaInputs.appendChild(LabelInputPass);
        cajaInputs.appendChild(InputPass);
      cajainicio.appendChild(IniciarSesion);
      cajainicio.appendChild(spam);
      cajainicio.appendChild(Registro);
       
      const ValidarEmail = () => {


      if(!regexEmail.test(InputUser.value)){
         InputUser.style.border = "1.5px solid red";
         InputUser.setCustomValidity("El campo no puede estar vacio contener numeros o caracteres especiales");
         return false;
      }else{
         InputUser.style.border = "1.5px solid  #4ee989";
           InputUser.setCustomValidity("");
             return true;
           
      }
         }

   InputUser.addEventListener("input", ValidarEmail);

Registro.addEventListener("click", (e)=>{
   if(e.target){

      let modal = document.getElementById("modal");
      modal.innerHTML = "";
      const salir = document.createElement("i");
      const tituloRegis = document.createElement("h4");
      const CajaRegis = document.createElement("div");
      const LabelName = document.createElement("label");
      const InputName = document.createElement("input");
      const LabelRegisUser = document.createElement("label");
      const InputRegisUser = document.createElement("input");
      const LabelRegisPass = document.createElement("label");
      const InputRegisPass = document.createElement("input");
            
      CajaRegis.setAttribute("class", "CajaRegis");
      tituloRegis.setAttribute("class", "RegisTitulo");
      tituloRegis.innerHTML = "Registro de Usuario";
      LabelName.setAttribute("for", "Name");
      InputName.setAttribute("id", "Name");
      InputName.setAttribute("class", "InputRegisName"),
      LabelName.textContent  = "Nombre Completo"
      LabelRegisUser.setAttribute("for", "LabelUser");
      InputRegisUser.setAttribute("class", "InputRegisUser");
      InputRegisUser.setAttribute("id", "InputUser");
      InputRegisUser.setAttribute("type", "email");
      LabelRegisUser.textContent = "Email";
      LabelRegisPass.setAttribute("for", "LabelPass");
      InputRegisPass.setAttribute("class", "InputRegisPass");
      InputRegisPass.setAttribute("id", "InputPass");
      InputRegisPass.setAttribute("type", "password");
      LabelRegisPass.textContent = "Contraseña";
      salir.setAttribute("class", "fa-solid fa-circle-xmark");


       modal.showModal();
       modal.appendChild(salir);
       modal.appendChild(tituloRegis);
       modal.appendChild(CajaRegis);
       CajaRegis.appendChild(LabelName);
       CajaRegis.appendChild(InputName);
       CajaRegis.appendChild(LabelRegisUser);
       CajaRegis.appendChild(InputRegisUser);
       CajaRegis.appendChild(LabelRegisPass);
       CajaRegis.appendChild(InputRegisPass);

 
         salir.addEventListener("click", (e)=>{
            if(e.target){
               modal.close();
               modal.innerHTML = "";
               
            }
            
         })

   }
})


        salir.addEventListener("click", (e)=>{
            if(e.target){
               modal.close();
               modal.innerHTML = "";
               
            }
            
         })
        
    
    }
})