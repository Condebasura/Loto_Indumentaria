
const logout = document.querySelector(".salir");




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






