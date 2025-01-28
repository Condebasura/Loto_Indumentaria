
const logout = document.querySelector(".salir");
const formEdit = document.querySelector(".formEdit");


Add.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target){
      // buscar el error, al estar en el editor y cambiar a agregar no edaparece el editor
        boxNames.innerHTML = "";
        boxContent.innerHTML = "";
        MinEdit.innerHTML = "";
        formAdd.style.display = "flex";
        
        
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






