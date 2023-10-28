let datos = document.querySelectorAll(".name");
 let search = document.querySelector(".input");
let lista = document.querySelector("#result");
// en camino a que funcione el buscador, falta tiempo ,!!!
search.addEventListener("keypress", async (e) => {
   if(e.target.matches(".input")){
      if(e.key === "Enter"){
         let modal = document.getElementById("modal");
         modal.showModal();
         let parrafo = document.createElement("p");
         parrafo.textContent = e.target.value;
         lista.appendChild(parrafo);
       
   }
}


})

