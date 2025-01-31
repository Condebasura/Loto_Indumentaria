const form = document.querySelector(".formAdd");
let nombre = document.querySelector(".ProductName"),
stock = document.querySelector(".stock"),
descuento = document.querySelector(".Desc"),
precio = document.querySelector(".bestprecio"),
cuotas = document.querySelector(".cuotas"),
seccion = document.querySelector(".seccion"),
subSeccion = document.querySelector(".sub_seccion"),
archivos = document.querySelector(".imagen");
let modalContainer = document.getElementById("modalContainer");
console.log(modalContainer);


archivos.addEventListener("change", (e)=>{
   const ElArchivo = e.target.files;
   console.log(`se seleccionaron ${ElArchivo.length} archivos`)
})

form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    
        let fromData = new FormData(e.target);
        fromData.append("nombre", nombre.value);
        fromData.append("stock", stock.value);
        fromData.append("descuento", descuento.value);
        fromData.append("precio", precio.value);
        fromData.append("cuotas", cuotas.option);
        fromData.append("seccion",seccion.option);
        fromData.append("subSeccion", subSeccion.option);
        try{
            const res = await fetch("/admin/addProducto", {
                method: "POST",
                body: fromData
            });
            
            const data = await res.json();
            
            if(res.ok){
                const modTbi = document.createElement("div");
                const modDialog = document.createElement("div");
                const modContent = document.createElement("div");
                const modHeader = document.createElement("div");
                let modTitulo = document.createElement("h5");
                const modBody = document.createElement("div");
                let parrafo = document.createElement("p");
                
                modTitulo.innerHTML = "Exito !"
                parrafo.innerHTML = data.mensaje;
                
                modTbi.setAttribute("class", "modal");
                modTbi.setAttribute("tabindex", "-1");
                modDialog.setAttribute("class", "modal-dialog");
                modContent.setAttribute("class", "modal-content");
                modHeader.setAttribute("class", "modal-header text-bg-success");
                modTitulo.setAttribute("class", "modal-title");
                modBody.setAttribute("class", "modal-body");
                
                modHeader.appendChild(modTitulo);
                modBody.appendChild(parrafo);
                
                modContent.appendChild(modHeader);
                modContent.appendChild(modBody);
                modDialog.appendChild(modContent);
                modTbi.appendChild(modDialog);
                
                modalContainer.innerHTML = "";
                modalContainer.appendChild(modTbi);

                const bootstrapModal = new bootstrap.Modal(modTbi);
                bootstrapModal.show();
                
                setTimeout(() => {
                return location.reload();    
                }, 3000);
            }else if(res.status === 209){
                
                const modTbi = document.createElement("div");
                const modDialog = document.createElement("div");
                const modContent = document.createElement("div");
                const modHeader = document.createElement("div");
                let modTitulo = document.createElement("h5");
                const modBody = document.createElement("div");
                let parrafo = document.createElement("p");
                
                modTitulo.innerHTML = "Oops ! !"
                parrafo.innerHTML = data.mensaje;
                
                modTbi.setAttribute("class", "modal");
                modTbi.setAttribute("tabindex", "-1");
                modDialog.setAttribute("class", "modal-dialog");
                modContent.setAttribute("class", "modal-content");
                modHeader.setAttribute("class", "modal-header text-bg-danger");
                modTitulo.setAttribute("class", "modal-title");
                modBody.setAttribute("class", "modal-body");
                
                modHeader.appendChild(modTitulo);
                modBody.appendChild(parrafo);
                
                modContent.appendChild(modHeader);
                modContent.appendChild(modBody);
                modDialog.appendChild(modContent);
                modTbi.appendChild(modDialog);
                
                modalContainer.innerHTML = "";
                modalContainer.appendChild(modTbi);

                const bootstrapModal = new bootstrap.Modal(modTbi);
                bootstrapModal.show();
                
            }
        }catch(err){
            console.log("Error", err)
        }
    });
