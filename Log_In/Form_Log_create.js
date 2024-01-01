const boton = document.querySelector(".log-in");
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexLetras = /[a-z A-Z\\s]+/gu;

boton.addEventListener("click", (e)=>{
   e.preventDefault();
        if(e.target.matches(".log-in")){
        let modal = document.getElementById("modal");
        modal.innerHTML = "";
        const cajainicio = document.createElement("div");
        const span = document.createElement("span");
        const IniciarSesion = document.createElement("button");
        const Registro = document.createElement("button");
        const cajaInputs = document.createElement("form");
        const LabelInputUser = document.createElement("label");
        const InputUser = document.createElement("input");
        const LabelInputPass = document.createElement("label");
        const InputPass = document.createElement("Input");
        const salir = document.createElement("i");

        
        cajaInputs.setAttribute("class", "cajaInput");
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
      cajaInputs.appendChild(IniciarSesion);
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

Registro.addEventListener("click", ()=>{
 

      let modal = document.getElementById("modal");
      modal.innerHTML = "";
      const salir = document.createElement("i");
      const tituloRegis = document.createElement("h4");
      const CajaRegis = document.createElement("form");
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
      ValueSelect.textContent = "Seleccionar";
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


      const validaNombre = () => {
         if (!regexLetras.test(InputName.value)) {
             InputName.style.border = "1.5px solid red";
             InputName.setCustomValidity("El campo no puede estar vacio contener numeros o caracteres especiales");
             
         } else {
             InputName.style.border = "1.5px solid  #4ee989";
             InputName.setCustomValidity("");
             
         }
         InputName.reportValidity();
     };
     
     InputName.addEventListener("input", validaNombre);

      const ValidarFecha =() =>{
         const max = new Date().getFullYear()
         InputRegisDate.setAttribute("max", max);
        let AñoNacimiento = new Date(InputRegisDate.value).getFullYear();
        if(InputRegisDate > max || max - AñoNacimiento >= 18){
       
         InputRegisDate.style.border = "1.5px solid  #4ee989";
         InputRegisDate.setCustomValidity("");
         }
         
         else{
           InputRegisDate.style.border = "1.5px solid red";
           InputRegisDate.setCustomValidity("Tienes que ser mayor de 18 años para crear una cuenta !!")
             
         }
             InputRegisDate.reportValidity();
         
     };
     
     InputRegisDate.addEventListener("input", ValidarFecha);

       const ValidarSexo = ()=>{
         if(InputRegisSexo.value == "#"){
            InputRegisSexo.style.border = "1.5px solid  red";
         InputRegisSexo.setCustomValidity("Seleccione una opción !!")
         }else{
            InputRegisSexo.style.border = "1.5px solid  #4ee989";
            InputRegisSexo.setCustomValidity("");
         }
         InputRegisSexo.reportValidity();
       }
InputRegisSexo.addEventListener("input", ValidarSexo);

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
            
         });

         class Usuario {
            constructor(InputRegisUser, InputRegisPass, InputName, InputRegisDate, InputRegisSexo) {
                this.InputRegisUser = InputRegisUser;
                this.InputRegisPass = InputRegisPass;
                this.InputName = InputName;
                this.InputRegisDate = this.changeDateFormat(InputRegisDate);
                this.InputRegisSexo = InputRegisSexo;
            };
        
            changeDateFormat(date) {
                const dateParts = date.split('-');
                return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
            }
        
            addCliente() {
                return fetch("http://localhost:3004/Usuarios",{
                    method: "POST", 
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this)
                }).then(res =>{
                    let json = res.data;
                    
        
                    // si el status es ok al ingresar los datos aparece un aviso de que los datos an ingresados correctamente.
                    if (res.status >= 201 && res.status <= 300) {
                     modal.removeChild(CajaRegis);
                     const Exito = document.createElement("p");
                        Exito.innerHTML = `El usuario ${InputRegisUser.value} <br> se registró exitosamente !!`;
                        Exito.setAttribute("class", "exito");
        
                        setTimeout(() =>{ modal.appendChild(Exito), /*location.reload() ,*/ 1500000});
                    }
                }).catch(err => console.log(err));
            }
        };

      
        CajaRegis.addEventListener("submit", (e)=>{
         e.preventDefault();
        if(!ValidarRegisEmail() || !ValidarRegisPass() || !validaNombre() || !ValidarFecha() || !ValidarSexo() ){
        e.preventDefault();
        }
       
           
           let usuario = new Usuario(InputRegisUser.value, InputRegisPass.value, InputName.value, InputRegisDate.value, InputRegisSexo.value);
           usuario.addCliente();
         
        });

        
        
         
      })
  // evento para salir del modal de inicio de sesión
        salir.addEventListener("click", (e)=>{
            if(e.target){
               modal.close();
               modal.innerHTML = "";
               
            }
            
         })
        
    
    

     // Tengo que crear una funcion para obtener los datos de usuario y pass para verificar que coincidan para iniciar sesion.
     
         const CheckDatos = (e)=>{
               e.preventDefault();
           if(e.target){
                  
            return  fetch(`http://localhost:3004/Usuarios`)
            .then(res => res.json()
            .then((data)=>{
               data.find(el => {
                  if(InputUser.value === el.InputRegisUser && InputPass.value === el.InputRegisPass){
                     InputUser.style.border = "1.5px solid  #4ee989";
                     InputUser.setCustomValidity("");
                     InputUser.reportValidity();
                     InputPass.style.border = "1.5px solid  #4ee989";
                     InputPass.setCustomValidity("");
                     InputPass.reportValidity();
                     
                     console.log(el.InputName);
                     return true;
                  }else{
                     
                     InputUser.style.border = "1.5px solid  red";
                     InputUser.setCustomValidity("El correo ingresado no es correcto!! ");
                     InputUser.reportValidity();
                     InputPass.style.border = "1.5px solid  red";
                     InputPass.setCustomValidity("La contraseña ingresada no es correcta!! ");
                     InputPass.reportValidity();
                     return false;
                  }
               });
            })

             
               
 ).catch(err => console.log(err))
            
         
            
            
           
         } 
      }
         cajaInputs.addEventListener("submit", CheckDatos);



        }
});
