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
        const editPerfil = document.createElement("button");
        const CajaCanvas = document.createElement("div");
        const favoritos = document.createElement("a");
        const compras = document.createElement("a");

        
        
    
        Logout.setAttribute("class", "Logout ms-1 btn btn-danger");
        editPerfil.setAttribute("class", "btn btn-outline-success rounded-circle");
        editPerfil.setAttribute("data-bs-toggle", "offcanvas");
        editPerfil.setAttribute("data-bs-target", "#offcanvasExample");
        editPerfil.setAttribute("aria-controls", "offcanvasExample");

        CajaCanvas.setAttribute("class", "offcanvas offcanvas-start");
        CajaCanvas.setAttribute("tabindex", "-1");
        CajaCanvas.setAttribute("id", "offcanvasExample");
        CajaCanvas.setAttribute("aria-labelledby", "offcanvasExampleLabel");
       
        Logout.innerHTML = "Logout";
        editPerfil.innerHTML = `${datos.nombre[0]}`;
        favoritos.innerHTML = "Favoritos";
        compras.innerHTML = "Compras";
        

        DivUser.removeChild(Login);
        DivUser.removeChild(Create);
        DivUser.appendChild(editPerfil);
        DivUser.appendChild(Logout);
        editPerfil.appendChild(CajaCanvas);
        
        
        Logout.addEventListener("click", async (e)=>{
            try {
                if(e.target){
                    await fetch("/logout",{
                        method:"GET",
                    });
                    DivUser.removeChild(Logout);
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