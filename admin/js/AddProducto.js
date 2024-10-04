const form = document.querySelector(".formAdd");
let nombre = document.querySelector(".ProductName"),
stock = document.querySelector(".stock"),
descuento = document.querySelector(".Desc"),
precio = document.querySelector(".bestprecio"),
cuotas = document.querySelector(".cuotas"),
seccion = document.querySelector(".seccion"),
subSeccion = document.querySelector(".sub_seccion"),
archivos = document.querySelector(".image");

document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault();

    if(e.target){
        let modal = document.getElementById("modal");
        const form = document.createElement("form");
        const titulo = document.createElement("spam");
        const LabelUser = document.createElement("label");
        const InputUser = document.createElement("input");
       const LabelPass = document.createElement("label");
        const InputPass = document.createElement("input");
        const Create = document.createElement("a");
        Create.innerHTML = "Crear Usuario";
        titulo.innerHTML = "Login";
        LabelUser.innerHTML = "Usuario";
        LabelPass.innerHTML = "Pasword";
       modal.style.backgroundColor = " rgba(0, 0, 0, 0.264)";
       form.style.display = "flex";
       form.style.flexDirection = "column";
       form.style.gap =  ".5em";
       Create.style.fontSize = "10px";
        form.appendChild(titulo)
        form.appendChild(LabelUser)
        form.appendChild(InputUser)
        form.appendChild(LabelPass)
        form.appendChild(InputPass)
        form.appendChild(Create)
        modal.appendChild(form)
        modal.showModal();
    }
})
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
                let modal = document.getElementById("modal");
                let parrafo = document.createElement("p");
                modal.innerHTML = "";
                parrafo.innerHTML = data.mensaje;
                modal.appendChild(parrafo);
                modal.showModal();
            }else if(res.status === 209){
                let modal = document.getElementById("modal");
                let parrafo = document.createElement("p");
                modal.innerHTML = "";
                parrafo.innerHTML = data.mensaje;
                modal.appendChild(parrafo);
                modal.showModal();
            }
        }catch(err){
            console.log("Error", err)
        }
    });
