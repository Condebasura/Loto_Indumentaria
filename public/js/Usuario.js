const DivUser = document.querySelector(".Login_Regis");
const Create = document.querySelector(".Create");
const Login = document.querySelector(".Login");
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
        const datos = decodedPayload;
        
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
        const favoritos = document.createElement("li");
        const compras = document.createElement("li");
        
    
        Logout.setAttribute("class", "Logout ms-1 btn btn-danger");

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

        
        canHeader.setAttribute("class","offcanvas-header border-bottom");
        title.setAttribute("class", "offcanvas-title");
        title.setAttribute("id", "offcanvasExampleLabel");
        btnClose.setAttribute("type","button");
        btnClose.setAttribute("class","btn-close");
        btnClose.setAttribute("data-bs-dismiss","offcanvas");
        btnClose.setAttribute("aria-label","Close");
       
        canBody.setAttribute("class", "offcanvas-body p-0");
        ulFavComp.setAttribute("class","list-group border-1 mt-5");
        favoritos.setAttribute("class", "list-group-item fav ");
        compras.setAttribute("class", "list-group-item comp");
        perfil.setAttribute("class", "list-group-item per");

       canFooter.setAttribute("class", "offcanvas-footer mb-2 me-2 text-end justify-content-end");


        Logout.innerHTML = "Logout";
        editPerfil.innerHTML = `${datos.nombre[0]}`;
        title.innerHTML = `${datos.nombre}`;
        perfil.innerHTML = "Perfil";
        favoritos.innerHTML = "Favoritos";
        compras.innerHTML = "Compras";
        
        canHeader.appendChild(title);
        canHeader.appendChild(btnClose);
        
        ulFavComp.appendChild(perfil)
         ulFavComp.appendChild(favoritos)
         ulFavComp.appendChild(compras);
         canBody.appendChild(ulFavComp);
        
         canFooter.appendChild(Logout);
        
         CajaCanvas.appendChild(canHeader)
        CajaCanvas.appendChild(canBody);
        CajaCanvas.appendChild(canFooter);
        document.body.appendChild(CajaCanvas);
        
        DivUser.removeChild(Login);
        DivUser.removeChild(Create);
        DivUser.appendChild(editPerfil);
        
        
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