
window.addEventListener("DOMContentLoaded", (e) => {
    if (e.target) {
        const urlparams = new URLSearchParams(window.location.search);
        const token = urlparams.get('token');
        const dataDecode = jwt_decode(token);
        console.log(dataDecode);
        const email = dataDecode.UserEmail;


        const elBody = document.querySelector("body");
        const card = document.createElement("div");
        
        const cardHeader = document.createElement("div");
        const titulo = document.createElement("h5");
        const cardBody = document.createElement("div");

        const form = document.createElement("form");
        const divEmail = document.createElement("div");
        const LabelEmail = document.createElement("label");
        const inputEmail = document.createElement("input");
        const divPass = document.createElement("div");
        const LabelPass = document.createElement("label");
        const inputPass = document.createElement("input");
        const Parrafo = document.createElement("p");
        const btnSubmit = document.createElement("button");
         

         elBody.setAttribute("class", " d-flex text-bg-secondary p-3 text-center justify-content-center")
        card.setAttribute("class", "card mt-5");
        
       
        cardHeader.setAttribute("class", "card-header text-bg-success text-center justify-content-center");
        cardBody.setAttribute("class", "card-body p-5");
        titulo.setAttribute("class", "card-title");

         form.setAttribute("class", " justify-content-center text-center");
        
        divEmail.setAttribute("class","form-floating mb-3");
        LabelEmail.setAttribute("for", "floatingInput");
        inputEmail.setAttribute("id", "floatingInput");
        inputEmail.setAttribute("type", "email");
        inputEmail.setAttribute("class", "email form-control");
        inputEmail.setAttribute("name", "elmail");
        inputEmail.setAttribute("placeholder", "Email");
        inputEmail.setAttribute("readonly", "");
        inputEmail.value = email;

        divPass.setAttribute("class","form-floating mb-3");
        LabelPass.setAttribute("for", "floatingPassword");
        inputPass.setAttribute("id", "floatingPassword");
        inputPass.setAttribute("type", "password");
        inputPass.setAttribute("name", "password");
        inputPass.setAttribute("class", "contraseña form-control");
        inputPass.setAttribute("placeholder", "Nueva Contraseña");
        inputPass.setAttribute("required", "");
        Parrafo.style.display = "none";



        btnSubmit.setAttribute("type", "submit");
        btnSubmit.setAttribute("class", "RecuFin btn btn-primary");
        
        card.style.maxWidth = "18rem";
        titulo.innerHTML = "Cambiar Contraseña";
        LabelEmail.innerHTML = "Email";
        LabelPass.innerHTML = "Nueva Contraseña";
        btnSubmit.innerHTML = "Enviar";

         cardHeader.appendChild(titulo);
         divEmail.appendChild(inputEmail);
         divEmail.appendChild(LabelEmail);
         divPass.appendChild(inputPass);
         divPass.appendChild(LabelPass);
        form.appendChild(divEmail);
        form.appendChild(divPass);
        form.appendChild(Parrafo);
        form.appendChild(btnSubmit);
        
        cardBody.appendChild(form);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        elBody.appendChild(card);

       

     




            document.addEventListener("keyup", (e)=>{
                e.preventDefault();
                if(e.key === "Escape"){
                    window.location.reload();
                }
            });

          



        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const DataPass = async (inputEmail, inputPass) => {
                try {


                    const res = await fetch("RecuPass/changPass", {
                        method: "PUT",
                        headers: {

                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ inputEmail, inputPass })
                    });

                    if (res.status === 409) {

                        const data = await res.text();
                        const obj = JSON.parse(data);
                        Parrafo.style.display = "block";
                        Parrafo.style.fontSize = "16px";
                        Parrafo.style.color = "red";
                        Parrafo.style.margin = "0";
                        Parrafo.innerHTML = obj.mensaje;
                    } else if (res.status === 200) {
                        const data = await res.text();
                        const obj = JSON.parse(data);
                        const volviendo = document.createElement("span");
                        volviendo.innerHTML = "Volviendo al inicio...";
                        volviendo.style.color = "rgba(28, 60, 202, 1)"
                        cardBody.removeChild(form);
                        
                        cardBody.appendChild(volviendo);

                        Parrafo.style.display = "block";
                        Parrafo.style.fontSize = "18px";
                        Parrafo.style.color = "green";
                        Parrafo.innerHTML = obj.mensaje;
                        setTimeout(() => {
                            return window.location.href = "/";

                        }, 5000);
                    }




                } catch (err) {
                    console.log(err);
                }
            }
            DataPass(inputEmail.value, inputPass.value);
        })

    }
})
