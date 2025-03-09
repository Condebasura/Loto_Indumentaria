let modalcontainer = document.getElementById("modalContainer");
const acercaDe = document.querySelector(".Acerca-de");
const PolDeDevolucion = document.querySelector(".PolDeDevolucion");
const Contacto  = document.querySelector(".Contacto");
const PregFrec = document.querySelector(".pregFrecu");


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
     textBody.setAttribute("class", "row p-5 justify-content-center");
    
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

acercaDe.addEventListener("click", (e)=>{
  e.preventDefault();
  if(e.target){

    let titulo = document.createElement("h4");
    titulo.innerHTML = "Acerca de";
    let textBody = document.createElement("p");
    textBody.innerHTML = "En Loto Indumentaria, creemos que la moda es una forma de expresión. Nos dedicamos a ofrecer ropa de calidad, con diseños únicos y cómodos para cada ocasión. Nuestro objetivo es brindarte una experiencia de compra fácil y segura, asegurándonos de que encuentres el estilo que mejor te represente";
    
    funcModal(textBody, titulo);
  }


});

PolDeDevolucion.addEventListener("click",(e)=>{
  e.preventDefault();
  if(e.target){
    let titulo = document.createElement("h4");
    titulo.innerHTML = "Politicas de Devolución";
    let textBody = document.createElement("div");
    textBody.innerHTML ="<p>Si no estás satisfecho con tu compra, puedes solicitar un cambio o devolución dentro de los 7 días posteriores a la recepción del pedido</p><br><p>•La prenda debe estar en su estado original, sin uso y con etiquetas.</p><br><p>•No aceptamos devoluciones en productos en oferta o personalizados.</p><br><p>•El costo del envío en devoluciones es a cargo del cliente, salvo por productos con defectos de fábrica.</p><br><p>•Para gestionar una devolución, contáctanos a través de nuestro email o WhatsApp.</p>"
  
    funcModal(textBody, titulo);
  
  }
});

Contacto.addEventListener("click", (e)=>{
  e.preventDefault();
  if(e.target){
    let titulo = document.createElement("h4");
    titulo.innerHTML = "Contacto";
    let textBody = document.createElement("div");
    textBody.innerHTML = "<p><i class='fa-solid fa-envelope-open-text'></i> Email: Loto_Indumentaria@gmail.com</p><br><p><i class='fa-brands fa-whatsapp'></i> Whatsapp: 3435644566</p><br><p><i class='fa-solid fa-mobile'></i> Redes Sociales: <i class='fa-brands fa-instagram me-1'></i> <i class='ms-1 fa-brands fa-facebook'></i></p>";

    funcModal(textBody, titulo);

  }
});

PregFrec.addEventListener("click",(e)=>{
  e.preventDefault();
  if(e.target){
    let titulo = document.createElement("h4");
    titulo.innerHTML = "Preguntas Frecuentes (FAQ)";
    let textBody = document.createElement("div");
    textBody.innerHTML = "<p class='link-success'>¿Cuáles son los métodos de pago?</p><br><p>• Aceptamos tarjetas de crédito, débito, Pagofacil y Rapipago.</p><br><p class='link-success'>¿Cuánto tardan los envíos?</p><br><p>• Los envíos demoran entre 3 y 7 días hábiles según la ubicación.</p><br><p class='link-success'>¿Puedo cambiar un producto?</p><br><p>• Sí, los cambios pueden realizarse dentro de los 7 días posteriores a la compra.</p><br><p class='link-success'>¿Cómo sé qué talla elegir?</p><br><p>• En cada producto encontrarás una tabla de medidas para ayudarte a elegir la talla correcta.</p>";

    funcModal(textBody, titulo);


  }
})