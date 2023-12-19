const boton = document.querySelector(".log-in");
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

boton.addEventListener("click", (e)=>{
   e.preventDefault();
        if(e.target.matches(".log-in")){
        let modal = document.getElementById("modal");
        modal.innerHTML = "";
        const cajainicio = document.createElement("div");
        const span = document.createElement("span");
        const IniciarSesion = document.createElement("button");
        const Registro = document.createElement("button");
        const cajaInputs = document.createElement("div");
        const LabelInputUser = document.createElement("label");
        const InputUser = document.createElement("input");
        const LabelInputPass = document.createElement("label");
        const InputPass = document.createElement("Input");
        const salir = document.createElement("i");

        
        cajaInputs.setAttribute("class", "cajaInput")
        LabelInputUser.setAttribute("for", "usuario");
        InputUser.setAttribute("id", "usuario");
        IniciarSesion.setAttribute("class", "sesion");
        IniciarSesion.setAttribute("type", "submit");
        span.setAttribute("class", "NoTienesCuenta");
        Registro.setAttribute("class", "registrarse");
        Registro.setAttribute("type", "submit");
       
        cajainicio.setAttribute("class", "cajainicio");
        IniciarSesion.textContent = "Iniciar sesion";
        Registro.textContent = "Registrarse";
        span.textContent = " No tienes una cuenta ??";

        LabelInputPass.setAttribute("for", "Pass");
        InputPass.setAttribute("id", "Pass")
        InputUser.setAttribute("type", "email");
        InputPass.setAttribute("type", "password")
        salir.setAttribute("class", "fa-solid fa-circle-xmark");
       
        InputUser.setAttribute("placeholder", "Ingrese su email");
        InputPass.setAttribute("placeholder", "Ingrese su contraseña");

        LabelInputUser.textContent = "E-mail";
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
      cajainicio.appendChild(span);
      cajainicio.appendChild(Registro);
       
      const ValidarEmail = () => {


      if(!regexEmail.test(InputUser.value)){
         InputUser.style.border = "1.5px solid red";
         InputUser.setCustomValidity("Verifique que el Email contenga '@' y finalice con una direccion valida como 'alguno.com'");
         
      }else{
         InputUser.style.border = "1.5px solid  #4ee989";
           InputUser.setCustomValidity("");
            
           
         }
         InputUser.reportValidity();
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
      const LabelConfirmPass = document.createElement("label");
      const InputConfirmPass = document.createElement("input");
      const LabelRegisDate = document.createElement("label");
      const InputRegisDate = document.createElement("input");
      const LabelRegisSexo = document.createElement("label");
      const InputRegisSexo = document.createElement("select");
      const ValueSelect = document.createElement("option");
      const ValueMasculino = document.createElement("option");
      const ValueFemenino = document.createElement("option");
      const RegistroCliente = document.createElement("button");




            
      CajaRegis.setAttribute("class", "CajaRegis");
      tituloRegis.setAttribute("class", "RegisTitulo");
      tituloRegis.innerHTML = "Registro de Clientes";
      LabelName.setAttribute("for", "Name");
      InputName.setAttribute("id", "Name");
      InputName.setAttribute("class", "InputRegisName"),
      LabelName.textContent  = "Nombre Completo"
      LabelRegisUser.setAttribute("for", "InputUser");
      InputRegisUser.setAttribute("class", "InputRegisUser");
      InputRegisUser.setAttribute("id", "InputUser");
      InputRegisUser.setAttribute("type", "email");
      LabelRegisUser.textContent = "E-mail";
      LabelRegisPass.setAttribute("for", "InputPass");
      InputRegisPass.setAttribute("class", "InputRegisPass");
      InputRegisPass.setAttribute("id", "InputPass");
      InputRegisPass.setAttribute("type", "password");
      LabelRegisPass.textContent = "Contraseña";
      LabelConfirmPass.setAttribute("for", "CPass");
      InputConfirmPass.setAttribute("id", "CPass");
      InputConfirmPass.setAttribute("type", "password");
      InputConfirmPass.setAttribute("class", "ConfirmPass");
      LabelConfirmPass.textContent = "Confirmar Contraseña";
      salir.setAttribute("class", "fa-solid fa-circle-xmark");
      LabelRegisDate.setAttribute("for", "date");
      LabelRegisDate.textContent = "Edad";
      InputRegisDate.setAttribute("id", "date")
      InputRegisDate.setAttribute("class", "date_edad");
      InputRegisDate.setAttribute("type", "date");
      LabelRegisSexo.setAttribute("for", "sexo" );
      LabelRegisSexo.textContent = "Sexo";
      InputRegisSexo.setAttribute("id", "sexo");
      InputRegisSexo.setAttribute("class", "RegisSexo");
      InputRegisSexo.setAttribute("type" , "select");
      ValueSelect.setAttribute("value" , "#");
      ValueMasculino.setAttribute("value", "Masculino");
      ValueFemenino.setAttribute("value", "Femenino");
      ValueSelect.textContent = "seleccionar";
      ValueMasculino.textContent = "Masculino";
      ValueFemenino.textContent = "Femenino";
      RegistroCliente.setAttribute("class", "RegistrarCliente");
      RegistroCliente.setAttribute("type", "submit");
      RegistroCliente.textContent = "Registarse";



      

       


     
     
      const ValidarRegisEmail = () => {


         if(!regexEmail.test(InputRegisUser.value)){
            InputRegisUser.style.border = "1.5px solid red";
            InputRegisUser.setCustomValidity("Verifique que el Email contenga '@' y finalice con una direccion valida como 'alguno.com'");
           
         }else{
            InputRegisUser.style.border = "1.5px solid  #4ee989";
              InputRegisUser.setCustomValidity("");
                
              
         }
         InputRegisUser.reportValidity();
            }
   
      InputRegisUser.addEventListener("input", ValidarRegisEmail);


      const ValidarRegisPass = ()=>{

         if(InputRegisPass.value !== InputConfirmPass.value){
            InputRegisPass.style.border = "1.5px solid red";
            InputConfirmPass.style.border = "1.5px solid red";
            InputConfirmPass.setCustomValidity("Las contraseñas no coinciden !!");
          
         }else{
            InputRegisPass.style.border = "1.5px solid  #4ee989";
            InputConfirmPass.style.border = "1.5px solid  #4ee989";
            InputConfirmPass.setCustomValidity("");
            
         }
         InputConfirmPass.reportValidity();
      };

      InputConfirmPass.addEventListener("input", ValidarRegisPass);

      const ValidarFecha =() =>{
         const max = new Date().getFullYear('dd/mm/yyyy') + '-12-31';
         InputRegisDate.setAttribute("max", max);
        if(InputRegisDate > max){
             return false;
         }else{
             
             return true;
         }
     
         
     };
     
     InputRegisDate.addEventListener("input", ValidarFecha);

       modal.showModal();
       modal.appendChild(salir);
       modal.appendChild(tituloRegis);
       modal.appendChild(CajaRegis);
      
       CajaRegis.appendChild(LabelRegisUser);
       CajaRegis.appendChild(InputRegisUser);
       CajaRegis.appendChild(LabelRegisPass);
       CajaRegis.appendChild(InputRegisPass);
       CajaRegis.appendChild(LabelConfirmPass);
       CajaRegis.appendChild(InputConfirmPass);
       CajaRegis.appendChild(LabelName);
       CajaRegis.appendChild(InputName);
       CajaRegis.appendChild(LabelRegisDate);
       CajaRegis.appendChild(InputRegisDate);
       CajaRegis.appendChild(LabelRegisSexo);
       CajaRegis.appendChild(InputRegisSexo);
       CajaRegis.appendChild(RegistroCliente);
       InputRegisSexo.appendChild(ValueSelect);
       InputRegisSexo.appendChild(ValueMasculino);
       InputRegisSexo.appendChild(ValueFemenino);
       

       
        // evento para salir del modal de registro
         salir.addEventListener("click", (e)=>{
            if(e.target){
               modal.close();
               modal.innerHTML = "";
               
            }
            
         })

   }
})

  // evento para salir del modal de inicio de sesión
        salir.addEventListener("click", (e)=>{
            if(e.target){
               modal.close();
               modal.innerHTML = "";
               
            }
            
         })
        
    
    }
});

