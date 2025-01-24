
const logout = document.querySelector(".salir");


Add.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target){
     formAdd.style.display = "flex";
        boxNames.innerHTML = "";
        boxContent.innerHTML = "";
        MinEdit.innerHTML = "";
    }
})


logout.addEventListener("click", async (e) => {
    try {

        if (e.target) {
             await fetch("/admin/logout", {
                method: "GET",
                })
                
            return window.location.href = "/admin/IniciarCrear";

        }
    } catch (err) {
        console.log(err)
    }

});
// Configurar si es posible la salida sin hacer logout, o dar aviso previo si no es posible
logout.addEventListener("unload", async (e) => {
    try {

        if (e.target) {
             await fetch("/admin/logout", {
                method: "GET",
                })
        }
    } catch (err) {
        console.log(err)
    }

});






