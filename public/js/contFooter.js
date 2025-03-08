let modalcontainer = document.getElementById("modalContainer");
const acercaDe = document.querySelector(".Acerca-de");
const PolDeDevolucion = document.querySelector(".PolDeDevolucion");
const Contacto  = document.querySelector(".Contacto");
const PregFrec = documetn.querySelector(".pregFrecu");


const funcModal = (textBody, titulo)=>{
    modalcontainer.innerHTML = "";
    
     const modtabi = document.createElement("div");
     const modDialog = document.createElement("div");
     const modContent = document.createElement("div")
     const modHeader = document.createElement("div");
    
     const btnClose = document.createElement("button");
     const modBody = document.createElement("div");
     
    
     modtabi.setAttribute("class","modal");
     modtabi.setAttribute("tabindex","-1");
     modDialog.setAttribute("class","modal-dialog");
     modContent.setAttribute("class","modal-content");
     modHeader.setAttribute("class","modal-header text-bg-primary");
     titulo.setAttribute("class","modal-title");
     btnClose.setAttribute("class","btn-close");
     btnClose.setAttribute("type","button");
     btnClose.setAttribute("data-bs-dismiss","modal");
     btnClose.setAttribute("aria-label","Close");
     contCards.setAttribute("class", "row p-5 text-center justify-content-center");
    
     modtabi.appendChild(modDialog);
     modDialog.appendChild(modContent);
     modContent.appendChild(modHeader);
     modContent.appendChild(modBody);
  
     modHeader.appendChild(titulo);
     modHeader.appendChild(btnClose);
  
     modBody.appendChild(textBody);
   
      
   modalcontainer.innerHTML = "";
  modalcontainer.appendChild(modtabi);
  
  modtabi.removeAttribute("inert");
  modtabi.removeAttribute("aria-hidden");
      const bootstrapModal = new bootstrap.Modal(modtabi);
              bootstrapModal.show();
         
      modtabi.addEventListener("hidden.bs.modal", ()=>{
        modalcontainer.innerHTML = "";
        modtabi.setAttribute("aria-hidden", "true");
        modtabi.setAttribute("inert", "")
      })
}

acercaDe.