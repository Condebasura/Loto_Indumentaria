
const logout = document.querySelector(".salir");



// Muestra el formulario para agregar productos
Add.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target){
      boxCargas.innerHTML = "";
        boxCargas.appendChild(formAdd);
       
      boxNames.innerHTML = "";
      if(!MinEdit.classList.contains("d-none")){

        MinEdit.classList.remove("Min_Edit","card"
,"mb-5" , "pe-2");
              
              MinEdit.classList.add("d-none");
            }
      formAdd.style.display = "flex";
        
        
    }
})

// Cierra la sesion
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
// Sierra la sesion al salir de la pagina (cerrarla)
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






