let modalcontainer = document.getElementById("modalContainer");
const DivUser = document.querySelector(".Login_Regis");
const Create = document.querySelector(".Create");
const Login = document.querySelector(".Login");

// Carga los datos del usuario al logearse
const dataUsuario = async () => {

    const tokenName = 'mitoken';
    const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));

    const cookie = cookies.find(([name, value]) => name === tokenName);
    const tokenValue = cookie[1];
    const tokenPayload = tokenValue.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(tokenPayload));
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    
    const res = await fetch('usuario', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getCookie('mitoken')}`,
        }
    });

    if (!res.ok) {
        const data = await res.json();
        return data.mensaje;


    } else {
        let datos = decodedPayload;
        
        const Logout = document.createElement("button");
        const editPerfil = document.createElement("a");
        const CajaCanvas = document.createElement("div");
        const canHeader = document.createElement("div");
        let title = document.createElement("h5");
        const btnClose = document.createElement("button");
        const canBody = document.createElement("div");
        const canFooter = document.createElement("div");
        const ulFavComp = document.createElement("ul");
       
        const perfil = document.createElement("li");
        const LogoPerfil = document.createElement("i");
        const spanPerfil = document.createElement("span");

        const favoritos = document.createElement("li");
        const LogoFav = document.createElement("i");
        const spanFav = document.createElement("span");

       
        const compras = document.createElement("li");
        const LogoComp = document.createElement("i");
        const spanCompras = document.createElement("span"); 
        
    
        Logout.setAttribute("class", "Logout  btn btn-danger");

        editPerfil.setAttribute("class", "btn btn-outline-success rounded-circle");
        editPerfil.setAttribute("data-bs-toggle", "offcanvas");
        editPerfil.setAttribute("href", "#offcanvasExample");
        editPerfil.setAttribute("role", "button");
        editPerfil.setAttribute("aria-controls", "offcanvasExample");
        editPerfil.setAttribute("data-bs-target", "#offcanvasExample");
    
        CajaCanvas.setAttribute("class", "offcanvas offcanvas-start");
        CajaCanvas.setAttribute("tabindex", "-1");
        CajaCanvas.setAttribute("id", "offcanvasExample");
        CajaCanvas.setAttribute("aria-labelledby", "offcanvasExampleLabel");

        
        canHeader.setAttribute("class","offcanvas-header border-bottom text-bg-primary");
        title.setAttribute("class", "offcanvas-title");
        title.setAttribute("id", "offcanvasExampleLabel");
        btnClose.setAttribute("type","button");
        btnClose.setAttribute("class","btn-close");
        btnClose.setAttribute("data-bs-dismiss","offcanvas");
        btnClose.setAttribute("aria-label","Close");
       
        canBody.setAttribute("class", "offcanvas-body p-0");
        ulFavComp.setAttribute("class","list-group border-1 mt-5");
        favoritos.setAttribute("class", "list-group-item fav ");
        LogoFav.setAttribute("class", "fa-solid fa-heart");

        compras.setAttribute("class", "list-group-item comp");
        LogoComp.setAttribute("class", "fa-solid fa-cart-shopping ");


        perfil.setAttribute("class", "list-group-item per");
        LogoPerfil.setAttribute("class" , "fa-solid fa-address-card");

       canFooter.setAttribute("class", "offcanvas-footer  text-end justify-content-end text-bg-dark p-3");


        Logout.innerHTML = "Logout";
        editPerfil.innerHTML = `${datos.nombre[0]}`;
        title.innerHTML = `${datos.nombre}`;
        spanPerfil.innerHTML = "  Perfil";
        spanFav.innerHTML = "  Favoritos";
        spanCompras.innerHTML = "  Compras";
        
        canHeader.appendChild(title);
        canHeader.appendChild(btnClose);
        perfil.appendChild(LogoPerfil);
        perfil.appendChild(spanPerfil);
        ulFavComp.appendChild(perfil);

        compras.appendChild(LogoComp);
        compras.appendChild(spanCompras);
         
        favoritos.appendChild(LogoFav);
        favoritos.appendChild(spanFav);

        ulFavComp.appendChild(compras);
         ulFavComp.appendChild(favoritos)
         canBody.appendChild(ulFavComp);
        
         canFooter.appendChild(Logout);
        
         CajaCanvas.appendChild(canHeader)
        CajaCanvas.appendChild(canBody);
        CajaCanvas.appendChild(canFooter);
        document.body.appendChild(CajaCanvas);
        
        DivUser.removeChild(Login);
        DivUser.removeChild(Create);
        DivUser.appendChild(editPerfil);
        
        perfil.addEventListener("click", (e)=>{
            modalcontainer.innerHTML = "";

    
           
            
            if(e.target){

                const modalPerf = document.createElement("div");
            modalPerf.setAttribute("class", "modal  modalPerf");
            modalPerf.setAttribute("tabindex", "-1");

           


            modalPerf.innerHTML = `<div class="modal-dialog">
            <div class="modal-content contenido">
            <div class="modal-header border-0 text-bg-primary p-3">
            <h5 class="modal-title border-bottom">Datos personales</h5>
            </div>

            <div class="modal-body">
            <form class="form m-3 " id="form-Actualizar">
            <div class="row g-3 ">
            <div class="col-6 form-floating">
             <input
             name="nombre"
             id="name floatingInput"
             class="form-control Nombre"
             type="text"
             placeholder=
             />
             <label class="input-label" for="floatingInput">Nombre
             </label>

            </div>
            <div class="col-6 form-floating">
             <input
             name="apellido"
             id="floatingInput"
             class="form-control Apellido"
             type="text"
             placeholder=
             />
             <label class="input-label" for="floatingInput">Apellido
             </label>

            </div>

            <div class="col-6 form-floating text-truncate">
             <input
             name="correo"
             id="email floatingInput"
             class="form-control email"
             type="email"
             placeholder= "email"
             disabled
             />
             <label class="input-label" for="floatingInput">email
             </label>

            </div>
             <div class="col-6 form-floating">
             <input
             name="password"
             id=" pass floatingInput"
             class="form-control Password"
             type="password"
             placeholder="password"
             />
             <label class="input-label" for="floatingInput">password
             </label>

            </div>

            </div>
            </form>
            </div>
            <div class="modal-footer text-bg-dark p-3">
            <button type="button" class="btn btn-outline-warning Cancelar  " id="Cancelar">Cancelar
            </button>
            <button type="submit" class="btn btn-outline-success "form="form-Actualizar" id="Guardar">Guardar
            </button>
            </div>
            
            
            </div>
            </div>`
            ;
            
             modalcontainer.innerHTML = "";
             
            modalcontainer.appendChild(modalPerf);
           

            modalPerf.removeAttribute("inert");
            modalPerf.removeAttribute("aria-hidden");
                const bootstrapModal = new bootstrap.Modal(modalPerf);
                        bootstrapModal.show();
                   
                modalPerf.addEventListener("hidden.bs.modal", ()=>{
                  modalcontainer.innerHTML = "";
                  modalPerf.setAttribute("aria-hidden", "true");
                  modalPerf.setAttribute("inert", "");
                })

                const form = document.querySelector("form");
                let nombre = document.querySelector('[name="nombre"]');
                let apellido = document.querySelector('[name="apellido"]');
                 let correo = document.querySelector('[name="correo"]');
                  correo.setAttribute("disabled", "");
                  let password = document.querySelector('[name="password"]')
                 
                 nombre.value = `${datos.nombre}`;  
                 apellido.value = `${datos.apellido}`;
                 correo.value = `${datos.email}`;
               
                
              
                   
                   form.addEventListener("submit", async(e)=>{
                    e.preventDefault();
                    
                   const Actdata = async(nombre, apellido, correo, password)=>{

                    try {
                        const res = await fetch('/usuario/update',{
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({nombre, apellido, correo, password})
                        });
                        if(!res.ok){
                            console.log("Ocurrio un error al actualizar los datos");
                        }
                      else if(password.value === ""){
                          password.value = `${datos.password}`;
                        }
                        else{

                            const dat = await res.json();
                            
                            let newToken = dat.token;
                            
                            const newtokens = `${tokenName}=${newToken}`.split(';').map(cookie => cookie.trim().split('='));
                            ;
                            const lecokie = newtokens.find(([name, value]) => name === tokenName);
                            const tokVlue = lecokie[1];
                           
                            
                            const toquepayloda = tokVlue.split('.')[0];
                            const delcodepaylodad = JSON.parse(window.atob(toquepayloda));
                            
                            
                            let newdatos = delcodepaylodad;
                           
                           
                            document.cookie = `${tokenName}=${newToken}`;
                            return window.location.reload();
                        }

                        
                    } catch (error) {
                        
                    }
                }
                
                Actdata(nombre.value, apellido.value,correo.value, password.value)
            })
            
            document.getElementById("Cancelar").addEventListener("click", ()=>{
                modalcontainer.innerHTML = "";
                modalPerf.setAttribute("aria-hidden", "true");
                modalPerf.setAttribute("inert", "");
                bootstrapModal.hide();
            });
               

               
              
            }
        });


        
        Logout.addEventListener("click", async (e)=>{
            try {
                if(e.target){
                    await fetch("/logout",{
                        method:"GET",
                    });
                    const offcanvasInstance = bootstrap.Offcanvas.getInstance(CajaCanvas)
                    offcanvasInstance.hide();
                    DivUser.removeChild(editPerfil);
                    DivUser.appendChild(Login);
                    DivUser.appendChild(Create);
                    
                    
                }
            } catch (error) {
                console.log(error)
            }
        })
    }
}


dataUsuario();