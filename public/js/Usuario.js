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
        const Perfil = document.createElement("span");
        const Logout = document.createElement("span");
        Perfil.setAttribute("class", "PerfilUser");
        Logout.setAttribute("class", "Logout");
        Perfil.innerHTML = `${datos.nombre}`;
        Logout.innerHTML = "Logout";
        DivUser.removeChild(Login);
        DivUser.removeChild(Create);
        DivUser.appendChild(Perfil);
        DivUser.appendChild(Logout);
        
        Logout.addEventListener("click", async (e)=>{
            try {
                if(e.target){
                    await fetch("/logout",{
                        method:"GET",
                    });
                    DivUser.removeChild(Logout);
                    DivUser.removeChild(Perfil);
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