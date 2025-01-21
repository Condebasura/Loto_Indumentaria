
const modal = document.getElementById("modal");

window.addEventListener("DOMContentLoaded", (e)=>{
    if(e.target){
        const urlparams = new URLSearchParams(window.location.search);
        const token = urlparams.get('token');
        const dataDecode =  jwt_decode(token);
        console.log(dataDecode);
        const email = dataDecode.UserEmail;
        
         
        modal.innerHTML = "";
        const form = document.createElement("form");
        const LabelEmail = document.createElement("label");
        const inputEmail = document.createElement("input");
        const LabelPass = document.createElement("label");
        const inputPass = document.createElement("input");
        const Parrafo = document.createElement("p");
        const btnSubmit = document.createElement("button");

        LabelEmail.setAttribute("id", "e-mail");
        inputEmail.setAttribute("id", "e-mail");
        inputEmail.setAttribute("type", "email");
        inputEmail.setAttribute("class", "email");
        inputEmail.setAttribute("name", "elmail");
        inputEmail.setAttribute( "readonly", "");
        inputEmail.value = email;
        LabelPass.setAttribute("id", "Pass");
        inputPass.setAttribute("id", "Pass");
        inputPass.setAttribute("type", "password");
        inputPass.setAttribute("name", "password");
        inputPass.setAttribute("class", "contraseña");
        inputPass.setAttribute("required", "");
        Parrafo.style.display = "none";
    
        

        btnSubmit.setAttribute("type", "submit");
        btnSubmit.setAttribute("class", "RecuFin");
        btnSubmit.innerHTML = "Enviar";


         LabelEmail.innerHTML = "Email";
         LabelPass.innerHTML = "Nueva Contraseña";
        


        form.appendChild(LabelEmail);
        form.appendChild(inputEmail);
        form.appendChild(LabelPass);
        form.appendChild(inputPass);
        form.appendChild(Parrafo);
        form.appendChild(btnSubmit);
        modal.appendChild(form);
        modal.showModal();

        
        
        
    
    form.addEventListener("submit",async(e)=>{
        e.preventDefault();
       
        const DataPass = async (inputEmail, inputPass)=>{
        try{
        

           const res = await fetch("RecuPass/changPass", {
               method: "PUT",
               headers:{
                   
                   "Content-Type": "application/json",
                },
                body: JSON.stringify({inputEmail, inputPass})
            });
            
            if(res.status === 409){

                const data = await res.text();
                const obj = JSON.parse(data);
                Parrafo.style.display = "block";
                Parrafo.style.fontSize = "16px";
                Parrafo.style.color = "red";
                Parrafo.style.margin = "0";
                Parrafo.innerHTML =  obj.mensaje;
            }else if(res.status === 200){
                const data = await res.text();
                const obj = JSON.parse(data);
                const volviendo = document.createElement("span");
                volviendo.innerHTML = "Volviendo al inicio...";
                volviendo.style.color = "rgba(28, 60, 202, 1)"
                modal.removeChild(form);
                modal.appendChild(Parrafo);
                modal.appendChild(volviendo);

                Parrafo.style.display = "block";
                Parrafo.style.fontSize = "18px";
                Parrafo.style.color = "green";
                Parrafo.innerHTML =  obj.mensaje;
                setTimeout(() => {
                    return  window.location.href = "/";
                    
                }, 5000);
            }
         
        
        
        
    }catch(err){
        console.log(err);
    }  
}
DataPass(inputEmail.value, inputPass.value );
})

    }
})
